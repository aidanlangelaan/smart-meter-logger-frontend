import LayoutHeader from "./header/header";
import LayoutSidebar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { localStorageProvider } from "@/utility/local-storage-provider";
import SetPageTitle from "@/hooks/set-page-title";
import "./layout.style.scss";
import HeaderSettingsDrawer from "./settings-drawer/settings-drawer";
import { SettingsDrawerContext, SettingsDrawerState } from "./settings-drawer/settings-drawer.context";

interface ILayout {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  outlet?: any;
}

export default function Layout(props: ILayout): JSX.Element {
  const [menuMode, setMenuMode] = useState("collapsed");
  const [settingsDrawerState, setSettingsDrawerState] = useState(SettingsDrawerState.Closed);

  const selectedMenuMode = localStorageProvider<string | undefined>("menuMode");

  useEffect(() => {
    const mode = selectedMenuMode.get();
    if (mode) setMenuMode(mode);
  }, [selectedMenuMode]);

  const toggleMenuMode = () => {
    const mode = menuMode == "collapsed" ? "open" : "collapsed";
    selectedMenuMode.set(mode);
    setMenuMode(mode);
  };

  const toggleSettingsDrawerState = () => {
    const toggleState = settingsDrawerState == SettingsDrawerState.Closed ? SettingsDrawerState.Open : SettingsDrawerState.Closed;
    setSettingsDrawerState(toggleState);
  };

  return (
    <div>
      <SetPageTitle />

      <SettingsDrawerContext.Provider value={{ state: settingsDrawerState, toggleState: toggleSettingsDrawerState }}>
        <LayoutHeader onMenuButtonClick={toggleMenuMode} />
        <div id="page-container">
          <LayoutSidebar menuMode={menuMode} />
          {/* hack to allow error page be rendered inside the layout
            		https://github.com/remix-run/react-router/discussions/9553#discussioncomment-4907035 */}
          <div id="content-container">
            {props.outlet ? props.outlet : <Outlet />}

            <HeaderSettingsDrawer />
          </div>
        </div>
      </SettingsDrawerContext.Provider>
    </div>
  );
}
