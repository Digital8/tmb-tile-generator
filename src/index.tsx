import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { chance } from "./chance";
import "./index.css";
import { Tile } from "./Tile";

const { templateProps = {} } = window as unknown as {
  templateProps: Record<string, any>;
};

if (templateProps.canvas) {
  // const tile = Tile.create({
  //   background: chance.pickone(["#111111", "#EEEEEE"]),
  //   colors: ["#DA97B2", "#7EBCBE", "#676396"],
  //   font: "Dancing Script",
  //   text: chance.first(),
  // });
  // document.body.appendChild(tile.toCanvas());
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App {...templateProps} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
