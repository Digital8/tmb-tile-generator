import { haltonND, kroneckerND, plasticND } from "@thi.ng/lowdisc";
import { take } from "@thi.ng/transducers";
import boxIntersect from "box-intersect";

const RESOLUTION = 512;

export class Tile {
  text!: string;
  texts!: any[];
  fontSize!: number;
  ctx!: CanvasRenderingContext2D;
  gap!: number;
  fontFamily!: string;
  background!: string;
  canvas!: HTMLCanvasElement;
  constructor(props: unknown) {
    Object.assign(this, props);
  }
  static create({
    text,
    background,
    colors,
    distribution = "plastic",
    gap = 0.1,
    random = Math.random,
    font: fontFamily,
  }: {
    text: string;
    background: string;
    font: string;
    colors: string[];
    distribution?: "halton" | "kronecker" | "plastic";
    gap?: number;
    random?: () => number;
  }) {
    // const fontFamily = "blankie";
    // const font = new FontFace(fontFamily, fontBytes);
    // await font.load();
    // document.fonts.add(font);

    const fontSize = fit({
      fontFamily,
      text,
    });

    const canvas = document.createElement("canvas");
    canvas.width = RESOLUTION;
    canvas.height = RESOLUTION;

    const ctx = canvas.getContext("2d")!;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";

    const generator = {
      halton: haltonND.bind(null, [2, 3]),
      kronecker: kroneckerND.bind(null, [1 / 2 ** 0.5, 1 / 5 ** 0.5]),
      plastic: plasticND.bind(null, 2),
    }[distribution]((random() * 1024) | 0);
    let texts = Array.from(take<any>(32, generator)).map(([x, y]) => {
      return {
        x: x * 2 - 1,
        y: y * 2 - 1,
        size: 0.75 + random() * 0.75,
        color: colors[(colors.length * random()) | 0],
      };
    });

    const measure = (font: string) => {
      ctx.font = font;
      return ctx.measureText(text);
    };
    const metrics = measure(`${fontSize}px ${fontFamily}`);
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

    return new Tile({
      text,
      texts,
      fontSize,
      canvas,
      ctx,
      fontFamily,
      gap,
      background,
    });
  }
  toCanvas() {
    const blit = (props: {
      size: number;
      x: number;
      y: number;
      color: string;
    }) => {
      this.ctx.font = `${this.fontSize * props.size * (1 - this.gap)}px ${
        this.fontFamily
      }`;
      this.ctx.fillStyle = props.color;
      instances(props, (instance: any) => {
        const x = ((instance.x + 1) / 2) * RESOLUTION;
        const y = ((-instance.y + 1) / 2) * RESOLUTION;
        this.ctx.fillText(this.text, x, y);
      });
    };

    const draw = () => {
      this.ctx.fillStyle = this.background;
      this.ctx.fillRect(0, 0, RESOLUTION, RESOLUTION);
      this.texts.forEach(blit);
    };
    draw();

    return this.canvas;
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
