/**
 * JOUR 22 : Travail
 */

const day22 = {
    id: 22,
    title: "Travail",
    description: "Vocabulaire professionnel et expressions du monde du travail",
    week: 4,

    vocabulary: [
        { turkish: "İş", phonetic: "ich", translation: "travail" },
        { turkish: "Ofis", phonetic: "o-fis", translation: "bureau" },
        { turkish: "Şirket", phonetic: "chir-kèt", translation: "entreprise" },
        { turkish: "Maaş", phonetic: "ma-ach", translation: "salaire" },
        { turkish: "Toplantı", phonetic: "top-lan-teu", translation: "réunion" },
        { turkish: "Patron", phonetic: "pa-tron", translation: "patron" },
        { turkish: "Çalışan", phonetic: "tcha-leu-chan", translation: "employé" },
        { turkish: "Müdür", phonetic: "mu-dur", translation: "directeur" },
        { turkish: "Mühendis", phonetic: "mu-hèn-dis", translation: "ingénieur" },
        { turkish: "Öğretmen", phonetic: "eu-rèt-mèn", translation: "enseignant" },
        { turkish: "Doktor", phonetic: "dok-tor", translation: "médecin" },
        { turkish: "Avukat", phonetic: "a-vu-kat", translation: "avocat" },
        { turkish: "Proje", phonetic: "pro-jè", translation: "projet" },
        { turkish: "Mesai", phonetic: "mè-sa-i", translation: "heures de travail" },
        { turkish: "İzin", phonetic: "i-zin", translation: "congé/permission" }
    ],

    dialogue: [
        {
            speaker: "Ahmet",
            turkish: "Ne iş yapıyorsun?",
            phonetic: "Né ich ya-peu-yor-soun?",
            french: "Quel travail fais-tu?"
        },
        {
            speaker: "Zeynep",
            turkish: "Ben bir şirkette mühendisim. Sen?",
            phonetic: "Bèn bir chir-kèt-té mu-hèn-di-sim. Sèn?",
            french: "Je suis ingénieur dans une entreprise. Et toi?"
        },
        {
            speaker: "Ahmet",
            turkish: "Ben öğretmenim. Bugün toplantın var mı?",
            phonetic: "Bèn eu-rèt-mè-nim. Bou-gun top-lan-teun var meu?",
            french: "Je suis enseignant. As-tu une réunion aujourd'hui?"
        },
        {
            speaker: "Zeynep",
            turkish: "Evet, saat üçte bir toplantım var.",
            phonetic: "È-vèt, sa-at utch-té bir top-lan-teum var.",
            french: "Oui, j'ai une réunion à trois heures."
        }
    ],

    grammar: {
        title: "Les professions et le suffixe -ci/-çi",
        content: `
            <p>En turc, beaucoup de noms de professions se forment avec les suffixes <strong>-ci, -çi, -cu, -cü</strong>.</p>

            <h4>Formation selon l'harmonie vocalique :</h4>
            <ul>
                <li><strong>-ci</strong> : après e, i → Öğretmen<strong>ci</strong> (enseignant)</li>
                <li><strong>-çi</strong> : après e, i (consonne sourde) → İş<strong>çi</strong> (ouvrier)</li>
                <li><strong>-cu</strong> : après a, ı → Satı<strong>cu</strong> (vendeur)</li>
                <li><strong>-cü</strong> : après o, ö, u, ü → Süt<strong>çü</strong> (laitier)</li>
            </ul>

            <h4>Expression "Ne iş yapıyorsun?" :</h4>
            <p>Cette expression signifie "Quel travail fais-tu?" et s'utilise couramment pour demander la profession de quelqu'un.</p>

            <h4>Exemples :</h4>
            <ul>
                <li>Ofiste <strong>çalışıyorum</strong> → Je travaille au bureau</li>
                <li>Toplantıda <strong>konuşuyorum</strong> → Je parle en réunion</li>
                <li>Projede <strong>çalışıyorum</strong> → Je travaille sur le projet</li>
            </ul>
        `
    },

    culture: {
        title: "La culture du travail en Turquie",
        content: "En Turquie, les relations professionnelles sont souvent plus informelles qu'en France. Il est courant de prendre le thé (çay) plusieurs fois par jour au bureau. Les horaires de travail sont généralement de 9h à 18h, avec une pause déjeuner d'une heure. Le respect de la hiérarchie est important, mais l'ambiance reste généralement conviviale."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'entreprise' en turc?",
            options: ["İş", "Şirket", "Ofis", "Toplantı"],
            correct: 1,
            explanation: "Şirket signifie 'entreprise' en turc."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Ne iş yapıyorsun?'",
            options: ["Comment vas-tu?", "Quel travail fais-tu?", "Où travailles-tu?", "Aimes-tu ton travail?"],
            correct: 1,
            explanation: "Ne iş yapıyorsun? signifie 'Quel travail fais-tu?'"
        },
        {
            type: "multiple-choice",
            question: "Quel est le mot turc pour 'réunion'?",
            options: ["Mesai", "Proje", "Toplantı", "İzin"],
            correct: 2,
            explanation: "Toplantı signifie 'réunion' en turc."
        }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day22;
}
