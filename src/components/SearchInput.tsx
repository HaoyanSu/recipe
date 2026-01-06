import { useState, KeyboardEvent } from 'react';
import { Search, Sparkles, X } from 'lucide-react';

interface SearchInputProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
  placeholder?: string;
}

const suggestionTags = [
  '快手早餐', '低卡减脂', '家常小炒', '下饭神器',
  '凉菜开胃', '一人食', '高蛋白', '素食'
];

export function SearchInput({ onSearch, isLoading, placeholder }: SearchInputProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (query.trim() && !isLoading) {
      onSearch(query.trim());
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleTagClick = (tag: string) => {
    setQuery(tag);
    onSearch(tag);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Main Search Box */}
      <div className="relative">
        <div className="glass rounded-2xl border border-spice-100 shadow-lg shadow-spice-100/20 overflow-hidden transition-all duration-300 focus-within:shadow-xl focus-within:shadow-spice-200/30 focus-within:border-spice-200">
          <div className="flex items-start p-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-spice-400 to-spice-600 flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <div className="flex-1 ml-4">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder || "告诉我你想吃什么...\n例如：想吃点清淡的，最好10分钟能做好，不要放葱"}
                className="w-full bg-transparent border-none outline-none resize-none text-wood-800 placeholder-wood-400 text-lg leading-relaxed min-h-[80px]"
                rows={3}
              />
            </div>

            {query && (
              <button
                onClick={() => setQuery('')}
                className="flex-shrink-0 mt-1 p-2 text-wood-400 hover:text-wood-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Search Button */}
          <div className="px-4 pb-4 flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={!query.trim() || isLoading}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-spice-500 to-spice-600 text-white rounded-xl font-medium shadow-md hover:shadow-lg hover:from-spice-600 hover:to-spice-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-md"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>搜索中...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>探索食谱</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Tags */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        <span className="text-wood-500 text-sm mr-2">快速探索：</span>
        {suggestionTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className="tag px-4 py-1.5 bg-white/60 hover:bg-white border border-wood-200 hover:border-spice-300 text-wood-600 hover:text-spice-600 rounded-full text-sm font-medium shadow-sm transition-all duration-200"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

