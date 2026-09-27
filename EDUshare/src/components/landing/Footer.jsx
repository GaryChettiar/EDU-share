import { BookOpen } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Product: [
    { label: "Discover", href: "#discover" },
    { label: "Projects", href: "#projects" },
    { label: "Resources", href: "#resources" },
    { label: "How It Works", href: "#how-it-works" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Community", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4 group">
              <span className="flex size-7 items-center justify-center rounded-lg bg-foreground text-background">
                <BookOpen className="size-4" />
              </span>
              <span className="font-semibold text-base tracking-tight">EduKollab</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A collaboration platform for students who want to build, learn and grow together.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold mb-4">{section}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-muted-foreground">
            © 2026 EduKollab. Built for students, by builders.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with care for the student community.
          </p>
        </div>
      </div>
    </footer>
  );
}
