import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect } from "react";
import useTheme from "../../store/useTheme";
import useRecipes from "../../store/useRecipes";
import { getAllRecipes, getCategoryGroup } from "../../service/appwrite";

const LandingLayout = () => {
  const { setTheme, isLocalThemeDark } = useTheme();
  const { setRecipes, setGroups } = useRecipes();

  useEffect(() => {
    if (isLocalThemeDark()) {
      document.documentElement.classList.add("dark");
      setTheme(false);
    } else {
      document.documentElement.classList.remove("dark");
      setTheme(true);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const recipes = await getAllRecipes();
      if (recipes.length > 0) {
        setRecipes(recipes);
      }

      const groups = await getCategoryGroup();
      console.log("groups: ", groups)
      if (groups.length > 0) {
        setGroups(groups)
      }
    })();
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)" }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingLayout;
