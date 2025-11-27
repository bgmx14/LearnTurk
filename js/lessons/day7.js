/**
 * JOUR 7 : Révision Semaine 1
 */

const day7 = {
    id: 7,
    title: "Révision Semaine 1",
    description: "Révisez tout ce que vous avez appris cette semaine",
    week: 1,

    vocabulary: [
        { turkish: "Tekrar", phonetic: "tèk-rar", translation: "répétition, révision" },
        { turkish: "Öğrenmek", phonetic: "eu-rèn-mèk", translation: "apprendre" },
        { turkish: "Bilmek", phonetic: "bil-mèk", translation: "savoir" },
        { turkish: "Anlamak", phonetic: "an-la-mak", translation: "comprendre" },
        { turkish: "Konuşmak", phonetic: "ko-nouch-mak", translation: "parler" },
        { turkish: "Okumak", phonetic: "o-kou-mak", translation: "lire" },
        { turkish: "Yazmak", phonetic: "yaz-mak", translation: "écrire" },
        { turkish: "Dinlemek", phonetic: "din-lé-mèk", translation: "écouter" },
        { turkish: "Çalışmak", phonetic: "tcha-leuch-mak", translation: "travailler, étudier" },
        { turkish: "Pratik", phonetic: "pra-tik", translation: "pratique" },
        { turkish: "Alıştırma", phonetic: "a-leuch-teur-ma", translation: "exercice" },
        { turkish: "Başarılı", phonetic: "ba-cha-reu-leu", translation: "réussi" },
        { turkish: "Kolay", phonetic: "ko-laï", translation: "facile" },
        { turkish: "Zor", phonetic: "zor", translation: "difficile" },
        { turkish: "Devam", phonetic: "dé-vam", translation: "continuer" }
    ],

    dialogue: [
        {
            speaker: "Öğretmen (Professeur)",
            turkish: "Bugün tekrar yapıyoruz. Hazır mısınız?",
            phonetic: "Bou-gün tèk-rar ya-peu-yo-rouz. Ha-zeur meu-seu-neuz?",
            french: "Aujourd'hui nous révisons. Êtes-vous prêts?"
        },
        {
            speaker: "Öğrenciler (Étudiants)",
            turkish: "Evet, hazırız!",
            phonetic: "È-vèt, ha-zeu-reuz!",
            french: "Oui, nous sommes prêts!"
        },
        {
            speaker: "Öğretmen",
            turkish: "Çok güzel! Ben size sorular soracağım.",
            phonetic: "Tchok gü-zèl! Bèn si-zé so-rou-lar so-ra-dja-eum.",
            french: "Très bien! Je vais vous poser des questions."
        },
        {
            speaker: "Öğrenci",
            turkish: "Türkçe öğrenmek çok kolay değil ama çok güzel!",
            phonetic: "Türk-tché eu-rèn-mèk tchok ko-laï dé-guil a-ma tchok gü-zèl!",
            french: "Apprendre le turc n'est pas très facile mais c'est très beau!"
        }
    ],

    grammar: {
        title: "Récapitulatif Semaine 1",
        content: `
            <h4>Ce que vous avez appris :</h4>

            <h4>Jour 1 : Alphabet</h4>
            <p>Les 29 lettres de l'alphabet turc avec les lettres spéciales : Ç, Ğ, İ, I, Ö, Ş, Ü</p>

            <h4>Jour 2 : Pronoms et verbe être</h4>
            <table class="grammar-table">
                <tr>
                    <th>Pronom</th>
                    <th>Suffixe</th>
                    <th>Exemple</th>
                </tr>
                <tr>
                    <td>Ben</td>
                    <td>-(y)ım/im</td>
                    <td>öğrenciyim</td>
                </tr>
                <tr>
                    <td>Sen</td>
                    <td>-sın/sin</td>
                    <td>öğrencisin</td>
                </tr>
                <tr>
                    <td>O</td>
                    <td>-</td>
                    <td>öğrenci</td>
                </tr>
            </table>

            <h4>Jour 3 : Nombres et heure</h4>
            <p>Nombres de 0 à 100 : bir, iki, üç, dört, beş...<br>
            L'heure : Saat kaç? = Quelle heure est-il?</p>

            <h4>Jour 4 : Famille et possession</h4>
            <p>Suffixes possessifs : -m (mon), -n (ton), -si (son)</p>
            <div class="grammar-example">
                annem = ma mère<br>
                baban = ton père<br>
                kardeşi = son frère/sa sœur
            </div>

            <h4>Jour 5 : Jours et mois</h4>
            <p>Pazartesi, Salı, Çarşamba, Perşembe, Cuma, Cumartesi, Pazar</p>

            <h4>Jour 6 : Couleurs</h4>
            <p>Kırmızı (rouge), Mavi (bleu), Sarı (jaune), Yeşil (vert), Siyah (noir), Beyaz (blanc)</p>
        `
    },

    culture: {
        title: "Votre progression",
        content: "Félicitations! Vous avez terminé votre première semaine d'apprentissage du turc. Vous connaissez maintenant l'alphabet turc, les pronoms, les nombres, le vocabulaire de la famille, les jours de la semaine et les couleurs. C'est une excellente base pour continuer votre apprentissage!"
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'Je suis étudiant' en turc ?",
            options: ["Ben öğrenci", "Ben öğrenciyim", "Ben öğretmen", "Sen öğrencisin"],
            correct: 1,
            explanation: "Ben öğrenciyim (je + étudiant + suffixe -yim)."
        },
        {
            type: "multiple-choice",
            question: "Quel jour vient après Çarşamba ?",
            options: ["Salı", "Perşembe", "Cuma", "Cumartesi"],
            correct: 1,
            explanation: "Perşembe (jeudi) vient après Çarşamba (mercredi)."
        },
        {
            type: "multiple-choice",
            question: "Comment dit-on 'ma famille' en turc ?",
            options: ["Aile", "Ailen", "Ailem", "Ailesi"],
            correct: 2,
            explanation: "Ailem = ma famille (aile + suffixe possessif -m)."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Saat kaç?' ?",
            options: ["Quel jour?", "Quelle heure?", "Quel âge?", "Quelle couleur?"],
            correct: 1,
            explanation: "Saat kaç? = Quelle heure est-il?"
        },
        {
            type: "multiple-choice",
            question: "Comment dit-on '25' en turc ?",
            options: ["Yirmi", "Yirmi beş", "Otuz beş", "On beş"],
            correct: 1,
            explanation: "Yirmi beş = vingt-cinq."
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day7;
}
window.day7 = day7;
