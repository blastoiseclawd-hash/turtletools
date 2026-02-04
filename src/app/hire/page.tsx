import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Us — Custom AI Automation & n8n Workflows | TurtleTools",
  description: "Need automation built? We build AI chatbots, n8n workflows, and custom integrations. Fast delivery, transparent pricing. Get a proposal in 24 hours.",
  keywords: ["hire automation developer", "n8n consultant", "AI chatbot developer", "workflow automation service"],
};

export default function HirePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Let's Build Your Automation
          </h1>
          <p className="text-xl text-gray-400">
            AI chatbots, n8n workflows, integrations — delivered fast with transparent pricing.
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">What We Build</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-turtle-400 mb-2">🤖 AI Chatbots</h3>
              <p className="text-gray-400 text-sm">RAG pipelines, document Q&A, customer support bots</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-turtle-400 mb-2">🔄 n8n Workflows</h3>
              <p className="text-gray-400 text-sm">CRM automation, email workflows, data pipelines</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-turtle-400 mb-2">🔗 Integrations</h3>
              <p className="text-gray-400 text-sm">API connections, Zapier alternatives, custom webhooks</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-turtle-400 mb-2">🤖 AI Agents</h3>
              <p className="text-gray-400 text-sm">Autonomous workflows, multi-step reasoning, tool use</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-turtle-400 font-bold text-xl">1.</span>
              <div>
                <h3 className="font-semibold mb-1">Fill Out the Form Below</h3>
                <p className="text-gray-400 text-sm">Tell us what you need automated and your timeline.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-turtle-400 font-bold text-xl">2.</span>
              <div>
                <h3 className="font-semibold mb-1">Get a Proposal in 24 Hours</h3>
                <p className="text-gray-400 text-sm">We'll send you a detailed proposal with pricing and timeline.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-turtle-400 font-bold text-xl">3.</span>
              <div>
                <h3 className="font-semibold mb-1">Review & Approve</h3>
                <p className="text-gray-400 text-sm">Ask questions, request changes, approve when ready.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-turtle-400 font-bold text-xl">4.</span>
              <div>
                <h3 className="font-semibold mb-1">We Build It</h3>
                <p className="text-gray-400 text-sm">You get updates daily. Delivery in 3-7 days for most projects.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Request a Proposal</h2>
          <form id="hireForm" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-turtle-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-turtle-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">Company (optional)</label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-turtle-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="project_type" className="block text-sm font-medium mb-2">What Do You Need Built? *</label>
              <select
                id="project_type"
                name="project_type"
                required
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-turtle-400 focus:outline-none"
              >
                <option value="">Select one...</option>
                <option value="ai-chatbot">AI Chatbot / Document Q&A</option>
                <option value="n8n-workflow">n8n Workflow Automation</option>
                <option value="ai-agent">AI Agent / Autonomous Workflow</option>
                <option value="integration">API Integration / Webhook</option>
                <option value="crm-automation">CRM Automation</option>
                <option value="email-automation">Email Automation</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">Project Description *</label>
              <textarea
                id="description"
                name="description"
                required
                rows={6}
                placeholder="Describe what you want to automate, what tools you use, and what outcome you're looking for..."
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-turtle-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range *</label>
              <select
                id="budget"
                name="budget"
                required
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-turtle-400 focus:outline-none"
              >
                <option value="">Select range...</option>
                <option value="under-500">Under $350 (30% off launch pricing)</option>
                <option value="500-1000">$350 - $700 (30% off)</option>
                <option value="1000-2500">$700 - $1,750 (30% off)</option>
                <option value="2500-5000">$1,750 - $3,500 (30% off)</option>
                <option value="5000-plus">$3,500+ (30% off)</option>
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium mb-2">Timeline *</label>
              <select
                id="timeline"
                name="timeline"
                required
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-turtle-400 focus:outline-none"
              >
                <option value="">Select timeline...</option>
                <option value="urgent">Urgent (3-5 days)</option>
                <option value="normal">Normal (1-2 weeks)</option>
                <option value="flexible">Flexible (2-4 weeks)</option>
              </select>
            </div>

            <button
              type="submit"
              id="submitBtn"
              className="w-full bg-turtle-400 text-black font-bold py-4 px-8 rounded-lg hover:bg-turtle-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Request
            </button>

            <div id="formMessage" className="hidden text-center p-4 rounded-lg"></div>

            <p className="text-sm text-gray-500 text-center">
              We'll respond within 24 hours with a detailed proposal.
            </p>
          </form>

          <script dangerouslySetInnerHTML={{__html: `
            document.getElementById('hireForm').addEventListener('submit', async (e) => {
              e.preventDefault();
              
              const btn = document.getElementById('submitBtn');
              const msg = document.getElementById('formMessage');
              const form = e.target;
              
              btn.disabled = true;
              btn.textContent = 'Submitting...';
              msg.classList.add('hidden');
              
              const formData = new FormData(form);
              const data = Object.fromEntries(formData.entries());
              
              try {
                const res = await fetch('/api/hire', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                });
                
                const result = await res.json();
                
                if (res.ok) {
                  msg.textContent = result.message;
                  msg.className = 'text-center p-4 rounded-lg bg-green-900/50 text-green-400 border border-green-700';
                  msg.classList.remove('hidden');
                  form.reset();
                  btn.textContent = 'Submitted!';
                } else {
                  throw new Error(result.error || 'Submission failed');
                }
              } catch (err) {
                msg.textContent = 'Error: ' + err.message + '. Please email us directly.';
                msg.className = 'text-center p-4 rounded-lg bg-red-900/50 text-red-400 border border-red-700';
                msg.classList.remove('hidden');
                btn.disabled = false;
                btn.textContent = 'Submit Request';
              }
            });
          `}} />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Have questions before submitting? Email us directly:
          </p>
          <a
            href="mailto:blastoise.clawd@gmail.com"
            className="text-turtle-400 hover:text-turtle-300 font-semibold text-lg"
          >
            blastoise.clawd@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
