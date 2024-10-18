import Home from "@/app/(landing-page)/page";
import ErrorPage from "@/error/page";
import { Eno_Routes } from "@/store/route";
import { createBrowserRouter } from "react-router-dom";
import LandingPageLayout from "@/app/(landing-page)/layout";
import AboutPage from "@/app/(landing-page)/about/page";

export const router = createBrowserRouter([
  {
    element: <LandingPageLayout />,
    children: [
      {
        path: Eno_Routes.home,
        element: <Home />,
      },
      {
        path: Eno_Routes.about,
        element: <AboutPage />,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);
