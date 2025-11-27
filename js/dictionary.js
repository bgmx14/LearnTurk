/**
 * DICTIONARY.JS - Dictionary Module
 * Handles vocabulary display, search, filtering, and pagination
 */

class DictionaryModule {
    constructor() {
        this.currentCategory = 'all';
        this.currentPage = 1;
        this.wordsPerPage = 20;
        this.searchQuery = '';
        this.filteredWords = [];

        this.init();
    }

    /**
     * Initialize the dictionary module
     */
    init() {
        console.log('📖 Initializing Dictionary Module...');

        // Initialize search
        this.initSearch();

        // Initialize category filters
        this.initFilters();

        // Display initial words
        this.updateDisplay();

        console.log('✅ Dictionary Module initialized');
    }

    /**
     * Initialize search functionality
     */
    initSearch() {
        const searchInput = document.getElementById('dictionarySearch');

        if (searchInput) {
            // Debounce search to avoid too many updates
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.searchQuery = e.target.value.trim();
                    this.currentPage = 1; // Reset to first page
                    this.updateDisplay();
                }, 300);
            });
        }
    }

    /**
     * Initialize category filters
     */
    initFilters() {
        const filterButtons = document.querySelectorAll('.section-dictionary .filter-btn');

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');

                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update display
                this.currentCategory = category;
                this.currentPage = 1; // Reset to first page
                this.updateDisplay();
            });
        });
    }

    /**
     * Get filtered words based on search and category
     * @returns {array} Filtered vocabulary array
     */
    getFilteredWords() {
        let words = window.vocabularyData || [];

        // Apply category filter
        if (this.currentCategory !== 'all') {
            words = words.filter(word => word.category === this.currentCategory);
        }

        // Apply search filter
        if (this.searchQuery) {
            const query = this.searchQuery.toLowerCase();
            words = words.filter(word =>
                word.turkish.toLowerCase().includes(query) ||
                word.translation.toLowerCase().includes(query) ||
                word.phonetic.toLowerCase().includes(query)
            );
        }

        return words;
    }

    /**
     * Update the dictionary display
     */
    updateDisplay() {
        this.filteredWords = this.getFilteredWords();

        // Display words for current page
        this.displayWords();

        // Update pagination
        this.updatePagination();
    }

    /**
     * Display words for the current page
     */
    displayWords() {
        const grid = document.getElementById('dictionaryGrid');
        if (!grid) return;

        // Calculate start and end indices
        const startIndex = (this.currentPage - 1) * this.wordsPerPage;
        const endIndex = startIndex + this.wordsPerPage;
        const wordsToDisplay = this.filteredWords.slice(startIndex, endIndex);

        // Clear grid
        grid.innerHTML = '';

        // Show message if no words found
        if (wordsToDisplay.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <p>Aucun mot trouvé</p>
                    <p class="no-results-hint">Essayez de modifier votre recherche ou filtres</p>
                </div>
            `;
            return;
        }

        // Create word cards
        wordsToDisplay.forEach(word => {
            const card = this.createWordCard(word);
            grid.appendChild(card);
        });

        // Initialize audio buttons
        this.initAudioButtons();
    }

    /**
     * Create a word card element
     * @param {object} word - The word data
     * @returns {HTMLElement} The word card element
     */
    createWordCard(word) {
        const card = document.createElement('div');
        card.className = 'dictionary-card';

        card.innerHTML = `
            <div class="dictionary-card-header">
                <h3 class="word-turkish">${word.turkish}</h3>
                <button class="btn-audio" data-text="${word.turkish}" title="Écouter">🔊</button>
            </div>
            <div class="word-phonetic">[${word.phonetic}]</div>
            <div class="word-translation">${word.translation}</div>
            <div class="word-category">
                <span class="category-badge">${this.getCategoryLabel(word.category)}</span>
            </div>
        `;

        return card;
    }

    /**
     * Get category label in French
     * @param {string} category - Category key
     * @returns {string} Category label
     */
    getCategoryLabel(category) {
        const labels = {
            'nouns': 'Nom',
            'verbs': 'Verbe',
            'adjectives': 'Adjectif',
            'expressions': 'Expression',
            'adverbs': 'Adverbe',
            'prepositions': 'Préposition',
            'conjunctions': 'Conjonction'
        };

        return labels[category] || category;
    }

    /**
     * Initialize audio buttons
     */
    initAudioButtons() {
        const audioButtons = document.querySelectorAll('.dictionary-card .btn-audio');

        audioButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const text = btn.getAttribute('data-text');
                if (window.playTurkishAudio) {
                    window.playTurkishAudio(text);
                }
            });
        });
    }

    /**
     * Update pagination controls
     */
    updatePagination() {
        const paginationContainer = document.getElementById('dictionaryPagination');
        if (!paginationContainer) return;

        const totalPages = Math.ceil(this.filteredWords.length / this.wordsPerPage);

        // Clear pagination
        paginationContainer.innerHTML = '';

        // Don't show pagination if only one page or no results
        if (totalPages <= 1) return;

        // Create pagination controls
        const pagination = document.createElement('div');
        pagination.className = 'pagination-controls';

        // Previous button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'pagination-btn';
        prevBtn.textContent = '← Précédent';
        prevBtn.disabled = this.currentPage === 1;
        prevBtn.addEventListener('click', () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.updateDisplay();
                this.scrollToTop();
            }
        });
        pagination.appendChild(prevBtn);

        // Page numbers
        const pageInfo = document.createElement('span');
        pageInfo.className = 'pagination-info';
        pageInfo.textContent = `Page ${this.currentPage} / ${totalPages}`;
        pagination.appendChild(pageInfo);

        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'pagination-btn';
        nextBtn.textContent = 'Suivant →';
        nextBtn.disabled = this.currentPage === totalPages;
        nextBtn.addEventListener('click', () => {
            if (this.currentPage < totalPages) {
                this.currentPage++;
                this.updateDisplay();
                this.scrollToTop();
            }
        });
        pagination.appendChild(nextBtn);

        paginationContainer.appendChild(pagination);

        // Add results count
        const resultsCount = document.createElement('div');
        resultsCount.className = 'results-count';
        const startNum = (this.currentPage - 1) * this.wordsPerPage + 1;
        const endNum = Math.min(this.currentPage * this.wordsPerPage, this.filteredWords.length);
        resultsCount.textContent = `Affichage ${startNum}-${endNum} sur ${this.filteredWords.length} mots`;
        paginationContainer.appendChild(resultsCount);
    }

    /**
     * Scroll to top of dictionary section
     */
    scrollToTop() {
        const section = document.getElementById('dictionary');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    /**
     * Export vocabulary to CSV (bonus feature)
     */
    exportToCSV() {
        const words = this.filteredWords;
        let csv = 'Turkish,Phonetic,Translation,Category\n';

        words.forEach(word => {
            csv += `"${word.turkish}","${word.phonetic}","${word.translation}","${word.category}"\n`;
        });

        // Create download link
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'turkish-vocabulary.csv';
        a.click();
        window.URL.revokeObjectURL(url);

        console.log('📥 Vocabulary exported to CSV');
    }
}

// Export for use in app.js
window.DictionaryModule = DictionaryModule;
