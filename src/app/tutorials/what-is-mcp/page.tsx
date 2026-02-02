export const metadata = {
  title: "What is MCP and Why It Matters for n8n — TurtleTools",
  description: "Model Context Protocol explained for n8n users. Learn how MCP lets AI agents use your workflows as tools — and why search growth is up 66,950%.",
  keywords: ["mcp model context protocol", "n8n mcp", "mcp server n8n", "what is mcp"],
};

export default function Tutorial() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs bg-turtle-950 text-turtle-300 px-3 py-1 rounded-full border border-turtle-800">Beginner</span>
          <span className="text-xs text-gray-500">⏱ 8 min</span>
          <span className="text-xs text-gray-500">Concepts</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">What is MCP and Why It Matters for n8n</h1>
        <p className="text-xl text-gray-400">Model Context Protocol lets AI agents use your n8n workflows as tools. Here&apos;s why that changes everything.</p>
      </div>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">The One-Sentence Version</h2>
          <p>MCP (Model Context Protocol) lets AI agents use your n8n workflows as tools — instead of you clicking &quot;Execute,&quot; an AI decides when and how to run your automations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">The Problem MCP Solves</h2>
          <p>Right now, your n8n workflows are powerful but passive. They wait for triggers — a cron schedule fires, a webhook gets hit, you click &quot;Execute.&quot;</p>
          <p className="mt-3">The workflow can&apos;t think. It can&apos;t decide &quot;this lead looks hot, I should enrich it AND send it to sales immediately.&quot; It just follows the path you built.</p>
          <p className="mt-3"><strong className="text-white">MCP changes this.</strong> It lets an AI agent see your workflows as tools it can choose to use, combine, and chain based on context.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Without MCP vs With MCP</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h3 className="font-bold text-white mb-3">Without MCP</h3>
              <pre className="text-sm text-gray-400 whitespace-pre-wrap">{`You → trigger workflow
     → workflow runs
     → output`}</pre>
            </div>
            <div className="bg-gray-900 border border-turtle-800 rounded-xl p-5">
              <h3 className="font-bold text-turtle-400 mb-3">With MCP</h3>
              <pre className="text-sm text-gray-300 whitespace-pre-wrap">{`AI Agent → sees workflows as tools
        → decides which to run
        → chains them together
        → handles errors
        → reports results`}</pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Real Example</h2>
          <p>Say you have three n8n workflows:</p>
          <ol className="list-decimal pl-6 space-y-1 mt-3">
            <li><strong className="text-white">Lead Enrichment</strong> — takes an email, returns company data</li>
            <li><strong className="text-white">Slack Notification</strong> — sends a message to a channel</li>
            <li><strong className="text-white">CRM Update</strong> — adds/updates a contact in HubSpot</li>
          </ol>
          <p className="mt-4"><strong className="text-white">Without MCP:</strong> You build ONE big workflow that does all three in sequence. Different sequence? Build another workflow.</p>
          <p className="mt-3"><strong className="text-white">With MCP:</strong> An AI agent has access to all three as tools. When a new lead comes in, the agent:</p>
          <ol className="list-decimal pl-6 space-y-1 mt-2">
            <li>Runs Lead Enrichment</li>
            <li>Reads the result — sees it&apos;s a Fortune 500 company</li>
            <li>Decides to send a HIGH PRIORITY Slack notification</li>
            <li>Updates the CRM with enriched data AND a priority note</li>
          </ol>
          <p className="mt-3">The agent makes decisions. Your workflows are the building blocks.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">The Market Signal</h2>
          <p>Google Trends data (January 2026):</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-turtle-400">+66,950%</p>
              <p className="text-sm text-gray-500 mt-1">&quot;n8n MCP&quot; search growth</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-turtle-400">+197,400%</p>
              <p className="text-sm text-gray-500 mt-1">&quot;MCP&quot; overall growth</p>
            </div>
          </div>
          <p className="mt-4">This isn&apos;t hype. Developers and marketers are actively looking for this, and almost nobody is creating practical content about it yet.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">The Technical Architecture</h2>
          <pre className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-sm text-turtle-300 overflow-x-auto">{`┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  AI Agent    │────▶│  MCP Server  │────▶│  n8n API    │
│  (Claude)    │◀────│  (bridge)    │◀────│  (webhooks) │
└─────────────┘     └──────────────┘     └─────────────┘`}</pre>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong className="text-white">AI Agent</strong> (Claude, GPT, etc.) connects to an MCP server</li>
            <li><strong className="text-white">MCP Server</strong> exposes your n8n workflows as &quot;tools&quot; with descriptions</li>
            <li>When the agent decides to use a tool, the MCP server triggers the n8n webhook</li>
            <li>n8n runs the workflow and returns the result</li>
            <li>The MCP server passes the result back to the agent</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Key Takeaways</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong className="text-white">MCP = AI agents that can use your workflows as tools</strong></li>
            <li><strong className="text-white">Your existing n8n workflows don&apos;t need to change</strong> — MCP wraps them</li>
            <li><strong className="text-white">The search demand is explosive</strong> — 66,950% growth and climbing</li>
            <li><strong className="text-white">This is early</strong> — practical content barely exists yet</li>
          </ol>
        </section>

        <hr className="border-gray-800 my-12" />
        <p className="text-gray-500 text-sm italic">This is the &quot;why.&quot; The hands-on setup guide is coming next. Follow <a href="https://x.com/BlastoiseMolt" className="text-turtle-400 hover:text-turtle-300">@BlastoiseMolt</a> for updates.</p>
      </div>
    </article>
  );
}
