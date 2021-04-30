import { setImage } from "./images";

export const setTheme = (mode) => {
  document.getElementById("link-style").href = `./dist/${mode}.css`;
  localStorage.setItem("theme", mode);
  setImage(mode);
};
