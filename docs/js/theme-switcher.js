(() => {
    const select = document.querySelector('[data-theme-select]');
    const description = document.querySelector('[data-theme-description]');
    if (!select) return;

    const allowedThemes = ['warm', 'card'];
    const savedTheme = localStorage.getItem('kukmakeriet-theme');
    const initialTheme = allowedThemes.includes(savedTheme) ? savedTheme : 'warm';
    const descriptions = {
        warm: 'Mjukt, redaktionellt och produktfokuserat',
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

    const navSelect = document.querySelector('[data-nav-select]');
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const shopToggle = document.querySelector('[data-shop-toggle]');
    const shopNav = document.querySelector('[data-shop-nav]');
    const allowedNavs = ['classic', 'pill', 'drawer'];
    const savedNav = localStorage.getItem('kukmakeriet-nav');
    const initialNav = allowedNavs.includes(savedNav) ? savedNav : 'classic';

    const closeMenu = () => {
        document.documentElement.classList.remove('nav-open');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        shopNav?.classList.remove('shop-open');
        shopToggle?.setAttribute('aria-expanded', 'false');
    };

    const applyNav = (navStyle) => {
        document.documentElement.dataset.nav = navStyle;
        if (navSelect) navSelect.value = navStyle;
        closeMenu();
    };

    applyNav(initialNav);

    navSelect?.addEventListener('change', () => {
        const navStyle = allowedNavs.includes(navSelect.value) ? navSelect.value : 'classic';
        applyNav(navStyle);
        localStorage.setItem('kukmakeriet-nav', navStyle);
    });

    menuToggle?.addEventListener('click', () => {
        const isOpen = document.documentElement.classList.toggle('nav-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    shopToggle?.addEventListener('click', () => {
        const isOpen = shopNav.classList.toggle('shop-open');
        shopToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('#main-nav a').forEach((link) => link.addEventListener('click', closeMenu));
})();
