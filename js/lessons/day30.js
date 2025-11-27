/**
 * JOUR 30 : Révision finale complète
 */

const day30 = {
    id: 30,
    title: "Révision finale complète",
    description: "Récapitulatif des 30 jours d'apprentissage du turc",
    week: 4,

    vocabulary: [
        { turkish: "Başarı", phonetic: "ba-cha-reu", translation: "succès/réussite" },
        { turkish: "Öğrenmek", phonetic: "eu-rèn-mèk", translation: "apprendre" },
        { turkish: "Pratik", phonetic: "pra-tik", translation: "pratique" },
        { turkish: "Tekrar", phonetic: "tèk-rar", translation: "répétition/révision" },
        { turkish: "Gelişmek", phonetic: "gué-lich-mèk", translation: "progresser/se développer" },
        { turkish: "Bilgi", phonetic: "bil-gui", translation: "connaissance/information" },
        { turkish: "Deneyim", phonetic: "dé-né-yim", translation: "expérience" },
        { turkish: "Hedef", phonetic: "hé-dèf", translation: "objectif/but" },
        { turkish: "Çaba", phonetic: "tcha-ba", translation: "effort" },
        { turkish: "Sabır", phonetic: "sa-beur", translation: "patience" },
        { turkish: "Anlayış", phonetic: "an-la-yeuch", translation: "compréhension" },
        { turkish: "Yetenek", phonetic: "yé-té-nèk", translation: "talent/compétence" },
        { turkish: "Kendine güven", phonetic: "kèn-di-né gu-vèn", translation: "confiance en soi" },
        { turkish: "İlerleme", phonetic: "i-lèr-lé-mé", translation: "progrès" },
        { turkish: "Tebrikler", phonetic: "tèb-rik-lèr", translation: "félicitations" }
    ],

    dialogue: [
        {
            speaker: "Öğretmen",
            turkish: "Tebrikler! 30 günlük Türkçe yolculuğunuzu tamamladınız!",
            phonetic: "Tèb-rik-lèr! Ot-ouz gun-luk Turk-tché yol-djou-lou-ou-nou-zou ta-mam-la-deu-neuz!",
            french: "Félicitations! Vous avez terminé votre voyage de 30 jours en turc!"
        },
        {
            speaker: "Öğrenci",
            turkish: "Teşekkür ederim! Çok şey öğrendim ve çok mutluyum.",
            phonetic: "Té-chèk-kur é-dé-rim! Tchok chéy eu-rèn-dim vé tchok mout-lou-youm.",
            french: "Merci beaucoup! J'ai appris beaucoup de choses et je suis très heureux."
        },
        {
            speaker: "Öğretmen",
            turkish: "Harika bir ilerleme gösterdiniz. Türkçe pratiği yapmaya devam edin!",
            phonetic: "Ha-ri-ka bir i-lèr-lé-mé gueus-tèr-di-niz. Turk-tché pra-ti-i yap-ma-ya dé-vam é-din!",
            french: "Vous avez fait des progrès fantastiques. Continuez à pratiquer le turc!"
        },
        {
            speaker: "Öğrenci",
            turkish: "Tabii ki! Türkiye'ye gitmeyi ve Türklerle konuşmayı çok istiyorum.",
            phonetic: "Ta-bi-i ki! Tur-ki-yé-yé git-mé-yi vé Turk-lèr-lé ko-nouch-ma-yeu tchok is-ti-yo-roum.",
            french: "Bien sûr! Je veux vraiment aller en Turquie et parler avec des Turcs."
        }
    ],

    grammar: {
        title: "Récapitulatif grammatical des 4 semaines",
        content: `
            <h4>SEMAINE 1 - Fondations :</h4>
            <ul>
                <li><strong>Alphabet turc</strong> : 29 lettres avec Ç, Ş, Ğ, İ, I, Ö, Ü</li>
                <li><strong>Pronoms personnels</strong> : Ben, Sen, O, Biz, Siz, Onlar</li>
                <li><strong>Verbe être</strong> : -im/-ım/-um/-üm (harmonie vocalique)</li>
                <li><strong>Nombres</strong> : Bir, iki, üç... et leur utilisation</li>
            </ul>

            <h4>SEMAINE 2 - Construction :</h4>
            <ul>
                <li><strong>Présent continu</strong> : -iyor/-ıyor/-uyor/-üyor</li>
                <li><strong>Cas locatif</strong> : -da/-de (à/dans un lieu)</li>
                <li><strong>Cas ablatif</strong> : -dan/-den (de/depuis un lieu)</li>
                <li><strong>Négation</strong> : değil, yok, -ma/-me</li>
            </ul>

            <h4>SEMAINE 3 - Expansion :</h4>
            <ul>
                <li><strong>Temps passé</strong> : -di/-dı/-du/-dü</li>
                <li><strong>Futur</strong> : -acak/-ecek</li>
                <li><strong>Cas accusatif</strong> : -(y)i/-(y)ı/-(y)u/-(y)ü</li>
                <li><strong>Possessifs</strong> : -im/-ım/-um/-üm (mon), -imiz/-ımız (notre)</li>
            </ul>

            <h4>SEMAINE 4 - Perfectionnement :</h4>
            <ul>
                <li><strong>Cas datif</strong> : -a/-e (vers un lieu)</li>
                <li><strong>Pluriel</strong> : -lar/-ler</li>
                <li><strong>Suffixes</strong> : -ci/-çi (professions), -li/-lı (avec), -siz/-sız (sans)</li>
                <li><strong>Expressions avancées</strong> : Connecteurs et idiomes</li>
            </ul>

            <h4>Principe fondamental : L'harmonie vocalique</h4>
            <p>Tous les suffixes turcs suivent l'harmonie vocalique :</p>
            <ul>
                <li><strong>Voyelles antérieures</strong> : e, i, ö, ü</li>
                <li><strong>Voyelles postérieures</strong> : a, ı, o, u</li>
                <li>Les suffixes s'adaptent à la dernière voyelle du mot</li>
            </ul>
        `
    },

    culture: {
        title: "Votre voyage dans la langue et culture turques",
        content: "En 30 jours, vous avez exploré la richesse de la langue turque et découvert la culture fascinante de la Turquie. De l'alphabet unique aux expressions idiomatiques, des salutations de base à la gastronomie, vous avez acquis les fondamentaux pour communiquer en turc. La Turquie est un pont entre l'Orient et l'Occident, et sa langue reflète cette position unique. Continuez à pratiquer, regardez des films turcs, écoutez de la musique turque, et surtout, n'ayez pas peur de parler! Les Turcs apprécieront énormément vos efforts. Kolay gelsin (que ce soit facile) dans votre parcours d'apprentissage!"
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Combien de lettres compte l'alphabet turc?",
            options: ["26", "28", "29", "30"],
            correct: 2,
            explanation: "L'alphabet turc compte 29 lettres, incluant les lettres spéciales comme Ç, Ş, Ğ, İ, I, Ö, Ü."
        },
        {
            type: "multiple-choice",
            question: "Quel suffixe exprime le présent continu (je fais)?",
            options: ["-di/-dı", "-iyor/-ıyor", "-acak/-ecek", "-miş/-mış"],
            correct: 1,
            explanation: "Le suffixe -iyor/-ıyor/-uyor/-üyor exprime le présent continu en turc."
        },
        {
            type: "multiple-choice",
            question: "Comment dit-on 'Bienvenue' en turc?",
            options: ["Güle güle", "Hoş geldiniz", "Tebrikler", "Kolay gelsin"],
            correct: 1,
            explanation: "Hoş geldiniz signifie 'Bienvenue' en turc. On répond 'Hoş bulduk'."
        },
        {
            type: "multiple-choice",
            question: "Quel cas utilise-t-on pour indiquer la direction vers un lieu?",
            options: ["Locatif (-da/-de)", "Datif (-a/-e)", "Ablatif (-dan/-den)", "Accusatif (-i/-ı)"],
            correct: 1,
            explanation: "Le cas datif (-a/-e) indique la direction vers un lieu avec les verbes de mouvement."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Tebrikler'?",
            options: ["Au revoir", "Bienvenue", "Félicitations", "Bonne chance"],
            correct: 2,
            explanation: "Tebrikler signifie 'Félicitations' en turc. Bravo pour avoir terminé les 30 jours!"
        }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day30;
}
