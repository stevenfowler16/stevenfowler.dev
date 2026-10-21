import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Code2,
  Compass,
  ExternalLink,
  FolderGit2,
  Github,
  Layers,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
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
  category: 'SaaS & DevTools' | 'Interactive & Web Apps' | 'Architecture & .NET';
  description: string;
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
      'A portfolio of four standalone commercial Azure DevOps web extensions (EnvMatrix, PolicyGuard, EngPulse DORA + SPACE analytics, and MermaidScope) engineered with a 100% client-side, zero-external-data-egress architecture and an offline cryptographic licensing engine.',
    highlights: [
      'Zero external data egress — runs entirely inside the customer Azure DevOps iframe context',
      'Cross-environment Variable Group diffing, branch policy drift remediation, and DORA + SPACE engineering metrics',
      'Two-tier offline BYOL cryptographic licensing engine with zero recurring cloud hosting overhead',
    ],
    tags: ['TypeScript', 'React', 'Azure DevOps SDK', 'Web Crypto', 'Cloudflare'],
    liveUrl: 'https://shipwrighthq.com',
    accentGradient: 'from-[#c561f6] via-[#7611a6] to-[#4c11c6]',
    badgeText: 'shipwrighthq.com',
  },
  {
    id: 'callsheet',
    title: 'The Callsheet',
    subtitle: 'Daily Cinema Dispatch & Collaborative Film Club',
    category: 'Interactive & Web Apps',
    description:
      'A daily cinephile deduction game featuring a 7-day rotating puzzle mechanic (Web Audio synth motifs, box office curves, frame crops, and script redactions), workplace film leagues, 27 collectible movie prop badges, and studio supervisor Otto the Cat.',
    highlights: [
      '7-day themed puzzle rotation with procedural Web Audio synthesizer soundtracks and waveform visualizers',
      'Private workplace & friend leagues with live daily leaderboards and season standings',
      'Deployed at the edge on Cloudflare Workers with Supabase Postgres & Row-Level Security',
    ],
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Web Audio API', 'Cloudflare'],
    liveUrl: 'https://callsheet.quest',
    accentGradient: 'from-[#f59e0b] via-[#c561f6] to-[#7611a6]',
    badgeText: 'callsheet.quest',
  },
  {
    id: 'taxa',
    title: 'TAXA',
    subtitle: 'Daily Nature & Biology Connections',
    category: 'Interactive & Web Apps',
    description:
      'A mobile-first daily wildlife and ecosystem deduction game with dual-track difficulty (Fledgling & Naturalist modes), procedural Web Audio biome soundscapes, tap-to-speak pronunciation, and collectible 16-bit pixel-art specimen cards.',
    highlights: [
      'Dual-track difficulty modes tailored for both young learners (Fledgling) and biology enthusiasts (Naturalist)',
      'Custom 24×24 16-bit pixel-art specimen card engine and procedural avian & biome Web Audio synthesizer',
      'Offline-ready Progressive Web App (PWA) with zero-friction instant play and shareable expedition grids',
    ],
    tags: ['JavaScript', 'Web Audio API', 'PWA', '16-Bit Pixel Engine', 'Supabase'],
    repoUrl: 'https://github.com/stevenfowler16',
    accentGradient: 'from-[#10b981] via-[#059669] to-[#4c11c6]',
    badgeText: 'Daily Game & PWA',
  },
  {
    id: 'net-architecture',
    title: '.NET Architecture Examples',
    subtitle: 'Enterprise .NET Reference Patterns & Clean Architecture',
    category: 'Architecture & .NET',
    description:
      'Open-source reference implementations exploring clean architecture, modular boundaries, domain-driven design, and maintainable enterprise backend patterns in modern .NET.',
    highlights: [
      'Clear separation of domain, application, infrastructure, and presentation layers',
      'Pragmatic patterns for testable services, dependency inversion, and long-term maintainability',
      'Designed as a hands-on architectural reference for full-stack .NET engineering teams',
    ],
    tags: ['C#', '.NET', 'Clean Architecture', 'System Design', 'Enterprise Patterns'],
    repoUrl: 'https://github.com/stevenfowler16/NETArchitectureExamples',
    accentGradient: 'from-[#6366f1] via-[#8b5cf6] to-[#c561f6]',
    badgeText: 'Open Source',
  },
];

const CATEGORIES = [
  'All',
  'SaaS & DevTools',
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
              Virginia — building resilient full-stack systems, high-trust engineering
              cultures, and thoughtful digital products.
            </p>

            {/* Role Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-[#7611a6] text-white shadow-sm shadow-[#7611a6]/30">
                <Code2 className="w-4 h-4" /> Developer
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-[#141925] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800">
                <Layers className="w-4 h-4 text-[#c561f6]" /> Full Stack (.NET &amp; TypeScript)
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-[#141925] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800">
                <Trophy className="w-4 h-4 text-[#c561f6]" /> Team Leadership
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-[#141925] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800">
                <Compass className="w-4 h-4 text-[#c561f6]" /> Product Strategy
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
                  <span className="text-[#c561f6] font-medium">Software Engineering &amp; Architecture</span>
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
                  Primarily working in .NET and TypeScript, while always staying open to
                  the right tool for the job — from enterprise backend architectures to
                  edge-deployed web applications.
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
                  Focusing on creating a great culture where engineers have clarity,
                  ownership, and mentorship to ship high-leverage software with confidence.
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
                  Working closely with stakeholders to bridge technical architecture and
                  product goals — delivering measurable, sustainable value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Projects Section */}
        <section id="projects" className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7611a6] dark:text-[#c561f6]">
                <Sparkles className="w-4 h-4" />
                <span>Featured Engineering &amp; Product Work</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#090b11] dark:text-white">
                Selected Work
              </h2>
              <p className="text-slate-600 dark:text-[#a3acc8] text-base sm:text-lg">
                A look at recent commercial developer tools, daily interactive web games,
                and architectural reference projects I’ve designed and built.
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
                {/* Top Gradient Accent Bar */}
                <div
                  className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${project.accentGradient} mb-6`}
                />

                <div className="space-y-4 flex-1">
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

                  {/* Key Highlights */}
                  <ul className="space-y-2 pt-2">
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
                  </div>
                </div>
              </article>
            ))}
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
