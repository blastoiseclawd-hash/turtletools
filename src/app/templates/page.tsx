import { templates } from "@/content/templates";

export const metadata = {
  title: "n8n Workflow Templates — TurtleTools",
  description: "Premium and free n8n workflow templates for AI automation, MCP integration, content marketing, and more.",
};

const categoryStyles: Record<string, { gradient: string; icon: string }> = {
  Content: { gradient: "from-purple-900 via-fuchsia-900 to-gray-900", icon: "📝" },
  Productivity: { gradient: "from-blue-900 via-indigo-900 to-gray-900", icon: "⚡" },
  MCP: { gradient: "from-emerald-900 via-teal-900 to-gray-900", icon: "🔌" },
  Sales: { gradient: "from-orange-900 via-amber-900 to-gray-900", icon: "💰" },
  Research: { gradient: "from-cyan-900 via-sky-900 to-gray-900", icon: "🔍" },
  Marketing: { gradient: "from-pink-900 via-rose-900 to-gray-900", icon: "📡" },
  Email: { gradient: "from-violet-900 via-purple-900 to-gray-900", icon: "✉️" },
};

const diffColors: Record<string, string> = {
  beginner: "bg-green-950 text-green-300 border-green-800",
  intermediate: "bg-yellow-950 text-yellow-300 border-yellow-800",
  advanced: "bg-red-950 text-red-300 border-red-800",
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
  const style = categoryStyles[t.category] || { gradient: "from-gray-800 to-gray-900", icon: "⚙️" };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-turtle-700 transition group flex flex-col">
      {/* Image area */}
      <div className={`h-40 bg-gradient-to-br ${style.gradient} relative flex items-center justify-center overflow-hidden`}>
        <span className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity">{style.icon}</span>
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id={`dots-${t.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white"/>
            </pattern>
            <rect width="100%" height="100%" fill={`url(#dots-${t.id})`}/>
          </svg>
        </div>
        {/* Price badge */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm ${
            t.price === 0
              ? "bg-green-500/20 text-green-300 border border-green-500/30"
              : "bg-white/10 text-white border border-white/20"
          }`}>
            {t.price === 0 ? "Free" : `$${t.price}`}
          </span>
        </div>
        {/* Node count */}
        <div className="absolute bottom-3 right-3">
          <span className="text-xs bg-black/40 text-white/60 px-2 py-1 rounded backdrop-blur-sm">
            {t.nodes} nodes
          </span>
        </div>
        {/* Category label */}
        <div className="absolute bottom-3 left-3">
          <span className="text-xs font-mono bg-black/40 text-white/70 px-2 py-1 rounded backdrop-blur-sm">
            {t.category}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs px-2 py-0.5 rounded-full border ${diffColors[t.difficulty]}`}>
            {t.difficulty}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-turtle-400 transition">{t.title}</h3>
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
