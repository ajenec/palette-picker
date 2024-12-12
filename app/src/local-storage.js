import palettes from "./palettes.json";
console.log(palettes);

const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error(err);
    return null;
  }
};

const setPalettes = (newPalette) => {
  setLocalStorageKey("palettes", newPalette);
};

export const getPalettes = () => {
  const defaultPalettes = getLocalStorageKey("palettes");
  return defaultPalettes || {};
};

export const initPalettesIfEmpty = () => {
  const palettes = getLocalStorageKey("palettes");

  if (Object.keys(palettes).length === 0) {
    const defaultPalettes = {
      "5affd4e4-418d-4b62-beeb-1c0f7aaff753": {
        uuid: "5affd4e4-418d-4b62-beeb-1c0f7aaff753",
        title: "Marcy",
        colors: ["#c92929", "#2f5a8b", "#327a5f"],
        temperature: "neutral",
      },
      "32521ef4-d64c-4906-b06d-f3d0d6b16e0f": {
        uuid: "32521ef4-d64c-4906-b06d-f3d0d6b16e0f",
        title: "Sleek and Modern",
        colors: ["#3A5199", "#2F2E33", "#D5D6D2"],
        temperature: "cool",
      },
      "8b144d62-faa7-4226-87e1-096d7c1bedc7": {
        uuid: "8b144d62-faa7-4226-87e1-096d7c1bedc7",
        title: "Winter Reds",
        colors: ["#A10115", "#C0B2B5", "#600A0A"],
        temperature: "warm",
      },
    };
    setPalettes("palettes", defaultPalettes);
  }
};

export const addPalette = (newPalette) => {
  const palettes = getPalettes();
  const uuid = newPalette.uuid;

  palettes[uuid] = newPalette;
  setPalettes(palettes);
  return newPalette;
};

export const removePalette = (paletteUuid) => {
  const palettes = getLocalStorageKey("palettes");
  delete palettes[paletteUuid];
  setLocalStorageKey("palettes", palettes);
};
