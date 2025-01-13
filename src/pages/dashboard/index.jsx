/* eslint-disable @next/next/no-img-element */
// app/page.tsx
"use client";

import { useState } from "react";
import { 
  useAddress, 
  useContract, 
  useContractRead,
  useBalance,
  Web3Button,
  ConnectWallet 
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { ArrowDownToLine, ArrowUpToLine, Wallet } from "lucide-react";

// Import contract details from constants.js
import { contractAddress, contractABI } from "@/components/constants/constant";

export default function Home() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  
  const address = useAddress();
  const { contract } = useContract(contractAddress, contractABI);  // Use the contract ABI and address from constants.js
  const { data: balance } = useBalance();
  const { data: contractBalance } = useContractRead(contract, "balances", [address]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-rose-500/10 to-blue-500/10" />
      <div className="absolute inset-0 backdrop-blur-3xl" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header Section */}
        <nav className="flex justify-between items-center p-6">
          <div className="flex items-center space-x-2">
            
            <img src="https://cdn.prod.website-files.com/667c57e6f9254a4b6d914440/667d7104644c621965495f6e_LogoMark.svg" alt="Monad's Logo"></img>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Connect Wallet Button */}
            <ConnectWallet
              dropdownPosition={{
                align: "end",
                side: "bottom",
              }}
            />
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              VaultNad
            </h1>
            <p className="text-gray-400">
              Secure token management on Monad Network
            </p>
          </div>

          {/* Balance Cards */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
              <p className="text-sm text-gray-400 mb-1">Wallet Balance</p>
              <p className="text-xl font-semibold">
              {balance ? parseFloat(ethers.utils.formatEther(balance.value)).toFixed(3) : "0.00"} DMON
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
              <p className="text-sm text-gray-400 mb-1">Locked Balance</p>
              <p className="text-xl font-semibold">
                {contractBalance ? ethers.utils.formatEther(contractBalance) : "0.000"} DMON
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-6">
            {/* Deposit */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <ArrowDownToLine className="w-5 h-5 text-purple-400" />
                <h2 className="text-lg font-medium">Deposit Tokens</h2>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Amount to deposit"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
                <Web3Button
                  contractAddress={contractAddress}  // Use the contract address from constants.js
                  contractABI={contractABI}  // Use the ABI from constants.js
                  action={async (contract) => {
                    await contract.call(
                      "deposit",  // Call the deposit function
                      [], 
                      { value: ethers.utils.parseEther(depositAmount) }  // Send ETH
                    );
                  }}
                  className="w-full !bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 rounded-lg transition-transform hover:scale-[1.02]"
                >
                  Deposit MON
                </Web3Button>
              </div>
            </div>

            {/* Withdraw */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <ArrowUpToLine className="w-5 h-5 text-pink-400" />
                <h2 className="text-lg font-medium">Withdraw Tokens</h2>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Amount to withdraw"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                />
                <Web3Button
                  contractAddress={contractAddress}  // Use the contract address from constants.js
                  contractABI={contractABI}  // Use the ABI from constants.js
                  action={async (contract) => {
                    await contract.call(
                      "withdraw",  // Call the withdraw function
                      [ethers.utils.parseEther(withdrawAmount)]  // Specify withdraw amount
                    );
                  }}
                  className="w-full !bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium py-2 rounded-lg transition-transform hover:scale-[1.02]"
                >
                  Withdraw MON
                </Web3Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
