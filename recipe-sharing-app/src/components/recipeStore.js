import { create } from 'zustand'

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  selectedIngredients: [],
  maxPrepTime: null,

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