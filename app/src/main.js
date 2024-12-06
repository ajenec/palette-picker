import "./style.css";
import palettes from "./palettes.json" assert { type: "json" };
import { v4 as generateUUID } from "uuid";

const newPaletteID = generateUUID();

setPalettes(newPalettes);
getPalettes();
initPalettesIfEmpty();
addPalette(newPalette);
removePalette(paletteUuid);
