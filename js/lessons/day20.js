/**
 * JOUR 20 : Les loisirs
 */

const day20 = {
    id: 20,
    title: "Les loisirs",
    description: "Parlez de vos hobbies et activités préférées en turc",
    week: 3,

    vocabulary: [
        { turkish: "Hobi", phonetic: "ho-bi", translation: "Hobby / Loisir" },
        { turkish: "Spor", phonetic: "spor", translation: "Sport" },
        { turkish: "Müzik", phonetic: "mü-zik", translation: "Musique" },
        { turkish: "Sinema", phonetic: "si-né-ma", translation: "Cinéma" },
        { turkish: "Kitap", phonetic: "ki-tap", translation: "Livre" },
        { turkish: "Film", phonetic: "film", translation: "Film" },
        { turkish: "Futbol", phonetic: "fout-bol", translation: "Football" },
        { turkish: "Basketbol", phonetic: "bas-kèt-bol", translation: "Basketball" },
        { turkish: "Yüzme", phonetic: "yüz-mé", translation: "Natation" },
        { turkish: "Dans", phonetic: "dans", translation: "Danse" },
        { turkish: "Resim", phonetic: "ré-sim", translation: "Dessin / Peinture" },
        { turkish: "Fotoğraf", phonetic: "fo-to-raf", translation: "Photo / Photographie" },
        { turkish: "Seyahat", phonetic: "sé-ya-hat", translation: "Voyage" },
        { turkish: "Oyun", phonetic: "o-youn", translation: "Jeu" },
        { turkish: "Okumak", phonetic: "o-kou-mak", translation: "Lire" }
    ],

    dialogue: [
        {
            speaker: "Zeynep",
            turkish: "Boş zamanında ne yaparsın?",
            phonetic: "Boch za-ma-neun-da né ya-par-seun?",
            french: "Que fais-tu pendant ton temps libre ?"
        },
        {
            speaker: "Can",
            turkish: "Kitap okumayı ve müzik dinlemeyi seviyorum.",
            phonetic: "Ki-tap o-kou-ma-yeu vé mü-zik din-lé-mé-yi sé-vi-yo-roum.",
            french: "J'aime lire des livres et écouter de la musique."
        },
        {
            speaker: "Zeynep",
            turkish: "Ben spor yapmayı tercih ediyorum. Haftada üç kez yüzüyorum.",
            phonetic: "Bèn spor yap-ma-yeu tèr-djih é-di-yo-roum. Haf-ta-da ütch kèz yü-zü-yo-roum.",
            french: "Moi je préfère faire du sport. Je nage trois fois par semaine."
        },
        {
            speaker: "Can",
            turkish: "Çok güzel! Ben de futbol oynamayı seviyorum.",
            phonetic: "Tchok gü-zèl! Bèn dé fout-bol oï-na-ma-yeu sé-vi-yo-roum.",
            french: "Super ! Moi aussi j'aime jouer au football."
        }
    ],

    grammar: {
        title: "L'infinitif verbal et le gérondif",
        content: `
            <p>En turc, l'infinitif se forme avec le suffixe <strong>-mak/-mek</strong>.</p>

            <h4>Infinitif (-mak/-mek) :</h4>
            <ul>
                <li>Voyelles a, ı, o, u → <strong>-mak</strong> (okumak = lire)</li>
                <li>Voyelles e, i, ö, ü → <strong>-mek</strong> (yüzmek = nager)</li>
            </ul>

            <h4>Gérondif (-ma/-me + suffixe possessif) :</h4>
            <p>Pour dire "j'aime faire quelque chose", on utilise : <strong>verbe-ma/me-yı/yi/yu/yü seviyorum</strong></p>
            <ul>
                <li><strong>Okumayı</strong> seviyorum (J'aime lire)</li>
                <li><strong>Yüzmeyi</strong> seviyorum (J'aime nager)</li>
                <li><strong>Oynamayı</strong> seviyorum (J'aime jouer)</li>
                <li><strong>Dinlemeyi</strong> seviyorum (J'aime écouter)</li>
            </ul>

            <h4>Exemples de verbes de loisirs :</h4>
            <ul>
                <li><strong>Okumak</strong> (lire) → Okumayı severim</li>
                <li><strong>Yazmak</strong> (écrire) → Yazmayı severim</li>
                <li><strong>Çizmek</strong> (dessiner) → Çizmeyi severim</li>
                <li><strong>Koşmak</strong> (courir) → Koşmayı severim</li>
            </ul>
        `
    },

    culture: {
        title: "Les loisirs en Turquie",
        content: "Le football est le sport le plus populaire en Turquie - les trois grands clubs d'Istanbul (Galatasaray, Fenerbahçe, Beşiktaş) ont des supporters passionnés. Les Turcs aiment aussi beaucoup jouer au tavla (backgammon) dans les cafés. Le pique-nique (piknik) est une activité familiale très populaire, surtout le week-end. Les çay bahçesi (jardins de thé) sont des lieux de socialisation où les gens se retrouvent pour boire du thé, discuter, ou jouer aux cartes. La musique traditionnelle et moderne sont toutes deux très appréciées."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'J'aime lire' en turc ?",
            options: ["Okumak seviyorum", "Okumayı seviyorum", "Okumayi severim", "Okuma seviyorum"],
            correct: 1,
            explanation: "Okumayı seviyorum - on utilise le gérondif (okuma) + accusatif (yı)."
        },
        {
            type: "multiple-choice",
            question: "Quelle est l'infinitif de 'nager' ?",
            options: ["Yüzmak", "Yüzmek", "Yüzma", "Yüzme"],
            correct: 1,
            explanation: "Yüzmek (nager) - avec le suffixe -mek car la racine contient ü."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Boş zamanında ne yaparsın?' ?",
            options: ["Quel est ton hobby?", "Que fais-tu pendant ton temps libre?", "Aimes-tu le sport?", "Joues-tu au football?"],
            correct: 1,
            explanation: "Boş zamanında ne yaparsın? signifie 'Que fais-tu pendant ton temps libre?'"
        }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day20;
}
window.day20 = day20;
