/**
 * QUIZ.JS - Quiz System Module
 * Handles multiple quiz types with scoring and feedback
 */

class QuizModule {
    constructor() {
        this.currentQuizType = null;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.totalQuestions = 10;
        this.selectedAnswer = null;

        this.init();
    }

    /**
     * Initialize the quiz module
     */
    init() {
        console.log('🎯 Initializing Quiz Module...');

        // Initialize quiz type selection
        this.initQuizCards();

        // Initialize quiz controls
        this.initQuizControls();

        console.log('✅ Quiz Module initialized');
    }

    /**
     * Initialize quiz type cards
     */
    initQuizCards() {
        const quizCards = document.querySelectorAll('.quiz-card');

        quizCards.forEach(card => {
            const btn = card.querySelector('button');
            if (btn) {
                btn.addEventListener('click', () => {
                    const quizType = card.getAttribute('data-quiz-type');
                    this.startQuiz(quizType);
                });
            }
        });
    }

    /**
     * Initialize quiz controls
     */
    initQuizControls() {
        // Close quiz button
        const closeBtn = document.getElementById('closeQuiz');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.exitQuiz();
            });
        }

        // Next question button
        const nextBtn = document.getElementById('nextQuestion');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.nextQuestion();
            });
        }

        // Retry quiz button
        const retryBtn = document.getElementById('retryQuiz');
        if (retryBtn) {
            retryBtn.addEventListener('click', () => {
                this.startQuiz(this.currentQuizType);
            });
        }

        // Back to menu button
        const backBtn = document.getElementById('backToMenu');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                this.showQuizMenu();
            });
        }
    }

    /**
     * Start a quiz of the specified type
     * @param {string} quizType - The type of quiz (vocabulary, grammar, listening, translation)
     */
    startQuiz(quizType) {
        this.currentQuizType = quizType;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedAnswer = null;

        // Generate questions based on quiz type
        this.questions = this.generateQuestions(quizType);

        // Hide menu, show quiz container
        this.showQuizContainer();

        // Display first question
        this.displayQuestion();

        console.log(`🎯 Started ${quizType} quiz with ${this.questions.length} questions`);
    }

    /**
     * Generate questions based on quiz type
     * @param {string} quizType - The quiz type
     * @returns {array} Array of question objects
     */
    generateQuestions(quizType) {
        const questions = [];

        switch (quizType) {
            case 'vocabulary':
                return this.generateVocabularyQuestions();
            case 'grammar':
                return this.generateGrammarQuestions();
            case 'listening':
                return this.generateListeningQuestions();
            case 'translation':
                return this.generateTranslationQuestions();
            default:
                return [];
        }
    }

    /**
     * Generate vocabulary quiz questions
     * @returns {array} Vocabulary questions
     */
    generateVocabularyQuestions() {
        const questions = [];
        const vocab = window.vocabularyData || [];

        if (vocab.length === 0) return questions;

        // Get random words
        const shuffled = this.shuffleArray([...vocab]);
        const selectedWords = shuffled.slice(0, this.totalQuestions);

        selectedWords.forEach(word => {
            // Get 3 random wrong answers
            const wrongAnswers = this.shuffleArray(
                vocab.filter(w => w.turkish !== word.turkish)
            ).slice(0, 3).map(w => w.translation);

            const options = this.shuffleArray([
                word.translation,
                ...wrongAnswers
            ]);

            questions.push({
                question: `Que signifie "${word.turkish}" ?`,
                options: options,
                correct: options.indexOf(word.translation),
                explanation: `"${word.turkish}" se prononce [${word.phonetic}] et signifie "${word.translation}"`
            });
        });

        return questions;
    }

    /**
     * Generate grammar quiz questions
     * @returns {array} Grammar questions
     */
    generateGrammarQuestions() {
        const questions = [
            {
                question: "Combien de lettres compte l'alphabet turc ?",
                options: ["26", "28", "29", "30"],
                correct: 2,
                explanation: "L'alphabet turc compte 29 lettres."
            },
            {
                question: "Comment se prononce la lettre 'Ç' ?",
                options: ["k", "s", "tch", "ch"],
                correct: 2,
                explanation: "La lettre Ç se prononce 'tch' comme dans 'tchao'."
            },
            {
                question: "Quel est le pronom personnel pour 'nous' ?",
                options: ["Ben", "Biz", "Siz", "Onlar"],
                correct: 1,
                explanation: "Biz signifie 'nous' en turc."
            },
            {
                question: "Comment dit-on 'ma maison' en turc ?",
                options: ["evim", "evin", "evi", "evimiz"],
                correct: 0,
                explanation: "Evim = ma maison (ev + suffixe possessif -im)"
            },
            {
                question: "Quelle lettre n'existe PAS en turc ?",
                options: ["Ğ", "W", "Ş", "İ"],
                correct: 1,
                explanation: "Les lettres Q, W et X n'existent pas en turc."
            },
            {
                question: "Le verbe 'être' à la 3ème personne du singulier au présent :",
                options: ["im", "sin", "(rien)", "iz"],
                correct: 2,
                explanation: "À la 3ème personne, le verbe être ne prend pas de suffixe."
            },
            {
                question: "Quel suffixe indique le locatif (dans, à, sur) ?",
                options: ["-i", "-e", "-de/-da", "-den/-dan"],
                correct: 2,
                explanation: "Le suffixe -de/-da indique la localisation."
            },
            {
                question: "Comment se dit 'il' ou 'elle' en turc ?",
                options: ["Ben", "Sen", "O", "Biz"],
                correct: 2,
                explanation: "O désigne 'il' et 'elle' sans distinction de genre."
            },
            {
                question: "Quelle est la terminaison de l'infinitif en turc ?",
                options: ["-er", "-ir", "-mek/-mak", "-yor"],
                correct: 2,
                explanation: "Tous les verbes turcs à l'infinitif se terminent par -mek ou -mak."
            },
            {
                question: "Combien de cas grammaticaux y a-t-il en turc ?",
                options: ["4", "5", "6", "7"],
                correct: 2,
                explanation: "Le turc a 6 cas grammaticaux."
            }
        ];

        return this.shuffleArray(questions).slice(0, this.totalQuestions);
    }

    /**
     * Generate listening quiz questions
     * @returns {array} Listening questions
     */
    generateListeningQuestions() {
        const questions = [];
        const vocab = window.vocabularyData || [];

        if (vocab.length === 0) return questions;

        const shuffled = this.shuffleArray([...vocab]);
        const selectedWords = shuffled.slice(0, this.totalQuestions);

        selectedWords.forEach(word => {
            const wrongAnswers = this.shuffleArray(
                vocab.filter(w => w.turkish !== word.turkish)
            ).slice(0, 3).map(w => w.turkish);

            const options = this.shuffleArray([
                word.turkish,
                ...wrongAnswers
            ]);

            questions.push({
                question: `Écoutez et choisissez le mot correct`,
                audioText: word.turkish,
                subtitle: `[${word.phonetic}] = ${word.translation}`,
                options: options,
                correct: options.indexOf(word.turkish),
                explanation: `Le mot était "${word.turkish}" [${word.phonetic}] qui signifie "${word.translation}"`
            });
        });

        return questions;
    }

    /**
     * Generate translation quiz questions
     * @returns {array} Translation questions
     */
    generateTranslationQuestions() {
        const questions = [];
        const vocab = window.vocabularyData || [];

        if (vocab.length === 0) return questions;

        const shuffled = this.shuffleArray([...vocab]);
        const selectedWords = shuffled.slice(0, this.totalQuestions);

        selectedWords.forEach((word, index) => {
            // Alternate between French->Turkish and Turkish->French
            if (index % 2 === 0) {
                // French to Turkish
                const wrongAnswers = this.shuffleArray(
                    vocab.filter(w => w.turkish !== word.turkish)
                ).slice(0, 3).map(w => w.turkish);

                const options = this.shuffleArray([
                    word.turkish,
                    ...wrongAnswers
                ]);

                questions.push({
                    question: `Comment dit-on "${word.translation}" en turc ?`,
                    options: options,
                    correct: options.indexOf(word.turkish),
                    explanation: `"${word.translation}" se dit "${word.turkish}" [${word.phonetic}]`
                });
            } else {
                // Turkish to French
                const wrongAnswers = this.shuffleArray(
                    vocab.filter(w => w.translation !== word.translation)
                ).slice(0, 3).map(w => w.translation);

                const options = this.shuffleArray([
                    word.translation,
                    ...wrongAnswers
                ]);

                questions.push({
                    question: `Traduisez "${word.turkish}" en français`,
                    options: options,
                    correct: options.indexOf(word.translation),
                    explanation: `"${word.turkish}" [${word.phonetic}] signifie "${word.translation}"`
                });
            }
        });

        return questions;
    }

    /**
     * Display the current question
     */
    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];

        // Update question counter
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('totalQuestions').textContent = this.questions.length;

        // Update score
        document.getElementById('quizScore').textContent = this.score;

        // Display question text
        const questionText = document.getElementById('questionText');
        questionText.textContent = question.question;

        // Add audio button for listening quiz
        if (question.audioText) {
            const audioBtn = document.createElement('button');
            audioBtn.className = 'btn btn-audio-large';
            audioBtn.innerHTML = '🔊 Écouter';
            audioBtn.onclick = () => {
                if (window.playTurkishAudio) {
                    window.playTurkishAudio(question.audioText);
                }
            };
            questionText.appendChild(audioBtn);

            if (question.subtitle) {
                const subtitle = document.createElement('p');
                subtitle.className = 'question-subtitle';
                subtitle.textContent = question.subtitle;
                questionText.appendChild(subtitle);
            }
        }

        // Display options
        const optionsContainer = document.getElementById('quizOptions');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'quiz-option';
            optionBtn.textContent = option;
            optionBtn.onclick = () => this.selectAnswer(index);
            optionsContainer.appendChild(optionBtn);
        });

        // Hide feedback and next button
        document.getElementById('quizFeedback').classList.add('hidden');
        document.getElementById('nextQuestion').classList.add('hidden');

        this.selectedAnswer = null;
    }

    /**
     * Handle answer selection
     * @param {number} answerIndex - Index of selected answer
     */
    selectAnswer(answerIndex) {
        if (this.selectedAnswer !== null) return; // Already answered

        this.selectedAnswer = answerIndex;
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = answerIndex === question.correct;

        // Update score
        if (isCorrect) {
            this.score++;
            document.getElementById('quizScore').textContent = this.score;
        }

        // Show feedback
        const feedbackDiv = document.getElementById('quizFeedback');
        const feedbackText = document.getElementById('feedbackText');

        if (isCorrect) {
            feedbackDiv.className = 'quiz-feedback success';
            feedbackText.innerHTML = `✓ Correct ! ${question.explanation || ''}`;
        } else {
            feedbackDiv.className = 'quiz-feedback error';
            feedbackText.innerHTML = `✗ Incorrect. ${question.explanation || ''}`;
        }

        feedbackDiv.classList.remove('hidden');

        // Highlight correct and wrong answers
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((opt, idx) => {
            if (idx === question.correct) {
                opt.classList.add('correct');
            } else if (idx === answerIndex) {
                opt.classList.add('wrong');
            }
            opt.disabled = true;
        });

        // Show next button
        document.getElementById('nextQuestion').classList.remove('hidden');
    }

    /**
     * Move to next question or show results
     */
    nextQuestion() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }

    /**
     * Show quiz results
     */
    showResults() {
        // Hide quiz container
        document.getElementById('quizContainer').classList.add('hidden');

        // Show results
        const resultsDiv = document.getElementById('quizResults');
        resultsDiv.classList.remove('hidden');

        // Update scores
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('finalTotal').textContent = this.questions.length;

        // Calculate percentage
        const percentage = Math.round((this.score / this.questions.length) * 100);

        // Show message based on performance
        const messageEl = document.getElementById('resultsMessage');
        if (percentage >= 90) {
            messageEl.textContent = '🎉 Excellent ! Vous maîtrisez parfaitement le sujet !';
        } else if (percentage >= 70) {
            messageEl.textContent = '👍 Très bien ! Continuez comme ça !';
        } else if (percentage >= 50) {
            messageEl.textContent = '👌 Pas mal ! Un peu de révision et ce sera parfait !';
        } else {
            messageEl.textContent = '📚 Continuez à étudier, vous allez progresser !';
        }

        // Save score to localStorage
        if (window.app) {
            window.app.saveQuizScore(this.currentQuizType, this.score, this.questions.length);
        }

        console.log(`✅ Quiz completed: ${this.score}/${this.questions.length} (${percentage}%)`);
    }

    /**
     * Show quiz container and hide others
     */
    showQuizContainer() {
        document.getElementById('quizMenu').classList.add('hidden');
        document.getElementById('quizContainer').classList.remove('hidden');
        document.getElementById('quizResults').classList.add('hidden');
    }

    /**
     * Show quiz menu and hide others
     */
    showQuizMenu() {
        document.getElementById('quizMenu').classList.remove('hidden');
        document.getElementById('quizContainer').classList.add('hidden');
        document.getElementById('quizResults').classList.add('hidden');
    }

    /**
     * Exit quiz and return to menu
     */
    exitQuiz() {
        if (this.selectedAnswer === null && this.currentQuestionIndex > 0) {
            if (!confirm('Êtes-vous sûr de vouloir quitter le quiz ?')) {
                return;
            }
        }

        this.showQuizMenu();
        this.currentQuizType = null;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    /**
     * Shuffle array (Fisher-Yates algorithm)
     * @param {array} array - Array to shuffle
     * @returns {array} Shuffled array
     */
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

// Export for use in app.js
window.QuizModule = QuizModule;
