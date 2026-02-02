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
  },
  {
    title: "What is Vibe Marketing? Complete Guide for 2026",
    description: "One marketer doing the work of five using AI and automation. Tools, workflows, examples, and how to get started.",
    date: "Feb 2, 2026",
    readTime: "8 min",
    href: "/blog/what-is-vibe-marketing",
    tags: ["Vibe Marketing", "AI", "Strategy"],
  },
  {
    title: "n8n vs Zapier for AI Automation: Honest Comparison (2026)",
    description: "Detailed comparison of n8n and Zapier for AI workflows. Pricing, MCP support, self-hosting, and when to use each.",
    date: "Feb 2, 2026",
    readTime: "10 min",
    href: "/blog/n8n-vs-zapier-ai",
    tags: ["n8n", "Zapier", "Comparison"],
  },
  {
    title: "How to Connect Claude to n8n via OpenRouter (2026 Guide)",
    description: "The complete guide to using Claude in your n8n workflows. Setup, prompting patterns, error handling, and a free starter workflow.",
    date: "Feb 2, 2026",
    readTime: "12 min",
    href: "/blog/connect-claude-to-n8n",
    tags: ["n8n", "Claude", "OpenRouter"],
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
        <p className="text-xl text-gray-400">n8n + AI automation insights. No fluff, just working knowledge.</p>
      </div>

      <div className="space-y-6">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.href}
            className="block bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-turtle-700 transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-gray-500">{post.date}</span>
              <span className="text-xs text-gray-500">·</span>
              <span className="text-xs text-gray-500">{post.readTime} read</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">{post.title}</h2>
            <p className="text-gray-400 leading-relaxed mb-4">{post.description}</p>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
