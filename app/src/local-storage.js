import palettes from "./palettes.json";

// contains helpers for managing local storage

export const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error("Something went wrong", err);
    return null;
  }
};

/*
setPalettes(newPalettes)
Replace whatever palettes are saved in localStorage with the 
provided object of newPalettes
*/
export const setPalettes = (newPalettes) => {
  setLocalStorageKey("palettes", newPalettes);
};

/*
getPalettes()
Get the palettes object stored in localStorage Always return an object, either full of palettes or empty. If it always returns an object, it will make the code that uses this function simpler.
*/
export const getPalettes = () => {
  const storedPalette = getLocalStorageKey("palette");
  return storedPalette || {};
};

/*
initPalettesIfEmpty()
This one is important! If you don't have any palettes on page load, then you should add the default palettes to localStorage. To be clear, that's on page load, not immediately following the event that they delete all of the palettes. So if the user deletes each palette, only if they refresh the page, the defaults will appear
*/
export const initPalettesIfEmpty = () => {
  const storedPalette = getPalettes();
  if (!storedPalette || Object.keys(storedPalette).length === 0) {
    setPalettes(palettes);
  }
};

/*
addPalette(newPalette)
Add the palette to your saved localStorage palettes. First retrieve the existing palettes, add the new palette to the object, and then set the palettes again.
*/
export const addPalette = (newPalette) => {
  const storedPalette = getPalettes();
  storedPalette[newPalette.uuid] = newPalette;
  setPalettes(storedPalette);
  return newPalette;
};

/*
removePalette(paletteUuid)
Remove the palette from your saved localStorage palettes as found by the palette's uuid. First retrieve the existing palettes, find and remove the specified palette from the object, and then set the palettes again. 
*/
export const removePalette = (paletteUuid) => {
  const storedPalette = getPalettes();
  delete storedPalette[paletteUuid];
  setPalettes(storedPalette);
};
