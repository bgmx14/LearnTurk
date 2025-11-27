/**
 * JOUR 26 : Nature
 */

const day26 = {
    id: 26,
    title: "Nature",
    description: "Vocabulaire de la nature et de l'environnement",
    week: 4,

    vocabulary: [
        { turkish: "Doğa", phonetic: "do-a", translation: "nature" },
        { turkish: "Ağaç", phonetic: "a-atch", translation: "arbre" },
        { turkish: "Çiçek", phonetic: "tchi-tchèk", translation: "fleur" },
        { turkish: "Deniz", phonetic: "dé-niz", translation: "mer" },
        { turkish: "Dağ", phonetic: "da", translation: "montagne" },
        { turkish: "Orman", phonetic: "or-man", translation: "forêt" },
        { turkish: "Göl", phonetic: "gueul", translation: "lac" },
        { turkish: "Nehir", phonetic: "né-hir", translation: "rivière/fleuve" },
        { turkish: "Güneş", phonetic: "gu-nèch", translation: "soleil" },
        { turkish: "Ay", phonetic: "aï", translation: "lune" },
        { turkish: "Yıldız", phonetic: "yeul-deuz", translation: "étoile" },
        { turkish: "Gökyüzü", phonetic: "gueuk-yu-zu", translation: "ciel" },
        { turkish: "Toprak", phonetic: "top-rak", translation: "terre/sol" },
        { turkish: "Taş", phonetic: "tach", translation: "pierre" },
        { turkish: "Kum", phonetic: "koum", translation: "sable" }
    ],

    dialogue: [
        {
            speaker: "Aylin",
            turkish: "Hafta sonu doğaya gitmeyi sever misin?",
            phonetic: "Haf-ta so-nou do-a-ya git-mé-yi sé-vèr mi-sin?",
            french: "Aimes-tu aller dans la nature le week-end?"
        },
        {
            speaker: "Burak",
            turkish: "Evet, çok severim. Özellikle dağlara gitmeyi severim.",
            phonetic: "È-vèt, tchok sé-vé-rim. Eu-zèl-lik-lé da-la-ra git-mé-yi sé-vé-rim.",
            french: "Oui, j'aime beaucoup. J'aime surtout aller à la montagne."
        },
        {
            speaker: "Aylin",
            turkish: "Ben de! Denizi de çok severim. Orman yürüyüşleri yapıyor musun?",
            phonetic: "Bèn dé! Dé-ni-zi dé tchok sé-vé-rim. Or-man yu-ru-yuch-lé-ri ya-peu-yor mou-soun?",
            french: "Moi aussi! J'aime beaucoup la mer aussi. Fais-tu des randonnées en forêt?"
        },
        {
            speaker: "Burak",
            turkish: "Evet, bazen. Doğa çok güzel ve sakin.",
            phonetic: "È-vèt, ba-zèn. Do-a tchok gu-zèl vé sa-kin.",
            french: "Oui, parfois. La nature est très belle et calme."
        }
    ],

    grammar: {
        title: "Le cas datif (-a/-e) et les verbes de mouvement",
        content: `
            <p>Le suffixe <strong>-a/-e</strong> (datif) indique la direction vers un lieu avec les verbes de mouvement.</p>

            <h4>Formation du datif selon l'harmonie vocalique :</h4>
            <ul>
                <li>Voyelles a, ı, o, u → suffixe <strong>-a</strong></li>
                <li>Voyelles e, i, ö, ü → suffixe <strong>-e</strong></li>
            </ul>

            <h4>Exemples avec la nature :</h4>
            <ul>
                <li>Orman → Orman<strong>a</strong> gidiyorum (Je vais à la forêt)</li>
                <li>Deniz → Deniz<strong>e</strong> gidiyorum (Je vais à la mer)</li>
                <li>Dağ → Dağ<strong>a</strong> gidiyorum (Je vais à la montagne)</li>
                <li>Göl → Göl<strong>e</strong> gidiyorum (Je vais au lac)</li>
            </ul>

            <h4>Verbes de mouvement courants :</h4>
            <ul>
                <li><strong>Gitmek</strong> → Aller</li>
                <li><strong>Gelmek</strong> → Venir</li>
                <li><strong>Yürümek</strong> → Marcher</li>
                <li><strong>Koşmak</strong> → Courir</li>
            </ul>

            <h4>Expression avec "sevmek" (aimer) :</h4>
            <ul>
                <li>Doğa<strong>yı</strong> severim → J'aime la nature (accusatif)</li>
                <li>Doğa<strong>ya</strong> gitmek → Aller dans la nature (datif)</li>
            </ul>
        `
    },

    culture: {
        title: "La nature en Turquie",
        content: "La Turquie possède une incroyable diversité de paysages: montagnes enneigées, forêts luxuriantes, côtes méditerranéennes, et plateaux d'Anatolie. Les Turcs aiment passer du temps dans la nature, notamment pour les pique-niques (piknik) en famille. Les côtes turques (Akdeniz - Méditerranée, Karadeniz - Mer Noire, Ege - Égée) sont très prisées. Les parcs nationaux comme la Cappadoce ou le Pamukkale sont des trésors naturels."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'forêt' en turc?",
            options: ["Dağ", "Deniz", "Orman", "Göl"],
            correct: 2,
            explanation: "Orman signifie 'forêt' en turc."
        },
        {
            type: "multiple-choice",
            question: "Quel suffixe utilise-t-on pour indiquer la direction?",
            options: ["-da/-de", "-a/-e", "-dan/-den", "-ı/-i"],
            correct: 1,
            explanation: "Le suffixe -a/-e (datif) indique la direction vers un lieu."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'güneş'?",
            options: ["Lune", "Étoile", "Soleil", "Ciel"],
            correct: 2,
            explanation: "Güneş signifie 'soleil' en turc."
        }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day26;
}
window.day26 = day26;
