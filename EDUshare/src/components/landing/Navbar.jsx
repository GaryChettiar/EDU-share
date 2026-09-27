import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navLinks = [
  { label: "Discover", href: "#discover" },
  { label: "Projects", href: "#projects" },
  { label: "Resources", href: "#resources" },
  { label: "How It Works", href: "#how-it-works" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="flex size-7 items-center justify-center rounded-lg bg-foreground text-background">
            <BookOpen className="size-4" />
          </span>
          <span className="font-semibold text-base tracking-tight text-foreground">
            EduKollab
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/login"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 px-3 py-1.5"
          >
            Log In
          </a>
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="/signup">Get Started</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm flex flex-col gap-0 p-0">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <a href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <span className="flex size-7 items-center justify-center rounded-lg bg-foreground text-background">
                  <BookOpen className="size-4" />
                </span>
                <span className="font-semibold text-base">EduKollab</span>
              </a>
            </div>
            <div className="flex flex-col gap-1 p-5 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium py-3 px-2 text-foreground hover:text-foreground/70 hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3 p-5 border-t border-border">
              <Button variant="outline" asChild className="h-12 text-base rounded-xl">
                <a href="/login" onClick={() => setMobileOpen(false)}>Log In</a>
              </Button>
              <Button asChild className="h-12 text-base rounded-xl">
                <a href="/signup" onClick={() => setMobileOpen(false)}>Get Started</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
