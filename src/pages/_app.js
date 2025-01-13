import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";

const monadChain = {
  chainId: 20143,
  rpc: ["https://rpc-devnet.monadinfra.com/rpc/3fe540e310bbb6ef0b9f16cd23073b0a"], // Replace with your actual Monad RPC URL
  name: "Monad",
  nativeCurrency: {
    decimals: 18,
    name: "DMON",
    symbol: "DMON"
  },
  shortName: "monad",
  slug: "monad",
  testnet: false,
  chain: "Monad",
  networkId: 20143
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
        <meta property="og:image" content="https://www.VaultNad.com/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.VaultNad.com" />
        <meta property="twitter:title" content="VaultNad - Secure Blockchain Token Locker" />
        <meta property="twitter:description" content="Lock and manage your tokens securely on the blockchain with VaultNad. Protect your assets with transparency and trust." />
        <meta property="twitter:image" content="https://www.VaultNad.com/og-image.png" />
      </Head>

      <ThirdwebProvider 
        activeChain={monadChain}
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        supportedChains={[monadChain]}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;