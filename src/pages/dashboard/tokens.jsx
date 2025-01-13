import { contractABI, contractAddress } from "@/components/constants/constant";
import DashLayout from "@/components/Dashbard/DashLayout";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import React from "react";

function DashTokens() {
  // ... existing code ...

  // Removed state and handleSubmit function
  // const [form, setForm] = React.useState({
  //   tokenName: "",
  //   ticker: "",
  //   supply: "",
  //   marketingWallet: "",
  //   devWallet: "",
  //   buyTaxes: "",
  //   sellTaxes: "",
  // });

  // const { tokenName, ticker, supply, marketingWallet, devWallet, buyTaxes, sellTaxes } = form;

  // const handleSubmit = async () => {
  //   try {
  //     console.log(form);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <DashLayout>
      <div className="flex flex-col font-bricolage text-white">
        <h1 className="text-[30px] font-[700] text-white">Mint an ERC20 token</h1>
        <p className="text-[#FFFFFF99] text-[14px]">Fill in the details below to mint a new token</p>

        <div className="w-full lg:w-[40%] mt-[50px] flex flex-col space-y-[30px]">
          <input
            type="text" className="h-[50px] border w-full outline-none px-[10px] bg-transparent rounded-[5px]" placeholder="Token Name" />
          <input
            type="text" className="h-[50px] border w-full outline-none px-[10px] bg-transparent rounded-[5px]" placeholder="Ticker" />
          <input
            type="text" className="h-[50px] border w-full outline-none px-[10px] bg-transparent rounded-[5px]" placeholder="Supply" />
          <input
            type="text" className="h-[50px] border w-full outline-none px-[10px] bg-transparent rounded-[5px]" placeholder="Marketing Wallet" />
          <input
            type="text" className="h-[50px] border w-full outline-none px-[10px] bg-transparent rounded-[5px]" placeholder="Dev Wallet" />
          <input
            type="text" className="h-[50px] border w-full outline-none px-[10px] bg-transparent rounded-[5px]" placeholder="Buy Taxes" />
          <input
            type="text" className="h-[50px] border w-full outline-none px-[10px] bg-transparent rounded-[5px]" placeholder="Sell Taxes" />
          <button className="h-[50px] w-full bg-[#0341BA] text-white rounded-[5px]">Mint Token</button>
        </div>
      </div>
    </DashLayout>
  );
}

export default DashTokens;
