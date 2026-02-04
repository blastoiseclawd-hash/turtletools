import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'n8n Webhook Tutorial: Receive External Data in Your Workflows (2025)',
  description: 'Step-by-step guide to setting up n8n webhooks. Receive data from any app, trigger workflows automatically, and build real-time automation pipelines.',
  keywords: ['n8n webhook', 'n8n webhook tutorial', 'n8n trigger', 'webhook automation', 'n8n receive data'],
  openGraph: {
    title: 'n8n Webhook Tutorial: Receive External Data in Your Workflows',
    description: 'Step-by-step guide to setting up n8n webhooks for real-time automation.',
    type: 'article',
    publishedTime: '2025-02-02',
  },
}

export default function WebhookTutorial() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← Back to Blog</Link>
        
        <article className="prose prose-invert prose-emerald max-w-none">
          <h1 className="text-4xl font-bold mb-4">n8n Webhook Tutorial: Receive External Data in Your Workflows</h1>
          <p className="text-gray-400 mb-8">February 2, 2025 · 8 min read</p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Webhooks are the backbone of real-time automation. Instead of polling APIs every few minutes, 
            webhooks let external services <strong>push data to your n8n workflow</strong> the instant something happens.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This guide walks you through setting up webhooks in n8n — from the basic trigger node to 
            production-ready patterns with authentication, error handling, and response customization.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">What Is a Webhook?</h2>
          <p className="text-gray-300 leading-relaxed">
            A webhook is an HTTP endpoint that waits for incoming requests. When another service sends data 
            to that URL, your workflow triggers immediately.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Think of it as a doorbell: instead of checking if someone&apos;s at the door every 5 minutes (polling), 
            you wait for the bell to ring (webhook).
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-6">
            <p className="text-gray-300 mb-2"><strong>Common webhook use cases:</strong></p>
            <ul className="text-gray-400 space-y-1">
              <li>Stripe sends a payment event → n8n processes the order</li>
              <li>GitHub push → n8n runs deployment pipeline</li>
              <li>Form submission → n8n saves to database + sends email</li>
              <li>Slack command → n8n runs AI analysis and replies</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Step 1: Add the Webhook Trigger Node</h2>
          <p className="text-gray-300 leading-relaxed">
            In n8n, create a new workflow and add a <strong>Webhook</strong> node as the trigger (first node).
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-6 font-mono text-sm">
            <p className="text-emerald-400 mb-2">// Webhook node settings</p>
            <p className="text-gray-300">HTTP Method: POST</p>
            <p className="text-gray-300">Path: /my-webhook</p>
            <p className="text-gray-300">Response Mode: Last Node</p>
          </div>
          <p className="text-gray-300 leading-relaxed">
            The <strong>Path</strong> becomes part of your webhook URL. With a path of <code className="bg-gray-800 px-1 rounded">/my-webhook</code>, 
            your full URL will be something like:
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-6 font-mono text-sm text-gray-300">
            https://your-n8n-instance.com/webhook/my-webhook
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Step 2: Test with a Sample Request</h2>
          <p className="text-gray-300 leading-relaxed">
            Before connecting a real service, test your webhook manually. Click <strong>&quot;Listen for Test Event&quot;</strong> in 
            n8n, then send a test request:
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-6 font-mono text-sm text-gray-300">
            <p className="text-emerald-400 mb-2"># Using curl</p>
            <p>curl -X POST https://your-n8n.com/webhook-test/my-webhook \</p>
            <p className="pl-4">-H &quot;Content-Type: application/json&quot; \</p>
            <p className="pl-4">-d &apos;{`{"name": "Test User", "email": "test@example.com"}`}&apos;</p>
          </div>
          <p className="text-gray-300 leading-relaxed">
            n8n should show the received data in the webhook node output. You can now use 
            <code className="bg-gray-800 px-1 rounded">{`{{ $json.name }}`}</code> and 
            <code className="bg-gray-800 px-1 rounded">{`{{ $json.email }}`}</code> in downstream nodes.
          </p>

          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-4 my-6">
            <p className="text-yellow-400 font-bold mb-2">⚠️ Test vs Production URLs</p>
            <p className="text-gray-300">
              n8n has two webhook URLs: <code className="bg-gray-800 px-1 rounded">/webhook-test/</code> (only works while 
              you&apos;re testing in the editor) and <code className="bg-gray-800 px-1 rounded">/webhook/</code> (works when 
              the workflow is active). Use the production URL when configuring external services.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Step 3: Process the Data</h2>
          <p className="text-gray-300 leading-relaxed">
            After the webhook receives data, add nodes to process it. Here&apos;s a common pattern:
          </p>
          <ol className="text-gray-300 space-y-3 my-4">
            <li><strong>Webhook</strong> → receives the incoming data</li>
            <li><strong>IF node</strong> → validate the data (check required fields exist)</li>
            <li><strong>Set node</strong> → transform/rename fields as needed</li>
            <li><strong>Action node</strong> → save to database, send email, call API, etc.</li>
            <li><strong>Respond to Webhook</strong> → send a response back to the caller</li>
          </ol>

          <h2 className="text-2xl font-bold mt-12 mb-4">Step 4: Add Authentication</h2>
          <p className="text-gray-300 leading-relaxed">
            In production, you don&apos;t want anyone to trigger your webhook. n8n supports several auth methods:
          </p>
          
          <h3 className="text-xl font-bold mt-8 mb-3">Header Authentication</h3>
          <p className="text-gray-300 leading-relaxed">
            Set a secret header that callers must include:
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-6 font-mono text-sm">
            <p className="text-emerald-400 mb-2">// Webhook node → Authentication</p>
            <p className="text-gray-300">Authentication: Header Auth</p>
            <p className="text-gray-300">Header Name: X-Webhook-Secret</p>
            <p className="text-gray-300">Header Value: your-secret-token-here</p>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Any request without the correct header gets rejected with a 403.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">HMAC Signature Verification</h3>
          <p className="text-gray-300 leading-relaxed">
            For services like GitHub and Stripe that sign webhook payloads, use an IF node or 
            Code node to verify the HMAC signature before processing.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Step 5: Handle Errors Gracefully</h2>
          <p className="text-gray-300 leading-relaxed">
            Webhooks in production <em>will</em> receive malformed data, duplicate events, and 
            unexpected payloads. Build for it:
          </p>
          <ul className="text-gray-300 space-y-2 my-4">
            <li><strong>Validate early:</strong> Check required fields in the first node after the webhook</li>
            <li><strong>Respond fast:</strong> Many services timeout after 5-30 seconds. Acknowledge receipt quickly, then process asynchronously if needed</li>
            <li><strong>Handle duplicates:</strong> Some services send the same event multiple times. Use an ID field to deduplicate</li>
            <li><strong>Log failures:</strong> Use the Error Trigger node to catch and log any workflow failures</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Step 6: Customize Your Response</h2>
          <p className="text-gray-300 leading-relaxed">
            With <strong>Response Mode: Last Node</strong>, whatever your final &quot;Respond to Webhook&quot; node 
            outputs becomes the HTTP response. This is powerful:
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-6 font-mono text-sm text-gray-300">
            <p className="text-emerald-400 mb-2">// Respond to Webhook node</p>
            <p>Response Code: 200</p>
            <p>Response Body:</p>
            <p className="pl-4">{`{`}</p>
            <p className="pl-8">{`"status": "received",`}</p>
            <p className="pl-8">{`"id": "{{ $json.processedId }}",`}</p>
            <p className="pl-8">{`"message": "Event processed successfully"`}</p>
            <p className="pl-4">{`}`}</p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Production Checklist</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-6">
            <ul className="text-gray-300 space-y-2">
              <li>✅ Use the <strong>production</strong> webhook URL (not test)</li>
              <li>✅ Workflow is <strong>active</strong> (toggle in top-right)</li>
              <li>✅ Authentication is configured</li>
              <li>✅ Input validation on required fields</li>
              <li>✅ Error handling with Error Trigger node</li>
              <li>✅ Response is returned quickly (&lt;5 seconds)</li>
              <li>✅ Duplicate event handling (idempotency)</li>
              <li>✅ HTTPS enabled (don&apos;t accept webhooks over plain HTTP)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Common Gotchas</h2>
          <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 my-6">
            <ul className="text-gray-300 space-y-3">
              <li><strong>Webhook not receiving data?</strong> Make sure the workflow is active (green toggle). Test URLs only work during editor testing.</li>
              <li><strong>Getting empty body?</strong> Check the Content-Type header. n8n expects <code className="bg-gray-800 px-1 rounded">application/json</code> for JSON parsing.</li>
              <li><strong>Timeout errors?</strong> If your workflow takes &gt;30 seconds, set Response Mode to &quot;Immediately&quot; to acknowledge receipt first.</li>
              <li><strong>Webhook URL changes after restart?</strong> Self-hosted n8n regenerates webhook URLs unless you set a fixed path. Always use a custom path, not the auto-generated one.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Next Steps</h2>
          <p className="text-gray-300 leading-relaxed">
            Now that you have webhooks working, you can build powerful real-time automations. 
            Check out our <Link href="/templates" className="text-emerald-400 hover:text-emerald-300">workflow templates</Link> for 
            production-ready examples, or read our guide on <Link href="/blog/n8n-mcp-server-setup" className="text-emerald-400 hover:text-emerald-300">connecting 
            n8n to AI with MCP servers</Link>.
          </p>

          <div className="mt-12 p-6 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-700/50 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Want pre-built webhook workflows?</h3>
            <p className="text-gray-300 mb-4">
              Our Pro templates include production-ready webhook patterns with authentication, 
              error handling, and AI processing built in.
            </p>
            <Link href="/pro" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              View Pro Templates →
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
