import { templates } from "@/content/templates";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = templates.find((t) => t.id === slug);
  if (!t) return { title: "Template Not Found" };
  return {
    title: `${t.title} — TurtleTools`,
    description: t.description,
  };
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = templates.find((t) => t.id === slug);
  if (!t) notFound();

  const diffColors: Record<string, string> = {
    beginner: "bg-green-500/20 text-green-300 border-green-500/30",
    intermediate: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    advanced: "bg-red-500/20 text-red-300 border-red-500/30",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <a href="/templates" className="text-turtle-400 hover:text-turtle-300 text-sm mb-6 inline-block">
        ← Back to Templates
      </a>

      <div className="flex items-center gap-3 mb-4">
        <span className={`text-xs px-2 py-0.5 rounded-full border ${diffColors[t.difficulty]}`}>
          {t.difficulty}
        </span>
        <span className="text-gray-500 text-sm">{t.category} · {t.nodes} nodes</span>
      </div>

      <h1 className="text-4xl font-bold text-white mb-4">{t.title}</h1>

      <p className="text-xl text-gray-400 mb-8">{t.description}</p>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-4">About This Workflow</h2>
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">{t.longDescription}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-sm text-gray-400">Tools used:</span>
        {t.tools.map((tool) => (
          <span key={tool} className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-lg">{tool}</span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {t.tags.map((tag) => (
          <span key={tag} className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded">#{tag}</span>
        ))}
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
        {t.price === 0 ? (
          <>
            <div className="text-center">
              <span className="text-3xl font-bold text-green-400">Free</span>
              <p className="text-gray-400 mt-2 mb-6">Download and import into your n8n instance</p>
              <a
                href={`/workflows/${t.id}.json`}
                download
                className="inline-block bg-turtle-600 hover:bg-turtle-500 text-white px-8 py-3 rounded-lg font-medium transition text-lg"
              >
                Download Workflow JSON
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <span className="text-3xl font-bold text-white">${t.price}</span>
              <span className="text-gray-400 ml-2">one-time</span>
              <p className="text-gray-400 mt-2 mb-6">Includes workflow JSON, setup guide, and email support</p>
              <a
                href="/pro"
                className="inline-block bg-turtle-600 hover:bg-turtle-500 text-white px-8 py-3 rounded-lg font-medium transition text-lg"
              >
                Get Pro Access — $15/mo for all templates
              </a>
              <p className="text-gray-500 text-sm mt-3">Or buy individually above</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
