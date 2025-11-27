/**
 * JOUR 25 : Technologie
 */

const day25 = {
    id: 25,
    title: "Technologie",
    description: "Vocabulaire moderne de la technologie et du numérique",
    week: 4,

    vocabulary: [
        { turkish: "Bilgisayar", phonetic: "bil-gui-sa-yar", translation: "ordinateur" },
        { turkish: "Telefon", phonetic: "té-lé-fon", translation: "téléphone" },
        { turkish: "İnternet", phonetic: "in-tèr-nèt", translation: "internet" },
        { turkish: "E-posta", phonetic: "é-pos-ta", translation: "e-mail" },
        { turkish: "Mesaj", phonetic: "mé-saj", translation: "message" },
        { turkish: "Uygulama", phonetic: "ouy-gou-la-ma", translation: "application" },
        { turkish: "Şifre", phonetic: "chif-ré", translation: "mot de passe" },
        { turkish: "Ekran", phonetic: "èk-ran", translation: "écran" },
        { turkish: "Klavye", phonetic: "klav-yé", translation: "clavier" },
        { turkish: "Fare", phonetic: "fa-ré", translation: "souris" },
        { turkish: "Dosya", phonetic: "dos-ya", translation: "fichier/dossier" },
        { turkish: "İndirmek", phonetic: "in-dir-mèk", translation: "télécharger" },
        { turkish: "Yüklemek", phonetic: "yuk-lé-mèk", translation: "charger/uploader" },
        { turkish: "Wi-Fi", phonetic: "vaï-faï", translation: "Wi-Fi" },
        { turkish: "Şarj", phonetic: "charj", translation: "charge/batterie" }
    ],

    dialogue: [
        {
            speaker: "Can",
            turkish: "Telefonunun şarjı var mı?",
            phonetic: "Té-lé-fo-nou-noun char-jeu var meu?",
            french: "Ton téléphone a de la batterie?"
        },
        {
            speaker: "Deniz",
            turkish: "Hayır, bitmiş. Şarj aletim var mı?",
            phonetic: "Ha-yeur, bit-mich. Charj a-lé-tim var meu?",
            french: "Non, elle est épuisée. As-tu mon chargeur?"
        },
        {
            speaker: "Can",
            turkish: "Evet burada. Wi-Fi şifresi nedir?",
            phonetic: "È-vèt bou-ra-da. Vaï-faï chif-ré-si né-dir?",
            french: "Oui, il est ici. Quel est le mot de passe Wi-Fi?"
        },
        {
            speaker: "Deniz",
            turkish: "Şifre 'Istanbul2024'. Bilgisayarımdan sana e-posta gönderdim.",
            phonetic: "Chif-ré Istanbul ikibinyirmidört. Bil-gui-sa-ya-reum-dan sa-na é-pos-ta gueun-dèr-dim.",
            french: "Le mot de passe est 'Istanbul2024'. Je t'ai envoyé un e-mail depuis mon ordinateur."
        }
    ],

    grammar: {
        title: "Les verbes technologiques et le suffixe -mek/-mak",
        content: `
            <p>Les verbes en turc se terminent à l'infinitif par <strong>-mek</strong> ou <strong>-mak</strong> selon l'harmonie vocalique.</p>

            <h4>Verbes technologiques courants :</h4>
            <ul>
                <li><strong>İndirmek</strong> → Télécharger (littéralement: faire descendre)</li>
                <li><strong>Yüklemek</strong> → Charger/uploader (littéralement: charger)</li>
                <li><strong>Göndermek</strong> → Envoyer</li>
                <li><strong>Almak</strong> → Recevoir/prendre</li>
                <li><strong>Açmak</strong> → Ouvrir</li>
                <li><strong>Kapatmak</strong> → Fermer</li>
            </ul>

            <h4>Formation au présent continu :</h4>
            <ul>
                <li>İndiriyorum → Je télécharge</li>
                <li>Yüklüyorum → Je charge</li>
                <li>Gönderiyorum → J'envoie</li>
            </ul>

            <h4>Cas possessif avec la technologie :</h4>
            <ul>
                <li>Telefon<strong>um</strong> → Mon téléphone</li>
                <li>Bilgisayar<strong>ım</strong> → Mon ordinateur</li>
                <li>Şifre<strong>m</strong> → Mon mot de passe</li>
                <li>E-posta<strong>m</strong> → Mon e-mail</li>
            </ul>
        `
    },

    culture: {
        title: "La technologie en Turquie",
        content: "La Turquie est un pays très connecté avec un taux de pénétration d'internet élevé. Les Turcs sont très actifs sur les réseaux sociaux, particulièrement Instagram et Twitter. Les applications de messagerie comme WhatsApp sont extrêmement populaires pour la communication quotidienne. Istanbul abrite plusieurs hubs technologiques et start-ups innovantes. Les cafés offrent généralement le Wi-Fi gratuit."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'ordinateur' en turc?",
            options: ["Telefon", "Bilgisayar", "Ekran", "Klavye"],
            correct: 1,
            explanation: "Bilgisayar signifie 'ordinateur' en turc."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'indirmek'?",
            options: ["Envoyer", "Ouvrir", "Télécharger", "Fermer"],
            correct: 2,
            explanation: "İndirmek signifie 'télécharger' en turc."
        },
        {
            type: "multiple-choice",
            question: "Quel est le mot pour 'mot de passe'?",
            options: ["Mesaj", "Şifre", "Dosya", "Uygulama"],
            correct: 1,
            explanation: "Şifre signifie 'mot de passe' en turc."
        }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day25;
}
window.day25 = day25;
