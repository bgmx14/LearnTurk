/**
 * JOUR 16 : Les directions
 */

const day16 = {
    id: 16,
    title: "Les directions",
    description: "Apprenez à demander et donner des directions en turc",
    week: 3,

    vocabulary: [
        { turkish: "Sağ", phonetic: "sa", translation: "Droite" },
        { turkish: "Sol", phonetic: "sol", translation: "Gauche" },
        { turkish: "İleri", phonetic: "i-lé-ri", translation: "Tout droit" },
        { turkish: "Geri", phonetic: "gué-ri", translation: "Arrière / En arrière" },
        { turkish: "Yakın", phonetic: "ya-keun", translation: "Proche / Près" },
        { turkish: "Uzak", phonetic: "ou-zak", translation: "Loin" },
        { turkish: "Nerede?", phonetic: "né-ré-dé?", translation: "Où ?" },
        { turkish: "Düz git", phonetic: "düz git", translation: "Aller tout droit" },
        { turkish: "Dön", phonetic: "dön", translation: "Tourner" },
        { turkish: "Köşe", phonetic: "kö-ché", translation: "Coin / Angle" },
        { turkish: "Cadde", phonetic: "djad-dé", translation: "Avenue" },
        { turkish: "Sokak", phonetic: "so-kak", translation: "Rue" },
        { turkish: "Karşı", phonetic: "kar-cheu", translation: "En face" },
        { turkish: "Yanında", phonetic: "ya-neun-da", translation: "À côté de" },
        { turkish: "Arasında", phonetic: "a-ra-seun-da", translation: "Entre" }
    ],

    dialogue: [
        {
            speaker: "Turist",
            turkish: "Affedersiniz, postane nerede?",
            phonetic: "Af-fé-dér-si-niz, pos-ta-né né-ré-dé?",
            french: "Excusez-moi, où est la poste ?"
        },
        {
            speaker: "Yardımsever",
            turkish: "Düz gidin, sonra sağa dönün.",
            phonetic: "Düz gi-din, son-ra sa-a dö-nün.",
            french: "Allez tout droit, puis tournez à droite."
        },
        {
            speaker: "Turist",
            turkish: "Çok uzak mı?",
            phonetic: "Tchok ou-zak meu?",
            french: "C'est très loin ?"
        },
        {
            speaker: "Yardımsever",
            turkish: "Hayır, çok yakın. Beş dakika.",
            phonetic: "Ha-yeur, tchok ya-keun. Bèch da-ki-ka.",
            french: "Non, c'est très proche. Cinq minutes."
        }
    ],

    grammar: {
        title: "L'impératif",
        content: `
            <p>L'impératif sert à donner des <strong>ordres</strong> ou des <strong>instructions</strong>.</p>

            <h4>Formation (2ème personne du singulier - sen) :</h4>
            <ul>
                <li>On utilise simplement le <strong>radical du verbe</strong></li>
                <li><strong>Git</strong> (Va / Allez)</li>
                <li><strong>Gel</strong> (Viens / Venez)</li>
                <li><strong>Dön</strong> (Tourne / Tournez)</li>
            </ul>

            <h4>Formation (2ème personne du pluriel - siz, forme polie) :</h4>
            <ul>
                <li>Radical + <strong>-in/-ın/-un/-ün</strong> (selon l'harmonie vocalique)</li>
                <li><strong>Gidin</strong> (Allez)</li>
                <li><strong>Gelin</strong> (Venez)</li>
                <li><strong>Dönün</strong> (Tournez)</li>
            </ul>

            <h4>Exemples dans les directions :</h4>
            <ul>
                <li><strong>Düz gidin</strong> (Allez tout droit)</li>
                <li><strong>Sağa dönün</strong> (Tournez à droite)</li>
                <li><strong>Sola dönün</strong> (Tournez à gauche)</li>
            </ul>
        `
    },

    culture: {
        title: "L'hospitalité turque et les directions",
        content: "Les Turcs sont réputés pour leur hospitalité et leur volonté d'aider les étrangers. Si vous demandez votre chemin, ne soyez pas surpris si quelqu'un décide de vous accompagner jusqu'à votre destination plutôt que de simplement vous donner des directions ! Il est très courant d'utiliser des points de repère (mosquées, magasins connus, écoles) plutôt que des noms de rues pour donner des directions."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'tout droit' en turc ?",
            options: ["Sağ", "Sol", "İleri", "Geri"],
            correct: 2,
            explanation: "İleri signifie 'tout droit' ou 'en avant'."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Sağa dönün' ?",
            options: ["Tournez à gauche", "Tournez à droite", "Allez tout droit", "Revenez en arrière"],
            correct: 1,
            explanation: "Sağa dönün signifie 'Tournez à droite' (sağ = droite, dönün = tournez)."
        },
        {
            type: "multiple-choice",
            question: "Comment demande-t-on 'Où ?' en turc ?",
            options: ["Ne?", "Kim?", "Nerede?", "Nasıl?"],
            correct: 2,
            explanation: "Nerede? signifie 'Où ?' en turc."
        }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day16;
}
window.day16 = day16;
