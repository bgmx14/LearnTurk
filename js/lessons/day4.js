/**
 * JOUR 4 : Famille et suffixes possessifs
 */

(function() {
    if (window.day4) return; // Already loaded

    window.day4 = {
    id: 4,
    title: "Famille et suffixes possessifs",
    description: "Apprenez les mots de la famille et comment exprimer la possession",
    week: 1,

    vocabulary: [
        { turkish: "Aile", phonetic: "a-i-lé", translation: "famille" },
        { turkish: "Anne", phonetic: "an-né", translation: "mère" },
        { turkish: "Baba", phonetic: "ba-ba", translation: "père" },
        { turkish: "Kardeş", phonetic: "kar-dèch", translation: "frère/sœur" },
        { turkish: "Abi", phonetic: "a-bi", translation: "grand frère" },
        { turkish: "Abla", phonetic: "ab-la", translation: "grande sœur" },
        { turkish: "Çocuk", phonetic: "tcho-jouk", translation: "enfant" },
        { turkish: "Kız", phonetic: "keuz", translation: "fille" },
        { turkish: "Oğul", phonetic: "o-oul", translation: "fils" },
        { turkish: "Dede", phonetic: "dé-dé", translation: "grand-père" },
        { turkish: "Nine", phonetic: "ni-né", translation: "grand-mère" },
        { turkish: "Teyze", phonetic: "téy-zé", translation: "tante maternelle" },
        { turkish: "Amca", phonetic: "am-dja", translation: "oncle paternel" },
        { turkish: "Büyük", phonetic: "bü-yük", translation: "grand" },
        { turkish: "Küçük", phonetic: "kü-tchük", translation: "petit" }
    ],

    dialogue: [
        {
            speaker: "Can",
            turkish: "Senin ailen büyük mü?",
            phonetic: "Sé-nin a-i-lén bü-yük mü?",
            french: "Ta famille est grande?"
        },
        {
            speaker: "Selin",
            turkish: "Evet, benim ailem büyük. Benim iki kardeşim var.",
            phonetic: "È-vèt, bé-nim a-i-lém bü-yük. Bé-nim i-ki kar-dé-chim var.",
            french: "Oui, ma famille est grande. J'ai deux frères/sœurs."
        },
        {
            speaker: "Can",
            turkish: "Benim bir ablam ve bir kardeşim var.",
            phonetic: "Bé-nim bir ab-lam vé bir kar-dé-chim var.",
            french: "J'ai une grande sœur et un frère/une sœur."
        },
        {
            speaker: "Selin",
            turkish: "Senin annen ve baban nerede?",
            phonetic: "Sé-nin an-nén vé ba-ban né-ré-dé?",
            french: "Où sont ta mère et ton père?"
        }
    ],

    grammar: {
        title: "Les suffixes possessifs",
        content: `
            <p>En turc, la possession s'exprime avec des suffixes ajoutés au nom possédé.</p>

            <h4>Suffixes possessifs :</h4>
            <table class="grammar-table">
                <tr>
                    <th>Possesseur</th>
                    <th>Suffixe</th>
                    <th>Exemple (anne = mère)</th>
                    <th>Traduction</th>
                </tr>
                <tr>
                    <td>Benim (mon/ma)</td>
                    <td>-(i)m</td>
                    <td>anne<strong>m</strong></td>
                    <td>ma mère</td>
                </tr>
                <tr>
                    <td>Senin (ton/ta)</td>
                    <td>-(i)n</td>
                    <td>anne<strong>n</strong></td>
                    <td>ta mère</td>
                </tr>
                <tr>
                    <td>Onun (son/sa)</td>
                    <td>-(s)i</td>
                    <td>anne<strong>si</strong></td>
                    <td>sa mère</td>
                </tr>
                <tr>
                    <td>Bizim (notre)</td>
                    <td>-(i)miz</td>
                    <td>anne<strong>miz</strong></td>
                    <td>notre mère</td>
                </tr>
                <tr>
                    <td>Sizin (votre)</td>
                    <td>-(i)niz</td>
                    <td>anne<strong>niz</strong></td>
                    <td>votre mère</td>
                </tr>
                <tr>
                    <td>Onların (leur)</td>
                    <td>-leri/-ları</td>
                    <td>anne<strong>leri</strong></td>
                    <td>leur mère</td>
                </tr>
            </table>

            <div class="grammar-example">
                <strong>Exemples :</strong><br>
                Benim baba<strong>m</strong> = Mon père<br>
                Senin kardeş<strong>in</strong> = Ton frère/ta sœur<br>
                Onun çocuğ<strong>u</strong> = Son enfant
            </div>

            <h4>Structure avec VAR (avoir) :</h4>
            <p>Pour dire "j'ai", on utilise : possessif + var</p>
            <div class="grammar-example">
                Benim iki kardeş<strong>im</strong> <strong>var</strong> = J'ai deux frères/sœurs<br>
                Senin anne<strong>n</strong> <strong>var</strong> mı? = As-tu une mère?
            </div>
        `
    },

    culture: {
        title: "La famille turque",
        content: "La famille occupe une place centrale dans la société turque. Les liens familiaux sont très forts et il est courant que plusieurs générations vivent ensemble. Les termes 'Abi' (grand frère) et 'Abla' (grande sœur) sont aussi utilisés comme marques de respect envers des personnes plus âgées."
    },

    exercises: [
        {
            type: "multiple-choice",
            question: "Comment dit-on 'ma mère' en turc ?",
            options: ["Annen", "Annem", "Annesi", "Annemiz"],
            correct: 1,
            explanation: "On ajoute le suffixe -m pour 'mon/ma' : annem."
        },
        {
            type: "multiple-choice",
            question: "Que signifie 'Kardeş' ?",
            options: ["Père", "Mère", "Frère/Sœur", "Enfant"],
            correct: 2,
            explanation: "Kardeş signifie 'frère' ou 'sœur' en turc."
        },
        {
            type: "multiple-choice",
            question: "Comment dit-on 'J'ai un frère' ?",
            options: ["Benim kardeş var", "Benim kardeşim var", "Senin kardeşin var", "Onun kardeşi var"],
            correct: 1,
            explanation: "Benim kardeşim var = J'ai un frère/une sœur."
        }
    ]
};

    // Export for Node.js if needed
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = window.day4;
    }
})();
