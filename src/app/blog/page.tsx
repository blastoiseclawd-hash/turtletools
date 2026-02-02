export const metadata = {
  title: "Blog — TurtleTools",
  description: "Insights on n8n automation, AI workflows, MCP integrations, and vibe marketing.",
};

const posts = [
  {
    title: "How to Set Up an n8n MCP Server with Claude (Step-by-Step)",
    description: "Connect Claude to your n8n workflows using the Model Context Protocol. Give your AI agent real tools — not just chat.",
    date: "Feb 2, 2026",
    readTime: "8 min",
    href: "/blog/n8n-mcp-server-setup",
    tags: ["n8n", "MCP", "Claude"],
    gradient: "from-emerald-900 via-teal-900 to-gray-900",
    icon: "🔌",
    iconLabel: "MCP Server",
  },
  {
    title: "What is Vibe Marketing? Complete Guide for 2026",
    description: "One marketer doing the work of five using AI and automation. Tools, workflows, examples, and how to get started.",
    date: "Feb 2, 2026",
    readTime: "8 min",
    href: "/blog/what-is-vibe-marketing",
    tags: ["Vibe Marketing", "AI", "Strategy"],
    gradient: "from-purple-900 via-fuchsia-900 to-gray-900",
    icon: "✨",
    iconLabel: "Vibe Marketing",
  },
  {
    title: "n8n vs Zapier for AI Automation: Honest Comparison (2026)",
    description: "Detailed comparison of n8n and Zapier for AI workflows. Pricing, MCP support, self-hosting, and when to use each.",
    date: "Feb 2, 2026",
    readTime: "10 min",
    href: "/blog/n8n-vs-zapier-ai",
    tags: ["n8n", "Zapier", "Comparison"],
    gradient: "from-orange-900 via-amber-900 to-gray-900",
    icon: "⚖️",
    iconLabel: "n8n vs Zapier",
  },
  {
    title: "How to Connect Claude to n8n via OpenRouter (2026 Guide)",
    description: "The complete guide to using Claude in your n8n workflows. Setup, prompting patterns, error handling, and a free starter workflow.",
    date: "Feb 2, 2026",
    readTime: "12 min",
    href: "/blog/connect-claude-to-n8n",
    tags: ["n8n", "Claude", "OpenRouter"],
    gradient: "from-blue-900 via-indigo-900 to-gray-900",
    icon: "🤖",
    iconLabel: "Claude + n8n",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
        <p className="text-xl text-gray-400">n8n + AI automation insights. No fluff, just working knowledge.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.href}
            className="group block bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-turtle-700 transition"
          >
            {/* Image area */}
            <div className={`h-48 bg-gradient-to-br ${post.gradient} relative flex items-center justify-center overflow-hidden`}>
              <span className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">{post.icon}</span>
              <div className="absolute bottom-3 left-4">
                <span className="text-xs font-mono bg-black/40 text-white/80 px-2 py-1 rounded backdrop-blur-sm">
                  {post.iconLabel}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="text-xs bg-black/40 text-white/70 px-2 py-1 rounded backdrop-blur-sm">
                  {post.readTime} read
                </span>
              </div>
            </div>
            {/* Content */}
            <div className="p-6">
              <p className="text-xs text-gray-500 mb-2">{post.date}</p>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-turtle-400 transition">{post.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.description}</p>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
