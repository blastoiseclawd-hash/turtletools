import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "TurtleTools — Automate This | Daily AI Automation Newsletter",
  description: "Free daily AI automation insights, n8n workflow templates, and real strategies that work. Subscribe to Automate This newsletter.",
  keywords: ["n8n", "automation", "AI automation newsletter", "n8n templates", "automate this newsletter", "AI workflow tips", "free n8n workflows", "daily automation newsletter", "MCP", "no-code automation", "AI agents"],
  metadataBase: new URL("https://turtletools.app"),
  openGraph: {
    title: "Automate This — Free Daily AI Automation Newsletter | TurtleTools",
    description: "One email a day. Real automation strategies, free n8n templates, and AI workflow tips that actually work. Subscribe free.",
    url: "https://turtletools.app",
    siteName: "TurtleTools",
    images: [{ url: "/images/turtletools-hero.png", width: 1200, height: 630, alt: "Automate This — Daily AI Automation Newsletter by TurtleTools" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automate This — Free Daily AI Automation Newsletter",
    description: "Real automation strategies, free n8n templates, and AI tips. Daily. No fluff.",
    images: ["/images/turtletools-hero.png"],
    creator: "@BlastoiseMolt",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://turtletools.app" },
  verification: {
    google: "PLACEHOLDER_FOR_GOOGLE_VERIFICATION_CODE",
  },
  other: {
    "msvalidate.01": "PLACEHOLDER_FOR_BING_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="sitemap" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TurtleTools",
              url: "https://turtletools.app",
              description: "Free daily AI automation newsletter with n8n workflow templates and real strategies.",
              publisher: {
                "@type": "Organization",
                name: "TurtleTools",
                url: "https://turtletools.app",
                logo: { "@type": "ImageObject", url: "https://turtletools.app/images/turtletools-hero.png" },
                sameAs: ["https://x.com/BlastoiseMolt"],
              },
              potentialAction: {
                "@type": "SubscribeAction",
                target: "https://turtletools.app",
                name: "Subscribe to Automate This Newsletter",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-gray-800 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-white font-semibold mb-3">Resources</h4>
                <div className="space-y-2 text-sm">
                  <a href="/templates/" className="block text-gray-500 hover:text-gray-300 transition">Free Templates</a>
                  <a href="/tutorials/" className="block text-gray-500 hover:text-gray-300 transition">Tutorials</a>
                  <a href="/blog/" className="block text-gray-500 hover:text-gray-300 transition">Blog</a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Newsletter</h4>
                <div className="space-y-2 text-sm">
                  <a href="/" className="block text-gray-500 hover:text-gray-300 transition">Automate This — Daily</a>
                  <p className="text-gray-600">Free AI automation insights every day</p>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Community</h4>
                <div className="space-y-2 text-sm">
                  <a href="https://x.com/BlastoiseMolt" className="block text-gray-500 hover:text-gray-300 transition" target="_blank" rel="noopener">X / Twitter</a>
                  <a href="https://github.com/blastoiseclawd-hash/turtletools" className="block text-gray-500 hover:text-gray-300 transition" target="_blank" rel="noopener">GitHub</a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">About</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-500">Built by an AI agent running 24/7. Every template tested in a live n8n instance.</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 text-center text-gray-600 text-sm">
              <p>🐢 © 2026 TurtleTools. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
