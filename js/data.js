/**
 * DATA.JS - Main Data Loader
 * Loads all 30 lessons and vocabulary files dynamically
 * Provides centralized access to all course content
 */

// Global data structures
window.lessonsData = [];
window.vocabularyData = [];

/**
 * Load all lessons from pre-loaded scripts
 * Lesson files are now loaded via script tags in index.html
 */
function loadLessons() {
    // Get lesson data from global variables (day1, day2, etc.)
    for (let i = 1; i <= 30; i++) {
        const lessonData = window[`day${i}`];
        if (lessonData) {
            window.lessonsData.push(lessonData);
        } else {
            console.warn(`Lesson day${i} not found`);
        }
    }

    // Sort lessons by ID to ensure correct order
    window.lessonsData.sort((a, b) => a.id - b.id);
    console.log(`✅ Loaded ${window.lessonsData.length} lessons`);

    return Promise.resolve();
}

/**
 * Load all vocabulary from pre-loaded scripts
 * Vocabulary files are now loaded via script tags in index.html
 */
function loadVocabulary() {
    const vocabFiles = [
        'nounsCommon',      // nouns-common.js
        'nounsFood',        // nouns-food.js
        'verbs',            // verbs.js
        'adjectives',       // adjectives.js
        'expressions',      // expressions.js
        'familyPeople',     // family-people.js
        'places',           // places.js
        'natureAnimals',    // nature-animals.js
        'timeNumbers',      // time-numbers.js
        'technologyMisc'    // technology-misc.js
    ];

    vocabFiles.forEach(varName => {
        const vocabData = window[varName];
        if (vocabData && Array.isArray(vocabData)) {
            window.vocabularyData = window.vocabularyData.concat(vocabData);
        } else {
            console.warn(`Vocabulary ${varName} not found`);
        }
    });

    console.log(`✅ Loaded ${window.vocabularyData.length} vocabulary words`);

    return Promise.resolve();
}

/**
 * Initialize all data loading
 * Returns a promise that resolves when all data is loaded
 */
window.initializeData = function() {
    console.log('🔄 Loading course data...');

    return Promise.all([
        loadLessons(),
        loadVocabulary()
    ]).then(() => {
        console.log('✅ All data loaded successfully');

        // Dispatch custom event to notify that data is ready
        window.dispatchEvent(new CustomEvent('dataLoaded', {
            detail: {
                lessons: window.lessonsData,
                vocabulary: window.vocabularyData
            }
        }));
    }).catch(error => {
        console.error('❌ Error loading data:', error);
    });
};

/**
 * Helper function to get a lesson by ID
 * @param {number} id - The lesson ID (1-30)
 * @returns {object|null} The lesson object or null if not found
 */
window.getLessonById = function(id) {
    return window.lessonsData.find(lesson => lesson.id === id) || null;
};

/**
 * Helper function to get lessons by week
 * @param {number} week - The week number (1-4)
 * @returns {array} Array of lessons for that week
 */
window.getLessonsByWeek = function(week) {
    return window.lessonsData.filter(lesson => lesson.week === week);
};

/**
 * Helper function to filter vocabulary by category
 * @param {string} category - The category to filter by
 * @returns {array} Filtered vocabulary array
 */
window.getVocabularyByCategory = function(category) {
    if (category === 'all') {
        return window.vocabularyData;
    }
    return window.vocabularyData.filter(word => word.category === category);
};

/**
 * Helper function to search vocabulary
 * @param {string} query - Search query
 * @returns {array} Matching vocabulary items
 */
window.searchVocabulary = function(query) {
    if (!query) return window.vocabularyData;

    const lowerQuery = query.toLowerCase();
    return window.vocabularyData.filter(word =>
        word.turkish.toLowerCase().includes(lowerQuery) ||
        word.translation.toLowerCase().includes(lowerQuery) ||
        word.phonetic.toLowerCase().includes(lowerQuery)
    );
};

// Auto-initialize data when this script loads
// Other scripts can listen for the 'dataLoaded' event
window.initializeData();
