
(() => {
  const root = document.documentElement;
  const toggles = document.querySelectorAll('.theme-toggle');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const storageKey = 'samesies-theme';

  function preferredTheme() {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme, persist = true) {
    const isDark = theme === 'dark';
    root.dataset.theme = isDark ? 'dark' : 'light';

    if (persist) localStorage.setItem(storageKey, root.dataset.theme);
    if (themeColor) themeColor.content = isDark ? '#0b1224' : '#f1f3f7';

    toggles.forEach((toggle) => {
      const icon = toggle.querySelector('.theme-icon');
      const text = toggle.querySelector('.theme-text');
      if (icon) icon.textContent = isDark ? '☀' : '☾';
      if (text) text.textContent = isDark ? 'Light' : 'Dark';
      toggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
      toggle.setAttribute('aria-pressed', String(isDark));
    });
  }

  setTheme(preferredTheme(), false);

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  });

  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
})();
