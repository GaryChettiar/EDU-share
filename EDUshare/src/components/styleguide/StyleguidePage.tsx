import { useState } from "react"
import {
  Search,
  Copy,
  Check,
  Type,
  Palette,
  MousePointer,
  FormInput,
  Layout,
  Navigation as NavIcon,
  Bell,
  Sliders,
  Sparkles,
  Info,
  AlertTriangle,
  Mail,
  ChevronRight,
  ExternalLink,
  Grid,
  Layers,
  Flame,
  HelpCircle,
  FileText,
  CheckCircle2,
} from "lucide-react"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Kbd } from "@/components/ui/kbd"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Calendar } from "@/components/ui/calendar"
import { Item, ItemTitle, ItemDescription, ItemContent, ItemActions } from "@/components/ui/item"
import { Attachment, AttachmentMedia, AttachmentContent, AttachmentTitle, AttachmentDescription } from "@/components/ui/attachment"
import { Empty, EmptyTitle, EmptyDescription } from "@/components/ui/empty"
import { ToastProvider, ToastViewport, toast } from "@/components/ui/toast"

// Helper Code Snippet Component
function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group my-3 rounded-lg overflow-hidden border border-border bg-muted/60 dark:bg-muted/30 font-mono text-xs text-foreground">
      <div className="flex items-center justify-between px-3 py-1.5 bg-muted/80 border-b border-border/60 text-muted-foreground text-[11px] font-sans">
        <span className="flex items-center gap-1.5"><Code2Icon className="size-3.5 text-primary" /> JSX Example</span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded hover:bg-background text-foreground transition-colors cursor-pointer"
        >
          {copied ? <Check className="size-3 text-green-500" /> : <Copy className="size-3" />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <pre className="p-3 overflow-x-auto text-left leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function Code2Icon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

// Section Component wrapper
function Section({ id, title, description, badge, icon: Icon, children }: {
  id: string
  title: string
  description?: string
  badge?: string
  icon?: React.ElementType
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-20 pt-8 pb-6 border-b border-border/60 last:border-b-0">
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2.5">
          {Icon && (
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Icon className="size-5" />
            </div>
          )}
          <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
        </div>
        {badge && <Badge variant="secondary" className="font-mono text-xs">{badge}</Badge>}
      </div>
      {description && <p className="text-muted-foreground text-sm mb-6 max-w-3xl">{description}</p>}
      <div className="grid gap-6">{children}</div>
    </section>
  )
}

// Demo Card wrapper
function DemoCard({ title, description, code, children }: {
  title: string
  description?: string
  code?: string
  children: React.ReactNode
}) {
  return (
    <Card className="overflow-hidden border border-border/70 shadow-xs">
      <CardHeader className="pb-3 border-b border-border/40 bg-muted/20">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="p-5 flex flex-col gap-4">
        <div className="min-h-[60px] flex flex-wrap items-center gap-3 p-4 rounded-lg bg-background border border-dashed border-border/60">
          {children}
        </div>
        {code && <CodeBlock code={code} />}
      </CardContent>
    </Card>
  )
}

// Color Swatch Item
function ColorSwatch({ name, varName, desc }: { name: string; varName: string; desc?: string }) {
  return (
    <div className="flex flex-col gap-2 p-3 rounded-xl border border-border bg-card">
      <div className="h-14 rounded-lg w-full border border-border/40 shadow-xs" style={{ backgroundColor: `var(${varName})` }} />
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <span className="font-medium text-xs text-foreground">{name}</span>
          <span className="text-[10px] font-mono text-muted-foreground">{varName}</span>
        </div>
        {desc && <span className="text-[11px] text-muted-foreground">{desc}</span>}
      </div>
    </div>
  )
}

// Toast Trigger Button Helper
function ToastDemoButton() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.add({
          title: "System Notification",
          description: "Settings saved successfully to system.",
        })
      }}
    >
      <Bell className="size-4 mr-2" /> Trigger Toast Notification
    </Button>
  )
}

export function StyleguidePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [progressVal] = useState(65)

  const categories = [
    { id: "all", label: "All Items", icon: Grid },
    { id: "typography", label: "Typography & Typeset", icon: Type },
    { id: "colors", label: "Colors & Theme", icon: Palette },
    { id: "buttons", label: "Buttons & Actions", icon: MousePointer },
    { id: "forms", label: "Form Controls", icon: FormInput },
    { id: "data-display", label: "Data Display & Cards", icon: Layout },
    { id: "navigation", label: "Navigation & Tabs", icon: NavIcon },
    { id: "overlays", label: "Overlays & Dialogs", icon: Layers },
    { id: "feedback", label: "Feedback & Status", icon: Bell },
    { id: "disclosure", label: "Disclosures & Layout", icon: Sliders },
  ]

  const matchesFilter = (catId: string, searchTerms: string[]) => {
    if (activeTab !== "all" && activeTab !== catId) return false
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    return searchTerms.some((t) => t.toLowerCase().includes(q))
  }

  return (
    <ToastProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased">
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-xs">
                <Sparkles className="size-5" />
              </div>
              <div>
                <h1 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
                  EDUshare <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">Design System</span>
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Component Library & Typography Styleguide</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder="Search components, tokens or typography..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-9 w-full bg-muted/40 border-border/60 text-xs rounded-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="outline" className="hidden md:inline-flex gap-1 text-[11px] font-mono">
                <span>Geist Variable</span>
              </Badge>
              <ModeToggle />
            </div>
          </div>
        </header>

        {/* Category Pill Navigation */}
        <div className="border-b border-border/60 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1.5 min-w-max">
              {categories.map((cat) => {
                const Icon = cat.icon
                const isActive = activeTab === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "bg-background/80 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50"
                    }`}
                  >
                    <Icon className="size-3.5" />
                    <span>{cat.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
          {/* Welcome Banner */}
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 shadow-xs relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
                <Flame className="size-3.5" /> Base Nova & Geist Font System
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
                EDUshare Component & Typography Styleguide
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Welcome to the complete UI documentation page. This reference guide presents all typography scales, theme color tokens, and interactive UI primitives, with live interactive previews and ready-to-use copyable code snippets.
              </p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 1. TYPOGRAPHY SECTION */}
          {/* ========================================================================= */}
          {matchesFilter("typography", ["typography", "typeset", "headings", "font", "geist", "text", "paragraph", "h1", "h2", "h3"]) && (
            <Section id="typography" title="Typography & Typesetting" description="Standard typography styles powered by Geist Sans, Geist Mono, and shadcn .typeset document engine." badge="Geist & .typeset" icon={Type}>
              
              {/* Font Family Overview */}
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-5 border-border/80">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-sm">Geist Variable (Primary Sans)</h3>
                    <Badge variant="outline" className="font-mono text-[10px]">--font-geist</Badge>
                  </div>
                  <p className="text-3xl font-sans tracking-tight mb-2">Aa Bb Cc 123 !@#</p>
                  <p className="text-xs text-muted-foreground">Used for all user interfaces, body copy, headers, badges, and form controls across EDUshare.</p>
                </Card>

                <Card className="p-5 border-border/80">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-sm">Geist Mono Variable (Monospace)</h3>
                    <Badge variant="outline" className="font-mono text-[10px]">--font-geist-mono</Badge>
                  </div>
                  <p className="text-3xl font-mono tracking-tight mb-2">const code = true;</p>
                  <p className="text-xs text-muted-foreground">Used for code snippets, keyboard shortcuts, numerical data tables, and technical metadata.</p>
                </Card>
              </div>

              {/* Headings Scale */}
              <DemoCard title="Headings Scale (H1 - H6)" description="Standard responsive heading scale hierarchy." code={`<h1>Heading 1 (32px / 2rem)</h1>
<h2>Heading 2 (24px / 1.5rem)</h2>
<h3>Heading 3 (20px / 1.25rem)</h3>
<h4>Heading 4 (18px / 1.125rem)</h4>
<h5>Heading 5 (16px / 1rem)</h5>
<h6>Heading 6 (14px / 0.875rem)</h6>`}>
                <div className="w-full flex flex-col gap-4 text-left">
                  <div className="flex items-baseline justify-between border-b border-border/40 pb-2">
                    <h1 className="text-3xl font-bold tracking-tight">Heading 1 - EDUshare Platform</h1>
                    <span className="text-xs font-mono text-muted-foreground">32px / 2rem • 700 Bold</span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-border/40 pb-2">
                    <h2 className="text-2xl font-semibold tracking-tight">Heading 2 - Section Header</h2>
                    <span className="text-xs font-mono text-muted-foreground">24px / 1.5rem • 600 SemiBold</span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-border/40 pb-2">
                    <h3 className="text-xl font-semibold tracking-tight">Heading 3 - Subsection Title</h3>
                    <span className="text-xs font-mono text-muted-foreground">20px / 1.25rem • 600 SemiBold</span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-border/40 pb-2">
                    <h4 className="text-lg font-medium tracking-tight">Heading 4 - Card Header</h4>
                    <span className="text-xs font-mono text-muted-foreground">18px / 1.125rem • 500 Medium</span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-border/40 pb-2">
                    <h5 className="text-base font-medium">Heading 5 - Small Component Group</h5>
                    <span className="text-xs font-mono text-muted-foreground">16px / 1rem • 500 Medium</span>
                  </div>
                  <div className="flex items-baseline justify-between pb-1">
                    <h6 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Heading 6 - Overline Label</h6>
                    <span className="text-xs font-mono text-muted-foreground">14px / 0.875rem • Uppercase</span>
                  </div>
                </div>
              </DemoCard>

              {/* Text Styles & Inline Semantics */}
              <DemoCard title="Body Text & Inline Elements" description="Standard body typography and inline semantic elements." code={`<p className="text-base leading-7">Standard body text paragraph...</p>
<p className="text-sm text-muted-foreground">Muted text description...</p>
<p className="text-xs font-medium">Small caption label</p>
<code className="text-xs font-mono bg-muted p-1 rounded">npm run dev</code>
<Kbd className="text-xs">Ctrl + C</Kbd>`}>
                <div className="w-full flex flex-col gap-4 text-left">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground mb-1 block">Lead Paragraph:</span>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      EDUshare is an open collaborative platform empowering students and educators to seamlessly share knowledge and learning resources worldwide.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <span className="text-xs font-mono text-muted-foreground mb-1 block">Body Default:</span>
                    <p className="text-sm leading-relaxed">
                      Knowledge sharing is most effective when technical friction is minimized. Our design system prioritizes accessible contrast ratios, consistent spacing grids, and readable typography.
                    </p>
                  </div>
                  <Separator />
                  <div className="flex flex-wrap items-center gap-4 text-xs">
                    <div>
                      <span className="text-muted-foreground block mb-1">Muted Text:</span>
                      <span className="text-muted-foreground">Last synchronized 5 minutes ago</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block mb-1">Inline Code & Kbd:</span>
                      <span className="flex items-center gap-1.5">
                        Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to execute <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-[11px]">quickSearch()</code>
                      </span>
                    </div>
                  </div>
                </div>
              </DemoCard>

              {/* Typeset Class Showcase */}
              <DemoCard title="shadcn / .typeset Document Engine" description="Apply className='typeset' to any container for automatic article typography formatting." code={`<div className="typeset">
  <h2>Article Heading</h2>
  <p>Standard formatted paragraph with automatic line spacing.</p>
  <ul>
    <li>Item list point one</li>
    <li>Item list point two</li>
  </ul>
</div>`}>
                <div className="w-full text-left typeset p-4 rounded-lg bg-muted/10 border border-border/50">
                  <h2>Introduction to Educational Asset Sharing</h2>
                  <p>
                    Effective resource sharing relies on structured documentation. When writing articles or course guides, wrapping content in the <code>.typeset</code> class handles headings, lists, blockquotes, and tables automatically.
                  </p>
                  <blockquote className="border-l-2 border-primary pl-3 my-2 text-muted-foreground italic">
                    "Education is not the learning of facts, but the training of the mind to think." — Albert Einstein
                  </blockquote>
                  <h3>Key Platform Advantages</h3>
                  <ul>
                    <li>Seamless peer-to-peer resource exchange with version tracking.</li>
                    <li>Integrated dark and light mode UI themes.</li>
                    <li>Fully accessible keyboard navigation and focus management.</li>
                  </ul>
                </div>
              </DemoCard>
            </Section>
          )}

          {/* ========================================================================= */}
          {/* 2. COLORS & THEME */}
          {/* ========================================================================= */}
          {matchesFilter("colors", ["color", "colors", "theme", "palette", "bg", "primary", "accent", "background", "foreground", "muted"]) && (
            <Section id="colors" title="Color System & Design Tokens" description="Theme tokens defined with CSS OKLCH variables for light and dark color schemes." badge="OKLCH Color Tokens" icon={Palette}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                <ColorSwatch name="Background" varName="--background" desc="Base surface bg" />
                <ColorSwatch name="Foreground" varName="--foreground" desc="Primary text color" />
                <ColorSwatch name="Primary" varName="--primary" desc="Main brand color" />
                <ColorSwatch name="Primary Text" varName="--primary-foreground" desc="Text on primary" />
                <ColorSwatch name="Secondary" varName="--secondary" desc="Secondary buttons/bg" />
                <ColorSwatch name="Muted" varName="--muted" desc="Subtle surfaces" />
                <ColorSwatch name="Muted Text" varName="--muted-foreground" desc="Subtle text color" />
                <ColorSwatch name="Accent" varName="--accent" desc="Hover / active fill" />
                <ColorSwatch name="Card" varName="--card" desc="Card background" />
                <ColorSwatch name="Popover" varName="--popover" desc="Dropdowns & popups" />
                <ColorSwatch name="Border" varName="--border" desc="Default border color" />
                <ColorSwatch name="Destructive" varName="--destructive" desc="Errors & delete actions" />
              </div>

              {/* Chart Colors */}
              <div className="mt-4">
                <h3 className="text-sm font-semibold mb-3">Chart Color Tokens</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  <ColorSwatch name="Chart 1" varName="--chart-1" />
                  <ColorSwatch name="Chart 2" varName="--chart-2" />
                  <ColorSwatch name="Chart 3" varName="--chart-3" />
                  <ColorSwatch name="Chart 4" varName="--chart-4" />
                  <ColorSwatch name="Chart 5" varName="--chart-5" />
                </div>
              </div>
            </Section>
          )}

          {/* ========================================================================= */}
          {/* 3. BUTTONS & ACTIONS */}
          {/* ========================================================================= */}
          {matchesFilter("buttons", ["button", "buttons", "toggle", "button-group", "action", "size", "variant"]) && (
            <Section id="buttons" title="Buttons & Actions" description="Interactive buttons with multiple variants, sizes, icon combinations, and toggle groups." badge="6 Variants • 6 Sizes" icon={MousePointer}>
              
              {/* Button Variants */}
              <DemoCard title="Button Variants" description="Default, Outline, Secondary, Ghost, Destructive, and Link variants." code={`<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`}>
                <Button variant="default">Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link Button</Button>
              </DemoCard>

              {/* Button Sizes */}
              <DemoCard title="Button Sizes" description="Extra Small (xs), Small (sm), Default, Large (lg), and Icon sizes." code={`<Button size="xs">Extra Small (xs)</Button>
<Button size="sm">Small (sm)</Button>
<Button size="default">Default</Button>
<Button size="lg">Large (lg)</Button>
<Button size="icon"><Sparkles className="size-4" /></Button>`}>
                <Button size="xs">Extra Small (xs)</Button>
                <Button size="sm">Small (sm)</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large (lg)</Button>
                <Button size="icon" aria-label="Icon button"><Sparkles className="size-4" /></Button>
              </DemoCard>

              {/* Buttons with Icons */}
              <DemoCard title="Buttons with Icons" description="Incorporate icons seamlessly." code={`<Button><Mail className="size-4 mr-1.5" /> Email Us</Button>
<Button variant="outline">Next Step <ChevronRight className="size-4 ml-1.5" /></Button>`}>
                <Button><Mail className="size-4 mr-1.5" /> Send Email</Button>
                <Button variant="outline">Next Step <ChevronRight className="size-4 ml-1.5" /></Button>
                <Button variant="secondary" size="sm"><FileText className="size-3.5 mr-1" /> View Docs</Button>
              </DemoCard>

              {/* Button Groups & Toggles */}
              <DemoCard title="Button Groups & Toggles" description="Grouped buttons and toggle switches." code={`<ButtonGroup>
  <Button variant="outline">Option 1</Button>
  <Button variant="outline">Option 2</Button>
  <Button variant="outline">Option 3</Button>
</ButtonGroup>

<ToggleGroup type="single" defaultValue="bold">
  <ToggleGroupItem value="bold">B</ToggleGroupItem>
  <ToggleGroupItem value="italic">I</ToggleGroupItem>
</ToggleGroup>`}>
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground mb-2 block">Button Group:</span>
                    <ButtonGroup>
                      <Button variant="outline" size="sm">Daily</Button>
                      <Button variant="outline" size="sm">Weekly</Button>
                      <Button variant="outline" size="sm">Monthly</Button>
                    </ButtonGroup>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground mb-2 block">Toggle Group:</span>
                    <ToggleGroup defaultValue={["grid"]}>
                      <ToggleGroupItem value="grid" aria-label="Grid view"><Grid className="size-4" /></ToggleGroupItem>
                      <ToggleGroupItem value="list" aria-label="List view"><FileText className="size-4" /></ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
              </DemoCard>
            </Section>
          )}

          {/* ========================================================================= */}
          {/* 4. FORM CONTROLS */}
          {/* ========================================================================= */}
          {matchesFilter("forms", ["form", "input", "textarea", "checkbox", "radio", "switch", "slider", "select", "combobox", "otp", "field", "label"]) && (
            <Section id="forms" title="Form Controls & Inputs" description="Inputs, groups, selections, switches, sliders, and form field validations." badge="Forms & Validation" icon={FormInput}>
              
              {/* Text Inputs & Input Groups */}
              <DemoCard title="Text Inputs & Input Groups" description="Standard Input, Textarea, and InputGroup with addons." code={`<Input placeholder="Standard text input..." />
<InputGroup>
  <InputGroupAddon><Mail className="size-4" /></InputGroupAddon>
  <InputGroupInput placeholder="Email address..." />
</InputGroup>`}>
                <div className="grid sm:grid-cols-2 gap-4 w-full">
                  <div>
                    <Label className="mb-1.5 block text-xs font-medium">Standard Text Input</Label>
                    <Input placeholder="Enter your email address..." />
                  </div>
                  <div>
                    <Label className="mb-1.5 block text-xs font-medium">Input Group with Icon Addon</Label>
                    <InputGroup>
                      <InputGroupAddon><Mail className="size-4 text-muted-foreground" /></InputGroupAddon>
                      <InputGroupInput placeholder="user@edushare.org" />
                    </InputGroup>
                  </div>
                  <div className="sm:col-span-2">
                    <Label className="mb-1.5 block text-xs font-medium">Textarea</Label>
                    <Textarea placeholder="Write a short description about this resource..." rows={3} />
                  </div>
                </div>
              </DemoCard>

              {/* Selection Controls (Checkbox, Radio, Switch, Slider) */}
              <DemoCard title="Checkbox, Radio Group & Switch" description="Form selection components." code={`<Checkbox id="terms" defaultChecked />
<Switch defaultChecked />
<RadioGroup defaultValue="public">
  <RadioGroupItem value="public" id="public" />
  <RadioGroupItem value="private" id="private" />
</RadioGroup>`}>
                <div className="flex flex-wrap items-center gap-8 w-full">
                  {/* Checkbox */}
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" defaultChecked />
                    <Label htmlFor="remember" className="text-xs cursor-pointer">Remember device</Label>
                  </div>

                  {/* Switch */}
                  <div className="flex items-center gap-2">
                    <Switch id="notifications" defaultChecked />
                    <Label htmlFor="notifications" className="text-xs cursor-pointer">Email Notifications</Label>
                  </div>

                  {/* Radio Group */}
                  <RadioGroup defaultValue="public" className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <RadioGroupItem value="public" id="r-pub" />
                      <Label htmlFor="r-pub" className="text-xs cursor-pointer">Public</Label>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <RadioGroupItem value="private" id="r-priv" />
                      <Label htmlFor="r-priv" className="text-xs cursor-pointer">Private</Label>
                    </div>
                  </RadioGroup>
                </div>
              </DemoCard>

              {/* Slider & Selects */}
              <DemoCard title="Slider & Select" description="Range sliders and dropdown select options." code={`<Slider defaultValue={[50]} max={100} step={1} />

<Select defaultValue="student">
  <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="student">Student</SelectItem>
    <SelectItem value="educator">Educator</SelectItem>
  </SelectContent>
</Select>`}>
                <div className="grid sm:grid-cols-2 gap-6 w-full">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-xs font-medium">Range Slider</Label>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>

                  <div>
                    <Label className="text-xs font-medium mb-1.5 block">Select Role</Label>
                    <Select defaultValue="student">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select user role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="educator">Educator / Teacher</SelectItem>
                        <SelectItem value="researcher">Researcher</SelectItem>
                        <SelectItem value="admin">Administrator</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </DemoCard>

              {/* Field Validation & Input OTP */}
              <DemoCard title="Field Wrapper & Input OTP" description="Field error messages and OTP PIN inputs." code={`<Field>
  <FieldLabel>Email</FieldLabel>
  <Input />
  <FieldDescription>Invalid email address format</FieldDescription>
</Field>

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
  </InputOTPGroup>
</InputOTP>`}>
                <div className="grid sm:grid-cols-2 gap-6 w-full items-end">
                  <Field>
                    <FieldLabel className="text-xs">Username Field</FieldLabel>
                    <Input placeholder="Enter username..." />
                    <FieldDescription className="text-[11px]">Must be at least 3 characters long.</FieldDescription>
                  </Field>

                  <div>
                    <Label className="text-xs font-medium mb-2 block">Security PIN (Input OTP)</Label>
                    <InputOTP maxLength={6} defaultValue="123456">
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </div>
              </DemoCard>
            </Section>
          )}

          {/* ========================================================================= */}
          {/* 5. DATA DISPLAY & CARDS */}
          {/* ========================================================================= */}
          {matchesFilter("data-display", ["card", "badge", "avatar", "kbd", "separator", "skeleton", "item", "attachment", "bubble", "empty", "marker"]) && (
            <Section id="data-display" title="Data Display & Layout Cards" description="Cards, badges, avatars, empty states, and attachment components." badge="Data Display" icon={Layout}>
              
              {/* Badges */}
              <DemoCard title="Badges" description="Status indicators in multiple color variants." code={`<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}>
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="ghost">Ghost</Badge>
                <Badge variant="outline" className="gap-1">
                  <span className="size-1.5 rounded-full bg-green-500 animate-pulse" /> Active Session
                </Badge>
              </DemoCard>

              {/* Avatars */}
              <DemoCard title="Avatars" description="User profile picture avatars with fallback initials." code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Avatar" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback className="bg-primary/20 text-primary font-semibold">ED</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">GC</AvatarFallback>
                  </Avatar>
                </div>
              </DemoCard>

              {/* Items & Attachments */}
              <DemoCard title="List Item & File Attachment" description="Structured list rows and file upload cards." code={`<Item>
  <ItemContent>
    <ItemTitle>Lecture Notes 1</ItemTitle>
    <ItemDescription>PDF Document • 1.2MB</ItemDescription>
  </ItemContent>
</Item>`}>
                <div className="grid sm:grid-cols-2 gap-4 w-full">
                  <Item variant="outline">
                    <ItemContent>
                      <ItemTitle>Algorithms & Data Structures</ItemTitle>
                      <ItemDescription>PDF Resource • Uploaded yesterday</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Button size="xs" variant="outline">View</Button>
                    </ItemActions>
                  </Item>

                  <Attachment size="default">
                    <AttachmentMedia variant="icon"><FileText className="size-4" /></AttachmentMedia>
                    <AttachmentContent>
                      <AttachmentTitle>Physics_Lab_Report.pdf</AttachmentTitle>
                      <AttachmentDescription>2.4 MB • Complete</AttachmentDescription>
                    </AttachmentContent>
                  </Attachment>
                </div>
              </DemoCard>

              {/* Standard Card */}
              <DemoCard title="Card Component" description="Structured containers for content sections." code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Description text goes here.</CardDescription>
  </CardHeader>
  <CardContent><p>Card inner content...</p></CardContent>
  <CardFooter><Button size="sm">Action</Button></CardFooter>
</Card>`}>
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center justify-between">
                      Computer Science 101 Notes
                      <Badge variant="secondary">PDF</Badge>
                    </CardTitle>
                    <CardDescription>Shared by Prof. Alan Turing • 2.4 MB</CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs text-muted-foreground">
                    Comprehensive study guide covering data structures, algorithm complexities (Big O), and basic binary trees.
                  </CardContent>
                  <CardFooter className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">1,240 downloads</span>
                    <Button size="sm">Download Resource</Button>
                  </CardFooter>
                </Card>
              </DemoCard>

              {/* Skeleton & Empty State */}
              <DemoCard title="Skeleton Loading & Empty State" description="Loading placeholders and empty content states." code={`<Skeleton className="h-4 w-[250px]" />

<Empty>
  <EmptyTitle>No items found</EmptyTitle>
  <EmptyDescription>Upload your first file to get started.</EmptyDescription>
</Empty>`}>
                <div className="grid sm:grid-cols-2 gap-6 w-full items-center">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-mono text-muted-foreground">Skeleton Loading State:</span>
                    <div className="flex items-center gap-3">
                      <Skeleton className="size-10 rounded-full" />
                      <div className="space-y-1.5 flex-1">
                        <Skeleton className="h-4 w-3/4 rounded" />
                        <Skeleton className="h-3 w-1/2 rounded" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-dashed border-border/80 text-center">
                    <Empty>
                      <EmptyTitle className="text-sm font-semibold">No Documents Uploaded</EmptyTitle>
                      <EmptyDescription className="text-xs text-muted-foreground">Get started by sharing your first study notes.</EmptyDescription>
                    </Empty>
                  </div>
                </div>
              </DemoCard>
            </Section>
          )}

          {/* ========================================================================= */}
          {/* 6. NAVIGATION & TABS */}
          {/* ========================================================================= */}
          {matchesFilter("navigation", ["navigation", "breadcrumb", "pagination", "tabs", "menu", "menubar"]) && (
            <Section id="navigation" title="Navigation & Tabs" description="Breadcrumbs, pagination controls, and tabs." badge="Navigation" icon={NavIcon}>
              
              {/* Breadcrumbs */}
              <DemoCard title="Breadcrumbs" description="Hierarchical navigation path." code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Styleguide</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem><BreadcrumbLink href="#">Dashboard</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbLink href="#">Courses</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbPage>Computer Science</BreadcrumbPage></BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </DemoCard>

              {/* Tabs */}
              <DemoCard title="Tabs (Default & Line Variants)" description="Tabbed content navigation." code={`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="components">Components</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview tab content...</TabsContent>
</Tabs>`}>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="components">Components</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="p-3 border border-border/60 rounded-lg mt-2 text-xs">
                    Overview tab content showing general system statistics.
                  </TabsContent>
                  <TabsContent value="components" className="p-3 border border-border/60 rounded-lg mt-2 text-xs">
                    Components tab showcasing available design primitives.
                  </TabsContent>
                  <TabsContent value="settings" className="p-3 border border-border/60 rounded-lg mt-2 text-xs">
                    Preferences & theme customization settings.
                  </TabsContent>
                </Tabs>
              </DemoCard>

              {/* Pagination */}
              <DemoCard title="Pagination" description="Multi-page pagination control." code={`<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`}>
                <Pagination className="w-full">
                  <PaginationContent>
                    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                    <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationEllipsis /></PaginationItem>
                    <PaginationItem><PaginationNext href="#" /></PaginationItem>
                  </PaginationContent>
                </Pagination>
              </DemoCard>
            </Section>
          )}

          {/* ========================================================================= */}
          {/* 7. OVERLAYS & DIALOGS */}
          {/* ========================================================================= */}
          {matchesFilter("overlays", ["dialog", "alert-dialog", "sheet", "drawer", "popover", "hover-card", "dropdown-menu", "tooltip"]) && (
            <Section id="overlays" title="Overlays & Dialogs" description="Modals, side sheets, drawers, dropdowns, and tooltips." badge="Overlays & Modals" icon={Layers}>
              
              {/* Dialog & Alert Dialog */}
              <DemoCard title="Dialog & Alert Dialog" description="Modal popup dialogs and confirmation alerts." code={`<Dialog>
  <DialogTrigger render={<Button>Open Dialog</Button>} />
  <DialogContent>
    <DialogHeader><DialogTitle>Edit Profile</DialogTitle></DialogHeader>
  </DialogContent>
</Dialog>`}>
                <div className="flex flex-wrap items-center gap-3">
                  {/* Standard Dialog */}
                  <Dialog>
                    <DialogTrigger render={<Button variant="outline"><ExternalLink className="size-4 mr-1.5" /> Standard Modal Dialog</Button>} />
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Create New Note</DialogTitle>
                        <DialogDescription>Add a new learning module to your personal notebook.</DialogDescription>
                      </DialogHeader>
                      <div className="py-3 space-y-3">
                        <Label className="text-xs">Title</Label>
                        <Input placeholder="e.g. Advanced Calculus Lecture 4" />
                      </div>
                      <DialogFooter>
                        <DialogClose render={<Button variant="ghost">Cancel</Button>} />
                        <Button>Save Note</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  {/* Alert Dialog */}
                  <AlertDialog>
                    <AlertDialogTrigger render={<Button variant="destructive">Confirm Deletion</Button>} />
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete the selected document from EDUshare servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                          Delete Permanently
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </DemoCard>

              {/* Side Sheet & Popover */}
              <DemoCard title="Sheet Drawer & Tooltip" description="Slide-over panels and hover tooltips." code={`<Sheet>
  <SheetTrigger render={<Button>Open Drawer</Button>} />
  <SheetContent side="right">Side panel content...</SheetContent>
</Sheet>`}>
                <div className="flex flex-wrap items-center gap-4">
                  {/* Sheet Drawer */}
                  <Sheet>
                    <SheetTrigger render={<Button variant="secondary">Open Side Drawer Panel</Button>} />
                    <SheetContent side="right">
                      <SheetHeader>
                        <SheetTitle>Resource Details</SheetTitle>
                        <SheetDescription>View extended file metadata and download permissions.</SheetDescription>
                      </SheetHeader>
                      <div className="py-6 space-y-4 text-xs">
                        <p><strong>File Name:</strong> Physics_Lab_Report.pdf</p>
                        <p><strong>File Size:</strong> 4.8 MB</p>
                        <p><strong>License:</strong> Creative Commons (CC-BY-4.0)</p>
                      </div>
                      <SheetFooter>
                        <Button className="w-full">Download Now</Button>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>

                  {/* Tooltip */}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger render={
                        <Button variant="outline" size="icon" aria-label="Help info">
                          <HelpCircle className="size-4" />
                        </Button>
                      } />
                      <TooltipContent>
                        <p className="text-xs">Click for platform guidelines & FAQ</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </DemoCard>
            </Section>
          )}

          {/* ========================================================================= */}
          {/* 8. FEEDBACK & STATUS */}
          {/* ========================================================================= */}
          {matchesFilter("feedback", ["alert", "toast", "progress", "status", "notification"]) && (
            <Section id="feedback" title="Feedback & Status" description="Alerts, toast banners, and progress bars." badge="Feedback" icon={Bell}>
              
              {/* Alerts */}
              <DemoCard title="Alerts" description="Information and warning alert banners." code={`<Alert>
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your file has been uploaded.</AlertDescription>
</Alert>`}>
                <div className="grid gap-3 w-full">
                  <Alert>
                    <Info className="size-4 text-primary" />
                    <AlertTitle className="text-xs font-semibold">Information Alert</AlertTitle>
                    <AlertDescription className="text-xs">
                      The EDUshare database will undergo routine maintenance tonight at 02:00 UTC.
                    </AlertDescription>
                  </Alert>

                  <Alert variant="destructive">
                    <AlertTriangle className="size-4 text-destructive" />
                    <AlertTitle className="text-xs font-semibold">Destructive Alert</AlertTitle>
                    <AlertDescription className="text-xs">
                      Connection lost. Unable to synchronize your offline changes.
                    </AlertDescription>
                  </Alert>
                </div>
              </DemoCard>

              {/* Progress & Toast */}
              <DemoCard title="Progress Bar & Toast Trigger" description="Completion progress bar and toast notifications." code={`<Progress value={65} />
<ToastDemoButton />`}>
                <div className="grid sm:grid-cols-2 gap-6 w-full items-center">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-medium">Upload Progress</span>
                      <span className="font-mono text-muted-foreground">{progressVal}%</span>
                    </div>
                    <Progress value={progressVal} />
                  </div>

                  <div className="flex justify-center">
                    <ToastDemoButton />
                  </div>
                </div>
              </DemoCard>
            </Section>
          )}

          {/* ========================================================================= */}
          {/* 9. DISCLOSURES & INTERACTIVE WIDGETS */}
          {/* ========================================================================= */}
          {matchesFilter("disclosure", ["accordion", "calendar"]) && (
            <Section id="disclosure" title="Disclosures & Widgets" description="Accordions and date pickers." badge="Disclosures" icon={Sliders}>
              
              {/* Accordion */}
              <DemoCard title="Accordion" description="Collapsible accordion panel items." code={`<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is EDUshare free to use?</AccordionTrigger>
    <AccordionContent>Yes, EDUshare is completely free for students.</AccordionContent>
  </AccordionItem>
</Accordion>`}>
                <Accordion className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is EDUshare?</AccordionTrigger>
                    <AccordionContent>
                      EDUshare is an open educational platform designed to facilitate peer-to-peer resource sharing, lecture notes, and study material.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I upload lecture notes?</AccordionTrigger>
                    <AccordionContent>
                      Simply navigate to your course dashboard and click the "Upload Resource" button to publish notes in PDF, Markdown, or docx formats.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </DemoCard>

              {/* Calendar Widget */}
              <DemoCard title="Calendar Widget" description="Interactive date selection component." code={`<Calendar mode="single" selected={date} onSelect={setDate} />`}>
                <div className="flex flex-wrap items-center justify-center gap-6 w-full py-2">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-lg border border-border bg-card shadow-xs"
                  />
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p><strong>Selected Date:</strong></p>
                    <p className="font-mono text-foreground text-sm bg-muted p-2 rounded border border-border/60">
                      {date ? date.toDateString() : "No date selected"}
                    </p>
                  </div>
                </div>
              </DemoCard>
            </Section>
          )}

        </main>

        {/* Toast Viewport */}
        <ToastViewport />

        {/* Footer */}
        <footer className="border-t border-border/60 py-6 bg-muted/20 mt-12 text-center text-xs text-muted-foreground">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-500" /> EDUshare Design System • Powered by Vite, React 19, Tailwind CSS v4 & Base Nova</p>
            <div className="flex items-center gap-4">
              <a href="#typography" className="hover:underline">Typography</a>
              <a href="#colors" className="hover:underline">Colors</a>
              <a href="#buttons" className="hover:underline">Components</a>
            </div>
          </div>
        </footer>
      </div>
    </ToastProvider>
  )
}

export default StyleguidePage
