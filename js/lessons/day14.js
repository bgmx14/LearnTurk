/**
 * JOUR 14 : Révision semaine 2
 */

const day14 = {
    id: 14,
    title: "Révision semaine 2",
    description: "Révision complète du vocabulaire et de la grammaire de la semaine 2",
    week: 2,

    vocabulary: [
        { turkish: "Restoran", phonetic: "rès-to-ran", translation: "restaurant" },
        { turkish: "Yemek", phonetic: "yé-mèk", translation: "nourriture" },
        { turkish: "İçecek", phonetic: "i-tché-djèk", translation: "boisson" },
        { turkish: "Alışveriş", phonetic: "a-leuch-vé-rich", translation: "shopping" },
        { turkish: "Giysi", phonetic: "gui-si", translation: "vêtement" },
        { turkish: "Vücut", phonetic: "vü-jout", translation: "corps" },
        { turkish: "Fiyat", phonetic: "fi-yat", translation: "prix" },
        { turkish: "Lezzetli", phonetic: "lèz-zèt-li", translation: "délicieux" },
        { turkish: "Ucuz", phonetic: "ou-jouz", translation: "pas cher" },
        { turkish: "Pahalı", phonetic: "pa-ha-leu", translation: "cher" },
        { turkish: "Sevmek", phonetic: "sèv-mèk", translation: "aimer" },
        { turkish: "Almak", phonetic: "al-mak", translation: "acheter" },
        { turkish: "Giymek", phonetic: "gui-mèk", translation: "porter" },
        { turkish: "Ağrımak", phonetic: "a-reu-mak", translation: "avoir mal" },
        { turkish: "Lütfen", phonetic: "lüt-fèn", translation: "s'il vous plaît" }
    ],

    dialogue: [
        {
            speaker: "A",
            turkish: "Markette alışveriş yapıyorum. Sen ne yapıyorsun?",
            phonetic: "Mar-kèt-té a-leuch-vé-rich ya-peu-yo-roum. Sèn né ya-peu-yor-soun?",
            french: "Je fais les courses au supermarché. Qu'est-ce que tu fais?"
        },
        {
            speaker: "B",
            turkish: "Restoranda yemek yiyorum. Çok lezzetli!",
            phonetic: "Rès-to-ran-da yé-mèk yi-yo-roum. Tchok lèz-zèt-li!",
            french: "Je mange au restaurant. C'est très délicieux!"
        },
        {
            speaker: "A",
            turkish: "Ne yiyorsun?",
            phonetic: "Né yi-yor-soun?",
            french: "Qu'est-ce que tu manges?"
        },
        {
            speaker: "B",
            turkish: "Balık ve salata. Çay da içiyorum.",
            phonetic: "Ba-leuk vé sa-la-ta. Tchaï da i-tchi-yo-roum.",
            french: "Du poisson et de la salade. Je bois aussi du thé."
        }
    ],

    grammar: {
        title: "Récapitulatif de la grammaire - Semaine 2",
        content: `
            <h4>1. Verbes importants de la semaine :</h4>
            <div class="grammar-example">
                <strong>SEVMEK</strong> (aimer) : Severim, Seversin, Sever<br>
                <strong>ALMAK</strong> (acheter/prendre) : Alırım, Alırsın, Alır<br>
                <strong>GIYMEK</strong> (porter) : Giyerim, Giyersin, Giyer<br>
                <strong>AĞRIMAK</strong> (avoir mal) : Ağrıyor (il/elle fait mal)
            </div>

            <h4>2. Suffixes essentiels :</h4>
            <div class="grammar-example">
                <strong>-LI/-Lİ/-LU/-LÜ</strong> (avec) : Şekerli (avec sucre), Sütlü (avec lait)<br>
                <strong>-SIZ/-SİZ/-SUZ/-SÜZ</strong> (sans) : Şekersiz (sans sucre), Sütsüz (sans lait)<br>
                <strong>-DA/-DE/-TA/-TE</strong> (dans, à) : Markette (au marché), İndirimde (en promo)<br>
                <strong>-LA/-LE</strong> (avec, par) : Kartla (par carte), Nakitle (en espèces)
            </div>

            <h4>3. Possessifs avec parties du corps :</h4>
            <div class="grammar-example">
                Baş → Başım (ma tête)<br>
                El → Elim (ma main)<br>
                Göz → Gözüm (mon oeil)<br>
                Ayak → Ayağım (mon pied)
            </div>

            <h4>4. Questions alternatives avec MI :</h4>
            <div class="grammar-example">
                Soğuk mu sıcak mı? = Froid ou chaud?<br>
                Çay mı kahve mi? = Thé ou café?<br>
                Şekerli mi şekersiz mi? = Avec ou sans sucre?
            </div>

            <h4>5. Phrases pratiques de la semaine :</h4>
            <div class="grammar-example">
                <strong>Hesap lütfen</strong> = L'addition s'il vous plaît<br>
                <strong>Bu ne kadar?</strong> = Combien ça coûte?<br>
                <strong>Deneyebilir miyim?</strong> = Puis-je essayer?<br>
                <strong>Başım ağrıyor</strong> = J'ai mal à la tête<br>
                <strong>Afiyet olsun!</strong> = Bon appétit!
            </div>
        `
    },

    culture: {
        title: "Culture turque - Résumé semaine 2",
        content: "Cette semaine, nous avons découvert plusieurs aspects de la vie quotidienne en Turquie : la culture du restaurant avec le 'Afiyet olsun' et les pourboires, l'importance du thé servi dans des verres tulipe, les marchés traditionnels et le marchandage, la mode turque mêlant tradition et modernité, et le système de santé avec les pharmacies reconnaissables à leur croix verte. La Turquie offre une riche cuisine, des marchés animés et une hospitalité chaleureuse."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'J'aime le poisson' en turc ?",
            options: ["Balık yemek", "Balık severim", "Balık var", "Balık lütfen"],
            correct: 1,
            explanation: "Balık severim = J'aime le poisson (severim = j'aime)."
        },
        {
            type: "multiple-choice",
            question: "Quel suffixe signifie 'sans' en turc ?",
            options: ["-li/-lı", "-siz/-sız", "-da/-de", "-la/-le"],
            correct: 1,
            explanation: "Le suffixe -siz/-sız/-suz/-süz signifie 'sans' (ex: şekersiz = sans sucre)."
        },
        {
            type: "multiple-choice",
            question: "Comment demande-t-on le prix en turc ?",
            options: ["Ne zaman?", "Bu ne kadar?", "Nerede?", "Nasıl?"],
            correct: 1,
            explanation: "Bu ne kadar? = Combien ça coûte? / Quel est le prix?"
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = day14;
}
window.day14 = day14;
