(() => {
    const grid = document.querySelector('[data-product-grid]');
    if (!grid) return;

    // Tillfälliga produkter för designarbetet. Detta ersätts senare av data från admin/databas.
    const products = [
        {name: 'Midnattsformen', group: 'snoppar', category: 'stora', price: 650, image: 'produktbild01.png', status: 'Unik'},
        {name: 'Popcornskålen', group: 'porslin', category: 'skalar', price: 790, image: 'produktbild02.png', status: 'Nytt'},
        {name: 'Morgonkoppen', group: 'porslin', category: 'koppar', price: 420, image: 'produktbild02.png', status: '2 kvar'},
        {name: 'Lilla blyga', group: 'snoppar', category: 'sma', price: 320, image: 'produktbild01.png', status: 'Unik'},
        {name: 'Blå frukost', group: 'porslin', category: 'skalar', price: 720, image: 'produktbild02.png', status: 'Unik'},
        {name: 'Festfatet', group: 'porslin', category: 'fat', price: 890, image: 'produktbild02.png', status: 'Nytt'},
        {name: 'Stora självsäkra', group: 'snoppar', category: 'stora', price: 780, image: 'produktbild01.png', status: 'Unik'},
        {name: 'Espressokoppen', group: 'porslin', category: 'koppar', price: 290, image: 'produktbild02.png', status: '3 kvar'},
        {name: 'Kurviga specialen', group: 'snoppar', category: 'special', price: 950, image: 'produktbild01.png', status: 'Special'},
        {name: 'Söndagsskålen', group: 'porslin', category: 'skalar', price: 640, image: 'produktbild02.png', status: 'Unik'},
        {name: 'Lilla kaxiga', group: 'snoppar', category: 'sma', price: 350, image: 'produktbild01.png', status: '2 kvar'},
        {name: 'Tårtfatet', group: 'porslin', category: 'fat', price: 980, image: 'produktbild02.png', status: 'Beställning'},
        {name: 'Kvällskoppen', group: 'porslin', category: 'koppar', price: 460, image: 'produktbild02.png', status: 'Nytt'},
        {name: 'Den krokiga', group: 'snoppar', category: 'special', price: 840, image: 'produktbild01.png', status: 'Unik'},
        {name: 'Serveringsfat No. 02', group: 'porslin', category: 'fat', price: 1100, image: 'produktbild02.png', status: 'Unik'},
        {name: 'Stora lugna', group: 'snoppar', category: 'stora', price: 720, image: 'produktbild01.png', status: '1 kvar'},
        {name: 'Prickiga koppen', group: 'porslin', category: 'koppar', price: 440, image: 'produktbild02.png', status: '2 kvar'},
        {name: 'Minsta möjliga', group: 'snoppar', category: 'sma', price: 280, image: 'produktbild01.png', status: 'Unik'},
        {name: 'Oväntade formen', group: 'snoppar', category: 'special', price: 920, image: 'produktbild01.png', status: 'Special'},
        {name: 'Helgskålen', group: 'porslin', category: 'skalar', price: 760, image: 'produktbild02.png', status: 'Nytt'}
    ];

    const labels = {all: 'Alla produkter', porslin: 'Porslin', koppar: 'Koppar', skalar: 'Skålar', fat: 'Fat', snoppar: 'Snoppar', stora: 'Stora', sma: 'Små', special: 'Special'};
    const filters = ['all', 'porslin', 'koppar', 'skalar', 'fat', 'snoppar', 'stora', 'sma', 'special'];
    const params = new URLSearchParams(window.location.search);
    let active = labels[params.get('category')] ? params.get('category') : 'all';
    const assetsBase = grid.dataset.assetsBase || '';
    const productUrl = grid.dataset.productUrl || 'produkt.html';
    const count = document.querySelector('[data-product-count]');
    const title = document.querySelector('[data-catalog-title]');
    const filterList = document.querySelector('[data-filter-list]');

    const belongsTo = (product, filter) => filter === 'all' || product.group === filter || product.category === filter;

    const render = () => {
        const visible = products.filter((product) => belongsTo(product, active));
        grid.innerHTML = visible.map((product, index) => `
            <article class="catalog-card">
                <a class="catalog-image" href="${productUrl}" aria-label="Visa ${product.name}">
                    <img src="${assetsBase}${product.image}" alt="Demo: ${product.name}">
                    <span>${product.status}</span>
                </a>
                <div class="catalog-card-copy">
                    <p>${labels[product.category]} · ${String(index + 1).padStart(2, '0')}</p>
                    <h3><a href="${productUrl}">${product.name}</a></h3>
                    <strong>${product.price} kr</strong>
                </div>
            </article>`).join('');
        count.textContent = visible.length;
        title.textContent = labels[active];
        filterList.querySelectorAll('button').forEach((button) => button.classList.toggle('active', button.dataset.filter === active));
    };

    filterList.innerHTML = filters.map((filter) => `<button type="button" data-filter="${filter}">${labels[filter]}</button>`).join('');
    filterList.addEventListener('click', (event) => {
        const button = event.target.closest('[data-filter]');
        if (!button) return;
        active = button.dataset.filter;
        const url = new URL(window.location.href);
        active === 'all' ? url.searchParams.delete('category') : url.searchParams.set('category', active);
        window.history.replaceState({}, '', url);
        render();
    });
    render();
})();
