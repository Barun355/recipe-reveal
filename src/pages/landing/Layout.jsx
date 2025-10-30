import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect } from "react";
import useTheme from "../../store/useTheme";

const LandingLayout = () => {
  const { setTheme, isLocalThemeDark } = useTheme();
  useEffect(() => {
    if (isLocalThemeDark()) {
      document.documentElement.classList.add("dark");
      setTheme(false);
    } else {
      document.documentElement.classList.remove("dark");
      setTheme(true);
    }
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
