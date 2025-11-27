/**
 * JOUR 15 : Les transports
 */

const day15 = {
    id: 15,
    title: "Les transports",
    description: "Apprenez à vous déplacer en Turquie : bus, taxi, train, avion",
    week: 3,

    vocabulary: [
        { turkish: "Otobüs", phonetic: "o-to-büs", translation: "Bus" },
        { turkish: "Taksi", phonetic: "tak-si", translation: "Taxi" },
        { turkish: "Tren", phonetic: "trèn", translation: "Train" },
        { turkish: "Uçak", phonetic: "ou-tchak", translation: "Avion" },
        { turkish: "Bilet", phonetic: "bi-lèt", translation: "Billet" },
        { turkish: "Durak", phonetic: "dou-rak", translation: "Arrêt" },
        { turkish: "Havaalanı", phonetic: "ha-va-a-la-neu", translation: "Aéroport" },
        { turkish: "Gar", phonetic: "gar", translation: "Gare" },
        { turkish: "Metro", phonetic: "mét-ro", translation: "Métro" },
        { turkish: "Tramvay", phonetic: "tram-vaï", translation: "Tramway" },
        { turkish: "Araba", phonetic: "a-ra-ba", translation: "Voiture" },
        { turkish: "Bisiklet", phonetic: "bi-sik-lèt", translation: "Vélo" },
        { turkish: "Yolcu", phonetic: "yol-djou", translation: "Passager" },
        { turkish: "Şoför", phonetic: "cho-för", translation: "Chauffeur" },
        { turkish: "İstasyon", phonetic: "is-tas-yon", translation: "Station" }
    ],

    dialogue: [
        {
            speaker: "Turist",
            turkish: "Havaalanına nasıl gidebilirim?",
            phonetic: "Ha-va-a-la-neu-na na-seul gi-dé-bi-li-rim?",
            french: "Comment puis-je aller à l'aéroport ?"
        },
        {
            speaker: "Görevli",
            turkish: "Otobüs veya taksi ile gidebilirsiniz.",
            phonetic: "O-to-büs vé-ya tak-si i-lé gi-dé-bi-lir-si-niz.",
            french: "Vous pouvez y aller en bus ou en taxi."
        },
        {
            speaker: "Turist",
            turkish: "Bilet ne kadar?",
            phonetic: "Bi-lèt né ka-dar?",
            french: "Combien coûte le billet ?"
        },
        {
            speaker: "Görevli",
            turkish: "Otobüs bileti elli lira.",
            phonetic: "O-to-büs bi-lé-ti él-li li-ra.",
            french: "Le billet de bus coûte cinquante lires."
        }
    ],

    grammar: {
        title: "Le datif (-e, -a) : direction",
        content: `
            <p>Le datif indique la <strong>direction</strong> ou le <strong>destinataire</strong> d'une action.</p>

            <h4>Formation :</h4>
            <ul>
                <li>Voyelles e, i, ö, ü → <strong>-e</strong> (eve = à la maison)</li>
                <li>Voyelles a, ı, o, u → <strong>-a</strong> (okula = à l'école)</li>
            </ul>

            <h4>Exemples :</h4>
            <ul>
                <li><strong>Havaalanına</strong> gidiyorum. (Je vais <em>à l'aéroport</em>)</li>
                <li><strong>İstanbul'a</strong> gidiyorum. (Je vais <em>à Istanbul</em>)</li>
                <li><strong>Ankara'ya</strong> gidiyorum. (Je vais <em>à Ankara</em>)</li>
                <li><strong>Eve</strong> gidiyorum. (Je vais <em>à la maison</em>)</li>
            </ul>

            <p><em>Note : Avec les noms propres, on utilise une apostrophe : İstanbul'a, Ankara'ya</em></p>
        `
    },

    culture: {
        title: "Les transports en commun à Istanbul",
        content: "Istanbul possède un système de transport très développé : métro, tramway, bus, métrobus, et ferries. La carte İstanbulkart est indispensable - elle permet de payer tous les transports en commun avec une réduction. Le métrobus traverse la ville d'est en ouest et permet d'éviter les embouteillages légendaires d'Istanbul. Les ferries qui traversent le Bosphore sont non seulement pratiques mais offrent aussi une vue magnifique sur la ville."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'aéroport' en turc ?",
            options: ["Gar", "İstasyon", "Havaalanı", "Durak"],
            correct: 2,
            explanation: "Havaalanı signifie 'aéroport' (littéralement : lieu de l'air)."
        },
        {
            type: "multiple-choice",
            question: "Quelle est la bonne forme : 'Je vais à l'aéroport' ?",
            options: ["Havaalanı gidiyorum", "Havaalanına gidiyorum", "Havaalanından gidiyorum", "Havaalanıda gidiyorum"],
            correct: 1,
            explanation: "On utilise le datif -na/-ne pour indiquer la direction : Havaalanına gidiyorum."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Durak' ?",
            options: ["Gare", "Arrêt", "Billet", "Station"],
            correct: 1,
            explanation: "Durak signifie 'arrêt' (d'autobus, de tramway, etc.)."
        }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day15;
}
