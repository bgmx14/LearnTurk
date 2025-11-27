/**
 * JOUR 23 : Santé
 */

(function() {
    if (window.day23) return; // Already loaded

    window.day23 = {
    id: 23,
    title: "Santé",
    description: "Vocabulaire médical et expressions pour parler de la santé",
    week: 4,

    vocabulary: [
        { turkish: "Sağlık", phonetic: "sa-leuk", translation: "santé" },
        { turkish: "Hasta", phonetic: "has-ta", translation: "malade" },
        { turkish: "Hastane", phonetic: "has-ta-né", translation: "hôpital" },
        { turkish: "Doktor", phonetic: "dok-tor", translation: "médecin" },
        { turkish: "İlaç", phonetic: "i-latch", translation: "médicament" },
        { turkish: "Ağrı", phonetic: "a-reu", translation: "douleur" },
        { turkish: "Ateş", phonetic: "a-tèch", translation: "fièvre" },
        { turkish: "Baş ağrısı", phonetic: "bach a-reu-seu", translation: "mal de tête" },
        { turkish: "Soğuk algınlığı", phonetic: "so-ouk al-geun-leu-reu", translation: "rhume" },
        { turkish: "Grip", phonetic: "grip", translation: "grippe" },
        { turkish: "Eczane", phonetic: "èdz-za-né", translation: "pharmacie" },
        { turkish: "Reçete", phonetic: "ré-tché-té", translation: "ordonnance" },
        { turkish: "Hemşire", phonetic: "hèm-chi-ré", translation: "infirmière" },
        { turkish: "Ameliyat", phonetic: "a-mé-li-yat", translation: "opération" },
        { turkish: "Sağlıklı", phonetic: "sa-leuk-leu", translation: "en bonne santé" }
    ],

    dialogue: [
        {
            speaker: "Doktor",
            turkish: "Neden geldiniz? Ne şikayetiniz var?",
            phonetic: "Né-dèn guèl-di-niz? Né chi-ka-yé-ti-niz var?",
            french: "Pourquoi êtes-vous venu? Quelle est votre plainte?"
        },
        {
            speaker: "Hasta",
            turkish: "Başım çok ağrıyor ve ateşim var.",
            phonetic: "Ba-cheum tchok a-reu-yor vé a-té-chim var.",
            french: "J'ai très mal à la tête et j'ai de la fièvre."
        },
        {
            speaker: "Doktor",
            turkish: "Anlıyorum. Size ilaç yazacağım.",
            phonetic: "An-leu-yo-roum. Si-zé i-latch ya-za-dja-eum.",
            french: "Je comprends. Je vais vous prescrire des médicaments."
        },
        {
            speaker: "Hasta",
            turkish: "Teşekkür ederim. İlaçları nereden alabilirim?",
            phonetic: "Té-chèk-kur é-dé-rim. I-latch-la-reu né-ré-dèn a-la-bi-li-rim?",
            french: "Merci. Où puis-je obtenir les médicaments?"
        }
    ],

    grammar: {
        title: "Exprimer la douleur et les symptômes",
        content: `
            <p>Pour exprimer une douleur en turc, on utilise le mot <strong>ağrı</strong> (douleur) avec le suffixe possessif.</p>

            <h4>Formation des expressions de douleur :</h4>
            <ul>
                <li><strong>Baş</strong> (tête) + <strong>ağrısı</strong> = Baş ağrısı (mal de tête)</li>
                <li><strong>Diş</strong> (dent) + <strong>ağrısı</strong> = Diş ağrısı (mal de dents)</li>
                <li><strong>Karın</strong> (ventre) + <strong>ağrısı</strong> = Karın ağrısı (mal au ventre)</li>
            </ul>

            <h4>Verbe "ağrımak" (avoir mal) :</h4>
            <ul>
                <li>Başım <strong>ağrıyor</strong> → J'ai mal à la tête (ma tête fait mal)</li>
                <li>Dişim <strong>ağrıyor</strong> → J'ai mal aux dents</li>
                <li>Karnım <strong>ağrıyor</strong> → J'ai mal au ventre</li>
            </ul>

            <h4>Expression "var" pour les symptômes :</h4>
            <ul>
                <li>Ateşim <strong>var</strong> → J'ai de la fièvre</li>
                <li>Grip<strong>im var</strong> → J'ai la grippe</li>
                <li>Soğuk algınlığ<strong>ım var</strong> → J'ai un rhume</li>
            </ul>
        `
    },

    culture: {
        title: "Le système de santé turc",
        content: "En Turquie, le système de santé combine hôpitaux publics et privés. Les pharmacies (eczane) sont très répandues et facilement reconnaissables grâce à leur croix verte. Beaucoup de médicaments nécessitent une ordonnance, mais certains sont disponibles sans. Les Turcs utilisent souvent des remèdes traditionnels comme le citron chaud avec du miel pour les rhumes."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'j'ai mal à la tête' en turc?",
            options: ["Başım var", "Başım ağrıyor", "Baş ateş", "Başım hasta"],
            correct: 1,
            explanation: "Başım ağrıyor signifie 'j'ai mal à la tête' (littéralement: ma tête fait mal)."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'eczane'?",
            options: ["Hôpital", "Médecin", "Pharmacie", "Médicament"],
            correct: 2,
            explanation: "Eczane signifie 'pharmacie' en turc."
        },
        {
            type: "multiple-choice",
            question: "Quel est le mot pour 'fièvre'?",
            options: ["Ağrı", "Ateş", "Grip", "Hasta"],
            correct: 1,
            explanation: "Ateş signifie 'fièvre' en turc."
        }
    ]
};

// Export pour utilisation

    // Export for Node.js if needed
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = window.day23;
    }
})();
