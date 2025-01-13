import WordPullUp from "@/components/magicui/word-pull-up";

const stats = [
  { id: 1, name: "Deployed tokens", value: "00" },
  { id: 2, name: "Tokens Burnt", value: "00" },
  // { id: 3, name: 'LPs Locked', value: '00' },
];

export default function Stats() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-8">
        <h2 className="text-center font-bricolage text-4xl font-semibold leading-8 text-white">
          Our <span className="text-[#836EF9]">Monadd</span> Stats
        </h2>
        <div className="w-fit justify-center mx-auto flex flex-row gap-6 items-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto items-center flex flex-col gap-y-4"
            >
              <dt className="text-Monad font-bold leading-7 text-white">
                {stat.name}
              </dt>
              <dd className="order-first text-5xl font-extrabold tracking-tight text-[#836EF9] ">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
