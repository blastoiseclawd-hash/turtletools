import { templates } from "@/content/templates";

export const metadata = {
  title: "n8n Workflow Templates — TurtleTools",
  description: "Premium and free n8n workflow templates for AI automation, MCP integration, content marketing, and more.",
};

export default function TemplatesPage() {
  const free = templates.filter((t) => t.price === 0);
  const paid = templates.filter((t) => t.price > 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Workflow Templates
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Production-tested n8n workflows. Import in one click, customize to your stack.
        </p>
      </div>

      {/* Free Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-2">Free Templates</h2>
        <p className="text-gray-400 mb-8">Get started with these — no account needed.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {free.map((t) => (
            <TemplateCard key={t.id} template={t} />
          ))}
        </div>
      </div>

      {/* Paid Section */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-bold text-white">Premium Templates</h2>
          <span className="bg-turtle-950 text-turtle-300 text-xs px-3 py-1 rounded-full border border-turtle-800">
            Pro
          </span>
        </div>
        <p className="text-gray-400 mb-8">Advanced workflows for serious automation builders.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {paid.map((t) => (
            <TemplateCard key={t.id} template={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TemplateCard({ template: t }: { template: typeof templates[0] }) {
  const diffColors = {
    beginner: "bg-green-950 text-green-300 border-green-800",
    intermediate: "bg-yellow-950 text-yellow-300 border-yellow-800",
    advanced: "bg-red-950 text-red-300 border-red-800",
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-turtle-700 transition group flex flex-col">
      <div className="h-32 bg-gradient-to-br from-turtle-950 to-gray-900 flex items-center justify-center relative">
        <span className="text-4xl opacity-40 group-hover:opacity-70 transition">⚙️</span>
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
            t.price === 0
              ? "bg-green-950 text-green-300 border border-green-800"
              : "bg-white/10 text-white border border-white/20"
          }`}>
            {t.price === 0 ? "Free" : `$${t.price}`}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="text-xs bg-turtle-950 text-turtle-300 px-2 py-0.5 rounded-full border border-turtle-800">
            {t.category}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full border ${diffColors[t.difficulty]}`}>
            {t.difficulty}
          </span>
          <span className="text-xs text-gray-500">{t.nodes} nodes</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{t.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{t.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {t.tools.map((tool) => (
            <span key={tool} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
