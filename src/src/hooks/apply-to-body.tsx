import { ThemeContext, ThemeMode } from "@/theme/theme-context";
import { useContext, useEffect } from "react";

export default function ApplyToBody(): JSX.Element {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.remove(ThemeMode.Default, ThemeMode.Light, ThemeMode.Dark);
    document.body.classList.add(themeContext.theme);
  }, [themeContext.theme]);

  return <></>;
}
