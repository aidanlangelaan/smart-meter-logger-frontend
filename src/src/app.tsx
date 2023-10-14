import "@css/app.scss";
import { RouterProvider } from "react-router";
import AppRouter from "./app-router";

function App(): JSX.Element | null {
  return <RouterProvider router={AppRouter()} fallbackElement={<>Loading...</>} />;
}

export default App;
