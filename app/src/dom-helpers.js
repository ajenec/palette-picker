// contains helpers for manipulating the DOM

export const renderPalettes = (
  palettes,
  container,
  handleDelete,
  handleCopy
) => {
  if (!container) {
    console.error("Container not found");
    return;
  }
  container.innerHTML = "";

  Object.values(palettes).forEach((palette) => {
    const paletteElement = document.createElement("li");
    paletteElement.classList.add("palette");

    //palette title
    const title = document.createElement("h3");
    title.textContent = palette.title;
    paletteElement.appendChild(title);

    if (palettes.length === 0) {
      console.log("no palette");
      return;
    }
    // display each color
    palette.colors.forEach((color) => {
      const colorDiv = document.createElement("div");
      colorDiv.style.backgroundColor = color;
      colorDiv.classList.add("color-box");

      // Black and white text
      const text = document.createElement("span");
      text.classList.add("color-text");
      text.textContent = color;
      colorDiv.appendChild(text);

      // copy button
      const copyButton = document.createElement("button");
      copyButton.textContent = "Copy Hex";
      copyButton.onclick = () => handleCopy(color);
      colorDiv.appendChild(copyButton);

      paletteElement.appendChild(colorDiv);
    });
    // temperature banner
    const tempBanner = document.createElement("button");
    tempBanner.textContent = palette.temperature;
    tempBanner.classList.add(`temperature-${palette.temperature}`);
    paletteElement.appendChild(tempBanner);

    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Palete";
    deleteButton.onclick = () => handleDelete(palette.uuid);
    paletteElement.appendChild(deleteButton);

    // Append the palette to the container
    container.appendChild(paletteElement);
  });
};

export const clearForm = (form) => {
  form.reset();
};
