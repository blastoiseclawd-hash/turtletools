import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '7 n8n Self-Hosting Mistakes I Made (So You Don\'t Have To)',
  description: 'Real lessons from running n8n in production. Database backups, security CVEs, Docker gotchas, and the mistakes that cost me hours of debugging.',
  keywords: ['n8n self-hosting', 'n8n mistakes', 'n8n production', 'n8n docker', 'self-host n8n'],
  openGraph: {
    title: '7 n8n Self-Hosting Mistakes I Made (So You Don\'t Have To)',
    description: 'Real lessons from running n8n in production on AWS.',
    type: 'article',
    publishedTime: '2025-02-02',
  },
}

export default function SelfHostingMistakes() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Blog</Link>
        
        <article className="prose prose-invert prose-emerald max-w-none">
          <h1 className="text-4xl font-bold mb-4">7 n8n Self-Hosting Mistakes I Made (So You Don&apos;t Have To)</h1>
          <p className="text-gray-400 mb-8">February 2, 2025 · 10 min read</p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;ve been running n8n on an AWS EC2 instance for weeks now. It powers my entire automation stack — 
            site monitoring, content pipelines, AI workflows, alerting systems. Along the way, I made every 
            mistake in the book. Here are the ones that actually cost me time.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">1. Not Backing Up the SQLite Database</h2>
          <p className="text-gray-300 leading-relaxed">
            n8n uses SQLite by default. Your workflows, credentials, execution history — it&apos;s all in one file. 
            I assumed Docker volumes were persistent across container rebuilds. They&apos;re not always.
          </p>
          <p className="text-gray-300 leading-relaxed">
            One bad <code className="bg-gray-800 px-1 rounded">docker-compose down -v</code> and I lost a week 
            of workflow configs. The <code className="bg-gray-800 px-1 rounded">-v</code> flag removes volumes. 
            I&apos;d been using it out of habit from other projects.
          </p>
          <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 my-6">
            <p className="text-emerald-400 font-bold mb-2">✅ Fix</p>
            <p className="text-gray-300">Set up a cron job that copies the SQLite file to a backup location daily:</p>
            <div className="bg-gray-900 rounded p-3 mt-2 font-mono text-sm text-gray-300">
              0 3 * * * cp ~/.n8n/database.sqlite ~/.n8n/backups/database-$(date +%Y%m%d).sqlite
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">2. Exposing n8n Directly to the Internet</h2>
          <p className="text-gray-300 leading-relaxed">
            My first setup: n8n on port 5678, open to the world. No reverse proxy, no auth beyond the basic 
            login. This worked for about a week before I saw suspicious requests in the logs.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Then CVE-2026-21858 dropped — unauthenticated remote code execution in n8n. Anyone could take over 
            my instance without logging in. That was a wake-up call.
          </p>
          <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 my-6">
            <p className="text-emerald-400 font-bold mb-2">✅ Fix</p>
            <p className="text-gray-300">
              Put n8n behind Tailscale or Cloudflare Tunnel. Your instance should never have a public IP. 
              If you need webhooks from external services, use Cloudflare Tunnel with specific paths whitelisted.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">3. Using JSON Body Type with Expressions</h2>
          <p className="text-gray-300 leading-relaxed">
            This one burned hours. The HTTP Request node has a &quot;Specify Body&quot; option. If you set it 
            to <strong>JSON</strong> and use n8n expressions like <code className="bg-gray-800 px-1 rounded">{`{{ $json.name }}`}</code>, 
            it fails silently.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Why? n8n validates the JSON <em>before</em> evaluating expressions. So it sees{' '}
            <code className="bg-gray-800 px-1 rounded">{`{{ $json.name }}`}</code> as invalid JSON and rejects it.
          </p>
          <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 my-6">
            <p className="text-emerald-400 font-bold mb-2">✅ Fix</p>
            <p className="text-gray-300">
              Set Specify Body to <strong>&quot;String&quot;</strong> instead of &quot;JSON&quot;. Then write your JSON 
              as a string with expressions. n8n evaluates expressions first, then parses the result as JSON.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">4. Not Setting Execution Timeouts</h2>
          <p className="text-gray-300 leading-relaxed">
            I had a workflow that called an external API. The API went down. My workflow hung forever, holding 
            the execution slot. Since n8n has limited concurrent executions by default, this blocked other 
            workflows from running.
          </p>
          <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 my-6">
            <p className="text-emerald-400 font-bold mb-2">✅ Fix</p>
            <p className="text-gray-300">Set timeouts at two levels:</p>
            <ul className="text-gray-400 mt-2 space-y-1">
              <li><strong>HTTP Request node:</strong> Set timeout in Options (e.g., 10000ms)</li>
              <li><strong>Workflow level:</strong> Set <code className="bg-gray-800 px-1 rounded">EXECUTIONS_TIMEOUT</code> env var (e.g., 300 for 5 minutes)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">5. Ignoring Memory Limits</h2>
          <p className="text-gray-300 leading-relaxed">
            n8n loads entire datasets into memory. If a workflow processes a large API response (thousands of 
            records), it can crash the whole instance. I learned this when a Stripe webhook handler tried to 
            process a full customer export.
          </p>
          <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 my-6">
            <p className="text-emerald-400 font-bold mb-2">✅ Fix</p>
            <p className="text-gray-300">
              Set <code className="bg-gray-800 px-1 rounded">NODE_OPTIONS=--max-old-space-size=512</code> in your 
              Docker config. Process data in batches using the Loop Over Items node. And always paginate API calls 
              instead of fetching everything at once.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">6. Not Monitoring n8n Itself</h2>
          <p className="text-gray-300 leading-relaxed">
            I had 8 workflows running but no way to know if n8n itself went down. The automation tool that 
            was supposed to make things reliable was a single point of failure.
          </p>
          <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 my-6">
            <p className="text-emerald-400 font-bold mb-2">✅ Fix</p>
            <p className="text-gray-300">
              Use an <em>external</em> monitor. I built a simple check that pings n8n&apos;s health endpoint 
              every 15 minutes from outside the n8n instance. If it fails, it alerts me through a completely 
              separate channel. Don&apos;t use n8n to monitor n8n.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">7. Building Workflows Before Mapping the Process</h2>
          <p className="text-gray-300 leading-relaxed">
            This is the meta-mistake that caused half the others. I&apos;d get excited about n8n&apos;s 
            capabilities and start building immediately. Two workflows later, I realized I was automating 
            processes that didn&apos;t need to exist.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Now I follow a simple rule: <strong>sketch the process on paper first</strong>. Identify where 
            the actual friction is. Often the answer isn&apos;t &quot;automate this&quot; — it&apos;s 
            &quot;stop doing this entirely.&quot;
          </p>
          <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 my-6">
            <p className="text-emerald-400 font-bold mb-2">✅ Fix</p>
            <p className="text-gray-300">
              Before opening n8n, answer three questions: (1) What problem am I solving? (2) Who has this problem? 
              (3) What happens if I don&apos;t automate it? If you can&apos;t answer all three, don&apos;t build yet.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">The Bigger Lesson</h2>
          <p className="text-gray-300 leading-relaxed">
            Self-hosting n8n isn&apos;t just &quot;install and forget.&quot; It&apos;s infrastructure. You&apos;re 
            the ops team now. That&apos;s powerful — you control everything — but it means security patches, 
            backups, monitoring, and capacity planning are your responsibility.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The good news: once you have these basics in place, self-hosted n8n is incredibly reliable. I run 
            10+ active workflows and the total cost is about $5/month for the EC2 instance. Try getting that 
            from any cloud automation platform.
          </p>

          <div className="mt-12 p-6 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-700/50 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Production-Ready Workflow Templates</h3>
            <p className="text-gray-300 mb-4">
              All our templates are tested on self-hosted n8n 2.4.6. They include error handling, 
              timeouts, and documentation — the stuff you only learn matters after something breaks.
            </p>
            <Link href="/templates" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Browse Templates →
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
