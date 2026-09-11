export const projectsData = [
  {
    id: "crawlbit",
    title: "Crawlbit Studio & Scraping Engine",
    subtitle: "High-Speed Web Crawler, Stealth Scraper & Multi-Format Document Parser",
    description: "Production-grade web scraping and domain crawling engine engineered for modern SPAs and enterprise document ingestion. Features native HTTP/2 stealth requests, Puppeteer Chromium automation for Cloudflare bypass, multi-format document conversion (HTML, PDF, Word, Excel to Markdown), and a zero-build client studio dashboard.",
    image: "/projects/crawlbit.png",
    liveUrl: "https://crawlbit.shivamjadon47.workers.dev/",
    githubUrl: "",
    featured: true,
    tags: [
      "Node.js",
      "Express.js",
      "Puppeteer & Chromium",
      "HTTP/2 Stealth",
      "Cheerio",
      "Poppler (PDF)",
      "Mammoth (DOCX)",
      "SheetJS (XLSX)",
      "Cloudflare Workers",
      "Docker"
    ],
    metrics: {
      "Engine": "HTTP/2 & Headless Chromium",
      "Formats": "Markdown, JSON, HTML, CSV",
      "Bypass": "Cloudflare & Anti-Bot Spoofing"
    },
    highlights: [
      "Native HTTP/2 Requester & Headless Chromium: Executes JavaScript SPAs, dynamic DOM hydration, and automated Cloudflare Turnstile bypass heuristics.",
      "Stealth & Anti-Detection Layer: Custom native JS injections spoofing navigator.webdriver, hardware concurrency, plugins, WebGL vendor, and permissions query.",
      "Multi-Format Ingestion Engine: Converts live web pages, PDFs (poppler-utils), Word documents (Mammoth.js), and Spreadsheets (SheetJS) into clean, LLM-ready Markdown tables and structured JSON.",
      "Studio Frontend & Client Inspector: Zero-build static architecture with Omni command bar, interactive collapsible JSON tree inspector, real-time health prober, and client-side Blob file exporters."
    ],
    techBreakdown: {
      backend: [
        { name: "Node.js (v20+) & Express.js", desc: "High-performance asynchronous event-driven REST API runtime." },
        { name: "Native curl (child_process)", desc: "Ultra-fast HTTP/2 stealth requester with custom headers & proxy routing." },
        { name: "Puppeteer + Chromium", desc: "Headless browser for modern JS SPAs, dynamic DOMs, and Turnstile bypass." },
        { name: "Stealth & Anti-Detection Layer", desc: "Native JS injection spoofing webdriver, WebGL vendor, and browser plugins." },
        { name: "Cheerio DOM Parser", desc: "High-speed HTML cleaner isolating main content, removing ads, and parsing links." },
        { name: "poppler-utils & Mammoth.js", desc: "Linux binary PDF extraction and Word (.docx) to HTML/Text conversion." },
        { name: "SheetJS & BFS Crawler", desc: "Excel/CSV table parser and In-house Breadth-First Search link graph traverser." }
      ],
      frontend: [
        { name: "Pure Zero-Build Static Studio", desc: "Vanilla HTML5/CSS3/ES6+ deployed with zero compile overhead." },
        { name: "Interactive JSON Tree Inspector", desc: "Collapsible real-time response tree viewer and Markdown renderer." },
        { name: "HTML5 Blob Exporter", desc: "1-click client-side export to .md, .json, .html, and .csv without roundtrips." }
      ],
      devops: [
        { name: "Docker & Docker Compose", desc: "Independent multi-stage builds (Node + Chromium + Poppler + Nginx)." },
        { name: "Cloudflare Edge & Render", desc: "Global edge CDN frontend and containerized backend microservice." }
      ]
    }
  }
];

export const sampleProjectTemplate = {
  id: "sample-project",
  title: "Your Project Title Here",
  subtitle: "Fullstack Architecture / AI Solution",
  description: "Add a concise description of what you built, the technical challenge you solved, and the measurable impact.",
  tags: ["React", "Node.js", "MongoDB", "RAG / LLM", "AWS"],
  featured: true,
  liveUrl: "#",
  githubUrl: "#",
  metrics: {
    latency: "< 500ms",
    scale: "Enterprise"
  },
  highlights: [
    "Key architectural achievement or technical metric #1",
    "Key architectural achievement or technical metric #2"
  ]
};
