import { Clock, Flame, Sparkles } from 'lucide-react';
import { SortOption } from '../types';

interface SortTabsProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
  recipeCount: number;
}

export function SortTabs({ currentSort, onSortChange, recipeCount }: SortTabsProps) {
  const tabs = [
    { id: 'recommended' as SortOption, label: '推荐', icon: Sparkles },
    { id: 'fastest' as SortOption, label: '最快手', icon: Clock },
    { id: 'lowest_calorie' as SortOption, label: '最低卡', icon: Flame },
  ];

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-1 bg-white/60 backdrop-blur-sm rounded-xl p-1 border border-wood-100 shadow-sm">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentSort === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onSortChange(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-spice-500 to-spice-600 text-white shadow-md'
                  : 'text-wood-600 hover:bg-white hover:text-spice-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>
      
      <div className="text-wood-500 text-sm">
        找到 <span className="font-semibold text-spice-600">{recipeCount}</span> 个食谱
      </div>
    </div>
  );
}

