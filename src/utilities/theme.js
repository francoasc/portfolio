export const setTheme = (theme) => {
  document.getElementById("link-style").href = `./dist/${theme}.css`;
  document.getElementById("logo-tab").href = `./images/logo_${theme}.png`;
  document.getElementById("social_img").src = `./images/coding_${theme}.svg`;
  localStorage.setItem("theme", theme);
};
