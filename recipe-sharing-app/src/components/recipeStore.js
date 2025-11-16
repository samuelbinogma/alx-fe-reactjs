import { create } from 'zustand'

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  selectedIngredients: [],
  maxPrepTime: null,
  favorites: [],
  recommendations: [],

    // Actions
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  updateRecipe: (id, data) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...data } : r)),
    })),

  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  setSearchTerm: (term) => set({ searchTerm: term }),

  setSelectedIngredients: (ingredients) =>
    set({ selectedIngredients: ingredients }),

  setMaxPrepTime: (time) => set({ maxPrepTime: time }),

  addFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  toggleFavorite: (recipeId) =>
    set((state) => {
      const isFavorite = state.favorites.includes(recipeId);
      return {
        favorites: isFavorite
          ? state.favorites.filter((id) => id !== recipeId)
          : [...state.favorites, recipeId],
      };
    }),

  // Recommendations
  generateRecommendations: () => {
    const state = get();
    const { recipes, favorites } = state;

    if (favorites.length === 0) {
      // Show random popular recipes
      const shuffled = [...recipes].sort(() => 0.5 - Math.random());
      return { recommendations: shuffled.slice(0, 3) };
    }

    // Recommend recipes with similar ingredients
    const favoriteRecipes = favorites.map((id) =>
      recipes.find((r) => r.id === id)
    ).filter(Boolean);

    const favoriteIngredients = new Set();
    favoriteRecipes.forEach((r) => {
      r.ingredients?.forEach((ing) => favoriteIngredients.add(ing.toLowerCase()));
    });

    const scored = recipes
      .filter((r) => !favorites.includes(r.id)) // exclude already favorited
      .map((r) => {
        let matchCount = 0;
        r.ingredients?.forEach((ing) => {
          if (favoriteIngredients.has(ing.toLowerCase())) matchCount++;
        });
        return { recipe: r, score: matchCount };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.recipe);

    return { recommendations: scored.length > 0 ? scored : [] };
  },

  // Computed: filtered recipes
  filteredRecipes: () => {
    const state = get();
    let filtered = state.recipes;

    // 1. Search by title
    if (state.searchTerm) {
      const term = state.searchTerm.toLowerCase();
      filtered = filtered.filter((r) =>
        r.title.toLowerCase().includes(term)
      );
    }

    // 2. Filter by ingredients (must include ALL selected)
    if (state.selectedIngredients.length > 0) {
      filtered = filtered.filter((r) =>
        state.selectedIngredients.every((ing) =>
          r.ingredients?.some((i) => i.toLowerCase().includes(ing.toLowerCase()))
        )
      );
    }

    // 3. Filter by max prep time
    if (state.maxPrepTime !== null && state.maxPrepTime > 0) {
      filtered = filtered.filter((r) => (r.prepTime || 0) <= state.maxPrepTime);
    }

    return filtered;
  },
}));