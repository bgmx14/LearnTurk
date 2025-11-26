/**
 * DATA.JS - Main Data Loader
 * Loads all 30 lessons and vocabulary files dynamically
 * Provides centralized access to all course content
 */

// Global data structures
window.lessonsData = [];
window.vocabularyData = [];

/**
 * Dynamically load all lesson files (day1.js to day30.js)
 * Each file defines a global variable (day1, day2, etc.)
 */
function loadLessons() {
    const lessonPromises = [];

    for (let i = 1; i <= 30; i++) {
        const promise = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `js/lessons/day${i}.js`;
            script.onload = () => {
                // Get the lesson data from the global variable
                const lessonData = window[`day${i}`];
                if (lessonData) {
                    window.lessonsData.push(lessonData);
                }
                resolve();
            };
            script.onerror = () => {
                console.error(`Failed to load lesson day${i}.js`);
                resolve(); // Continue even if one lesson fails
            };
            document.head.appendChild(script);
        });
        lessonPromises.push(promise);
    }

    return Promise.all(lessonPromises).then(() => {
        // Sort lessons by ID to ensure correct order
        window.lessonsData.sort((a, b) => a.id - b.id);
        console.log(`✅ Loaded ${window.lessonsData.length} lessons`);
    });
}

/**
 * Dynamically load all vocabulary files
 * Files: nouns-common.js, nouns-food.js, verbs.js, adjectives.js,
 *        expressions.js, family-people.js, places.js, nature-animals.js,
 *        time-numbers.js, technology-misc.js
 */
function loadVocabulary() {
    const vocabFiles = [
        'nouns-common',
        'nouns-food',
        'verbs',
        'adjectives',
        'expressions',
        'family-people',
        'places',
        'nature-animals',
        'time-numbers',
        'technology-misc'
    ];

    const vocabPromises = vocabFiles.map(fileName => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `js/vocabulary/${fileName}.js`;
            script.onload = () => {
                // Get the vocabulary data from the global variable
                // Convert kebab-case to camelCase (e.g., nouns-common -> nounsCommon)
                const varName = fileName.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                const vocabData = window[varName];

                if (vocabData && Array.isArray(vocabData)) {
                    window.vocabularyData = window.vocabularyData.concat(vocabData);
                }
                resolve();
            };
            script.onerror = () => {
                console.error(`Failed to load vocabulary ${fileName}.js`);
                resolve(); // Continue even if one file fails
            };
            document.head.appendChild(script);
        });
    });

    return Promise.all(vocabPromises).then(() => {
        console.log(`✅ Loaded ${window.vocabularyData.length} vocabulary words`);
    });
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
