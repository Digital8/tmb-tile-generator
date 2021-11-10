import qs from "qs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";
import { fit, measure, Tile } from "./Tile";

const { templateProps = {} } = window as unknown as {
  templateProps: Record<string, any>;
};

if (window.location.search.length > 1) {
  const parsed = qs.parse(window.location.search.slice(1));
  Object.assign(templateProps, parsed);
}

if (templateProps.svg) {
  (async () => {
    const { text, background, colors, layout } = templateProps;
    const url =
      templateProps.font ??
      "https://thatsmyblankie.wpengine.com/wp-content/themes/picostrap-child/fonts/customiser/UnicornsareAwesome.woff2";
    const fontFamily = "blankie";
    const fontFace = new FontFace(fontFamily, `url("${url}")`);
    await fontFace.load();
    document.fonts.add(fontFace);
    const fontSize = fit({
      fontFamily,
      text,
    });
    const metrics = measure({ font: `${fontSize}px ${fontFamily}`, text });
    const tile = new Tile({
      font: fontFamily,
      text,
      metrics,
      fontSize,
      background,
      colors,
      layout,
    });
    const div = document.createElement("div");
    if (templateProps.debug) {
      div.innerText = JSON.stringify(templateProps);
    } else {
      div.innerHTML = tile.toSVG();
    }
    document.body.appendChild(div);
  })();
} else if (templateProps.pdf) {
  const img = document.createElement("img");
  img.src = `https://cdn.make.cm/make/t/ba4c9684-a7af-4ca3-b929-291d6c196be3/k/639f5a8a-3056-48ff-bc67-c7613b9ecdca.b6d6a70ce98c5defcbc0282c9660dbc9/sync?${qs.stringify(
    {
      format: "svg",
      customSize: {
        width: "512",
        height: "512",
        unit: "px",
      },
      data: {
        ...templateProps,
        pdf: false,
        svg: true,
      },
      fetchedAt: new Date().getTime().toString(),
    }
  )}`;
  document.body.appendChild(img);
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App {...templateProps} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

// console.log(
//   qs.stringify(
//     {
//       background: chance.pickone(["#111111", "#EEEEEE"]),
//       colors: ["#DA97B2", "#7EBCBE", "#676396"],
//     },
//     { encodeValuesOnly: true }
//   )
// );
