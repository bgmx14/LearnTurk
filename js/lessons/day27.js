/**
 * JOUR 27 : Animaux
 */

const day27 = {
    id: 27,
    title: "Animaux",
    description: "Vocabulaire des animaux domestiques et sauvages",
    week: 4,

    vocabulary: [
        { turkish: "Hayvan", phonetic: "haï-van", translation: "animal" },
        { turkish: "Kedi", phonetic: "ké-di", translation: "chat" },
        { turkish: "Köpek", phonetic: "keu-pèk", translation: "chien" },
        { turkish: "Kuş", phonetic: "kouch", translation: "oiseau" },
        { turkish: "At", phonetic: "at", translation: "cheval" },
        { turkish: "İnek", phonetic: "i-nèk", translation: "vache" },
        { turkish: "Koyun", phonetic: "ko-youn", translation: "mouton" },
        { turkish: "Balık", phonetic: "ba-leuk", translation: "poisson" },
        { turkish: "Kaplumbağa", phonetic: "kap-loum-ba-a", translation: "tortue" },
        { turkish: "Tavşan", phonetic: "tav-chan", translation: "lapin" },
        { turkish: "Fare", phonetic: "fa-ré", translation: "souris" },
        { turkish: "Kuzu", phonetic: "kou-zou", translation: "agneau" },
        { turkish: "Aslan", phonetic: "as-lan", translation: "lion" },
        { turkish: "Fil", phonetic: "fil", translation: "éléphant" },
        { turkish: "Maymun", phonetic: "maï-moun", translation: "singe" }
    ],

    dialogue: [
        {
            speaker: "Selin",
            turkish: "Evcil hayvanın var mı?",
            phonetic: "Èv-djil haï-va-neun var meu?",
            french: "As-tu un animal de compagnie?"
        },
        {
            speaker: "Emre",
            turkish: "Evet, bir kedim var. Adı Pamuk. Senin?",
            phonetic: "È-vèt, bir ké-dim var. A-deu Pa-mouk. Sé-nin?",
            french: "Oui, j'ai un chat. Il s'appelle Pamuk. Et toi?"
        },
        {
            speaker: "Selin",
            turkish: "Benim bir köpeğim var. Çok oyuncu ve sevimli.",
            phonetic: "Bé-nim bir keu-pé-im var. Tchok o-youn-djou vé sé-vim-li.",
            french: "J'ai un chien. Il est très joueur et mignon."
        },
        {
            speaker: "Emre",
            turkish: "Ne güzel! Hayvanları çok seviyorum. Balık da besliyor musun?",
            phonetic: "Né gu-zèl! Haï-van-la-reu tchok sé-vi-yo-roum. Ba-leuk da bès-li-yor mou-soun?",
            french: "Comme c'est bien! J'adore les animaux. Élèves-tu aussi des poissons?"
        }
    ],

    grammar: {
        title: "Le pluriel avec les animaux et les adjectifs descriptifs",
        content: `
            <p>En turc, le pluriel se forme avec les suffixes <strong>-lar/-ler</strong> selon l'harmonie vocalique.</p>

            <h4>Formation du pluriel :</h4>
            <ul>
                <li>Voyelles a, ı, o, u → suffixe <strong>-lar</strong></li>
                <li>Voyelles e, i, ö, ü → suffixe <strong>-ler</strong></li>
            </ul>

            <h4>Exemples avec les animaux :</h4>
            <ul>
                <li>Kedi → Kedi<strong>ler</strong> (chats)</li>
                <li>Köpek → Köpek<strong>ler</strong> (chiens)</li>
                <li>Kuş → Kuş<strong>lar</strong> (oiseaux)</li>
                <li>Balık → Balık<strong>lar</strong> (poissons)</li>
            </ul>

            <h4>Adjectifs descriptifs courants :</h4>
            <ul>
                <li><strong>Sevimli</strong> → Mignon/adorable</li>
                <li><strong>Oyuncu</strong> → Joueur</li>
                <li><strong>Yaramaz</strong> → Espiègle/coquin</li>
                <li><strong>Uysal</strong> → Docile</li>
                <li><strong>Vahşi</strong> → Sauvage</li>
            </ul>

            <h4>Expression "var" avec les possessions :</h4>
            <ul>
                <li>Kedi<strong>m</strong> var → J'ai un chat (mon chat existe)</li>
                <li>Köpek<strong>ler</strong> var → Il y a des chiens</li>
                <li>Evcil hayvan<strong>ım</strong> var → J'ai un animal de compagnie</li>
            </ul>
        `
    },

    culture: {
        title: "Les animaux dans la culture turque",
        content: "En Turquie, les chats (kedi) sont particulièrement aimés et respectés, surtout à Istanbul où ils font partie intégrante du paysage urbain. Le chat Angora turc (Türk Angorası) est une race célèbre originaire d'Ankara. Les chiens de berger comme le Kangal et l'Akbash sont des races turques protectrices des troupeaux. Dans les contes turcs, le loup (kurt) et le renard (tilki) jouent souvent des rôles importants."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'chat' en turc?",
            options: ["Köpek", "Kedi", "Kuş", "Balık"],
            correct: 1,
            explanation: "Kedi signifie 'chat' en turc."
        },
        {
            type: "multiple-choice",
            question: "Quel suffixe forme le pluriel après la voyelle 'i'?",
            options: ["-lar", "-ler", "-cı", "-sız"],
            correct: 1,
            explanation: "Le suffixe -ler forme le pluriel après les voyelles e, i, ö, ü."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'evcil hayvan'?",
            options: ["Animal sauvage", "Animal de compagnie", "Oiseau", "Poisson"],
            correct: 1,
            explanation: "Evcil hayvan signifie 'animal de compagnie' (animal domestique)."
        }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day27;
}
