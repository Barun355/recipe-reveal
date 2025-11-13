import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing";
import ErrorPage from "./pages/Error";
import LandingLayout from "./pages/landing/Layout";
import { RecipeDetailPage } from "./pages/landing/RecipeDetailPage";
import { RecipesPage } from "./pages/landing/Recipes";
import VerifyEmailPage from "./pages/verify-email";
import { SignupPage } from "./pages/sign-up";
import { LoginPage } from "./pages/login-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/recipes",
        element: <RecipesPage />,
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetailPage />,
      },
    ],
  },
  {
    path: "/verify-email",
    element: <VerifyEmailPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
