import { createContext } from "react";

export enum SettingsDrawerState {
  Closed = "closed",
  Open = "open",
}

interface SettingsDrawerContextType {
  state: SettingsDrawerState;
  toggleState: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const SettingsDrawerContext = createContext<SettingsDrawerContextType>({
  state: SettingsDrawerState.Closed,
  toggleState: () => {},
});
