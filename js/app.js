/**
 * APP.JS - Main Application Logic
 * Handles navigation, mobile menu, localStorage, and app initialization
 */

class TurkishLearningApp {
    constructor() {
        this.currentSection = 'home';
        this.mobileMenuOpen = false;

        // Initialize localStorage keys
        this.storageKeys = {
            completedLessons: 'turkish_completed_lessons',
            quizScores: 'turkish_quiz_scores',
            wordsLearned: 'turkish_words_learned',
            lastVisit: 'turkish_last_visit'
        };

        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        console.log('🚀 Initializing Turkish Learning App...');

        // Wait for data to be loaded before initializing modules
        window.addEventListener('dataLoaded', () => {
            this.initializeModules();
        });

        // Initialize navigation
        this.initNavigation();

        // Initialize mobile menu
        this.initMobileMenu();

        // Load user progress
        this.updateLastVisit();

        console.log('✅ App initialized');
    }

    /**
     * Initialize all modules once data is loaded
     */
    initializeModules() {
        // Initialize Lessons module
        if (window.LessonsModule) {
            window.lessonsModule = new LessonsModule();
        }

        // Initialize Dictionary module
        if (window.DictionaryModule) {
            window.dictionaryModule = new DictionaryModule();
        }

        // Initialize Grammar module
        if (window.GrammarModule) {
            window.grammarModule = new GrammarModule();
        }

        // Initialize Quiz module
        if (window.QuizModule) {
            window.quizModule = new QuizModule();
        }

        // Update progress display
        this.updateProgressDisplay();
    }

    /**
     * Initialize navigation between sections
     */
    initNavigation() {
        // Handle nav link clicks
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('data-section');
                this.navigateToSection(sectionId);
            });
        });

        // Handle CTA button clicks
        const ctaButtons = document.querySelectorAll('[data-section]');
        ctaButtons.forEach(button => {
            if (!button.classList.contains('nav-link')) {
                button.addEventListener('click', (e) => {
                    const sectionId = button.getAttribute('data-section');
                    this.navigateToSection(sectionId);
                });
            }
        });

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.section) {
                this.navigateToSection(e.state.section, false);
            }
        });

        // Set initial state
        const hash = window.location.hash.slice(1) || 'home';
        this.navigateToSection(hash, true);
    }

    /**
     * Navigate to a specific section
     * @param {string} sectionId - The section ID to navigate to
     * @param {boolean} pushState - Whether to push to browser history
     */
    navigateToSection(sectionId, pushState = true) {
        if (this.currentSection === sectionId) return;

        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionId;

            // Update nav links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                if (link.getAttribute('data-section') === sectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // Update URL and history
            if (pushState) {
                history.pushState({ section: sectionId }, '', `#${sectionId}`);
            }

            // Close mobile menu if open
            if (this.mobileMenuOpen) {
                this.toggleMobileMenu();
            }

            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });

            console.log(`📍 Navigated to: ${sectionId}`);
        }
    }

    /**
     * Initialize mobile menu toggle
     */
    initMobileMenu() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }
    }

    /**
     * Toggle mobile menu open/closed
     */
    toggleMobileMenu() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');

        this.mobileMenuOpen = !this.mobileMenuOpen;

        if (this.mobileMenuOpen) {
            navMenu.classList.add('active');
            navToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    /**
     * Get data from localStorage
     * @param {string} key - The storage key
     * @returns {any} The stored data or null
     */
    getStorageData(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return null;
        }
    }

    /**
     * Save data to localStorage
     * @param {string} key - The storage key
     * @param {any} value - The data to store
     */
    setStorageData(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error writing to localStorage:', error);
        }
    }

    /**
     * Get completed lessons from localStorage
     * @returns {array} Array of completed lesson IDs
     */
    getCompletedLessons() {
        return this.getStorageData(this.storageKeys.completedLessons) || [];
    }

    /**
     * Mark a lesson as completed
     * @param {number} lessonId - The lesson ID
     */
    markLessonCompleted(lessonId) {
        const completed = this.getCompletedLessons();
        if (!completed.includes(lessonId)) {
            completed.push(lessonId);
            this.setStorageData(this.storageKeys.completedLessons, completed);
            this.updateProgressDisplay();
            console.log(`✅ Lesson ${lessonId} marked as completed`);
        }
    }

    /**
     * Check if a lesson is completed
     * @param {number} lessonId - The lesson ID
     * @returns {boolean} True if completed
     */
    isLessonCompleted(lessonId) {
        return this.getCompletedLessons().includes(lessonId);
    }

    /**
     * Save quiz score
     * @param {string} quizType - Type of quiz
     * @param {number} score - Score achieved
     * @param {number} total - Total possible score
     */
    saveQuizScore(quizType, score, total) {
        const scores = this.getStorageData(this.storageKeys.quizScores) || [];
        scores.push({
            type: quizType,
            score: score,
            total: total,
            percentage: Math.round((score / total) * 100),
            date: new Date().toISOString()
        });
        this.setStorageData(this.storageKeys.quizScores, scores);
        this.updateProgressDisplay();
    }

    /**
     * Get all quiz scores
     * @returns {array} Array of quiz score objects
     */
    getQuizScores() {
        return this.getStorageData(this.storageKeys.quizScores) || [];
    }

    /**
     * Update last visit timestamp
     */
    updateLastVisit() {
        this.setStorageData(this.storageKeys.lastVisit, new Date().toISOString());
    }

    /**
     * Update progress display in the progress section
     */
    updateProgressDisplay() {
        // Update days completed
        const completedLessons = this.getCompletedLessons();
        const daysCompletedEl = document.getElementById('daysCompleted');
        if (daysCompletedEl) {
            daysCompletedEl.textContent = completedLessons.length;
            this.updateProgressCircle(daysCompletedEl.closest('.progress-card'), completedLessons.length, 30);
        }

        // Update words learned (estimate based on completed lessons)
        const wordsLearnedEl = document.getElementById('wordsLearned');
        if (wordsLearnedEl && window.lessonsData) {
            let totalWords = 0;
            completedLessons.forEach(lessonId => {
                const lesson = window.getLessonById(lessonId);
                if (lesson && lesson.vocabulary) {
                    totalWords += lesson.vocabulary.length;
                }
            });
            wordsLearnedEl.textContent = totalWords;
            this.updateProgressCircle(wordsLearnedEl.closest('.progress-card'), totalWords, 1000);
        }

        // Update average quiz score
        const quizScores = this.getQuizScores();
        const averageScoreEl = document.getElementById('averageScore');
        if (averageScoreEl) {
            if (quizScores.length > 0) {
                const avgScore = Math.round(
                    quizScores.reduce((sum, s) => sum + s.percentage, 0) / quizScores.length
                );
                averageScoreEl.textContent = avgScore;
                this.updateProgressCircle(averageScoreEl.closest('.progress-card'), avgScore, 100);
            } else {
                averageScoreEl.textContent = '0';
            }
        }
    }

    /**
     * Update circular progress indicator
     * @param {HTMLElement} card - The progress card element
     * @param {number} value - Current value
     * @param {number} max - Maximum value
     */
    updateProgressCircle(card, value, max) {
        if (!card) return;

        const percentage = Math.min((value / max) * 100, 100);
        const circle = card.querySelector('.progress-ring-circle');

        if (circle) {
            const radius = 54;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percentage / 100) * circumference;

            circle.style.strokeDasharray = `${circumference} ${circumference}`;
            circle.style.strokeDashoffset = offset;
        }
    }

    /**
     * Reset all progress (for testing purposes)
     */
    resetProgress() {
        if (confirm('Êtes-vous sûr de vouloir réinitialiser toute votre progression ?')) {
            localStorage.removeItem(this.storageKeys.completedLessons);
            localStorage.removeItem(this.storageKeys.quizScores);
            localStorage.removeItem(this.storageKeys.wordsLearned);
            this.updateProgressDisplay();
            console.log('🔄 Progress reset');
            window.location.reload();
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new TurkishLearningApp();
});
