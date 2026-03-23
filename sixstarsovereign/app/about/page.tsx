import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col justify-center  text-white md:mt-28 mb-20">
      <section className="mx-auto mt-24 w-full max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col items-center justify-center sm:mb-10">
            <h1 className="text-3xl font-extrabold uppercase sm:text-4xl md:text-5xl lg:text-6xl">
              How it Started
            </h1>
            <div className="my-3 h-px w-2/3 bg-white/10 sm:w-1/2" />
          </div>

          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:gap-12">
            <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
              Six Star Sovereigns is a car community built on passion,
              originality, and bringing enthusiasts together.
            </p>

            <div className="flex flex-col items-center gap-3">
              <Image
                src="/cider-mill.jpg"
                alt="Six Star Sovereigns lineup"
                width={700}
                height={700}
                className="w-full max-w-70 rounded-lg object-cover shadow-xl sm:max-w-96 md:max-w-md"
              />
              <p className="text-xl font-semibold sm:text-2xl">The Founders</p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative my-8 flex items-center justify-center sm:my-10">
        <div className="absolute h-px w-11/12 bg-white/10 sm:w-3/4" />

        <Image
          src="/logo.png"
          alt="Six Star Sovereigns logo"
          width={120}
          height={120}
          className="relative z-10 h-20 w-20 bg-background object-contain px-2 sm:h-24 sm:w-24 md:h-28 md:w-28"
          priority
        />
      </div>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 md:px-8 md:py-12">
        <div className="flex flex-col gap-10 md:gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1">
            <div className="mb-8 flex flex-col items-center justify-center text-center">
              <h2 className="mb-6 text-3xl font-extrabold uppercase sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl">
                Our Vision
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
                Six Star Sovereigns is a car community built on passion,
                originality, and bringing enthusiasts together.
              </p>
              <div className="my-4 h-px w-full bg-white/10" />
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-8 flex flex-col items-center justify-center text-center">
              <h2 className="mb-6 text-3xl font-extrabold uppercase sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl">
                Mission
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
                Six Star Sovereigns is a car community built on passion,
                originality, and bringing enthusiasts together.
              </p>
              <div className="my-4 h-px w-full bg-white/10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
