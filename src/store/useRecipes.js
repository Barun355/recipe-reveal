import { create } from "zustand";

const useRecipes = create((set) => ({
  recipes: [],
  groups: [],
  getFeaturedRecipes: () => {
    let featuredRecipes = [];
    set((prev) => {
      const localRecipes = prev.recipes;
      featuredRecipes = localRecipes
        .filter((recipe) => recipe.isFeatured)
        .slice(0, 6);
      return prev;
    });
    return featuredRecipes;
  },
  getHighProteinRecipeByTime: () => {
    const hour = new Date().getHours();
    // timeOfDay == 'morning' | 'afternoon' | 'evening' | 'night'
    let timeOfDay;

    if (hour >= 5 && hour < 12) {
      timeOfDay = "morning";
    } else if (hour >= 12 && hour < 17) {
      timeOfDay = "afternoon";
    } else if (hour >= 17 && hour < 21) {
      timeOfDay = "evening";
    } else {
      timeOfDay = "night";
    }

    let timeBasedRecipes;

    set((prev) => {
      const localRecipes = prev.recipes;
      timeBasedRecipes = localRecipes.filter(
        (recipe) => recipe.isHighProtein && recipe.timeOfDay === timeOfDay
      );
      timeBasedRecipes =
        timeBasedRecipes[0] || localRecipes.filter((r) => r.isHighProtein)[0];
      return prev;
    });

    return timeBasedRecipes;
  },
  setRecipes: (recipes) => set({ recipes }),
  setGroups: (groups) => set({ groups }),
}));

export default useRecipes;
