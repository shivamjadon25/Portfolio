# Shivam Jadon — Minimal & Modern Portfolio

A high-performance, architecturally refined portfolio website built for **Shivam Jadon** (Fullstack Developer & Generative AI / RAG Engineer).

## 🚀 Key Features & Highlights

- **Custom Architectural Aesthetic**: Designed with an obsidian glassmorphism palette, dynamic ambient glow, micro-borders, and typography inspired by Linear, Vercel, and Apple engineering.
- **Interactive AI & RAG Architecture Visualizer**: Live interactive node flow diagram simulating the multi-stage pipeline (Omnichannel Gateway → Vector Embeddings → OpenSearch kNN → LLM Guardrails Agent → Enterprise Fulfillment) with simulated latency and cosine metrics.
- **Career Timeline & Deep Dive**: Interactive breakdown of experience at BlackBeltHelp (Senior MERN & GenAI Engineer, Frontend Developer, Google Dialogflow Expert) and engineering roots.
- **Skills Matrix & Live Search**: Filterable and searchable domain competencies (Generative AI & LLMs, MERN & Backend, Frontend Performance, Enterprise Integrations).
- **Interactive Developer CLI**: In-browser terminal supporting commands (`help`, `skills`, `experience`, `rag-demo`, `contact`, `download-cv`).
- **Command Palette (`Cmd+K` / `Ctrl+K`)**: Fast keyboard-driven navigation across all sections and actions.
- **Procedural Sound FX & Theme Switcher**: Tactile micro-sound feedback (toggleable) and Dark/Light mode support.
- **Direct PDF CV Download**: Linked to `/public/shivam-jadon-cv.pdf`.

---

## 🛠️ How to Add Your Projects

Open [`src/data/projects.js`](./src/data/projects.js) and add your project objects into the `projectsData` array:

```javascript
export const projectsData = [
  {
    id: "rag-voice-copilot",
    title: "Enterprise AI Voice & Chat Copilot",
    subtitle: "Production RAG Pipeline with OpenSearch & Twilio",
    description: "Scalable conversational AI system ingesting enterprise documentation and handling multi-turn inquiries with sub-second latency.",
    tags: ["Generative AI", "RAG", "Node.js", "OpenSearch", "Twilio", "React"],
    featured: true,
    liveUrl: "https://your-demo-url.com",
    githubUrl: "https://github.com/shivamjadon/project-repo",
    metrics: {
      latency: "420ms avg",
      accuracy: "98.4%",
      throughput: "10k req/min"
    },
    highlights: [
      "Vector search indexing over 50,000+ enterprise docs",
      "Context-aware fallback and CRM ticket auto-generation",
      "Custom React dashboard for live analytics and prompt tuning"
    ]
  }
];
```

The portfolio will automatically render your projects into responsive, interactive cards with live links, tags, and metrics!

---

## 💻 Development & Deployment

```bash
# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```
