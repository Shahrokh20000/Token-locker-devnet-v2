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
import { ArrowDownToLine, ArrowUpToLine } from "lucide-react";
import { contractAddress, contractABI } from "@/components/constants/constant";

export default function Home() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const address = useAddress();
  const { contract } = useContract(contractAddress, contractABI);
  const { data: balance, isLoading: balanceLoading } = useBalance();
  const { data: contractBalance, isLoading: contractBalanceLoading } = useContractRead(
    contract, 
    "balances", 
    [address]
  );

  const handleDeposit = async (contract) => {
    try {
      setIsLoading(true);
      await contract.call(
        "deposit",
        [],
        { value: ethers.utils.parseEther(depositAmount || "0") }
      );
      setDepositAmount("");
    } catch (error) {
      console.error("Deposit error:", error);
      alert("Error during deposit. Please check console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleWithdraw = async (contract) => {
    try {
      setIsLoading(true);
      await contract.call(
        "withdraw",
        [ethers.utils.parseEther(withdrawAmount || "0")]
      );
      setWithdrawAmount("");
    } catch (error) {
      console.error("Withdrawal error:", error);
      alert("Error during withdrawal. Please check console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute w-[300px] h-[300px] bg-[#836EF9] top-[0] left-[40%] rounded-full blur-[55px]" />
        <div className="absolute w-[300px] h-[300px] bg-[#C1139B] top-[0] left-[30%] rounded-full blur-[60px]" />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_2%,black)]"></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header Section */}
        <nav className="flex justify-between items-center p-6">
          <div className="flex items-center space-x-2">
            <img src="https://cdn.prod.website-files.com/667c57e6f9254a4b6d914440/667d7104644c621965495f6e_LogoMark.svg" alt="Monad's Logo" />
          </div>
          
          <div className="flex items-center space-x-4">
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
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-[#836EF9] mb-4">
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
                  contractAddress={contractAddress}
                  contractABI={contractABI}
                  action={handleDeposit}
                  isDisabled={!depositAmount || isLoading || !address}
                  className="w-full !bg-[#836EF9] text-white font-medium py-2 rounded-lg transition-transform hover:scale-[1.02]"
                >
                  {isLoading ? "Processing..." : "Deposit MON"}
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
                  contractAddress={contractAddress}
                  contractABI={contractABI}
                  action={handleWithdraw}
                  isDisabled={!withdrawAmount || isLoading || !address}
                  className="w-full !bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium py-2 rounded-lg transition-transform hover:scale-[1.02]"
                >
                  {isLoading ? "Processing..." : "Withdraw MON"}
                </Web3Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}