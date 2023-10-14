import { createBrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const AppRouter = () => {
  const routes = AppRoutes();
  return createBrowserRouter(routes);
};

export default AppRouter;
