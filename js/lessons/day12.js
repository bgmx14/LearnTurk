/**
 * JOUR 12 : Les vêtements
 */

(function() {
    if (window.day12) return; // Already loaded

    window.day12 = {
    id: 12,
    title: "Les vêtements",
    description: "Vocabulaire essentiel sur les vêtements",
    week: 2,

    vocabulary: [
        { turkish: "Giysi", phonetic: "gui-si", translation: "vêtement" },
        { turkish: "Gömlek", phonetic: "gueum-lèk", translation: "chemise" },
        { turkish: "Tişört", phonetic: "ti-cheurt", translation: "t-shirt" },
        { turkish: "Pantolon", phonetic: "pan-to-lon", translation: "pantalon" },
        { turkish: "Etek", phonetic: "é-tèk", translation: "jupe" },
        { turkish: "Elbise", phonetic: "èl-bi-sé", translation: "robe" },
        { turkish: "Ceket", phonetic: "djé-kèt", translation: "veste" },
        { turkish: "Ayakkabı", phonetic: "a-yak-ka-beu", translation: "chaussures" },
        { turkish: "Çorap", phonetic: "tcho-rap", translation: "chaussettes" },
        { turkish: "Şapka", phonetic: "chap-ka", translation: "chapeau" },
        { turkish: "Renk", phonetic: "rènk", translation: "couleur" },
        { turkish: "Beden", phonetic: "bé-dèn", translation: "taille" },
        { turkish: "Büyük", phonetic: "bü-yük", translation: "grand" },
        { turkish: "Küçük", phonetic: "kü-tchük", translation: "petit" },
        { turkish: "Giymek", phonetic: "gui-mèk", translation: "porter, mettre" }
    ],

    dialogue: [
        {
            speaker: "Satıcı (Vendeur)",
            turkish: "Bu gömlek çok güzel. Denemek ister misiniz?",
            phonetic: "Bou gueum-lèk tchok gü-zèl. Dé-né-mèk is-tèr mi-si-niz?",
            french: "Cette chemise est très belle. Voulez-vous l'essayer?"
        },
        {
            speaker: "Müşteri (Client)",
            turkish: "Evet. Beden kaç?",
            phonetic: "É-vèt. Bé-dèn katch?",
            french: "Oui. Quelle taille?"
        },
        {
            speaker: "Satıcı",
            turkish: "Orta beden. Başka renk var mı istiyorsunuz?",
            phonetic: "Or-ta bé-dèn. Bach-ka rènk var meu is-ti-yor-sou-nouz?",
            french: "Taille moyenne. Voulez-vous une autre couleur?"
        },
        {
            speaker: "Müşteri",
            turkish: "Mavi var mı?",
            phonetic: "Ma-vi var meu?",
            french: "Avez-vous du bleu?"
        }
    ],

    grammar: {
        title: "Parler des vêtements et des tailles",
        content: `
            <h4>Les tailles :</h4>
            <div class="grammar-example">
                <strong>Küçük beden</strong> = Petite taille (S)<br>
                <strong>Orta beden</strong> = Taille moyenne (M)<br>
                <strong>Büyük beden</strong> = Grande taille (L)<br>
                Beden kaç? = Quelle taille?
            </div>

            <h4>Essayer des vêtements :</h4>
            <div class="grammar-example">
                <strong>Denemek</strong> = Essayer<br>
                Denemek istiyorum = Je veux essayer<br>
                Deneyebilir miyim? = Puis-je essayer?<br>
                Deneme kabini nerede? = Où est la cabine d'essayage?
            </div>

            <h4>Les couleurs :</h4>
            <div class="grammar-example">
                Kırmızı = Rouge<br>
                Mavi = Bleu<br>
                Beyaz = Blanc<br>
                Siyah = Noir<br>
                Yeşil = Vert<br>
                Sarı = Jaune
            </div>

            <h4>Questions utiles :</h4>
            <div class="grammar-example">
                Başka renk var mı? = Y a-t-il d'autres couleurs?<br>
                Başka beden var mı? = Y a-t-il d'autres tailles?<br>
                Buna uyor mu? = Ça me va?
            </div>
        `
    },

    culture: {
        title: "La mode en Turquie",
        content: "La Turquie a une industrie textile très développée. Les grandes villes comme Istanbul offrent un mélange de mode occidentale et orientale. Dans les quartiers traditionnels, on peut trouver des vêtements artisanaux et des tissus magnifiques. Les Turcs s'habillent généralement de manière soignée. Dans les mosquées, il faut se couvrir les épaules et porter des vêtements qui couvrent les genoux."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'chaussures' en turc ?",
            options: ["Çorap", "Ayakkabı", "Şapka", "Pantolon"],
            correct: 1,
            explanation: "Ayakkabı signifie 'chaussures' en turc."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Orta beden' ?",
            options: ["Petite taille", "Taille moyenne", "Grande taille", "Couleur moyenne"],
            correct: 1,
            explanation: "Orta beden signifie 'taille moyenne' en turc."
        },
        {
            type: "multiple-choice",
            question: "Comment demande-t-on 'Puis-je essayer?' en turc ?",
            options: ["Deneyebilir miyim?", "Ne kadar?", "Var mı?", "İstiyorum"],
            correct: 0,
            explanation: "Deneyebilir miyim? = Puis-je essayer?"
        }
    ]
};

    // Export for Node.js if needed
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = window.day12;
    }
})();
