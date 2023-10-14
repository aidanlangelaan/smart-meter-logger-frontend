import { createContext } from "react";

export enum ThemeMode {
  Default = "default",
  Light = "light",
  Dark = "dark",
}

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: (theme: ThemeMode) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeMode.Default,
  toggleTheme: () => {},
});
