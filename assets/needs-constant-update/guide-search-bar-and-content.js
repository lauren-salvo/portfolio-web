(function () {
    const guidePages = [
    ];

    const searchField = document.querySelector('.search-field');
    const searchDropdown = document.querySelector('.search-results-dropdown');
    const searchResultsContent = document.querySelector('.search-results-content');
    const searchForm = document.querySelector('#searchForm');

    const emailFields = document.querySelectorAll('input[type="email"]');
    emailFields.forEach(field => field.maxLength = 100);
    if (searchField) searchField.maxLength =60;

    if (searchField) {
        const searchSubmit = document.querySelector('.search-submit');

        function updateButtons() {
            const hasText = !!searchField.value.trim();
            if (searchSubmit) {
                searchSubmit.innerHTML = hasText ? '<i class="fas fa-times"></i>' : '<i class="fas fa-search"></i>';
                searchSubmit.title = hasText ? 'Clear search' : 'Search';
            }
        }

        searchField.addEventListener('input', updateButtons);
        updateButtons();

        if (searchSubmit) {
            searchSubmit.addEventListener('click', (ev) => {
                const hasText = !!searchField.value.trim();
                if (hasText) {
                    ev.preventDefault();
                    searchField.value = '';
                    searchField.focus();
                    updateButtons();
                    if (searchDropdown) searchDropdown.style.display = 'none';
                } else {
                    // allow form submit to trigger searchForm submit handler
                }
            });
        }
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function highlightMatch(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    function performSearch(query) {
        if (!query || !query.trim()) {
            searchDropdown.style.display = 'none';
            return;
        }

        const lowerQuery = query.toLowerCase();
        const results = guidePages.filter(page =>
            page.title.toLowerCase().includes(lowerQuery) ||
            page.category.toLowerCase().includes(lowerQuery)
        );

        if (results.length === 0) {
            searchResultsContent.innerHTML = `
                <div style="padding: 20px; text-align: center; color: #666;">
                    <i class="fa fa-search" style="font-size: 24px; margin-bottom: 10px; opacity: 0.5;"></i>
                    <p style="margin: 10px 0 0 0; font-size: 14px;">Oops! No guides found for "<strong>${escapeHtml(query)}</strong>"</p>
                    <p style="margin: 8px 0 0 0; font-size: 12px; opacity: 0.7;">Try a broader term or request a guide.</p>
                </div>
            `;
            searchDropdown.style.display = 'block';
            return;
        }

        searchResultsContent.innerHTML = results.map(page => `
            <a href="${page.slug}" class="search-result-item">
                <div>
                    <h4>${highlightMatch(escapeHtml(page.title), query)}</h4>
                    <div class="search-result-meta">
                        <span>${escapeHtml(page.category)}</span>
                        <span><i class="fa fa-clock"></i>  ${escapeHtml(page.date)}</span>
                    </div>
                </div>
                <div style="color: #ccc; margin-left: 12px;">
                    <i class="fa fa-arrow-right"></i>
                </div>
            </a>
        `).join('');

        searchDropdown.style.display = 'block';
    }

    if (searchField) {
        searchField.addEventListener('input', (e) => performSearch(e.target.value));
        searchField.addEventListener('focus', (e) => {
            if (e.target.value.trim()) performSearch(e.target.value);
        });
        searchField.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') searchDropdown.style.display = 'none';
        });
    }

    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (searchField && searchField.value.trim()) {
                performSearch(searchField.value);
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (!searchForm || !searchForm.contains(e.target)) {
            if (searchDropdown) searchDropdown.style.display = 'none';
        }
    });
})();