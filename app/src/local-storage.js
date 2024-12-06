import defaultPalettes from "./palettes.json";
import { v4 as generateUUID } from "uuid";

const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    return null;
  }
};

const setPalettes = (newPalettes) => {
  setLocalStorageKey("palettes", newPalettes);
};

export const getPalettes = () => {
  return getLocalStorageKey("palettes");
};

export const initPalettesIfEmpty = () => {
  const palettes = getPalettes();
  if (palettes.length === 0) {
    const defaultPalettes = [
      {
        title: "Sunset",
        colors: ["#ff5733", "#FFC300", "#DAF7A6"],
        temperature: "warm",
      },
      {
        title: "Ocean Brezze",
        colors: ["#1e90ff", "#add8e6", "#00bfff"],
        temperature: "cool",
      },
      {
        title: "Forest",
        colors: ["#228b22", "#006400", "#8b4513"],
        temperature: "neutral",
      },
    ];
    setPalettes(defaultPalettes);
  }
};

export const addPalette = (newPalettes) => {
  const palettes = getPalettes();
  palettes.push(newPalettes);
  setPalettes(palettes);
};

export const removePalette = (paletteUuid) => {
  let palettes = getPalettes();
  palettes = palettes.filter((palette) => palette.uuid !== paletteUuid);
  setPalettes(palettes);
};
