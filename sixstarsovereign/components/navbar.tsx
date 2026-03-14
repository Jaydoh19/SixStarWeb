import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
];

export default function Navbar() {
  return (
    <header className=" w-full border-b border-border/60 bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="text-lg font-semibold tracking-[0.2em] text-foreground">
          SIXSTAR
        </Link>

        <nav className=" flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}