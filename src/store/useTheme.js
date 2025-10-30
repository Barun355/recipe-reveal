import { create } from "zustand";

const useTheme = create((set) => ({
  darkMode: false,
  toggleDarkMode: () =>
    set((state) => {
      const html = document.documentElement;
      if (state.darkMode) {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
      
      return { darkMode: !state.darkMode };
    }),
  setTheme: (isDark) => set(state => ({ darkMode: !isDark })),
  isLocalThemeDark: () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      return theme === "dark";
    } else {
      return false;
    }
  },
}));

export default useTheme;
