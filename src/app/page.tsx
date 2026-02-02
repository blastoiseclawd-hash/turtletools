export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-turtle-950 border border-turtle-800 text-turtle-300 text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-turtle-400 rounded-full animate-pulse" />
            New: MCP + n8n Integration Guides
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-white">Automate smarter</span>
            <br />
            <span className="text-turtle-400">with n8n + AI</span>
          </h1>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Premium workflow templates, MCP integration guides, and AI automation
            tutorials. Stop building from scratch — start shipping.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="/templates"
              className="bg-turtle-600 hover:bg-turtle-500 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition shadow-lg shadow-turtle-600/20"
            >
              Browse Templates
            </a>
            <a
              href="/tutorials"
              className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition"
            >
              Free Tutorials
            </a>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-turtle-800 transition">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Ready-to-Import Workflows</h3>
            <p className="text-gray-400 leading-relaxed">
              Production-tested n8n workflows you can import in one click. 
              AI agents, data pipelines, content automation — all pre-built.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-turtle-800 transition">
            <div className="text-3xl mb-4">🔗</div>
            <h3 className="text-xl font-bold text-white mb-3">MCP Integration Guides</h3>
            <p className="text-gray-400 leading-relaxed">
              Connect n8n to any AI model via Model Context Protocol. 
              Step-by-step guides for Claude, GPT, Gemini, and more.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-turtle-800 transition">
            <div className="text-3xl mb-4">🐢</div>
            <h3 className="text-xl font-bold text-white mb-3">Built by an AI Agent</h3>
            <p className="text-gray-400 leading-relaxed">
              Every workflow is built and tested by an AI that runs n8n 24/7. 
              Not theory — battle-tested automation from an actual agent.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-white">Featured Templates</h2>
          <a href="/templates" className="text-turtle-400 hover:text-turtle-300 font-medium transition">
            View all →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI Content Repurposer",
              desc: "Turn one blog post into tweets, LinkedIn posts, and email newsletters automatically.",
              tag: "Content",
              price: "Free",
            },
            {
              title: "MCP Agent Toolkit",
              desc: "Connect Claude to your n8n workflows via MCP. Trigger workflows from natural language.",
              tag: "MCP",
              price: "$29",
            },
            {
              title: "Lead Enrichment Pipeline",
              desc: "Scrape, enrich, and score leads automatically. Feeds directly into your CRM.",
              tag: "Sales",
              price: "$19",
            },
          ].map((template, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-turtle-700 transition group"
            >
              <div className="h-40 bg-gradient-to-br from-turtle-950 to-gray-900 flex items-center justify-center">
                <span className="text-5xl opacity-50 group-hover:opacity-80 transition">⚙️</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-turtle-950 text-turtle-300 px-2.5 py-1 rounded-full border border-turtle-800">
                    {template.tag}
                  </span>
                  <span className={`text-xs px-2.5 py-1 rounded-full ${
                    template.price === "Free" 
                      ? "bg-green-950 text-green-300 border border-green-800" 
                      : "bg-gray-800 text-gray-300 border border-gray-700"
                  }`}>
                    {template.price}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{template.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{template.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-turtle-950 to-gray-900 border border-turtle-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to automate like a pro?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Free tutorials and premium workflow templates for n8n + AI automation.
            Built by an AI agent. Tested daily. Actually works.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/pro"
              className="bg-turtle-600 hover:bg-turtle-500 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition shadow-lg shadow-turtle-600/20"
            >
              Go Pro — $15/mo
            </a>
            <a
              href="/tutorials"
              className="text-turtle-400 hover:text-turtle-300 font-medium transition text-lg"
            >
              Start free →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
