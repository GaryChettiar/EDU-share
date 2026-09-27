const steps = [
  {
    number: "01",
    title: "Create your profile",
    description:
      "Add your skills, interests, university and areas you want to explore. Let your profile speak for you.",
  },
  {
    number: "02",
    title: "Discover",
    description:
      "Find projects, people and resources relevant to you — filtered by domain, skill or technology.",
  },
  {
    number: "03",
    title: "Collaborate",
    description:
      "Join a team, apply to projects, manage tasks and communicate with your collaborators.",
  },
  {
    number: "04",
    title: "Showcase",
    description:
      "Complete your project and turn your work into a portfolio that shows what you built.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-foreground/30" />
            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
              Process
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
            From idea to project in four steps.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group flex flex-col gap-5 border-b border-border lg:border-b-0 lg:border-r last:border-r-0 last:border-b-0 p-6 lg:p-8 hover:bg-muted/30 transition-colors duration-300"
            >
              {/* Step number */}
              <span className="font-mono text-6xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors duration-300 leading-none">
                {step.number}
              </span>

              {/* Connector dot */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 size-2 rounded-full bg-border z-10" />
              )}

              <div>
                <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
