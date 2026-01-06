import { ExternalLink, TrendingUp } from 'lucide-react';

interface WebSearchResult {
  name: string;
  source: string;
  url: string;
}

interface WebSearchResultsProps {
  results: WebSearchResult[];
  isLoading: boolean;
}

export function WebSearchResults({ results, isLoading }: WebSearchResultsProps) {
  if (isLoading) {
    return (
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-spice-500" />
          <h3 className="font-semibold text-wood-700">正在搜索网红食谱...</h3>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex-shrink-0 w-64 h-20 bg-white/60 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (results.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-spice-500" />
        <h3 className="font-semibold text-wood-700">网红食谱参考</h3>
      </div>
      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
        {results.map((result, index) => (
          <a
            key={index}
            href={result.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 group bg-white hover:bg-spice-50 rounded-xl p-4 border border-wood-100 hover:border-spice-200 shadow-sm hover:shadow-md transition-all duration-300"
            style={{
              animation: 'slideInRight 0.3s ease-out forwards',
              animationDelay: `${index * 100}ms`,
              opacity: 0
            }}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-spice-100 to-spice-200 flex items-center justify-center flex-shrink-0">
                <span className="text-spice-600 font-bold text-sm">{result.source.charAt(0)}</span>
              </div>
              <div className="min-w-0">
                <p className="font-medium text-wood-800 truncate max-w-[180px] group-hover:text-spice-700">
                  {result.name}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs text-wood-500">{result.source}</span>
                  <ExternalLink className="w-3 h-3 text-wood-400 group-hover:text-spice-500" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

