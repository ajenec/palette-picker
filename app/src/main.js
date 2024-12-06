import {
  getPalettes,
  setPalettes,
  initPalettesIfEmpty,
  addPalette,
  removePalette,
} from "./local-storage.js";
import {
  createPaletteElement,
  renderPalettes,
  validateForm,
  resetForm,
  preventFormSubmission,
} from "./dom-helpers.js";
