import { FluentProvider, FluentProviderProps } from "@fluentui/react-components";
import { useEffect, useState } from "react";
import { ThemeContext, ThemeMode } from "./theme-context";
import { themes } from "./themes";
import { localStorageProvider } from "@/utility/local-storage-provider";

const getBrowserDefault = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const userDefaultPreferredThemeMode = () => ThemeMode.Light; //(getBrowserDefault() ? ThemeMode.Dark : ThemeMode.Light); // TODO: Fix this

export const ThemeProvider = (props: FluentProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.Default);

  const selectedTheme = localStorageProvider<string | undefined>("theme");

  useEffect(() => {
    const theme = selectedTheme.get();
    if (theme) {
      setTheme(theme as ThemeMode);
    } else {
      setTheme(userDefaultPreferredThemeMode());
    }
  }, [selectedTheme]);

  const toggleTheme = (theme: ThemeMode) => {
    if (theme === ThemeMode.Default) {
      theme = userDefaultPreferredThemeMode();
    }

    setTheme(theme);
    selectedTheme.set(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <FluentProvider theme={theme == ThemeMode.Light ? themes.light : themes.dark}>{props.children}</FluentProvider>
    </ThemeContext.Provider>
  );
};
