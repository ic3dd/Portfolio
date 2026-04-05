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
    "Portfólio de Santiago Esteves — Gestão e Programação de Sistemas Informáticos, desenvolvimento web, PHP, SQL e cibersegurança. Estágio Erasmus+ na Croácia.",
  keywords: [
    "Santiago Esteves",
    "programador júnior",
    "desenvolvimento web",
    "PHP",
    "SQL",
    "portfólio",
    "Portugal",
  ],
  authors: [{ name: "Santiago Esteves" }],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: siteUrl,
    siteName: "Santiago Esteves",
    title: "Santiago Esteves | Programador Júnior",
    description:
      "Portfólio — desenvolvimento web, PHP, SQL e cibersegurança. Disponível para estágio e primeira oportunidade júnior.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago Esteves | Programador Júnior",
    description:
      "Portfólio — desenvolvimento web, PHP, SQL e cibersegurança. Disponível para estágio e primeira oportunidade júnior.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
