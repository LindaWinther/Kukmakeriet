(() => {
    const select = document.querySelector('[data-theme-select]');
    const description = document.querySelector('[data-theme-description]');
    if (!select) return;

    const allowedThemes = ['warm', 'dark', 'card'];
    const savedTheme = localStorage.getItem('kukmakeriet-theme');
    const initialTheme = allowedThemes.includes(savedTheme) ? savedTheme : 'warm';
    const descriptions = {
        warm: 'Mjukt, redaktionellt och produktfokuserat',
        dark: 'Rått, kontrastrikt och mer som ett galleri',
        card: 'Illustrerat, personligt och med mycket humor'
    };

    const applyTheme = (theme) => {
        document.documentElement.dataset.theme = theme;
        select.value = theme;
        if (description) description.textContent = descriptions[theme];
    };

    applyTheme(initialTheme);

    select.addEventListener('change', () => {
        const theme = allowedThemes.includes(select.value) ? select.value : 'warm';
        applyTheme(theme);
        localStorage.setItem('kukmakeriet-theme', theme);
    });
})();
