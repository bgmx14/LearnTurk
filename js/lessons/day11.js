/**
 * JOUR 11 : Les courses
 */

const day11 = {
    id: 11,
    title: "Les courses",
    description: "Vocabulaire essentiel pour faire du shopping",
    week: 2,

    vocabulary: [
        { turkish: "Alışveriş", phonetic: "a-leuch-vé-rich", translation: "shopping" },
        { turkish: "Market", phonetic: "mar-kèt", translation: "supermarché" },
        { turkish: "Mağaza", phonetic: "ma-a-za", translation: "magasin" },
        { turkish: "Fiyat", phonetic: "fi-yat", translation: "prix" },
        { turkish: "Para", phonetic: "pa-ra", translation: "argent" },
        { turkish: "Lira", phonetic: "li-ra", translation: "livre turque" },
        { turkish: "Ucuz", phonetic: "ou-jouz", translation: "pas cher" },
        { turkish: "Pahalı", phonetic: "pa-ha-leu", translation: "cher" },
        { turkish: "İndirim", phonetic: "in-di-rim", translation: "réduction" },
        { turkish: "Almak", phonetic: "al-mak", translation: "acheter" },
        { turkish: "Satmak", phonetic: "sat-mak", translation: "vendre" },
        { turkish: "Ödeme", phonetic: "eu-dé-mé", translation: "paiement" },
        { turkish: "Kart", phonetic: "kart", translation: "carte" },
        { turkish: "Nakit", phonetic: "na-kit", translation: "espèces" },
        { turkish: "Poşet", phonetic: "po-chèt", translation: "sac" }
    ],

    dialogue: [
        {
            speaker: "Satıcı (Vendeur)",
            turkish: "Hoş geldiniz! Size nasıl yardımcı olabilirim?",
            phonetic: "Hoch guèl-di-niz! Si-zé na-seul yar-deum-jeu o-la-bi-li-rim?",
            french: "Bienvenue! Comment puis-je vous aider?"
        },
        {
            speaker: "Müşteri (Client)",
            turkish: "Bu ne kadar?",
            phonetic: "Bou né ka-dar?",
            french: "Combien ça coûte?"
        },
        {
            speaker: "Satıcı",
            turkish: "Elli lira. İndirimde.",
            phonetic: "Èl-li li-ra. In-di-rim-dé.",
            french: "Cinquante livres. En promotion."
        },
        {
            speaker: "Müşteri",
            turkish: "Tamam, alıyorum. Kartla ödeyebilir miyim?",
            phonetic: "Ta-mam, a-leu-yo-roum. Kart-la eu-dé-yé-bi-lir mi-yim?",
            french: "D'accord, je le prends. Puis-je payer par carte?"
        }
    ],

    grammar: {
        title: "Faire des achats et demander le prix",
        content: `
            <h4>Demander le prix :</h4>
            <div class="grammar-example">
                <strong>Bu ne kadar?</strong> = Combien ça coûte?<br>
                <strong>Fiyatı ne kadar?</strong> = Quel est le prix?<br>
                <strong>Kaç lira?</strong> = Combien de livres?
            </div>

            <h4>Exprimer le prix :</h4>
            <div class="grammar-example">
                On lira = Dix livres<br>
                Yirmi lira = Vingt livres<br>
                Elli lira = Cinquante livres<br>
                Yüz lira = Cent livres
            </div>

            <h4>Modes de paiement :</h4>
            <div class="grammar-example">
                <strong>Kartla</strong> = Par carte<br>
                <strong>Nakitle</strong> = En espèces<br>
                <strong>Ödeme yapmak</strong> = Faire un paiement<br>
                Kartla ödeyebilir miyim? = Puis-je payer par carte?
            </div>

            <h4>Suffixe -DA/-DE (dans, en) :</h4>
            <div class="grammar-example">
                İndirim<strong>de</strong> = En promotion<br>
                Market<strong>te</strong> = Au supermarché<br>
                Mağaza<strong>da</strong> = Dans le magasin
            </div>
        `
    },

    culture: {
        title: "Shopping en Turquie",
        content: "En Turquie, le marchandage est courant dans les bazars et marchés traditionnels comme le Grand Bazar d'Istanbul, mais pas dans les magasins modernes. La monnaie est la livre turque (TL). Les cartes bancaires sont largement acceptées dans les grandes villes. Les marchés de quartier (pazar) ont lieu certains jours de la semaine et offrent des produits frais à bon prix."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment demande-t-on 'Combien ça coûte?' en turc ?",
            options: ["Ne kadar?", "Bu ne kadar?", "Kaç yaşındasınız?", "Nerede?"],
            correct: 1,
            explanation: "Bu ne kadar? signifie 'Combien ça coûte?'"
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Ucuz' ?",
            options: ["Cher", "Pas cher", "Gratuit", "Nouveau"],
            correct: 1,
            explanation: "Ucuz signifie 'pas cher' en turc."
        },
        {
            type: "multiple-choice",
            question: "Comment dit-on 'par carte' en turc ?",
            options: ["Nakitle", "Kartla", "Parala", "Lirala"],
            correct: 1,
            explanation: "Kartla signifie 'par carte' (avec le suffixe -la/-le)."
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day11;
}
window.day11 = day11;
