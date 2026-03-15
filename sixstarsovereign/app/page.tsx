import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/cider-mill.jpg"
          alt="Six Star Sovereigns lineup"
          fill
          priority
          className="object-cover object-[center_80%]"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <h1 className="max-w-4xl text-5xl font-extrabold uppercase leading-none text-white md:text-7xl xl:text-5xl">
              Join our community and help define it.
            </h1>

            <p className="mt-12 max-w-6xl text-lg font-bold uppercase leading-loose text-white md:text-2xl">
              Explore a collaborative culture of inclusion, growth, and
              originality, supported by resources that make a difference in the
              car community.
            </p>

            <Link
              href="/about"
              className="mt-10 inline-flex rounded-full bg-white px-10 py-5 text-lg font-bold uppercase text-black transition-all duration-300 hover:scale-105 hover:bg-chart-2 hover:text-white"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section
        className="relative overflow-hidden py-48 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/shark.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 px-8 lg:flex-row">
          <div className="flex w-full justify-center lg:w-1/2">
            <Image
              src="/images/shark.jpg"
              alt="Blue Subaru"
              width={600}
              height={400}
              className="h-auto w-full max-w-150 object-cover shadow-2xl"
              priority
            />
          </div>

          <div className="w-full max-w-187.5 lg:w-1/2 flex flex-col">
            <h2 className="text-center text-5xl font-extrabold uppercase leading-none text-white md:text-7xl">
              Our Commitment
            </h2>

            <p className="text-center mt-10 text-xl font-bold uppercase leading-relaxed text-white md:text-2xl">
              Welcome to our car community! Whether youre here to share your
              ride, swap tips, or just hang out with fellow enthusiasts, youre
              in the right place.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
