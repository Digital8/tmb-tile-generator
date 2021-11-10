import { haltonND, kroneckerND, plasticND } from "@thi.ng/lowdisc";
import { take } from "@thi.ng/transducers";
import boxIntersect from "box-intersect";
import { renderToStaticMarkup } from "react-dom/server";

const RESOLUTION = 512;
const random = Math.random;
const ITERATIONS = 256;

export async function makeDataURL(props: any) {
  const { text, background, colors, font, ...rest } = props;
  const url =
    font ??
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
    ...rest,
  });
  const canvas = tile.toCanvas();
  return canvas.toDataURL();
}

export class Tile {
  text!: string;
  texts!: any[];
  fontSize!: number;
  gap!: number;
  fontFamily!: string;
  background!: string;
  metrics!: TextMetrics;
  layout?: string;
  constructor(props: {
    layout?: string;
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
      layout,
      colors,
      distribution = "plastic",
      gap = 0.1,
      font: fontFamily,
      metrics,
      fontSize,
      ...rest
    } = props;

    const texts = (() => {
      if (layout === "stacked") {
        const metrics = measure({ font: `${fontSize}px ${fontFamily}`, text });
        const lines = Math.floor(
          RESOLUTION /
            (metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent)
        );
        const texts: any[] = [];
        for (let j = 0; j < lines; j++) {
          let shift = Math.random() * 0.5;
          for (let i = 0; i < 4; i++) {
            texts.push({
              x: -1 + 0.5 * i + shift,
              y: -1 + (2 / lines) * j,
              size: 1,
              color: colors[(colors.length * random()) | 0],
            });
          }
        }
        return texts;
      } else {
        const generator = {
          halton: haltonND.bind(null, [2, 3]),
          kronecker: kroneckerND.bind(null, [1 / 2 ** 0.5, 1 / 5 ** 0.5]),
          plastic: plasticND.bind(null, 2),
        }[distribution](0 ?? (random() * 1024) | 0);
        const texts = Array.from(take<any>(32, generator)).map(([x, y]) => {
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
        for (let index = 0; index < ITERATIONS; index++) {
          tick();
        }
        return texts;
      }
    })();

    Object.assign(this, {
      text,
      texts,
      fontSize,
      fontFamily,
      gap,
      metrics,
      ...rest,
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
      <svg
        style={{ width: 512, height: 512, background: this.background }}
        xmlns="http://www.w3.org/2000/svg"
      >
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
                  fontFamily: this.fontFamily,
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
  const { width } = measure({
    font: `${RESOLUTION / 8}px ${fontFamily}`,
    text,
  });
  return (RESOLUTION / 8) * (RESOLUTION / 4 / width);
}

export function measure({ font, text }: { font: string; text: string }) {
  const canvas = document.createElement("canvas");
  canvas.width = RESOLUTION;
  canvas.height = RESOLUTION;
  const ctx = canvas.getContext("2d")!;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.font = font;
  return ctx.measureText(text);
}

export async function makeSVG(props: any) {
  const { text, background, colors, font } = props;
  const url =
    font ??
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
  });
  return tile.toSVG();
}
