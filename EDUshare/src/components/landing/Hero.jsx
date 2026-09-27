import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarGroup } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

function FloatingPill({ children, className }) {
  return (
    <div
      className={`absolute hidden lg:flex items-center gap-2 bg-background border border-border rounded-full px-3 py-2 shadow-lg text-xs font-medium text-foreground animate-float ${className}`}
    >
      {children}
    </div>
  );
}

function HeroProductCard() {
  return (
    <Card className="w-full max-w-xs shadow-xl">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle className="text-sm font-semibold leading-tight">AI Study Assistant</CardTitle>
            <CardDescription className="text-xs mt-0.5 line-clamp-2">
              An intelligent study assistant that helps students find and understand academic resources.
            </CardDescription>
          </div>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
            <Sparkles className="size-4" />
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-1.5">
          {["AI / ML", "Python", "React"].map((t) => (
            <Badge key={t} variant="secondary" className="text-xs">
              {t}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-border pt-3">
          <div className="flex items-center gap-1.5">
            <AvatarGroup>
              {["A", "B", "C"].map((l) => (
                <Avatar key={l} size="sm">
                  <AvatarFallback>{l}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
            <span className="text-xs text-muted-foreground">3 / 5 members</span>
          </div>
          <span className="text-xs font-medium text-foreground">Open</span>
        </div>
        <div className="rounded-lg bg-muted/50 border border-border p-2.5 flex flex-col gap-1">
          <span className="text-xs text-muted-foreground">Looking for</span>
          <div className="flex gap-1.5 flex-wrap">
            <Badge variant="outline" className="text-xs">ML Engineer</Badge>
            <Badge variant="outline" className="text-xs">UI Designer</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 48px, currentColor 48px, currentColor 49px), repeating-linear-gradient(90deg, transparent, transparent 48px, currentColor 48px, currentColor 49px)",
        }}
      />

      {/* Accent blob */}
      <div className="pointer-events-none absolute right-0 top-1/4 w-[480px] h-[480px] rounded-full bg-foreground/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute left-1/4 bottom-1/4 w-[320px] h-[320px] rounded-full bg-foreground/[0.025] blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-28 pb-20 w-full">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-8 bg-foreground/30" />
            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
              Built for students who build
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-[clamp(2.8rem,8vw,7rem)] font-bold leading-[0.92] tracking-tight mb-8 max-w-4xl">
            <span className="block text-foreground">Find your people.</span>
            <span className="block text-foreground/30">Build something</span>
            <span className="block text-foreground/30">meaningful.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
            Discover projects, find teammates with the skills you need, and collaborate
            with students who want to build the same things you do.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Button asChild size="lg" className="h-12 px-7 text-base rounded-full">
              <a href="#discover">
                Explore Projects
                <ArrowRight className="size-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-7 text-base rounded-full border-border">
              <a href="#projects">Start a Project</a>
            </Button>
          </div>

          {/* Tagline chips */}
          <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground">
            {["Projects", "People", "Resources", "Collaboration"].map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                <span>{item}</span>
                {i < 3 && <span className="text-border">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div
          className={`relative mt-16 lg:mt-0 lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 flex justify-center transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative">
            <HeroProductCard />

            {/* Floating notifications */}
            <FloatingPill className="-top-5 -right-4">
              <span className="size-2 rounded-full bg-green-500 animate-pulse" />
              New project application
            </FloatingPill>
            <FloatingPill className="top-1/3 -left-36">
              <Users className="size-3 text-blue-500" />
              You matched with a project
            </FloatingPill>
            <FloatingPill className="-bottom-4 -right-6">
              <Sparkles className="size-3 text-amber-500" />
              3 new collaborators
            </FloatingPill>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
