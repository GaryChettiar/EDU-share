import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const project = {
  title: "AI Healthcare Assistant",
  description: "Predictive AI model that assists medical students with diagnosis practice and research discovery.",
  tags: ["Python", "TensorFlow", "FastAPI"],
  roles: ["ML Engineer", "Backend Developer", "UI/UX Designer"],
};

const collaborators = [
  {
    name: "Aarav",
    initials: "AR",
    skills: "Machine Learning · Python · TensorFlow",
    match: "Strong skill match",
    role: "ML Engineer",
  },
  {
    name: "Ananya",
    initials: "AN",
    skills: "UI/UX · Figma · Product Design",
    match: "Design expert",
    role: "UI/UX Designer",
  },
  {
    name: "Rahul",
    initials: "RA",
    skills: "Node.js · PostgreSQL · AWS",
    match: "Backend specialist",
    role: "Backend Developer",
  },
];

export default function TeamMatching() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-foreground/30" />
            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
              Team matching
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
            The right project needs the right people.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Project card */}
          <div>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">Required roles</p>
                  <div className="flex flex-col gap-2">
                    {project.roles.map((r) => (
                      <div key={r} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-foreground/40" />
                        <span className="text-sm">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Suggested collaborators */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Suggested collaborators
            </p>
            {collaborators.map((person) => (
              <div
                key={person.name}
                className="group rounded-xl border border-border bg-background p-4 flex items-start gap-4 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <Avatar size="lg" className="shrink-0">
                  <AvatarFallback className="font-semibold text-sm">{person.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <p className="font-semibold text-sm">{person.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{person.skills}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs shrink-0">{person.role}</Badge>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <CheckCircle className="size-3.5 text-foreground/60" />
                    <span className="text-xs text-muted-foreground">{person.match}</span>
                  </div>
                </div>
              </div>
            ))}
            <Button className="mt-2 self-start" variant="outline">
              View all matches →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
