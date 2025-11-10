import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/toaster";
import { WhatsappButton } from "@/components/whatsapp-button";
import { getDictionary } from "@/server/get-dictionary";
import { Locale, i18n } from "@/i18n-config";
import Script from "next/script";

export const metadata: Metadata = {
  title: "RevivBali",
  description: "RevivBali",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const lang = params.lang as Locale || i18n.defaultLocale;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TDW3L66J');`}
        </Script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn("min-h-screen font-body antialiased")}>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDW3L66J"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <div className="relative flex min-h-screen flex-col">
          <SiteHeader dictionary={dictionary} />
          <main className="flex-1">{children}</main>
          <SiteFooter dictionary={dictionary.footer} />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
