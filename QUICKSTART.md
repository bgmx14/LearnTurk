# 🇹🇷 Turc en 30 Jours - Guide de Démarrage Rapide

Bienvenue dans votre voyage d'apprentissage du turc! Ce guide vous aidera à commencer rapidement.

## 📋 Table des Matières

1. [Installation](#installation)
2. [Utilisation](#utilisation)
3. [Structure du Site](#structure-du-site)
4. [Fonctionnalités](#fonctionnalités)
5. [Conseils d'Apprentissage](#conseils-dapprentissage)
6. [Résolution de Problèmes](#résolution-de-problèmes)

## 🚀 Installation

### Option 1 : Ouverture Directe (Recommandé)
1. Téléchargez ou clonez ce dépôt
2. Ouvrez `index.html` dans votre navigateur web
3. C'est tout! Le site fonctionne entièrement côté client

### Option 2 : Serveur Local
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js
npx http-server

# Ouvrez http://localhost:8000 dans votre navigateur
```

## 💡 Utilisation

### Navigation

Le site est divisé en 6 sections principales accessibles via la barre de navigation :

1. **Accueil** 🏠 - Vue d'ensemble et statistiques
2. **Leçons** 📚 - 30 leçons interactives
3. **Dictionnaire** 📖 - 1000+ mots avec audio
4. **Grammaire** ✏️ - Règles essentielles
5. **Quiz** 🎯 - Tests interactifs
6. **Progrès** 📊 - Suivi de votre progression

### Première Utilisation

1. **Commencez par l'Accueil**
   - Lisez la présentation
   - Consultez les statistiques (30 jours, 1000+ mots)
   - Cliquez sur "Commencer Maintenant"

2. **Suivez les Leçons**
   - Commencez par le Jour 1
   - Lisez le vocabulaire
   - Écoutez la prononciation (bouton 🔊)
   - Pratiquez avec les dialogues
   - Complétez les exercices
   - Marquez la leçon comme complétée

3. **Utilisez le Dictionnaire**
   - Recherchez des mots spécifiques
   - Filtrez par catégorie (Verbes, Noms, etc.)
   - Cliquez sur 🔊 pour entendre la prononciation

4. **Testez-vous avec les Quiz**
   - 4 types de quiz disponibles
   - 10 questions par quiz
   - Feedback immédiat
   - Scores sauvegardés automatiquement

## 📁 Structure du Site

```
LearnTurk/
├── index.html              # Page principale
├── css/
│   └── styles.css         # Styles complets et responsive
├── js/
│   ├── audio.js           # Système audio (Web Speech API)
│   ├── data.js            # Chargeur de données
│   ├── app.js             # Logique principale
│   ├── lessons.js         # Gestion des leçons
│   ├── dictionary.js      # Dictionnaire interactif
│   ├── grammar.js         # Section grammaire
│   ├── quiz.js            # Système de quiz
│   ├── lessons/           # 30 fichiers de leçons
│   │   ├── day1.js
│   │   ├── day2.js
│   │   └── ... (jusqu'à day30.js)
│   └── vocabulary/        # 10 fichiers de vocabulaire
│       ├── verbs.js
│       ├── nouns-common.js
│       ├── nouns-food.js
│       ├── adjectives.js
│       ├── expressions.js
│       ├── family-people.js
│       ├── places.js
│       ├── nature-animals.js
│       ├── time-numbers.js
│       └── technology-misc.js
└── README.md
```

## ✨ Fonctionnalités

### 🎓 Leçons Interactives

Chaque leçon contient :
- ✅ 15 mots de vocabulaire avec phonétique
- ✅ Dialogues pratiques (4-6 échanges)
- ✅ Point grammatical expliqué
- ✅ Note culturelle turque
- ✅ 3 exercices interactifs
- ✅ Prononciation audio pour chaque mot

### 📖 Dictionnaire Complet

- 🔍 Recherche en temps réel
- 🏷️ Filtres par catégorie
- 🔊 Audio pour tous les mots
- 📄 ~1000 mots organisés
- 💾 Export CSV possible

### ✏️ Grammaire

5 sections essentielles :
1. **Alphabet** - 29 lettres turques
2. **Pronoms** - Personnels et possessifs
3. **Verbes** - Conjugaisons (présent, passé, futur)
4. **Cas** - 6 cas grammaticaux
5. **Harmonie Vocalique** - Règles et exemples

### 🎯 Quiz Interactifs

4 types de quiz :
- 📚 **Vocabulaire** - Testez votre mémoire
- ✏️ **Grammaire** - Vérifiez votre compréhension
- 🔊 **Écoute** - Pratiquez la compréhension orale
- 🔄 **Traduction** - Français ↔ Turc

### 📊 Suivi de Progrès

- 📅 Jours complétés / 30
- 📖 Mots appris / 1000
- 🎯 Score moyen des quiz
- 🏆 Système de réalisations
- 💾 Sauvegarde automatique (localStorage)

## 🎯 Conseils d'Apprentissage

### Programme Recommandé

**Semaine 1 - Fondamentaux**
- Jours 1-7 : Alphabet, pronoms, nombres, famille, couleurs
- Objectif : 15-20 minutes par jour
- Focus : Prononciation et bases

**Semaine 2 - Communication Quotidienne**
- Jours 8-14 : Restaurant, nourriture, shopping, vêtements
- Objectif : 20-30 minutes par jour
- Focus : Phrases pratiques

**Semaine 3 - Situations Pratiques**
- Jours 15-21 : Transports, directions, hôtel, météo
- Objectif : 25-35 minutes par jour
- Focus : Conversations réelles

**Semaine 4 - Perfectionnement**
- Jours 22-30 : Travail, santé, culture, révision
- Objectif : 30-40 minutes par jour
- Focus : Fluidité et culture

### Meilleures Pratiques

1. **Régularité**
   - Étudiez chaque jour, même 15 minutes
   - Mieux vaut peu mais régulier que beaucoup mais rare

2. **Prononciation**
   - Utilisez les boutons audio 🔊
   - Répétez à voix haute
   - Enregistrez-vous pour comparer

3. **Révision**
   - Révisez les leçons précédentes
   - Faites les quiz plusieurs fois
   - Jours 7, 14, 21, 30 sont dédiés à la révision

4. **Pratique Active**
   - Écrivez les mots nouveaux
   - Créez vos propres phrases
   - Parlez avec des turcophones si possible

5. **Immersion**
   - Regardez des vidéos en turc (YouTube)
   - Écoutez de la musique turque
   - Suivez des comptes turcs sur les réseaux sociaux

## 🔧 Résolution de Problèmes

### L'audio ne fonctionne pas

**Problème** : Le bouton 🔊 ne produit aucun son

**Solutions** :
1. Vérifiez que votre navigateur supporte la Web Speech API (Chrome, Edge, Safari)
2. Vérifiez le volume de votre système
3. Autorisez le son dans votre navigateur
4. Essayez un autre navigateur

**Note** : Firefox a un support limité de la synthèse vocale turque

### Les données ne se sauvegardent pas

**Problème** : Ma progression disparaît quand je ferme le navigateur

**Solutions** :
1. Vérifiez que les cookies/localStorage sont activés
2. N'utilisez pas le mode navigation privée
3. Vérifiez l'espace de stockage disponible
4. Essayez de vider le cache et recharger

### Le site est lent

**Problème** : Le chargement est lent

**Solutions** :
1. Attendez le chargement complet des 30 leçons (1-2 secondes)
2. Fermez les autres onglets
3. Utilisez un serveur local au lieu d'ouvrir directement le fichier
4. Vérifiez votre connexion (si hébergé en ligne)

### Les exercices ne fonctionnent pas

**Problème** : Les boutons ne répondent pas

**Solutions** :
1. Vérifiez la console du navigateur (F12) pour les erreurs
2. Rechargez la page (Ctrl+R ou Cmd+R)
3. Vérifiez que JavaScript est activé
4. Essayez un autre navigateur

### Problème d'affichage sur mobile

**Problème** : Le site ne s'affiche pas correctement

**Solutions** :
1. Utilisez le mode portrait
2. Zoomez/dézoomez pour ajuster
3. Essayez en mode paysage pour les tableaux
4. Utilisez un navigateur moderne (Chrome, Safari)

## 📱 Compatibilité

### Navigateurs Supportés

| Navigateur | Version | Audio | Fonctionnalités |
|------------|---------|-------|-----------------|
| Chrome     | 60+     | ✅ Oui | Toutes |
| Edge       | 79+     | ✅ Oui | Toutes |
| Safari     | 12+     | ✅ Oui | Toutes |
| Firefox    | 60+     | ⚠️ Limité | Toutes sauf audio optimal |
| Opera      | 47+     | ✅ Oui | Toutes |

### Appareils

- 💻 **Desktop** : Expérience optimale
- 📱 **Tablette** : Entièrement responsive
- 📱 **Smartphone** : Navigation adaptée

## 🎨 Personnalisation

### Modifier les Couleurs

Éditez `css/styles.css` et modifiez les variables CSS :

```css
:root {
    --primary: #E63946;      /* Rouge turc */
    --secondary: #457B9D;    /* Bleu */
    --accent: #F1FAEE;       /* Blanc cassé */
}
```

### Ajouter des Leçons

1. Créez `js/lessons/day31.js` en suivant le modèle
2. Le fichier sera chargé automatiquement

### Ajouter du Vocabulaire

1. Créez un nouveau fichier dans `js/vocabulary/`
2. Suivez le format existant
3. Le vocabulaire sera chargé automatiquement

## 📚 Ressources Supplémentaires

### Apprentissage du Turc

- [Duolingo Turc](https://www.duolingo.com/course/tr/fr/Apprendre-turc)
- [TurkishClass101](https://www.turkishclass101.com/)
- [YouTube - Easy Turkish](https://www.youtube.com/c/EasyTurkish)

### Dictionnaires en Ligne

- [Tureng](https://tureng.com/) - Dictionnaire turc-français
- [Reverso Context](https://context.reverso.net/traduction/turc-francais/) - Traduction en contexte

### Médias Turcs

- [TRT World](https://www.trtworld.com/) - Actualités
- [Turkish Radio](https://www.trt.net.tr/) - Radio turque
- [Netflix Turkey](https://www.netflix.com/tr/) - Films et séries

## 💬 Support

Pour toute question, suggestion ou bug :

1. Vérifiez ce guide QUICKSTART
2. Consultez le fichier README.md
3. Ouvrez une issue sur GitHub
4. Contactez le développeur

## 📝 Licence

Ce projet est libre d'utilisation pour l'apprentissage personnel.

## 🙏 Remerciements

Merci d'utiliser **Turc en 30 Jours** !

**Kolay gelsin!** (Bon courage!) 🇹🇷

---

*Dernière mise à jour : 2025*
*Version : 1.0.0*
