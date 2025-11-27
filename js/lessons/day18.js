/**
 * JOUR 18 : La météo
 */

(function() {
    if (window.day18) return; // Already loaded

    window.day18 = {
    id: 18,
    title: "La météo",
    description: "Apprenez à parler du temps qu'il fait en turc",
    week: 3,

    vocabulary: [
        { turkish: "Hava", phonetic: "ha-va", translation: "Temps / Air" },
        { turkish: "Güneş", phonetic: "gü-nèch", translation: "Soleil" },
        { turkish: "Yağmur", phonetic: "ya-mour", translation: "Pluie" },
        { turkish: "Kar", phonetic: "kar", translation: "Neige" },
        { turkish: "Rüzgar", phonetic: "rüz-gar", translation: "Vent" },
        { turkish: "Sıcak", phonetic: "seu-djak", translation: "Chaud" },
        { turkish: "Soğuk", phonetic: "so-ouk", translation: "Froid" },
        { turkish: "Bulut", phonetic: "bou-lout", translation: "Nuage" },
        { turkish: "Fırtına", phonetic: "feur-teu-na", translation: "Tempête" },
        { turkish: "Sis", phonetic: "sis", translation: "Brouillard" },
        { turkish: "Güneşli", phonetic: "gü-nèch-li", translation: "Ensoleillé" },
        { turkish: "Yağmurlu", phonetic: "ya-mour-lou", translation: "Pluvieux" },
        { turkish: "Karlı", phonetic: "kar-leu", translation: "Neigeux" },
        { turkish: "Bulutlu", phonetic: "bou-lout-lou", translation: "Nuageux" },
        { turkish: "Serin", phonetic: "sé-rin", translation: "Frais" }
    ],

    dialogue: [
        {
            speaker: "Ali",
            turkish: "Bugün hava nasıl?",
            phonetic: "Bou-gün ha-va na-seul?",
            french: "Quel temps fait-il aujourd'hui ?"
        },
        {
            speaker: "Aylin",
            turkish: "Çok güneşli ve sıcak.",
            phonetic: "Tchok gü-nèch-li vé seu-djak.",
            french: "Il fait très beau et chaud."
        },
        {
            speaker: "Ali",
            turkish: "Yarın yağmur yağacak mı?",
            phonetic: "Ya-reun ya-mour ya-a-djak meu?",
            french: "Est-ce qu'il va pleuvoir demain ?"
        },
        {
            speaker: "Aylin",
            turkish: "Evet, yarın hava yağmurlu olacak.",
            phonetic: "É-vèt, ya-reun ha-va ya-mour-lou o-la-djak.",
            french: "Oui, demain il fera pluvieux."
        }
    ],

    grammar: {
        title: "Le suffixe adjectival -li/-lı/-lu/-lü",
        content: `
            <p>Le suffixe <strong>-li/-lı/-lu/-lü</strong> transforme un nom en adjectif signifiant "avec" ou "qui a".</p>

            <h4>Formation selon l'harmonie vocalique :</h4>
            <ul>
                <li>Voyelle e, i → <strong>-li</strong> (güneş → güneşli = ensoleillé)</li>
                <li>Voyelle a, ı → <strong>-lı</strong> (kar → karlı = neigeux)</li>
                <li>Voyelle o, u → <strong>-lu</strong> (bulut → bulutlu = nuageux)</li>
                <li>Voyelle ö, ü → <strong>-lü</strong> (gül → güllü = avec des roses)</li>
            </ul>

            <h4>Exemples météo :</h4>
            <ul>
                <li><strong>Güneşli</strong> bir gün (Un jour <em>ensoleillé</em>)</li>
                <li><strong>Yağmurlu</strong> hava (Temps <em>pluvieux</em>)</li>
                <li><strong>Karlı</strong> bir kış (Un hiver <em>neigeux</em>)</li>
                <li><strong>Rüzgarlı</strong> bir gece (Une nuit <em>venteuse</em>)</li>
            </ul>

            <h4>Autres exemples :</h4>
            <ul>
                <li><strong>Şekerli</strong> çay (Thé <em>avec du sucre</em>)</li>
                <li><strong>Sütlü</strong> kahve (Café <em>au lait</em>)</li>
            </ul>
        `
    },

    culture: {
        title: "Le climat de la Turquie",
        content: "La Turquie a une grande diversité climatique. Les côtes méditerranéenne et égéenne ont des étés chauds et secs, des hivers doux. Istanbul et la région de Marmara ont un climat tempéré. L'Anatolie centrale connaît des étés très chauds et des hivers rigoureux avec de la neige. La côte de la mer Noire est la plus pluvieuse du pays. En été, les températures peuvent dépasser 40°C dans le sud-est, tandis qu'en hiver, il peut faire -30°C dans l'est."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'il pleut' en turc ?",
            options: ["Kar yağıyor", "Yağmur yağıyor", "Güneş var", "Rüzgar esiyor"],
            correct: 1,
            explanation: "Yağmur yağıyor signifie 'il pleut' (littéralement : la pluie tombe)."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Bugün hava sıcak' ?",
            options: ["Aujourd'hui il fait froid", "Aujourd'hui il fait chaud", "Aujourd'hui il pleut", "Aujourd'hui il neige"],
            correct: 1,
            explanation: "Bugün hava sıcak signifie 'Aujourd'hui il fait chaud'."
        },
        {
            type: "multiple-choice",
            question: "Comment forme-t-on 'ensoleillé' à partir de 'güneş' (soleil) ?",
            options: ["Güneşlı", "Güneşlu", "Güneşli", "Güneşle"],
            correct: 2,
            explanation: "Güneşli (ensoleillé) = güneş + li (selon l'harmonie vocalique avec e)."
        }
    ]
};

// Export pour utilisation

    // Export for Node.js if needed
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = window.day18;
    }
})();
