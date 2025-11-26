/**
 * JOUR 19 : Les saisons
 */

const day19 = {
    id: 19,
    title: "Les saisons",
    description: "Découvrez les quatre saisons et leurs particularités en Turquie",
    week: 3,

    vocabulary: [
        { turkish: "Mevsim", phonetic: "mèv-sim", translation: "Saison" },
        { turkish: "İlkbahar", phonetic: "ilk-ba-har", translation: "Printemps" },
        { turkish: "Yaz", phonetic: "yaz", translation: "Été" },
        { turkish: "Sonbahar", phonetic: "son-ba-har", translation: "Automne" },
        { turkish: "Kış", phonetic: "keuch", translation: "Hiver" },
        { turkish: "Ay", phonetic: "aï", translation: "Mois" },
        { turkish: "Yıl", phonetic: "yeul", translation: "Année" },
        { turkish: "Çiçek", phonetic: "tchi-tchèk", translation: "Fleur" },
        { turkish: "Yaprak", phonetic: "yap-rak", translation: "Feuille" },
        { turkish: "Deniz", phonetic: "dé-niz", translation: "Mer" },
        { turkish: "Plaj", phonetic: "plaj", translation: "Plage" },
        { turkish: "Sıcaklık", phonetic: "seu-djak-leuk", translation: "Température" },
        { turkish: "Derece", phonetic: "dé-ré-djé", translation: "Degré" },
        { turkish: "İklim", phonetic: "ik-lim", translation: "Climat" },
        { turkish: "Doğa", phonetic: "do-a", translation: "Nature" }
    ],

    dialogue: [
        {
            speaker: "Emma",
            turkish: "En sevdiğin mevsim hangisi?",
            phonetic: "Èn sèv-di-in mèv-sim han-gi-si?",
            french: "Quelle est ta saison préférée ?"
        },
        {
            speaker: "Mehmet",
            turkish: "İlkbaharı çok seviyorum. Çiçekler açıyor.",
            phonetic: "Ilk-ba-ha-reu tchok sé-vi-yo-roum. Tchi-tchèk-lèr a-tcheu-yor.",
            french: "J'aime beaucoup le printemps. Les fleurs s'ouvrent."
        },
        {
            speaker: "Emma",
            turkish: "Ben yazı tercih ediyorum. Denize gidiyorum.",
            phonetic: "Bèn ya-zeu tèr-djih é-di-yo-roum. Dé-ni-zé gi-di-yo-roum.",
            french: "Moi je préfère l'été. Je vais à la mer."
        },
        {
            speaker: "Mehmet",
            turkish: "Yazın çok sıcak oluyor ama plaj güzel!",
            phonetic: "Ya-zeun tchok seu-djak o-lou-yor a-ma plaj gü-zèl!",
            french: "Il fait très chaud en été mais la plage c'est super !"
        }
    ],

    grammar: {
        title: "Le génitif (-in/-ın/-un/-ün) : possession",
        content: `
            <p>Le génitif indique la <strong>possession</strong> ou l'<strong>appartenance</strong>.</p>

            <h4>Formation selon l'harmonie vocalique :</h4>
            <ul>
                <li>Voyelle e, i → <strong>-in</strong> (evin = de la maison)</li>
                <li>Voyelle a, ı → <strong>-ın</strong> (arabanın = de la voiture)</li>
                <li>Voyelle o, u → <strong>-un</strong> (okulun = de l'école)</li>
                <li>Voyelle ö, ü → <strong>-ün</strong> (gülün = de la rose)</li>
            </ul>

            <h4>Exemples :</h4>
            <ul>
                <li><strong>Yazın</strong> sıcak oluyor. (En été, il fait chaud - littéralement : <em>de l'été</em>)</li>
                <li><strong>Kışın</strong> kar yağıyor. (En hiver, il neige - littéralement : <em>de l'hiver</em>)</li>
                <li><strong>İstanbul'un</strong> havası güzel. (Le temps <em>d'Istanbul</em> est beau)</li>
                <li><strong>Baharın</strong> çiçekleri güzel. (Les fleurs <em>du printemps</em> sont belles)</li>
            </ul>

            <h4>Usage temporel :</h4>
            <p>Le génitif s'utilise pour dire "en" + saison ou "pendant"</p>
            <ul>
                <li><strong>Yazın</strong> tatile gidiyorum. (En été, je pars en vacances)</li>
            </ul>
        `
    },

    culture: {
        title: "Les saisons et traditions turques",
        content: "Le printemps (İlkbahar) est célébré avec le Nevruz le 21 mars, marquant le nouvel an perse et kurde. L'été (yaz) est la saison des vacances - les Turcs affluent vers les côtes méditerranéenne et égéenne. L'automne (sonbahar) est la saison des récoltes et des vendanges dans les régions viticoles. L'hiver (kış) amène la saison du ski dans les montagnes et la consommation de sahlep (boisson chaude) et de kestane (châtaignes grillées) dans les rues."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'printemps' en turc ?",
            options: ["Yaz", "Kış", "İlkbahar", "Sonbahar"],
            correct: 2,
            explanation: "İlkbahar signifie 'printemps' en turc."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Yazın denize gidiyorum' ?",
            options: ["J'écris à la mer", "En été je vais à la mer", "En hiver je vais à la mer", "Je nage dans la mer"],
            correct: 1,
            explanation: "Yazın (en été) denize gidiyorum (je vais à la mer)."
        },
        {
            type: "multiple-choice",
            question: "Quelle est la forme génitif de 'kış' (hiver) ?",
            options: ["Kışın", "Kışan", "Kışen", "Kışun"],
            correct: 0,
            explanation: "Kışın est la forme génitif de kış, suivant l'harmonie vocalique (ı → ın)."
        }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = day19;
}
