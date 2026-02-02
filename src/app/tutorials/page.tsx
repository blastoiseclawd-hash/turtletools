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
    gradient: "from-emerald-900 via-green-900 to-gray-900",
    icon: "🚀",
  },
  {
    title: "What is MCP and Why It Matters for n8n",
    description: "Model Context Protocol explained for automation builders. Learn how MCP connects AI agents to your workflows — and why it changes everything.",
    time: "8 min",
    level: "Beginner",
    href: "/tutorials/what-is-mcp",
    coming: false,
    gradient: "from-blue-900 via-cyan-900 to-gray-900",
    icon: "🔗",
  },
  {
    title: "Build a Vibe Marketing Stack from Scratch",
    description: "The complete guide to setting up a one-person marketing operation using n8n, Claude, and Apify. Content research → creation → publishing.",
    time: "25 min",
    level: "Intermediate",
    href: "/tutorials/vibe-marketing-stack",
    coming: false,
    gradient: "from-purple-900 via-violet-900 to-gray-900",
    icon: "📡",
  },
  {
    title: "n8n MCP Server: Connect AI Agents to Workflows",
    description: "Step-by-step guide to exposing your n8n workflows as MCP tools. Let Claude trigger, monitor, and chain your automations via natural language.",
    time: "20 min",
    level: "Advanced",
    href: "#",
    coming: true,
    gradient: "from-red-900 via-rose-900 to-gray-900",
    icon: "🧠",
  },
  {
    title: "Advanced Prompting Patterns for n8n AI Nodes",
    description: "Go beyond basic prompts. Learn chaining, few-shot examples, structured output, and error recovery patterns for AI nodes in n8n.",
    time: "15 min",
    level: "Intermediate",
    href: "#",
    coming: true,
    gradient: "from-amber-900 via-yellow-900 to-gray-900",
    icon: "💬",
  },
  {
    title: "Building a Lead Scoring Engine with AI",
    description: "Use n8n + Claude to automatically score and qualify leads based on your ICP. Includes webhook capture, enrichment, and CRM push.",
    time: "20 min",
    level: "Advanced",
    href: "#",
    coming: true,
    gradient: "from-teal-900 via-emerald-900 to-gray-900",
    icon: "🎯",
  },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-green-950 text-green-300 border-green-800",
  Intermediate: "bg-yellow-950 text-yellow-300 border-yellow-800",
  Advanced: "bg-red-950 text-red-300 border-red-800",
};

export default function TutorialsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Tutorials
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Learn to build AI-powered automation with n8n. Free, step-by-step, no fluff.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((t, i) => (
          <a
            key={i}
            href={t.coming ? undefined : t.href}
            className={`group block bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-turtle-700 transition ${t.coming ? 'opacity-50 cursor-default' : ''}`}
          >
            {/* Image area */}
            <div className={`h-40 bg-gradient-to-br ${t.gradient} relative flex items-center justify-center overflow-hidden`}>
              <span className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity">{t.icon}</span>
              {t.coming && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-sm font-medium text-white/80 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Coming Soon
                  </span>
                </div>
              )}
              <div className="absolute top-3 left-3">
                <span className={`text-xs px-2 py-1 rounded-full border ${levelColors[t.level]}`}>
                  {t.level}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="text-xs bg-black/40 text-white/70 px-2 py-1 rounded backdrop-blur-sm">
                  ⏱ {t.time}
                </span>
              </div>
            </div>
            {/* Content */}
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
