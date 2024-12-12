import { addPalette } from "./local-storage";

export const renderPalettte = (palette) => {
  const paletteDiv = document.createElement('div')
  paletteDiv.classList.add('palette')
  paletteDiv.setAttribute('data-uuid', palette.uuid)

  const title = document.createElement('h3')
  title.textContent = palette.title
  paletteDiv.appendChild(title)
  
  const colorContainer = document.createElement('div')
  colorContainer.classList.add('color-container')
  
  palette.colors.forEach((color, index) => {
    const colorDiv
  });
};
