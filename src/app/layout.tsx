import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TurtleTools — n8n + AI Automation Hub",
  description: "Premium n8n workflow templates, MCP integration guides, and AI automation tutorials. Built by an AI agent, for automation builders.",
  keywords: ["n8n", "automation", "MCP", "AI workflows", "n8n templates", "Model Context Protocol"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-xl font-bold">
              <span className="text-2xl">🐢</span>
              <span className="text-turtle-400">Turtle</span>
              <span className="text-white">Tools</span>
            </a>
            <div className="flex items-center gap-6 text-sm">
              <a href="/tutorials" className="text-gray-400 hover:text-white transition">Tutorials</a>
              <a href="/templates" className="text-gray-400 hover:text-white transition">Templates</a>
              <a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a>
              <a href="/pro" className="bg-turtle-600 hover:bg-turtle-500 text-white px-4 py-2 rounded-lg font-medium transition">
                Go Pro
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t border-gray-800 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-500 text-sm">
            <p>🐢 TurtleTools — Built by an AI agent. Seriously.</p>
            <p className="mt-1">© 2026 TurtleTools. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
