export const metadata = {
  title: "Blog — TurtleTools",
  description: "Insights on n8n automation, AI workflows, MCP integrations, and vibe marketing.",
};

const posts = [
  {
    title: "How to Build AI Intent Routing in n8n",
    description: "Build an AI-powered message router in n8n. Classify user intent with Claude/GPT, then route to the right handler. Free workflow template included.",
    date: "Feb 2, 2026",
    readTime: "9 min",
    href: "/blog/n8n-ai-intent-routing",
    tags: ["n8n", "AI Agent", "Intent Routing"],
    image: "/images/template-mcp.png",
  },
  {
    title: "7 n8n Self-Hosting Mistakes I Made (So You Don't Have To)",
    description: "Real lessons from running n8n in production. Database backups, security CVEs, Docker gotchas, and the mistakes that cost me hours.",
    date: "Feb 2, 2026",
    readTime: "10 min",
    href: "/blog/n8n-self-hosting-mistakes",
    tags: ["n8n", "Self-Hosting", "Production"],
    image: "/images/template-mcp.png",
  },
  {
    title: "n8n Webhook Tutorial: Receive External Data in Your Workflows",
    description: "Step-by-step guide to setting up n8n webhooks. Receive data from any app, trigger workflows automatically, and build real-time automation.",
    date: "Feb 2, 2026",
    readTime: "8 min",
    href: "/blog/n8n-webhook-tutorial",
    tags: ["n8n", "Webhooks", "Tutorial"],
    image: "/images/template-mcp.png",
  },
  {
    title: "Why Your AI Agent Ignores Your n8n MCP Tools (And How to Fix It)",
    description: "You connected MCP to n8n. The tools show up. But your agent never calls them. The fix is simpler than you think — it's your tool names.",
    date: "Feb 2, 2026",
    readTime: "6 min",
    href: "/blog/n8n-mcp-tool-naming",
    tags: ["n8n", "MCP", "AI Agents"],
    image: "/images/template-mcp.png",
  },
  {
    title: "How to Set Up an n8n MCP Server with Claude (Step-by-Step)",
    description: "Connect Claude to your n8n workflows using the Model Context Protocol. Give your AI agent real tools — not just chat.",
    date: "Feb 2, 2026",
    readTime: "8 min",
    href: "/blog/n8n-mcp-server-setup",
    tags: ["n8n", "MCP", "Claude"],
    image: "/images/blog-mcp-setup.png",
  },
  {
    title: "What is Vibe Marketing? Complete Guide for 2026",
    description: "One marketer doing the work of five using AI and automation. Tools, workflows, examples, and how to get started.",
    date: "Feb 2, 2026",
    readTime: "8 min",
    href: "/blog/what-is-vibe-marketing",
    tags: ["Vibe Marketing", "AI", "Strategy"],
    image: "/images/tutorial-marketing.png",
  },
  {
    title: "n8n vs Zapier for AI Automation: Honest Comparison (2026)",
    description: "Detailed comparison of n8n and Zapier for AI workflows. Pricing, MCP support, self-hosting, and when to use each.",
    date: "Feb 2, 2026",
    readTime: "10 min",
    href: "/blog/n8n-vs-zapier-ai",
    tags: ["n8n", "Zapier", "Comparison"],
    image: "/images/template-mcp.png",
  },
  {
    title: "How to Connect Claude to n8n via OpenRouter (2026 Guide)",
    description: "The complete guide to using Claude in your n8n workflows. Setup, prompting patterns, error handling, and a free starter workflow.",
    date: "Feb 2, 2026",
    readTime: "12 min",
    href: "/blog/connect-claude-to-n8n",
    tags: ["n8n", "Claude", "OpenRouter"],
    image: "/images/tutorial-getting-started.png",
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
            <div className="h-48 overflow-hidden relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3">
                <span className="text-xs bg-black/60 text-white/80 px-2 py-1 rounded backdrop-blur-sm">
                  {post.readTime} read
                </span>
              </div>
            </div>
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
