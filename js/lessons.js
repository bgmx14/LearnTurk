/**
 * LESSONS.JS - Lesson Management Module
 * Handles lesson display, navigation, and progress tracking
 */

class LessonsModule {
    constructor() {
        this.currentWeek = 1;
        this.currentLessonId = null;

        this.init();
    }

    /**
     * Initialize the lessons module
     */
    init() {
        console.log('📚 Initializing Lessons Module...');

        // Initialize week tabs
        this.initWeekTabs();

        // Display lessons for week 1
        this.displayLessons(1);

        // Initialize lesson modal
        this.initModal();

        console.log('✅ Lessons Module initialized');
    }

    /**
     * Initialize week tabs
     */
    initWeekTabs() {
        const tabButtons = document.querySelectorAll('.section-lessons .tab-btn');

        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const week = parseInt(btn.getAttribute('data-week'));

                // Update active tab
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Display lessons for selected week
                this.displayLessons(week);
            });
        });
    }

    /**
     * Display lessons for a specific week
     * @param {number} week - The week number (1-4)
     */
    displayLessons(week) {
        this.currentWeek = week;
        const lessonsGrid = document.getElementById('lessonsGrid');

        if (!lessonsGrid) return;

        // Get lessons for this week
        const lessons = window.getLessonsByWeek(week);

        // Clear grid
        lessonsGrid.innerHTML = '';

        // Create lesson cards
        lessons.forEach(lesson => {
            const card = this.createLessonCard(lesson);
            lessonsGrid.appendChild(card);
        });
    }

    /**
     * Create a lesson card element
     * @param {object} lesson - The lesson data
     * @returns {HTMLElement} The lesson card element
     */
    createLessonCard(lesson) {
        const card = document.createElement('div');
        card.className = 'lesson-card';

        const isCompleted = window.app && window.app.isLessonCompleted(lesson.id);

        if (isCompleted) {
            card.classList.add('completed');
        }

        card.innerHTML = `
            <div class="lesson-card-header">
                <span class="lesson-number">Jour ${lesson.id}</span>
                ${isCompleted ? '<span class="lesson-badge">✓ Complété</span>' : ''}
            </div>
            <h3 class="lesson-title">${lesson.title}</h3>
            <p class="lesson-description">${lesson.description}</p>
            <div class="lesson-card-footer">
                <button class="btn btn-small btn-primary" data-lesson-id="${lesson.id}">
                    Commencer
                </button>
            </div>
        `;

        // Add click handler to open lesson
        const btn = card.querySelector('button');
        btn.addEventListener('click', () => {
            this.openLesson(lesson.id);
        });

        return card;
    }

    /**
     * Open a lesson in the modal
     * @param {number} lessonId - The lesson ID
     */
    openLesson(lessonId) {
        const lesson = window.getLessonById(lessonId);
        if (!lesson) return;

        this.currentLessonId = lessonId;

        // Update modal title
        const modalTitle = document.getElementById('lessonModalTitle');
        if (modalTitle) {
            modalTitle.textContent = `Jour ${lesson.id}: ${lesson.title}`;
        }

        // Build modal content
        const modalBody = document.getElementById('lessonModalBody');
        if (modalBody) {
            modalBody.innerHTML = this.buildLessonContent(lesson);
        }

        // Update navigation buttons
        this.updateModalButtons(lessonId);

        // Show modal
        const modal = document.getElementById('lessonModal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        console.log(`📖 Opened lesson ${lessonId}`);
    }

    /**
     * Build lesson content HTML
     * @param {object} lesson - The lesson data
     * @returns {string} HTML content
     */
    buildLessonContent(lesson) {
        let html = '';

        // Vocabulary section
        if (lesson.vocabulary && lesson.vocabulary.length > 0) {
            html += `
                <div class="lesson-section">
                    <h3 class="lesson-section-title">📝 Vocabulaire</h3>
                    <div class="vocabulary-list">
                        ${lesson.vocabulary.map(word => `
                            <div class="vocabulary-item">
                                <div class="vocab-turkish">${word.turkish}</div>
                                <div class="vocab-phonetic">[${word.phonetic}]</div>
                                <div class="vocab-translation">${word.translation}</div>
                                ${word.turkish ? `<button class="btn-audio" data-text="${word.turkish}" title="Écouter">🔊</button>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Dialogue section
        if (lesson.dialogue && lesson.dialogue.length > 0) {
            html += `
                <div class="lesson-section">
                    <h3 class="lesson-section-title">💬 Dialogue</h3>
                    <div class="dialogue-list">
                        ${lesson.dialogue.map(line => `
                            <div class="dialogue-item">
                                <div class="dialogue-speaker">${line.speaker}:</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-turkish">${line.turkish}</div>
                                    <div class="dialogue-phonetic">[${line.phonetic}]</div>
                                    <div class="dialogue-french">${line.french}</div>
                                </div>
                                <button class="btn-audio" data-text="${line.turkish}" title="Écouter">🔊</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Grammar section
        if (lesson.grammar) {
            html += `
                <div class="lesson-section">
                    <h3 class="lesson-section-title">📖 ${lesson.grammar.title}</h3>
                    <div class="grammar-content">
                        ${lesson.grammar.content}
                    </div>
                </div>
            `;
        }

        // Culture section
        if (lesson.culture) {
            html += `
                <div class="lesson-section">
                    <h3 class="lesson-section-title">🌍 ${lesson.culture.title}</h3>
                    <div class="culture-content">
                        <p>${lesson.culture.content}</p>
                    </div>
                </div>
            `;
        }

        // Exercises section
        if (lesson.exercises && lesson.exercises.length > 0) {
            html += `
                <div class="lesson-section">
                    <h3 class="lesson-section-title">✏️ Exercices</h3>
                    <div class="exercises-list">
                        ${lesson.exercises.map((exercise, index) => `
                            <div class="exercise-item" data-exercise-index="${index}">
                                <div class="exercise-question">
                                    <strong>Question ${index + 1}:</strong> ${exercise.question}
                                </div>
                                <div class="exercise-options">
                                    ${exercise.options.map((option, optIndex) => `
                                        <label class="exercise-option">
                                            <input type="radio" name="exercise-${index}" value="${optIndex}">
                                            <span>${option}</span>
                                        </label>
                                    `).join('')}
                                </div>
                                <button class="btn btn-small btn-secondary check-answer-btn" data-exercise-index="${index}" data-correct="${exercise.correct}">
                                    Vérifier
                                </button>
                                <div class="exercise-feedback hidden"></div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Add event listeners for audio buttons after rendering
        setTimeout(() => {
            this.initAudioButtons();
            this.initExerciseButtons(lesson);
        }, 0);

        return html;
    }

    /**
     * Initialize audio buttons in lesson content
     */
    initAudioButtons() {
        const audioButtons = document.querySelectorAll('#lessonModalBody .btn-audio');

        audioButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const text = btn.getAttribute('data-text');
                if (window.playTurkishAudio) {
                    window.playTurkishAudio(text);
                }
            });
        });
    }

    /**
     * Initialize exercise check buttons
     * @param {object} lesson - The lesson data
     */
    initExerciseButtons(lesson) {
        const checkButtons = document.querySelectorAll('.check-answer-btn');

        checkButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const exerciseIndex = parseInt(btn.getAttribute('data-exercise-index'));
                const correctAnswer = parseInt(btn.getAttribute('data-correct'));
                const exercise = lesson.exercises[exerciseIndex];

                // Get selected answer
                const selectedInput = document.querySelector(`input[name="exercise-${exerciseIndex}"]:checked`);

                if (!selectedInput) {
                    alert('Veuillez sélectionner une réponse');
                    return;
                }

                const selectedAnswer = parseInt(selectedInput.value);
                const feedbackDiv = btn.nextElementSibling;

                if (selectedAnswer === correctAnswer) {
                    feedbackDiv.className = 'exercise-feedback success';
                    feedbackDiv.innerHTML = `✓ Correct! ${exercise.explanation || ''}`;
                } else {
                    feedbackDiv.className = 'exercise-feedback error';
                    feedbackDiv.innerHTML = `✗ Incorrect. La bonne réponse est: ${exercise.options[correctAnswer]}. ${exercise.explanation || ''}`;
                }

                feedbackDiv.classList.remove('hidden');
                btn.disabled = true;
            });
        });
    }

    /**
     * Update modal navigation buttons
     * @param {number} lessonId - The current lesson ID
     */
    updateModalButtons(lessonId) {
        const prevBtn = document.getElementById('prevLesson');
        const nextBtn = document.getElementById('nextLesson');
        const markCompleteBtn = document.getElementById('markComplete');

        // Previous button
        if (prevBtn) {
            if (lessonId > 1) {
                prevBtn.disabled = false;
                prevBtn.onclick = () => this.openLesson(lessonId - 1);
            } else {
                prevBtn.disabled = true;
            }
        }

        // Next button
        if (nextBtn) {
            if (lessonId < 30) {
                nextBtn.disabled = false;
                nextBtn.onclick = () => this.openLesson(lessonId + 1);
            } else {
                nextBtn.disabled = true;
            }
        }

        // Mark complete button
        if (markCompleteBtn) {
            const isCompleted = window.app && window.app.isLessonCompleted(lessonId);

            if (isCompleted) {
                markCompleteBtn.textContent = '✓ Complété';
                markCompleteBtn.classList.remove('btn-success');
                markCompleteBtn.classList.add('btn-secondary');
                markCompleteBtn.disabled = true;
            } else {
                markCompleteBtn.textContent = 'Marquer comme Complété';
                markCompleteBtn.classList.add('btn-success');
                markCompleteBtn.classList.remove('btn-secondary');
                markCompleteBtn.disabled = false;
                markCompleteBtn.onclick = () => this.markLessonComplete(lessonId);
            }
        }
    }

    /**
     * Mark a lesson as complete
     * @param {number} lessonId - The lesson ID
     */
    markLessonComplete(lessonId) {
        if (window.app) {
            window.app.markLessonCompleted(lessonId);

            // Update button state
            this.updateModalButtons(lessonId);

            // Refresh lessons grid
            this.displayLessons(this.currentWeek);

            // Show success message
            const markCompleteBtn = document.getElementById('markComplete');
            if (markCompleteBtn) {
                markCompleteBtn.textContent = '✓ Complété!';
            }
        }
    }

    /**
     * Initialize modal controls
     */
    initModal() {
        const modal = document.getElementById('lessonModal');
        const closeBtn = document.getElementById('closeLessonModal');

        // Close button
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeModal();
            });
        }

        // Click outside to close
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        }

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    /**
     * Close the lesson modal
     */
    closeModal() {
        const modal = document.getElementById('lessonModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            this.currentLessonId = null;
        }
    }
}

// Export for use in app.js
window.LessonsModule = LessonsModule;
