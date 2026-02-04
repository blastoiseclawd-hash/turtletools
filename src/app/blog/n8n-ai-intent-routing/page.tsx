import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Build AI Intent Routing in n8n (Classify & Route User Messages)',
  description: 'Build an AI-powered message router in n8n. Classify user intent with Claude/GPT, then route to the right handler. Free workflow template included.',
  keywords: ['n8n ai agent', 'n8n intent routing', 'n8n chatbot', 'ai message classification', 'n8n workflow template'],
  openGraph: {
    title: 'How to Build AI Intent Routing in n8n',
    description: 'Classify user intent with AI, route to the right handler. Free n8n template.',
    type: 'article',
    publishedTime: '2025-02-02',
  },
}

export default function IntentRouting() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Blog</Link>
        
        <article className="prose prose-invert prose-emerald max-w-none">
          <h1 className="text-4xl font-bold mb-4">How to Build AI Intent Routing in n8n</h1>
          <p className="text-gray-400 mb-8">February 2, 2025 · 9 min read</p>

          <p className="text-lg text-gray-300 leading-relaxed">
            The #1 question on the n8n community forum about AI agents: <strong>&quot;How do I get my AI agent 
            to follow system prompts and route to the right action?&quot;</strong> (106 views and climbing).
          </p>
          <p className="text-gray-300 leading-relaxed">
            The answer isn&apos;t better prompting. It&apos;s <strong>intent routing</strong> — classifying what 
            the user wants first, then sending them down the right path. Here&apos;s how to build it in n8n.
          </p>

          <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 my-6">
            <p className="text-emerald-400 font-bold mb-2">📥 Free Template</p>
            <p className="text-gray-300">
              Download the complete workflow: <a href="/workflows/ai-intent-router.json" className="text-emerald-400 hover:text-emerald-300">ai-intent-router.json</a> — 
              import directly into n8n.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Why Intent Routing Beats &quot;One Big Prompt&quot;</h2>
          <p className="text-gray-300 leading-relaxed">
            Most people try to build AI chatbots by cramming everything into one system prompt: 
            &quot;You are a helpful assistant that handles support, sales, feedback, and general questions.&quot;
          </p>
          <p className="text-gray-300 leading-relaxed">
            This fails because:
          </p>
          <ul className="text-gray-300 space-y-2 my-4">
            <li><strong>The AI gets confused</strong> — with too many responsibilities, it picks the wrong action</li>
            <li><strong>You can&apos;t customize responses</strong> — support needs a ticket, sales needs a CRM update, feedback needs a database entry</li>
            <li><strong>It&apos;s expensive</strong> — you send the entire context to the AI every time, even for simple routing</li>
            <li><strong>Debugging is impossible</strong> — when something goes wrong, you don&apos;t know which &quot;mode&quot; the AI was in</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Intent routing fixes all of this. One small, fast AI call classifies the intent. Then deterministic 
            n8n logic routes to specialized handlers. Each handler has its own focused prompt and actions.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">The Architecture</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-6 font-mono text-sm text-gray-300">
            <p>Webhook → AI Classifier → Switch Node → Handlers</p>
            <p className="mt-2 text-gray-500">                                    ├→ Support Handler</p>
            <p className="text-gray-500">                                    ├→ Sales Handler</p>
            <p className="text-gray-500">                                    ├→ Feedback Handler</p>
            <p className="text-gray-500">                                    └→ General Handler</p>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Five nodes. That&apos;s it. The key insight: <strong>the classifier is tiny</strong>. It only needs 
            to output one word (SUPPORT, SALES, FEEDBACK, or GENERAL). This means:
          </p>
          <ul className="text-gray-300 space-y-2 my-4">
            <li>You can use a cheap, fast model (Claude Haiku or GPT-4o-mini)</li>
            <li>Set <code className="bg-gray-800 px-1 rounded">max_tokens: 10</code> — classification takes milliseconds</li>
            <li>The expensive model only runs in the handler that needs it</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Step 1: The Classifier Prompt</h2>
          <p className="text-gray-300 leading-relaxed">
            This is the most important part. Your classifier prompt must be:
          </p>
          <ul className="text-gray-300 space-y-2 my-4">
            <li><strong>Exhaustive</strong> — every possible intent is listed</li>
            <li><strong>Mutually exclusive</strong> — no overlap between categories</li>
            <li><strong>Constrained</strong> — output is ONLY the label, nothing else</li>
          </ul>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-6 font-mono text-sm text-gray-300">
            <p className="text-emerald-400 mb-2">// System prompt for the classifier</p>
            <p>You are an intent classifier. Given a user message,</p>
            <p>classify it into EXACTLY ONE of these intents:</p>
            <p className="mt-2">1. SUPPORT - Technical help, bug reports, how-to</p>
            <p>2. SALES - Pricing, features, purchase intent</p>
            <p>3. FEEDBACK - Suggestions, complaints, praise</p>
            <p>4. GENERAL - Greetings, off-topic, unclear</p>
            <p className="mt-2">Respond with ONLY the intent label. Nothing else.</p>
          </div>
          <p className="text-gray-300 leading-relaxed">
            The constraint &quot;respond with ONLY the label&quot; is critical. Without it, the AI will 
            add explanations, which breaks your Switch node.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Step 2: The Code Node (Safety Net)</h2>
          <p className="text-gray-300 leading-relaxed">
            AI models don&apos;t always follow instructions perfectly. Add a Code node after the classifier 
            to validate and normalize the output:
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-6 font-mono text-sm text-gray-300">
            <p className="text-emerald-400 mb-2">// Extract and validate intent</p>
            <p>const content = response.choices[0].message.content;</p>
            <p>const intent = content.trim().toUpperCase();</p>
            <p className="mt-2">const valid = [&apos;SUPPORT&apos;, &apos;SALES&apos;, &apos;FEEDBACK&apos;, &apos;GENERAL&apos;];</p>
            <p>const classified = valid.includes(intent) ? intent : &apos;GENERAL&apos;;</p>
          </div>
          <p className="text-gray-300 leading-relaxed">
            If the AI returns anything unexpected, it falls through to GENERAL. Fail safe, not fail open.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Step 3: The Switch Node</h2>
          <p className="text-gray-300 leading-relaxed">
            n8n&apos;s Switch node is perfect for intent routing. Set up one output per intent, with a 
            fallback for anything unmatched:
          </p>
          <ul className="text-gray-300 space-y-2 my-4">
            <li>Output 0: <code className="bg-gray-800 px-1 rounded">intent === &quot;SUPPORT&quot;</code> → Support Handler</li>
            <li>Output 1: <code className="bg-gray-800 px-1 rounded">intent === &quot;SALES&quot;</code> → Sales Handler</li>
            <li>Output 2: <code className="bg-gray-800 px-1 rounded">intent === &quot;FEEDBACK&quot;</code> → Feedback Handler</li>
            <li>Fallback: → General Handler</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Step 4: Specialized Handlers</h2>
          <p className="text-gray-300 leading-relaxed">
            This is where intent routing really shines. Each handler can:
          </p>
          <ul className="text-gray-300 space-y-2 my-4">
            <li><strong>Support:</strong> Create a Jira/Linear ticket, search knowledge base, send to Slack #support</li>
            <li><strong>Sales:</strong> Update CRM, send to sales team, trigger nurture sequence</li>
            <li><strong>Feedback:</strong> Save to database, tag sentiment, notify product team</li>
            <li><strong>General:</strong> Use a conversational AI with a focused &quot;helpful assistant&quot; prompt</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Each handler gets its own system prompt, its own tools, its own logic. No confusion. No prompt 
            bloat. Clean separation of concerns.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Advanced: Adding Confidence Scores</h2>
          <p className="text-gray-300 leading-relaxed">
            Want to handle ambiguous messages? Modify the classifier to return a confidence level:
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-6 font-mono text-sm text-gray-300">
            <p className="text-emerald-400 mb-2">// Modified classifier prompt</p>
            <p>Respond with the intent label and confidence (HIGH/LOW):</p>
            <p>Format: INTENT|CONFIDENCE</p>
            <p>Example: SUPPORT|HIGH</p>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Then in your Code node, route LOW confidence messages to a human review queue instead of 
            auto-handling them.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">The JSON Body Gotcha</h2>
          <p className="text-gray-300 leading-relaxed">
            If you&apos;re calling the AI API via HTTP Request node, remember: set Specify Body 
            to <strong>&quot;String&quot;</strong>, not &quot;JSON&quot;. n8n validates JSON before evaluating 
            expressions, so <code className="bg-gray-800 px-1 rounded">{`{{ $json.message }}`}</code> fails 
            as invalid JSON. This trips up almost everyone.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">When to Use This Pattern</h2>
          <ul className="text-gray-300 space-y-2 my-4">
            <li>✅ Customer support chatbots with multiple categories</li>
            <li>✅ Slack/Discord bots that handle different commands</li>
            <li>✅ Email triage (route to right department)</li>
            <li>✅ Any system where user input could mean multiple different actions</li>
            <li>❌ Single-purpose tools (just use one prompt)</li>
            <li>❌ Free-form conversation (use a proper AI agent instead)</li>
          </ul>

          <div className="mt-12 p-6 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-700/50 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Get the Template</h3>
            <p className="text-gray-300 mb-4">
              Download the complete AI Intent Router workflow and import it directly into n8n. 
              Customize the intents, handlers, and AI model to fit your use case.
            </p>
            <a href="/workflows/ai-intent-router.json" download className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-lg font-medium transition-colors mr-4">
              Download Template →
            </a>
            <Link href="/templates" className="inline-block border border-emerald-600 hover:bg-emerald-900/30 text-emerald-400 px-6 py-2 rounded-lg font-medium transition-colors">
              Browse All Templates
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
