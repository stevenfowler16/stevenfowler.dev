import { useEffect, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  Award,
  BarChart3,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  Copy,
  Cpu,
  ExternalLink,
  Eye,
  Film,
  FolderGit2,
  GitBranch,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Radio,
  Send,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  Users,
  X,
} from 'lucide-react';

type ViewLens = 'executive' | 'xray';

interface OperatingPillar {
  id: string;
  code: string;
  label: string;
  title: string;
  subtitle: string;
  thesis: string;
  antiPattern: string;
  operatingStandard: string;
  signals: { metric: string; target: string; context: string }[];
  proofLabel: string;
  proofHref: string;
}

const OPERATING_PILLARS: OperatingPillar[] = [
  {
    id: 'org-scale',
    code: '01 / ORG TOPOLOGY',
    label: 'Leading Managers, Architects & Product Squads',
    title: 'Scaling a 14-Person Org Across 3 Product Teams, 1 EM & 1 Architect',
    subtitle: 'Second-Line Leadership & Cross-Team Alignment',
    thesis:
      'Transitioning from managing individual contributors to leading through an Engineering Manager and a Software Architect requires shifting from tactical code review to organizational systems design. I focus on establishing crisp ownership across our 3 product engineering teams so people leadership, architectural standards, and product delivery reinforce one another.',
    antiPattern:
      'Bottlenecking all architectural and people decisions through the Director, or letting 3 product teams drift into isolated silos.',
    operatingStandard:
      'Clear triad alignment: Engineering Manager driving coaching & sprint flow, Architect guiding cross-team .NET/system boundaries, and 3 autonomous product squads.',
    signals: [
      {
        metric: 'Org Structure',
        target: '14 Engineers & Leaders',
        context: '3 product teams + 1 Engineering Manager + 1 Software Architect',
      },
      {
        metric: 'Decision Velocity',
        target: 'Delegated Guardrails',
        context: 'Architect & EM empowered with clear RFC/ADR and delivery ownership',
      },
      {
        metric: 'Onboarding & Flow',
        target: 'Low Cognitive Load',
        context: 'Modular .NET & web boundaries that let squads ship independently',
      },
    ],
    proofLabel: 'Inspect my Org Topology & Career Arc above',
    proofHref: '#track-record',
  },
  {
    id: 'diagnostics',
    code: '02 / DIAGNOSTICS',
    label: 'Diagnostic Delivery Health (DORA + SPACE)',
    title: 'Illuminating Systemic Friction Without Weaponizing Metrics',
    subtitle: 'Evidence-Based Engineering Operations Across 3 Squads',
    thesis:
      'Goodhart’s Law destroys engineering culture the moment velocity or PR counts are used to rank individuals. Across my 3 product teams, I use DORA and SPACE telemetry strictly as an organizational stethoscope—pinpointing systemic bottlenecks like PR review pickup delays, reviewer queue imbalances, and mid-sprint scope creep so leadership can remove friction.',
    antiPattern:
      'Vanity story-point velocity targets and individual commit leaderboards that incentivize gaming over software quality.',
    operatingStandard:
      'Stage-level PR cycle-time forensics (Coding → Pickup → Review → Merge) paired with reviewer load balancing and change-failure analysis.',
    signals: [
      {
        metric: 'PR Pickup Latency',
        target: 'P75 < 4 Hours',
        context: 'Tracked via automated review-queue load balancing',
      },
      {
        metric: 'Flow Protection',
        target: 'Scope Spillover Forensics',
        context: 'Distinguishing unplanned interrupts from estimation variance',
      },
      {
        metric: 'Delivery Stability',
        target: 'DORA Elite / High Tier',
        context: 'Balancing deployment frequency with low change-failure rates',
      },
    ],
    proofLabel: 'Try the EngPulse DORA preview below',
    proofHref: '#shipwright-spotlight',
  },
  {
    id: 'governance',
    code: '03 / GOVERNANCE',
    label: 'Automated Guardrails Over CAB Gatekeeping',
    title: 'Replacing Manual Review Bottlenecks with Deterministic Policy Code',
    subtitle: 'Continuous Compliance & Blast-Radius Safety',
    thesis:
      'In regulated financial and actuarial software, compliance cannot rely on manual checklists. Real safety comes from shifting governance into automated CI/CD guardrails: cross-repository branch policy enforcement, multi-environment secret & variable drift detection, and 1-click SOC2/ISO27001 audit evidence.',
    antiPattern:
      'Manual spreadsheet checklists, snowflake environment configurations, and unmasked pipeline secrets discovered during outages.',
    operatingStandard:
      'Automated branch policy drift remediation, CODEOWNERS synchronization, and pre-deployment variable blast-radius scanning.',
    signals: [
      {
        metric: 'Policy Drift',
        target: '0 Unprotected Branches',
        context: 'Continuous cross-repo branch policy & CODEOWNERS enforcement',
      },
      {
        metric: 'Config Hygiene',
        target: 'DEV → STAGE → PROD Parity',
        context: 'Automated missing-key & unmasked secret detection',
      },
      {
        metric: 'Audit Readiness',
        target: '1-Click SOC2 Evidence',
        context: 'Instant compliance exports without developer interruption',
      },
    ],
    proofLabel: 'Inspect PolicyGuard & EnvMatrix in Shipwright',
    proofHref: '#shipwright-spotlight',
  },
  {
    id: 'architecture',
    code: '04 / ARCHITECTURE',
    label: 'Pragmatic, Constraint-Driven Systems',
    title: 'Matching System Architecture to Business & Security Realities',
    subtitle: 'Hands-On Technical Judgment & Unit Economics',
    thesis:
      'Whether partnering with our Software Architect on incremental .NET modernizations or building zero-egress client extensions and low-latency Cloudflare Workers, architecture must serve security compliance, maintainability, and unit economics. Staying hands-on in code keeps my executive judgment sharp.',
    antiPattern:
      'Resume-driven microservices or risky "big-bang" rewrites that stall product delivery across multiple quarters.',
    operatingStandard:
      'Incremental .NET Standard strangler-fig migrations, zero-egress client execution for enterprise SaaS, and edge-native compute.',
    signals: [
      {
        metric: 'SaaS Unit Economics',
        target: '$0/mo Cloud Overhead',
        context: '100% client-side execution + offline Web Crypto licensing',
      },
      {
        metric: 'Legacy Modernization',
        target: 'Zero-Downtime Strangler Fig',
        context: 'Shared .NET Standard domain contracts across .NET Framework & modern .NET',
      },
      {
        metric: 'Edge Latency',
        target: 'Global Edge Workers',
        context: 'TypeScript & Python Cloudflare Workers + Supabase RLS',
      },
    ],
    proofLabel: 'Toggle "Architecture X-Ray" on the systems below',
    proofHref: '#projects',
  },
];

interface ShipwrightModule {
  id: 'engpulse' | 'policyguard' | 'envmatrix' | 'mermaidscope';
  name: string;
  hub: string;
  tagline: string;
  summary: string;
  metrics: { label: string; value: string; status: 'optimal' | 'warning' | 'info' }[];
  telemetryRows: { left: string; middle: string; right: string; pill: string }[];
}

const SHIPWRIGHT_MODULES: ShipwrightModule[] = [
  {
    id: 'engpulse',
    name: 'EngPulse',
    hub: 'Azure Boards & Repos',
    tagline: 'Zero-Egress DORA + SPACE Engineering Intelligence',
    summary:
      'Deconstructs PR cycle time into Coding, Pickup, Review, and Merge stages, balances reviewer queues, and tracks sprint scope spillover entirely inside the browser.',
    metrics: [
      { label: 'Deploy Freq', value: '4.6 / day', status: 'optimal' },
      { label: 'PR Pickup P75', value: '1.9 hrs', status: 'optimal' },
      { label: 'Change Failure', value: '2.4%', status: 'optimal' },
    ],
    telemetryRows: [
      {
        left: 'Stage 01 · Coding → PR Open',
        middle: 'Median 6.2h',
        right: 'Healthy batch size (< 280 LOC)',
        pill: 'FLOW OK',
      },
      {
        left: 'Stage 02 · PR Pickup Wait',
        middle: 'Median 1.9h',
        right: 'Reviewer load balanced across 3 squads',
        pill: 'OPTIMAL',
      },
      {
        left: 'Stage 03 · Sprint Spillover',
        middle: '8.1% Unplanned',
        right: '2 hotfix interrupts flagged in retro',
        pill: 'DIAGNOSED',
      },
    ],
  },
  {
    id: 'policyguard',
    name: 'PolicyGuard',
    hub: 'Azure Repos',
    tagline: 'Cross-Repo Branch Governance & SOC2 Evidence Engine',
    summary:
      'Audits branch policies across dozens of repositories simultaneously, detects configuration drift, syncs CODEOWNERS, and exports signed SOC2/ISO27001 compliance artifacts in 1 click.',
    metrics: [
      { label: 'Repos Audited', value: '48 / 48', status: 'optimal' },
      { label: 'Policy Drift', value: '0 Unprotected', status: 'optimal' },
      { label: 'Audit Export', value: 'SOC2 Ready', status: 'info' },
    ],
    telemetryRows: [
      {
        left: 'core-actuarial-engine (main)',
        middle: 'Min 2 Reviewers · Build Gate',
        right: 'CODEOWNERS synced',
        pill: 'COMPLIANT',
      },
      {
        left: 'identity-gateway-net (main)',
        middle: 'Reset Votes on Push Enabled',
        right: 'Zero bypasses in 90d',
        pill: 'COMPLIANT',
      },
      {
        left: 'plan-portal-api (release/*)',
        middle: '1-Click Bulk Remediated',
        right: 'Cryptographic audit log exported',
        pill: 'ENFORCED',
      },
    ],
  },
  {
    id: 'envmatrix',
    name: 'EnvMatrix',
    hub: 'Azure Pipelines',
    tagline: 'Multi-Environment Variable Diff & Blast-Radius Scanner',
    summary:
      'Compares Variable Groups across DEV, QA, STAGE, and PROD, flags missing keys or unmasked secrets before deployment, and maps downstream pipeline blast radius.',
    metrics: [
      { label: 'Environments', value: 'DEV·QA·STG·PRD', status: 'info' },
      { label: 'Unmasked Secrets', value: '0 Exposed', status: 'optimal' },
      { label: 'Key Parity', value: '100% Synced', status: 'optimal' },
    ],
    telemetryRows: [
      {
        left: 'DB_CONN_ENCRYPTED_SECRET',
        middle: 'DEV ✓ · STAGE ✓ · PROD ✓',
        right: 'Masked secret lock verified',
        pill: 'LOCKED',
      },
      {
        left: 'CALC_WORKER_TIMEOUT_MS',
        middle: 'DEV (5000) → PROD (5000)',
        right: 'Used by 6 YAML release pipelines',
        pill: 'PARITY OK',
      },
      {
        left: 'FEATURE_FLAG_PORTAL_V2',
        middle: 'Blast Radius: 3 Product Squads',
        right: 'Pre-deploy parity check passed',
        pill: 'VERIFIED',
      },
    ],
  },
  {
    id: 'mermaidscope',
    name: 'MermaidScope',
    hub: 'Azure DevOps Wiki & Markdown',
    tagline: 'Interactive Architecture Diagrams Inside ADO',
    summary:
      'Brings pan, zoom, full-screen inspection, and architectural diagram rendering directly into Azure DevOps pull requests, wikis, and ADR documents.',
    metrics: [
      { label: 'ADR Diagrams', value: 'Interactive', status: 'optimal' },
      { label: 'Data Egress', value: '0 Bytes', status: 'optimal' },
      { label: 'License Tier', value: 'Free Community', status: 'info' },
    ],
    telemetryRows: [
      {
        left: 'ADR-014: Strangler-Fig .NET Gateway',
        middle: 'Sequence & C4 Topology',
        right: 'Rendered client-side in PR view',
        pill: 'ACTIVE',
      },
      {
        left: 'RFC-022: Cross-Squad Service Contracts',
        middle: 'State Diagram & Key Flow',
        right: 'SVG export & pan/zoom enabled',
        pill: 'ACTIVE',
      },
      {
        left: 'Platform Team Onboarding Playbook',
        middle: 'System Boundaries Map',
        right: 'Zero external CDN calls',
        pill: 'ZERO-EGRESS',
      },
    ],
  },
];

const RAFTERS_PERSONAS = [
  {
    id: 'broadcast',
    label: '🎙️ Broadcast Analyst',
    tone: 'SportsCenter Primetime Dispatch',
    sample:
      '"Week 8 Headliner: Despite posting the 2nd-highest score in the league (142.8 pts), Westside Dynasty falls to a Monday Night miracle—dropping their All-Play Luck Index to -2.4 wins on the season."',
  },
  {
    id: 'stathead',
    label: '🤓 Fantasy Stathead',
    tone: 'Expected Win Variance & Lineup Efficiency',
    sample:
      '"Quantitative Audit: Team Alpha is running a 94.2% optimal lineup efficiency over a 3-week rolling window, with an Expected Win Rate (xW%) of 0.727 against all 11 opponents."',
  },
  {
    id: 'savage',
    label: '🔥 Savage Roaster',
    tone: 'High-Energy League Banter',
    sample:
      '"Bench Regret Alert 🚨: Leaving 31.4 points on the pine while losing by 2.1 points isn’t bad luck—it’s a coaching masterclass in self-sabotage."',
  },
  {
    id: 'spreads',
    label: '🎰 Point Spreads',
    tone: 'Implied Probabilities & Over/Unders',
    sample:
      '"Opening Line: Gridiron Kings (-6.5) vs. Cville Cavaliers (+6.5) • O/U 248.5 • Implied Win Probability: 68.4% based on 15-year historical matchup variance."',
  },
] as const;

const CALLSHEET_DAYS = [
  {
    day: 'Mon · Soundtrack Synth',
    mechanic: 'Procedural Web Audio Motif',
    clue: 'Progressive 4-bar Web Audio API synthesizer motif + live canvas waveform visualizer. Solve the film in ≤ 5 guesses as additional instrument tracks unlock.',
  },
  {
    day: 'Wed · Box Office Trajectory',
    mechanic: 'Financial & Critical Curve',
    clue: 'Inspect production budget, opening weekend multiplier, inflation-adjusted domestic gross, and decade release window to deduce the feature film.',
  },
  {
    day: 'Fri · Redacted Screenplay',
    mechanic: 'Classified Script Page',
    clue: 'Read an authentic formatting-accurate screenplay excerpt with character nouns redacted; each guess reveals director, composer, or lead billing.',
  },
] as const;

interface CompactProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badgeText: string;
  accentGradient: string;
  executiveSummary: string;
  executiveOutcomes: string[];
  xrayTopology: string;
  xrayAuthAndState: string;
  xrayTradeoff: string;
  tags: string[];
  repoUrl?: string;
}

const COMPACT_PROJECTS: CompactProject[] = [
  {
    id: 'net-architecture',
    title: 'Enterprise .NET Modernization Patterns',
    subtitle: 'Legacy .NET Framework to Modern .NET Multi-Targeting Reference',
    category: 'Enterprise Architecture',
    badgeText: 'Open Source Reference',
    accentGradient: 'from-[#6366f1] via-[#8b5cf6] to-[#c561f6]',
    executiveSummary:
      'Architectural reference patterns for incrementally modernizing legacy enterprise .NET Framework applications to modern .NET without high-risk "big-bang" rewrites.',
    executiveOutcomes: [
      'De-risks multi-quarter enterprise migrations by isolating shared domain contracts in .NET Standard 2.0',
      'Allows legacy .NET Framework workloads and modern .NET web services to ship features simultaneously across squads',
      'Documents concrete team trade-offs between direct project references and internal NuGet package boundaries',
    ],
    xrayTopology: 'Legacy .NET Framework App + Modern .NET Web App → Shared .NET Standard 2.0 Domain Contract Layer',
    xrayAuthAndState: 'Compile-time multi-targeted solution boundaries with strict dependency inversion',
    xrayTradeoff:
      'Trades NuGet versioning overhead for immediate cross-solution refactoring velocity during active strangler-fig migrations.',
    tags: ['C#', '.NET', '.NET Standard 2.0', 'Strangler-Fig Migration', 'Clean Architecture'],
    repoUrl: 'https://github.com/stevenfowler16/NETArchitectureExamples',
  },
  {
    id: 'obsidian-gateway',
    title: 'Obsidian Multi-Site & Email Gateway',
    subtitle: 'Multi-Tenant Knowledge Portal & Edge Email-to-Markdown Pipeline',
    category: 'Edge Platforms & Data',
    badgeText: 'Edge Architecture',
    accentGradient: 'from-[#3b82f6] via-[#6366f1] to-[#c561f6]',
    executiveSummary:
      'Turns folders in a local Obsidian Markdown vault into isolated, access-controlled web portals with an automated Cloudflare Email Worker that converts inbound emails and URLs into structured Markdown notes.',
    executiveOutcomes: [
      'Zero-CMS authoring: write locally in Obsidian Markdown and publish selectively via frontmatter or admin curation',
      'Automated Email-to-Markdown ingestion worker with URL scraping and recipe/note standardization',
      'Granular per-user access control (Admin, Contributors, Family) with interactive guestbook & dynamic scaling',
    ],
    xrayTopology: 'Obsidian Vault / Inbound Email → Cloudflare Email Worker → OpenNext Worker → Supabase Postgres',
    xrayAuthAndState: 'scrypt-hashed passcode RBAC + HTTP-only signed sessions + Supabase live note overrides',
    xrayTradeoff:
      'Avoids heavy headless CMS licensing by compiling vault Markdown into deterministic edge bundles augmented by live Supabase state.',
    tags: ['Next.js', 'OpenNext', 'Cloudflare Workers', 'Email Routing Worker', 'Supabase', 'scrypt RBAC'],
  },
  {
    id: 'taxa',
    title: 'TAXA',
    subtitle: 'Daily Nature & Biology Connections Game & PWA',
    category: 'Interactive & Web Apps',
    badgeText: 'Daily Game & PWA',
    accentGradient: 'from-[#14b8a6] via-[#10b981] to-[#4c11c6]',
    executiveSummary:
      'A mobile-first daily wildlife and ecosystem deduction game featuring dual-track difficulty (Fledgling for kids & Naturalist for adults), collectible 16-bit specimen cards, and offline PWA support.',
    executiveOutcomes: [
      'Dual-track UX design: accessible tap-to-speak audio & 12-card mode for kids alongside 16-card evolutionary overlap for adults',
      'Collectible 16-bit pixel-art specimen cards & biome mastery citations that drive daily habit retention',
      'Frictionless zero-login instant play with optional family dinner-table discussion prompts',
    ],
    xrayTopology: 'Zero-Dependency Vanilla ES Modules → Custom 24×24 Pixel Sprite Engine → Web Audio Synth → Service Worker',
    xrayAuthAndState: 'Local-first offline PWA storage with optional Supabase anonymous telemetry & daily puzzle sync',
    xrayTradeoff:
      'Eliminated framework bundle overhead entirely—custom pixel rendering and procedural bird-call synthesis load in < 35KB.',
    tags: ['JavaScript', 'Web Audio API', 'PWA Service Worker', '16-Bit Sprite Engine', 'Supabase'],
  },
];

const CONTACT_TOPICS = [
  {
    id: 'leadership',
    label: 'Executive Leadership & Org Scale',
    subject: 'Connecting via stevenfowler.dev — Director of Engineering / Leadership',
  },
  {
    id: 'shipwright',
    label: 'Shipwright & DevOps Governance',
    subject: 'Connecting via stevenfowler.dev — Shipwright / DevOps Governance',
  },
  {
    id: 'architecture',
    label: 'Enterprise Architecture & Advisory',
    subject: 'Connecting via stevenfowler.dev — Architecture & Advisory',
  },
] as const;

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Interactive Component 1: Director's Operating System
  const [activePillarId, setActivePillarId] = useState<string>(OPERATING_PILLARS[0].id);

  // Interactive Component 2: Global Executive ROI vs. Architecture X-Ray Lens
  const [viewLens, setViewLens] = useState<ViewLens>('executive');

  // Interactive Component 3: Shipwright Module Switcher + Rafters Persona + Callsheet Day
  const [activeShipwrightId, setActiveShipwrightId] =
    useState<ShipwrightModule['id']>('engpulse');
  const [activeRaftersPersona, setActiveRaftersPersona] = useState<number>(0);
  const [activeCallsheetDay, setActiveCallsheetDay] = useState<number>(0);
  const [expandedCompactId, setExpandedCompactId] = useState<string | null>(null);

  // Contact Console State
  const [selectedTopic, setSelectedTopic] = useState<(typeof CONTACT_TOPICS)[number]>(
    CONTACT_TOPICS[0]
  );
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains('dark'));
  }, []);

  // Keyboard shortcut 'x' to toggle Executive vs. Architecture X-Ray lens
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.metaKey || e.ctrlKey || e.altKey) {
        return;
      }
      if (e.key.toLowerCase() === 'x') {
        setViewLens((prev) => (prev === 'executive' ? 'xray' : 'executive'));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('stevenfowler16@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = 'mailto:stevenfowler16@gmail.com';
    }
  };

  const activePillar =
    OPERATING_PILLARS.find((p) => p.id === activePillarId) || OPERATING_PILLARS[0];
  const activeShipwright =
    SHIPWRIGHT_MODULES.find((m) => m.id === activeShipwrightId) || SHIPWRIGHT_MODULES[0];

  return (
    <div className="min-h-screen flex flex-col ambient-mesh relative overflow-x-hidden">
      {/* Subtle Architectural Grid Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-grid-pattern -z-10"
      />

      {/* Top Ambient Decorative Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[980px] h-[440px] bg-gradient-to-tr from-[#c561f6]/20 via-[#7611a6]/15 to-[#4c11c6]/10 blur-3xl -z-10 rounded-full"
      />

      {/* Sticky Glass Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#f8f9fc]/80 dark:bg-[#090b11]/80 border-b border-slate-200/75 dark:border-white/[0.08] transition-colors">
        <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#"
            className="group flex items-center gap-3 font-display font-semibold text-lg tracking-tight text-[#090b11] dark:text-white"
          >
            <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#c561f6] via-[#7611a6] to-[#1c0056] text-white shadow-md shadow-[#7611a6]/25 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5" />
            </span>
            <div className="flex flex-col">
              <span className="leading-none">Steven Fowler</span>
              <span className="font-mono text-[11px] font-medium text-[#7611a6] dark:text-[#c561f6] mt-1">
                Director of Engineering
              </span>
            </div>
          </a>

          {/* Desktop Nav Pill */}
          <div className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/90 dark:bg-[#0f131d]/90 border border-slate-200/90 dark:border-white/[0.08] shadow-sm">
            <a
              href="#about"
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6] hover:bg-purple-500/10 transition-colors"
            >
              Overview
            </a>
            <a
              href="#track-record"
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6] hover:bg-purple-500/10 transition-colors"
            >
              Org &amp; Track Record
            </a>
            <a
              href="#leadership"
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6] hover:bg-purple-500/10 transition-colors"
            >
              Operating System
            </a>
            <a
              href="#shipwright-spotlight"
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6] hover:bg-purple-500/10 transition-colors"
            >
              Shipwright
            </a>
            <a
              href="#projects"
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6] hover:bg-purple-500/10 transition-colors"
            >
              Systems Lab
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6] hover:bg-purple-500/10 transition-colors"
            >
              Connect
            </a>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() =>
                setViewLens((prev) => (prev === 'executive' ? 'xray' : 'executive'))
              }
              title="Toggle Architecture X-Ray Lens (Shortcut: X)"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-xs font-medium border transition-all cursor-pointer ${
                viewLens === 'xray'
                  ? 'bg-[#7611a6] text-white border-[#c561f6]/50 shadow-sm shadow-[#7611a6]/30'
                  : 'bg-white/80 dark:bg-[#0f131d] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/[0.08] hover:border-[#c561f6]/40'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{viewLens === 'xray' ? 'X-Ray: ON' : 'X-Ray'}</span>
              <kbd className="hidden lg:inline-block ml-1 px-1.5 py-0.2 rounded text-[10px] bg-black/10 dark:bg-white/10">
                X
              </kbd>
            </button>

            <a
              href="https://www.linkedin.com/search/results/all/?keywords=Steven%20Fowler%20October%20Three"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6] hover:bg-slate-200/60 dark:hover:bg-slate-800/70 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/stevenfowler16"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6] hover:bg-slate-200/60 dark:hover:bg-slate-800/70 transition-colors"
            >
              <Github className="w-5 h-5" />
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
              {isDark ? (
                <Moon className="w-4 h-4 text-[#c561f6]" />
              ) : (
                <Sun className="w-4 h-4 text-[#7611a6]" />
              )}
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
                { label: 'Executive Overview', href: '#about' },
                { label: 'Org Scope & Track Record', href: '#track-record' },
                { label: 'Director’s Operating System', href: '#leadership' },
                { label: 'Shipwright Flagship Suite', href: '#shipwright-spotlight' },
                { label: 'Systems & Product Lab', href: '#projects' },
                { label: 'Connect', href: '#contact' },
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
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/search/results/all/?keywords=Steven%20Fowler%20October%20Three"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href="https://github.com/stevenfowler16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
              <button
                onClick={() => {
                  setViewLens((prev) => (prev === 'executive' ? 'xray' : 'executive'));
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-1.5 rounded-full font-mono text-xs bg-purple-500/15 text-[#7611a6] dark:text-[#c561f6]"
              >
                X-Ray ({viewLens === 'xray' ? 'ON' : 'OFF'})
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-10 md:py-16 space-y-24 md:space-y-28">
        {/* STAGE 1: ABOVE-THE-FOLD EXECUTIVE HERO + QUANTIFIED TELEMETRY SNAPSHOT */}
        <section id="about" className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Hero Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 px-3.5 py-1.5 rounded-full font-mono text-xs font-medium bg-purple-500/10 dark:bg-purple-500/15 text-[#7611a6] dark:text-[#c561f6] border border-purple-500/25">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>DIRECTOR OF ENGINEERING</span>
                <span className="opacity-40">•</span>
                <span>14-PERSON ORG (3 SQUADS · 1 EM · 1 ARCHITECT)</span>
                <span className="opacity-40">•</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Charlottesville, VA
                </span>
              </div>

              <div className="space-y-3">
                <p className="font-display font-semibold text-lg sm:text-xl text-[#7611a6] dark:text-[#c561f6] tracking-tight">
                  Steven Fowler
                </p>
                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.35rem] tracking-[-0.025em] text-[#090b11] dark:text-white leading-[1.07]">
                  Scaling high-trust engineering teams.{' '}
                  <span className="bg-gradient-to-r from-[#c561f6] via-[#9d4edd] to-[#7611a6] bg-clip-text text-transparent">
                    Building the systems that make them fast.
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-[#a3acc8] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Director of Engineering leading a{' '}
                <strong className="font-semibold text-[#090b11] dark:text-white">
                  14-person engineering organization
                </strong>{' '}
                across{' '}
                <strong className="font-semibold text-[#090b11] dark:text-white">
                  3 product teams, an Engineering Manager, and a Software Architect
                </strong>
                . I bridge executive product strategy, enterprise{' '}
                <code className="font-mono text-sm text-[#7611a6] dark:text-[#c561f6]">
                  .NET
                </code>{' '}
                modernization, and hands-on creation of commercial DevOps governance suites.
              </p>

              {/* Interactive Focus Jump Pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
                <a
                  href="#track-record"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#7611a6] text-white shadow-sm shadow-[#7611a6]/30 hover:opacity-95 transition-opacity"
                >
                  <Network className="w-3.5 h-3.5" /> 14-Person Org Topology
                </a>
                <a
                  href="#leadership"
                  onClick={() => setActivePillarId('diagnostics')}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium surface-card text-slate-700 dark:text-slate-200 hover:border-[#c561f6]/50 transition-colors"
                >
                  <BarChart3 className="w-3.5 h-3.5 text-[#c561f6]" /> DORA &amp; SPACE Diagnostics
                </a>
                <a
                  href="#leadership"
                  onClick={() => setActivePillarId('governance')}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium surface-card text-slate-700 dark:text-slate-200 hover:border-[#c561f6]/50 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c561f6]" /> Automated Governance
                </a>
                <a
                  href="#leadership"
                  onClick={() => setActivePillarId('architecture')}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium surface-card text-slate-700 dark:text-slate-200 hover:border-[#c561f6]/50 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#c561f6]" /> Enterprise .NET &amp; Edge
                </a>
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="#track-record"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-[#c561f6] via-[#7611a6] to-[#4c11c6] hover:opacity-95 shadow-lg shadow-[#7611a6]/25 transition-all"
                >
                  <span>View Org Scope &amp; Track Record</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#shipwright-spotlight"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base text-slate-800 dark:text-white surface-card hover:border-[#c561f6]/50 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-[#c561f6]" />
                  <span>Inspect Shipwright Suite</span>
                </a>
              </div>
            </div>

            {/* Editorial Executive Dossier Card (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group max-w-[390px] w-full">
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-[#c561f6]/35 via-[#7611a6]/25 to-[#4c11c6]/35 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative rounded-3xl p-3 surface-card">
                  <div className="relative aspect-[4/3.55] overflow-hidden rounded-2xl bg-[#141925] ring-1 ring-slate-900/10 dark:ring-white/10">
                    <img
                      src="/assets/portrait.jpg"
                      alt="Steven Fowler — Director of Engineering"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover object-top scale-[1.04] group-hover:scale-[1.07] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090b11]/80 via-transparent to-[#7611a6]/10" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#090b11]/80 backdrop-blur-md border border-white/15 text-white">
                      <div>
                        <div className="text-xs font-semibold leading-tight">
                          Steven Fowler
                        </div>
                        <div className="font-mono text-[10px] text-[#c561f6]">
                          Director of Engineering · October Three
                        </div>
                      </div>
                      <a
                        href="https://shipwrighthq.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors inline-flex items-center gap-1"
                      >
                        <span>shipwrighthq.com</span>
                        <ArrowUpRight className="w-3 h-3 text-[#c561f6]" />
                      </a>
                    </div>
                  </div>

                  {/* Quantified Executive Dossier Telemetry Strip */}
                  <div className="grid grid-cols-3 divide-x divide-slate-200/80 dark:divide-white/[0.08] pt-3 pb-1 text-center">
                    <div className="px-2">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Org Scope
                      </div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                        14 People · 3 Teams
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Direct Leaders
                      </div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                        1 EM · 1 Architect
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Education
                      </div>
                      <div className="text-xs font-semibold text-[#7611a6] dark:text-[#c561f6] mt-0.5">
                        Georgia Tech CS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Metric Quantified Executive Snapshot Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {[
              {
                code: '01 / ORG SCOPE',
                title: '14-Person Engineering Org',
                metric: '3 Product Squads · 1 EM · 1 Architect',
                desc: 'Second-line engineering leadership driving product delivery, manager development, and cross-team architectural alignment.',
                icon: Users,
              },
              {
                code: '02 / CAREER PROGRESSION',
                title: 'IC → Lead → Director',
                metric: 'Enterprise FinTech & Actuarial SaaS',
                desc: 'Promoted internally at October Three Consulting by scaling modular .NET architecture, CI/CD governance, and team execution.',
                icon: Trophy,
              },
              {
                code: '03 / DEVOPS & DORA',
                title: 'Creator of Shipwright',
                metric: '4 Commercial ADO Extensions',
                desc: 'Built EngPulse (DORA+SPACE), PolicyGuard (SOC2), EnvMatrix, and MermaidScope directly from multi-team leadership needs.',
                icon: BarChart3,
              },
              {
                code: '04 / TECHNICAL DEPTH',
                title: 'Hands-On Architecture & CS',
                metric: '.NET · TypeScript · Georgia Tech',
                desc: 'Combining enterprise .NET modernization and Cloudflare edge platforms with graduate Computer Science studies at Georgia Tech.',
                icon: GraduationCap,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.code}
                  className="rounded-2xl p-5 surface-card-interactive flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-[#7611a6] dark:text-[#c561f6]">
                      {item.code}
                    </span>
                    <Icon className="w-4 h-4 text-[#7611a6] dark:text-[#c561f6]" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-base text-[#090b11] dark:text-white">
                      {item.title}
                    </div>
                    <div className="font-mono text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {item.metric}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-[#a3acc8] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* STAGE 2: EXECUTIVE TRACK RECORD, ORG TOPOLOGY & CAREER PROGRESSION */}
        <section id="track-record" className="space-y-8 scroll-mt-24">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7611a6] dark:text-[#c561f6]">
              <Building2 className="w-3.5 h-3.5" />
              <span>Enterprise Leadership Track Record &amp; Organizational Scope</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#090b11] dark:text-white">
              Organizational Topology &amp; Career Arc
            </h2>
            <p className="text-slate-600 dark:text-[#a3acc8] text-sm sm:text-base">
              How I structure and lead my current 14-person engineering organization, and
              the progression from hands-on full-stack engineer to Director of Engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 6 Cols: Current 14-Person Org Topology Blueprint */}
            <div className="lg:col-span-6 rounded-3xl p-7 sm:p-8 surface-card flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/[0.08] pb-4">
                  <div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#7611a6] dark:text-[#c561f6]">
                      // CURRENT ORGANIZATIONAL SCOPE
                    </span>
                    <h3 className="font-display font-bold text-2xl text-[#090b11] dark:text-white mt-1">
                      14-Person Multi-Team Topology
                    </h3>
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Active Scope
                  </span>
                </div>

                {/* Visual Org Chart Blueprint */}
                <div className="space-y-3">
                  {/* Top Node: Director */}
                  <div className="rounded-2xl p-4 bg-gradient-to-r from-[#7611a6]/20 via-[#c561f6]/15 to-transparent border border-[#c561f6]/40 flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-[#7611a6] dark:text-[#c561f6]">
                        Executive Strategy, Delivery &amp; Org Design
                      </div>
                      <div className="font-display font-bold text-base text-[#090b11] dark:text-white">
                        Director of Engineering (Steven Fowler)
                      </div>
                    </div>
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#7611a6] text-white">
                      14 Total
                    </span>
                  </div>

                  {/* Middle Layer: 1 EM + 1 Architect */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-3 border-l-2 border-[#c561f6]/40">
                    <div className="rounded-xl p-3.5 surface-well space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-semibold text-[#7611a6] dark:text-[#c561f6]">
                          PEOPLE &amp; EXECUTION
                        </span>
                        <Users className="w-3.5 h-3.5 text-[#c561f6]" />
                      </div>
                      <div className="font-display font-bold text-sm text-[#090b11] dark:text-white">
                        1 Engineering Manager
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                        Partnering on career growth, sprint execution health, hiring, and
                        day-to-day squad ceremonies.
                      </p>
                    </div>

                    <div className="rounded-xl p-3.5 surface-well space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-semibold text-[#7611a6] dark:text-[#c561f6]">
                          SYSTEMS &amp; STANDARDS
                        </span>
                        <Layers className="w-3.5 h-3.5 text-[#c561f6]" />
                      </div>
                      <div className="font-display font-bold text-sm text-[#090b11] dark:text-white">
                        1 Software Architect
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                        Partnering on cross-team .NET boundaries, platform modernization,
                        and technical RFC/ADR guardrails.
                      </p>
                    </div>
                  </div>

                  {/* Execution Layer: 3 Product Engineering Teams */}
                  <div className="pl-3 border-l-2 border-emerald-500/40 space-y-2">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Delivery Execution Layer — 3 Product Engineering Teams
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        {
                          squad: 'Product Team 01',
                          focus: 'Core Actuarial & Plan Engines',
                          stack: '.NET · C# · SQL',
                        },
                        {
                          squad: 'Product Team 02',
                          focus: 'Client & Advisor Portals',
                          stack: 'TypeScript · Web · APIs',
                        },
                        {
                          squad: 'Product Team 03',
                          focus: 'Data, Integrations & Platform',
                          stack: '.NET · Azure DevOps · Cloud',
                        },
                      ].map((t) => (
                        <div
                          key={t.squad}
                          className="rounded-xl p-3 surface-well border border-emerald-500/15 space-y-1"
                        >
                          <div className="font-mono text-[11px] font-semibold text-[#090b11] dark:text-white">
                            {t.squad}
                          </div>
                          <div className="text-[11px] text-slate-600 dark:text-slate-300 leading-tight">
                            {t.focus}
                          </div>
                          <div className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 pt-0.5">
                            {t.stack}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span> Triad Leadership Model (Director + EM + Architect)</span>
                <span className="font-mono text-[11px] text-[#7611a6] dark:text-[#c561f6]">
                  High Autonomy · Low Overhead
                </span>
              </div>
            </div>

            {/* Right 6 Cols: Career Progression & Education Timeline */}
            <div className="lg:col-span-6 rounded-3xl p-7 sm:p-8 surface-card flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/[0.08] pb-4">
                  <div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#7611a6] dark:text-[#c561f6]">
                      // CAREER ARC &amp; CREDENTIALS
                    </span>
                    <h3 className="font-display font-bold text-2xl text-[#090b11] dark:text-white mt-1">
                      From Full-Stack IC to Director
                    </h3>
                  </div>
                  <Award className="w-5 h-5 text-[#c561f6]" />
                </div>

                <div className="space-y-4">
                  {[
                    {
                      role: 'Director of Engineering',
                      org: 'October Three Consulting · Actuarial & Retirement FinTech',
                      badge: 'Current Role',
                      desc: 'Leading a 14-person engineering organization across 3 product engineering teams, 1 Engineering Manager, and 1 Software Architect. Driving multi-quarter roadmap execution, enterprise .NET modernization, and automated Azure DevOps governance.',
                    },
                    {
                      role: 'Engineering Lead & Senior Software Developer',
                      org: 'October Three Consulting · Enterprise Software Team',
                      badge: 'Internal Promotion',
                      desc: 'Architected modular, scalable full-stack .NET and web applications for pension administration and lifetime income modeling while establishing CI/CD automation and engineering standards across the team.',
                    },
                    {
                      role: 'Front-End Engineering Lead',
                      org: 'Professional Sports Organization · Jacksonville, FL',
                      badge: 'Early Leadership',
                      desc: 'Oversaw front-end development, web architecture, and digital fan experiences prior to transitioning into enterprise financial and actuarial software.',
                    },
                    {
                      role: 'Graduate Computer Science Studies',
                      org: 'Georgia Institute of Technology (Georgia Tech)',
                      badge: 'Academic Depth',
                      desc: 'Pursuing advanced graduate coursework in database systems, software architecture, and computing alongside full-time executive leadership.',
                    },
                  ].map((step) => (
                    <div
                      key={step.role}
                      className="rounded-2xl p-4 surface-well space-y-1.5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="font-display font-bold text-base text-[#090b11] dark:text-white">
                          {step.role}
                        </div>
                        <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-purple-500/10 text-[#7611a6] dark:text-[#c561f6] border border-purple-500/20">
                          {step.badge}
                        </span>
                      </div>
                      <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
                        {step.org}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between">
                <a
                  href="https://www.octoberthree.com/team/steven-fowler/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#c561f6]"
                >
                  <span>October Three Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/search/results/all/?keywords=Steven%20Fowler%20October%20Three"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7611a6] dark:text-[#c561f6] hover:underline"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STAGE 3: INTERACTIVE "DIRECTOR'S OPERATING SYSTEM" CONSOLE */}
        <section id="leadership" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7611a6] dark:text-[#c561f6]">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Interactive Leadership Playbook</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#090b11] dark:text-white">
                The Director’s Operating System
              </h2>
              <p className="text-slate-600 dark:text-[#a3acc8] text-sm sm:text-base">
                Select any operating pillar below to inspect how I align our Engineering
                Manager, Architect, and 3 product teams around healthy delivery and
                automated governance.
              </p>
            </div>
            <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
              Click a mode to inspect playbook →
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Selector Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3">
              {OPERATING_PILLARS.map((pillar) => {
                const isSelected = pillar.id === activePillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillarId(pillar.id)}
                    className={`w-full text-left rounded-2xl p-5 transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#7611a6]/15 via-[#c561f6]/10 to-transparent dark:from-[#7611a6]/30 dark:via-[#c561f6]/15 dark:to-[#0f131d] border-[#7611a6] dark:border-[#c561f6] shadow-lg shadow-[#7611a6]/10'
                        : 'surface-card hover:border-[#c561f6]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-mono text-[11px] font-semibold tracking-wider ${
                          isSelected
                            ? 'text-[#7611a6] dark:text-[#c561f6]'
                            : 'text-slate-400 dark:text-slate-500'
                        }`}
                      >
                        {pillar.code}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full transition-colors ${
                          isSelected
                            ? 'bg-[#c561f6] shadow-[0_0_8px_#c561f6]'
                            : 'bg-slate-300 dark:bg-slate-700'
                        }`}
                      />
                    </div>
                    <div className="font-display font-bold text-base sm:text-lg text-[#090b11] dark:text-white mt-1">
                      {pillar.label}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {pillar.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Live Inspection Console (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl p-7 sm:p-8 surface-card flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 dark:border-white/[0.08] pb-4">
                  <div>
                    <span className="font-mono text-xs font-semibold text-[#7611a6] dark:text-[#c561f6]">
                      {activePillar.code} // ACTIVE PLAYBOOK
                    </span>
                    <h3 className="font-display font-bold text-2xl text-[#090b11] dark:text-white mt-1">
                      {activePillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-[#a3acc8] leading-relaxed">
                  {activePillar.thesis}
                </p>

                {/* Anti-Pattern vs. Operating Standard Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl p-4 bg-rose-500/[0.06] dark:bg-rose-500/[0.08] border border-rose-500/20 space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>Industry Anti-Pattern Avoided</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {activePillar.antiPattern}
                    </p>
                  </div>

                  <div className="rounded-2xl p-4 bg-emerald-500/[0.06] dark:bg-emerald-500/[0.08] border border-emerald-500/20 space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>My Operating Standard</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {activePillar.operatingStandard}
                    </p>
                  </div>
                </div>

                {/* 3 Telemetry Signals */}
                <div className="space-y-2">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Operational Signals &amp; Guardrails
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activePillar.signals.map((sig) => (
                      <div
                        key={sig.metric}
                        className="rounded-xl p-3.5 surface-well space-y-1"
                      >
                        <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                          {sig.metric}
                        </div>
                        <div className="font-display font-semibold text-sm text-[#7611a6] dark:text-[#c561f6]">
                          {sig.target}
                        </div>
                        <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                          {sig.context}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  Backed by real org design &amp; production tooling
                </span>
                <a
                  href={activePillar.proofHref}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#7611a6] dark:text-[#c561f6] hover:underline"
                >
                  <span>{activePillar.proofLabel}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STAGE 4: ASYMMETRIC BENTO SHOWCASE + GLOBAL LENS TOGGLE */}
        <section id="projects" className="space-y-10 scroll-mt-24">
          {/* Section Header + Global Lens Segmented Control */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7611a6] dark:text-[#c561f6]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Commercial DevTools &amp; Applied Edge Velocity Lab</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#090b11] dark:text-white">
                Systems &amp; Products I’ve Built
              </h2>
              <p className="text-slate-600 dark:text-[#a3acc8] text-sm sm:text-base">
                Alongside leading my 14-person engineering organization, I stay hands-on
                building commercial DevOps software and full-stack edge products. Toggle
                between <strong>Executive &amp; Product ROI</strong> and{' '}
                <strong>Architecture X-Ray</strong> below.
              </p>
            </div>

            {/* Global Segmented Lens Toggle */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <div className="inline-flex p-1 rounded-2xl surface-card">
                <button
                  onClick={() => setViewLens('executive')}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    viewLens === 'executive'
                      ? 'bg-[#7611a6] text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6]'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Executive &amp; Product ROI</span>
                </button>
                <button
                  onClick={() => setViewLens('xray')}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    viewLens === 'xray'
                      ? 'bg-[#7611a6] text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#7611a6] dark:hover:text-[#c561f6]'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Architecture X-Ray</span>
                </button>
              </div>
            </div>
          </div>

          {/* ROW 1: 12-COLUMN FLAGSHIP SPOTLIGHT — SHIPWRIGHT */}
          <article
            id="shipwright-spotlight"
            className="rounded-3xl p-7 sm:p-9 surface-card-interactive relative overflow-hidden scroll-mt-24"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-bl from-[#c561f6]/20 via-[#7611a6]/10 to-transparent blur-3xl rounded-full"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left 7 Cols: Narrative & Lens View */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#7611a6] dark:text-[#c561f6]">
                      <Sparkles className="w-3.5 h-3.5" /> Flagship Enterprise Suite · Commercial DevTools
                    </span>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-[#7611a6] dark:text-[#c561f6] border border-purple-500/25">
                      shipwrighthq.com
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#090b11] dark:text-white">
                      Shipwright — Azure DevOps Engineering Intelligence &amp; Governance
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-[#a3acc8] mt-2 leading-relaxed">
                      Born directly out of the visibility, DORA diagnostic, and compliance
                      needs of leading multiple product teams: a commercial monorepo of four
                      standalone Azure DevOps extensions (<strong>EngPulse</strong>,{' '}
                      <strong>PolicyGuard</strong>, <strong>EnvMatrix</strong>, and{' '}
                      <strong>MermaidScope</strong>).
                    </p>
                  </div>

                  {viewLens === 'executive' ? (
                    <div className="space-y-4">
                      <div className="rounded-2xl p-4 surface-well space-y-1.5">
                        <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#7611a6] dark:text-[#c561f6]">
                          Executive &amp; Commercial Thesis
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          Enterprise security teams routinely block third-party engineering
                          analytics platforms that exfiltrate source code or pipeline
                          metadata. By executing 100% client-side inside the Azure DevOps
                          iframe with an offline Web Crypto BYOL licensing engine, Shipwright
                          eliminates security review friction and runs at{' '}
                          <strong className="text-[#090b11] dark:text-white">
                            $0/month cloud hosting overhead
                          </strong>
                          .
                        </p>
                      </div>

                      <ul className="space-y-2">
                        {[
                          'EngPulse: Executive DORA & SPACE scorecards, PR stage breakdown, and reviewer queue load balancing',
                          'PolicyGuard: Cross-repository branch policy matrix, 1-click drift remediation, and SOC2 evidence exports',
                          'EnvMatrix: Multi-environment Variable Group diffing, unmasked secret detection, and pipeline blast-radius scanning',
                        ].map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c561f6] shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="rounded-2xl p-5 surface-well font-mono text-xs space-y-3 border border-[#c561f6]/30">
                      <div className="flex items-center justify-between text-[#7611a6] dark:text-[#c561f6] font-semibold">
                        <span>// ARCHITECTURE X-RAY: SHIPWRIGHT MONOREPO</span>
                        <span>ZERO-EGRESS</span>
                      </div>
                      <div className="space-y-2 text-slate-700 dark:text-slate-300">
                        <div>
                          <span className="text-slate-400">TOPOLOGY: </span>
                          ADO Host Iframe → ADO REST SDK → Client-Side Analytics Engine →
                          IndexedDB Cache
                        </div>
                        <div>
                          <span className="text-slate-400">LICENSING: </span>
                          Two-Tier Offline BYOL (Team ≤25 Devs / Enterprise Unlimited) verified
                          via asymmetric Web Crypto signatures
                        </div>
                        <div>
                          <span className="text-slate-400">SECURITY BOUNDARY: </span>
                          0 external network requests; inherits user’s native Azure DevOps RBAC
                          token scope
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tags & Primary CTA */}
                <div className="pt-5 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'DORA & SPACE',
                      'SOC2 Governance',
                      'TypeScript',
                      'React',
                      'Azure DevOps SDK',
                      'Web Crypto BYOL',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md surface-well text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://shipwrighthq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#c561f6] via-[#7611a6] to-[#4c11c6] hover:opacity-95 shadow-md shadow-[#7611a6]/25 transition-all"
                  >
                    <span>Launch shipwrighthq.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right 5 Cols: Interactive 4-Extension Sandbox */}
              <div className="lg:col-span-5 rounded-2xl p-5 surface-well flex flex-col justify-between space-y-5 border border-slate-200/90 dark:border-white/[0.08]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Interactive Suite Inspector
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      0 Bytes External Egress
                    </span>
                  </div>

                  {/* Module Tabs */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-1.5">
                    {SHIPWRIGHT_MODULES.map((mod) => {
                      const active = mod.id === activeShipwright.id;
                      return (
                        <button
                          key={mod.id}
                          onClick={() => setActiveShipwrightId(mod.id)}
                          className={`px-3 py-2 rounded-xl font-mono text-xs font-medium text-left transition-all cursor-pointer border ${
                            active
                              ? 'bg-[#7611a6] text-white border-[#c561f6]/40 shadow-sm'
                              : 'bg-white/70 dark:bg-[#0f131d] text-slate-600 dark:text-slate-300 border-slate-200/70 dark:border-white/[0.06] hover:border-[#c561f6]/40'
                          }`}
                        >
                          {mod.name}
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Module Telemetry Header */}
                  <div className="space-y-1 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-base text-[#090b11] dark:text-white">
                        {activeShipwright.name}
                      </span>
                      <span className="font-mono text-[10px] text-[#7611a6] dark:text-[#c561f6]">
                        {activeShipwright.hub}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {activeShipwright.summary}
                    </p>
                  </div>

                  {/* 3 Mini Metric Pills */}
                  <div className="grid grid-cols-3 gap-2">
                    {activeShipwright.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl p-2.5 bg-white/80 dark:bg-[#0f131d] border border-slate-200/70 dark:border-white/[0.06]"
                      >
                        <div className="font-mono text-[10px] text-slate-400 truncate">
                          {m.label}
                        </div>
                        <div className="font-mono font-semibold text-xs text-[#090b11] dark:text-white mt-0.5">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Simulated Live Telemetry Rows */}
                  <div className="space-y-2">
                    {activeShipwright.telemetryRows.map((row) => (
                      <div
                        key={row.left}
                        className="rounded-xl px-3 py-2.5 bg-white/80 dark:bg-[#0f131d] border border-slate-200/70 dark:border-white/[0.06] flex items-center justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <div className="font-mono text-[11px] font-medium text-[#090b11] dark:text-slate-200 truncate">
                            {row.left}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                            {row.middle} · {row.right}
                          </div>
                        </div>
                        <span className="shrink-0 font-mono text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          {row.pill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="font-mono text-[10px] text-slate-400 dark:text-slate-500 flex items-center justify-between pt-2 border-t border-slate-200/70 dark:border-white/[0.06]">
                  <span>ADO Host Frame Simulation</span>
                  <span>Team &amp; Enterprise BYOL</span>
                </div>
              </div>
            </div>
          </article>

          {/* ROW 2: 3-COLUMN ENTERPRISE .NET & EDGE ARCHITECTURE BENTO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPACT_PROJECTS.map((project) => {
              const isExpanded = expandedCompactId === project.id;
              return (
                <article
                  key={project.id}
                  className="rounded-3xl p-6 surface-card-interactive flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3.5">
                    <div
                      className={`h-1 w-14 rounded-full bg-gradient-to-r ${project.accentGradient}`}
                    />

                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#7611a6] dark:text-[#c561f6]">
                        {project.category}
                      </span>
                      <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-purple-500/10 text-[#7611a6] dark:text-[#c561f6] border border-purple-500/20">
                        {project.badgeText}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-xl text-[#090b11] dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    {viewLens === 'executive' ? (
                      <div className="space-y-3">
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-[#a3acc8] leading-relaxed">
                          {project.executiveSummary}
                        </p>

                        {isExpanded && (
                          <ul className="space-y-1.5 pt-1">
                            {project.executiveOutcomes.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                              >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c561f6] shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <div className="rounded-xl p-3.5 surface-well font-mono text-[11px] space-y-2 border border-[#c561f6]/30">
                        <div>
                          <span className="text-slate-400">FLOW: </span>
                          <span className="text-slate-700 dark:text-slate-300">
                            {project.xrayTopology}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400">BOUNDARY: </span>
                          <span className="text-slate-700 dark:text-slate-300">
                            {project.xrayAuthAndState}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400">DECISION: </span>
                          <span className="text-slate-700 dark:text-slate-300">
                            {project.xrayTradeoff}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08] space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] px-2 py-0.5 rounded surface-well text-slate-600 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      {viewLens === 'executive' ? (
                        <button
                          onClick={() =>
                            setExpandedCompactId(isExpanded ? null : project.id)
                          }
                          className="inline-flex items-center gap-1 font-mono text-xs font-medium text-[#7611a6] dark:text-[#c561f6] hover:underline cursor-pointer"
                        >
                          <span>{isExpanded ? 'Hide Highlights' : 'Inspect Highlights'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      ) : (
                        <span className="font-mono text-[10px] text-emerald-500">
                          // X-RAY ACTIVE
                        </span>
                      )}

                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#c561f6]"
                        >
                          <FolderGit2 className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-slate-400">
                          <Lock className="w-3 h-3 text-[#c561f6]" /> Private Prod
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ROW 3: APPLIED EDGE & AI-AUGMENTED VELOCITY LAB (RAFTERS & CALLSHEET) */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/70 dark:border-white/[0.08] pb-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#7611a6] dark:text-[#c561f6]">
                <Cpu className="w-4 h-4" />
                <span>After-Hours Edge &amp; Product Velocity Lab</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Staying hands-on with Python Workers, Supabase RLS, Stripe, and procedural Web Audio
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Rafters Card (6 cols) */}
              <article className="lg:col-span-6 rounded-3xl p-7 sm:p-8 surface-card-interactive flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Edge Python Workers &amp; Longitudinal Data
                    </span>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      raftersfantasy.com
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-2xl text-[#090b11] dark:text-white">
                      Rafters — Multi-Decade Sports Intelligence &amp; Discord Engine
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-[#a3acc8] mt-1.5 leading-relaxed">
                      Reconstructs 15+ years of longitudinal ESPN league history, models All-Play
                      Expected Win variance ("Luck Index") and point spreads, and powers an
                      automated Discord bot with 5 switchable analytical personas.
                    </p>
                  </div>

                  {viewLens === 'executive' ? (
                    <div className="rounded-2xl p-4 surface-well space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#7611a6] dark:text-[#c561f6]">
                          Interactive Persona Dispatch Preview
                        </span>
                        <Radio className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {RAFTERS_PERSONAS.map((persona, idx) => (
                          <button
                            key={persona.id}
                            onClick={() => setActiveRaftersPersona(idx)}
                            className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all cursor-pointer border ${
                              activeRaftersPersona === idx
                                ? 'bg-[#7611a6] text-white border-[#c561f6]/40'
                                : 'bg-white/80 dark:bg-[#0f131d] text-slate-600 dark:text-slate-300 border-slate-200/70 dark:border-white/[0.06]'
                            }`}
                          >
                            {persona.label}
                          </button>
                        ))}
                      </div>
                      <div className="rounded-xl p-3 bg-white/85 dark:bg-[#0f131d] border border-slate-200/70 dark:border-white/[0.06] space-y-1">
                        <div className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                          {RAFTERS_PERSONAS[activeRaftersPersona].tone}
                        </div>
                        <p className="text-xs italic text-slate-700 dark:text-slate-300 leading-relaxed">
                          {RAFTERS_PERSONAS[activeRaftersPersona].sample}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-2xl p-4 surface-well font-mono text-xs space-y-2 border border-[#c561f6]/30">
                      <div className="text-[#7611a6] dark:text-[#c561f6] font-semibold">
                        // ARCHITECTURE X-RAY: RAFTERS
                      </div>
                      <div className="text-slate-700 dark:text-slate-300">
                        <span className="text-slate-400">RUNTIME: </span>
                        Cloudflare Python Workers (<code className="text-[#c561f6]">python_workers</code>) +
                        Discord Slash Command Engine + Stripe Billing
                      </div>
                      <div className="text-slate-700 dark:text-slate-300">
                        <span className="text-slate-400">DATA LAYER: </span>
                        15-year longitudinal ESPN API normalizer + isolated Supabase{' '}
                        <code className="text-[#c561f6]">rafters</code> schema with encrypted credential vault
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {['Python Workers', 'Supabase', 'Discord API', 'Stripe', 'Statistical Modeling'].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-md surface-well text-slate-700 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                  <a
                    href="https://raftersfantasy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#7611a6] dark:text-[#c561f6] hover:underline"
                  >
                    <span>Visit raftersfantasy.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>

              {/* The Callsheet Card (6 cols) */}
              <article className="lg:col-span-6 rounded-3xl p-7 sm:p-8 surface-card-interactive flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      Edge React SPA &amp; Procedural Web Audio
                    </span>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      callsheet.quest
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-2xl text-[#090b11] dark:text-white">
                      The Callsheet — Daily Cinema Dispatch &amp; Film Club
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-[#a3acc8] mt-1.5 leading-relaxed">
                      A cinephile daily deduction habit featuring a 7-day rotating puzzle
                      mechanic, private workplace film leagues, 27 collectible movie prop
                      badges, and studio lot supervisor Otto the Cat.
                    </p>
                  </div>

                  {viewLens === 'executive' ? (
                    <div className="rounded-2xl p-4 surface-well space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#7611a6] dark:text-[#c561f6]">
                          Interactive 7-Day Reel Mechanic Preview
                        </span>
                        <Film className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {CALLSHEET_DAYS.map((d, idx) => (
                          <button
                            key={d.day}
                            onClick={() => setActiveCallsheetDay(idx)}
                            className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all cursor-pointer border ${
                              activeCallsheetDay === idx
                                ? 'bg-[#7611a6] text-white border-[#c561f6]/40'
                                : 'bg-white/80 dark:bg-[#0f131d] text-slate-600 dark:text-slate-300 border-slate-200/70 dark:border-white/[0.06]'
                            }`}
                          >
                            {d.day}
                          </button>
                        ))}
                      </div>
                      <div className="rounded-xl p-3 bg-white/85 dark:bg-[#0f131d] border border-slate-200/70 dark:border-white/[0.06] space-y-1">
                        <div className="font-mono text-[10px] text-amber-600 dark:text-amber-400">
                          {CALLSHEET_DAYS[activeCallsheetDay].mechanic}
                        </div>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          {CALLSHEET_DAYS[activeCallsheetDay].clue}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-2xl p-4 surface-well font-mono text-xs space-y-2 border border-[#c561f6]/30">
                      <div className="text-[#7611a6] dark:text-[#c561f6] font-semibold">
                        // ARCHITECTURE X-RAY: THE CALLSHEET
                      </div>
                      <div className="text-slate-700 dark:text-slate-300">
                        <span className="text-slate-400">TOPOLOGY: </span>
                        React 18 + Vite SPA on Cloudflare Workers → Isolated{' '}
                        <code className="text-[#c561f6]">callsheet</code> Supabase Postgres Schema
                      </div>
                      <div className="text-slate-700 dark:text-slate-300">
                        <span className="text-slate-400">STATE &amp; AUDIO: </span>
                        Zero-friction guest UUID to OAuth account migration + procedural Web
                        Audio synthesizer soundtracks
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {['React 18', 'TypeScript', 'Supabase RLS', 'Web Audio API', 'Cloudflare'].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-md surface-well text-slate-700 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                  <a
                    href="https://callsheet.quest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#7611a6] dark:text-[#c561f6] hover:underline"
                  >
                    <span>Play at callsheet.quest</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* STAGE 5: INTERACTIVE EXECUTIVE CONTACT CONSOLE */}
        <section id="contact" className="scroll-mt-24">
          <aside className="relative overflow-hidden rounded-3xl p-8 sm:p-11 surface-card border border-purple-500/25">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-[#c561f6]/20 via-[#7611a6]/15 to-transparent blur-3xl rounded-full"
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7611a6] dark:text-[#c561f6]">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Direct Executive &amp; Peer Channel</span>
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#090b11] dark:text-white">
                  Interested in connecting?
                </h2>
                <p className="text-slate-600 dark:text-[#a3acc8] text-sm sm:text-base leading-relaxed max-w-xl">
                  Select a conversation topic below to pre-fill a direct note, connect on
                  LinkedIn, or copy my email address in one click.
                </p>

                {/* Selectable Topic Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {CONTACT_TOPICS.map((topic) => {
                    const active = selectedTopic.id === topic.id;
                    return (
                      <button
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer border ${
                          active
                            ? 'bg-[#7611a6] text-white border-[#c561f6]/40 shadow-sm'
                            : 'surface-well text-slate-600 dark:text-slate-300 hover:border-[#c561f6]/40'
                        }`}
                      >
                        {topic.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <a
                  href={`mailto:stevenfowler16@gmail.com?subject=${encodeURIComponent(
                    selectedTopic.subject
                  )}`}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-[#c561f6] via-[#7611a6] to-[#4c11c6] hover:opacity-95 shadow-lg shadow-[#7611a6]/30 transition-all"
                >
                  <span>Send Email ({selectedTopic.label.split(' ')[0]})</span>
                  <Send className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-mono text-xs sm:text-sm font-medium surface-well text-slate-700 dark:text-slate-200 hover:border-[#c561f6]/50 transition-all cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">
                        Copied stevenfowler16@gmail.com!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#c561f6]" />
                      <span>Copy stevenfowler16@gmail.com</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </aside>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 dark:border-white/[0.08] py-10 px-6 text-sm text-slate-500 dark:text-[#8490b5]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="font-medium text-slate-700 dark:text-slate-300">
              &copy; {new Date().getFullYear()} Steven Fowler
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">
              &bull;
            </span>
            <span className="font-mono text-xs">
              Director of Engineering &bull; Charlottesville, Virginia
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://shipwrighthq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7611a6] dark:hover:text-[#c561f6] transition-colors inline-flex items-center gap-1.5 font-mono text-xs"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Shipwright</span>
            </a>
            <a
              href="https://www.linkedin.com/search/results/all/?keywords=Steven%20Fowler%20October%20Three"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7611a6] dark:hover:text-[#c561f6] transition-colors inline-flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
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
