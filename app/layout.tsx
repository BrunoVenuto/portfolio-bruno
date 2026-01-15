import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bruno | Desenvolvedor Front-End",
  description: "Criação de landing pages e sites profissionais focados em conversão.",
  manifest: "/manifest.json",
  keywords: [
    "desenvolvedor front-end",
    "desenvolvedor freelance",
    "landing page",
    "site profissional",
    "react",
    "next.js",
  ],
  authors: [{ name: "Bruno" }],
  creator: "Bruno",

  // ====== NOVO: ÍCONES / PWA ======
  applicationName: "Brunotech",

  icons: {
    icon: [
      { url: "/app-icon.png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },

  // ====== NOVO: OPEN GRAPH ======
  openGraph: {
    title: "Bruno | Desenvolvedor Front-End",
    description: "Criação de landing pages e sites profissionais focados em conversão.",
    url: "https://portfolio-bruno-pi.vercel.app/",
    siteName: "Brunotech",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Brunotech",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // ====== NOVO: TWITTER ======
  twitter: {
    card: "summary",
    title: "Bruno | Desenvolvedor Front-End",
    description: "Criação de landing pages e sites profissionais focados em conversão.",
    images: ["/icon.png"],
  },

  // ====== NOVO: COR DO TEMA ======
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-K42HNR4L'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K42HNR4L');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K42HNR4L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}
