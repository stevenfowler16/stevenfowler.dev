import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  ExternalLink,
  FolderGit2,
  Github,
  Layers,
  Lock,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  X,
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'SaaS & DevTools' | 'Edge Platforms & Data' | 'Interactive & Web Apps' | 'Architecture & .NET';
  description: string;
  architecturalThesis: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  accentGradient: string;
  badgeText: string;
}

const PROJECTS: Project[] = [
  {
    id: 'shipwright',
    title: 'Shipwright',
    subtitle: 'Commercial Azure DevOps Extensions Suite',
    category: 'SaaS & DevTools',
    description:
      'A portfolio of four standalone commercial Azure DevOps web extensions (EnvMatrix, PolicyGuard, EngPulse DORA + SPACE analytics, and MermaidScope) engineered with a 100% client-side, zero-external-data-egress architecture.',
    architecturalThesis:
      'Enterprise security teams routinely block third-party SaaS tools that exfiltrate source code or pipeline metadata. Running 100% client-side inside the Azure DevOps host frame with an offline Web Crypto BYOL licensing engine eliminates procurement friction and reduces cloud hosting overhead to $0/month.',
    highlights: [
      'EnvMatrix: Multi-environment Variable Group diff matrix, unmasked secret detector, and pipeline blast-radius scanner',
      'PolicyGuard: Cross-repo branch policy compliance matrix, 1-click drift remediation, and SOC2/ISO27001 evidence exporter',
      'EngPulse: Zero-egress DORA metrics scorecard, PR cycle-time stage forensics, and reviewer load balancer',
    ],
    tags: ['TypeScript', 'React', 'Azure DevOps SDK', 'Web Crypto BYOL', 'Zero-Egress Architecture'],
    liveUrl: 'https://shipwrighthq.com',
    accentGradient: 'from-[#c561f6] via-[#7611a6] to-[#4c11c6]',
    badgeText: 'shipwrighthq.com',
  },
  {
    id: 'rafters',
    title: 'Rafters',
    subtitle: 'Fantasy Sports Intelligence Hub & Multi-Persona Discord Engine',
    category: 'Edge Platforms & Data',
    description:
      'A full-stack sports analytics platform ("Where Dynasties Hang Forever") that reconstructs 15+ years of ESPN league history, calculates expected win variance and point spreads, and powers an automated Discord intelligence bot with 5 switchable analytical personas.',
    architecturalThesis:
      'Built on Cloudflare Python Workers at the edge paired with Supabase and Stripe, combining historical multi-decade data normalization with real-time Sunday/Monday game-day polling for lead changes, clutch nail-biters, and bench efficiency.',
    highlights: [
      'Reconstructs 15+ years of longitudinal league history, career trophy rooms, and head-to-head rivalries',
      'Quantitative analytics engine: All-Play Expected Win % ("Luck Index"), Power Rankings 2.0, and implied point spreads',
      '5 switchable Discord broadcast personas (ESPN Broadcast Analyst, Stathead, Classic Commissioner, Savage Roaster, Spreads)',
    ],
    tags: ['Python', 'Cloudflare Python Workers', 'Supabase', 'Discord API', 'Stripe', 'Statistical Modeling'],
    liveUrl: 'https://raftersfantasy.com',
    accentGradient: 'from-[#10b981] via-[#059669] to-[#7611a6]',
    badgeText: 'raftersfantasy.com',
  },
  {
    id: 'callsheet',
    title: 'The Callsheet',
    subtitle: 'Daily Cinema Dispatch & Collaborative Film Club',
    category: 'Interactive & Web Apps',
    description:
      'A daily cinephile deduction game featuring a 7-day rotating puzzle mechanic (Web Audio synth motifs, box office curves, frame crops, and script redactions), workplace film leagues, 27 collectible movie prop badges, and studio supervisor Otto the Cat.',
    architecturalThesis:
      'Designed for zero-friction daily play with guest-to-authenticated UUID state migration, strict Supabase Row-Level Security (RLS) inside a dedicated schema, and procedural Web Audio synthesizer soundtracks.',
    highlights: [
      '7-day themed puzzle rotation with procedural Web Audio synth motifs and animated waveform visualizers',
      'Collaborative workplace & friend film leagues with live daily leaderboards and season standings',
      'Edge-deployed on Cloudflare Workers with isolated Supabase Postgres schema and automated archival play',
    ],
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'Supabase RLS', 'Web Audio API', 'Cloudflare'],
    liveUrl: 'https://callsheet.quest',
    accentGradient: 'from-[#f59e0b] via-[#c561f6] to-[#7611a6]',
    badgeText: 'callsheet.quest',
  },
  {
    id: 'obsidian-gateway',
    title: 'Obsidian Multi-Site & Email Gateway',
    subtitle: 'Multi-Tenant Knowledge Portal & Edge Email-to-Markdown Pipeline',
    category: 'Edge Platforms & Data',
    description:
      'A live-synced multi-site web portal and authentication gateway powered directly by an Obsidian Markdown vault, featuring granular per-user RBAC and an automated Cloudflare Email Worker that ingests incoming emails and URLs into structured Markdown notes.',
    architecturalThesis:
      'Bridges local-first Markdown authoring with edge cloud publishing using Next.js (OpenNext on Cloudflare Workers), scrypt-hashed passcodes, and an inbound email worker that parses, scrapes, and standardizes content automatically.',
    highlights: [
      'Turns any Obsidian vault folder into an isolated web portal with per-user scrypt passcode RBAC and admin curation',
      'Inbound Cloudflare Email Routing worker with URL scraping and structured Markdown frontmatter generation',
      'Interactive recipe scaling (0.5×–3×), step-by-step cook mode, built-in timers, and Supabase guestbook persistence',
    ],
    tags: ['Next.js', 'OpenNext', 'Cloudflare Workers', 'Email Routing Worker', 'Supabase', 'TypeScript'],
    accentGradient: 'from-[#3b82f6] via-[#6366f1] to-[#c561f6]',
    badgeText: 'Edge Architecture',
  },
  {
    id: 'taxa',
    title: 'TAXA',
    subtitle: 'Daily Nature & Biology Connections Game & PWA',
    category: 'Interactive & Web Apps',
    description:
      'A mobile-first daily wildlife and ecosystem deduction game with dual-track difficulty (Fledgling & Naturalist modes), procedural Web Audio biome soundscapes, tap-to-speak pronunciation, and collectible 16-bit pixel-art specimen cards.',
    architecturalThesis:
      'Engineered with zero external UI framework dependencies—using a custom 24×24 16-bit pixel-art sprite renderer and procedural Web Audio synthesizer to deliver an instant-loading, offline-capable Progressive Web App.',
    highlights: [
      'Dual-track difficulty modes tailored for both young learners (Fledgling) and biology enthusiasts (Naturalist)',
      'Custom 24×24 16-bit pixel-art specimen card engine and procedural avian & biome Web Audio soundscapes',
      'Offline-ready PWA with zero-login instant play, field journal honors shelf, and family discussion prompts',
    ],
    tags: ['JavaScript', 'Web Audio API', 'PWA', '16-Bit Pixel Engine', 'Supabase'],
    accentGradient: 'from-[#14b8a6] via-[#10b981] to-[#4c11c6]',
    badgeText: 'Daily Game & PWA',
  },
  {
    id: 'net-architecture',
    title: 'Enterprise .NET Modernization Patterns',
    subtitle: 'Legacy .NET Framework to Modern .NET Multi-Targeting Reference',
    category: 'Architecture & .NET',
    description:
      'Reference implementation demonstrating pragmatic code-sharing and incremental migration boundaries between legacy .NET Framework applications and modern .NET workloads using .NET Standard contracts.',
    architecturalThesis:
      'Enterprise .NET migrations rarely happen in a single big-bang rewrite. Isolating core domain logic in .NET Standard allows legacy .NET Framework apps and modern .NET web services to evolve side-by-side with minimal coupling.',
    highlights: [
      'Demonstrates shared domain libraries across .NET Framework console workloads and modern .NET web applications',
      'Evaluates architectural trade-offs between direct project references and internal NuGet package boundaries',
      'Grounded in real-world enterprise modernization and full-stack .NET architecture',
    ],
    tags: ['C#', '.NET', '.NET Standard', 'Legacy Modernization', 'Clean Architecture'],
    repoUrl: 'https://github.com/stevenfowler16/NETArchitectureExamples',
    accentGradient: 'from-[#6366f1] via-[#8b5cf6] to-[#c561f6]',
    badgeText: 'Open Source Reference',
  },
];

const CATEGORIES = [
  'All',
  'SaaS & DevTools',
  'Edge Platforms & Data',
  'Interactive & Web Apps',
  'Architecture & .NET',
] as const;

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>('All');

  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle('dark', nextDark);
    try {
      localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    } catch {
      // Ignore storage errors
    }
  };

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col ambient-mesh relative overflow-x-hidden">
      {/* Top Ambient Decorative Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[950px] h-[420px] bg-gradient-to-tr from-[#c561f6]/20 via-[#7611a6]/15 to-[#4c11c6]/10 blur-3xl -z-10 rounded-full"
      />

      {/* Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#f8f9fc]/80 dark:bg-[#090b11]/80 border-b border-slate-200/70 dark:border-slate-800/80 transition-colors">
        <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#"
            className="group flex items-center gap-3 font-display font-semibold text-lg tracking-tight text-[#090b11] dark:text-white"
          >
            <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#c561f6] via-[#7611a6] to-[#1c0056] text-white shadow-md shadow-[#7611a6]/25 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5" />
            </span>
            <span>Steven Fowler</span>
          </a>

          {/* Desktop Nav Pill */}
          <div className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/90 dark:bg-[#141925]/90 border border-slate-200/90 dark:border-slate-800 shadow-sm">
            <a
              href="#about"
              className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6] hover:bg-purple-500/10 transition-colors"
            >
              Overview
            </a>
            <a
              href="#pillars"
              className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6] hover:bg-purple-500/10 transition-colors"
            >
              Core Pillars
            </a>
            <a
              href="#projects"
              className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6] hover:bg-purple-500/10 transition-colors"
            >
              Selected Work
            </a>
            <a
              href="#leadership"
              className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6] hover:bg-purple-500/10 transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6] hover:bg-purple-500/10 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/stevenfowler16"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6] hover:bg-slate-200/60 dark:hover:bg-slate-800/70 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:stevenfowler16@gmail.com"
              aria-label="Email Steven Fowler"
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6] hover:bg-slate-200/60 dark:hover:bg-slate-800/70 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>

            {/* Theme Toggle Pill */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              aria-pressed={isDark}
              className="relative flex items-center p-1 rounded-full bg-slate-200/80 dark:bg-[#141925] border border-purple-500/30 shadow-inner cursor-pointer transition-colors"
            >
              <span
                className={`flex items-center justify-center w-7 h-7 rounded-full transition-all ${
                  !isDark
                    ? 'bg-[#7611a6] text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                <Sun className="w-4 h-4" />
              </span>
              <span
                className={`flex items-center justify-center w-7 h-7 rounded-full transition-all ${
                  isDark
                    ? 'bg-[#c561f6] text-[#090b11] shadow-sm'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                <Moon className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-full bg-slate-200/70 dark:bg-[#141925] border border-purple-500/30 text-slate-700 dark:text-slate-200"
            >
              {isDark ? <Moon className="w-4 h-4 text-[#c561f6]" /> : <Sun className="w-4 h-4 text-[#7611a6]" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-xl bg-white dark:bg-[#141925] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#141925]/95 backdrop-blur-lg px-6 py-5 space-y-4">
            <div className="flex flex-col space-y-2">
              {[
                { label: 'Overview', href: '#about' },
                { label: 'Core Pillars', href: '#pillars' },
                { label: 'Selected Work', href: '#projects' },
                { label: 'Engineering Philosophy', href: '#leadership' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg font-medium text-slate-800 dark:text-slate-200 hover:bg-purple-500/10 hover:text-[#7611a6] dark:hover:text-[#c561f6]"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
              <a
                href="https://github.com/stevenfowler16"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#c561f6]"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="mailto:stevenfowler16@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#c561f6]"
              >
                <Mail className="w-4 h-4" /> stevenfowler16@gmail.com
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 md:py-20 space-y-24 md:space-y-32">
        {/* Hero Section */}
        <section
          id="about"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center"
        >
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-purple-500/10 dark:bg-purple-500/15 text-[#7611a6] dark:text-[#c561f6] border border-purple-500/25">
              <MapPin className="w-3.5 h-3.5" />
              <span>Charlottesville, Virginia</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#090b11] dark:text-white leading-[1.08]">
              Hello, my name is{' '}
              <span className="bg-gradient-to-r from-[#c561f6] via-[#9d4edd] to-[#7611a6] bg-clip-text text-transparent">
                Steven Fowler
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-[#a3acc8] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I am a Software Developer and Engineering Leader based in Charlottesville,
              Virginia — architecting resilient full-stack systems, leading high-ownership
              engineering teams, and shipping commercial developer tools and edge-native
              products.
            </p>

            {/* Role Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-[#7611a6] text-white shadow-sm shadow-[#7611a6]/30">
                <Code2 className="w-4 h-4" /> Developer
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-[#141925] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800">
                <Layers className="w-4 h-4 text-[#c561f6]" /> Full Stack (.NET, TypeScript, Python)
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-[#141925] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800">
                <Trophy className="w-4 h-4 text-[#c561f6]" /> Team Leadership
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-[#141925] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800">
                <Compass className="w-4 h-4 text-[#c561f6]" /> Product &amp; Systems Strategy
              </span>
            </div>

            {/* Hero Actions */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-medium text-white bg-gradient-to-r from-[#c561f6] via-[#7611a6] to-[#4c11c6] hover:opacity-95 shadow-lg shadow-[#7611a6]/25 transition-all"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:stevenfowler16@gmail.com"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-medium text-slate-800 dark:text-white bg-white/90 dark:bg-[#141925]/90 hover:bg-slate-100 dark:hover:bg-[#1f2637] border border-slate-200 dark:border-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#c561f6]" />
                <span>Send Me a Message</span>
              </a>
            </div>
          </div>

          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-md w-full">
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-[#c561f6]/40 via-[#7611a6]/30 to-[#4c11c6]/40 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative rounded-[1.75rem] overflow-hidden border border-white/40 dark:border-slate-700/70 bg-[#141925] shadow-2xl">
                <img
                  src="/assets/portrait.jpg"
                  alt="Steven Fowler portrait picture"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[5/4] transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b11]/65 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 rounded-2xl bg-[#090b11]/75 backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm">
                  <span className="font-medium">Steven Fowler</span>
                  <span className="text-[#c561f6] font-medium">Engineering &amp; Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Core Pillars Section */}
        <section id="pillars" className="space-y-8">
          <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-white/85 dark:bg-[#141925]/75 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 dark:divide-slate-800/80">
              {/* Pillar 1 */}
              <div className="space-y-3 pt-2 md:pt-0">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#c561f6]/20 to-[#7611a6]/20 border border-[#c561f6]/30 text-[#7611a6] dark:text-[#c561f6]">
                  <Terminal className="w-6 h-6" />
                </div>
                <h2 className="font-display font-semibold text-2xl text-[#090b11] dark:text-white">
                  Full Stack
                </h2>
                <p className="text-slate-600 dark:text-[#a3acc8] leading-relaxed">
                  Primarily working in .NET, TypeScript, and Python — always choosing the
                  right architecture for the problem, from enterprise backend services to
                  zero-egress extensions and edge-deployed web platforms.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="space-y-3 pt-8 md:pt-0 md:pl-10">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#c561f6]/20 to-[#7611a6]/20 border border-[#c561f6]/30 text-[#7611a6] dark:text-[#c561f6]">
                  <Trophy className="w-6 h-6" />
                </div>
                <h2 className="font-display font-semibold text-2xl text-[#090b11] dark:text-white">
                  Team Leadership
                </h2>
                <p className="text-slate-600 dark:text-[#a3acc8] leading-relaxed">
                  Focusing on creating a high-trust engineering culture where developers
                  have clear architectural guardrails, low cognitive load, and strong
                  ownership.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="space-y-3 pt-8 md:pt-0 md:pl-10">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#c561f6]/20 to-[#7611a6]/20 border border-[#c561f6]/30 text-[#7611a6] dark:text-[#c561f6]">
                  <Compass className="w-6 h-6" />
                </div>
                <h2 className="font-display font-semibold text-2xl text-[#090b11] dark:text-white">
                  Strategy-Minded
                </h2>
                <p className="text-slate-600 dark:text-[#a3acc8] leading-relaxed">
                  Partnering with stakeholders to align system design, security compliance,
                  and unit economics with measurable business outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Projects Section */}
        <section id="projects" className="space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7611a6] dark:text-[#c561f6]">
                <Sparkles className="w-4 h-4" />
                <span>Featured Production Systems &amp; Architectures</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#090b11] dark:text-white">
                Selected Work
              </h2>
              <p className="text-slate-600 dark:text-[#a3acc8] text-base sm:text-lg">
                Commercial developer tools, full-stack edge platforms, interactive daily web
                games, and enterprise .NET modernization patterns.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      active
                        ? 'bg-[#7611a6] text-white shadow-md shadow-[#7611a6]/25'
                        : 'bg-white/80 dark:bg-[#141925]/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-[#c561f6]/50'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 bg-white/90 dark:bg-[#141925]/80 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 hover:border-[#c561f6]/60 dark:hover:border-[#c561f6]/50 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  {/* Top Gradient Accent Bar */}
                  <div
                    className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${project.accentGradient} mb-6`}
                  />

                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#7611a6] dark:text-[#c561f6]">
                          {project.category}
                        </span>
                        <h3 className="font-display font-bold text-2xl text-[#090b11] dark:text-white mt-1">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          {project.subtitle}
                        </p>
                      </div>
                      <span className="shrink-0 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 dark:bg-purple-500/15 text-[#7611a6] dark:text-[#c561f6] border border-purple-500/20">
                        {project.badgeText}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-[#a3acc8] text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Architectural Decision Callout */}
                    <div className="rounded-2xl p-4 bg-slate-100/80 dark:bg-[#090b11]/60 border border-slate-200/80 dark:border-slate-800/90 space-y-1">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#7611a6] dark:text-[#c561f6]">
                        Architectural Thesis
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.architecturalThesis}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <ul className="space-y-2 pt-1">
                      {project.highlights.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c561f6] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tags & Action Links */}
                <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-[#090b11]/70 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7611a6] dark:text-[#c561f6] hover:underline"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6]"
                      >
                        <FolderGit2 className="w-4 h-4" />
                        <span>View on GitHub</span>
                      </a>
                    )}
                    {!project.liveUrl && !project.repoUrl && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                        <Lock className="w-3.5 h-3.5 text-[#c561f6]" />
                        <span>Private Production Repository</span>
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Engineering Leadership & Operating Philosophy Section */}
        <section id="leadership" className="space-y-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7611a6] dark:text-[#c561f6]">
              <ShieldCheck className="w-4 h-4" />
              <span>How I Lead &amp; Architect</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#090b11] dark:text-white">
              Engineering Leadership Philosophy
            </h2>
            <p className="text-slate-600 dark:text-[#a3acc8] text-base sm:text-lg">
              Great software organizations scale through clarity, automated guardrails, and
              pragmatic technical judgment rather than heavy bureaucracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl p-7 bg-white/85 dark:bg-[#141925]/75 border border-slate-200/90 dark:border-slate-800/90 shadow-lg space-y-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-500/10 text-[#7611a6] dark:text-[#c561f6]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-xl text-[#090b11] dark:text-white">
                Guardrails Over Gatekeeping
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-[#a3acc8] leading-relaxed">
                Replace manual review bottlenecks with automated branch policy compliance,
                environment drift detection, and deterministic CI/CD checks so teams deploy
                safely at high velocity.
              </p>
            </div>

            <div className="rounded-3xl p-7 bg-white/85 dark:bg-[#141925]/75 border border-slate-200/90 dark:border-slate-800/90 shadow-lg space-y-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-500/10 text-[#7611a6] dark:text-[#c561f6]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-xl text-[#090b11] dark:text-white">
                Diagnostic Delivery Metrics
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-[#a3acc8] leading-relaxed">
                Use DORA and SPACE frameworks to diagnose systemic friction—like PR review
                queue imbalances or scope spillover—empowering teams rather than policing
                individuals.
              </p>
            </div>

            <div className="rounded-3xl p-7 bg-white/85 dark:bg-[#141925]/75 border border-slate-200/90 dark:border-slate-800/90 shadow-lg space-y-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-500/10 text-[#7611a6] dark:text-[#c561f6]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-xl text-[#090b11] dark:text-white">
                Constraint-Driven Architecture
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-[#a3acc8] leading-relaxed">
                Design directly around real constraints—whether that means strangler-fig
                modernization in enterprise .NET, zero-egress client extensions, or
                low-latency edge workers.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA Banner */}
        <section id="contact">
          <aside className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-white via-purple-50/50 to-indigo-50/40 dark:from-[#141925] dark:via-[#18152c] dark:to-[#0f1320] border border-slate-200/90 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-2 max-w-xl">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#090b11] dark:text-white">
                Interested in working together?
              </h2>
              <p className="text-slate-600 dark:text-[#a3acc8] text-base sm:text-lg">
                Whether you want to discuss engineering leadership, full-stack architecture,
                or a new product idea, I’d love to connect.
              </p>
            </div>

            <a
              href="mailto:stevenfowler16@gmail.com"
              className="shrink-0 inline-flex items-center gap-3 px-7 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#c561f6] via-[#7611a6] to-[#4c11c6] hover:opacity-95 shadow-lg shadow-[#7611a6]/30 transition-all"
            >
              <span>Send Me a Message</span>
              <Send className="w-4 h-4" />
            </a>
          </aside>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 dark:border-slate-800/80 py-10 px-6 text-sm text-slate-500 dark:text-[#8490b5]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="font-medium text-slate-700 dark:text-slate-300">
              &copy; {new Date().getFullYear()} Steven Fowler
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">&bull;</span>
            <span>Charlottesville, Virginia</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/stevenfowler16"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7611a6] dark:hover:text-[#c561f6] transition-colors inline-flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:stevenfowler16@gmail.com"
              className="hover:text-[#7611a6] dark:hover:text-[#c561f6] transition-colors inline-flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
