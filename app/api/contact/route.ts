import { NextResponse } from "next/server";

const MAX = { name: 120, email: 254, message: 8000 };

function isNonEmptyString(v: unknown, max: number): v is string {
  return typeof v === "string" && v.trim().length > 0 && v.length <= max;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const { name, email, message, botcheck } = body as Record<string, unknown>;

  if (typeof botcheck === "string" && botcheck.trim() !== "") {
    return NextResponse.json({ ok: false, error: "rejected" }, { status: 400 });
  }

  if (!isNonEmptyString(name, MAX.name) || !isNonEmptyString(email, MAX.email) || !isNonEmptyString(message, MAX.message)) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
  if (web3Key) {
    const w3 = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: web3Key,
        subject: `[Portfólio] Mensagem de ${name.trim()}`,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      }),
    });
    const data = (await w3.json()) as { success?: boolean; message?: string };
    if (!w3.ok || !data.success) {
      return NextResponse.json({ ok: false, error: "provider" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM_EMAIL;
  const resendTo = process.env.CONTACT_TO_EMAIL;
  if (resendKey && resendFrom && resendTo) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: resendFrom,
        to: [resendTo],
        reply_to: email.trim(),
        subject: `[Portfólio] ${name.trim()}`,
        html: `<p><strong>Nome:</strong> ${escapeHtml(name.trim())}</p><p><strong>Email:</strong> ${escapeHtml(email.trim())}</p><p><strong>Mensagem:</strong></p><pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message.trim())}</pre>`,
      }),
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: "provider" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
