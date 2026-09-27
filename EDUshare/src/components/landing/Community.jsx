import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const nodes = [
  // Center cluster
  { id: "c1", x: 50, y: 50, label: "A", size: "lg" },
  // Ring 1
  { id: "r1a", x: 25, y: 32, label: "B", size: "md" },
  { id: "r1b", x: 72, y: 28, label: "C", size: "md" },
  { id: "r1c", x: 78, y: 65, label: "D", size: "md" },
  { id: "r1d", x: 30, y: 70, label: "E", size: "md" },
  // Ring 2
  { id: "r2a", x: 12, y: 18, label: "F", size: "sm" },
  { id: "r2b", x: 88, y: 15, label: "G", size: "sm" },
  { id: "r2c", x: 92, y: 82, label: "H", size: "sm" },
  { id: "r2d", x: 8, y: 85, label: "I", size: "sm" },
  { id: "r2e", x: 50, y: 15, label: "J", size: "sm" },
  { id: "r2f", x: 50, y: 85, label: "K", size: "sm" },
];

// Project hubs
const hubs = [
  { id: "h1", x: 50, y: 50, label: "EduKollab", size: "project" },
];

export default function Community() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-background/30" />
              <span className="text-xs font-mono text-background/50 tracking-widest uppercase">
                Community
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 text-background">
              You're not building alone.
            </h2>
            <p className="text-lg text-background/60 leading-relaxed mb-8">
              Meet students who are learning, experimenting and building just like you. Find your team, start something real.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Frontend", "ML / AI", "Mobile", "Backend", "Design", "Cloud", "Research"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full border border-background/10 text-xs text-background/60 hover:text-background hover:border-background/30 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right visual: network of avatars */}
          <div className="relative h-72 lg:h-96">
            {/* SVG connecting lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {nodes.map((node) => (
                <line
                  key={`line-${node.id}`}
                  x1="50%" y1="50%"
                  x2={`${node.x}%`} y2={`${node.y}%`}
                  stroke="white"
                  strokeOpacity="0.08"
                  strokeWidth="0.5"
                />
              ))}
            </svg>

            {/* Avatar nodes */}
            {nodes.map((node) => {
              const sizeMap = { sm: "size-7", md: "size-9", lg: "size-12" };
              const textMap = { sm: "text-xs", md: "text-xs", lg: "text-sm" };
              return (
                <div
                  key={node.id}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/10 border border-background/20 flex items-center justify-center font-semibold text-background ring-2 ring-background/10 hover:ring-background/30 transition-all duration-300 cursor-default ${sizeMap[node.size]} ${textMap[node.size]}`}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  {node.label}
                </div>
              );
            })}

            {/* Center project hub */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 size-14 rounded-full bg-background flex items-center justify-center text-foreground font-bold text-xs ring-4 ring-background/20 shadow-xl z-10"
              style={{ left: "50%", top: "50%" }}
            >
              EK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
