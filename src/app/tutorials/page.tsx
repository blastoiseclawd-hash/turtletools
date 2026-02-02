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
    coming: false,
  },
  {
    title: "What is MCP and Why It Matters for n8n",
    description: "Model Context Protocol explained for automation builders. Learn how MCP connects AI agents to your workflows — and why it changes everything.",
    time: "8 min",
    level: "Beginner",
    coming: false,
  },
  {
    title: "Build a Vibe Marketing Stack from Scratch",
    description: "The complete guide to setting up a one-person marketing operation using n8n, Claude, and Apify. Content research → creation → publishing.",
    time: "25 min",
    level: "Intermediate",
    coming: false,
  },
  {
    title: "n8n MCP Server: Connect AI Agents to Workflows",
    description: "Step-by-step guide to exposing your n8n workflows as MCP tools. Let Claude trigger, monitor, and chain your automations via natural language.",
    time: "20 min",
    level: "Advanced",
    coming: true,
  },
  {
    title: "Advanced Prompting Patterns for n8n AI Nodes",
    description: "Go beyond basic prompts. Learn chaining, few-shot examples, structured output, and error recovery patterns for AI nodes in n8n.",
    time: "15 min",
    level: "Intermediate",
    coming: true,
  },
  {
    title: "Building a Lead Scoring Engine with AI",
    description: "Use n8n + Claude to automatically score and qualify leads based on your ICP. Includes webhook capture, enrichment, and CRM push.",
    time: "20 min",
    level: "Advanced",
    coming: true,
  },
];

export default function TutorialsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Tutorials
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Learn to build AI-powered automation with n8n. Free, step-by-step, no fluff.
        </p>
      </div>

      <div className="space-y-4">
        {tutorials.map((t, i) => (
          <div
            key={i}
            className={`bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-turtle-700 transition ${t.coming ? 'opacity-60' : ''}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-turtle-950 text-turtle-300 px-2.5 py-1 rounded-full border border-turtle-800">
                    {t.level}
                  </span>
                  <span className="text-xs text-gray-500">⏱ {t.time}</span>
                  {t.coming && (
                    <span className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full">
                      Coming soon
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{t.title}</h2>
                <p className="text-gray-400 leading-relaxed">{t.description}</p>
              </div>
              {!t.coming && (
                <button className="shrink-0 bg-turtle-600 hover:bg-turtle-500 text-white px-5 py-2.5 rounded-lg font-medium transition mt-2">
                  Read →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
