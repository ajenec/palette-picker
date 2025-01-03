import "./style.css";
import { renderPalette, handleCopy, handleDelete } from "./dom-helpers";
import {
  setLocalStorageKey,
  getLocalStorageKey,
  setPalettes,
  getPalettes,
  initPalettesIfEmpty,
  addPalette,
  removePalette,
} from "./local-storage";
import { v4 as generateUUID } from "uuid";
import palettes from "./palettes.json";

initPalettesIfEmpty(palettes);

const palette = getPalettes();
Object.values(palette).forEach(renderPalette);

const form = document.getElementById("palette-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const color1 = document.getElementById("color1").value;
  const color2 = document.getElementById("color3").value;
  const color3 = document.getElementById("color3").value;
  const temperature = form.querySelector(
    'input[name="temperature"]:checked'
  ).value;
  if (title) {
    const newPalette = {
      uuid: generateUUID(),
      title,
      colors: [color1, color2, color3],
      temperature,
    };

    addPalette(newPalette);
    renderPalette(newPalette);
    form.reset();
  }
});

document.getElementById("palettes-list").addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    handleCopy(event);
  } else if (event.target.classList.contains("delete-btn")) {
    const paletteUuid = handleDelete(event);
    removePalette(paletteUuid);
  }
});
