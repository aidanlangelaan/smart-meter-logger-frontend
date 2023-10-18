import "./header.style.scss";

import { Avatar, Button } from "@fluentui/react-components";
import { Settings24Regular } from "@fluentui/react-icons";

import { MouseEventHandler, useContext } from "react";
import { SettingsDrawerContext } from "../settings-drawer/settings-drawer.context";

export default function LayoutHeader(props: { onMenuButtonClick: MouseEventHandler }): JSX.Element {
  const { onMenuButtonClick } = props;

  var settingsDrawerContext = useContext(SettingsDrawerContext);

  return (
    <header id="header-bar">
      <nav className="flex-container">
        <div className="flex-container left">
          {/* <Button icon={<GridDots24Filled />} onClick={onMenuButtonClick} /> */}
          <div id="menu-button">&nbsp;</div>
          <div id="logo">Smart Meter Logger</div>
        </div>

        <div className="flex-container right">
          <Button id="settings-button" title="Settings" onClick={settingsDrawerContext.toggleState}>
            <Settings24Regular />
          </Button>
          <Button title="Account">
            <Avatar name="Aidan Langelaan" color="brand" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
