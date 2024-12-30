// contains helpers for managing local storage

export const setLocalStorageKey = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Something went wrong in local storage;", error);
  }
};

export const getLocalStorageKey = (key) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error("Something went wrong in local storage;", error);
    return null;
  }
};

/*
getPalettes()
Get the palettes object stored in localStorage Always return an object, either full of palettes or empty. If it always returns an object, it will make the code that uses this function simpler.
*/
export const getPalettes = () => {
  return getLocalStorageKey("palettes") || {};
};

/*
setPalettes(newPalettes)
Replace whatever palettes are saved in localStorage with the 
provided object of newPalettes
*/
export const setPalettes = (palettes) => {
  try {
    localStorage.setItem("palettes", JSON.stringify(palettes));
  } catch (error) {
    console.error("Something went wrong", error);
  }
};

/*
addPalette(newPalette)
Add the palette to your saved localStorage palettes. First retrieve the existing palettes, add the new palette to the object, and then set the palettes again.
*/

export const addPalette = (newPalette) => {
  const palettes = getPalettes();
  palettes[newPalette.uuid] = newPalette;
  setLocalStorageKey("palettes", palettes);
};

/*
removePalette(paletteUuid)
Remove the palette from your saved localStorage palettes as found by the palette's uuid. First retrieve the existing palettes, find and remove the specified palette from the object, and then set the palettes again. 
*/
export const removePalette = (paletteUuid) => {
  const palettes = getPalettes();
  delete palettes[paletteUuid];
  setLocalStorageKey("palettes", palettes);
};

/*
initPalettesIfEmpty()
This one is important! If you don't have any palettes on page load, then you should add the default palettes to localStorage. To be clear, that's on page load, not immediately following the event that they delete all of the palettes. So if the user deletes each palette, only if they refresh the page, the defaults will appear
*/
export const initPalettesIfEmpty = () => {
  const palettes = getLocalStorageKey("palettes");

  if (!palettes) {
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
