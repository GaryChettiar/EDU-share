import { useState } from "react";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarGroup } from "@/components/ui/avatar";

const filterPills = ["All", "AI / ML", "Web", "Mobile", "Cloud", "Cybersecurity", "Design"];

const projects = [
  {
    title: "AI-Powered Campus Assistant",
    description: "Build a conversational AI that helps students navigate campus life, find resources, and get answers instantly.",
    tags: ["Python", "React", "FastAPI", "PostgreSQL"],
    roles: ["ML Engineer", "Frontend Developer"],
    members: ["A", "B", "C"],
    total: 5,
    category: "AI / ML",
  },
  {
    title: "Smart Waste Management",
    description: "IoT-based system that monitors waste levels in campus bins and optimizes collection routes in real time.",
    tags: ["IoT", "Python", "React", "AWS"],
    roles: ["IoT Engineer", "Backend Developer"],
    members: ["D", "E"],
    total: 4,
    category: "Cloud",
  },
  {
    title: "Student Finance Tracker",
    description: "A personal finance app designed for students to track spending, set budgets, and visualize habits.",
    tags: ["React", "Node.js", "PostgreSQL"],
    roles: ["UI Designer"],
    members: ["F", "G", "H", "I"],
    total: 5,
    category: "Web",
  },
  {
    title: "Campus Safety App",
    description: "Mobile-first emergency response app that connects students with campus security and peer support networks.",
    tags: ["React Native", "Firebase", "Node.js"],
    roles: ["Mobile Developer", "Backend Developer"],
    members: ["J", "K"],
    total: 4,
    category: "Mobile",
  },
  {
    title: "Open Source LMS",
    description: "A free, collaborative learning management system tailored for student-led courses and study groups.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    roles: ["Full Stack Developer", "UI Designer"],
    members: ["L", "M", "N"],
    total: 6,
    category: "Web",
  },
  {
    title: "Network Intrusion Detector",
    description: "Machine learning model that detects anomalies and potential threats in network traffic in real time.",
    tags: ["Python", "TensorFlow", "Wireshark"],
    roles: ["Security Engineer", "ML Engineer"],
    members: ["O"],
    total: 3,
    category: "Cybersecurity",
  },
];

function ProjectCard({ project }) {
  return (
    <Card className="group flex flex-col h-full hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm leading-snug">{project.title}</CardTitle>
        <CardDescription className="text-xs leading-relaxed line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 flex-1">
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
        <div className="mt-auto pt-3 border-t border-border flex items-center justify-between gap-2">
          <AvatarGroup>
            {project.members.map((m) => (
              <Avatar key={m} size="sm">
                <AvatarFallback className="text-xs">{m}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
          <span className="text-xs text-muted-foreground shrink-0">
            {project.members.length}/{project.total} members
          </span>
        </div>
        <div className="rounded-lg bg-muted/50 border border-border px-3 py-2">
          <span className="text-xs text-muted-foreground block mb-1">Looking for</span>
          <div className="flex flex-wrap gap-1">
            {project.roles.map((r) => (
              <Badge key={r} variant="outline" className="text-xs">{r}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProjectPreview() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchFilter = activeFilter === "All" || p.category === activeFilter;
    const matchQuery =
      query === "" ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
    return matchFilter && matchQuery;
  });

  return (
    <section id="discover" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-foreground/30" />
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                Project discovery
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
              Discover something worth building.
            </h2>
          </div>
          <Button variant="outline" asChild className="self-start lg:self-auto">
            <a href="#projects">View all projects →</a>
          </Button>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects, skills, technologies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-10 rounded-lg border border-input bg-background pl-9 pr-4 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 transition-all placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filterPills.map((pill) => (
              <button
                key={pill}
                onClick={() => setActiveFilter(pill)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                  activeFilter === pill
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background text-muted-foreground border-border hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))
          ) : (
            <div className="col-span-3 text-center py-16 text-muted-foreground text-sm">
              No projects found. Try a different search or filter.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
