import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="https://cdn.prod.website-files.com/667c57e6f9254a4b6d914440/667d7104644c621965495f6e_LogoMark.svg" />

        {/* Primary Meta Tags */}
        <meta name="title" content="VaultNAD" />
        <meta name="description" content="A brief description of your website or project." />
        <meta name="keywords" content="Your, Keywords, Here" />
        <meta name="author" content="Your Name" />
        <meta name="robots" content="index, follow" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.VaultNad.xyz/" />
        <meta property="og:title" content="VaultNad" />
        <meta property="og:description" content="A brief description of your website or project." />
        <meta property="og:image" content="https://www.VaultNad.xyz/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.VaultNad.xyz/" />
        <meta property="twitter:title" content="VaultNad" />
        <meta property="twitter:description" content="A brief description of your website or project." />
        <meta property="twitter:image" content="https://cdn.prod.website-files.com/667c57e6f9254a4b6d914440/667d7104644c621965495f6e_LogoMark.svg" />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B3X2V3T8E8"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B3X2V3T8E8', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
