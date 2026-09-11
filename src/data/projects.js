export const projectsData = [
  {
    id: "document-chat-ai",
    title: "Document RAG Chatbot",
    subtitle: "Context-Aware Document Intelligence & Conversational RAG",
    description: "An interactive Retrieval-Augmented Generation (RAG) platform powered by Google Gemini and vector embeddings. Users upload any document (PDF, TXT, DOCX), inject their API key, and converse with a strict-context AI that answers queries solely based on the uploaded file.",
    fullDescription: "Document RAG Chatbot is an end-to-end intelligent conversational assistant engineered to solve enterprise document interrogation. By leveraging vector embeddings, chunked semantic retrieval, and Google Gemini LLMs (such as gemini-2.5-flash), the application extracts verified facts with zero external hallucination. It features automated intent classification to filter off-topic questions, dynamic probing to resolve ambiguous user queries, and granular temperature/system prompt customization.",
    image: "/projects/document-chat-ai.png",
    liveUrl: "https://documentchatai.streamlit.app/",
    githubUrl: "",
    featured: true,
    tags: [
      "Generative AI",
      "RAG Pipeline",
      "Google Gemini API",
      "Vector Embeddings",
      "Streamlit",
      "Python",
      "Document Parsing",
      "Intent Classification"
    ],
    metrics: {
      "Model": "Gemini 2.5 Flash",
      "Retrieval": "Dense Vector RAG",
      "Guardrails": "Intent Classification & Probing"
    },
    highlights: [
      "Strict Grounded RAG: Answers user inquiries strictly based on uploaded document content with citation-level accuracy.",
      "Intent Classification: Automatically detects query intent to filter off-topic queries and prompt injections.",
      "Probing & Disambiguation: Intelligently prompts the user for clarification when questions are ambiguous or underspecified.",
      "Customizable LLM Controls: Flexible sidebar configuration for custom system prompts, temperature sliders, and Gemini model selection."
    ],
    techBreakdown: {
      ai_rag: [
        { name: "Retrieval-Augmented Generation (RAG)", desc: "Semantic chunking, vector indexing, and context injection into LLM prompts." },
        { name: "Google Gemini 2.5 Flash API", desc: "High-speed multi-modal reasoning and dynamic conversational response generation." },
        { name: "Vector Embedding Engine", desc: "High-dimensional embeddings for dense cosine similarity document retrieval." },
        { name: "Intent Classifier & Guardrails", desc: "Filters out-of-scope queries and guards against prompt leakage." }
      ],
      application: [
        { name: "Streamlit Cloud", desc: "Reactive Python web application with real-time state management and streaming UI." },
        { name: "Document Extractors", desc: "Fast text and layout parsing for multi-page PDF, DOCX, and text files." },
        { name: "Session & Key Management", desc: "Secure client-side API key handling without persisting sensitive tokens." }
      ]
    }
  },
  {
    id: "crawlbit",
    title: "Crawlbit Studio & Scraping Engine",
    subtitle: "High-Speed Web Crawler, Stealth Scraper & Multi-Format Document Parser",
    description: "Production-grade web scraping and domain crawling engine engineered for modern SPAs and enterprise document ingestion. Features native HTTP/2 stealth requests, Puppeteer Chromium automation for Cloudflare bypass, multi-format document conversion (HTML, PDF, Word, Excel to Markdown), and a zero-build client studio dashboard.",
    fullDescription: "Crawlbit is a full-featured data extraction suite built to scrape modern JavaScript web applications, traverse complex website hierarchies with an in-house BFS crawler, and convert multi-format enterprise files into LLM-ready clean Markdown and structured JSON. Engineered with an anti-detection stealth layer (spoofing WebGL, plugins, webdriver, hardware concurrency), it defeats automated bot mitigation systems like Cloudflare Turnstile while delivering sub-second scraping throughput.",
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
      "Multi-Format Ingestion Engine: Converts live web pages, PDFs (poppler-utils), Word documents (Mammoth.js), and Spreadsheets (SheetJS) into clean Markdown tables and JSON.",
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
