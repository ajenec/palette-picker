// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("palette-form");
//   const paletteList = document.getElementById("palette-list");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Get values from the form
//     const title = document.getElementById("title").value;
//     const color1 = document.getElementById("color1").value;
//     const color2 = document.getElementById("color2").value;
//     const color3 = document.getElementById("color3").value;
//     const temperature = document.querySelector(
//       'input[name="temperature"]:checked'
//     ).value;

//     // Create new palette item
//     const paletteItem = document.createElement("li");
//     paletteItem.classList.add("palette-item");

//     // Add colors
//     paletteItem.innerHTML = `
//         <div class="color" style="background-color: ${color1};">
//           <span>${color1}</span>
//           <button class="copy" data-color="${color1}">Copy</button>
//         </div>
//         <div class="color" style="background-color: ${color2};">
//           <span>${color2}</span>
//           <button class="copy" data-color="${color2}">Copy</button>
//         </div>
//         <div class="color" style="background-color: ${color3};">
//           <span>${color3}</span>
//           <button class="copy" data-color="${color3}">Copy</button>
//         </div>
//         <div class="temperature-banner ${temperature}">
//           ${temperature.charAt(0).toUpperCase() + temperature.slice(1)}
//         </div>
//         <div class="copy-buttons">
//           <button class="delete">Delete</button>
//         </div>
//       `;

//     // Append new palette
//     paletteList.appendChild(paletteItem);

//     // Reset form
//     form.reset();
//   });

//   // Handle copy button click
//   paletteList.addEventListener("click", (e) => {
//     if (e.target.classList.contains("copy")) {
//       const color = e.target.getAttribute("data-color");
//       navigator.clipboard.writeText(color).then(() => {
//         alert(`Color ${color} copied!`);
//       });
//     }

//     // Handle delete button click
//     if (e.target.classList.contains("delete")) {
//       e.target.closest(".palette-item").remove();
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  initPalettesIfEmpty(); // Ensure default palettes exist if none are saved

  const form = document.getElementById("palette-form");

  // Listen for form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    const newPalette = {
      uuid: generateUuid(), // Generate a unique identifier for the palette
      title: document.getElementById("title").value,
      colors: [
        document.getElementById("color1").value,
        document.getElementById("color2").value,
        document.getElementById("color3").value,
      ],
      temperature: document.querySelector('input[name="temperature"]:checked')
        .value,
    };

    addPalette(newPalette); // Add the new palette to localStorage

    // Render the new palette on the page
    renderPalette(newPalette);

    form.reset(); // Reset the form fields
  });
});
