const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const themeLabel = themeToggle.querySelector(".theme-label");

const savedTheme = localStorage.getItem("samesies-theme");
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const initialTheme =
  savedTheme || (systemPrefersDark ? "dark" : "light");

function applyTheme(theme) {
  const darkModeIsActive = theme === "dark";

  document.documentElement.dataset.theme = theme;

  themeToggle.setAttribute(
    "aria-pressed",
    String(darkModeIsActive)
  );

  themeToggle.setAttribute(
    "aria-label",
    darkModeIsActive
      ? "Switch to light mode"
      : "Switch to dark mode"
  );

  themeIcon.textContent = darkModeIsActive ? "☀" : "☾";
  themeLabel.textContent = darkModeIsActive ? "Light" : "Dark";
}

applyTheme(initialTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme =
    document.documentElement.dataset.theme;

  const nextTheme =
    currentTheme === "dark" ? "light" : "dark";

  applyTheme(nextTheme);
  localStorage.setItem("samesies-theme", nextTheme);
});
