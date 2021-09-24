import { haltonND, kroneckerND, plasticND } from "@thi.ng/lowdisc";
import { take } from "@thi.ng/transducers";
import boxIntersect from "box-intersect";
import { renderToStaticMarkup } from "react-dom/server";
// import { Chance } from "chance";

const RESOLUTION = 512;
// const chance = new Chance(1337);
// const random = () => chance.floating({ min: 0, max: 1 });
const random = Math.random;

export class Tile {
  text!: string;
  texts!: any[];
  fontSize!: number;
  gap!: number;
  fontFamily!: string;
  background!: string;
  metrics!: TextMetrics;
  constructor(props: {
    text: string;
    background: string;
    font: string;
    colors: string[];
    distribution?: "halton" | "kronecker" | "plastic";
    gap?: number;
    metrics: TextMetrics;
    texts?: any[];
    fontSize?: number;
  }) {
    if (props.texts) {
      Object.assign(this, props);
      return;
    }

    const {
      text,
      background,
      colors,
      distribution = "plastic",
      gap = 0.1,
      font: fontFamily,
      metrics,
      fontSize,
    } = props;

    // const fontSize = fit({
    //   fontFamily,
    //   text,
    // });

    const generator = {
      halton: haltonND.bind(null, [2, 3]),
      kronecker: kroneckerND.bind(null, [1 / 2 ** 0.5, 1 / 5 ** 0.5]),
      plastic: plasticND.bind(null, 2),
    }[distribution](0 ?? (random() * 1024) | 0);
    let texts = Array.from(take<any>(32, generator)).map(([x, y]) => {
      return {
        x: x * 2 - 1,
        y: y * 2 - 1,
        size: 0.75 + random() * 0.75,
        color: colors[(colors.length * random()) | 0],
      };
    });

    const getMetrics = (scale: number) => {
      return {
        left: metrics.actualBoundingBoxLeft * scale,
        right: metrics.actualBoundingBoxRight * scale,
        ascent: metrics.actualBoundingBoxAscent * scale,
        descent: metrics.actualBoundingBoxDescent * scale,
      };
    };

    const tick = () => {
      const boxes = [] as any;
      texts.forEach((text: any) => {
        delete text.op;
        const metrics = getMetrics(text.size);
        instances(text, (instance: any) => {
          const x = ((instance.x + 1) / 2) * RESOLUTION;
          const y = ((-instance.y + 1) / 2) * RESOLUTION;
          const xMin = x - metrics.left;
          const yMin = y - metrics.ascent;
          const box = [
            xMin,
            yMin,
            xMin + metrics.left + metrics.right,
            yMin + metrics.ascent + metrics.descent,
          ] as any;
          box.text = text;
          boxes.push(box);
        });
      });
      boxIntersect(boxes, (i, j) => {
        [i, j].forEach((index) => (boxes[index].text.op = "shrink"));
      });
      const delta = 1e-3 * 5;
      texts.forEach((t: any) => {
        t.size *= t.op === "shrink" ? 1 - delta : 1 + delta;
      });
    };

    for (let index = 0; index < 512; index++) {
      tick();
    }

    Object.assign(this, {
      text,
      texts,
      fontSize,
      fontFamily,
      gap,
      background,
      metrics,
    });
  }
  toCanvas() {
    const canvas = document.createElement("canvas");
    canvas.width = RESOLUTION;
    canvas.height = RESOLUTION;

    const ctx = canvas.getContext("2d")!;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";

    const blit = (props: {
      size: number;
      x: number;
      y: number;
      color: string;
    }) => {
      ctx.font = `${this.fontSize * props.size * (1 - this.gap)}px ${
        this.fontFamily
      }`;
      ctx.fillStyle = props.color;
      instances(props, (instance: any) => {
        const x = ((instance.x + 1) / 2) * RESOLUTION;
        const y = ((-instance.y + 1) / 2) * RESOLUTION;
        ctx.fillText(this.text, x, y);
      });
    };

    const draw = () => {
      ctx.fillStyle = this.background;
      ctx.fillRect(0, 0, RESOLUTION, RESOLUTION);
      this.texts.forEach(blit);
    };
    draw();

    return canvas;
  }
  toDataURL() {
    return this.toCanvas().toDataURL();
  }
  toSVG() {
    return renderToStaticMarkup(
      <svg style={{ width: 512, height: 512, background: this.background }}>
        {this.texts.flatMap((text) => {
          const texts = [] as any;
          const fontSize = `${this.fontSize * text.size * (1 - this.gap)}px`;
          instances(text, (instance: any) => {
            const x = ((instance.x + 1) / 2) * RESOLUTION;
            const y = ((-instance.y + 1) / 2) * RESOLUTION;
            texts.push(
              <text
                x={x}
                y={y}
                style={{
                  fontSize,
                }}
                textAnchor="middle"
                fill={text.color}
              >
                {this.text}
              </text>
            );
          });
          return texts;
        })}
      </svg>
    );
  }
}

export function instances({ x, y, ...rest }: any, fn: any) {
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      fn({ ...rest, x: i * 2 + x, y: j * 2 + y });
    }
  }
}

export function fit({
  fontFamily,
  text,
}: {
  fontFamily: string;
  text: string;
}) {
  const { width } = getMetrics({ fontFamily, text });
  return (RESOLUTION / 8) * (RESOLUTION / 3 / width);
}

export function getMetrics({
  fontFamily,
  text,
}: {
  fontFamily: string;
  text: string;
}) {
  const canvas = document.createElement("canvas");
  canvas.width = RESOLUTION;
  canvas.height = RESOLUTION;
  const ctx = canvas.getContext("2d")!;
  let fontSize = RESOLUTION / 8;
  ctx.font = `${fontSize}px ${fontFamily}`;
  return ctx.measureText(text);
}

// export function getMetrics({ font, text }: { font: string; text: string }) {
//   const canvas = document.createElement("canvas");
//   canvas.width = RESOLUTION;
//   canvas.height = RESOLUTION;
//   const ctx = canvas.getContext("2d")!;
//   ctx.textAlign = "center";
//   ctx.textBaseline = "alphabetic";
//   let fontSize = RESOLUTION / 8;
//   ctx.font = `${fontSize}px ${font}`;
//   return ctx.measureText(text);
// }

// const fontFamily = "blankie";
// const font = new FontFace(fontFamily, fontBytes);
// await font.load();
// document.fonts.add(font);
