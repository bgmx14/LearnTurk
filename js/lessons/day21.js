/**
 * JOUR 21 : Révision semaine 3
 */

const day21 = {
    id: 21,
    title: "Révision de la semaine 3",
    description: "Révisez tout le vocabulaire et la grammaire de la semaine 3",
    week: 3,

    vocabulary: [
        { turkish: "Otobüs", phonetic: "o-to-büs", translation: "Bus" },
        { turkish: "Sağ", phonetic: "sa", translation: "Droite" },
        { turkish: "Sol", phonetic: "sol", translation: "Gauche" },
        { turkish: "Otel", phonetic: "o-tèl", translation: "Hôtel" },
        { turkish: "Hava", phonetic: "ha-va", translation: "Temps / Air" },
        { turkish: "Güneşli", phonetic: "gü-nèch-li", translation: "Ensoleillé" },
        { turkish: "İlkbahar", phonetic: "ilk-ba-har", translation: "Printemps" },
        { turkish: "Yaz", phonetic: "yaz", translation: "Été" },
        { turkish: "Kış", phonetic: "keuch", translation: "Hiver" },
        { turkish: "Spor", phonetic: "spor", translation: "Sport" },
        { turkish: "Müzik", phonetic: "mü-zik", translation: "Musique" },
        { turkish: "Okumak", phonetic: "o-kou-mak", translation: "Lire" },
        { turkish: "Nerede?", phonetic: "né-ré-dé?", translation: "Où ?" },
        { turkish: "Rezervasyon", phonetic: "ré-zèr-vas-yon", translation: "Réservation" },
        { turkish: "Mevsim", phonetic: "mèv-sim", translation: "Saison" }
    ],

    dialogue: [
        {
            speaker: "Turist",
            turkish: "Otele nasıl gidebilirim? Çok uzak mı?",
            phonetic: "O-té-lé na-seul gi-dé-bi-li-rim? Tchok ou-zak meu?",
            french: "Comment puis-je aller à l'hôtel ? C'est très loin ?"
        },
        {
            speaker: "Yerel",
            turkish: "Hayır, yakın. Düz gidin, sonra sağa dönün.",
            phonetic: "Ha-yeur, ya-keun. Düz gi-din, son-ra sa-a dö-nün.",
            french: "Non, c'est proche. Allez tout droit, puis tournez à droite."
        },
        {
            speaker: "Turist",
            turkish: "Bugün hava nasıl? Yağmur yağacak mı?",
            phonetic: "Bou-gün ha-va na-seul? Ya-mour ya-a-djak meu?",
            french: "Quel temps fait-il aujourd'hui ? Va-t-il pleuvoir ?"
        },
        {
            speaker: "Yerel",
            turkish: "Hayır, bugün çok güneşli. Plaja gidebilirsiniz.",
            phonetic: "Ha-yeur, bou-gün tchok gü-nèch-li. Pla-ja gi-dé-bi-lir-si-niz.",
            french: "Non, il fait très beau aujourd'hui. Vous pouvez aller à la plage."
        }
    ],

    grammar: {
        title: "Révision : Les cas grammaticaux",
        content: `
            <p>Cette semaine, nous avons étudié trois cas importants :</p>

            <h4>1. Le datif (-e, -a) : Direction</h4>
            <ul>
                <li><strong>Otele</strong> gidiyorum (Je vais <em>à l'hôtel</em>)</li>
                <li><strong>Havaalanına</strong> gidiyorum (Je vais <em>à l'aéroport</em>)</li>
                <li>Usage : Indique où l'on va, la direction</li>
            </ul>

            <h4>2. Le locatif (-de, -da) : Localisation</h4>
            <ul>
                <li><strong>Otelde</strong> kalıyorum (Je reste <em>à l'hôtel</em>)</li>
                <li><strong>Üçüncü katta</strong> (Au troisième étage)</li>
                <li>Usage : Indique où l'on est, la position</li>
            </ul>

            <h4>3. Le génitif (-in, -ın, -un, -ün) : Possession</h4>
            <ul>
                <li><strong>Yazın</strong> sıcak (<em>En été</em> il fait chaud)</li>
                <li><strong>İstanbul'un</strong> havası (Le temps <em>d'Istanbul</em>)</li>
                <li>Usage : Indique l'appartenance ou le temps</li>
            </ul>

            <h4>Autres points grammaticaux :</h4>
            <ul>
                <li><strong>Impératif</strong> : Git (va), Gidin (allez), Dön (tourne)</li>
                <li><strong>Suffixe -li</strong> : Güneşli (ensoleillé), yağmurlu (pluvieux)</li>
                <li><strong>Gérondif</strong> : Okumayı seviyorum (J'aime lire)</li>
            </ul>
        `
    },

    culture: {
        title: "Situations pratiques en Turquie",
        content: "Cette semaine, vous avez appris le vocabulaire essentiel pour voyager en Turquie. Vous pouvez maintenant prendre les transports (otobüs, taksi, metro), demander votre chemin (nerede, sağ, sol), réserver un hôtel (otel, rezervasyon, oda), parler de la météo (hava, güneşli, yağmurlu), discuter des saisons (ilkbahar, yaz, sonbahar, kış) et de vos loisirs (spor, müzik, kitap). Ces connaissances vous permettront de communiquer dans la plupart des situations quotidiennes lors de votre séjour en Turquie !"
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Quelle est la différence entre 'Otele gidiyorum' et 'Otelde kalıyorum' ?",
            options: [
                "Il n'y a pas de différence",
                "Le premier indique la direction (je vais à), le second la localisation (je reste à)",
                "Le premier est au présent, le second au futur",
                "Le premier est formel, le second informel"
            ],
            correct: 1,
            explanation: "Otele (datif) = direction 'je vais à', Otelde (locatif) = localisation 'je reste à'."
        },
        {
            type: "multiple-choice",
            question: "Comment dit-on 'Tournez à droite' en turc ?",
            options: ["Sağ git", "Sağa dön", "Sağa dönün", "Sağda dönün"],
            correct: 2,
            explanation: "Sağa dönün = Tournez à droite (forme polie de l'impératif avec datif)."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Yazın denize gidiyorum' ?",
            options: [
                "J'écris à la mer",
                "En été je vais à la mer",
                "Je vais écrire à la mer",
                "L'été va à la mer"
            ],
            correct: 1,
            explanation: "Yazın (génitif de yaz = en été) denize (datif = à la mer) gidiyorum (je vais)."
        }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day21;
}
window.day21 = day21;
