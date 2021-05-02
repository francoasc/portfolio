export const setTheme = (theme) => {
  document.getElementById("link-style").href = `./dist/${theme}.css`;
  localStorage.setItem("theme", theme);
  document.getElementById("social_img").src = `./images/coding_${theme}.svg`;
};
