document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Estilo de botones
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-brand-accent', 'text-white');
                b.classList.add('bg-brand-card', 'text-slate-400');
            });
            btn.classList.add('active', 'bg-brand-accent', 'text-white');
            btn.classList.remove('bg-brand-card', 'text-slate-400');

            // Lógica de filtrado
            const filter = btn.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('hidden-item');
                } else {
                    item.classList.add('hidden-item');
                }
            });
        });
    });
});
