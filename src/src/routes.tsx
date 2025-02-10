import { Home24Filled, Home24Regular } from "@fluentui/react-icons";
import { RouteObject } from "react-router-dom";
import NotFoundPage from "./pages/not-found/not-found";
import Layout from "./components/layout/layout";
import HomePage from "./pages/home/home";

const AppRoutes = (): RouteObject[] => [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout outlet={<NotFoundPage />} />,
    children: [
      {
        index: true,
        element: <HomePage />,
        handle: {
          title: () => "Home",
          icon: () => <Home24Regular />,
          activeIcon: () => <Home24Filled />,
          displayInSidebar: true,
        },
      },
    ],
  },
];

export default AppRoutes;
