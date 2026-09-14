const html =
document.documentElement;

const button =
document.querySelector(".theme-toggle");

const savedTheme =
localStorage.getItem("theme");

if (savedTheme) {
  html.dataset.theme = savedTheme;
}

updateThemeIcon();

button?.addEventListener("click", () => {

  const nextTheme =
    html.dataset.theme === "dark"
      ? "light"
      : "dark";

  html.dataset.theme =
    nextTheme;

  localStorage.setItem(
    "theme",
    nextTheme
  );

  updateThemeIcon();
});

function updateThemeIcon() {

  if (!button) return;

  button.textContent =
    html.dataset.theme === "dark"
      ? "☀️"
      : "🌙";
}
