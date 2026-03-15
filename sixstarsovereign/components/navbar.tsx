import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const drugsther = localFont({
  src: "../app/fonts/drugsther.otf",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex w-full max-w-8xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Six Star Sovereigns logo"
            width={70}
            height={70}
            className="h-10 w-10 object-contain sm:h-30 sm:w-30"
            priority
          />
          <span
            className={`${drugsther.className} text-lg tracking-[0.08em] text-white sm:text-2xl lg:text-4xl`}
          >
            Six Star Sovereigns
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${roboto.className} inline-block text-lg font-bold text-white transition-all duration-300 ease-out hover:scale-110 hover:text-chart-2`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="border-white/10 bg-black/95 text-white px-6"
            >
              <div className="mt-10 flex flex-col gap-6">
                <Link href="/" className="mb-4 flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="Six Star Sovereigns logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                  <span
                    className={`${drugsther.className} text-xl tracking-[0.08em] text-white`}
                  >
                    Six Star Sovereigns
                  </span>
                </Link>

                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={`${roboto.className} text-2xl font-bold text-white ease-transition-colors duration-300 hover:text-chart-2 hover:scale-105`}
                    >
                      {link.label}  
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
