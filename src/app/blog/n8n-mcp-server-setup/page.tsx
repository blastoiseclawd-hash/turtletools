"use client";

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <a href="/blog" className="text-emerald-400 hover:underline text-sm mb-8 block">← Back to Blog</a>

        <article>
          <header className="mb-12">
            <p className="text-emerald-400 text-sm font-mono mb-2">February 2, 2026 · 8 min read</p>
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              How to Set Up an n8n MCP Server with Claude (Step-by-Step)
            </h1>
            <p className="text-gray-400 text-lg">
              Connect Claude to your n8n workflows using the Model Context Protocol. 
              Give your AI agent real tools — not just chat.
            </p>
          </header>

          <div className="prose prose-invert prose-emerald max-w-none space-y-6 text-gray-300 leading-relaxed">
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why MCP Changes Everything for n8n</h2>
            <p>
              Most AI automation is one-directional: you trigger a workflow, it runs, done. MCP (Model Context Protocol) 
              flips this. Instead of you telling n8n what to do, your AI agent discovers and uses your workflows as tools.
            </p>
            <p>
              Think about what that means: Claude can look at your available n8n workflows, understand what each one does, 
              and decide which ones to call — with the right parameters — to accomplish a goal you describe in plain English.
            </p>
            <p>
              This isn't theoretical. n8n ships with MCP server support built in since late 2025. Here's how to set it up.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">What You'll Need</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>n8n instance</strong> — self-hosted or n8n Cloud (v1.70+)</li>
              <li><strong>Claude Desktop</strong> — or any MCP-compatible client</li>
              <li><strong>10 minutes</strong></li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Step 1: Enable MCP Server in n8n</h2>
            <p>
              n8n's MCP server is built into the platform. You don't install anything extra.
            </p>
            <ol className="list-decimal list-inside space-y-3">
              <li>Open your n8n instance and go to <strong>Settings → MCP Server</strong></li>
              <li>Toggle the MCP server <strong>ON</strong></li>
              <li>Copy the <strong>server URL</strong> — you'll need this for Claude</li>
              <li>Generate an <strong>API key</strong> if you haven't already (Settings → API → Create API Key)</li>
            </ol>
            <p>
              Your MCP server URL will look something like: <code className="bg-gray-800 px-2 py-1 rounded text-emerald-400">http://localhost:5678/mcp</code> (self-hosted) 
              or <code className="bg-gray-800 px-2 py-1 rounded text-emerald-400">https://your-instance.n8n.cloud/mcp</code> (cloud).
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Step 2: Create a Workflow with MCP Server Trigger</h2>
            <p>
              Not all workflows are automatically exposed to MCP. You choose which ones are available by using the 
              <strong> MCP Server Trigger</strong> node.
            </p>
            <ol className="list-decimal list-inside space-y-3">
              <li>Create a new workflow (or open an existing one)</li>
              <li>Add the <strong>MCP Server Trigger</strong> node as your starting node</li>
              <li>Give the trigger a clear <strong>name and description</strong> — this is what Claude sees when discovering tools</li>
              <li>Define the <strong>input parameters</strong> your workflow expects</li>
              <li>Build out the rest of your workflow (API calls, data transforms, etc.)</li>
              <li><strong>Activate</strong> the workflow</li>
            </ol>

            <div className="bg-gray-900 border border-emerald-500/20 rounded-lg p-6 my-6">
              <p className="text-emerald-400 font-bold mb-2">💡 Pro Tip: Name Your Tools Well</p>
              <p>
                Claude reads your MCP tool names and descriptions to decide when to use them. 
                "get_weather" is better than "workflow_47". "Search company database by name and return 
                contact info" is better than "search stuff."
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Step 3: Connect Claude Desktop</h2>
            <p>
              Now connect Claude to your n8n MCP server so it can discover and use your workflows.
            </p>
            <ol className="list-decimal list-inside space-y-3">
              <li>Open Claude Desktop → <strong>Settings → Developer → MCP Servers</strong></li>
              <li>Click <strong>Add Server</strong></li>
              <li>Enter your n8n MCP server URL</li>
              <li>Add your API key for authentication</li>
              <li>Save and restart Claude Desktop</li>
            </ol>
            <p>
              After reconnecting, you should see a 🔨 icon in your Claude chat indicating available tools. 
              Click it to see all your exposed n8n workflows.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Step 4: Test It</h2>
            <p>
              The best test is a simple one. If you created a workflow that, say, searches a database, 
              just ask Claude naturally:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 my-4 font-mono text-sm">
              "Find me all companies in our database that are in the healthcare industry"
            </div>
            <p>
              Claude will identify the right n8n workflow, call it with the appropriate parameters, 
              and return the results — all without you specifying which workflow to use.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Real-World Use Cases</h2>
            <p>Here's what people are actually building with n8n + MCP:</p>
            <ul className="list-disc list-inside space-y-3">
              <li><strong>AI-powered CRM:</strong> Claude queries your customer database, sends follow-up emails, and logs activities — all through n8n workflows</li>
              <li><strong>Content pipeline:</strong> "Research this topic, write a draft, schedule it on social media" — three n8n workflows, one natural language request</li>
              <li><strong>Data analysis:</strong> Claude pulls data from multiple sources via n8n, analyzes it, and generates reports</li>
              <li><strong>Lead enrichment:</strong> Give Claude a company name, it runs your n8n enrichment pipeline and returns a full profile</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Downloadable Starter Workflows</h2>
            <p>
              We've built ready-to-import n8n workflow JSONs you can use right now:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><a href="/workflows/ai-content-repurposer.json" className="text-emerald-400 hover:underline">AI Content Repurposer</a> — Turn one piece of content into posts for every platform</li>
              <li><a href="/workflows/rss-to-social.json" className="text-emerald-400 hover:underline">RSS to Social Media</a> — Auto-post from any RSS feed with AI summaries</li>
              <li><a href="/workflows/webhook-to-notion.json" className="text-emerald-400 hover:underline">Webhook to Notion</a> — Capture any webhook data into structured Notion pages</li>
            </ul>
            <p className="mt-4">
              Want more? <a href="/templates" className="text-emerald-400 hover:underline">Browse all templates</a> or 
              go <a href="/pro" className="text-emerald-400 hover:underline">Pro</a> for premium workflows with MCP integration built in.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Common Issues</h2>
            <ul className="list-disc list-inside space-y-3">
              <li><strong>"No tools found"</strong> — Make sure your workflow is activated and uses the MCP Server Trigger node (not a regular webhook)</li>
              <li><strong>Authentication errors</strong> — Double-check your API key in Claude Desktop settings</li>
              <li><strong>Claude ignores your tools</strong> — Improve your tool descriptions. Be specific about what the tool does and when to use it</li>
              <li><strong>Timeouts</strong> — Long-running workflows may time out. Add a timeout node or optimize your workflow</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">What's Next</h2>
            <p>
              Once you have MCP working, the compound effects kick in. Every new n8n workflow you build 
              automatically becomes a tool Claude can use. Your AI agent gets more capable without any 
              additional configuration.
            </p>
            <p>
              The teams seeing the biggest results are building libraries of focused, well-described 
              workflows — not one mega-workflow that does everything.
            </p>
            <p>
              Start small: one workflow, one use case, one test. Then expand.
            </p>

            <div className="bg-gray-900 border border-emerald-500/20 rounded-lg p-6 my-8">
              <p className="text-white font-bold mb-2">🐢 Want pre-built MCP-ready workflows?</p>
              <p>
                TurtleTools Pro includes premium n8n templates with MCP Server Triggers already configured. 
                Import, activate, done. <a href="/pro" className="text-emerald-400 hover:underline">Learn more →</a>
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
