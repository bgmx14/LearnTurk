/**
 * JOUR 29 : Culture turque approfondie
 */

const day29 = {
    id: 29,
    title: "Culture turque approfondie",
    description: "Immersion dans la culture, traditions et gastronomie turques",
    week: 4,

    vocabulary: [
        { turkish: "Çay", phonetic: "tchaï", translation: "thé" },
        { turkish: "Kahve", phonetic: "kah-vé", translation: "café" },
        { turkish: "Hamam", phonetic: "ha-mam", translation: "hammam/bain turc" },
        { turkish: "Baklava", phonetic: "bak-la-va", translation: "baklava" },
        { turkish: "Kebap", phonetic: "ké-bap", translation: "kebab" },
        { turkish: "Nazar boncuğu", phonetic: "na-zar bon-djou-ou", translation: "œil porte-bonheur" },
        { turkish: "Lokum", phonetic: "lo-koum", translation: "loukoum" },
        { turkish: "Çarşı", phonetic: "tchar-cheu", translation: "marché/bazar" },
        { turkish: "Simit", phonetic: "si-mit", translation: "simit (pain rond aux sésames)" },
        { turkish: "Rakı", phonetic: "ra-keu", translation: "raki (boisson anisée)" },
        { turkish: "Meze", phonetic: "mé-zé", translation: "mezzés (hors-d'œuvre)" },
        { turkish: "Türkü", phonetic: "tur-ku", translation: "chanson folklorique turque" },
        { turkish: "Cami", phonetic: "dja-mi", translation: "mosquée" },
        { turkish: "Bayram", phonetic: "baï-ram", translation: "fête religieuse" },
        { turkish: "Misafir", phonetic: "mi-sa-fir", translation: "invité/hôte" }
    ],

    dialogue: [
        {
            speaker: "Guide",
            turkish: "Türk kültürüne hoş geldiniz! Çay içmek ister misiniz?",
            phonetic: "Turk kul-tu-ru-né hoch guèl-di-niz! Tchaï itch-mèk is-tèr mi-si-niz?",
            french: "Bienvenue dans la culture turque! Voulez-vous boire du thé?"
        },
        {
            speaker: "Turist",
            turkish: "Evet, lütfen. Türk çayı çok meşhur, değil mi?",
            phonetic: "È-vèt, lut-fèn. Turk tchaï-yeu tchok mèch-hour, dé-il mi?",
            french: "Oui, s'il vous plaît. Le thé turc est très célèbre, n'est-ce pas?"
        },
        {
            speaker: "Guide",
            turkish: "Kesinlikle! Çay kültürümüz çok önemli. Baklava da deneyin, çok lezzetli.",
            phonetic: "Ké-sin-lik-lé! Tchaï kul-tu-ru-muz tchok eu-nèm-li. Bak-la-va da dé-né-yin, tchok lèz-zèt-li.",
            french: "Absolument! Notre culture du thé est très importante. Essayez aussi le baklava, c'est délicieux."
        },
        {
            speaker: "Turist",
            turkish: "Harika! Nazar boncuğu da almak istiyorum. Nereden bulabilirim?",
            phonetic: "Ha-ri-ka! Na-zar bon-djou-ou da al-mak is-ti-yo-roum. Né-ré-dèn bou-la-bi-li-rim?",
            french: "Génial! Je veux aussi acheter un œil porte-bonheur. Où puis-je en trouver?"
        }
    ],

    grammar: {
        title: "Le suffixe possessif et les noms composés culturels",
        content: `
            <p>Beaucoup de termes culturels utilisent des suffixes possessifs ou sont des noms composés.</p>

            <h4>Noms composés culturels :</h4>
            <ul>
                <li><strong>Nazar boncuğu</strong> → Œil porte-bonheur (perle contre le mauvais œil)</li>
                <li><strong>Türk kahvesi</strong> → Café turc</li>
                <li><strong>Baş örtüsü</strong> → Foulard (couverture de tête)</li>
                <li><strong>Çay bardağı</strong> → Verre à thé</li>
            </ul>

            <h4>Suffixe possessif de groupe (-mız/-miz, -muz/-müz) :</h4>
            <p>Ce suffixe indique "notre/nos" :</p>
            <ul>
                <li>Kültür → Kültür<strong>ümüz</strong> (notre culture)</li>
                <li>Gelenek → Gelenek<strong>lerimiz</strong> (nos traditions)</li>
                <li>Yemek → Yemek<strong>lerimiz</strong> (nos plats)</li>
            </ul>

            <h4>Adjectifs descriptifs pour la nourriture :</h4>
            <ul>
                <li><strong>Lezzetli</strong> → Délicieux</li>
                <li><strong>Tatlı</strong> → Sucré</li>
                <li><strong>Acı</strong> → Épicé/piquant</li>
                <li><strong>Taze</strong> → Frais</li>
                <li><strong>Sıcak</strong> → Chaud</li>
            </ul>

            <h4>Expression "hoş geldiniz" :</h4>
            <p>Bienvenue (pluriel/formel) - Réponse: <strong>Hoş bulduk</strong> (Nous sommes heureux d'être ici)</p>
        `
    },

    culture: {
        title: "Les piliers de la culture turque",
        content: "Le thé (çay) est omniprésent dans la vie quotidienne turque, servi dans des petits verres incurvés. Le café turc, préparé dans un cezve, se lit dans le marc pour prédire l'avenir. Le nazar boncuğu (œil bleu) protège contre le mauvais œil et se trouve partout. Les hamams sont des lieux de purification depuis l'époque ottomane. La gastronomie turque est l'une des plus riches au monde: kebaps variés, baklava au miel et pistaches, lokums parfumés, meze à partager. L'hospitalité (misafirperverlik) est sacrée - un invité est considéré comme un cadeau de Dieu."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Quel est le nom turc du thé?",
            options: ["Kahve", "Çay", "Rakı", "Şerbet"],
            correct: 1,
            explanation: "Çay signifie 'thé' en turc."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'nazar boncuğu'?",
            options: ["Thé turc", "Café turc", "Œil porte-bonheur", "Pain rond"],
            correct: 2,
            explanation: "Nazar boncuğu est l'œil porte-bonheur bleu qui protège contre le mauvais œil."
        },
        {
            type: "multiple-choice",
            question: "Quelle réponse donne-t-on à 'Hoş geldiniz' (Bienvenue)?",
            options: ["Teşekkürler", "Hoş bulduk", "Merhaba", "Güle güle"],
            correct: 1,
            explanation: "On répond 'Hoş bulduk' (nous sommes heureux d'être ici) à 'Hoş geldiniz'."
        }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day29;
}
window.day29 = day29;
