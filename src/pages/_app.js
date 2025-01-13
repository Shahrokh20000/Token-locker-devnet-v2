import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";

// Define your custom chain using environment variables
const customChain = {
  chainId: parseInt(process.env.NEXT_PUBLIC_CUSTOM_CHAIN_ID), // Chain ID for your custom chain
  rpc: [process.env.NEXT_PUBLIC_CUSTOM_RPC_URL], // RPC URL
  name: process.env.NEXT_PUBLIC_CUSTOM_CHAIN_NAME, // A friendly name for the chain
  nativeCurrency: {
    name: process.env.NEXT_PUBLIC_NATIVE_CURRENCY_NAME, // Native token name
    symbol: process.env.NEXT_PUBLIC_NATIVE_CURRENCY_SYMBOL, // Native token symbol (e.g., ETH for Ethereum)
    decimals: parseInt(process.env.NEXT_PUBLIC_NATIVE_CURRENCY_DECIMALS), // Number of decimals for the native token
  },
  shortName: process.env.NEXT_PUBLIC_CUSTOM_CHAIN_SHORT_NAME, // A short name for the chain
  slug: process.env.NEXT_PUBLIC_CUSTOM_CHAIN_SLUG, // Optional: slug used by thirdweb (e.g., in URLs)
  explorers: [
    {
      name: process.env.NEXT_PUBLIC_EXPLORER_NAME, // Name of the explorer
      url: process.env.NEXT_PUBLIC_EXPLORER_URL, // Link to a blockchain explorer for your chain
      standard: process.env.NEXT_PUBLIC_EXPLORER_STANDARD, // Standard for blockchain explorers
    },
  ],
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Lock and manage your tokens securely on the blockchain with VaultNad. Protect your assets with transparency and trust." />
        <meta name="keywords" content="VaultNad, token locker, blockchain, DeFi, secure token management, Web3, asset protection" />
        <meta name="author" content="Monad DevRel Intern" />

        {/* Title */}
        <title>VaultNad - Secure Blockchain Token Locker</title>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.VaultNad.com" />
        <meta property="og:title" content="VaultNad - Secure Blockchain Token Locker" />
        <meta property="og:description" content="Lock and manage your tokens securely on the blockchain with VaultNad. Protect your assets with transparency and trust." />
        <meta property="og:image" content="https://www.VaultNad.com/og-image.png" /> {/* You can add an image here */}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.VaultNad.com" />
        <meta property="twitter:title" content="VaultNad - Secure Blockchain Token Locker" />
        <meta property="twitter:description" content="Lock and manage your tokens securely on the blockchain with VaultNad. Protect your assets with transparency and trust." />
        <meta property="twitter:image" content="https://www.VaultNad.com/og-image.png" /> {/* You can add an image here */}
      </Head>

      <ThirdwebProvider activeChain={customChain} clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
