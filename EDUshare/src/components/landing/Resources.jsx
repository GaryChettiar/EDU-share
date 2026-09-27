import { FileText, GitBranch, BookMarked, Database, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const resourceTypes = [
  { label: "Research Papers", icon: FileText },
  { label: "GitHub Repos", icon: GitBranch },
  { label: "Tutorials", icon: BookOpen },
  { label: "Datasets", icon: Database },
  { label: "Documentation", icon: BookMarked },
  { label: "Courses", icon: GraduationCap },
];

const resources = [
  {
    title: "Building Recommendation Systems",
    description: "A step-by-step guide to building collaborative filtering models with Python and scikit-learn.",
    tags: ["Python", "Machine Learning"],
    type: "Tutorial",
    readTime: "12 min read",
  },
  {
    title: "React Architecture Patterns",
    description: "Scalable state management and component structure patterns for large React applications.",
    tags: ["React", "Frontend"],
    type: "Documentation",
    readTime: "8 min read",
  },
  {
    title: "AWS for Beginners",
    description: "Core AWS services explained — from EC2 and S3 to Lambda and RDS — with hands-on examples.",
    tags: ["Cloud", "AWS"],
    type: "Course",
    readTime: "4 hr course",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-24 lg:py-32 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-foreground/30" />
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                Resources
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
              Learn faster. Build smarter.
            </h2>
          </div>
          <Button variant="outline" asChild className="self-start lg:self-auto shrink-0">
            <a href="#resources">
              Explore Resources <ArrowRight className="size-4 ml-1" />
            </a>
          </Button>
        </div>

        {/* Resource type pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {resourceTypes.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background text-xs text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all duration-200"
            >
              <Icon className="size-3.5" />
              {label}
            </button>
          ))}
        </div>

        {/* Resource cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((res) => (
            <Card
              key={res.title}
              className="group cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <Badge variant="secondary" className="text-xs">{res.type}</Badge>
                  <span className="text-xs text-muted-foreground">{res.readTime}</span>
                </div>
                <CardTitle className="text-sm">{res.title}</CardTitle>
                <CardDescription className="text-xs leading-relaxed">{res.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {res.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
