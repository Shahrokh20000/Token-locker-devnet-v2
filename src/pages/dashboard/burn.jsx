import DashLayout from "@/components/Dashbard/DashLayout";
import React from "react";

function DashBurn() {
  return (
    <DashLayout>
      <div className="flex flex-col font-bricolage ">
        <h1 className="text-[30px] font-[700] text-white">Burn Token</h1>
        <div className="border border-[#FFFFFF33] gap-[20px] mt-[20px] p-[20px] text-white rounded-[10px] grid grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#FFFFFF0D] h-[140px] p-[20px]"></div>
          <div className="bg-[#FFFFFF0D] h-[140px] p-[20px]"></div>
          <div className="bg-[#FFFFFF0D] h-[140px] p-[20px]"></div>
          <div className="bg-[#FFFFFF0D] h-[140px] p-[20px]"></div>
        </div>
        <div className="border border-[#FFFFFF33] mt-[50px] p-[50px_20px] text-white rounded-[10px] flex flex-col items-center justify-center">
          <p className="text-center text-[18px] lg:text-[24px]">All clean!</p>
          <p className="text-[#FFFFFF99] text-center"> No tokens found. Ensure you have the correct wallet selected.</p>
        </div>
      </div>
    </DashLayout>
  );
}

export default DashBurn;
