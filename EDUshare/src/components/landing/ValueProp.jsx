import { UserPlus, Search, FolderOpen, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const valueProps = [
  {
    icon: UserPlus,
    title: "Find teammates",
    description: "Connect with students based on skills, interests and availability.",
  },
  {
    icon: Search,
    title: "Discover projects",
    description: "Find projects that match what you want to learn and build.",
  },
  {
    icon: FolderOpen,
    title: "Share resources",
    description: "Keep useful tutorials, repositories, datasets and research together.",
  },
  {
    icon: Rocket,
    title: "Build together",
    description: "Turn an idea into a real collaborative project.",
  },
];

export default function ValueProp() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-foreground/30" />
            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
              The problem
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight mb-5">
            Great ideas shouldn't stop at "I need a team."
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Students have ideas for college projects, hackathons, research, open source, and startups —
            but finding the right people and resources is fragmented. EduKollab fixes that.
          </p>
        </div>

        {/* Use cases */}
        <div className="flex flex-wrap gap-2 mb-16">
          {["College Projects", "Hackathons", "Research", "Open Source", "Startups", "Personal Projects"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground bg-muted/40 hover:bg-muted hover:text-foreground transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {valueProps.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="group cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="flex flex-col gap-4 p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-foreground text-background group-hover:scale-110 transition-transform duration-300">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
