/**
 * JOUR 6 : Couleurs
 */

(function() {
    if (window.day6) return; // Already loaded

    window.day6 = {
    id: 6,
    title: "Les couleurs",
    description: "Apprenez les couleurs principales en turc",
    week: 1,

    vocabulary: [
        { turkish: "Renk", phonetic: "rènk", translation: "couleur" },
        { turkish: "Kırmızı", phonetic: "keur-meu-zeu", translation: "rouge" },
        { turkish: "Mavi", phonetic: "ma-vi", translation: "bleu" },
        { turkish: "Sarı", phonetic: "sa-reu", translation: "jaune" },
        { turkish: "Yeşil", phonetic: "yé-chil", translation: "vert" },
        { turkish: "Siyah", phonetic: "si-yah", translation: "noir" },
        { turkish: "Beyaz", phonetic: "bé-yaz", translation: "blanc" },
        { turkish: "Turuncu", phonetic: "tou-roun-djou", translation: "orange" },
        { turkish: "Mor", phonetic: "mor", translation: "violet" },
        { turkish: "Pembe", phonetic: "pèm-bé", translation: "rose" },
        { turkish: "Kahverengi", phonetic: "kah-vé-rèn-gui", translation: "marron" },
        { turkish: "Gri", phonetic: "gri", translation: "gris" },
        { turkish: "Açık", phonetic: "a-tcheuk", translation: "clair" },
        { turkish: "Koyu", phonetic: "ko-you", translation: "foncé" },
        { turkish: "Hangi renk?", phonetic: "han-gui rènk?", translation: "quelle couleur?" }
    ],

    dialogue: [
        {
            speaker: "Burcu",
            turkish: "Senin en sevdiğin renk nedir?",
            phonetic: "Sé-nin èn sèv-di-guin rènk né-dir?",
            french: "Quelle est ta couleur préférée?"
        },
        {
            speaker: "Kerem",
            turkish: "Benim en sevdiğim renk mavi.",
            phonetic: "Bé-nim èn sèv-di-guim rènk ma-vi.",
            french: "Ma couleur préférée est le bleu."
        },
        {
            speaker: "Burcu",
            turkish: "Bu araba hangi renk?",
            phonetic: "Bou a-ra-ba han-gui rènk?",
            french: "De quelle couleur est cette voiture?"
        },
        {
            speaker: "Kerem",
            turkish: "Bu araba kırmızı.",
            phonetic: "Bou a-ra-ba keur-meu-zeu.",
            french: "Cette voiture est rouge."
        }
    ],

    grammar: {
        title: "Les adjectifs de couleur",
        content: `
            <p>En turc, les couleurs sont des adjectifs qui se placent <strong>avant</strong> le nom.</p>

            <h4>Les couleurs principales :</h4>
            <table class="grammar-table">
                <tr>
                    <th>Turc</th>
                    <th>Français</th>
                    <th>Turc</th>
                    <th>Français</th>
                </tr>
                <tr>
                    <td>Kırmızı</td>
                    <td>Rouge</td>
                    <td>Mavi</td>
                    <td>Bleu</td>
                </tr>
                <tr>
                    <td>Sarı</td>
                    <td>Jaune</td>
                    <td>Yeşil</td>
                    <td>Vert</td>
                </tr>
                <tr>
                    <td>Siyah</td>
                    <td>Noir</td>
                    <td>Beyaz</td>
                    <td>Blanc</td>
                </tr>
                <tr>
                    <td>Turuncu</td>
                    <td>Orange</td>
                    <td>Mor</td>
                    <td>Violet</td>
                </tr>
                <tr>
                    <td>Pembe</td>
                    <td>Rose</td>
                    <td>Kahverengi</td>
                    <td>Marron</td>
                </tr>
            </table>

            <h4>Nuances :</h4>
            <p>Pour exprimer les nuances, on utilise <strong>açık</strong> (clair) et <strong>koyu</strong> (foncé) :</p>
            <div class="grammar-example">
                <strong>Açık mavi</strong> = Bleu clair<br>
                <strong>Koyu yeşil</strong> = Vert foncé<br>
                <strong>Açık pembe</strong> = Rose clair
            </div>

            <h4>Structure de phrase :</h4>
            <div class="grammar-example">
                <strong>Kırmızı araba</strong> = Voiture rouge<br>
                <strong>Mavi göz</strong> = Œil bleu<br>
                <strong>Yeşil elma</strong> = Pomme verte
            </div>
        `
    },

    culture: {
        title: "Les couleurs dans la culture turque",
        content: "Le rouge et le blanc sont les couleurs du drapeau turc et ont une grande importance nationale. Le bleu (mavi) est très populaire en Turquie, notamment le 'nazar boncuğu' (œil bleu) utilisé comme amulette contre le mauvais œil. Le vert est associé à l'Islam."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'rouge' en turc ?",
            options: ["Mavi", "Kırmızı", "Sarı", "Yeşil"],
            correct: 1,
            explanation: "Kırmızı signifie 'rouge' en turc."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Açık mavi' ?",
            options: ["Bleu foncé", "Bleu clair", "Bleu marine", "Bleu roi"],
            correct: 1,
            explanation: "Açık mavi signifie 'bleu clair' (açık = clair)."
        },
        {
            type: "multiple-choice",
            question: "Comment dit-on 'voiture blanche' en turc ?",
            options: ["Beyaz araba", "Araba beyaz", "Siyah araba", "Mavi araba"],
            correct: 0,
            explanation: "L'adjectif se place avant le nom : Beyaz araba."
        }
    ]
};

    // Export for Node.js if needed
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = window.day6;
    }
})();
