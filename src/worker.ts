import * as Comlink from "comlink";
import { Tile } from "./Tile";

const obj = {
  tile(props: any) {
    return new Tile(props);
  },
};

Comlink.expose(obj);
