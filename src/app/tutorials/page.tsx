export const metadata = {
  title: "n8n + AI Tutorials — TurtleTools",
  description: "Step-by-step guides for building AI-powered automation with n8n, MCP, Claude, and more.",
};

const tutorials = [
  {
    title: "Getting Started with n8n + Claude",
    description: "Set up your first AI-powered workflow in under 10 minutes. Connect n8n to Claude via OpenRouter and build a simple content generator.",
    time: "10 min",
    level: "Beginner",
    href: "/tutorials/getting-started-n8n-claude",
    coming: false,
    image: "/images/tutorial-getting-started.png",
  },
  {
    title: "What is MCP and Why It Matters for n8n",
    description: "Model Context Protocol explained for automation builders. Learn how MCP connects AI agents to your workflows — and why it changes everything.",
    time: "8 min",
    level: "Beginner",
    href: "/tutorials/what-is-mcp",
    coming: false,
    image: "/images/tutorial-mcp.png",
  },
  {
    title: "Build a Vibe Marketing Stack from Scratch",
    description: "The complete guide to setting up a one-person marketing operation using n8n, Claude, and Apify. Content research → creation → publishing.",
    time: "25 min",
    level: "Intermediate",
    href: "/tutorials/vibe-marketing-stack",
    coming: false,
    image: "/images/tutorial-marketing.png",
  },
  {
    title: "n8n MCP Server: Connect AI Agents to Workflows",
    description: "Step-by-step guide to exposing your n8n workflows as MCP tools. Let Claude trigger, monitor, and chain your automations via natural language.",
    time: "20 min",
    level: "Advanced",
    href: "#",
    coming: true,
    image: "/images/template-mcp.png",
  },
  {
    title: "Advanced Prompting Patterns for n8n AI Nodes",
    description: "Go beyond basic prompts. Learn chaining, few-shot examples, structured output, and error recovery patterns for AI nodes in n8n.",
    time: "15 min",
    level: "Intermediate",
    href: "#",
    coming: true,
    image: "/images/blog-mcp-setup.png",
  },
  {
    title: "Building a Lead Scoring Engine with AI",
    description: "Use n8n + Claude to automatically score and qualify leads based on your ICP. Includes webhook capture, enrichment, and CRM push.",
    time: "20 min",
    level: "Advanced",
    href: "#",
    coming: true,
    image: "/images/template-sales.png",
  },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-green-500/20 text-green-300 border-green-500/30",
  Intermediate: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Advanced: "bg-red-500/20 text-red-300 border-red-500/30",
};

export default function TutorialsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tutorials</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Learn to build AI-powered automation with n8n. Free, step-by-step, no fluff.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((t, i) => (
          <a
            key={i}
            href={t.coming ? undefined : t.href}
            className={`group block bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-turtle-700 transition ${t.coming ? "opacity-50 cursor-default" : ""}`}
          >
            <div className="h-40 overflow-hidden relative">
              <img
                src={t.image}
                alt={t.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {t.coming && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-sm font-medium text-white/90 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Coming Soon
                  </span>
                </div>
              )}
              <div className="absolute top-3 left-3">
                <span className={`text-xs px-2 py-1 rounded-full border backdrop-blur-sm ${levelColors[t.level]}`}>
                  {t.level}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="text-xs bg-black/60 text-white/70 px-2 py-1 rounded backdrop-blur-sm">
                  ⏱ {t.time}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h2 className="text-lg font-bold text-white mb-2 group-hover:text-turtle-400 transition">{t.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{t.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
