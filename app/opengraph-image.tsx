import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Santiago Esteves — Portfólio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(145deg, #0f172a 0%, #1e40af 45%, #172554 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 48,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#f8fafc",
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}
        >
          Santiago Esteves
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#93c5fd",
            marginTop: 20,
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Programador Júnior · Web · PHP · SQL
        </div>
      </div>
    ),
    { ...size }
  );
}
