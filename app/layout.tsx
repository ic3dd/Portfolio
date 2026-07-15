import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { getSiteUrl } from "@/lib/site";

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Santiago Esteves | Programador Júnior",
    template: "%s | Santiago Esteves",
  },
  description:
    "Portfólio de Santiago Esteves — TGPSI, software, hardware, redes e Inteligência Artificial. Disponível para estágio e primeira oportunidade júnior.",
  keywords: [
    "Santiago Esteves",
    "programador júnior",
    "TGPSI",
    "desenvolvimento web",
    "PHP",
    "SQL",
    "portfólio",
    "Portugal",
    "estágio",
  ],
  authors: [{ name: "Santiago Esteves" }],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: siteUrl,
    siteName: "Santiago Esteves",
    title: "Santiago Esteves | Programador Júnior",
    description:
      "TGPSI · Software · IA · Hardware. Disponível para estágio e primeira oportunidade júnior.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Santiago Esteves — Portfólio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago Esteves | Programador Júnior",
    description:
      "TGPSI · Software · IA · Hardware. Disponível para estágio e primeira oportunidade júnior.",
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
