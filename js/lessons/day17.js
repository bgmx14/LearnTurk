/**
 * JOUR 17 : À l'hôtel
 */

const day17 = {
    id: 17,
    title: "À l'hôtel",
    description: "Vocabulaire et expressions pour votre séjour à l'hôtel",
    week: 3,

    vocabulary: [
        { turkish: "Otel", phonetic: "o-tèl", translation: "Hôtel" },
        { turkish: "Oda", phonetic: "o-da", translation: "Chambre" },
        { turkish: "Rezervasyon", phonetic: "ré-zèr-vas-yon", translation: "Réservation" },
        { turkish: "Anahtar", phonetic: "a-nah-tar", translation: "Clé" },
        { turkish: "Banyo", phonetic: "ban-yo", translation: "Salle de bain" },
        { turkish: "Yatak", phonetic: "ya-tak", translation: "Lit" },
        { turkish: "Resepsiyon", phonetic: "ré-sèp-si-yon", translation: "Réception" },
        { turkish: "Kahvaltı", phonetic: "kah-val-teu", translation: "Petit-déjeuner" },
        { turkish: "Bavul", phonetic: "ba-voul", translation: "Valise" },
        { turkish: "Havlu", phonetic: "hav-lou", translation: "Serviette" },
        { turkish: "Tek kişilik", phonetic: "tèk ki-chi-lik", translation: "Une personne" },
        { turkish: "Çift kişilik", phonetic: "tchift ki-chi-lik", translation: "Deux personnes" },
        { turkish: "Asansör", phonetic: "a-san-sör", translation: "Ascenseur" },
        { turkish: "Kat", phonetic: "kat", translation: "Étage" },
        { turkish: "Wifi", phonetic: "vi-fi", translation: "Wifi" }
    ],

    dialogue: [
        {
            speaker: "Müşteri",
            turkish: "Merhaba, bir rezervasyonum var.",
            phonetic: "Mèr-ha-ba, bir ré-zèr-vas-yo-noum var.",
            french: "Bonjour, j'ai une réservation."
        },
        {
            speaker: "Resepsiyonist",
            turkish: "Hoş geldiniz! Adınız ne?",
            phonetic: "Hoch guèl-di-niz! A-deu-neuz né?",
            french: "Bienvenue ! Quel est votre nom ?"
        },
        {
            speaker: "Müşteri",
            turkish: "Pierre Dubois. İki gece için.",
            phonetic: "Pyèr Du-bwa. I-ki gué-djé i-tchin.",
            french: "Pierre Dubois. Pour deux nuits."
        },
        {
            speaker: "Resepsiyonist",
            turkish: "Evet, buldum. İşte anahtarınız. Üçüncü katta.",
            phonetic: "É-vèt, boul-doum. Ich-té a-nah-ta-reu-neuz. Ü-tchün-djü kat-ta.",
            french: "Oui, je l'ai trouvée. Voici votre clé. C'est au troisième étage."
        }
    ],

    grammar: {
        title: "Le locatif (-de, -da) : localisation",
        content: `
            <p>Le locatif indique <strong>où se trouve</strong> quelque chose ou <strong>où se déroule</strong> une action.</p>

            <h4>Formation :</h4>
            <ul>
                <li>Voyelles e, i, ö, ü → <strong>-de</strong> (evde = à la maison)</li>
                <li>Voyelles a, ı, o, u → <strong>-da</strong> (otelde = à l'hôtel)</li>
            </ul>

            <h4>Exemples :</h4>
            <ul>
                <li><strong>Otelde</strong> kalıyorum. (Je reste <em>à l'hôtel</em>)</li>
                <li><strong>Odada</strong> televizyon var. (Il y a une télé <em>dans la chambre</em>)</li>
                <li><strong>Üçüncü katta</strong> kalıyorum. (Je suis <em>au troisième étage</em>)</li>
                <li><strong>Banyoda</strong> havlu yok. (Il n'y a pas de serviette <em>dans la salle de bain</em>)</li>
            </ul>

            <h4>Différence avec le datif :</h4>
            <ul>
                <li><strong>Datif (-e/-a)</strong> : direction → Otele gidiyorum (Je vais à l'hôtel)</li>
                <li><strong>Locatif (-de/-da)</strong> : localisation → Otelde kalıyorum (Je reste à l'hôtel)</li>
            </ul>
        `
    },

    culture: {
        title: "L'hospitalité hôtelière turque",
        content: "Les hôtels turcs, du petit otel familial au grand resort, sont réputés pour leur hospitalité chaleureuse. Le petit-déjeuner turc (kahvaltı) est généralement inclus et très copieux : fromages variés, olives, tomates, concombres, œufs, miel, confitures, pain frais et bien sûr le thé turc. Dans les zones touristiques, on trouve de nombreux hôtels avec formule 'tout compris' (her şey dahil) très populaires."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'chambre' en turc ?",
            options: ["Otel", "Oda", "Kat", "Yatak"],
            correct: 1,
            explanation: "Oda signifie 'chambre'."
        },
        {
            type: "multiple-choice",
            question: "Quelle est la bonne forme : 'Je reste à l'hôtel' ?",
            options: ["Otel kalıyorum", "Otele kalıyorum", "Otelde kalıyorum", "Otelden kalıyorum"],
            correct: 2,
            explanation: "On utilise le locatif -de/-da pour indiquer où l'on reste : Otelde kalıyorum."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Kahvaltı' ?",
            options: ["Café", "Petit-déjeuner", "Déjeuner", "Dîner"],
            correct: 1,
            explanation: "Kahvaltı signifie 'petit-déjeuner' en turc."
        }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day17;
}
window.day17 = day17;
