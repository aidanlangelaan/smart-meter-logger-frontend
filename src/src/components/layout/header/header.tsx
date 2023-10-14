import "./header.style.scss";

import { Avatar, Button } from "@fluentui/react-components";
import { GridDots24Filled, Settings24Regular } from "@fluentui/react-icons";

import { MouseEventHandler } from "react";

export default function LayoutHeader(props: { onMenuButtonClick: MouseEventHandler }): JSX.Element {
  const { onMenuButtonClick } = props;

  return (
    <header>
      <nav className="flex-container">
        <div className="flex-container left">
          {/* <Button icon={<GridDots24Filled />} onClick={onMenuButtonClick} /> */}
          <div id="menu-button">&nbsp;</div>
          <div id="logo">Smart Meter Logger</div>
        </div>

        <div className="flex-container right">
          <Button id="settings-button" title="Settings">
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
