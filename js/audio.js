/**
 * AUDIO.JS - Système Audio avec Web Speech API
 * Gère la synthèse vocale pour la prononciation turque
 */

const AudioSystem = {
    // Configuration
    config: {
        lang: 'tr-TR',
        rate: 0.85,
        pitch: 1,
        volume: 1
    },

    // État
    isSpeaking: false,
    currentUtterance: null,

    /**
     * Initialise le système audio
     */
    init() {
        if (!('speechSynthesis' in window)) {
            console.warn('La synthèse vocale n\'est pas supportée par ce navigateur');
            this.showUnsupportedMessage();
            return false;
        }

        // Gérer les événements de fin de lecture
        speechSynthesis.addEventListener('voiceschanged', () => {
            this.loadVoices();
        });

        return true;
    },

    /**
     * Charge les voix disponibles
     */
    loadVoices() {
        const voices = speechSynthesis.getVoices();
        const turkishVoices = voices.filter(voice => voice.lang.startsWith('tr'));

        if (turkishVoices.length > 0) {
            console.log('Voix turques disponibles:', turkishVoices.map(v => v.name));
        } else {
            console.warn('Aucune voix turque disponible');
        }
    },

    /**
     * Parle un texte en turc
     * @param {string} text - Texte à prononcer
     * @param {object} options - Options de lecture
     */
    speak(text, options = {}) {
        if (!text) return;

        // Arrêter toute lecture en cours
        this.stop();

        // Créer une nouvelle utterance
        const utterance = new SpeechSynthesisUtterance(text);

        // Configurer la langue et les paramètres
        utterance.lang = options.lang || this.config.lang;
        utterance.rate = options.rate || this.config.rate;
        utterance.pitch = options.pitch || this.config.pitch;
        utterance.volume = options.volume || this.config.volume;

        // Sélectionner une voix turque si disponible
        const voices = speechSynthesis.getVoices();
        const turkishVoice = voices.find(voice => voice.lang.startsWith('tr'));
        if (turkishVoice) {
            utterance.voice = turkishVoice;
        }

        // Événements
        utterance.onstart = () => {
            this.isSpeaking = true;
            if (options.onStart) options.onStart();
        };

        utterance.onend = () => {
            this.isSpeaking = false;
            if (options.onEnd) options.onEnd();
        };

        utterance.onerror = (event) => {
            this.isSpeaking = false;
            console.error('Erreur de synthèse vocale:', event);
            if (options.onError) options.onError(event);
        };

        // Sauvegarder l'utterance
        this.currentUtterance = utterance;

        // Lancer la lecture
        speechSynthesis.speak(utterance);
    },

    /**
     * Parle en mode ralenti
     * @param {string} text - Texte à prononcer
     */
    speakSlow(text) {
        this.speak(text, { rate: 0.6 });
    },

    /**
     * Parle en mode rapide
     * @param {string} text - Texte à prononcer
     */
    speakFast(text) {
        this.speak(text, { rate: 1.0 });
    },

    /**
     * Arrête la lecture en cours
     */
    stop() {
        if (this.isSpeaking) {
            speechSynthesis.cancel();
            this.isSpeaking = false;
        }
    },

    /**
     * Met en pause la lecture
     */
    pause() {
        if (this.isSpeaking && !speechSynthesis.paused) {
            speechSynthesis.pause();
        }
    },

    /**
     * Reprend la lecture
     */
    resume() {
        if (this.isSpeaking && speechSynthesis.paused) {
            speechSynthesis.resume();
        }
    },

    /**
     * Vérifie si le système est en train de parler
     * @returns {boolean}
     */
    checkIsSpeaking() {
        return this.isSpeaking || speechSynthesis.speaking;
    },

    /**
     * Affiche un message si le navigateur ne supporte pas la synthèse vocale
     */
    showUnsupportedMessage() {
        const message = document.createElement('div');
        message.className = 'audio-unsupported-message';
        message.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: #FFB703;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
        `;
        message.textContent = 'La synthèse vocale n\'est pas supportée par votre navigateur';

        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 5000);
    },

    /**
     * Crée un bouton audio pour un élément
     * @param {string} text - Texte à prononcer
     * @param {HTMLElement} container - Conteneur du bouton
     * @returns {HTMLButtonElement}
     */
    createAudioButton(text, container = null) {
        const button = document.createElement('button');
        button.className = 'audio-btn';
        button.innerHTML = '🔊';
        button.setAttribute('aria-label', 'Écouter la prononciation');
        button.setAttribute('title', 'Cliquez pour écouter');

        button.addEventListener('click', (e) => {
            e.stopPropagation();
            this.speak(text, {
                onStart: () => {
                    button.classList.add('speaking');
                    button.innerHTML = '⏸';
                },
                onEnd: () => {
                    button.classList.remove('speaking');
                    button.innerHTML = '🔊';
                }
            });
        });

        if (container) {
            container.appendChild(button);
        }

        return button;
    },

    /**
     * Ajoute un bouton audio à tous les éléments avec l'attribut data-speak
     */
    addAudioButtonsToPage() {
        const elements = document.querySelectorAll('[data-speak]');
        elements.forEach(element => {
            const text = element.getAttribute('data-speak');
            const button = this.createAudioButton(text);
            element.appendChild(button);
        });
    },

    /**
     * Lit une liste de mots avec une pause entre chaque
     * @param {array} words - Liste de mots à lire
     * @param {number} delay - Délai entre les mots (ms)
     */
    speakSequence(words, delay = 1000) {
        let index = 0;

        const speakNext = () => {
            if (index < words.length) {
                this.speak(words[index], {
                    onEnd: () => {
                        index++;
                        setTimeout(speakNext, delay);
                    }
                });
            }
        };

        speakNext();
    },

    /**
     * Configure les paramètres audio
     * @param {object} newConfig - Nouveaux paramètres
     */
    setConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
    },

    /**
     * Obtient les voix turques disponibles
     * @returns {array}
     */
    getTurkishVoices() {
        const voices = speechSynthesis.getVoices();
        return voices.filter(voice => voice.lang.startsWith('tr'));
    },

    /**
     * Teste le système audio
     */
    test() {
        const testPhrases = [
            'Merhaba',
            'Teşekkür ederim',
            'Nasılsınız?'
        ];

        console.log('Test du système audio...');
        this.speakSequence(testPhrases, 1500);
    }
};

// Initialiser au chargement de la page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        AudioSystem.init();
    });
} else {
    AudioSystem.init();
}

// Exporter pour utilisation globale
window.AudioSystem = AudioSystem;

/**
 * Fonction globale simple pour jouer l'audio turc
 * Utilisée par les modules lessons, dictionary et quiz
 * @param {string} text - Texte à prononcer
 */
window.playTurkishAudio = function(text) {
    if (window.AudioSystem) {
        window.AudioSystem.speak(text);
    } else {
        console.error('AudioSystem not initialized');
    }
};
