/* eslint-disable @next/next/no-img-element */
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import ShineBorder from "@/components/magicui/shine-border"; // Import ShineBorder
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";

const features = [
  {
    name: "Mint ERC20 Tokens",
    description:
      "Easily mint ERC20 tokens on the Monad chain with our intuitive interface. Customize token attributes and deploy them swiftly on Monad.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "LP Lock",
    description:
      "Securely lock liquidity pools (LP) to stabilize and build trust within your community. Our LP burn feature ensures transparency and reliability.",
    icon: LockClosedIcon,
  },
  {
    name: "Token Burn",
    description:
      "Effortlessly manage token supply by burning tokens. Enhance token value and control circulation to optimize your project’s economics.",
    icon: ArrowPathIcon,
  },
  {
    name: "Push to deploy",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

export default function Features() {
  return (
    <div className="relative bg-black py-24 sm:py-22">
      <div className="absolute w-[200px] h-[200px] bg-[#0F2755] left-[45%] top-[50%] opacity-[0.7] rounded-full blur-3xl " />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl lg:text-center">
          <div
            className={cn(
              `inline animate-gradient p-6 bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-white`
            )}
          >
            <AnimatedGradientText>
              <span className="size-3 text-white/[0.8] transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">
                <img src="/sparkles.png" alt="Sparkles" className="h-4 w-4" />
              </span>
              Key features
            </AnimatedGradientText>
          </div>
          <p className="mt-2 text-4xl font-bricolage font-bold tracking-tight text-white ">
            Everything you need to deploy your{" "}
            <span className="text-[#836EF9]">tokens</span>
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <ShineBorder
                key={feature.name}
                className="relative flex h-[220px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background"
                color={["#836EF9", "#FE8FB5", "#FFBE7B"]}
              >
                <div className="flex flex-col gap-4 items-left p-4">
                  <div className="flex flex-row gap-4 items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#836EF9]">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="font-bold text-white text-lg">
                      {feature.name}
                    </p>
                  </div>
                  <dd className=" text-Monad leading-7 text-white/[0.6]">
                    {feature.description}
                  </dd>
                </div>
              </ShineBorder>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
