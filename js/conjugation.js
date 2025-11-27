/**
 * CONJUGATION.JS - Conjugation Module
 * Handles Turkish verb conjugation display
 */

class ConjugationModule {
    constructor() {
        this.currentTense = 'present';
        this.searchQuery = '';
        this.verbs = this.getCommonVerbs();

        this.init();
    }

    /**
     * Initialize the conjugation module
     */
    init() {
        console.log('📝 Initializing Conjugation Module...');

        // Initialize search
        this.initSearch();

        // Initialize tense tabs
        this.initTabs();

        // Display initial conjugations
        this.displayConjugations();

        console.log('✅ Conjugation Module initialized');
    }

    /**
     * Get common Turkish verbs with conjugations
     * @returns {array} Array of verb objects
     */
    getCommonVerbs() {
        return [
            {
                infinitive: "Gelmek",
                meaning: "venir",
                root: "gel",
                conjugations: {
                    present: {
                        ben: "gelirim",
                        sen: "gelirsin",
                        o: "gelir",
                        biz: "geliriz",
                        siz: "gelirsiniz",
                        onlar: "gelirler"
                    },
                    past: {
                        ben: "geldim",
                        sen: "geldin",
                        o: "geldi",
                        biz: "geldik",
                        siz: "geldiniz",
                        onlar: "geldiler"
                    },
                    future: {
                        ben: "geleceğim",
                        sen: "geleceksin",
                        o: "gelecek",
                        biz: "geleceğiz",
                        siz: "geleceksiniz",
                        onlar: "gelecekler"
                    },
                    continuous: {
                        ben: "geliyorum",
                        sen: "geliyorsun",
                        o: "geliyor",
                        biz: "geliyoruz",
                        siz: "geliyorsunuz",
                        onlar: "geliyorlar"
                    }
                }
            },
            {
                infinitive: "Gitmek",
                meaning: "aller",
                root: "git",
                conjugations: {
                    present: {
                        ben: "giderim",
                        sen: "gidersin",
                        o: "gider",
                        biz: "gideriz",
                        siz: "gidersiniz",
                        onlar: "giderler"
                    },
                    past: {
                        ben: "gittim",
                        sen: "gittin",
                        o: "gitti",
                        biz: "gittik",
                        siz: "gittiniz",
                        onlar: "gittiler"
                    },
                    future: {
                        ben: "gideceğim",
                        sen: "gideceksin",
                        o: "gidecek",
                        biz: "gideceğiz",
                        siz: "gideceksiniz",
                        onlar: "gidecekler"
                    },
                    continuous: {
                        ben: "gidiyorum",
                        sen: "gidiyorsun",
                        o: "gidiyor",
                        biz: "gidiyoruz",
                        siz: "gidiyorsunuz",
                        onlar: "gidiyorlar"
                    }
                }
            },
            {
                infinitive: "Yapmak",
                meaning: "faire",
                root: "yap",
                conjugations: {
                    present: {
                        ben: "yaparım",
                        sen: "yaparsın",
                        o: "yapar",
                        biz: "yaparız",
                        siz: "yaparsınız",
                        onlar: "yaparlar"
                    },
                    past: {
                        ben: "yaptım",
                        sen: "yaptın",
                        o: "yaptı",
                        biz: "yaptık",
                        siz: "yaptınız",
                        onlar: "yaptılar"
                    },
                    future: {
                        ben: "yapacağım",
                        sen: "yapacaksın",
                        o: "yapacak",
                        biz: "yapacağız",
                        siz: "yapacaksınız",
                        onlar: "yapacaklar"
                    },
                    continuous: {
                        ben: "yapıyorum",
                        sen: "yapıyorsun",
                        o: "yapıyor",
                        biz: "yapıyoruz",
                        siz: "yapıyorsunuz",
                        onlar: "yapıyorlar"
                    }
                }
            },
            {
                infinitive: "Yemek",
                meaning: "manger",
                root: "ye",
                conjugations: {
                    present: {
                        ben: "yerim",
                        sen: "yersin",
                        o: "yer",
                        biz: "yeriz",
                        siz: "yersiniz",
                        onlar: "yerler"
                    },
                    past: {
                        ben: "yedim",
                        sen: "yedin",
                        o: "yedi",
                        biz: "yedik",
                        siz: "yediniz",
                        onlar: "yediler"
                    },
                    future: {
                        ben: "yiyeceğim",
                        sen: "yiyeceksin",
                        o: "yiyecek",
                        biz: "yiyeceğiz",
                        siz: "yiyeceksiniz",
                        onlar: "yiyecekler"
                    },
                    continuous: {
                        ben: "yiyorum",
                        sen: "yiyorsun",
                        o: "yiyor",
                        biz: "yiyoruz",
                        siz: "yiyorsunuz",
                        onlar: "yiyorlar"
                    }
                }
            },
            {
                infinitive: "İçmek",
                meaning: "boire",
                root: "iç",
                conjugations: {
                    present: {
                        ben: "içerim",
                        sen: "içersin",
                        o: "içer",
                        biz: "içeriz",
                        siz: "içersiniz",
                        onlar: "içerler"
                    },
                    past: {
                        ben: "içtim",
                        sen: "içtin",
                        o: "içti",
                        biz: "içtik",
                        siz: "içtiniz",
                        onlar: "içtiler"
                    },
                    future: {
                        ben: "içeceğim",
                        sen: "içeceksin",
                        o: "içecek",
                        biz: "içeceğiz",
                        siz: "içeceksiniz",
                        onlar: "içecekler"
                    },
                    continuous: {
                        ben: "içiyorum",
                        sen: "içiyorsun",
                        o: "içiyor",
                        biz: "içiyoruz",
                        siz: "içiyorsunuz",
                        onlar: "içiyorlar"
                    }
                }
            },
            {
                infinitive: "Okumak",
                meaning: "lire",
                root: "oku",
                conjugations: {
                    present: {
                        ben: "okurum",
                        sen: "okursun",
                        o: "okur",
                        biz: "okuruz",
                        siz: "okursunuz",
                        onlar: "okurlar"
                    },
                    past: {
                        ben: "okudum",
                        sen: "okudun",
                        o: "okudu",
                        biz: "okuduk",
                        siz: "okudunuz",
                        onlar: "okudular"
                    },
                    future: {
                        ben: "okuyacağım",
                        sen: "okuyacaksın",
                        o: "okuyacak",
                        biz: "okuyacağız",
                        siz: "okuyacaksınız",
                        onlar: "okuyacaklar"
                    },
                    continuous: {
                        ben: "okuyorum",
                        sen: "okuyorsun",
                        o: "okuyor",
                        biz: "okuyoruz",
                        siz: "okuyorsunuz",
                        onlar: "okuyorlar"
                    }
                }
            },
            {
                infinitive: "Yazmak",
                meaning: "écrire",
                root: "yaz",
                conjugations: {
                    present: {
                        ben: "yazarım",
                        sen: "yazarsın",
                        o: "yazar",
                        biz: "yazarız",
                        siz: "yazarsınız",
                        onlar: "yazarlar"
                    },
                    past: {
                        ben: "yazdım",
                        sen: "yazdın",
                        o: "yazdı",
                        biz: "yazdık",
                        siz: "yazdınız",
                        onlar: "yazdılar"
                    },
                    future: {
                        ben: "yazacağım",
                        sen: "yazacaksın",
                        o: "yazacak",
                        biz: "yazacağız",
                        siz: "yazacaksınız",
                        onlar: "yazacaklar"
                    },
                    continuous: {
                        ben: "yazıyorum",
                        sen: "yazıyorsun",
                        o: "yazıyor",
                        biz: "yazıyoruz",
                        siz: "yazıyorsunuz",
                        onlar: "yazıyorlar"
                    }
                }
            },
            {
                infinitive: "Konuşmak",
                meaning: "parler",
                root: "konuş",
                conjugations: {
                    present: {
                        ben: "konuşurum",
                        sen: "konuşursun",
                        o: "konuşur",
                        biz: "konuşuruz",
                        siz: "konuşursunuz",
                        onlar: "konuşurlar"
                    },
                    past: {
                        ben: "konuştum",
                        sen: "konuştun",
                        o: "konuştu",
                        biz: "konuştuk",
                        siz: "konuştunuz",
                        onlar: "konuştular"
                    },
                    future: {
                        ben: "konuşacağım",
                        sen: "konuşacaksın",
                        o: "konuşacak",
                        biz: "konuşacağız",
                        siz: "konuşacaksınız",
                        onlar: "konuşacaklar"
                    },
                    continuous: {
                        ben: "konuşuyorum",
                        sen: "konuşuyorsun",
                        o: "konuşuyor",
                        biz: "konuşuyoruz",
                        siz: "konuşuyorsunuz",
                        onlar: "konuşuyorlar"
                    }
                }
            },
            {
                infinitive: "Sevmek",
                meaning: "aimer",
                root: "sev",
                conjugations: {
                    present: {
                        ben: "severim",
                        sen: "seversin",
                        o: "sever",
                        biz: "severiz",
                        siz: "seversiniz",
                        onlar: "severler"
                    },
                    past: {
                        ben: "sevdim",
                        sen: "sevdin",
                        o: "sevdi",
                        biz: "sevdik",
                        siz: "sevdiniz",
                        onlar: "sevdiler"
                    },
                    future: {
                        ben: "seveceğim",
                        sen: "seveceksin",
                        o: "sevecek",
                        biz: "seveceğiz",
                        siz: "seveceksiniz",
                        onlar: "sevecekler"
                    },
                    continuous: {
                        ben: "seviyorum",
                        sen: "seviyorsun",
                        o: "seviyor",
                        biz: "seviyoruz",
                        siz: "seviyorsunuz",
                        onlar: "seviyorlar"
                    }
                }
            },
            {
                infinitive: "Almak",
                meaning: "prendre, acheter",
                root: "al",
                conjugations: {
                    present: {
                        ben: "alırım",
                        sen: "alırsın",
                        o: "alır",
                        biz: "alırız",
                        siz: "alırsınız",
                        onlar: "alırlar"
                    },
                    past: {
                        ben: "aldım",
                        sen: "aldın",
                        o: "aldı",
                        biz: "aldık",
                        siz: "aldınız",
                        onlar: "aldılar"
                    },
                    future: {
                        ben: "alacağım",
                        sen: "alacaksın",
                        o: "alacak",
                        biz: "alacağız",
                        siz: "alacaksınız",
                        onlar: "alacaklar"
                    },
                    continuous: {
                        ben: "alıyorum",
                        sen: "alıyorsun",
                        o: "alıyor",
                        biz: "alıyoruz",
                        siz: "alıyorsunuz",
                        onlar: "alıyorlar"
                    }
                }
            }
        ];
    }

    /**
     * Initialize search functionality
     */
    initSearch() {
        const searchInput = document.getElementById('conjugationSearch');

        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.searchQuery = e.target.value.trim();
                    this.displayConjugations();
                }, 300);
            });
        }
    }

    /**
     * Initialize tense tabs
     */
    initTabs() {
        const tabButtons = document.querySelectorAll('.section-conjugation .tab-btn');

        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const tense = btn.getAttribute('data-tense');

                // Update active tab
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Display conjugations for selected tense
                this.currentTense = tense;
                this.displayConjugations();
            });
        });
    }

    /**
     * Get filtered verbs based on search
     * @returns {array} Filtered verbs
     */
    getFilteredVerbs() {
        if (!this.searchQuery) {
            return this.verbs;
        }

        const query = this.searchQuery.toLowerCase();
        return this.verbs.filter(verb =>
            verb.infinitive.toLowerCase().includes(query) ||
            verb.meaning.toLowerCase().includes(query) ||
            verb.root.toLowerCase().includes(query)
        );
    }

    /**
     * Display conjugations for current tense
     */
    displayConjugations() {
        const container = document.getElementById('conjugationContent');
        if (!container) return;

        const filteredVerbs = this.getFilteredVerbs();

        if (filteredVerbs.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <p>Aucun verbe trouvé</p>
                    <p class="no-results-hint">Essayez de modifier votre recherche</p>
                </div>
            `;
            return;
        }

        // Create header with tense explanation
        let html = `<div class="conjugation-intro">${this.getTenseExplanation()}</div>`;

        // Create conjugation cards
        html += '<div class="conjugation-grid">';
        filteredVerbs.forEach(verb => {
            html += this.createConjugationCard(verb);
        });
        html += '</div>';

        container.innerHTML = html;

        // Initialize audio buttons
        this.initAudioButtons();
    }

    /**
     * Get explanation for current tense
     * @returns {string} HTML explanation
     */
    getTenseExplanation() {
        const explanations = {
            present: `
                <h3>Présent (Geniş Zaman)</h3>
                <p>Le présent simple turc exprime une action habituelle ou générale.</p>
                <p><strong>Formation :</strong> Racine + -ir/-ır/-ur/-ür + terminaison personnelle</p>
            `,
            past: `
                <h3>Passé (Geçmiş Zaman)</h3>
                <p>Le passé simple turc exprime une action complétée dans le passé.</p>
                <p><strong>Formation :</strong> Racine + -di/-dı/-du/-dü + terminaison personnelle</p>
            `,
            future: `
                <h3>Futur (Gelecek Zaman)</h3>
                <p>Le futur turc exprime une action qui aura lieu dans le futur.</p>
                <p><strong>Formation :</strong> Racine + -ecek/-acak + terminaison personnelle</p>
            `,
            continuous: `
                <h3>Présent Continu (Şimdiki Zaman)</h3>
                <p>Le présent continu exprime une action en cours de réalisation.</p>
                <p><strong>Formation :</strong> Racine + -iyor/-ıyor/-uyor/-üyor + terminaison personnelle</p>
            `
        };

        return explanations[this.currentTense] || '';
    }

    /**
     * Create a conjugation card for a verb
     * @param {object} verb - Verb object
     * @returns {string} HTML string
     */
    createConjugationCard(verb) {
        const conjugation = verb.conjugations[this.currentTense];

        return `
            <div class="conjugation-card">
                <div class="conjugation-card-header">
                    <h3 class="verb-infinitive">${verb.infinitive}</h3>
                    <span class="verb-meaning">${verb.meaning}</span>
                </div>
                <div class="conjugation-table">
                    <table class="grammar-table">
                        <tbody>
                            <tr>
                                <td class="pronoun">Ben</td>
                                <td class="conjugation-form">${conjugation.ben}</td>
                                <td><button class="btn-audio-small" data-text="${conjugation.ben}" title="Écouter">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="pronoun">Sen</td>
                                <td class="conjugation-form">${conjugation.sen}</td>
                                <td><button class="btn-audio-small" data-text="${conjugation.sen}" title="Écouter">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="pronoun">O</td>
                                <td class="conjugation-form">${conjugation.o}</td>
                                <td><button class="btn-audio-small" data-text="${conjugation.o}" title="Écouter">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="pronoun">Biz</td>
                                <td class="conjugation-form">${conjugation.biz}</td>
                                <td><button class="btn-audio-small" data-text="${conjugation.biz}" title="Écouter">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="pronoun">Siz</td>
                                <td class="conjugation-form">${conjugation.siz}</td>
                                <td><button class="btn-audio-small" data-text="${conjugation.siz}" title="Écouter">🔊</button></td>
                            </tr>
                            <tr>
                                <td class="pronoun">Onlar</td>
                                <td class="conjugation-form">${conjugation.onlar}</td>
                                <td><button class="btn-audio-small" data-text="${conjugation.onlar}" title="Écouter">🔊</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    /**
     * Initialize audio buttons
     */
    initAudioButtons() {
        const audioButtons = document.querySelectorAll('.conjugation-card .btn-audio-small');

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
}

// Export for use in app.js
window.ConjugationModule = ConjugationModule;
