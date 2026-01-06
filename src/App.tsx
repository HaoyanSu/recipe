import { useState, useCallback } from 'react';
import { SearchInput, RecipeCard, RecipeDetail, SortTabs, ChatRefine, WebSearchResults } from './components';
import { Recipe, SortOption, ChatMessage } from './types';
import { mockRecipes, searchWebRecipes, filterRecipes } from './data/mockRecipes';
import { ChefHat } from 'lucide-react';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [webResults, setWebResults] = useState<{name: string; source: string; url: string}[]>([]);
  const [isWebSearching, setIsWebSearching] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');
  const [restrictions, setRestrictions] = useState<string[]>([]);

  const handleSearch = useCallback(async (query: string) => {
    setIsLoading(true);
    setIsWebSearching(true);
    setHasSearched(true);
    setCurrentQuery(query);
    setWebResults([]);

    // Simulate AI understanding the query and extracting restrictions
    const lowerQuery = query.toLowerCase();
    const newRestrictions: string[] = [];
    
    // Extract restrictions from query (simplified parsing)
    if (lowerQuery.includes('不要') || lowerQuery.includes('不放')) {
      const restrictionMatch = query.match(/不要(.+?)(?:[，,。]|$)/g) || query.match(/不放(.+?)(?:[，,。]|$)/g);
      if (restrictionMatch) {
        restrictionMatch.forEach(match => {
          const item = match.replace(/不要|不放/g, '').replace(/[，,。]/g, '').trim();
          if (item) newRestrictions.push(item);
        });
      }
    }
    setRestrictions(newRestrictions);

    // Simulate web search
    try {
      const webSearchResults = await searchWebRecipes(query);
      setWebResults(webSearchResults);
    } catch (error) {
      console.error('Web search failed:', error);
    }
    setIsWebSearching(false);

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 500));

    // Filter recipes based on query
    let filteredRecipes = filterRecipes(mockRecipes, query, newRestrictions);
    
    // If no exact matches, return all recipes as suggestions
    if (filteredRecipes.length === 0) {
      filteredRecipes = mockRecipes;
    }

    setRecipes(filteredRecipes);
    setIsLoading(false);
  }, []);

  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort);
  };

  const handleChatMessage = async (message: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: message,
      timestamp: new Date()
    };
    setChatMessages(prev => [...prev, userMessage]);

    // Update restrictions based on chat
    const lowerMessage = message.toLowerCase();
    let newRestrictions = [...restrictions];
    
    if (lowerMessage.includes('不要') || lowerMessage.includes('不放') || lowerMessage.includes('不想')) {
      const words = message.split(/[不要不放不想]+/).slice(1);
      words.forEach(word => {
        const cleanWord = word.replace(/[，,。了的]/g, '').trim().split(/\s+/)[0];
        if (cleanWord && !newRestrictions.includes(cleanWord)) {
          newRestrictions.push(cleanWord);
        }
      });
    }
    
    setRestrictions(newRestrictions);

    // Simulate AI response
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Re-filter recipes
    let filteredRecipes = filterRecipes(mockRecipes, currentQuery, newRestrictions);
    if (filteredRecipes.length === 0) {
      filteredRecipes = mockRecipes.filter(r => 
        !newRestrictions.some(restriction => 
          r.name.toLowerCase().includes(restriction.toLowerCase()) ||
          r.ingredients.some(ing => ing.name.toLowerCase().includes(restriction.toLowerCase()))
        )
      );
    }
    setRecipes(filteredRecipes);

    const assistantMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: `好的，我已经根据你的要求"${message}"更新了食谱推荐。${
        newRestrictions.length > 0 
          ? `现在排除了包含${newRestrictions.join('、')}的食谱。` 
          : ''
      }找到了 ${filteredRecipes.length} 个符合条件的食谱。`,
      timestamp: new Date()
    };
    setChatMessages(prev => [...prev, assistantMessage]);
  };

  const sortedRecipes = [...recipes].sort((a, b) => {
    switch (sortBy) {
      case 'fastest':
        return a.cookingTime - b.cookingTime;
      case 'lowest_calorie':
        return a.nutrition.calories - b.nutrition.calories;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-wood-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-spice-400 to-spice-600 flex items-center justify-center shadow-md">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">食谱探索</h1>
              <p className="text-xs text-wood-500">发现你的下一道美味</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section - Show when no search */}
        {!hasSearched && (
          <div className="text-center py-12 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-wood-800 mb-4 font-display">
              想吃什么？
              <span className="gradient-text"> 告诉我</span>
            </h2>
            <p className="text-lg text-wood-600 max-w-2xl mx-auto mb-8">
              用自然语言描述你想吃的，我来帮你找到完美的食谱。
              <br />
              可以说口味、做法、食材，甚至是你不想吃的东西！
            </p>
          </div>
        )}

        {/* Search Input */}
        <div className={`mb-12 ${hasSearched ? 'pt-4' : ''}`}>
          <SearchInput 
            onSearch={handleSearch} 
            isLoading={isLoading}
            placeholder={hasSearched ? "换个口味？继续搜索..." : undefined}
          />
        </div>

        {/* Results Section */}
        {hasSearched && (
          <div className="animate-fade-in">
            {/* Restrictions Display */}
            {restrictions.length > 0 && (
              <div className="mb-6 flex items-center gap-2 flex-wrap">
                <span className="text-sm text-wood-500">已排除：</span>
                {restrictions.map((r, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm border border-red-100"
                  >
                    🚫 {r}
                  </span>
                ))}
              </div>
            )}

            {/* Web Search Results */}
            <WebSearchResults results={webResults} isLoading={isWebSearching} />

            {/* Sort Tabs */}
            {recipes.length > 0 && (
              <SortTabs 
                currentSort={sortBy}
                onSortChange={handleSortChange}
                recipeCount={recipes.length}
              />
            )}

            {/* Recipe Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white rounded-2xl h-96 animate-pulse">
                    <div className="h-48 bg-wood-100 rounded-t-2xl" />
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-wood-100 rounded w-3/4" />
                      <div className="h-3 bg-wood-100 rounded w-full" />
                      <div className="h-3 bg-wood-100 rounded w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : recipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedRecipes.map((recipe, index) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onClick={() => setSelectedRecipe(recipe)}
                    delay={index * 100}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-wood-100 flex items-center justify-center">
                  <span className="text-4xl">🍳</span>
                </div>
                <h3 className="text-xl font-semibold text-wood-700 mb-2">
                  没有找到匹配的食谱
                </h3>
                <p className="text-wood-500">
                  试试换个关键词，或者放宽一些限制条件
                </p>
              </div>
            )}
          </div>
        )}

        {/* Empty State */}
        {!hasSearched && (
          <div className="text-center py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { emoji: '🍜', label: '面食' },
                { emoji: '🥗', label: '沙拉' },
                { emoji: '🍲', label: '汤羹' },
                { emoji: '🍰', label: '甜点' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 bg-white/50 rounded-2xl border border-wood-100 hover:border-spice-200 hover:bg-white transition-all cursor-pointer"
                  onClick={() => handleSearch(item.label)}
                >
                  <span className="text-4xl mb-2 block">{item.emoji}</span>
                  <span className="text-wood-600 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}

      {/* Chat Refine */}
      {hasSearched && recipes.length > 0 && (
        <ChatRefine
          messages={chatMessages}
          onSendMessage={handleChatMessage}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default App;

