import { createThirdwebClient } from "thirdweb";
import React, { useEffect, useState } from "react";
import { ConnectButton } from "thirdweb/react";
import { useRouter } from "next/router";
import { sepolia } from "thirdweb/chains";
import { createWallet, walletConnect, inAppWallet } from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: "3fdd5975bba4b76e684bbe7fd6703959",
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinMonad.wallet"),
  walletConnect(),
  inAppWallet({
    auth: {
      options: ["email", "google", "apple", "passkey", "phone"],
    },
  }),
];

export default function Connect() {
  const [isConnected, setIsConnected] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push("/dashboard");
    }
  }, [isConnected, router]);

  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      accountAbstraction={{
        chain: sepolia,
        factoryAddress: "0x42593073Ba4FC175acc10893721eD55738DF0BDc",
        gasless: true,
      }}
      theme={"dark"}
      connectModal={{ size: "compact" }}
      onConnect={() => setIsConnected(true)} // Listen for successful connection
    />
  );
}
