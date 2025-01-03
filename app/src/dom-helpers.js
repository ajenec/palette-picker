// contains helpers for manipulating the DOM

export const renderPalette = (palette) => {
  const paletteList = document.getElementById("palettes-list");
  const paletteElement = document.createElement("li");
  paletteElement.classList.add("palette");
  paletteElement.dataset.uuid = palette.uuid;

  paletteElement.innerHTML = `
  <div class="color-box">
    ${palette.colors
      .map(
        (color) => `
      <div style="background-color: ${color}">
      <button class="copy-btn">${color}</button>
      </div>
      `
      )
      .join("")}
   </div>
   <div class="temperature ${palette.temperature}">
   ${palette.temperature.charAt(0).toUpperCase() + palette.temperature.slice(1)}
   </div>
   <button class=""delete-btn>Delete</button>
  `;
  paletteList.appendChild(paletteElement);
};

export const handleCopy = (event) => {
  const hexCode = event.target.textContent;
  if (hexCode.startsWith("#")) {
    navigator.clipboard.writeText(hexCode).then(() => {
      event.target.textContent = "copied hex";
      setTimeout(() => {
        event.target.textContent = hexCode;
      }, 1000);
    });
  }
};

export const handleDelete = (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const paletteUuid = event.target.closet("li").dataset.uuid;
    event.target.closet("li").remove();
    return paletteUuid;
  }
};
