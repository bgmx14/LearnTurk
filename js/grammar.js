/**
 * GRAMMAR.JS - Grammar Module
 * Handles grammar topics display with tabs
 */

class GrammarModule {
    constructor() {
        this.currentTopic = 'alphabet';
        this.grammarTopics = this.getGrammarTopics();

        this.init();
    }

    /**
     * Initialize the grammar module
     */
    init() {
        console.log('📝 Initializing Grammar Module...');

        // Initialize topic tabs
        this.initTabs();

        // Display initial topic
        this.displayTopic('alphabet');

        console.log('✅ Grammar Module initialized');
    }

    /**
     * Get all grammar topics content
     * @returns {object} Grammar topics data
     */
    getGrammarTopics() {
        return {
            alphabet: {
                title: "L'Alphabet Turc",
                content: `
                    <div class="grammar-section">
                        <h4>Les 29 lettres de l'alphabet turc</h4>
                        <p>L'alphabet turc utilise l'alphabet latin avec quelques lettres spéciales. Il compte <strong>29 lettres</strong> : 8 voyelles et 21 consonnes.</p>

                        <h4>Voyelles (8)</h4>
                        <div class="alphabet-grid">
                            <div class="letter-card">
                                <div class="letter">A a</div>
                                <div class="pronunciation">[a]</div>
                            </div>
                            <div class="letter-card">
                                <div class="letter">E e</div>
                                <div class="pronunciation">[é]</div>
                            </div>
                            <div class="letter-card">
                                <div class="letter">I ı</div>
                                <div class="pronunciation">[eu] (i sans point)</div>
                            </div>
                            <div class="letter-card">
                                <div class="letter">İ i</div>
                                <div class="pronunciation">[i] (i avec point)</div>
                            </div>
                            <div class="letter-card">
                                <div class="letter">O o</div>
                                <div class="pronunciation">[o]</div>
                            </div>
                            <div class="letter-card">
                                <div class="letter">Ö ö</div>
                                <div class="pronunciation">[eu]</div>
                            </div>
                            <div class="letter-card">
                                <div class="letter">U u</div>
                                <div class="pronunciation">[ou]</div>
                            </div>
                            <div class="letter-card">
                                <div class="letter">Ü ü</div>
                                <div class="pronunciation">[u]</div>
                            </div>
                        </div>

                        <h4>Lettres spéciales turques</h4>
                        <table class="grammar-table">
                            <thead>
                                <tr>
                                    <th>Lettre</th>
                                    <th>Prononciation</th>
                                    <th>Exemple</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Ç ç</strong></td>
                                    <td>[tch] comme dans "tchao"</td>
                                    <td>çay (tchaï) = thé</td>
                                </tr>
                                <tr>
                                    <td><strong>Ğ ğ</strong></td>
                                    <td>Lettre silencieuse, allonge la voyelle</td>
                                    <td>dağ (da:) = montagne</td>
                                </tr>
                                <tr>
                                    <td><strong>I ı</strong></td>
                                    <td>[eu] comme dans "peu"</td>
                                    <td>ışık (euchk) = lumière</td>
                                </tr>
                                <tr>
                                    <td><strong>İ i</strong></td>
                                    <td>[i] normal</td>
                                    <td>iyi (iyi) = bon</td>
                                </tr>
                                <tr>
                                    <td><strong>Ö ö</strong></td>
                                    <td>[eu] comme dans "peu"</td>
                                    <td>göz (gueuz) = œil</td>
                                </tr>
                                <tr>
                                    <td><strong>Ş ş</strong></td>
                                    <td>[ch] comme dans "chat"</td>
                                    <td>şeker (chékèr) = sucre</td>
                                </tr>
                                <tr>
                                    <td><strong>Ü ü</strong></td>
                                    <td>[u] comme dans "tu"</td>
                                    <td>üç (utch) = trois</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="info-box">
                            <strong>Note :</strong> Les lettres Q, W et X n'existent pas en turc !
                        </div>
                    </div>
                `
            },

            pronouns: {
                title: "Les Pronoms Personnels",
                content: `
                    <div class="grammar-section">
                        <h4>Pronoms personnels sujets</h4>
                        <table class="grammar-table">
                            <thead>
                                <tr>
                                    <th>Turc</th>
                                    <th>Phonétique</th>
                                    <th>Français</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Ben</strong></td>
                                    <td>[bèn]</td>
                                    <td>Je</td>
                                </tr>
                                <tr>
                                    <td><strong>Sen</strong></td>
                                    <td>[sèn]</td>
                                    <td>Tu</td>
                                </tr>
                                <tr>
                                    <td><strong>O</strong></td>
                                    <td>[o]</td>
                                    <td>Il / Elle</td>
                                </tr>
                                <tr>
                                    <td><strong>Biz</strong></td>
                                    <td>[biz]</td>
                                    <td>Nous</td>
                                </tr>
                                <tr>
                                    <td><strong>Siz</strong></td>
                                    <td>[siz]</td>
                                    <td>Vous</td>
                                </tr>
                                <tr>
                                    <td><strong>Onlar</strong></td>
                                    <td>[on-lar]</td>
                                    <td>Ils / Elles</td>
                                </tr>
                            </tbody>
                        </table>

                        <h4>Pronoms possessifs</h4>
                        <p>Les suffixes possessifs s'ajoutent au nom :</p>
                        <table class="grammar-table">
                            <thead>
                                <tr>
                                    <th>Pronom</th>
                                    <th>Suffixe</th>
                                    <th>Exemple (ev = maison)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ben (je)</td>
                                    <td>-(i)m</td>
                                    <td>ev<strong>im</strong> = ma maison</td>
                                </tr>
                                <tr>
                                    <td>Sen (tu)</td>
                                    <td>-(i)n</td>
                                    <td>ev<strong>in</strong> = ta maison</td>
                                </tr>
                                <tr>
                                    <td>O (il/elle)</td>
                                    <td>-(s)i</td>
                                    <td>ev<strong>i</strong> = sa maison</td>
                                </tr>
                                <tr>
                                    <td>Biz (nous)</td>
                                    <td>-(i)miz</td>
                                    <td>ev<strong>imiz</strong> = notre maison</td>
                                </tr>
                                <tr>
                                    <td>Siz (vous)</td>
                                    <td>-(i)niz</td>
                                    <td>ev<strong>iniz</strong> = votre maison</td>
                                </tr>
                                <tr>
                                    <td>Onlar (ils/elles)</td>
                                    <td>-(l)eri</td>
                                    <td>ev<strong>leri</strong> = leur maison</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="info-box">
                            <strong>Important :</strong> "O" est utilisé pour "il" et "elle" sans distinction de genre !
                        </div>
                    </div>
                `
            },

            verbs: {
                title: "Les Verbes et la Conjugaison",
                content: `
                    <div class="grammar-section">
                        <h4>Le verbe "être" au présent</h4>
                        <p>En turc, le verbe être se conjugue avec des suffixes :</p>
                        <table class="grammar-table">
                            <thead>
                                <tr>
                                    <th>Pronom</th>
                                    <th>Suffixe</th>
                                    <th>Exemple (güzel = beau)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ben</td>
                                    <td>-(y)im</td>
                                    <td>güzel<strong>im</strong> = je suis beau/belle</td>
                                </tr>
                                <tr>
                                    <td>Sen</td>
                                    <td>-sin</td>
                                    <td>güzel<strong>sin</strong> = tu es beau/belle</td>
                                </tr>
                                <tr>
                                    <td>O</td>
                                    <td>(rien)</td>
                                    <td>güzel = il/elle est beau/belle</td>
                                </tr>
                                <tr>
                                    <td>Biz</td>
                                    <td>-(y)iz</td>
                                    <td>güzel<strong>iz</strong> = nous sommes beaux/belles</td>
                                </tr>
                                <tr>
                                    <td>Siz</td>
                                    <td>-siniz</td>
                                    <td>güzel<strong>siniz</strong> = vous êtes beaux/belles</td>
                                </tr>
                                <tr>
                                    <td>Onlar</td>
                                    <td>-(l)er</td>
                                    <td>güzel<strong>ler</strong> = ils/elles sont beaux/belles</td>
                                </tr>
                            </tbody>
                        </table>

                        <h4>Les temps principaux</h4>
                        <div class="tense-card">
                            <h5>Présent continu (-iyor)</h5>
                            <p><strong>Formation :</strong> Racine + -iyor + terminaison personnelle</p>
                            <p><strong>Exemple :</strong> gelmek (venir) → gel<strong>iyor</strong>um = je viens</p>
                        </div>

                        <div class="tense-card">
                            <h5>Passé (-di)</h5>
                            <p><strong>Formation :</strong> Racine + -di + terminaison personnelle</p>
                            <p><strong>Exemple :</strong> gelmek (venir) → gel<strong>di</strong>m = je suis venu(e)</p>
                        </div>

                        <div class="tense-card">
                            <h5>Futur (-ecek / -acak)</h5>
                            <p><strong>Formation :</strong> Racine + -ecek/acak + terminaison personnelle</p>
                            <p><strong>Exemple :</strong> gelmek (venir) → gel<strong>ecek</strong>im = je viendrai</p>
                        </div>

                        <h4>Infinitif</h4>
                        <p>Tous les verbes turcs à l'infinitif se terminent par <strong>-mek</strong> ou <strong>-mak</strong></p>
                        <ul>
                            <li>gelmek = venir</li>
                            <li>gitmek = aller</li>
                            <li>yapmak = faire</li>
                            <li>almak = prendre, acheter</li>
                        </ul>
                    </div>
                `
            },

            cases: {
                title: "Les Cas Grammaticaux",
                content: `
                    <div class="grammar-section">
                        <h4>Les 6 cas en turc</h4>
                        <p>Le turc utilise des suffixes pour indiquer la fonction grammaticale des mots :</p>

                        <table class="grammar-table">
                            <thead>
                                <tr>
                                    <th>Cas</th>
                                    <th>Suffixe</th>
                                    <th>Fonction</th>
                                    <th>Exemple</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Nominatif</strong></td>
                                    <td>(aucun)</td>
                                    <td>Sujet</td>
                                    <td>ev = la maison (sujet)</td>
                                </tr>
                                <tr>
                                    <td><strong>Accusatif</strong></td>
                                    <td>-(y)i, -(y)ı, -(y)u, -(y)ü</td>
                                    <td>Complément d'objet direct</td>
                                    <td>ev<strong>i</strong> = la maison (COD)</td>
                                </tr>
                                <tr>
                                    <td><strong>Datif</strong></td>
                                    <td>-(y)e, -(y)a</td>
                                    <td>À, vers</td>
                                    <td>ev<strong>e</strong> = à la maison</td>
                                </tr>
                                <tr>
                                    <td><strong>Locatif</strong></td>
                                    <td>-de, -da, -te, -ta</td>
                                    <td>Dans, à, sur</td>
                                    <td>ev<strong>de</strong> = dans la maison</td>
                                </tr>
                                <tr>
                                    <td><strong>Ablatif</strong></td>
                                    <td>-den, -dan, -ten, -tan</td>
                                    <td>De, depuis</td>
                                    <td>ev<strong>den</strong> = de la maison</td>
                                </tr>
                                <tr>
                                    <td><strong>Génitif</strong></td>
                                    <td>-(n)in, -(n)ın, -(n)un, -(n)ün</td>
                                    <td>Possession (de)</td>
                                    <td>ev<strong>in</strong> = de la maison</td>
                                </tr>
                            </tbody>
                        </table>

                        <h4>Exemples pratiques</h4>
                        <div class="example-box">
                            <p><strong>Araba</strong> (la voiture) :</p>
                            <ul>
                                <li>araba = la voiture (nominatif)</li>
                                <li>arabayı = la voiture (accusatif)</li>
                                <li>arabaya = à la voiture (datif)</li>
                                <li>arabada = dans la voiture (locatif)</li>
                                <li>arabadan = de la voiture (ablatif)</li>
                                <li>arabanın = de la voiture (génitif)</li>
                            </ul>
                        </div>

                        <div class="info-box">
                            <strong>Astuce :</strong> Le choix de la voyelle dans le suffixe dépend de l'harmonie vocalique !
                        </div>
                    </div>
                `
            },

            harmony: {
                title: "L'Harmonie Vocalique",
                content: `
                    <div class="grammar-section">
                        <h4>Qu'est-ce que l'harmonie vocalique ?</h4>
                        <p>L'harmonie vocalique est une règle fondamentale du turc : <strong>les voyelles d'un mot doivent s'harmoniser</strong> entre elles.</p>

                        <h4>Classification des voyelles</h4>
                        <div class="vowel-grid">
                            <div class="vowel-group">
                                <h5>Voyelles antérieures</h5>
                                <p><strong>e, i, ö, ü</strong></p>
                                <p class="vowel-desc">Prononcées à l'avant de la bouche</p>
                            </div>
                            <div class="vowel-group">
                                <h5>Voyelles postérieures</h5>
                                <p><strong>a, ı, o, u</strong></p>
                                <p class="vowel-desc">Prononcées à l'arrière de la bouche</p>
                            </div>
                        </div>

                        <h4>Règles d'harmonie</h4>
                        <div class="harmony-rule">
                            <h5>Règle 1 : Harmonie en 2 temps</h5>
                            <table class="grammar-table">
                                <thead>
                                    <tr>
                                        <th>Dernière voyelle du mot</th>
                                        <th>Voyelle du suffixe</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>a, ı</td>
                                        <td>a</td>
                                    </tr>
                                    <tr>
                                        <td>e, i</td>
                                        <td>e</td>
                                    </tr>
                                    <tr>
                                        <td>o, u</td>
                                        <td>a</td>
                                    </tr>
                                    <tr>
                                        <td>ö, ü</td>
                                        <td>e</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="harmony-rule">
                            <h5>Règle 2 : Harmonie en 4 temps</h5>
                            <table class="grammar-table">
                                <thead>
                                    <tr>
                                        <th>Dernière voyelle du mot</th>
                                        <th>Voyelle du suffixe</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>a, ı</td>
                                        <td>ı</td>
                                    </tr>
                                    <tr>
                                        <td>e, i</td>
                                        <td>i</td>
                                    </tr>
                                    <tr>
                                        <td>o, u</td>
                                        <td>u</td>
                                    </tr>
                                    <tr>
                                        <td>ö, ü</td>
                                        <td>ü</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4>Exemples pratiques</h4>
                        <div class="example-box">
                            <p><strong>Suffixe -de/-da (locatif) :</strong></p>
                            <ul>
                                <li>ev (maison) → ev<strong>de</strong> (dans la maison)</li>
                                <li>okul (école) → okul<strong>da</strong> (à l'école)</li>
                                <li>şehir (ville) → şehir<strong>de</strong> (dans la ville)</li>
                                <li>araba (voiture) → araba<strong>da</strong> (dans la voiture)</li>
                            </ul>
                        </div>

                        <div class="example-box">
                            <p><strong>Suffixe accusatif -(y)i/ı/u/ü :</strong></p>
                            <ul>
                                <li>ev → ev<strong>i</strong></li>
                                <li>kitap → kitab<strong>ı</strong></li>
                                <li>okul → okul<strong>u</strong></li>
                                <li>gül → gül<strong>ü</strong></li>
                            </ul>
                        </div>

                        <div class="info-box">
                            <strong>Exception :</strong> Certains mots empruntés à d'autres langues ne suivent pas toujours l'harmonie vocalique.
                        </div>
                    </div>
                `
            }
        };
    }

    /**
     * Initialize grammar tabs
     */
    initTabs() {
        const tabButtons = document.querySelectorAll('.section-grammar .tab-btn');

        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const topic = btn.getAttribute('data-grammar');

                // Update active tab
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Display selected topic
                this.displayTopic(topic);
            });
        });
    }

    /**
     * Display a grammar topic
     * @param {string} topicKey - The topic key
     */
    displayTopic(topicKey) {
        this.currentTopic = topicKey;
        const contentContainer = document.getElementById('grammarContent');

        if (!contentContainer) return;

        const topic = this.grammarTopics[topicKey];

        if (!topic) {
            contentContainer.innerHTML = '<p>Contenu non disponible</p>';
            return;
        }

        contentContainer.innerHTML = `
            <div class="grammar-topic">
                <h3 class="grammar-topic-title">${topic.title}</h3>
                ${topic.content}
            </div>
        `;
    }
}

// Export for use in app.js
window.GrammarModule = GrammarModule;
