(() => {
    const select = document.querySelector('[data-theme-select]');
    if (!select) return;

    const allowedThemes = ['warm', 'dark', 'card'];
    const savedTheme = localStorage.getItem('kukmakeriet-theme');
    const initialTheme = allowedThemes.includes(savedTheme) ? savedTheme : 'warm';

    document.documentElement.dataset.theme = initialTheme;
    select.value = initialTheme;

    select.addEventListener('change', () => {
        const theme = allowedThemes.includes(select.value) ? select.value : 'warm';
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('kukmakeriet-theme', theme);
    });
})();
