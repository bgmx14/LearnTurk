/**
 * JOUR 28 : Expressions avancées
 */

const day28 = {
    id: 28,
    title: "Expressions avancées",
    description: "Expressions idiomatiques et mots de liaison avancés",
    week: 4,

    vocabulary: [
        { turkish: "Tabii ki", phonetic: "ta-bi-i ki", translation: "bien sûr" },
        { turkish: "Belki", phonetic: "bèl-ki", translation: "peut-être" },
        { turkish: "Kesinlikle", phonetic: "ké-sin-lik-lé", translation: "certainement/absolument" },
        { turkish: "Muhtemelen", phonetic: "mouh-té-mé-lèn", translation: "probablement" },
        { turkish: "Maalesef", phonetic: "ma-a-lé-sèf", translation: "malheureusement" },
        { turkish: "Neyse", phonetic: "néï-sé", translation: "tant pis/peu importe" },
        { turkish: "Demek ki", phonetic: "dé-mèk ki", translation: "donc/alors" },
        { turkish: "Yani", phonetic: "ya-ni", translation: "c'est-à-dire/donc" },
        { turkish: "Aslında", phonetic: "as-leun-da", translation: "en fait/en réalité" },
        { turkish: "Hatta", phonetic: "hat-ta", translation: "même/en plus" },
        { turkish: "Hem... hem...", phonetic: "hèm... hèm...", translation: "à la fois... et..." },
        { turkish: "Ne yazık ki", phonetic: "né ya-zeuk ki", translation: "hélas/malheureusement" },
        { turkish: "Öyle mi?", phonetic: "eu-lé mi?", translation: "vraiment?/c'est vrai?" },
        { turkish: "Haydi", phonetic: "haï-di", translation: "allez!/vas-y!" },
        { turkish: "Vallahi", phonetic: "val-la-hi", translation: "je te jure/vraiment" }
    ],

    dialogue: [
        {
            speaker: "Cem",
            turkish: "Yarın sinemaya gelmek ister misin?",
            phonetic: "Ya-reun si-né-ma-ya guèl-mèk is-tèr mi-sin?",
            french: "Veux-tu venir au cinéma demain?"
        },
        {
            speaker: "Leyla",
            turkish: "Maalesef yarın çalışmam gerek. Belki öbür gün?",
            phonetic: "Ma-a-lé-sèf ya-reun tcha-leuch-mam gué-rèk. Bèl-ki eu-bur gun?",
            french: "Malheureusement, je dois travailler demain. Peut-être un autre jour?"
        },
        {
            speaker: "Cem",
            turkish: "Tabii ki! Aslında öbür gün daha iyi. Yeni film çıkıyor hatta.",
            phonetic: "Ta-bi-i ki! As-leun-da eu-bur gun da-ha i-yi. Yé-ni film tcheu-keu-yor hat-ta.",
            french: "Bien sûr! En fait, un autre jour c'est mieux. Un nouveau film sort même."
        },
        {
            speaker: "Leyla",
            turkish: "Öyle mi? Ne güzel! Kesinlikle gelirim o zaman.",
            phonetic: "Eu-lé mi? Né gu-zèl! Ké-sin-lik-lé gué-li-rim o za-man.",
            french: "Vraiment? Génial! Je viendrai certainement alors."
        }
    ],

    grammar: {
        title: "Les mots de liaison et expressions idiomatiques",
        content: `
            <p>Les expressions avancées permettent de rendre votre turc plus fluide et naturel.</p>

            <h4>Expressions de certitude et probabilité :</h4>
            <ul>
                <li><strong>Tabii ki</strong> → Bien sûr (certitude absolue)</li>
                <li><strong>Kesinlikle</strong> → Certainement (forte affirmation)</li>
                <li><strong>Muhtemelen</strong> → Probablement (haute probabilité)</li>
                <li><strong>Belki</strong> → Peut-être (incertitude)</li>
            </ul>

            <h4>Connecteurs logiques :</h4>
            <ul>
                <li><strong>Yani</strong> → C'est-à-dire/donc (explication)</li>
                <li><strong>Demek ki</strong> → Donc/alors (conclusion)</li>
                <li><strong>Aslında</strong> → En fait (contraste avec attente)</li>
                <li><strong>Hatta</strong> → Même/en plus (renforcement)</li>
            </ul>

            <h4>Construction "hem... hem..." :</h4>
            <p>Cette expression signifie "à la fois... et..." :</p>
            <ul>
                <li><strong>Hem</strong> güzel <strong>hem</strong> akıllı → À la fois belle et intelligente</li>
                <li><strong>Hem</strong> çalışıyor <strong>hem</strong> okuyor → Il travaille et étudie en même temps</li>
            </ul>

            <h4>Expressions familières :</h4>
            <ul>
                <li><strong>Vallahi</strong> → Vraiment/je te jure (familier, de l'arabe)</li>
                <li><strong>Haydi</strong> → Allez!/vas-y! (encouragement)</li>
                <li><strong>Neyse</strong> → Tant pis/peu importe (résignation)</li>
            </ul>
        `
    },

    culture: {
        title: "Les expressions idiomatiques turques",
        content: "Les Turcs utilisent beaucoup d'expressions idiomatiques dans la conversation quotidienne. Beaucoup d'expressions comme 'Vallahi', 'İnşallah' (si Dieu le veut) ou 'Maşallah' (que Dieu le protège) viennent de l'arabe et sont intégrées dans le turc quotidien. L'expression 'Kolay gelsin' (que ce soit facile) est unique en turc et s'utilise pour encourager quelqu'un qui travaille. Ces expressions ajoutent de la couleur et de l'authenticité à votre turc."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Quelle expression signifie 'bien sûr'?",
            options: ["Belki", "Tabii ki", "Neyse", "Yani"],
            correct: 1,
            explanation: "Tabii ki signifie 'bien sûr' en turc."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'maalesef'?",
            options: ["Heureusement", "Malheureusement", "Peut-être", "Certainement"],
            correct: 1,
            explanation: "Maalesef signifie 'malheureusement' en turc."
        },
        {
            type: "multiple-choice",
            question: "Quelle expression utilise-t-on pour dire 'à la fois... et...'?",
            options: ["Yani", "Hem... hem...", "Demek ki", "Hatta"],
            correct: 1,
            explanation: "Hem... hem... signifie 'à la fois... et...' en turc."
        }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day28;
}
window.day28 = day28;
