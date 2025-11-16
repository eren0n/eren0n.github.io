// Language switching functionality for index page
let currentLanguage = localStorage.getItem('preferredLanguage') || 'tr';

// Translation dictionary for index page
const translations = {
    // Hero section
    'main-title': {
        tr: 'Mikroişlemci Tabanlı Sistem Tasarımı',
        en: 'Microprocessor-Based System Design'
    },
    'main-subtitle': {
        tr: 'ARM Cortex-M3 ve Arduino ile Gömülü Sistemler',
        en: 'Embedded Systems with ARM Cortex-M3 and Arduino'
    },
    // Topic titles
    'topic1-title': {
        tr: 'Konu 1: Gömülü Sistemler ve ARM Cortex-M3',
        en: 'Topic 1: Embedded Systems and ARM Cortex-M3'
    },
    'topic2-title': {
        tr: 'Konu 2: Komut Seti Mimarisi ve Adresleme Modları',
        en: 'Topic 2: Instruction Set Architecture and Addressing Modes'
    },
    'topic3-title': {
        tr: 'Konu 3: Arduino Platformu ve Dijital/Analog G/Ç',
        en: 'Topic 3: Arduino Platform and Digital/Analog I/O'
    },
    'topic4-title': {
        tr: 'Konu 4: Arduino Derleme Süreci ve Seri İletişim',
        en: 'Topic 4: Arduino Compilation Process and Serial Communication'
    },
    'topic5-title': {
        tr: 'Konu 5: Program Akışı, Sensörler ve Kesme Mekanizması',
        en: 'Topic 5: Program Flow, Sensors and Interrupt Mechanism'
    },
    // Quiz buttons
    'topic1-quiz': {
        tr: 'Testi Başlat',
        en: 'Start Quiz'
    },
    'topic2-quiz': {
        tr: 'Testi Başlat',
        en: 'Start Quiz'
    },
    'topic3-quiz': {
        tr: 'Testi Başlat',
        en: 'Start Quiz'
    },
    'topic4-quiz': {
        tr: 'Testi Başlat',
        en: 'Start Quiz'
    },
    'topic5-quiz': {
        tr: 'Testi Başlat',
        en: 'Start Quiz'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    setLanguage(currentLanguage);
    
    // Setup language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
});

function toggleLanguage() {
    currentLanguage = currentLanguage === 'tr' ? 'en' : 'tr';
    setLanguage(currentLanguage);
    
    // Update quiz if on quiz page
    if (typeof updateQuizLanguage === 'function') {
        updateQuizLanguage();
    }
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Update button text
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = lang === 'tr' ? 'EN' : 'TR';
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update translations for index page
    if (typeof translations !== 'undefined') {
        Object.keys(translations).forEach(key => {
            const element = document.getElementById(key);
            if (element && translations[key][lang]) {
                element.textContent = translations[key][lang];
            }
        });
    }
    
    // Update all elements with data-tr and data-en attributes (for quiz pages)
    const elements = document.querySelectorAll('[data-tr][data-en]');
    elements.forEach(element => {
        const text = lang === 'tr' ? element.getAttribute('data-tr') : element.getAttribute('data-en');
        
        // Check if element is input or has value attribute
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else if (element.hasAttribute('title')) {
            element.title = text;
        } else {
            element.innerHTML = text;
        }
    });
    
    // Update quiz language if on quiz page
    if (typeof currentLang !== 'undefined') {
        currentLang = lang;
    }
}

// Expose setLanguage globally
window.setLanguage = setLanguage;