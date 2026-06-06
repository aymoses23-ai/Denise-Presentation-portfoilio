import { SlideDeck, BeforeAfterPair, SlideTheme, Testimonial, ProjectPackage } from './types';

export const DENISE_AVATAR = '/src/assets/images/denise_portrait_1780781135688.png';

export const SLIDE_THEMES: SlideTheme[] = [
  {
    id: 'swiss-minimalist',
    name: 'Swiss Minimalist',
    bgColor: 'bg-zinc-50',
    textColor: 'text-zinc-900',
    accentColor: '#E11D48', // rose-600
    fontHeading: 'font-sans font-black tracking-tight',
    fontBody: 'font-sans text-zinc-600 leading-relaxed',
    borderStyle: 'border border-zinc-200',
    shadowStyle: 'shadow-sm'
  },
  {
    id: 'tech-dark-neon',
    name: 'Tech Dark Cyber',
    bgColor: 'bg-slate-950',
    textColor: 'text-slate-100',
    accentColor: '#06B6D4', // cyan-500
    fontHeading: 'font-mono uppercase tracking-widest font-bold',
    fontBody: 'font-mono text-slate-400 text-sm leading-relaxed',
    borderStyle: 'border border-slate-800/80',
    shadowStyle: 'shadow-[0_0_20px_rgba(6,182,212,0.1)]'
  },
  {
    id: 'warm-editorial',
    name: 'Editorial Oatmeal',
    bgColor: 'bg-[#FDFBF7]',
    textColor: 'text-[#2C2119]',
    accentColor: '#D97706', // amber-600
    fontHeading: 'font-serif font-semibold italic tracking-wide',
    fontBody: 'font-sans text-[#5C4D41] leading-relaxed',
    borderStyle: 'border border-[#F1EBE1]',
    shadowStyle: 'shadow-none'
  },
  {
    id: 'corporate-prestige',
    name: 'Corporate Slate',
    bgColor: 'bg-slate-900',
    textColor: 'text-[#F8FAFC]',
    accentColor: '#3B82F6', // blue-500
    fontHeading: 'font-sans font-bold tracking-tight',
    fontBody: 'font-sans text-slate-300 leading-relaxed',
    borderStyle: 'border border-slate-800',
    shadowStyle: 'shadow-md'
  }
];

export const SLIDE_DECKS: SlideDeck[] = [
  {
    id: 'fintech-seed',
    title: 'AeroPay seed Pitch Deck',
    industry: 'FinTech Startup',
    description: 'Secured a $12M seed round from top tier Silicon Valley VCs due to elegant graphic layouts and visual focus.',
    slides: [
      {
        id: 'pay-1',
        title: 'The invisible payment network for global trade.',
        subtitle: 'Securing and streamlining B2B commerce with localized liquidity clusters.',
        category: 'Problem & Vision',
        layoutType: 'hero',
        theme: 'swiss-minimalist',
        tagline: 'AEROPAY / MISSION SETUP',
        content: [
          'Global supplier settlements still take an average of 4.2 business days.',
          'Cross-border friction extracts $42B in annual processing leakage.',
          'Denise designed this hero graphic to immediately anchor the scale of the bottleneck.'
        ],
        accentColor: '#E11D48',
        bgColor: 'bg-zinc-50',
        textColor: 'text-zinc-900'
      },
      {
        id: 'pay-2',
        title: 'Transaction speeds. Re-engineered.',
        subtitle: 'Our micro-ledger system bypasses traditional SWIFT gateway delays.',
        category: 'Market Metrics',
        layoutType: 'metric',
        theme: 'swiss-minimalist',
        tagline: 'SPEED BENCHMARKS',
        content: [
          'Processing engine routes through decentralized trust circles.',
          'Enables instant clearance on 18 supported global currencies.',
          'Built with zero-knowledge transaction validation.'
        ],
        metrics: [
          { value: '0.4s', label: 'Average Settlement Time', trend: '-99.8% Speed Shift' },
          { value: '$130M', label: 'Monthly Run Volume (MRV)', trend: '+45% MoM Growth' },
          { value: '3.4 bps', label: 'Platform Interchange Fee', trend: 'Industry Leading Fee' }
        ],
        accentColor: '#E11D48',
        bgColor: 'bg-zinc-50',
        textColor: 'text-zinc-900'
      },
      {
        id: 'pay-3',
        title: 'The Payment Flow Strategy',
        subtitle: 'Frictionless, multi-layer localized payment rails.',
        category: 'The Solution Ecosystem',
        layoutType: 'flow',
        theme: 'swiss-minimalist',
        tagline: 'ARCHITECTURAL SCHEMATIC',
        content: [
          'Local Node: Merchant connects via modern Webhook SDK in under 10 lines of code.',
          'Liquidity Bridge: Instant conversion of local currency into liquidity clusters.',
          'Settlement: Micro-wire cleared straight to supplier endpoint bank accounts.'
        ],
        accentColor: '#E11D48',
        bgColor: 'bg-zinc-50',
        textColor: 'text-zinc-900'
      }
    ]
  },
  {
    id: 'ai-saas',
    title: 'OmniNode Series A Pitch',
    industry: 'Advanced AI & Infrastructure',
    description: 'Designed a dark-themed cinematic deck highlighting sophisticated technical graphs and developer-focused branding.',
    slides: [
      {
        id: 'omni-1',
        title: 'AGENTIC INFRASTRUCTURE FOR MASSIVE DISTRIBUTED RUNTIMES',
        subtitle: 'Direct orchestration layer operating close to the server hardware edge.',
        category: 'Infrastructure core',
        layoutType: 'hero',
        theme: 'tech-dark-neon',
        tagline: 'OMNINODE / MAIN FRAMEWORK',
        content: [
          'Dynamically provision compute buffers for large language inference modules.',
          'Bypass container cold-start delay using micro-orchestration blocks.',
          'Self-healing node load routing with latency auto-balancing.'
        ],
        accentColor: '#06B6D4',
        bgColor: 'bg-slate-950',
        textColor: 'text-slate-100'
      },
      {
        id: 'omni-2',
        title: 'TECHNICAL PERFORMANCE CAPABILITIES',
        subtitle: 'Edge response scaling and global latency mapping.',
        category: 'Telemetry',
        layoutType: 'metric',
        theme: 'tech-dark-neon',
        tagline: 'NETWORK LATENCY STATS',
        content: [
          'Nodes automatically spin down to absolute zero state in under 12ms when idle.',
          'Parallelized model pipeline layers running on high-density GPUs.',
          'Sub-millisecond routing across 14 global main hubs.'
        ],
        metrics: [
          { value: '18ms', label: 'Global Edge Ingress', trend: 'Ultra Low Ping' },
          { value: '25x', label: 'Throughput Multiplier', trend: 'Scales Instantly' },
          { value: '99.99%', label: 'Uptime SLA Commitment', trend: 'Fault Tolerant' }
        ],
        accentColor: '#06B6D4',
        bgColor: 'bg-slate-950',
        textColor: 'text-slate-100'
      },
      {
        id: 'omni-3',
        title: 'SAY GOODBYE TO TRADITIONAL API LATENCY',
        subtitle: 'Our direct-memory proxy streams predictions in split seconds.',
        category: 'Before vs After Showcase',
        layoutType: 'split',
        theme: 'tech-dark-neon',
        tagline: 'PIPELINE ARCHITECTURE',
        content: [
          'Legacy: Request gets queued, serialized, routed, cold-booted, and parsed.',
          'OmniNode: State-persistent local cluster proxies directly to active node registers.',
          'Denise designed this graphic structure to make complex tech instantly graspable by VC analysts.'
        ],
        accentColor: '#06B6D4',
        bgColor: 'bg-slate-950',
        textColor: 'text-slate-100'
      }
    ]
  },
  {
    id: 'biotech-keynote',
    title: 'HeraGen BioTech Vision Keynote',
    industry: 'BioTech & Longevity Science',
    description: 'An elegant warm editorial deck emphasizing visual rhythm and cinematic storyboarding designs for an annual biology symposium.',
    slides: [
      {
        id: 'hera-1',
        title: "Nature has written the software. We've designed the compiler.",
        subtitle: 'Using molecular generative modeling to unlock customized cellular restoration pipelines.',
        category: 'Science & Philosophy',
        layoutType: 'quote',
        theme: 'warm-editorial',
        tagline: 'HERAGEN GLOBAL ISSUES',
        content: [
          'All biological systems operate on intricate chemical message pathways.',
          'The challenge has never been writing genetic code — it was understanding secondary folding mechanics.',
          'We translate fold equations into simple visual sequences to fast-track discoveries.'
        ],
        accentColor: '#D97706',
        bgColor: 'bg-[#FDFBF7]',
        textColor: 'text-[#2C2119]'
      },
      {
        id: 'hera-2',
        title: 'Speeding up Therapeutics discovery from decades to brief days.',
        subtitle: 'Accelerating target structural screening across chemical indices.',
        category: 'Breakthrough metrics',
        layoutType: 'metric',
        theme: 'warm-editorial',
        tagline: 'METABOLIC METRIC PROFILE',
        content: [
          'Eliminating false starts in early-stage synthesis pipelines.',
          'In-silico testing speeds predict complex tissue reactions with extreme accuracy.',
          'Fully automated biology workspaces compiling millions of tests weekly.'
        ],
        metrics: [
          { value: '14,000+', label: 'Candidates Validated Weekly', trend: 'High Throughput' },
          { value: '92.4%', label: 'Predictive Integrity Rating', trend: 'Validated In Vitro' },
          { value: '$45M', label: 'Average Saving Per Candidate', trend: 'Capital Optimization' }
        ],
        accentColor: '#D97706',
        bgColor: 'bg-[#FDFBF7]',
        textColor: 'text-[#2C2119]'
      }
    ]
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterPair[] = [
  {
    id: 'case-1',
    title: 'FinTech Security Slide Redesign',
    slideName: 'Security Stack & Compliance',
    problem: 'The client spent 5 minutes explaining a slide that was a wall of 10 generic bullet points in size 12 Calibri font. Keynotes are visual — bullet walls kill audience retention.',
    solution: 'Replaced the wall of bullets with a three-pillar bold security badge system and a major highlight statistic on end-to-end audit compliance speed.',
    before: {
      title: 'Our Platform Security and Regulatory Compliance Protocols',
      bullets: [
        'Security is our absolute priority and runs across all developer operations.',
        'We support AES-256 end to end data-in-transit and rest security standards.',
        'Our database has achieved full SOC 2 Type II compliance audits recursively.',
        'We enforce multi-factor client session tokens with automated expiration timers.',
        'Regular penetration exercises are done by reputable third-party security institutions so risk is managed.',
        'We are certified with PCI-DSS Level 1 so transaction pathways protect customer payment methods.'
      ],
      bg: 'bg-white border border-gray-300',
      text: 'text-gray-700'
    },
    after: {
      title: 'Sovereign-Grade Data Security.',
      tagline: 'TRUST PROTOCOLS',
      layoutType: 'metric',
      accentColor: '#E11D48',
      content: [
        'SOC2 Type II compliance guarantees continuous physical, application, and database state audits.',
        'Full PCI-DSS Level 1 certification authorizes processing of tier-1 global banking rails.',
        'Constant Zero-Trust penetration routines keep internal vulnerabilities at absolute non-existence.'
      ],
      metrics: [
        { value: 'AES-256', label: 'Data Encryption Standard' },
        { value: 'Zero', label: 'Unresolved SecOps Incidents' },
        { value: 'Level 1', label: 'PCI Banking Authentication' }
      ],
      visualElements: ['SecOps Shield Architecture', 'Continuous Penetration Testing', 'Instant Key Rotation']
    }
  },
  {
    id: 'case-2',
    title: 'AI Machine Learning Architecture Redesign',
    slideName: 'Neural Model Pipeline Layout',
    problem: 'An engineering block diagram was copied straight from a technical architectural whitepaper. It was incomprehensible to venture debt lenders and growth non-technical partners.',
    solution: 'Distilled the complex model layers down to a cinematic three-stage journey map with rich typography and highlighting the massive data stream volume handled in real-time.',
    before: {
      title: 'Our Complex Distributed Neural Ingress and Node Scaling Logic',
      bullets: [
        'API routes request into regional container routing gateways.',
        'Model scheduler decides if target container is spun up or needs proxying.',
        'Tokenization of ingress byte payload streams using localized rust pipelines.',
        'Validation triggers weight biases computations across the matrix layers.',
        'The generated response token arrays are cached in Redis and streamed back on long polls.'
      ],
      bg: 'bg-zinc-100 border border-zinc-200',
      text: 'text-zinc-800'
    },
    after: {
      title: 'Three Miliseconds from Raw Ingress to Global Output.',
      tagline: 'THE PIPELINE FLOW',
      layoutType: 'flow',
      accentColor: '#06B6D4',
      content: [
        'Phase 01 / Intelligent Gateway Router: Dynamic CDN routing directs request to closest server arrays.',
        'Phase 02 / Matrix Inference Layer: Local Rust compilation strips weight bias validation for high speed performance.',
        'Phase 03 / Client Streaming Edge: Outlawing slow buffers. Real-time token streaming directly to consumer UI dashboards.'
      ],
      metrics: [
        { value: '2.8ms', label: 'Total Internal Pipeline Ingress' },
        { value: '450B', label: 'Active Tokens Processed Daily' }
      ]
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Alexander Hayes',
    role: 'CEO & Co-founder',
    company: 'AeroPay FinTech',
    quote: "Denise was our secret weapon in raising our seed and A rounds. She doesn't just paint slides; she takes raw raw text and challenges you to structure your vision into a cinematic story. VCs were calling out our presentation layouts on every pitch meeting.",
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    deckType: '$12M Seed Round Pitch Deck'
  },
  {
    id: 't-2',
    clientName: 'Dr. Evelyn Rousseau',
    role: 'Chief Scientific Officer',
    company: 'HeraGen Therapeutics',
    quote: "As scientists, we are notoriously bad at simplifying complex genetic biology for corporate investors. Denise completely transformed our research slides into highly visual and pristine slide diagrams without losing any core detail. Exceptional professional.",
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    deckType: 'Symposium Keynote & Series B Deck'
  },
  {
    id: 't-3',
    clientName: 'Sarah Jenkins',
    role: 'VP of Product Strategy',
    company: 'OmniNode Edge Solutions',
    quote: "We needed 14 sleek slide decks designed for our developer keynote under severe timelines. Denise delivered layouts that looked like high-end Swiss art of the 1960s with custom code-mock elements. True artistic craftsmanship.",
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    deckType: 'Developer Keynote Launch Event'
  }
];

export const SERVICE_PACKAGES: ProjectPackage[] = [
  {
    id: 'pack-pitch',
    name: 'The VC Seed Magnet',
    price: '$2,450',
    delivery: '5-7 business days',
    description: 'Perfect for startups preparing to pitch elite Angel and institutional VC investors. Focuses on bulletless storyboarding and beautiful traction visualizers.',
    includes: [
      'Raw copy coaching & structural blueprinting',
      'Up to 15 fully custom designed high resolution slides',
      'Dynamic fully editable native PowerPoint & Keynote files',
      'Includes 3 interactive charts & custom iconography designs',
      'Direct feedback sessions & up to 3 major revision iterations'
    ],
    badge: 'Best Seller for Startups'
  },
  {
    id: 'pack-keynote',
    name: 'The Keynote Masterpiece',
    price: '$4,800',
    delivery: '7-10 business days',
    description: 'Designed for executive symposia, conference keynotes, or major developer events where visual storytelling dictates brand prestige.',
    includes: [
      'Comprehensive content mapping & high-impact storyboard alignment',
      'Up to 25 unique bespoke cinematic wide-canvas slides',
      'Custom animations / transitioning blueprints styled in native files',
      'Custom assets, background templates & high fidelity vector layouts',
      'Urgent dedicated slack channel & live editing sessions on demand'
    ],
    badge: 'Popular for Enterprise'
  },
  {
    id: 'pack-template',
    name: 'Sovereign Brand System',
    price: '$1,950',
    delivery: '4-6 business days',
    description: 'Empower your internal marketing or product teams with a versatile, incredibly easy-to-use custom slide presentation framework system.',
    includes: [
      'Custom brand theme layout setup (matching specific corporate styling)',
      '12 reusable master layout templates (Team, Mission, Data charts, etc.)',
      '150+ custom presentation icons & typography styling style-guides',
      'Comprehensive guide video detailing how to copy and scale slides',
      '1 year of visual updates, support access & ongoing styling questions'
    ]
  }
];
