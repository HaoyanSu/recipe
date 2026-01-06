import { Clock, Flame, Users, ChevronRight } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
  delay?: number;
}

export function RecipeCard({ recipe, onClick, delay = 0 }: RecipeCardProps) {
  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '简单';
      case 'medium': return '中等';
      case 'hard': return '困难';
      default: return difficulty;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-herb-100 text-herb-700';
      case 'medium': return 'bg-spice-100 text-spice-700';
      case 'hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div
      onClick={onClick}
      className="recipe-card group bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer border border-wood-100"
      style={{ 
        animationDelay: `${delay}ms`,
        animation: 'slideUp 0.5s ease-out forwards',
        opacity: 0
      }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.imageUrl}
          alt={recipe.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
        
        {/* Floating badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
            {getDifficultyLabel(recipe.difficulty)}
          </span>
        </div>
        
        {/* Cooking time badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-xs font-medium">
          <Clock className="w-3.5 h-3.5" />
          {recipe.cookingTime}分钟
        </div>

        {/* Recipe name overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white text-xl font-bold drop-shadow-lg">
            {recipe.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Description */}
        <p className="text-wood-600 text-sm line-clamp-2 mb-4">
          {recipe.description}
        </p>

        {/* Stats Row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-spice-600">
              <Flame className="w-4 h-4" />
              <span className="text-sm font-semibold">{recipe.nutrition.calories} 卡</span>
            </div>
            <div className="flex items-center gap-1.5 text-wood-500">
              <Users className="w-4 h-4" />
              <span className="text-sm">{recipe.servings}人份</span>
            </div>
          </div>
        </div>

        {/* Nutrition Mini Bar */}
        <div className="flex gap-3 mb-4">
          <NutrientMini label="蛋白质" value={recipe.nutrition.protein} max={50} color="bg-herb-500" />
          <NutrientMini label="碳水" value={recipe.nutrition.carbs} max={80} color="bg-spice-500" />
          <NutrientMini label="脂肪" value={recipe.nutrition.fat} max={40} color="bg-yellow-500" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {recipe.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-cream-100 text-wood-600 rounded-md text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-cream-100 to-spice-50 hover:from-spice-100 hover:to-spice-100 text-spice-700 rounded-xl font-medium transition-all duration-300 group-hover:shadow-md">
          查看详情
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

function NutrientMini({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const percentage = Math.min((value / max) * 100, 100);
  
  return (
    <div className="flex-1">
      <div className="flex justify-between text-xs text-wood-500 mb-1">
        <span>{label}</span>
        <span>{value}g</span>
      </div>
      <div className="h-1.5 bg-wood-100 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

