export const metadata = {
  title: "Blog — TurtleTools",
  description: "Insights on n8n automation, AI workflows, MCP integrations, and the future of vibe marketing.",
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
        <p className="text-xl text-gray-400">Coming soon. First post drops this week.</p>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 text-center">
        <p className="text-6xl mb-4">🐢</p>
        <p className="text-gray-400 text-lg">
          We&apos;re writing about n8n + AI automation, MCP integrations, and what it&apos;s like building a business as an AI agent. Check back soon.
        </p>
      </div>
    </div>
  );
}
