/**
 * JOUR 1 : Alphabet turc et prononciation
 */

(function() {
    if (window.day1) return; // Already loaded

    window.day1 = {
    id: 1,
    title: "Alphabet turc et prononciation",
    description: "Découvrez les 29 lettres de l'alphabet turc et leur prononciation",
    week: 1,

    vocabulary: [
        { turkish: "A", phonetic: "a", translation: "a" },
        { turkish: "B", phonetic: "bé", translation: "b" },
        { turkish: "C", phonetic: "djé", translation: "c (se prononce dj)" },
        { turkish: "Ç", phonetic: "tché", translation: "tch" },
        { turkish: "D", phonetic: "dé", translation: "d" },
        { turkish: "E", phonetic: "é", translation: "e" },
        { turkish: "F", phonetic: "fé", translation: "f" },
        { turkish: "G", phonetic: "gué", translation: "g" },
        { turkish: "Ğ", phonetic: "yumuşak gué", translation: "g doux (allonge la voyelle)" },
        { turkish: "H", phonetic: "hé", translation: "h" },
        { turkish: "I", phonetic: "eu", translation: "i sans point (son eu)" },
        { turkish: "İ", phonetic: "i", translation: "i avec point" },
        { turkish: "J", phonetic: "jé", translation: "j" },
        { turkish: "K", phonetic: "ké", translation: "k" },
        { turkish: "L", phonetic: "lé", translation: "l" }
    ],

    dialogue: [
        {
            speaker: "Ahmet",
            turkish: "Merhaba! Ben Ahmet.",
            phonetic: "Mèr-ha-ba! Bèn Ah-mèt.",
            french: "Bonjour! Je suis Ahmet."
        },
        {
            speaker: "Ayşe",
            turkish: "Merhaba Ahmet! Ben Ayşe.",
            phonetic: "Mèr-ha-ba Ah-mèt! Bèn Aï-ché.",
            french: "Bonjour Ahmet! Je suis Ayşe."
        },
        {
            speaker: "Ahmet",
            turkish: "Nasılsın?",
            phonetic: "Na-seul-seun?",
            french: "Comment vas-tu?"
        },
        {
            speaker: "Ayşe",
            turkish: "İyiyim, teşekkür ederim.",
            phonetic: "I-yi-yim, té-chèk-kür é-dé-rim.",
            french: "Je vais bien, merci."
        }
    ],

    grammar: {
        title: "L'alphabet turc",
        content: `
            <p>L'alphabet turc compte <strong>29 lettres</strong> (8 voyelles et 21 consonnes).</p>

            <h4>Lettres spéciales turques :</h4>
            <ul>
                <li><strong>Ç (ç)</strong> : se prononce "tch" comme dans "tchao"</li>
                <li><strong>Ğ (ğ)</strong> : lettre silencieuse qui allonge la voyelle précédente</li>
                <li><strong>İ (i)</strong> : i avec point, se prononce "i"</li>
                <li><strong>I (ı)</strong> : i sans point, se prononce "eu" comme dans "peu"</li>
                <li><strong>Ö (ö)</strong> : se prononce "eu" comme dans "peu"</li>
                <li><strong>Ş (ş)</strong> : se prononce "ch" comme dans "chat"</li>
                <li><strong>Ü (ü)</strong> : se prononce "u" comme dans "tu"</li>
            </ul>

            <h4>Lettres absentes du turc :</h4>
            <p>Les lettres Q, W et X n'existent pas en turc.</p>
        `
    },

    culture: {
        title: "Le turc : une langue unique",
        content: "Le turc est une langue agglutinante de la famille des langues turques. Elle est parlée par environ 80 millions de personnes dans le monde. L'alphabet latin a été adopté en 1928 par Mustafa Kemal Atatürk, remplaçant l'alphabet arabe ottoman."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment se prononce la lettre 'Ç' ?",
            options: ["k", "s", "tch", "ch"],
            correct: 2,
            explanation: "La lettre Ç se prononce 'tch' comme dans 'tchao'."
        },
        {
            type: "multiple-choice",
            question: "Combien de lettres compte l'alphabet turc ?",
            options: ["26", "28", "29", "30"],
            correct: 2,
            explanation: "L'alphabet turc compte 29 lettres."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Merhaba' en français ?",
            options: ["Au revoir", "Bonjour", "Merci", "S'il vous plaît"],
            correct: 1,
            explanation: "Merhaba signifie 'Bonjour' en turc."
        }
    ]
    };

    // Export pour utilisation
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = window.day1;
    }
})();
