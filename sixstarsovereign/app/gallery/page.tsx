import Image from "next/image";
import { getGalleryItems } from "@/lib/gallery";

export default function GalleryPage() {
  const galleryItems = getGalleryItems();

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden px-4 py-24 text-center sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="text-4xl font-extrabold uppercase sm:text-5xl md:text-6xl lg:text-7xl">
            Gallery
          </h1>
          <p className="mt-6 text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
            Explore highlights from our meets, cruises, and featured builds.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto w-full max-w-400 px-4 py-16">
        <div className="columns-1 gap-4 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="mb-2 break-inside-avoid">
              <Image
                src={item.image}
                alt={item.title}
                width={1000}
                height={1000}
                className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
