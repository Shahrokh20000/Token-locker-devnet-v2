import Image from "next/image";
import WordPullUp from "@/components/magicui/word-pull-up";
import Marquee from "react-fast-marquee";

export default function Sponsors() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-4" >
        {/* <WordPullUp
          className="text-2xl font-bold tracking-[-0.02em] text-white dark:text-black md:text-6xl md:leading-[5rem]"
          words="Our Amazing Partners"
        /> */}
        <h2 className="text-center font-bricolage text-2xl font-semibold leading-8 text-white">
          OUR AMAZING SPONSORS
        </h2>
        <div className="w-full mt-[20px]">
          <Marquee gradient={true} gradientColor="black" >
            <div className="flex space-x-[40px]" >
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
