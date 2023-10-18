import { Button, Dropdown, Option, DropdownProps, Switch } from "@fluentui/react-components";
import { DrawerBody, DrawerHeader, DrawerHeaderTitle, DrawerInline } from "@fluentui/react-components/unstable";
import { Dismiss24Regular } from "@fluentui/react-icons";
import "./settings-drawer.style.scss";
import { SettingsDrawerContext, SettingsDrawerState } from "./settings-drawer.context";
import { useContext, useId } from "react";
import { ThemeContext, ThemeMode } from "@/theme/theme-context";

export default function HeaderSettingsDrawer(props: Partial<DropdownProps>): JSX.Element {
  const { state, toggleState } = useContext(SettingsDrawerContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeDropdownId = useId();

  const themeOptions: { [key in ThemeMode]: string } = {
    [ThemeMode.Default]: "Browser default",
    [ThemeMode.Light]: "Light Theme",
    [ThemeMode.Dark]: "Dark Theme",
  };

  const options = Object.keys(ThemeMode).map((key) => ({
    key: key as ThemeMode,
    text: themeOptions[key.toLowerCase() as ThemeMode],
  }));

  const onThemeSelected: (typeof props)["onOptionSelect"] = (_, data) => {
    if (data.selectedOptions.length == 0) return;

    // HACK: This is a hack to get the selected theme from the dropdown, as the optionKey or selectedOptions doesn't seem to actually return the key value
    const selectedTheme = Object.keys(themeOptions).find((key) => themeOptions[key as ThemeMode] === data.optionText) as ThemeMode;

    toggleTheme(selectedTheme);
  };

  return (
    <DrawerInline open={state == SettingsDrawerState.Open} position="end" id="settings-drawer">
      <DrawerHeader>
        <DrawerHeaderTitle action={<Button appearance="subtle" aria-label="Close" icon={<Dismiss24Regular />} onClick={toggleState} />}>
          Settings
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody>
        <div className="setting-field">
          <label id={themeDropdownId}>Current theme</label>
          <Dropdown
            aria-labelledby={themeDropdownId}
            placeholder="Select a theme"
            value={themeOptions[theme]}
            selectedOptions={[themeOptions[theme]]}
            onOptionSelect={onThemeSelected}
          >
            {options.map((option) => {
              return <Option key={option.key.toLowerCase()}>{option.text}</Option>;
            })}
          </Dropdown>
        </div>
      </DrawerBody>
    </DrawerInline>
  );
}
