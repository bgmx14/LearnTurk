/**
 * JOUR 5 : Jours de la semaine et mois
 */

(function() {
    if (window.day5) return; // Already loaded

    window.day5 = {
    id: 5,
    title: "Jours de la semaine et mois",
    description: "Apprenez les jours et les mois en turc",
    week: 1,

    vocabulary: [
        { turkish: "Pazartesi", phonetic: "pa-zar-té-si", translation: "lundi" },
        { turkish: "Salı", phonetic: "sa-leu", translation: "mardi" },
        { turkish: "Çarşamba", phonetic: "tchar-cham-ba", translation: "mercredi" },
        { turkish: "Perşembe", phonetic: "pèr-chèm-bé", translation: "jeudi" },
        { turkish: "Cuma", phonetic: "djou-ma", translation: "vendredi" },
        { turkish: "Cumartesi", phonetic: "djou-mar-té-si", translation: "samedi" },
        { turkish: "Pazar", phonetic: "pa-zar", translation: "dimanche" },
        { turkish: "Gün", phonetic: "gün", translation: "jour" },
        { turkish: "Hafta", phonetic: "haf-ta", translation: "semaine" },
        { turkish: "Ay", phonetic: "aï", translation: "mois" },
        { turkish: "Yıl", phonetic: "yeul", translation: "année" },
        { turkish: "Bugün", phonetic: "bou-gün", translation: "aujourd'hui" },
        { turkish: "Yarın", phonetic: "ya-reun", translation: "demain" },
        { turkish: "Dün", phonetic: "dün", translation: "hier" },
        { turkish: "Hangi", phonetic: "han-gui", translation: "quel/quelle" }
    ],

    dialogue: [
        {
            speaker: "Emre",
            turkish: "Bugün hangi gün?",
            phonetic: "Bou-gün han-gui gün?",
            french: "Quel jour sommes-nous aujourd'hui?"
        },
        {
            speaker: "Deniz",
            turkish: "Bugün salı.",
            phonetic: "Bou-gün sa-leu.",
            french: "Aujourd'hui c'est mardi."
        },
        {
            speaker: "Emre",
            turkish: "Yarın çarşamba mı?",
            phonetic: "Ya-reun tchar-cham-ba meu?",
            french: "Demain c'est mercredi?"
        },
        {
            speaker: "Deniz",
            turkish: "Evet, yarın çarşamba.",
            phonetic: "È-vèt, ya-reun tchar-cham-ba.",
            french: "Oui, demain c'est mercredi."
        }
    ],

    grammar: {
        title: "Les jours et les mois",
        content: `
            <h4>Les 7 jours de la semaine :</h4>
            <table class="grammar-table">
                <tr>
                    <th>Turc</th>
                    <th>Français</th>
                </tr>
                <tr>
                    <td>Pazartesi</td>
                    <td>Lundi</td>
                </tr>
                <tr>
                    <td>Salı</td>
                    <td>Mardi</td>
                </tr>
                <tr>
                    <td>Çarşamba</td>
                    <td>Mercredi</td>
                </tr>
                <tr>
                    <td>Perşembe</td>
                    <td>Jeudi</td>
                </tr>
                <tr>
                    <td>Cuma</td>
                    <td>Vendredi</td>
                </tr>
                <tr>
                    <td>Cumartesi</td>
                    <td>Samedi</td>
                </tr>
                <tr>
                    <td>Pazar</td>
                    <td>Dimanche</td>
                </tr>
            </table>

            <h4>Les 12 mois :</h4>
            <table class="grammar-table">
                <tr>
                    <td>Ocak (janvier)</td>
                    <td>Şubat (février)</td>
                    <td>Mart (mars)</td>
                </tr>
                <tr>
                    <td>Nisan (avril)</td>
                    <td>Mayıs (mai)</td>
                    <td>Haziran (juin)</td>
                </tr>
                <tr>
                    <td>Temmuz (juillet)</td>
                    <td>Ağustos (août)</td>
                    <td>Eylül (septembre)</td>
                </tr>
                <tr>
                    <td>Ekim (octobre)</td>
                    <td>Kasım (novembre)</td>
                    <td>Aralık (décembre)</td>
                </tr>
            </table>

            <h4>Expressions temporelles :</h4>
            <div class="grammar-example">
                <strong>Bugün</strong> = Aujourd'hui<br>
                <strong>Yarın</strong> = Demain<br>
                <strong>Dün</strong> = Hier<br>
                <strong>Bu hafta</strong> = Cette semaine<br>
                <strong>Gelecek hafta</strong> = La semaine prochaine<br>
                <strong>Geçen hafta</strong> = La semaine dernière
            </div>
        `
    },

    culture: {
        title: "Le weekend en Turquie",
        content: "Le weekend turc est samedi et dimanche, comme en France. Le vendredi (Cuma) est le jour de prière pour les musulmans, et beaucoup de gens vont à la mosquée à midi. 'Pazar' signifie à la fois 'dimanche' et 'marché', car traditionnellement les marchés se tenaient le dimanche."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'mercredi' en turc ?",
            options: ["Salı", "Çarşamba", "Perşembe", "Cuma"],
            correct: 1,
            explanation: "Çarşamba signifie 'mercredi' en turc."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Bugün' ?",
            options: ["Hier", "Aujourd'hui", "Demain", "Semaine"],
            correct: 1,
            explanation: "Bugün signifie 'aujourd'hui' en turc."
        },
        {
            type: "multiple-choice",
            question: "Quel jour vient après Cuma (vendredi) ?",
            options: ["Pazar", "Cumartesi", "Pazartesi", "Salı"],
            correct: 1,
            explanation: "Cumartesi (samedi) vient après Cuma (vendredi)."
        }
    ]
};

    // Export for Node.js if needed
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = window.day5;
    }
})();
