/**
 * JOUR 10 : Les boissons
 */

(function() {
    if (window.day10) return; // Already loaded

    window.day10 = {
    id: 10,
    title: "Les boissons",
    description: "Vocabulaire essentiel sur les boissons",
    week: 2,

    vocabulary: [
        { turkish: "İçecek", phonetic: "i-tché-djèk", translation: "boisson" },
        { turkish: "Su", phonetic: "sou", translation: "eau" },
        { turkish: "Çay", phonetic: "tchaï", translation: "thé" },
        { turkish: "Kahve", phonetic: "kah-vé", translation: "café" },
        { turkish: "Süt", phonetic: "süt", translation: "lait" },
        { turkish: "Ayran", phonetic: "aï-ran", translation: "ayran (boisson au yaourt)" },
        { turkish: "Meyve suyu", phonetic: "méy-vé sou-you", translation: "jus de fruits" },
        { turkish: "Portakal suyu", phonetic: "por-ta-kal sou-you", translation: "jus d'orange" },
        { turkish: "Şarap", phonetic: "cha-rap", translation: "vin" },
        { turkish: "Bira", phonetic: "bi-ra", translation: "bière" },
        { turkish: "Soğuk", phonetic: "so-ouk", translation: "froid" },
        { turkish: "Sıcak", phonetic: "seu-jak", translation: "chaud" },
        { turkish: "Tatlı", phonetic: "tat-leu", translation: "sucré" },
        { turkish: "Şekerli", phonetic: "ché-kèr-li", translation: "avec du sucre" },
        { turkish: "Şekersiz", phonetic: "ché-kèr-siz", translation: "sans sucre" }
    ],

    dialogue: [
        {
            speaker: "Garson (Serveur)",
            turkish: "Ne içmek istersiniz?",
            phonetic: "Né ich-mèk is-tèr-si-niz?",
            french: "Que voulez-vous boire?"
        },
        {
            speaker: "Müşteri (Client)",
            turkish: "Bir çay lütfen. Şekerli.",
            phonetic: "Bir tchaï lüt-fèn. Ché-kèr-li.",
            french: "Un thé s'il vous plaît. Avec du sucre."
        },
        {
            speaker: "Garson",
            turkish: "Soğuk mu sıcak mı?",
            phonetic: "So-ouk mou seu-jak meu?",
            french: "Froid ou chaud?"
        },
        {
            speaker: "Müşteri",
            turkish: "Sıcak lütfen. Teşekkürler.",
            phonetic: "Seu-jak lüt-fèn. Té-chèk-kür-lèr.",
            french: "Chaud s'il vous plaît. Merci."
        }
    ],

    grammar: {
        title: "Commander une boisson",
        content: `
            <h4>Structure de base :</h4>
            <div class="grammar-example">
                <strong>Bir ... lütfen</strong> = Un/Une ... s'il vous plaît<br>
                Bir çay lütfen = Un thé s'il vous plaît<br>
                Bir kahve lütfen = Un café s'il vous plaît<br>
                Bir su lütfen = Une eau s'il vous plaît
            </div>

            <h4>Préciser les préférences :</h4>
            <div class="grammar-example">
                <strong>Şekerli</strong> = Avec du sucre<br>
                <strong>Şekersiz</strong> = Sans sucre<br>
                <strong>Soğuk</strong> = Froid<br>
                <strong>Sıcak</strong> = Chaud<br>
                <strong>Sütlü</strong> = Avec du lait<br>
                <strong>Sütsüz</strong> = Sans lait
            </div>

            <h4>Questions alternatives avec MI :</h4>
            <div class="grammar-example">
                Soğuk mu sıcak mı? = Froid ou chaud?<br>
                Şekerli mi şekersiz mi? = Avec ou sans sucre?<br>
                Çay mı kahve mi? = Thé ou café?
            </div>
        `
    },

    culture: {
        title: "La culture du thé en Turquie",
        content: "Le thé (çay) est la boisson la plus populaire en Turquie. Il est servi dans de petits verres en forme de tulipe. Les Turcs boivent du thé toute la journée, surtout après les repas. L'ayran est une boisson traditionnelle à base de yaourt salé, très rafraîchissante. Le café turc (Türk kahvesi) est préparé d'une manière spéciale et servi dans de petites tasses."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'eau' en turc ?",
            options: ["Çay", "Su", "Süt", "Kahve"],
            correct: 1,
            explanation: "Su signifie 'eau' en turc."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Şekersiz' ?",
            options: ["Avec du sucre", "Sans sucre", "Froid", "Chaud"],
            correct: 1,
            explanation: "Şekersiz signifie 'sans sucre' en turc."
        },
        {
            type: "multiple-choice",
            question: "Comment demande-t-on 'Froid ou chaud?' en turc ?",
            options: ["Çay mı kahve mi?", "Soğuk mu sıcak mı?", "Su lütfen", "Şekerli mi?"],
            correct: 1,
            explanation: "Soğuk mu sıcak mı? = Froid ou chaud?"
        }
    ]
};

    // Export for Node.js if needed
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = window.day10;
    }
})();
