import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import logo from "../../assets/logo.png";

function DashLayout({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex min-h-screen bg-[#090909]">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="flex flex-col w-full">
        <Navbar setOpen={setOpen} open={open} />
      <div className="p-[20px] lg:p-[40px] grow">{children}</div>
      </div>
    </div>
  );
}

export default DashLayout;
