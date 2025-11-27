/**
 * JOUR 24 : Émotions
 */

const day24 = {
    id: 24,
    title: "Émotions",
    description: "Vocabulaire des émotions et sentiments",
    week: 4,

    vocabulary: [
        { turkish: "Mutlu", phonetic: "mout-lou", translation: "heureux" },
        { turkish: "Üzgün", phonetic: "uz-gun", translation: "triste" },
        { turkish: "Kızgın", phonetic: "keuz-geun", translation: "en colère" },
        { turkish: "Yorgun", phonetic: "yor-goun", translation: "fatigué" },
        { turkish: "Heyecanlı", phonetic: "hé-yé-djan-leu", translation: "excité/enthousiaste" },
        { turkish: "Sakin", phonetic: "sa-kin", translation: "calme" },
        { turkish: "Endişeli", phonetic: "èn-di-ché-li", translation: "inquiet" },
        { turkish: "Stresli", phonetic: "strès-li", translation: "stressé" },
        { turkish: "Şaşkın", phonetic: "chach-keun", translation: "surpris/étonné" },
        { turkish: "Korkmuş", phonetic: "kork-mouch", translation: "effrayé" },
        { turkish: "Umutlu", phonetic: "ou-mout-lou", translation: "plein d'espoir" },
        { turkish: "Sinirli", phonetic: "si-nir-li", translation: "nerveux/irrité" },
        { turkish: "Rahat", phonetic: "ra-hat", translation: "détendu/confortable" },
        { turkish: "Memnun", phonetic: "mèm-noun", translation: "content/satisfait" },
        { turkish: "Umutsuz", phonetic: "ou-mout-souz", translation: "désespéré" }
    ],

    dialogue: [
        {
            speaker: "Elif",
            turkish: "Nasılsın? Çok yorgun görünüyorsun.",
            phonetic: "Na-seul-seun? Tchok yor-goun geu-ru-nu-yor-soun.",
            french: "Comment vas-tu? Tu as l'air très fatigué."
        },
        {
            speaker: "Mehmet",
            turkish: "Evet, bugün çok stresliydim. Önemli bir sınav vardı.",
            phonetic: "È-vèt, bou-gun tchok strès-li-ydim. Eu-nèm-li bir seu-nav var-deu.",
            french: "Oui, j'étais très stressé aujourd'hui. J'avais un examen important."
        },
        {
            speaker: "Elif",
            turkish: "Anlıyorum. Şimdi nasıl hissediyorsun?",
            phonetic: "An-leu-yo-roum. Chim-di na-seul his-sé-di-yor-soun?",
            french: "Je comprends. Comment te sens-tu maintenant?"
        },
        {
            speaker: "Mehmet",
            turkish: "Şimdi daha rahatım. İyi geçtiğini düşünüyorum.",
            phonetic: "Chim-di da-ha ra-ha-teum. I-yi guètch-ti-i-ni du-chu-nu-yo-roum.",
            french: "Je suis plus détendu maintenant. Je pense que ça s'est bien passé."
        }
    ],

    grammar: {
        title: "Les adjectifs d'état et leur utilisation",
        content: `
            <p>En turc, les adjectifs d'émotion s'utilisent directement avec le verbe être ou avec des verbes de perception.</p>

            <h4>Formation avec le verbe être :</h4>
            <ul>
                <li><strong>Mutluyum</strong> → Je suis heureux (Mutlu + yum)</li>
                <li><strong>Üzgünüm</strong> → Je suis triste (Üzgün + üm)</li>
                <li><strong>Yorgunum</strong> → Je suis fatigué (Yorgun + um)</li>
            </ul>

            <h4>Verbe "hissetmek" (ressentir) :</h4>
            <ul>
                <li><strong>Mutlu hissediyorum</strong> → Je me sens heureux</li>
                <li><strong>İyi hissediyorum</strong> → Je me sens bien</li>
                <li><strong>Kötü hissediyorum</strong> → Je me sens mal</li>
            </ul>

            <h4>Suffixe -li/-lı pour "avec" ou "plein de" :</h4>
            <ul>
                <li>Stres → Stres<strong>li</strong> (stressé)</li>
                <li>Heyecan → Heyecan<strong>lı</strong> (excité)</li>
                <li>Endişe → Endişe<strong>li</strong> (inquiet)</li>
            </ul>

            <h4>Suffixe -siz/-sız/-suz/-süz pour "sans" :</h4>
            <ul>
                <li>Umut → Umut<strong>suz</strong> (désespéré, sans espoir)</li>
                <li>Kayıt → Kayıt<strong>sız</strong> (indifférent, sans souci)</li>
            </ul>
        `
    },

    culture: {
        title: "L'expression des émotions en Turquie",
        content: "Les Turcs sont généralement très expressifs dans la manifestation de leurs émotions. La joie, la tristesse ou la colère s'expriment souvent de manière plus visible qu'en France. Les gestes de la main accompagnent fréquemment les paroles. Il est courant de demander régulièrement 'Nasılsın?' (Comment vas-tu?) et d'attendre une réponse sincère sur l'état émotionnel de la personne."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'Je suis heureux' en turc?",
            options: ["Mutluyum", "Üzgünüm", "Yorgunum", "Sakinim"],
            correct: 0,
            explanation: "Mutluyum signifie 'Je suis heureux' en turc."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'yorgun'?",
            options: ["En colère", "Fatigué", "Calme", "Excité"],
            correct: 1,
            explanation: "Yorgun signifie 'fatigué' en turc."
        },
        {
            type: "multiple-choice",
            question: "Quel suffixe indique 'sans' ou l'absence?",
            options: ["-li", "-siz", "-lı", "-ci"],
            correct: 1,
            explanation: "Le suffixe -siz/-sız/-suz/-süz indique 'sans' ou l'absence."
        }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day24;
}
