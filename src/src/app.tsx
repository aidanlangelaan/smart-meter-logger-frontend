import "@css/app.scss";
import { RouterProvider } from "react-router";
import AppRouter from "./app-router";
import { useMemo, useState } from "react";
import { MeterContext } from "./services/meter/meter.context";
import { MeterService } from "./services/meter/meter-service";

function App(): JSX.Element | null {
  const [state, setState] = useState<any>({});

  useMemo(() => {
    const meterService = new MeterService();

    meterService.getMeters().then((data) => {
      setState({ ...state, meters: data });
    });

    console.log("App: useMemo");
  }, []);

  return (
    <MeterContext.Provider value={state}>
      <RouterProvider router={AppRouter()} fallbackElement={<>Loading...</>} />
    </MeterContext.Provider>
  );
}

export default App;
