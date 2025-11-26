/**
 * JOUR 9 : La nourriture
 */

const day9 = {
    id: 9,
    title: "La nourriture",
    description: "Vocabulaire essentiel sur les aliments",
    week: 2,

    vocabulary: [
        { turkish: "Yemek", phonetic: "yé-mèk", translation: "nourriture" },
        { turkish: "Ekmek", phonetic: "èk-mèk", translation: "pain" },
        { turkish: "Et", phonetic: "èt", translation: "viande" },
        { turkish: "Tavuk", phonetic: "ta-vouk", translation: "poulet" },
        { turkish: "Balık", phonetic: "ba-leuk", translation: "poisson" },
        { turkish: "Sebze", phonetic: "sèb-zé", translation: "légume" },
        { turkish: "Meyve", phonetic: "méy-vé", translation: "fruit" },
        { turkish: "Peynir", phonetic: "péy-nir", translation: "fromage" },
        { turkish: "Yumurta", phonetic: "you-mour-ta", translation: "oeuf" },
        { turkish: "Pirinç", phonetic: "pi-rinch", translation: "riz" },
        { turkish: "Makarna", phonetic: "ma-kar-na", translation: "pâtes" },
        { turkish: "Salata", phonetic: "sa-la-ta", translation: "salade" },
        { turkish: "Çorba", phonetic: "tchor-ba", translation: "soupe" },
        { turkish: "Tatlı", phonetic: "tat-leu", translation: "dessert" },
        { turkish: "Tuz", phonetic: "touz", translation: "sel" }
    ],

    dialogue: [
        {
            speaker: "Anne (Mère)",
            turkish: "Ne yemek istiyorsun?",
            phonetic: "Né yé-mèk is-ti-yor-soun?",
            french: "Qu'est-ce que tu veux manger?"
        },
        {
            speaker: "Çocuk (Enfant)",
            turkish: "Tavuk ve pirinç istiyorum.",
            phonetic: "Ta-vouk vé pi-rinch is-ti-yo-roum.",
            french: "Je veux du poulet et du riz."
        },
        {
            speaker: "Anne",
            turkish: "Salata da yer misin?",
            phonetic: "Sa-la-ta da yèr mi-sin?",
            french: "Tu manges de la salade aussi?"
        },
        {
            speaker: "Çocuk",
            turkish: "Evet, sebze severim.",
            phonetic: "É-vèt, sèb-zé sé-vé-rim.",
            french: "Oui, j'aime les légumes."
        }
    ],

    grammar: {
        title: "Exprimer ses préférences alimentaires",
        content: `
            <h4>Verbe SEVMEK (aimer) :</h4>
            <div class="grammar-example">
                <strong>Ben severim</strong> = J'aime<br>
                <strong>Sen seversin</strong> = Tu aimes<br>
                <strong>O sever</strong> = Il/Elle aime<br>
            </div>

            <h4>Exemples avec la nourriture :</h4>
            <div class="grammar-example">
                Et severim = J'aime la viande<br>
                Balık severim = J'aime le poisson<br>
                Sebze sevmem = Je n'aime pas les légumes<br>
                Meyve çok severim = J'adore les fruits
            </div>

            <h4>Dire "Je veux manger..." :</h4>
            <div class="grammar-example">
                <strong>... yemek istiyorum</strong> = Je veux manger...<br>
                Ekmek yemek istiyorum = Je veux manger du pain<br>
                Balık yemek istiyorum = Je veux manger du poisson
            </div>
        `
    },

    culture: {
        title: "La cuisine turque",
        content: "La cuisine turque est très variée et riche. Le petit-déjeuner (kahvaltı) est copieux avec du fromage, des olives, du pain et du thé. Le pain (ekmek) accompagne presque tous les repas. Les Turcs mangent beaucoup de légumes frais et de salades. Les repas sont souvent partagés en famille."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'pain' en turc ?",
            options: ["Et", "Ekmek", "Peynir", "Tuz"],
            correct: 1,
            explanation: "Ekmek signifie 'pain' en turc."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Sebze' ?",
            options: ["Fruit", "Viande", "Légume", "Poisson"],
            correct: 2,
            explanation: "Sebze signifie 'légume' en turc."
        },
        {
            type: "multiple-choice",
            question: "Comment dit-on 'J'aime le poulet' ?",
            options: ["Tavuk severim", "Tavuk yemek", "Tavuk lütfen", "Tavuk var"],
            correct: 0,
            explanation: "Tavuk severim = J'aime le poulet."
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day9;
}
