import { build } from "esbuild";
import inlineWorkerPlugin from "esbuild-plugin-inline-worker";

build({
  entryPoints: ["./src/Tile"],
  outdir: "./demo",
  plugins: [inlineWorkerPlugin()],
  target: ["chrome92"],
  bundle: true,
  format: "esm",
  define: {
    global: "window",
  },
  inject: ["./react-shim.js"],
});
