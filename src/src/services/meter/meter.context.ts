import { createContext } from "react";
import { GetMeterViewModel } from "./models";

interface MeterContextType {
  meters: GetMeterViewModel[];
}

export const MeterContext = createContext<MeterContextType>({
  meters: [],
});
