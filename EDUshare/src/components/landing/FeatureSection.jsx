import { Compass, Users, LayoutDashboard, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Compass,
    title: "Project Discovery",
    description: "Explore projects across domains, technologies and interests.",
    preview: (
      <div className="rounded-lg bg-muted/60 border border-border p-3 flex flex-col gap-2 mt-3">
        {["AI / ML", "Web Dev", "Mobile"].map((tag) => (
          <div key={tag} className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-foreground/40" />
            <span className="text-xs text-muted-foreground">{tag}</span>
            <span className="ml-auto text-xs text-muted-foreground opacity-60">
              {Math.floor(Math.random() * 40) + 5} projects
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Users,
    title: "Team Matching",
    description: "Find students whose skills complement your project.",
    preview: (
      <div className="rounded-lg bg-muted/60 border border-border p-3 flex flex-col gap-2 mt-3">
        {[
          { name: "Aarav", skills: "ML · Python" },
          { name: "Ananya", skills: "UI/UX · Figma" },
          { name: "Rahul", skills: "Node.js · AWS" },
        ].map((u) => (
          <div key={u.name} className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-full bg-foreground text-background text-xs font-semibold shrink-0">
              {u.name[0]}
            </span>
            <div>
              <span className="text-xs font-medium block">{u.name}</span>
              <span className="text-xs text-muted-foreground">{u.skills}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: LayoutDashboard,
    title: "Collaboration",
    description: "Manage tasks, resources and communication in one workspace.",
    preview: (
      <div className="rounded-lg bg-muted/60 border border-border p-3 flex flex-col gap-1.5 mt-3">
        {[
          { label: "Design mockups", done: true },
          { label: "Set up repo", done: true },
          { label: "API integration", done: false },
          { label: "Testing", done: false },
        ].map((task) => (
          <div key={task.label} className="flex items-center gap-2">
            <span
              className={`size-3.5 rounded flex items-center justify-center shrink-0 border ${task.done ? "bg-foreground border-foreground" : "border-border"}`}
            >
              {task.done && (
                <svg viewBox="0 0 8 8" className="size-2 text-background" fill="none">
                  <path d="M1.5 4L3 5.5L6.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </span>
            <span className={`text-xs ${task.done ? "line-through text-muted-foreground" : "text-foreground"}`}>
              {task.label}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Star,
    title: "Project Showcase",
    description: "Turn completed work into a portfolio that demonstrates what you built.",
    preview: (
      <div className="rounded-lg bg-muted/60 border border-border p-3 mt-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-medium text-xs">CampusConnect</span>
          <Badge variant="secondary" className="text-xs ml-auto">Completed</Badge>
        </div>
        <div className="flex gap-1 flex-wrap">
          {["React", "Node.js", "PostgreSQL"].map((t) => (
            <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
          ))}
        </div>
      </div>
    ),
  },
];

export default function FeatureSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-foreground/30" />
            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
              Core features
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
            Everything you need to build together.
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, description, preview }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-background p-5 flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-foreground text-background mb-3 group-hover:scale-110 transition-transform duration-200">
                <Icon className="size-4" />
              </span>
              <h3 className="font-semibold text-sm mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              {preview}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
