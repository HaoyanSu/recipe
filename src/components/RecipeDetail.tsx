import { useState, useRef, useEffect } from 'react';
import { X, Clock, Flame, Users, ChevronLeft, ChevronRight, ExternalLink, Lightbulb } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeDetailProps {
  recipe: Recipe;
  onClose: () => void;
}

export function RecipeDetail({ recipe, onClose }: RecipeDetailProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && currentStep > 0) setCurrentStep(currentStep - 1);
      if (e.key === 'ArrowRight' && currentStep < recipe.steps.length - 1) setCurrentStep(currentStep + 1);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, recipe.steps.length, onClose]);

  // Scroll to current step
  useEffect(() => {
    if (stepsContainerRef.current) {
      const stepElement = stepsContainerRef.current.children[currentStep] as HTMLElement;
      if (stepElement) {
        stepElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [currentStep]);

  const goToPrevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const goToNextStep = () => {
    if (currentStep < recipe.steps.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="fixed inset-0 z-50 modal-overlay">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="absolute inset-4 md:inset-8 lg:inset-12 bg-cream-50 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header with Image */}
        <div className="relative h-64 md:h-80 flex-shrink-0">
          <img
            src={recipe.imageUrl}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Recipe Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-display">
              {recipe.name}
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
              {recipe.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">{recipe.cookingTime} 分钟</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white">
                <Flame className="w-4 h-4" />
                <span className="text-sm font-medium">{recipe.nutrition.calories} 卡路里</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">{recipe.servings} 人份</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 md:p-8">
            {/* Two Column Layout */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column - Ingredients & Nutrition */}
              <div className="md:col-span-1 space-y-6">
                {/* Ingredients */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-wood-100">
                  <h3 className="text-lg font-semibold text-wood-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🥘</span>
                    食材清单
                  </h3>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center justify-between py-2 border-b border-wood-50 last:border-0">
                        <span className="text-wood-700">{ingredient.name}</span>
                        <span className="text-wood-500 text-sm">
                          {ingredient.amount} {ingredient.unit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nutrition */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-wood-100">
                  <h3 className="text-lg font-semibold text-wood-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    营养成分
                  </h3>
                  <div className="space-y-4">
                    <NutrientBar label="热量" value={recipe.nutrition.calories} unit="卡" max={800} color="from-spice-400 to-spice-600" />
                    <NutrientBar label="蛋白质" value={recipe.nutrition.protein} unit="g" max={50} color="from-herb-400 to-herb-600" />
                    <NutrientBar label="碳水化合物" value={recipe.nutrition.carbs} unit="g" max={100} color="from-yellow-400 to-yellow-600" />
                    <NutrientBar label="脂肪" value={recipe.nutrition.fat} unit="g" max={50} color="from-purple-400 to-purple-600" />
                    <NutrientBar label="膳食纤维" value={recipe.nutrition.fiber} unit="g" max={20} color="from-teal-400 to-teal-600" />
                  </div>
                </div>

                {/* Source */}
                {recipe.source && (
                  <div className="bg-spice-50 rounded-2xl p-4 border border-spice-100">
                    <p className="text-sm text-spice-700">
                      <span className="font-medium">来源：</span> {recipe.source}
                    </p>
                    {recipe.sourceUrl && (
                      <a 
                        href={recipe.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-spice-600 hover:text-spice-700 mt-2"
                      >
                        查看原文 <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column - Steps */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-wood-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">👨‍🍳</span>
                  烹饪步骤
                </h3>

                {/* Step Indicators */}
                <div className="flex items-center gap-2 mb-6 overflow-x-auto hide-scrollbar pb-2">
                  {recipe.steps.map((step, index) => (
                    <button
                      key={step.step}
                      onClick={() => setCurrentStep(index)}
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                        index === currentStep
                          ? 'bg-spice-500 text-white scale-110 shadow-lg shadow-spice-200'
                          : index < currentStep
                          ? 'bg-herb-100 text-herb-700'
                          : 'bg-wood-100 text-wood-500 hover:bg-wood-200'
                      }`}
                    >
                      {index < currentStep ? '✓' : step.step}
                    </button>
                  ))}
                </div>

                {/* Step Cards Carousel */}
                <div className="relative">
                  {/* Navigation Buttons */}
                  <button
                    onClick={goToPrevStep}
                    disabled={currentStep === 0}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg transition-all ${
                      currentStep === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 hover:shadow-xl'
                    }`}
                  >
                    <ChevronLeft className="w-6 h-6 text-wood-600" />
                  </button>
                  
                  <button
                    onClick={goToNextStep}
                    disabled={currentStep === recipe.steps.length - 1}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg transition-all ${
                      currentStep === recipe.steps.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 hover:shadow-xl'
                    }`}
                  >
                    <ChevronRight className="w-6 h-6 text-wood-600" />
                  </button>

                  {/* Steps Container */}
                  <div 
                    ref={stepsContainerRef}
                    className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth px-8"
                  >
                    {recipe.steps.map((step, index) => (
                      <div
                        key={step.step}
                        className={`flex-shrink-0 w-full snap-center transition-all duration-300 ${
                          index === currentStep ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                        }`}
                      >
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-wood-100">
                          {/* Step Image */}
                          {step.imageUrl && (
                            <div className="relative h-48 md:h-64">
                              <img
                                src={step.imageUrl}
                                alt={`步骤 ${step.step}`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute top-4 left-4 px-3 py-1.5 bg-spice-500 text-white rounded-full text-sm font-semibold">
                                步骤 {step.step}
                              </div>
                              {step.duration && (
                                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white rounded-full text-sm">
                                  <Clock className="w-4 h-4" />
                                  {step.duration} 分钟
                                </div>
                              )}
                            </div>
                          )}

                          {/* Step Content */}
                          <div className="p-6">
                            <p className="text-wood-700 text-lg leading-relaxed mb-4">
                              {step.description}
                            </p>
                            
                            {step.tips && (
                              <div className="flex items-start gap-3 p-4 bg-herb-50 rounded-xl border border-herb-100">
                                <Lightbulb className="w-5 h-5 text-herb-600 flex-shrink-0 mt-0.5" />
                                <p className="text-herb-700 text-sm">
                                  <span className="font-semibold">小贴士：</span> {step.tips}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Progress */}
                <div className="mt-6 text-center text-wood-500 text-sm">
                  步骤 {currentStep + 1} / {recipe.steps.length}
                  <span className="ml-4 text-wood-400">使用 ← → 键切换步骤</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NutrientBar({ label, value, unit, max, color }: { 
  label: string; 
  value: number; 
  unit: string;
  max: number; 
  color: string;
}) {
  const percentage = Math.min((value / max) * 100, 100);
  
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-wood-600">{label}</span>
        <span className="font-medium text-wood-800">{value} {unit}</span>
      </div>
      <div className="h-2.5 bg-wood-100 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${color} rounded-full nutrition-bar`}
          style={{ '--fill-width': `${percentage}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

