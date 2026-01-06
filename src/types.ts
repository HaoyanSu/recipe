export interface Ingredient {
  name: string;
  amount: string;
  unit: string;
  calories?: number;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface CookingStep {
  step: number;
  description: string;
  duration?: number; // in minutes
  imageUrl?: string;
  tips?: string;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  cookingTime: number; // in minutes
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  ingredients: Ingredient[];
  steps: CookingStep[];
  nutrition: NutritionInfo;
  tags: string[];
  source?: string;
  sourceUrl?: string;
}

export interface SearchQuery {
  text: string;
  preferences: string[];
  restrictions: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  recipes?: Recipe[];
}

export type SortOption = 'fastest' | 'lowest_calorie' | 'recommended';

export interface AppState {
  recipes: Recipe[];
  selectedRecipe: Recipe | null;
  sortBy: SortOption;
  isLoading: boolean;
  chatHistory: ChatMessage[];
}

