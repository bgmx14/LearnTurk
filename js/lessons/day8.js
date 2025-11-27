/**
 * JOUR 8 : Au restaurant
 */

const day8 = {
    id: 8,
    title: "Au restaurant",
    description: "Vocabulaire essentiel pour commander au restaurant",
    week: 2,

    vocabulary: [
        { turkish: "Restoran", phonetic: "rès-to-ran", translation: "restaurant" },
        { turkish: "Menü", phonetic: "mé-nü", translation: "menu" },
        { turkish: "Yemek", phonetic: "yé-mèk", translation: "nourriture, manger" },
        { turkish: "İçecek", phonetic: "i-tché-djèk", translation: "boisson" },
        { turkish: "Hesap", phonetic: "hé-sap", translation: "addition" },
        { turkish: "Garson", phonetic: "gar-son", translation: "serveur" },
        { turkish: "Masa", phonetic: "ma-sa", translation: "table" },
        { turkish: "Sandalye", phonetic: "san-dal-yé", translation: "chaise" },
        { turkish: "Tabak", phonetic: "ta-bak", translation: "assiette" },
        { turkish: "Çatal", phonetic: "tcha-tal", translation: "fourchette" },
        { turkish: "Kaşık", phonetic: "ka-cheuk", translation: "cuillère" },
        { turkish: "Bıçak", phonetic: "beu-tchak", translation: "couteau" },
        { turkish: "Bardak", phonetic: "bar-dak", translation: "verre" },
        { turkish: "Peçete", phonetic: "pé-tché-té", translation: "serviette" },
        { turkish: "Lezzetli", phonetic: "lèz-zèt-li", translation: "délicieux" }
    ],

    dialogue: [
        {
            speaker: "Garson",
            turkish: "Hoş geldiniz! Buyurun, menüyü alın.",
            phonetic: "Hoch guèl-di-niz! Bou-you-roun, mé-nü-yü a-leun.",
            french: "Bienvenue! Tenez, prenez le menu."
        },
        {
            speaker: "Müşteri (Client)",
            turkish: "Teşekkür ederim. Ne tavsiye edersiniz?",
            phonetic: "Té-chèk-kür é-dé-rim. Né tav-si-yé é-dèr-si-niz?",
            french: "Merci. Que recommandez-vous?"
        },
        {
            speaker: "Garson",
            turkish: "Kebabımız çok lezzetli.",
            phonetic: "Ké-ba-beu-meuz tchok lèz-zèt-li.",
            french: "Notre kebab est très délicieux."
        },
        {
            speaker: "Müşteri",
            turkish: "Tamam, bir kebap lütfen. Hesap ne kadar?",
            phonetic: "Ta-mam, bir ké-bap lüt-fèn. Hé-sap né ka-dar?",
            french: "D'accord, un kebab s'il vous plaît. L'addition, c'est combien?"
        }
    ],

    grammar: {
        title: "Commander au restaurant",
        content: `
            <h4>Phrases utiles :</h4>
            <div class="grammar-example">
                <strong>Menüyü alabilir miyim?</strong> = Puis-je avoir le menu?<br>
                <strong>Ne tavsiye edersiniz?</strong> = Que recommandez-vous?<br>
                <strong>Bir ... lütfen</strong> = Un/Une ... s'il vous plaît<br>
                <strong>Hesap lütfen</strong> = L'addition s'il vous plaît<br>
                <strong>Afiyet olsun!</strong> = Bon appétit!
            </div>

            <h4>Structure avec LÜTFEN (s'il vous plaît) :</h4>
            <p>On place généralement "lütfen" à la fin de la phrase :</p>
            <div class="grammar-example">
                Bir çay lütfen = Un thé s'il vous plaît<br>
                Menü lütfen = Le menu s'il vous plaît<br>
                Hesap lütfen = L'addition s'il vous plaît
            </div>
        `
    },

    culture: {
        title: "La culture du restaurant en Turquie",
        content: "En Turquie, on dit 'Afiyet olsun' (bon appétit) avant de manger. Les pourboires (bahşiş) sont appréciés mais pas obligatoires (environ 10%). Dans les restaurants traditionnels, on enlève souvent ses chaussures dans certaines zones avec des coussins au sol."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment demande-t-on l'addition en turc ?",
            options: ["Menü lütfen", "Hesap lütfen", "Masa lütfen", "Yemek lütfen"],
            correct: 1,
            explanation: "Hesap lütfen = L'addition s'il vous plaît."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Lezzetli' ?",
            options: ["Cher", "Délicieux", "Rapide", "Froid"],
            correct: 1,
            explanation: "Lezzetli signifie 'délicieux' en turc."
        },
        {
            type: "multiple-choice",
            question: "Comment dit-on 'Bon appétit' en turc ?",
            options: ["Teşekkürler", "Merhaba", "Afiyet olsun", "Güle güle"],
            correct: 2,
            explanation: "Afiyet olsun = Bon appétit."
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day8;
}
window.day8 = day8;
