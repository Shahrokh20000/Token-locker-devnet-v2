/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import BlurFade from "@/components/magicui/blur-fade";
import Connect from "./Connect";

// Modal component
function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-gradient-to-r from-[#836EF9] to-[#C1139B] rounded-lg p-8 max-w-md mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
          Authenticate!
        </h2>
        <p className="mb-6 text-white">
          Connect your wallet to access the dashboard.
        </p>
        <Connect />
      </div>
    </div>
  );
}

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-black min-h-screen flex flex-col">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="h-[50rem] w-full dark:bg-black bg-black dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
        <div className="absolute w-[300px] h-[300px] bg-[#836EF9] top-[0] left-[40%] rounded-full blur-[55px]" />
        <div className="absolute w-[300px] h-[300px] bg-[#C1139B] top-[0] left-[30%] rounded-full blur-[60px]" />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_2%,black)]"></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex flex-col items-center justify-center gap-4 mx-auto text-center p-8">
          <div
            className={cn(
              `inline animate-gradient p-6 bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-white`
            )}
          >
            <AnimatedGradientText>
              <span className="size-3 text-white/[0.8] transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">
                <img src="/sparkles.png" alt="Sparkles" className="h-4 w-4" />
              </span>
              Protect your tokens with VaultNad!
            </AnimatedGradientText>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <BlurFade delay={0.25} inView className="w-full flex items-center justify-center">
              <h1 className="text-[30px] lg:text-[90px] lg:leading-[95px] w-full lg:w-[80%] text-center text-white/[0.8] font-bold font-bricolage">
                Securely Lock Your Tokens with{" "}
                <span className="text-[#836EF9]">VaultNad</span>.
              </h1>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
              <p className="text-6sm leading-8 text-gray-300 max-w-[560px]">
                VaultNad makes token security effortless. Lock your tokens securely and prevent unauthorized access with a simple click.
              </p>
            </BlurFade>
            <div className="flex items-center justify-center gap-x-6">
              <a href="/dashboard">
                <button
                  className="rounded-md bg-[#836EF9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
