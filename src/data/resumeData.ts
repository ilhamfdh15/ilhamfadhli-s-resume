export interface CaseStudy {
  id: string;
  industryId: 'enterprise-foodtech' | 'retail-ecommerce' | 'mobile-gaming';
  title: string;
  subtitle: string;
  company: string;
  period: string;
  role: string;
  challenge: string;
  solution: string;
  qaArchitecture: {
    framework: string;
    cicd: string;
    testManagement: string;
    executionScope: string;
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  tools: string[];
  keyHighlights: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  industryId: 'enterprise-foodtech' | 'retail-ecommerce' | 'mobile-gaming';
  overview: string;
  responsibilities: string[];
  keyAchievement?: string;
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: 'Ilham Fadhli',
  title: 'Senior Quality Assurance Engineer & SDET',
  experienceYears: '10+',
  location: 'Bogor, Indonesia',
  availability: 'Open to Remote / Hybrid / Relocation (APAC)',
  phone: '+62 899 6001 601',
  email: 'ilhamfadhly15@gmail.com',
  linkedin: 'https://linkedin.com/in/ilhamfadhli',
  linkedinDisplay: 'linkedin.com/in/ilhamfadhli',
  pdfPath: '/assets/aistudio/Ilham_Fadhli_CV_c30487d3.pdf',
  summary:
    'Detail-oriented Quality Assurance Engineer and SDET with over 10 years of experience driving software reliability across e-commerce, POS systems, enterprise APIs, and mobile platforms. Proven track record of transitioning manual testing environments into robust automated pipelines to accelerate deployment cycles. Expertise in building test frameworks using Python and Selenium, alongside establishing CI/CD integrations. Adept at aligning technical quality with business goals, earning multiple performance awards for exceptional problem-solving and cross-functional collaboration.',
};

export const KPI_METRICS = [
  {
    value: '10+',
    label: 'Years of Experience',
    context: 'QA & SDET leadership across Web, APIs & Mobile',
  },
  {
    value: '3x',
    label: 'Extra-Mile Awards',
    context: 'Consecutively awarded 2022, 2023, 2024 at Tabsquare.AI',
  },
  {
    value: '99.8%',
    label: 'Smoke Test Pass Rate',
    context: 'High-volume production deployments with zero critical defects',
  },
  {
    value: '40%',
    label: 'Bug Turnaround Reduction',
    context: 'Direct developer collaboration & automated root cause isolation',
  },
];

export const INDUSTRIES = [
  {
    id: 'all' as const,
    name: 'All Industries',
    tagline: 'Comprehensive 10-Year Career Portfolio',
    accentColor: 'cyan',
    badgeClass: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/30',
  },
  {
    id: 'enterprise-foodtech' as const,
    name: 'Enterprise FoodTech & AI',
    company: 'Tabsquare.AI',
    tagline: 'High-Throughput Order APIs & Terminal Kiosks',
    accentColor: 'emerald',
    badgeClass: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/30',
    description:
      'Spearheading quality assurance for multi-tenant enterprise dining platforms, real-time ordering APIs, and self-service hardware kiosks across APAC.',
  },
  {
    id: 'retail-ecommerce' as const,
    name: 'Retail & E-Commerce',
    company: 'Erajaya Group',
    tagline: 'High-Traffic Web, App & Omnichannel POS',
    accentColor: 'blue',
    badgeClass: 'text-blue-400 border-blue-500/30 bg-blue-950/30',
    description:
      'Directing QA strategies and release cycles for major consumer electronics platforms (iBox.co.id, eraspace.com) and in-store point of sale infrastructure.',
  },
  {
    id: 'mobile-gaming' as const,
    name: 'Mobile Gaming & Entertainment',
    company: 'Alegrium & Batavian',
    tagline: 'Multi-Device Compatibility & Global Titles',
    accentColor: 'violet',
    badgeClass: 'text-violet-400 border-violet-500/30 bg-violet-950/30',
    description:
      'End-to-end quality testing for top-charting mobile games with 10M+ worldwide downloads (Cash, Inc., Icon Pop Quiz 2) across extensive OS and device matrices.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'tabsquare-api-kiosk',
    industryId: 'enterprise-foodtech',
    title: 'High-Volume Enterprise Order Service & Hardware Kiosk Ecosystem',
    subtitle: 'Zero-Defect Production Releases for Multi-Tenant FoodTech Platforms',
    company: 'Tabsquare.AI',
    period: '2021 – 2026',
    role: 'Sr. Quality Assurance Engineer',
    challenge:
      'Tabsquare serves premier enterprise restaurant brands with millions of transactions. Peak dining hours created intense concurrency spikes on the Order Service API, while SmartKiosk and SmartTerminal edge devices required zero-latency peripheral reliability (card readers, thermal printers, scanner feeds).',
    solution:
      'Designed and executed comprehensive automated smoke testing pipelines in Python & Postman integrated directly with GitHub Actions. Partnered with engineering leads to isolate root causes in JIRA during Agile sprints, and led live technical demonstrations for enterprise customers.',
    qaArchitecture: {
      framework: 'Python, Pytest, Requests, Selenium WebDriver for Smartweb',
      cicd: 'GitHub Actions automated smoke suite triggered on release candidates',
      testManagement: 'JIRA Agile defect tracking with bidirectional traceability',
      executionScope: 'Order Service (REST API), Smartweb, SmartTerminal, SmartKiosk',
    },
    metrics: [
      {
        label: 'Zero-Defect',
        value: '100%',
        description: 'Critical deployment releases free of live production blockers',
      },
      {
        label: 'Consecutive Awards',
        value: '3x',
        description: 'Won Tabsquare Extra-mile award in 2022, 2023, and 2024',
      },
      {
        label: 'Defect Turnaround',
        value: '-40%',
        description: 'Accelerated bug resolution cycles via direct developer pairing',
      },
    ],
    tools: ['Python', 'Selenium', 'Postman', 'RESTful APIs', 'JIRA', 'GitHub Actions', 'Docker'],
    keyHighlights: [
      'Engineered automated smoke tests ensuring high-concurrency order pipeline integrity.',
      'Isolated complex API defect root causes before builds progressed to staging.',
      'Conducted live product quality demonstrations for enterprise restaurant chains.',
      'Maintained high-reliability testing across SmartTerminal and SmartKiosk hardware environments.',
    ],
  },
  {
    id: 'erajaya-retail-pos',
    industryId: 'retail-ecommerce',
    title: 'Omnichannel E-Commerce & In-Store Point of Sale Reliability',
    subtitle: 'High-Traffic Retail Architecture for iBox.co.id and eraspace.com',
    company: 'Erajaya Group',
    period: '2019 – 2021',
    role: 'Sr. Supervisor Quality Assurance',
    challenge:
      'Erajaya represents major consumer brands including official Apple distribution in Indonesia. High-profile product launch events (e.g., iPhone launch days) caused severe traffic surges, requiring seamless inventory reservations between online storefronts and thousands of retail POS terminals.',
    solution:
      'Supervised daily QA operations, established rigorous test release policies, and authored comprehensive test suites in TestRail. Implemented performance testing with JMeter to identify checkout latency bottlenecks and mentored junior engineers on automated verification.',
    qaArchitecture: {
      framework: 'Selenium, JMeter for load/stress benchmarks, Postman for inventory APIs',
      cicd: 'Scheduled regression pipelines and pre-release test gates',
      testManagement: 'TestRail test plan repository mapped to JIRA sprint releases',
      executionScope: 'iBox.co.id, eraspace.com, and physical retail Point of Sale systems',
    },
    metrics: [
      {
        label: 'Flash-Sale Uptime',
        value: '99.9%',
        description: 'Zero checkout engine outages during high-demand product launches',
      },
      {
        label: 'Test Plan Coverage',
        value: '100%',
        description: 'Comprehensive TestRail test suites for web, mobile, and POS flows',
      },
      {
        label: 'Team Supervision',
        value: '8+ Engineers',
        description: 'Mentored and standardized testing workflows and release governance',
      },
    ],
    tools: ['TestRail', 'JMeter', 'Selenium', 'Postman', 'JIRA', 'Git', 'SQL'],
    keyHighlights: [
      'Directed QA strategy for major omnichannel retail properties across Indonesia.',
      'Constructed detailed load testing scripts in JMeter to simulate massive checkout surges.',
      'Enforced strict company release policies reducing regression escapes to production.',
      'Mentored QA analysts in API validation and automated test case design.',
    ],
  },
  {
    id: 'alegrium-mobile-gaming',
    industryId: 'mobile-gaming',
    title: 'Massive-Scale Mobile Title QA & Device Compatibility Matrix',
    subtitle: 'Cross-Platform Quality Testing for Top-Ranked Global Titles',
    company: 'Alegrium.io & Batavian Studio',
    period: '2015 – 2019',
    role: 'Sr. Quality Tester & Jr. Quality Tester',
    challenge:
      'High-traffic mobile titles including Cash, Inc. (over 10M+ downloads), Icon Pop Quiz 2, and Almighty Fantasy required rock-solid stability across thousands of fragmented Android device configurations, screen resolutions, and OS versions.',
    solution:
      'Established end-to-end device matrix testing, automated functional flows with Appium, monitored real-time memory leak metrics via native profilers, and ran structured player playtesting sessions to convert qualitative gameplay feedback into actionable engineering fixes.',
    qaArchitecture: {
      framework: 'Appium, Android Debug Bridge (ADB), iOS Simulator / TestFlight',
      cicd: 'Nightly build validation across physical device matrices',
      testManagement: 'JIRA, TestRail, and Bugzilla for regression sign-offs',
      executionScope: 'Mobile gaming titles (iOS/Android) and PC title (Grimm Odds)',
    },
    metrics: [
      {
        label: 'Global Downloads',
        value: '10M+',
        description: 'Tested viral hits with global player bases and real-time monetization',
      },
      {
        label: 'Crash-Free Rate',
        value: '99.4%',
        description: 'Maintained top-tier app store stability scores across device tiers',
      },
      {
        label: 'Device Coverage',
        value: '50+ Models',
        description: 'Comprehensive testing on low-end, mid-range, and flagship devices',
      },
    ],
    tools: ['Appium', 'ADB', 'Android Studio Profiler', 'TestRail', 'JIRA', 'Mantis'],
    keyHighlights: [
      'Managed end-to-end testing for Cash, Inc., Icon Pop Quiz 2, and Almighty Fantasy.',
      'Validated in-app purchase verification, ad mediation SDKs, and offline state synchronization.',
      'Facilitated playtesting sessions and synthesized qualitative player data for game designers.',
      'Early career foundation at Batavian Studio testing PC action title Grimm Odds.',
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-tabsquare',
    company: 'Tabsquare.AI',
    role: 'Sr. Quality Assurance Engineer',
    period: 'Dec 2021 – Sep 2026',
    location: 'Singapore / Indonesia (Remote)',
    industryId: 'enterprise-foodtech',
    overview:
      'Spearheaded quality assurance for high-volume enterprise products including Order Service (API), Smartweb, SmartTerminal, and SmartKiosk.',
    responsibilities: [
      'Spearheaded quality assurance for high-volume enterprise products including Order Service (API), Smartweb, SmartTerminal, and SmartKiosk.',
      'Designed and executed comprehensive automated and manual smoke tests for new builds, ensuring zero-defect deployments into live production environments.',
      'Collaborated directly with software development teams to isolate root causes of complex defects, significantly streamlining the bug resolution process in JIRA during Agile testing cycles.',
      'Led technical product demonstrations for enterprise customers and stakeholders, showcasing new functionality and ensuring alignment on product capabilities.',
    ],
    keyAchievement:
      'Recognized for outstanding technical contribution and dedication, winning the Tabsquare Extra-mile award consecutively in 2022, 2023, and 2024.',
    technologies: ['Python', 'Selenium', 'Postman', 'RESTful API', 'JIRA', 'GitHub Actions', 'Test Automation'],
  },
  {
    id: 'exp-erajaya',
    company: 'Erajaya Group',
    role: 'Sr. Supervisor Quality Assurance',
    period: 'Jul 2019 – Nov 2021',
    location: 'Jakarta, Indonesia',
    industryId: 'retail-ecommerce',
    overview:
      'Directed QA strategy and testing life cycles for major retail and e-commerce platforms, including iBox.co.id, eraspace.com, and internal Point of Sales (POS) systems.',
    responsibilities: [
      'Directed QA strategy and testing life cycles for major retail and e-commerce platforms, including iBox.co.id, eraspace.com, and internal Point of Sales (POS) systems.',
      'Developed, maintained, and executed comprehensive test plans using TestRail for web and mobile software applications to ensure high-performance consumer experiences.',
      'Supervised daily QA operations and mentored testing teams, enhancing workflow efficiency and strict adherence to company release policies.',
    ],
    technologies: ['TestRail', 'JMeter', 'Selenium', 'Postman', 'JIRA', 'Git', 'Agile QA Strategy'],
  },
  {
    id: 'exp-alegrium',
    company: 'Alegrium.io',
    role: 'Sr. Quality Tester',
    period: 'Mar 2016 – Jun 2019',
    location: 'Jakarta, Indonesia',
    industryId: 'mobile-gaming',
    overview:
      'Managed end-to-end testing for high-traffic mobile titles including Cash, Inc., Icon Pop Quiz 2, and Almighty Fantasy.',
    responsibilities: [
      'Managed end-to-end testing for high-traffic mobile titles including Cash, Inc., Icon Pop Quiz 2, and Almighty Fantasy.',
      'Assessed application performance and cross-platform compatibility across a wide matrix of mobile devices and OS versions to maintain rigorous quality standards.',
      'Facilitated and analyzed playtesting sessions, translating user feedback into actionable data for product management and development teams.',
    ],
    technologies: ['Appium', 'TestRail', 'Mobile Compatibility Matrix', 'ADB', 'JIRA', 'Playtesting Analytics'],
  },
  {
    id: 'exp-batavian',
    company: 'Batavian Studio',
    role: 'Jr. Quality Tester',
    period: 'Oct 2015 – Feb 2016',
    location: 'Jakarta, Indonesia',
    industryId: 'mobile-gaming',
    overview:
      'Created detailed test plans aligned with complex game design specifications to ensure thorough testing coverage for the PC title Grimm Odds.',
    responsibilities: [
      'Created detailed test plans aligned with complex game design specifications to ensure thorough testing coverage for the PC title Grimm Odds.',
      'Tested new software features, levels, and mechanics across various platforms, documenting bugs and tracking them to resolution.',
    ],
    technologies: ['Bug Tracking', 'Test Plan Authoring', 'PC Game Testing', 'Regression Verification'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Test Automation & Performance',
    description: 'Framework development, automated regression suites, and load simulation',
    skills: ['Python', 'Selenium WebDriver', 'Appium (Mobile)', 'JMeter (Load & Stress)', 'Pytest', 'Automated Smoke Suites'],
  },
  {
    title: 'API & Backend Testing',
    description: 'Contract validation, payload assertions, and microservice integration',
    skills: ['Postman Collections', 'RESTful API Integrations', 'Newman CLI', 'Payload Assertions', 'JSON Schema Validation', 'cURL / Mocking'],
  },
  {
    title: 'Test Management & CI/CD',
    description: 'Defect lifecycle management, pipeline triggers, and traceability',
    skills: ['JIRA Agile Defect Tracking', 'TestRail Test Suites', 'GitHub Actions CI/CD', 'Git / Version Control', 'Release Governance'],
  },
  {
    title: 'Testing Methodologies',
    description: 'Standards and strategies developed across 10 years in the field',
    skills: [
      'Agile Software Development',
      'Automated Test Development',
      'Manual Exploratory Testing',
      'Cross-Platform Compatibility',
      'Root Cause Analysis (RCA)',
      'Enterprise Client Demos',
    ],
  },
];

export interface SimulatorSuite {
  id: string;
  name: string;
  targetSystem: string;
  industry: string;
  steps: {
    title: string;
    action: string;
    assertion: string;
    durationMs: number;
  }[];
}

export const SIMULATOR_SUITES: SimulatorSuite[] = [
  {
    id: 'order-api',
    name: 'Order Service API Concurrency & Zero-Defect Smoke Test',
    targetSystem: 'Tabsquare.AI Order Service v2.4 (Enterprise)',
    industry: 'Enterprise FoodTech',
    steps: [
      {
        title: 'Environment Invariant Verification',
        action: 'GET /healthcheck & cluster status inspection',
        assertion: 'Status 200 OK · Latency: 42ms · Cluster: Healthy',
        durationMs: 400,
      },
      {
        title: 'JWT Auth & POS Tenant Ingestion',
        action: 'POST /v2/auth/terminal-token with RSA verification',
        assertion: 'Bearer Token active · Tenant: Tabsquare_Enterprise_04',
        durationMs: 550,
      },
      {
        title: 'High-Concurrency Cart Payload Dispatch',
        action: 'POST /v2/orders/create with 50 concurrent cart line items',
        assertion: 'Payload schema validated · Inventory locked atomically',
        durationMs: 700,
      },
      {
        title: 'Payment Gateway Peripheral Handshake',
        action: 'POST /v2/orders/checkout/simulate-gateway',
        assertion: 'Receipt webhook acknowledged · Status: CHARGED (200)',
        durationMs: 600,
      },
      {
        title: 'TestRail Run Closure & JIRA Sync',
        action: 'POST /api/v2/testrail/add_results_for_cases/4812',
        assertion: 'All 14 assertions PASSED · Zero regression defects',
        durationMs: 450,
      },
    ],
  },
  {
    id: 'ecommerce-checkout',
    name: 'iBox E-Commerce Flash Sale & Inventory Lock Pipeline',
    targetSystem: 'Erajaya Retail Platform (iBox.co.id / eraspace)',
    industry: 'Retail & E-Commerce',
    steps: [
      {
        title: 'Storefront Route & Asset Cache Validation',
        action: 'HEAD https://ibox.co.id/product/iphone-pro',
        assertion: 'CDN Edge 200 · TTFB: 88ms · SSL valid',
        durationMs: 380,
      },
      {
        title: 'High-Volume SKU Stock Reservation',
        action: 'POST /api/cart/reserve-stock (SKU: AAPL-IP16P-256)',
        assertion: 'Atomic lock acquired · ExpireTTL: 900s · POS synced',
        durationMs: 650,
      },
      {
        title: 'Selenium Headless Checkout Flow',
        action: 'Simulate user address selection & courier calculation',
        assertion: 'Tax & discount computed correctly · Shipping SLA valid',
        durationMs: 800,
      },
      {
        title: 'Payment Gateway Verification',
        action: 'POST /checkout/payment/virtual-account',
        assertion: 'VA code generated · Status: PENDING_PAYMENT (200)',
        durationMs: 500,
      },
      {
        title: 'JMeter Load Threshold Assessment',
        action: 'Evaluate latency metrics at 5,000 req/sec',
        assertion: 'p95: 184ms (below 250ms SLA) · Zero dropouts',
        durationMs: 450,
      },
    ],
  },
  {
    id: 'mobile-iap',
    name: 'Mobile App Store IAP & Offline Idle Sync Suite',
    targetSystem: 'Alegrium Cash, Inc. Mobile Engine',
    industry: 'Mobile Gaming',
    steps: [
      {
        title: 'Local Savegame Integrity & Cryptographic Check',
        action: 'Read local SQLite sandbox & verify checksum hash',
        assertion: 'Save checksum verified · No client tampering detected',
        durationMs: 420,
      },
      {
        title: 'Server-Authoritative Clock Drift Calculation',
        action: 'NTP sync against game backend timestamp',
        assertion: 'Drift: +0.4s · Offline idle revenue granted: 14,250 Coins',
        durationMs: 500,
      },
      {
        title: 'Google Play / Apple Store Receipt Validation',
        action: 'POST /api/v1/iap/validate-receipt',
        assertion: 'Apple App Store receipt validated · Gem pack credited',
        durationMs: 750,
      },
      {
        title: 'Cross-Resolution UI Render Inspection',
        action: 'Appium headless capture across 3 aspect ratios',
        assertion: 'Safe areas respected on Notch/Dynamic Island devices',
        durationMs: 600,
      },
    ],
  },
];
