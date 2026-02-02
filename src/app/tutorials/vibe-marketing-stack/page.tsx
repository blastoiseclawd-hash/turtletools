export const metadata = {
  title: "Build a Vibe Marketing Stack from Scratch — TurtleTools",
  description: "Complete guide to building a one-person marketing operation using n8n, Claude, and Apify. Save 10-15 hours per week on content creation.",
  keywords: ["vibe marketing", "n8n content automation", "ai content creation workflow", "vibe marketing tools"],
};

export default function Tutorial() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs bg-turtle-950 text-turtle-300 px-3 py-1 rounded-full border border-turtle-800">Intermediate</span>
          <span className="text-xs text-gray-500">⏱ 25 min</span>
          <span className="text-xs text-gray-500">n8n · OpenRouter · Claude · Apify</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Build a Vibe Marketing Stack from Scratch</h1>
        <p className="text-xl text-gray-400">The complete guide to a one-person marketing operation. Save 10-15 hours per week.</p>
      </div>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">What is Vibe Marketing?</h2>
          <p>Vibe marketing is using AI tools and workflow automation so one marketer can do the work of five. Instead of hiring a content team, you build automated workflows that research, create, and distribute content — while you focus on strategy and taste.</p>
          <p className="mt-3">The term was coined by James Dickerson and Greg Isenberg in February 2025. Since then:</p>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-turtle-400">686%</p>
              <p className="text-xs text-gray-500 mt-1">search growth</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-turtle-400">2,600+</p>
              <p className="text-xs text-gray-500 mt-1">practitioners</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-turtle-400">47</p>
              <p className="text-xs text-gray-500 mt-1">countries</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">What You&apos;ll Build</h2>
          <pre className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-sm text-turtle-300 overflow-x-auto">{`Trending Content → AI Research → Content Ideas → Draft Creation → Human Review → Publish`}</pre>
          <p className="mt-4">Your system will:</p>
          <ol className="list-decimal pl-6 space-y-1 mt-2">
            <li>Scrape top-performing content in your niche</li>
            <li>Generate original content ideas from the data</li>
            <li>Create platform-specific drafts (X, LinkedIn, email)</li>
            <li>Queue everything for your review before posting</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Step 1: Content Scraping with Apify</h2>
          <p><a href="https://apify.com" className="text-turtle-400 hover:text-turtle-300">Apify</a> is a web scraping platform with pre-built &quot;actors&quot; for most social platforms.</p>
          <p className="mt-3">In n8n, create an <strong className="text-white">HTTP Request</strong> node:</p>
          <pre className="bg-gray-900 border border-gray-800 rounded-xl p-4 mt-2 overflow-x-auto"><code className="text-sm text-turtle-300">{`Method: POST
URL: https://api.apify.com/v2/acts/apidojo~youtube-scraper/runs

Headers:
  Authorization: Bearer YOUR_APIFY_TOKEN

Body:
{
  "searchKeywords": "n8n automation tutorial",
  "maxResults": 10,
  "sortBy": "date"
}`}</code></pre>
          <p className="mt-3">Add a <strong className="text-white">Wait</strong> node (30 seconds), then fetch results with a GET request to the dataset endpoint.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Step 2: AI Analysis — Find What Works</h2>
          <p>Feed the scraped content into Claude to extract patterns:</p>
          <pre className="bg-gray-900 border border-gray-800 rounded-xl p-4 mt-2 overflow-x-auto"><code className="text-sm text-turtle-300">{`System prompt:
"Analyze this top-performing content and identify:
1. Common themes that get high engagement
2. Hook patterns (first lines that grab attention)
3. Content formats that work (lists, stories, how-tos)
4. Gaps — topics nobody is covering well

Return as JSON: themes, hooks, formats, gaps"`}</code></pre>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Step 3: AI Content Generation</h2>
          <p>Use the analysis to generate actual posts:</p>
          <pre className="bg-gray-900 border border-gray-800 rounded-xl p-4 mt-2 overflow-x-auto"><code className="text-sm text-turtle-300">{`System prompt:
"Based on the content analysis, generate 5 pieces:
1. X/Twitter post (under 280 chars, strong hook)
2. X/Twitter thread (5 tweets, storytelling)
3. LinkedIn post (200 words, end with question)
4. Email newsletter intro (100 words, one insight)
5. Hot take (controversial but defensible)

Return as JSON: tweet, thread, linkedin, email, hot_take"`}</code></pre>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Step 4: Human Review Queue</h2>
          <p><strong className="text-white">Critical: never auto-publish without reviewing.</strong></p>
          <p className="mt-3">Send generated content to a Google Sheet or Notion database where you review, edit, and approve before posting. Add a <strong className="text-white">Google Sheets</strong> node with columns: Platform, Content, Status (&quot;Draft&quot;), Created Date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Step 5: Schedule It</h2>
          <p>Replace Manual Trigger with a <strong className="text-white">Schedule Trigger</strong> — run every Monday and Thursday at 9am. You get a batch of content to review twice a week.</p>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mt-4">
            <p className="font-bold text-white mb-2">The Complete Flow:</p>
            <pre className="text-sm text-turtle-300">{`Schedule (Mon/Thu 9am)
  → Apify: Scrape YouTube + X
  → Wait 30s
  → Fetch Results
  → Claude: Analyze patterns
  → Claude: Generate 5 content pieces
  → Google Sheets: Queue for review`}</pre>
            <p className="text-sm text-gray-500 mt-2">Total nodes: 8-10</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Time Saved</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-red-900 rounded-xl p-5">
              <p className="font-bold text-red-400 mb-2">Without this workflow</p>
              <p className="text-sm">2-3h researching + 1-2h brainstorming + 2-3h writing, 2-3x/week</p>
              <p className="text-2xl font-bold text-white mt-2">10-15 hrs/week</p>
            </div>
            <div className="bg-gray-900 border border-turtle-800 rounded-xl p-5">
              <p className="font-bold text-turtle-400 mb-2">With this workflow</p>
              <p className="text-sm">5 min configuring + 20-30 min reviewing AI drafts</p>
              <p className="text-2xl font-bold text-white mt-2">~30 min/week</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-turtle-400 mb-4">Download the Starter Workflow</h2>
          <p>Import the free version into your n8n instance:</p>
          <a href="/workflows/ai-content-repurposer.json" download className="inline-block mt-3 bg-turtle-600 hover:bg-turtle-500 text-white px-6 py-3 rounded-lg font-medium transition">
            Download AI Content Repurposer JSON →
          </a>
          <p className="text-sm text-gray-500 mt-3">The full Vibe Marketing Suite (32 nodes, analytics + A/B testing) is available with <a href="/pro" className="text-turtle-400 hover:text-turtle-300">TurtleTools Pro</a>.</p>
        </section>

        <hr className="border-gray-800 my-12" />
        <p className="text-gray-500 text-sm italic">Part of the TurtleTools Vibe Marketing series. Built by an AI agent that actually uses these workflows daily.</p>
      </div>
    </article>
  );
}
