import qs from "qs";
import { useEffect, useState } from "react";
import { chance } from "./chance";
import { makeDataURL } from "./Tile";

export function App(props: any) {
  const [colors, setColors] = useState(["#DA97B2", "#7EBCBE", "#676396"]);

  const [layout, setLayout] = useState("");

  const [background, setBackground] = useState(
    chance.pickone(["#111111", "#EEEEEE"])
  );
  const [font, setFont] = useState(
    "https://thatsmyblankie.wpengine.com/wp-content/themes/picostrap-child/fonts/customiser/UnicornsareAwesome.woff2"
  );
  const [text, setText] = useState(props.text ?? chance.first());

  const [src, setSrc] = useState<any>(null);

  useEffect(() => {
    (async () => {
      setSrc(
        await makeDataURL({
          background,
          colors,
          text,
          font,
          layout,
        })
      );
    })();
  }, []);

  // const src = `https://cdn.make.cm/make/s/MeJxBCL1tTQQ?${qs.stringify({
  //   data: {
  //     background,
  //     colors,
  //     font,
  //     text,
  //   },
  // })}`;

  return (
    <>
      <div>
        <label>Layout</label>
        <input value={layout} onChange={(e) => setLayout(e.target.value)} />
      </div>
      <div>
        <label>Font</label>
        <input value={font} onChange={(e) => setFont(e.target.value)} />
      </div>
      <div>
        <label>Text</label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <label>Background</label>
        <input
          value={background}
          onChange={(e) => setBackground(e.target.value)}
        />
      </div>
      <div>
        <label>Colors</label>
        <input
          value={JSON.stringify(colors)}
          onChange={(e) => setColors(JSON.parse(e.target.value))}
        />
      </div>
      <div>{src ? <img src={src} /> : null}</div>
      {/* <div>
        <a
          href={`https://cdn.make.cm/make/s/LAs9Ky5L4Y98?${qs.stringify({
            data: {
              background,
              colors,
              font,
              text,
            },
          })}`}
        >
          PDF
        </a>
      </div> */}
    </>
  );
}

// useEffect(() => {
//   (async () => {

//   })();
// }, []);
// return (
//   <>
//     {pdf ? <img src="./pdf.svg" alt="" /> : null}
//     {svg ? (
//       <svg viewBox="0 0 512 512" style={{ width: 512, height: 512 }}>
//         <text x="50%" y="50%" style={{ fontSize: "72px" }}>
//           Test
//         </text>
//         <rect
//           x="0"
//           y="0"
//           width="512"
//           height="512"
//           fill="none"
//           stroke="hotpink"
//         ></rect>
//       </svg>
//     ) : null}
//   </>
// );

// {/* {tile ? (
//         <div style={{ display: "flex" }}>
//           <div
//             style={{ width: 512, height: 512 }}
//             dangerouslySetInnerHTML={{
//               __html: (() => tile.toSVG())(),
//             }}
//           ></div>
//           <img src={(() => tile.toDataURL())()} alt="" />
//         </div>
//       ) : null} */}

//       {/* <div style={{ display: "flex" }}>
//         {!LIMIT ? (
//           <img
//             src={`https://cdn.make.cm/make/t/ba4c9684-a7af-4ca3-b929-291d6c196be3/k/639f5a8a-3056-48ff-bc67-c7613b9ecdca.b6d6a70ce98c5defcbc0282c9660dbc9/sync?${qs.stringify(
//               {
//                 format: "png",
//                 customSize: {
//                   width: "512",
//                   height: "512",
//                   unit: "px",
//                 },
//                 data: {
//                   canvas: true,
//                 },
//                 fetchedAt: new Date().getTime().toString(),
//               }
//             )}`}
//           />
//         ) : null}
//       </div> */}

// const [tile, setTile] = useState<Tile | null>(null);

// useEffect(() => {
//   const worker = new Worker();
//   const api = Comlink.wrap<any>(worker);
//   const font = "Dancing Script";
//   const fontSize = fit({
//     fontFamily: font,
//     text,
//   });

//   const metrics = measure({ font: `${fontSize}px ${font}`, text });
//   const props = {
//     background: chance.pickone(["#111111", "#EEEEEE"]),
//     colors: ["#DA97B2", "#7EBCBE", "#676396"],
//     font,
//     text,
//     metrics: {
//       actualBoundingBoxAscent: metrics.actualBoundingBoxAscent,
//       actualBoundingBoxDescent: metrics.actualBoundingBoxDescent,
//       actualBoundingBoxLeft: metrics.actualBoundingBoxLeft,
//       actualBoundingBoxRight: metrics.actualBoundingBoxRight,
//       fontBoundingBoxAscent: metrics.fontBoundingBoxAscent,
//       fontBoundingBoxDescent: metrics.fontBoundingBoxDescent,
//       width: metrics.width,
//     },
//     fontSize,
//   };
//   (async () => {
//     const tile = new Tile(await api.tile(props));
//     setTile(tile);
//   })();
// }, [text]);
