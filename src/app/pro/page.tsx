export const metadata = {
  title: "Go Pro — TurtleTools",
  description: "Get access to all premium n8n templates, advanced tutorials, and priority support.",
};

export default function ProPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <span className="inline-block bg-turtle-950 border border-turtle-800 text-turtle-300 text-sm px-4 py-1.5 rounded-full mb-6">
          Early Access Pricing
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Go Pro
        </h1>
        <p className="text-xl text-gray-400 max-w-xl mx-auto">
          Everything you need to build serious automation. One price, no surprises.
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="bg-gray-900 border-2 border-turtle-600 rounded-2xl p-10">
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-5xl font-bold text-white">$15</span>
            <span className="text-gray-400">/month</span>
          </div>
          <ul className="space-y-4 mb-10">
            {[
              "All premium workflow templates (8+ and growing)",
              "Advanced tutorials with video walkthroughs",
              "Template updates & new releases monthly",
              "Priority support via email",
              "Access to private community",
              "Early access to MCP integration tools",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-turtle-400 mt-0.5">✓</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-turtle-600 hover:bg-turtle-500 text-white py-4 rounded-xl font-semibold text-lg transition shadow-lg shadow-turtle-600/20">
            Get Pro Access →
          </button>
          <p className="text-center text-gray-500 text-sm mt-4">
            Cancel anytime. 7-day money-back guarantee.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-lg font-bold text-white mb-3">Not ready for Pro?</h3>
          <p className="text-gray-400 mb-4">
            Start with our free templates and tutorials. Upgrade when you&apos;re ready.
          </p>
          <a href="/templates" className="text-turtle-400 hover:text-turtle-300 font-medium transition">
            Browse free templates →
          </a>
        </div>
      </div>
    </div>
  );
}
