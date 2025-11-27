/**
 * JOUR 2 : Pronoms personnels et verbe être
 */

const day2 = {
    id: 2,
    title: "Pronoms personnels et verbe être",
    description: "Apprenez les pronoms et les suffixes du verbe être",
    week: 1,

    vocabulary: [
        { turkish: "Ben", phonetic: "bèn", translation: "je" },
        { turkish: "Sen", phonetic: "sèn", translation: "tu" },
        { turkish: "O", phonetic: "o", translation: "il/elle" },
        { turkish: "Biz", phonetic: "biz", translation: "nous" },
        { turkish: "Siz", phonetic: "siz", translation: "vous" },
        { turkish: "Onlar", phonetic: "on-lar", translation: "ils/elles" },
        { turkish: "Öğrenci", phonetic: "eu-rèn-dji", translation: "étudiant(e)" },
        { turkish: "Öğretmen", phonetic: "eu-rèt-mèn", translation: "professeur" },
        { turkish: "Doktor", phonetic: "dok-tor", translation: "médecin" },
        { turkish: "Mühendis", phonetic: "mü-hèn-dis", translation: "ingénieur" },
        { turkish: "Türk", phonetic: "türk", translation: "turc" },
        { turkish: "Fransız", phonetic: "fran-seuz", translation: "français" },
        { turkish: "İyi", phonetic: "i-yi", translation: "bien/bon" },
        { turkish: "Mutlu", phonetic: "mout-lou", translation: "heureux" },
        { turkish: "Yorgun", phonetic: "yor-goun", translation: "fatigué" }
    ],

    dialogue: [
        {
            speaker: "Mehmet",
            turkish: "Ben öğrenciyim. Sen ne iş yapıyorsun?",
            phonetic: "Bèn eu-rèn-dji-yim. Sèn né ich ya-peu-yor-soun?",
            french: "Je suis étudiant. Que fais-tu comme travail?"
        },
        {
            speaker: "Elif",
            turkish: "Ben öğretmenim.",
            phonetic: "Bèn eu-rèt-mè-nim.",
            french: "Je suis professeur."
        },
        {
            speaker: "Mehmet",
            turkish: "O kim?",
            phonetic: "O kim?",
            french: "Qui est-ce?"
        },
        {
            speaker: "Elif",
            turkish: "O benim arkadaşım. O doktor.",
            phonetic: "O bé-nim ar-ka-da-cheum. O dok-tor.",
            french: "C'est mon ami(e). Il/Elle est médecin."
        }
    ],

    grammar: {
        title: "Le verbe être en turc",
        content: `
            <p>En turc, le verbe être n'existe pas comme verbe indépendant. On utilise des <strong>suffixes</strong> ajoutés aux noms ou adjectifs.</p>

            <h4>Suffixes du verbe être au présent :</h4>
            <table class="grammar-table">
                <tr>
                    <th>Pronom</th>
                    <th>Suffixe</th>
                    <th>Exemple</th>
                    <th>Traduction</th>
                </tr>
                <tr>
                    <td>Ben (je)</td>
                    <td>-(y)ım/im</td>
                    <td>öğrenci<strong>yim</strong></td>
                    <td>je suis étudiant</td>
                </tr>
                <tr>
                    <td>Sen (tu)</td>
                    <td>-sın/sin</td>
                    <td>öğrenci<strong>sin</strong></td>
                    <td>tu es étudiant</td>
                </tr>
                <tr>
                    <td>O (il/elle)</td>
                    <td>-</td>
                    <td>öğrenci</td>
                    <td>il/elle est étudiant</td>
                </tr>
                <tr>
                    <td>Biz (nous)</td>
                    <td>-(y)ız/iz</td>
                    <td>öğrenci<strong>yiz</strong></td>
                    <td>nous sommes étudiants</td>
                </tr>
                <tr>
                    <td>Siz (vous)</td>
                    <td>-sınız/siniz</td>
                    <td>öğrenci<strong>siniz</strong></td>
                    <td>vous êtes étudiants</td>
                </tr>
                <tr>
                    <td>Onlar (ils/elles)</td>
                    <td>-ler/lar</td>
                    <td>öğrenci<strong>ler</strong></td>
                    <td>ils/elles sont étudiants</td>
                </tr>
            </table>

            <div class="grammar-example">
                <strong>Exemples :</strong><br>
                Ben Türk<strong>üm</strong> = Je suis turc<br>
                Sen mutlu<strong>sun</strong> = Tu es heureux<br>
                O doktor = Il/Elle est médecin
            </div>
        `
    },

    culture: {
        title: "Le tutoiement et le vouvoiement",
        content: "En turc, 'Sen' (tu) est utilisé avec les amis, la famille et les personnes du même âge. 'Siz' (vous) est utilisé pour montrer du respect envers les personnes âgées, les supérieurs ou dans un contexte formel."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'Je suis étudiant' en turc ?",
            options: ["Ben öğrenci", "Ben öğrenciyim", "Ben öğrencisin", "Ben öğrenciler"],
            correct: 1,
            explanation: "On ajoute le suffixe -yim pour la première personne : öğrenciyim."
        },
        {
            type: "multiple-choice",
            question: "Quel pronom signifie 'nous' en turc ?",
            options: ["Sen", "Biz", "Siz", "Onlar"],
            correct: 1,
            explanation: "Biz signifie 'nous' en turc."
        },
        {
            type: "multiple-choice",
            question: "Quelle est la traduction de 'O doktor' ?",
            options: ["Je suis médecin", "Tu es médecin", "Il/Elle est médecin", "Nous sommes médecins"],
            correct: 2,
            explanation: "O = il/elle, et pour la 3e personne, on n'ajoute pas de suffixe."
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day2;
}
window.day2 = day2;
