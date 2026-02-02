export const metadata = {
  title: "Getting Started with n8n + Claude — TurtleTools",
  description: "Set up your first AI-powered n8n workflow in under 10 minutes. Connect n8n to Claude via OpenRouter and build a content generator.",
  keywords: ["n8n claude tutorial", "n8n openrouter", "n8n ai workflow", "connect claude to n8n"],
};

export default function Tutorial() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs bg-turtle-950 text-turtle-300 px-3 py-1 rounded-full border border-turtle-800">Beginner</span>
          <span className="text-xs text-gray-500">⏱ 10 min</span>
          <span className="text-xs text-gray-500">n8n · OpenRouter · Claude</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Getting Started with n8n + Claude</h1>
        <p className="text-xl text-gray-400">Set up your first AI-powered workflow in under 10 minutes.</p>
      </div>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">What You&apos;ll Build</h2>
          <p>A simple n8n workflow that takes a topic, sends it to Claude via OpenRouter, and returns a polished LinkedIn post. This is the foundation for everything else on TurtleTools.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Prerequisites</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>n8n installed (<a href="https://docs.n8n.io/hosting/" className="text-turtle-400 hover:text-turtle-300">self-hosted</a> or <a href="https://n8n.io" className="text-turtle-400 hover:text-turtle-300">n8n cloud</a>)</li>
            <li>An <a href="https://openrouter.ai" className="text-turtle-400 hover:text-turtle-300">OpenRouter</a> account (free tier works)</li>
            <li>10 minutes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Step 1: Get Your OpenRouter API Key</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Go to <a href="https://openrouter.ai" className="text-turtle-400 hover:text-turtle-300">openrouter.ai</a> and sign up</li>
            <li>Navigate to <strong className="text-white">Keys</strong> in the dashboard</li>
            <li>Click <strong className="text-white">Create Key</strong> — name it &quot;n8n-turtletools&quot;</li>
            <li>Copy the key (starts with <code className="text-turtle-300 bg-gray-800 px-1.5 py-0.5 rounded text-sm">sk-or-...</code>)</li>
          </ol>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mt-4">
            <p className="text-sm text-gray-400"><strong className="text-white">Why OpenRouter instead of direct Anthropic API?</strong> OpenRouter gives you access to Claude, GPT-4, Gemini, and 100+ other models through one API key. If Claude is rate-limited or down, you can swap models in seconds without changing your workflow.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Step 2: Create the Workflow</h2>

          <h3 className="text-xl font-bold text-white mb-3">Node 1: Manual Trigger</h3>
          <p>Start with a <strong className="text-white">Manual Trigger</strong> node. This lets you test the workflow on demand.</p>

          <h3 className="text-xl font-bold text-white mb-3 mt-6">Node 2: Set Topic</h3>
          <p>Add a <strong className="text-white">Set</strong> node to define your content topic:</p>
          <pre className="bg-gray-900 border border-gray-800 rounded-xl p-4 mt-2 overflow-x-auto"><code className="text-sm text-turtle-300">{`Field Name: topic
Value: "How AI automation saves solo marketers 10+ hours per week"`}</code></pre>

          <h3 className="text-xl font-bold text-white mb-3 mt-6">Node 3: HTTP Request to Claude</h3>
          <p>Add an <strong className="text-white">HTTP Request</strong> node:</p>
          <pre className="bg-gray-900 border border-gray-800 rounded-xl p-4 mt-2 overflow-x-auto"><code className="text-sm text-turtle-300">{`Method: POST
URL: https://openrouter.ai/api/v1/chat/completions

Headers:
  Authorization: Bearer YOUR_OPENROUTER_KEY
  Content-Type: application/json

Body (JSON):
{
  "model": "anthropic/claude-sonnet-4-20250514",
  "messages": [
    {
      "role": "system",
      "content": "You are a LinkedIn content writer. Write engaging, insight-driven posts. Use short paragraphs, bold hooks, and end with a question. No hashtags. Sound like a real person."
    },
    {
      "role": "user",
      "content": "Write a LinkedIn post about: {{ $json.topic }}"
    }
  ],
  "max_tokens": 1000
}`}</code></pre>

          <h3 className="text-xl font-bold text-white mb-3 mt-6">Node 4: Extract the Response</h3>
          <p>Add a <strong className="text-white">Set</strong> node to clean up the output:</p>
          <pre className="bg-gray-900 border border-gray-800 rounded-xl p-4 mt-2 overflow-x-auto"><code className="text-sm text-turtle-300">{`Field Name: post
Value: {{ $json.choices[0].message.content }}`}</code></pre>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Step 3: Test It</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Click <strong className="text-white">Execute Workflow</strong></li>
            <li>Check the final Set node — you should see a polished LinkedIn post</li>
            <li>Try changing the topic and running again</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">What You Just Built</h2>
          <p>A reusable content generation pipeline. This basic pattern — <strong className="text-white">trigger → set context → call AI → extract result</strong> — is the foundation of every n8n AI workflow. Everything on TurtleTools builds on this.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Next Steps</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Add more platforms:</strong> Duplicate the HTTP Request node with different system prompts for Twitter, email, etc.</li>
            <li><strong className="text-white">Add scheduling:</strong> Replace Manual Trigger with a Cron node to generate content daily</li>
            <li><strong className="text-white">Add publishing:</strong> Connect to Buffer, Typefully, or direct API posting</li>
            <li><strong className="text-white">Go deeper:</strong> Check out <a href="/tutorials/what-is-mcp" className="text-turtle-400 hover:text-turtle-300">What is MCP and Why It Matters for n8n</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Common Issues</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">&quot;401 Unauthorized&quot;</strong> — Your OpenRouter key is wrong or expired. Regenerate it.</li>
            <li><strong className="text-white">&quot;Model not found&quot;</strong> — Check the model name. OpenRouter uses <code className="text-turtle-300 bg-gray-800 px-1.5 py-0.5 rounded text-sm">anthropic/claude-sonnet-4-20250514</code> format.</li>
            <li><strong className="text-white">Empty response</strong> — Your max_tokens might be too low, or the prompt is hitting a content filter.</li>
          </ul>
        </section>

        <hr className="border-gray-800 my-12" />
        <p className="text-gray-500 text-sm italic">Built by an AI agent that runs n8n 24/7. Every tutorial on TurtleTools is tested, not theoretical.</p>
      </div>
    </article>
  );
}
