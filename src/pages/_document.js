import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="https://cdn.prod.website-files.com/667c57e6f9254a4b6d914440/667d7104644c621965495f6e_LogoMark.svg" />

        {/* Primary Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Lock and manage your tokens securely on the blockchain with VaultNad. Protect your assets with transparency and trust." />
        <meta name="keywords" content="VaultNad, token locker, blockchain, DeFi, secure token management, Web3, asset protection" />
        <meta name="author" content="Monad DevRel Intern" />

        {/* Title */}
        <title>VaultNad - Secure Blockchain Token Locker</title>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vault-nad.vercel.app/" />
        <meta property="og:title" content="VaultNad - Secure Blockchain Token Locker" />
        <meta property="og:description" content="Lock and manage your tokens securely on the blockchain with VaultNad. Protect your assets with transparency and trust." />
        <meta property="og:image" content="https://vault-nad.vercel.app//og-image.png" /> {/* You can add an image here */}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vault-nad.vercel.app/" />
        <meta property="twitter:title" content="VaultNad - Secure Blockchain Token Locker" />
        <meta property="twitter:description" content="Lock and manage your tokens securely on the blockchain with VaultNad. Protect your assets with transparency and trust." />
        <meta property="twitter:image" content="https://vault-nad.vercel.app//og-image.png" /> {/* You can add an image here */}

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
