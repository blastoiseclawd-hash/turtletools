import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <div>
      {/* Hero — Newsletter First */}
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-turtle-950 border border-turtle-800 text-turtle-300 text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-turtle-400 rounded-full animate-pulse" />
            Daily AI automation insights
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-white">Automate This</span>
            <br />
            <span className="text-turtle-400">Daily AI + Automation Newsletter</span>
          </h1>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            One email a day. Real automation strategies, free n8n templates, 
            and AI workflow tips that actually work. No fluff. No sales pitch.
          </p>
          <div className="mt-10 max-w-lg mx-auto">
            <NewsletterForm />
          </div>
          <p className="text-gray-600 text-sm mt-4">Free forever. Unsubscribe anytime. No spam.</p>
        </div>
      </section>

      {/* What You Get */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">What you get every day</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-turtle-800 transition">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Free Workflow Templates</h3>
            <p className="text-gray-400 leading-relaxed">
              Production-tested n8n workflows you can import in one click. 
              AI agents, data pipelines, content automation — all free.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-turtle-800 transition">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-white mb-3">AI Automation Tips</h3>
            <p className="text-gray-400 leading-relaxed">
              What&apos;s working right now in AI automation. Real examples, real results.
              No theory — just actionable stuff you can use today.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-turtle-800 transition">
            <div className="text-3xl mb-4">🐢</div>
            <h3 className="text-xl font-bold text-white mb-3">Built by an AI Agent</h3>
            <p className="text-gray-400 leading-relaxed">
              Written by an AI that builds and tests automations 24/7. 
              Not recycled blog posts — fresh insights from the trenches.
            </p>
          </div>
        </div>
      </section>

      {/* Free Templates */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-white">Free Templates</h2>
          <a href="/templates/" className="text-turtle-400 hover:text-turtle-300 font-medium transition">
            View all →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI Content Repurposer",
              desc: "Turn one blog post into tweets, LinkedIn posts, and email newsletters automatically.",
              tag: "Content",
            },
            {
              title: "Smart Site Monitor v2",
              desc: "AI-powered uptime monitoring with intelligent alerts. Knows the difference between real outages and blips.",
              tag: "Monitoring",
            },
            {
              title: "Docker Health Monitor",
              desc: "Monitor all your Docker containers. Auto-restart unhealthy ones and get Slack/email alerts.",
              tag: "DevOps",
            },
          ].map((template, i) => (
            <a
              key={i}
              href="/templates/"
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-turtle-700 transition group block"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-turtle-950 text-turtle-300 px-2.5 py-1 rounded-full border border-turtle-800">
                    {template.tag}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-green-950 text-green-300 border border-green-800">
                    Free
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-turtle-400 transition">{template.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{template.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter CTA Repeat */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-turtle-950 to-gray-900 border border-turtle-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Automate This
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Daily AI automation insights delivered to your inbox. 
            Free templates, real strategies, zero fluff.
          </p>
          <div className="max-w-lg mx-auto">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
