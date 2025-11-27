/**
 * JOUR 13 : Le corps humain
 */

const day13 = {
    id: 13,
    title: "Le corps humain",
    description: "Vocabulaire essentiel sur le corps et la santé",
    week: 2,

    vocabulary: [
        { turkish: "Vücut", phonetic: "vü-jout", translation: "corps" },
        { turkish: "Baş", phonetic: "bach", translation: "tête" },
        { turkish: "Saç", phonetic: "satch", translation: "cheveux" },
        { turkish: "Göz", phonetic: "gheuz", translation: "oeil" },
        { turkish: "Kulak", phonetic: "kou-lak", translation: "oreille" },
        { turkish: "Burun", phonetic: "bou-roun", translation: "nez" },
        { turkish: "Ağız", phonetic: "a-euz", translation: "bouche" },
        { turkish: "Diş", phonetic: "dich", translation: "dent" },
        { turkish: "Boyun", phonetic: "bo-youn", translation: "cou" },
        { turkish: "Kol", phonetic: "kol", translation: "bras" },
        { turkish: "El", phonetic: "èl", translation: "main" },
        { turkish: "Parmak", phonetic: "par-mak", translation: "doigt" },
        { turkish: "Bacak", phonetic: "ba-djak", translation: "jambe" },
        { turkish: "Ayak", phonetic: "a-yak", translation: "pied" },
        { turkish: "Kalp", phonetic: "kalp", translation: "coeur" }
    ],

    dialogue: [
        {
            speaker: "Doktor (Médecin)",
            turkish: "Nesi var? Nerede ağrınız var?",
            phonetic: "Né-si var? Né-ré-dé a-reu-neuz var?",
            french: "Qu'avez-vous? Où avez-vous mal?"
        },
        {
            speaker: "Hasta (Patient)",
            turkish: "Başım ağrıyor. Çok yorgunum.",
            phonetic: "Ba-cheum a-reu-yor. Tchok yor-gou-noum.",
            french: "J'ai mal à la tête. Je suis très fatigué."
        },
        {
            speaker: "Doktor",
            turkish: "Ateşiniz var mı?",
            phonetic: "A-té-chi-niz var meu?",
            french: "Avez-vous de la fièvre?"
        },
        {
            speaker: "Hasta",
            turkish: "Evet, biraz. Boğazım da ağrıyor.",
            phonetic: "É-vèt, bi-raz. Bo-a-zeum da a-reu-yor.",
            french: "Oui, un peu. J'ai aussi mal à la gorge."
        }
    ],

    grammar: {
        title: "Exprimer la douleur et les symptômes",
        content: `
            <h4>Dire qu'on a mal (verbe AĞRIMAK) :</h4>
            <div class="grammar-example">
                <strong>... ağrıyor</strong> = ... fait mal<br>
                Başım ağrıyor = J'ai mal à la tête<br>
                Kolum ağrıyor = J'ai mal au bras<br>
                Bacağım ağrıyor = J'ai mal à la jambe<br>
                Dişim ağrıyor = J'ai mal aux dents
            </div>

            <h4>Suffixes possessifs avec parties du corps :</h4>
            <div class="grammar-example">
                Baş = Tête → <strong>Başım</strong> = Ma tête<br>
                El = Main → <strong>Elim</strong> = Ma main<br>
                Göz = Oeil → <strong>Gözüm</strong> = Mon oeil<br>
                Ayak = Pied → <strong>Ayağım</strong> = Mon pied
            </div>

            <h4>Symptômes courants :</h4>
            <div class="grammar-example">
                <strong>Ateş</strong> = Fièvre<br>
                <strong>Öksürük</strong> = Toux<br>
                <strong>Grip</strong> = Grippe<br>
                Ateşim var = J'ai de la fièvre<br>
                Öksürüyorum = Je tousse
            </div>

            <h4>Questions du médecin :</h4>
            <div class="grammar-example">
                Nesi var? = Qu'avez-vous?<br>
                Nerede ağrınız var? = Où avez-vous mal?<br>
                Ne oldu? = Que s'est-il passé?
            </div>
        `
    },

    culture: {
        title: "Le système de santé en Turquie",
        content: "En Turquie, les pharmacies (eczane) sont facilement reconnaissables avec leur croix verte. Les pharmaciens peuvent donner des conseils pour les problèmes mineurs. Pour voir un médecin, on va à la polyclinique (poliklinik). L'expression 'Geçmiş olsun' est utilisée pour souhaiter un prompt rétablissement. Le tourisme médical est très développé en Turquie, notamment pour les soins dentaires."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'J'ai mal à la tête' en turc ?",
            options: ["Başım ağrıyor", "Baş var", "Başım güzel", "Baş lütfen"],
            correct: 0,
            explanation: "Başım ağrıyor signifie 'J'ai mal à la tête'."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Kulak' ?",
            options: ["Nez", "Bouche", "Oreille", "Oeil"],
            correct: 2,
            explanation: "Kulak signifie 'oreille' en turc."
        },
        {
            type: "multiple-choice",
            question: "Comment demande le médecin 'Où avez-vous mal?' ?",
            options: ["Ne kadar?", "Nerede ağrınız var?", "Nasılsınız?", "Ne zaman?"],
            correct: 1,
            explanation: "Nerede ağrınız var? = Où avez-vous mal?"
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day13;
}
window.day13 = day13;
