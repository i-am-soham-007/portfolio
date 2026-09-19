import { Project, SkillCategory, ExperienceItem, PhilosophyStep, GitHubRepo, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: "Soham Rathod",
  shortName: "Soham",
  monogram: "SR",
  title: "Senior Software Engineer | Node.js Backend Engineer | Full-Stack Developer",
  roleHeadline: "Building powerful backend systems, resilient APIs, and modern web experiences.",
  subHeadline: "Specializing in Node.js, Express.js, MongoDB, REST API architecture, payment integrations, and full-stack engineering with Next.js and React.",
  experienceYears: "5+",
  email: "rsoham00@gmail.com",
  backupEmail: "rsoham00@gmail.com",
  phone: "+91 9265243821",
  github: "https://github.com/i-am-soham-007",
  linkedin: "https://linkedin.com/in/soham-rathod", // Configurable placeholder
  location: "Remote / Global",
  availabilityStatus: "Available for Software Engineering Opportunities",
  specialization: "Node.js + Express.js + MongoDB backend development",
};

export const QUICK_STATS = [
  { label: "Experience", value: "5+ Years", highlight: "Production Systems" },
  { label: "Core Specialization", value: "Node.js & MongoDB", highlight: "High Throughput" },
  { label: "Architecture", value: "REST & Webhooks", highlight: "Resilient & Scalable" },
  { label: "Full-Stack Capability", value: "Next.js & React", highlight: "Modern UX" },
];

export const PHILOSOPHY_STEPS: PhilosophyStep[] = [
  {
    number: "01",
    title: "Understand",
    tagline: "Requirements First",
    description: "Deeply understand domain logic, operational constraints, latency requirements, and business goals before committing to code.",
    icon: "Compass"
  },
  {
    number: "02",
    title: "Architect",
    tagline: "Clean Systems",
    description: "Design clean REST interfaces, strict schema validation, normalized/indexed data models, idempotent endpoints, and resilient error pipelines.",
    icon: "Layers"
  },
  {
    number: "03",
    title: "Build",
    tagline: "Production-Grade Code",
    description: "Implement scalable Node.js services with robust authentication, role-based access control, secure middleware, and maintainable TypeScript patterns.",
    icon: "Cpu"
  },
  {
    number: "04",
    title: "Improve",
    tagline: "Continuous Polish",
    description: "Benchmark query performance, enforce automated API tests, observe runtime telemetry, optimize bottlenecks, and iterate continuously.",
    icon: "Zap"
  }
];

export const TECH_TICKER = [
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "REST APIs", category: "Architecture" },
  { name: "NestJS", category: "Backend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Webhooks", category: "Integrations" },
  { name: "Payment Integrations", category: "Commerce" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Git & GitHub", category: "DevOps" },
  { name: "AI Workflows", category: "Tooling" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "mern",
    name: "MERN & Full-Stack",
    iconName: "Layers",
    description: "End-to-end full-stack architectures utilizing MongoDB, Express.js, React.js, and Node.js with production scalability.",
    skills: [
      {
        name: "MERN Stack Architecture",
        category: "mern",
        categoryLabel: "Full-Stack Core",
        level: "Expert",
        proficiency: 96,
        years: "5+ Yrs",
        highlight: true,
        description: "Seamless orchestration across MongoDB database, Express API router, React single-page UI, and Node.js runtime.",
        clientImpact: "Zero-latency data binding, rapid time-to-market, and end-to-end full-stack accountability.",
        tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth", "Full-Stack"]
      },
      {
        name: "Next.js (App Router & SSR)",
        category: "mern",
        categoryLabel: "React Framework",
        level: "Advanced",
        proficiency: 92,
        years: "3+ Yrs",
        highlight: true,
        description: "Server Components, Server Actions, Dynamic Edge Routing, and SEO-optimized web applications.",
        clientImpact: "Lightning-fast First Contentful Paint (FCP) and superior SEO indexability.",
        tags: ["Next.js 14/15", "SSR", "Server Actions", "SEO", "Vercel"]
      },
      {
        name: "React.js Ecosystem",
        category: "mern",
        categoryLabel: "Frontend Core",
        level: "Expert",
        proficiency: 94,
        years: "4+ Yrs",
        highlight: true,
        description: "Declarative UI engineering, custom React hooks, Context API, state machines, and component modularity.",
        clientImpact: "Fluid, high-performance user interfaces with zero unnecessary re-renders.",
        tags: ["React 18+", "Hooks", "Context API", "State Management", "Performance"]
      },
      {
        name: "TypeScript (Strict Mode)",
        category: "mern",
        categoryLabel: "Type Safety",
        level: "Advanced",
        proficiency: 90,
        years: "4+ Yrs",
        highlight: true,
        description: "Strict compile-time type safety, generic utility contracts, DTO validation, and polymorphic interfaces.",
        clientImpact: "Eliminates 80%+ of runtime bugs before deployment and speeds up codebase maintenance.",
        tags: ["TypeScript", "Generics", "Type Guards", "DTOs", "Strict Mode"]
      }
    ]
  },
  {
    id: "backend",
    name: "Node.js, Express & NestJS",
    iconName: "Server",
    description: "High-throughput asynchronous backends, resilient event loops, microservices, and enterprise API gateways.",
    skills: [
      {
        name: "Node.js Runtime & Streams",
        category: "backend",
        categoryLabel: "Backend Core",
        level: "Expert",
        proficiency: 98,
        years: "5+ Yrs",
        highlight: true,
        description: "Non-blocking event loop tuning, async streaming pipelines, worker threads, clustering, and memory optimization.",
        clientImpact: "Handles thousands of concurrent requests with ultra-low server resource utilization.",
        tags: ["Node.js", "Event Loop", "Streams", "Clustering", "Async I/O"]
      },
      {
        name: "Express.js Microservices",
        category: "backend",
        categoryLabel: "REST Framework",
        level: "Expert",
        proficiency: 96,
        years: "5+ Yrs",
        highlight: true,
        description: "Modular route orchestration, security middleware (Helmet/CORS), rate limiters, and error logging envelopes.",
        clientImpact: "Bulletproof REST endpoints with standardized JSON structures and rock-solid error safety.",
        tags: ["Express.js", "Middleware", "CORS", "Rate-Limiting", "Error Envelopes"]
      },
      {
        name: "NestJS Architecture",
        category: "backend",
        categoryLabel: "Enterprise Backend",
        level: "Advanced",
        proficiency: 88,
        years: "3+ Yrs",
        highlight: true,
        description: "Enterprise modular design, Dependency Injection (DI) containers, class-validator DTOs, guards, and interceptors.",
        clientImpact: "Enterprise-grade maintainability, clean domain boundaries, and scalable code organization.",
        tags: ["NestJS", "Dependency Injection", "Decorators", "Guards", "Interceptors"]
      },
      {
        name: "RESTful APIs & OpenAPI",
        category: "backend",
        categoryLabel: "API Design",
        level: "Expert",
        proficiency: 95,
        years: "5+ Yrs",
        highlight: true,
        description: "Strict REST architectural principles, pagination, query filtering, semantic HTTP codes, and Postman specs.",
        clientImpact: "Intuitive, self-documenting APIs that third-party frontends and mobile apps integrate with ease.",
        tags: ["RESTful API", "OpenAPI", "Swagger", "Postman", "Pagination"]
      },
      {
        name: "Webhooks & Payment Gateways",
        category: "backend",
        categoryLabel: "Fintech & Events",
        level: "Advanced",
        proficiency: 92,
        years: "4+ Yrs",
        highlight: true,
        description: "Idempotent payment ingestion, Stripe/PayPal/Razorpay integration, cryptographic HMAC verification, and retry backoffs.",
        clientImpact: "Guarantees zero duplicate billing, 100% webhook delivery verification, and real-time reconciliation.",
        tags: ["Stripe", "PayPal", "Razorpay", "HMAC Verification", "Idempotency"]
      }
    ]
  },
  {
    id: "php",
    name: "PHP, Laravel & CodeIgniter",
    iconName: "Code2",
    description: "Robust PHP applications, MVC architecture, rapid business logic delivery, and legacy codebase modernization.",
    skills: [
      {
        name: "PHP (Core & Modern PHP 8+)",
        category: "php",
        categoryLabel: "Server Language",
        level: "Expert",
        proficiency: 92,
        years: "5+ Yrs",
        highlight: true,
        description: "Object-oriented PHP, typed properties, match expressions, Composer package ecosystem, and PDO security.",
        clientImpact: "Rock-solid backend execution, battle-tested stability, and widespread hosting compatibility.",
        tags: ["PHP 8.x", "OOP", "Composer", "PDO", "Sessions"]
      },
      {
        name: "Laravel Framework",
        category: "php",
        categoryLabel: "Enterprise PHP",
        level: "Advanced",
        proficiency: 90,
        years: "4+ Yrs",
        highlight: true,
        description: "Eloquent ORM, Blade templating, service providers, Artisan commands, database migrations, and queues.",
        clientImpact: "Rapid application prototyping, elegant MVC modeling, and clean database schema migrations.",
        tags: ["Laravel", "Eloquent ORM", "Blade", "Artisan", "Migrations"]
      },
      {
        name: "CodeIgniter (CI)",
        category: "php",
        categoryLabel: "Lightweight MVC",
        level: "Expert",
        proficiency: 91,
        years: "4+ Yrs",
        highlight: false,
        description: "Lightweight MVC scaffolding, custom helper libraries, Active Record database layer, and legacy optimization.",
        clientImpact: "Blazing fast execution with near-zero overhead, ideal for custom enterprise portals and legacy systems.",
        tags: ["CodeIgniter", "MVC Scaffolding", "Active Record", "Security", "Legacy Migration"]
      },
      {
        name: "MySQL & Relational Modeling",
        category: "php",
        categoryLabel: "Relational DB",
        level: "Advanced",
        proficiency: 90,
        years: "5+ Yrs",
        highlight: false,
        description: "Normalized relational schemas, foreign keys, complex joins, indexing, and SQL injection prevention via prepared statements.",
        clientImpact: "ACID consistency, rock-solid relational data integrity, and sub-millisecond query indexing.",
        tags: ["MySQL", "Relational Schema", "Foreign Keys", "Prepared Statements", "Indexing"]
      }
    ]
  },
  {
    id: "frontend",
    name: "Frontend, Tailwind & Bootstrap",
    iconName: "Layout",
    description: "Pixel-perfect, mobile-responsive user interfaces with utility CSS, component systems, and smooth animations.",
    skills: [
      {
        name: "Tailwind CSS",
        category: "frontend",
        categoryLabel: "Modern Styling",
        level: "Expert",
        proficiency: 96,
        years: "4+ Yrs",
        highlight: true,
        description: "Utility-first design systems, responsive break-point engineering, custom plugins, dark mode, and JIT compilation.",
        clientImpact: "Ultra-compact CSS bundles, uniform design tokens, and rapid turnaround on custom designs.",
        tags: ["Tailwind CSS", "Utility-First", "Design Tokens", "Dark Mode", "JIT"]
      },
      {
        name: "Bootstrap & Responsive UI",
        category: "frontend",
        categoryLabel: "UI Framework",
        level: "Expert",
        proficiency: 94,
        years: "5+ Yrs",
        highlight: false,
        description: "12-column grid architectures, mobile-first layouts, custom modal/dropdown components, and Sass theming.",
        clientImpact: "Flawless cross-browser responsiveness across all mobile, tablet, and widescreen desktop devices.",
        tags: ["Bootstrap 4/5", "12-Column Grid", "Responsive", "Sass", "Cross-Browser"]
      },
      {
        name: "HTML5, Modern CSS3 & Motion",
        category: "frontend",
        categoryLabel: "Web Standards",
        level: "Expert",
        proficiency: 95,
        years: "5+ Yrs",
        highlight: false,
        description: "Semantic web structure, CSS Grid/Flexbox, hardware-accelerated transitions, and accessible ARIA standards.",
        clientImpact: "Accessible, high-contrast layouts that load instantaneously on mobile networks.",
        tags: ["HTML5", "CSS3 Grid", "Flexbox", "ARIA", "Micro-Interactions"]
      },
      {
        name: "JavaScript (ES6+) & AJAX",
        category: "frontend",
        categoryLabel: "Core Scripting",
        level: "Expert",
        proficiency: 96,
        years: "5+ Yrs",
        highlight: false,
        description: "Async/await patterns, promises, DOM manipulation, Fetch API, jQuery integration, and client-side caching.",
        clientImpact: "Interactive, snappy client interfaces with instant feedback and zero page refreshes.",
        tags: ["JavaScript ES6+", "Fetch API", "Async/Await", "DOM", "AJAX"]
      }
    ]
  },
  {
    id: "database",
    name: "Databases & DevOps",
    iconName: "Database",
    description: "Database indexing, schema modeling, document pipelines, and modern DevOps tools.",
    skills: [
      {
        name: "MongoDB & Mongoose",
        category: "database",
        categoryLabel: "Document Store",
        level: "Expert",
        proficiency: 96,
        years: "5+ Yrs",
        highlight: true,
        description: "Complex aggregation pipelines, compound indexing, schema validation, population, and multi-document transactions.",
        clientImpact: "Scales effortlessly with evolving product requirements while preserving high read/write throughput.",
        tags: ["MongoDB", "Mongoose", "Aggregations", "Compound Indexes", "Transactions"]
      },
      {
        name: "PostgreSQL & SQL",
        category: "database",
        categoryLabel: "Relational DB",
        level: "Advanced",
        proficiency: 88,
        years: "3+ Yrs",
        highlight: false,
        description: "JSONB columns, complex relational joins, foreign key constraints, connection pooling, and ACID guarantees.",
        clientImpact: "Guaranteed transactional consistency for financial ledgers and sensitive user accounts.",
        tags: ["PostgreSQL", "JSONB", "Connection Pooling", "ACID", "Transactions"]
      },
      {
        name: "Git, GitHub & Postman",
        category: "database",
        categoryLabel: "Tooling & Quality",
        level: "Expert",
        proficiency: 95,
        years: "5+ Yrs",
        highlight: true,
        description: "Git branching workflows, automated pull request validation, Postman collection test runners, and API mocks.",
        clientImpact: "Smooth team collaboration, rapid onboarding, and reproducible automated API test suites.",
        tags: ["Git", "GitHub", "Postman", "Automated Tests", "CI/CD"]
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-sanket-patel",
    author: "Sanket Patel",
    role: "Founder & Director",
    company: "Subh Labh Global Cargo",
    projectTitle: "Subh Labh Global Cargo (subhlabhgc.com)",
    projectUrl: "https://subhlabhgc.com/",
    rating: 5,
    comment: "Amazing work, on time delivered.",
    date: "Completed & Live in Production",
    verified: true,
    tags: ["Full-Stack Integration", "Freelance Delivery", "5.0 Rating", "On-Time"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "codelens",
    title: "CodeLens — Developer Tools Suite",
    category: "fullstack",
    categoryLabel: "Open Source Project",
    tagline: "Free online JSON viewer, code compare, and developer productivity utilities.",
    description: "CodeLens helps engineers format JSON, inspect payloads, compare code changes, and streamline API and debugging workflows with browser-based tools designed for speed and privacy.",
    problem: "Developers often need to quickly format JSON, validate API payloads, or compare code snippets without downloading heavy desktop applications or compromising privacy by sending code to remote servers.",
    solution: "Built a suite of developer utilities including a JSON Viewer, Code Compare tool, and JWT Decoder that run entirely in the browser, ensuring high performance and data privacy.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    integrations: ["Monaco Editor", "Vercel Hosting", "Browser Local Storage"],
    features: [
      "Online JSON Viewer with beautifier, minifier, and tree inspector",
      "Online Code Compare with side-by-side and inline unified diffs",
      "JWT Decoder for inspecting claims and signatures securely",
      "Privacy-first architecture running entirely in the local browser"
    ],
    role: "Full-Stack Engineer — Designed and developed the complete developer tools suite.",
    liveUrl: "https://codelens-dev.vercel.app/",
    githubUrl: "https://github.com/i-am-soham-007/codelens",
    featured: true,
    status: "live",
    architectureSteps: [
      { title: "User Interface", description: "Responsive tools built with React and Tailwind CSS", tech: "Next.js", type: "client" },
      { title: "Code Editor", description: "Integrated Monaco Editor for syntax highlighting and diffing", tech: "Monaco Editor", type: "third-party" },
      { title: "Local Processing", description: "All formatting and validation runs in-browser for privacy", tech: "Web APIs", type: "gateway" }
    ]
  },
  {
    id: "subh-labh-global-cargo",
    title: "Subh Labh Global Cargo — Enterprise Logistics Web Portal",
    category: "fullstack",
    categoryLabel: "Client Project (Freelance)",
    tagline: "End-to-end full-stack web integration, freight inquiry automation, and live production deployment for international logistics.",
    description: "Complete freelance engineering and web integration for Subh Labh Global Cargo (subhlabhgc.com). Delivered a high-performance, mobile-first cargo logistics platform with automated inquiry pipelines, interactive freight service catalogs, WhatsApp Business instant connectivity, and SEO optimization.",
    problem: "The client required a modern, reliable web presence to showcase global sea/air freight forwarding capabilities, capture commercial quotation inquiries, and establish strong digital credibility for international enterprise clients.",
    solution: "Engineered and deployed a responsive web portal featuring instant inquiry validation, automated lead forwarding, interactive logistics solutions, and lightning-fast asset loading on live domain subhlabhgc.com.",
    technologies: ["Node.js", "JavaScript (ES6+)", "Express.js", "Tailwind CSS", "Bootstrap", "HTML5 & Modern CSS3", "PHP Form Handler API", "DNS & SSL"],
    integrations: ["Freight Quote Dispatcher", "WhatsApp Business Gateway", "Google Maps & Geolocation", "Live DNS & Production Server", "SEO Meta & OpenGraph"],
    features: [
      "Full web integration & live deployment at https://subhlabhgc.com/",
      "Automated logistics & cargo quote request forms with instant dispatch",
      "Interactive showcase of Sea Freight, Air Freight, and Customs Clearance",
      "Direct one-click WhatsApp Business and email communication channels",
      "Mobile-optimized responsive layouts with sub-second page loads"
    ],
    role: "Lead Full-Stack Freelance Engineer — Managed end-to-end UI design, backend form endpoints, asset optimization, and live deployment.",
    liveUrl: "https://subhlabhgc.com/",
    featured: true,
    status: "live",
    clientName: "Sanket Patel",
    review: {
      author: "Sanket Patel",
      role: "Founder & Director",
      company: "Subh Labh Global Cargo",
      rating: 5,
      comment: "Amazing work, on time delivered.",
      verified: true
    },
    architectureSteps: [
      { title: "Client Interaction", description: "Shippers request freight quotes & explore global shipping services", tech: "Modern Responsive UI", type: "client" },
      { title: "Inquiry Ingestion API", description: "Sanitizes and processes commercial quote inquiries with input validation", tech: "Node / PHP Endpoint", type: "gateway" },
      { title: "Instant Notification", description: "Dispatches alerts to operations team via email & WhatsApp gateway", tech: "Messaging Webhook", type: "service" },
      { title: "Production Hosting", description: "Zero-downtime DNS, SSL encryption, and high-speed server configuration", tech: "subhlabhgc.com Live Host", type: "database" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Technology Solutions & Product Engineering",
    role: "Senior Software Engineer (Backend & Full-Stack)",
    period: "2023 — Present",
    location: "Remote",
    type: "Full-Time",
    summary: "Spearheading backend architecture, core API engineering, database design, and critical third-party integrations across scalable web applications.",
    achievements: [
      "Architected and deployed high-performance Node.js and Express backend services serving thousands of daily API requests.",
      "Designed secure REST APIs featuring robust JWT authentication, role-based authorization (RBAC), and strict input validation.",
      "Implemented seamless payment gateway integrations with automated webhook listeners and atomic database transactions.",
      "Optimized MongoDB aggregation pipelines and compound indexes, improving critical endpoint response times by up to 40%.",
      "Collaborated on modern Next.js and React full-stack applications with clean architecture and responsive UI experiences."
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "TypeScript", "Next.js", "React", "REST APIs", "Payment Integrations", "Webhooks"]
  }
];

export const INTEGRATION_CAPABILITIES = [
  {
    title: "REST API Architecture",
    description: "Semantic RESTful design, clean resource controllers, versioned endpoints, pagination, and unified error models.",
    icon: "Network",
    tags: ["Node.js", "Express", "REST", "OpenAPI"]
  },
  {
    title: "Payment Gateway Integration",
    description: "End-to-end checkout flows, secure payment intents, signature-verified webhooks, and ledger reconciliation.",
    icon: "CreditCard",
    tags: ["Payments", "Webhooks", "Idempotency", "Transactions"]
  },
  {
    title: "Authentication & Security",
    description: "Cryptographic token rotation (JWT), OAuth 2.0 authorization, password hashing, and role hierarchies.",
    icon: "ShieldCheck",
    tags: ["JWT", "OAuth 2.0", "RBAC", "Bcrypt"]
  },
  {
    title: "Webhook Ingestion Pipelines",
    description: "High-reliability event listeners with HMAC signature validation, deduplication locks, and exponential backoff.",
    icon: "RefreshCw",
    tags: ["HMAC", "Event Loops", "Atomic Locks", "Retry Queues"]
  },
  {
    title: "Database Modeling & Indexing",
    description: "MongoDB aggregation pipelines, compound indexing strategies, schema validation, and relational design.",
    icon: "Database",
    tags: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL"]
  },
  {
    title: "Third-Party SaaS Integrations",
    description: "Connecting external CRM, notification, storage, and cloud service APIs through resilient adapter layers.",
    icon: "CloudLightning",
    tags: ["SaaS APIs", "Cloud Services", "Adapters", "Resilience"]
  }
];

export const SERVICES_LIST = [
  {
    title: "Backend Development",
    description: "Scalable server architectures designed for reliability, concurrency, and high throughput.",
    tech: "Node.js, Express.js, TypeScript",
    icon: "Server"
  },
  {
    title: "REST API Development",
    description: "Clean, documented, and resilient REST APIs with predictable contracts and error handling.",
    tech: "Express, NestJS, REST Standards",
    icon: "Code2"
  },
  {
    title: "Node.js Applications",
    description: "Event-driven asynchronous services leveraging streams, clustering, and worker threads.",
    tech: "Node.js Runtime, Microservices",
    icon: "Cpu"
  },
  {
    title: "Express.js Architecture",
    description: "Custom middleware chains, security filters, rate limiters, and structured MVC routing.",
    tech: "Express.js, Middlewares",
    icon: "Layers"
  },
  {
    title: "NestJS Systems",
    description: "Modular enterprise-grade applications with dependency injection and DTO validations.",
    tech: "NestJS, TypeScript, Decorators",
    icon: "Box"
  },
  {
    title: "MongoDB Applications",
    description: "Data modeling with Mongoose, compound indexes, aggregation pipelines, and transactions.",
    tech: "MongoDB, Mongoose, Aggregations",
    icon: "Database"
  },
  {
    title: "Next.js Applications",
    description: "Modern full-stack web applications with Server Components, SEO optimization, and fast UX.",
    tech: "Next.js, App Router, React",
    icon: "Globe"
  },
  {
    title: "Third-Party Integrations",
    description: "Bridging your core backend with external SaaS, notification providers, and cloud services.",
    tech: "OAuth, REST, Webhooks",
    icon: "PlugZap"
  },
  {
    title: "Payment Integrations",
    description: "Secure, idempotent checkout and recurring billing pipelines with verified webhooks.",
    tech: "Gateways, Webhooks, Ledgers",
    icon: "CreditCard"
  },
  {
    title: "API Architecture & Security",
    description: "Designing token auth lifecycles, role-based access control, and vulnerability hardening.",
    tech: "JWT, RBAC, Helmet, CORS",
    icon: "Shield"
  },
  {
    title: "Database-Backed Applications",
    description: "Multi-tenant data architectures, efficient caching layers, and optimized queries.",
    tech: "MongoDB, MySQL, PostgreSQL",
    icon: "HardDrive"
  },
  {
    title: "AI-Assisted Development",
    description: "Accelerated development workflows pairing senior engineering judgment with AI velocity.",
    tech: "Prompting, Vibe Coding, Prototyping",
    icon: "Sparkles"
  }
];

export const WHY_WORK_WITH_ME = [
  {
    title: "Clean Architecture",
    description: "Code structured for clarity, maintainability, and effortless onboarding for any engineering team.",
    icon: "LayoutGrid"
  },
  {
    title: "Scalable APIs",
    description: "Endpoints engineered to withstand traffic spikes, large payload sizes, and high concurrent loads.",
    icon: "TrendingUp"
  },
  {
    title: "Business-Focused Development",
    description: "Software aligned with business goals, user outcomes, conversion funnels, and revenue metrics.",
    icon: "Briefcase"
  },
  {
    title: "Reliable Integrations",
    description: "Fail-safe external integrations with automated retry backoffs, signature checks, and error boundaries.",
    icon: "CheckCircle2"
  },
  {
    title: "Modern Technology",
    description: "Leveraging TypeScript, Node.js, Next.js, and React to deliver cutting-edge web experiences.",
    icon: "Zap"
  },
  {
    title: "Continuous Improvement",
    description: "Proactive refactoring, performance profiling, security audits, and continuous technical refinement.",
    icon: "Repeat"
  }
];

export const GITHUB_REPOS_STATIC: GitHubRepo[] = [
  {
    name: "nodejs-express-mongodb-starter",
    description: "Production-ready Node.js & Express REST API starter with JWT auth, Mongoose schemas, role-based access control, and error handling.",
    stars: 18,
    forks: 7,
    language: "JavaScript / TypeScript",
    topics: ["nodejs", "expressjs", "mongodb", "rest-api", "jwt-authentication"],
    url: "https://github.com/i-am-soham-007"
  },
  {
    name: "payment-webhook-handler",
    description: "Resilient payment webhook ingestion engine with cryptographic signature verification, idempotency locks, and retry queues.",
    stars: 24,
    forks: 9,
    language: "TypeScript",
    topics: ["webhooks", "payments", "idempotency", "nodejs", "crypto"],
    url: "https://github.com/i-am-soham-007"
  },
  {
    name: "fullstack-nextjs-dashboard",
    description: "Modern enterprise dashboard built with Next.js App Router, React, Tailwind CSS, and Node.js backend integration.",
    stars: 31,
    forks: 12,
    language: "TypeScript",
    topics: ["nextjs", "react", "tailwindcss", "dashboard", "fullstack"],
    url: "https://github.com/i-am-soham-007"
  },
  {
    name: "mongodb-aggregation-toolkit",
    description: "Collection of reusable MongoDB aggregation pipelines for reporting, pagination, multi-collection lookups, and faceted search.",
    stars: 15,
    forks: 5,
    language: "JavaScript",
    topics: ["mongodb", "mongoose", "aggregation", "database"],
    url: "https://github.com/i-am-soham-007"
  }
];
