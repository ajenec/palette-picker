import "./style.css";
import { renderPalettes, clearForm } from "./dom-helpers.js";
import {
  getPalettes,
  addPalette,
  removePalette,
  initPalettesIfEmpty,
} from "./local-storage.js";
import { v4 as generateUUID } from "uuid";
// contains the main logic that sets up event handlers and executes initialization functions.

const palettesContainer = document.getElementById("palettes-list");
const paletteForm = document.getElementById("palette-form");
const titleInput = document.getElementById("title");
const colorInputs = [
  document.getElementById("color1"),
  document.getElementById("color2"),
  document.getElementById("color3"),
];
const temperatureInputs = document.getElementsByName("temperature");

const handleDelete = (paletteUuid) => {
  removePalette(paletteUuid);
  renderPalettes(getPalettes(), palettesContainer, handleDelete, handleCopy);
};

const handleCopy = (color) => {
  navigator.clipboard.writeText(color).then(() => {
    alert("Copied hex!");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initPalettesIfEmpty();
  const palettes = getPalettes();
  renderPalettes(palettes, palettesContainer, handleDelete, handleCopy);

  paletteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const colors = colorInputs.map((input) => input.value);
    const temperature = [...temperatureInputs].find(
      (input) => input.checked
    ).value;

    const newPalette = {
      uuid: generateUUID(),
      title,
      colors,
      temperature,
    };

    addPalette(newPalette);
    renderPalettes(getPalettes(), palettesContainer, handleDelete, handleCopy);
    clearForm(paletteForm);
  });
});
