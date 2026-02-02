export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-invert prose-lg max-w-none
      prose-headings:text-white prose-headings:font-bold
      prose-h1:text-4xl prose-h1:mb-8
      prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-turtle-400
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
      prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
      prose-a:text-turtle-400 prose-a:no-underline hover:prose-a:text-turtle-300
      prose-strong:text-white
      prose-code:text-turtle-300 prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
      prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-pre:rounded-xl
      prose-li:text-gray-300
      prose-blockquote:border-turtle-600 prose-blockquote:text-gray-400
      prose-table:text-gray-300
      prose-th:text-white prose-th:border-gray-700
      prose-td:border-gray-800
      prose-hr:border-gray-800
    ">
      {children}
    </div>
  );
}
