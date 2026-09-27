import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarGroup } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const showcaseProjects = [
  {
    title: "CampusConnect",
    description: "A platform connecting students with clubs, events and communities across campus.",
    tags: ["React", "Node.js", "PostgreSQL"],
    contributors: ["A", "B", "C", "D"],
    status: "Completed",
    emoji: "🏫",
  },
  {
    title: "MediPredict",
    description: "AI-powered healthcare risk prediction trained on anonymized patient records.",
    tags: ["Python", "TensorFlow", "FastAPI"],
    contributors: ["E", "F", "G"],
    status: "Completed",
    emoji: "🩺",
  },
  {
    title: "EcoTrack",
    description: "Smart environmental monitoring platform for campuses powered by IoT sensors.",
    tags: ["IoT", "React", "AWS"],
    contributors: ["H", "I", "J", "K"],
    status: "Completed",
    emoji: "🌿",
  },
];

export default function Showcase() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-foreground/30" />
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                Showcase
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
              Built by students. Made to be seen.
            </h2>
          </div>
          <Button variant="outline" asChild className="self-start lg:self-auto shrink-0">
            <a href="#showcase">View all projects →</a>
          </Button>
        </div>

        {/* Showcase cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {showcaseProjects.map((project) => (
            <Card
              key={project.title}
              className="group cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-muted text-xl shrink-0">
                    {project.emoji}
                  </span>
                  <div>
                    <CardTitle className="text-sm leading-snug">{project.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs mt-1">{project.status}</Badge>
                  </div>
                </div>
                <CardDescription className="text-xs leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <AvatarGroup>
                    {project.contributors.map((c) => (
                      <Avatar key={c} size="sm">
                        <AvatarFallback className="text-xs">{c}</AvatarFallback>
                      </Avatar>
                    ))}
                  </AvatarGroup>
                  <span className="text-xs text-muted-foreground">
                    {project.contributors.length} contributors
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
