import { Instagram } from "lucide-react";
import Link from "next/link";

const founders = [
  {
    id: 1,
    name: "Jamel Kururugi",
    instagram: "https://www.instagram.com/rx_kururugi/",
    instahandle: "@rx_kururugi",
  },
  {
    id: 2,
    name: "Michael 'F3isti'",
    instagram: "https://www.instagram.com/f3isti/",
    instahandle: "@f3isti",
  },
  {
    id: 3,
    name: "Andrew Dubois",
    instagram: "https://www.instagram.com/andrewdubois_3/",
    instahandle: "@andrewdubois_3",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="flex min-h-[40vh] items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-4xl font-extrabold uppercase md:text-6xl">
            Socials
          </h1>
          <p className="mt-4 text-zinc-400">
            Connect with Six Star Sovereigns and the founders.
          </p>
        </div>
      </section>

      {/* Main Instagram */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-bold uppercase mb-6 text-center">
          Main Page
        </h2>

        <div className="flex justify-center">
          <Link
            href="https://instagram.com/sixstarsovereigns"
            target="_blank"
            className="flex items-center gap-3 border border-white/10 px-6 py-4 uppercase font-bold hover:bg-white hover:text-black transition-all duration-300"
          >
            <Instagram />
            @sixstarsovereigns
          </Link>
        </div>
      </section>

      {/* Founders */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold uppercase mb-10 text-center">
          Founders
        </h2>

        <div className="grid gap-8 sm:grid-cols-3">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="flex flex-col items-center gap-4 border border-white/10 p-6 text-center"
            >
              <h3 className="text-xl font-bold uppercase">
                {founder.name}
              </h3>

              <Link
                href={founder.instagram}
                target="_blank"
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition"
              >
                <Instagram size={20} />
                {founder.instahandle}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}