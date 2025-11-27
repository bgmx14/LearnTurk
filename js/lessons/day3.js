/**
 * JOUR 3 : Nombres 0-100 et l'heure
 */

const day3 = {
    id: 3,
    title: "Nombres 0-100 et l'heure",
    description: "Apprenez à compter et à dire l'heure en turc",
    week: 1,

    vocabulary: [
        { turkish: "Sıfır", phonetic: "seu-feur", translation: "zéro" },
        { turkish: "Bir", phonetic: "bir", translation: "un" },
        { turkish: "İki", phonetic: "i-ki", translation: "deux" },
        { turkish: "Üç", phonetic: "ütch", translation: "trois" },
        { turkish: "Dört", phonetic: "deurt", translation: "quatre" },
        { turkish: "Beş", phonetic: "bèch", translation: "cinq" },
        { turkish: "Altı", phonetic: "al-teu", translation: "six" },
        { turkish: "Yedi", phonetic: "yé-di", translation: "sept" },
        { turkish: "Sekiz", phonetic: "sé-kiz", translation: "huit" },
        { turkish: "Dokuz", phonetic: "do-kouz", translation: "neuf" },
        { turkish: "On", phonetic: "on", translation: "dix" },
        { turkish: "Yirmi", phonetic: "yir-mi", translation: "vingt" },
        { turkish: "Otuz", phonetic: "o-touz", translation: "trente" },
        { turkish: "Saat", phonetic: "sa-at", translation: "heure" },
        { turkish: "Saat kaç?", phonetic: "sa-at katch?", translation: "Quelle heure est-il?" }
    ],

    dialogue: [
        {
            speaker: "Ali",
            turkish: "Saat kaç?",
            phonetic: "Sa-at katch?",
            french: "Quelle heure est-il?"
        },
        {
            speaker: "Zeynep",
            turkish: "Saat üç.",
            phonetic: "Sa-at ütch.",
            french: "Il est trois heures."
        },
        {
            speaker: "Ali",
            turkish: "Kaç yaşındasın?",
            phonetic: "Katch ya-cheu-da-seun?",
            french: "Quel âge as-tu?"
        },
        {
            speaker: "Zeynep",
            turkish: "Ben yirmi beş yaşındayım.",
            phonetic: "Bèn yir-mi bèch ya-cheu-da-yeum.",
            french: "J'ai vingt-cinq ans."
        }
    ],

    grammar: {
        title: "Les nombres en turc",
        content: `
            <h4>Nombres de 0 à 10 :</h4>
            <table class="grammar-table">
                <tr>
                    <td>0 - Sıfır</td>
                    <td>1 - Bir</td>
                    <td>2 - İki</td>
                    <td>3 - Üç</td>
                    <td>4 - Dört</td>
                    <td>5 - Beş</td>
                </tr>
                <tr>
                    <td>6 - Altı</td>
                    <td>7 - Yedi</td>
                    <td>8 - Sekiz</td>
                    <td>9 - Dokuz</td>
                    <td>10 - On</td>
                    <td></td>
                </tr>
            </table>

            <h4>Dizaines :</h4>
            <ul>
                <li>10 - On</li>
                <li>20 - Yirmi</li>
                <li>30 - Otuz</li>
                <li>40 - Kırk</li>
                <li>50 - Elli</li>
                <li>60 - Altmış</li>
                <li>70 - Yetmiş</li>
                <li>80 - Seksen</li>
                <li>90 - Doksan</li>
                <li>100 - Yüz</li>
            </ul>

            <h4>Construction des nombres :</h4>
            <p>Pour former les nombres composés, on combine simplement la dizaine et l'unité :</p>
            <div class="grammar-example">
                <strong>Exemples :</strong><br>
                21 = Yirmi bir<br>
                45 = Kırk beş<br>
                99 = Doksan dokuz
            </div>

            <h4>L'heure :</h4>
            <p>Pour dire l'heure, on utilise <strong>Saat + nombre</strong> :</p>
            <div class="grammar-example">
                Saat bir = Il est une heure<br>
                Saat beş = Il est cinq heures<br>
                Saat on iki = Il est midi/minuit
            </div>
        `
    },

    culture: {
        title: "Le système horaire turc",
        content: "En Turquie, on utilise le système de 24 heures dans les contextes officiels (transports, horaires), mais le système de 12 heures est courant dans la vie quotidienne. Pour préciser matin ou soir, on ajoute 'sabah' (matin), 'öğleden sonra' (après-midi), ou 'akşam' (soir)."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on '7' en turc ?",
            options: ["Altı", "Yedi", "Sekiz", "Dokuz"],
            correct: 1,
            explanation: "Yedi signifie 'sept' en turc."
        },
        {
            type: "multiple-choice",
            question: "Comment demande-t-on 'Quelle heure est-il ?' en turc ?",
            options: ["Saat bir", "Saat kaç?", "Kaç yaşındasın?", "Nasılsın?"],
            correct: 1,
            explanation: "Saat kaç? signifie 'Quelle heure est-il?'."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Yirmi beş' ?",
            options: ["15", "20", "25", "35"],
            correct: 2,
            explanation: "Yirmi beş = vingt (yirmi) cinq (beş) = 25."
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day3;
}
window.day3 = day3;
