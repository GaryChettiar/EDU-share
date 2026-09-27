import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-28 lg:py-36 border-t border-border">
      <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <div className="flex justify-center items-center gap-3 mb-6">
          <span className="h-px w-8 bg-foreground/30" />
          <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
            Get started
          </span>
          <span className="h-px w-8 bg-foreground/30" />
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          Your next project starts with the right people.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
          Create your profile, discover projects and start building with students who share your interests.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="h-12 px-8 text-base rounded-full">
            <a href="/signup">
              Get Started <ArrowRight className="size-4 ml-1" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base rounded-full">
            <a href="#discover">Explore Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
