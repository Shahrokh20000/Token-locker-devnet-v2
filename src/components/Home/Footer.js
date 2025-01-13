/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black p-6">
      <div className="relative mx-auto mb-6 flex flex-col gap-4 items-center justify-center min-h-[20vh] max-w-7xl py-12 bg-[#0341BA] rounded-xl bg-gradient-to-r from-[#836EF9] to-[#C1139B]">
        <h2 className="text-center font-bricolage text-2xl font-semibold leading-8 text-white">
          Ready to deploy your first ERC20 Token?
        </h2>
        <Link
          href="/dashboard"
          className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#836EF9] shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get started
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-[50px]">
        <div className="mb-4 lg:mb-0">
          <Link href="#" className="flex items-center">
            <img className="h-12 w-auto" src="/logo.svg" alt="Your Company" />
          </Link>
        </div>
        <div className="text-white text-sm">
          &copy; {new Date().getFullYear()} VaultNad. All rights reserved.
        </div>
        <div className="flex space-x-6 mb-4 lg:mb-0">
          <Link
            href="https://twitter.com/yourprofile"
            target="_blank"
            className="text-white hover:text-[#1DA1F2]"
          >
            <FaTwitter className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link
            href="https://github.com/yourprofile"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            <FaGithub className="h-6 w-6" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
