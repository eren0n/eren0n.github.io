// ============================================
// MULTI-LANGUAGE TRANSLATION SYSTEM
// ============================================

const translations = {
    // Common elements across all pages
    common: {
        tr: {
            siteTitle: "Akıllı Evler ve Enerji Yönetimi",
            prepareForExam: "Sınava Hazırlan",
            courseNotesSeries: "Ders Özeti Serisi",
            courseNotes: "Ders Notları & Özetler",
            footer: {
                copyright: "© 2025 eren0n. Tüm hakları saklıdır.",
                goodLuck: "Sınavınızda Başarılar."
            }
        },
        en: {
            siteTitle: "Smart Homes and Energy Management",
            prepareForExam: "Prepare for Exam",
            courseNotesSeries: "Course Summary Series",
            courseNotes: "Course Notes & Summaries",
            footer: {
                copyright: "© 2025 eren0n. All rights reserved.",
                goodLuck: "Good Luck on Your Exam."
            }
        }
    },

    // Index page translations
    index: {
        tr: {
            aboutTitle: "Ders Özeti Hakkında",
            aboutText: "Aşağıda, \"Akıllı Evler ve Enerji Yönetimi\" dersi kapsamında işlediğimiz dört ana modülün kapsamlı özetlerini bulabilirsiniz. Bu içerikler, enerji yönetiminin temellerinden ekonomik analiz yöntemlerine kadar olan süreci kapsamaktadır.",
            midtermPrepTitle: "Vize Sınavlarına Hazırlık",
            midtermPrepText: "Tüm bölümleri (1-4) kapsayan karma deneme sınavlarına buradan ulaşabilirsiniz.",
            midtermBtn1: "Karma Sınav 1'i Çöz",
            midtermBtn2: "Karma Sınav 2'yi Çöz",
            midtermBtn3: "Karma Sınav 3'ü Çöz",
            module: "Bölüm",
            takeTest: "Testini Çöz →",
            modules: [
                {
                    title: "Enerji Yönetimine Giriş ve Temel Kavramlar",
                    content: "Enerji yönetimi, kârı maksimize etmek ve rekabetçi konumu geliştirmek için enerjinin akılcı ve etkin kullanılmasıdır..."
                },
                {
                    title: "Yük Karakteristikleri ve Analizi",
                    content: "Tüketici talebi gün içinde sürekli değişir. Enerji yönetiminin amacı bu dengeyi kurmaktır..."
                },
                {
                    title: "Enerji Kaynakları ve Fatura Yapıları (Tarifeler)",
                    content: "Enerji maliyeti, sadece ne kadar tükettiğinizle değil, ne zaman ve nasıl tükettiğinizle ilgilidir..."
                },
                {
                    title: "Ekonomik Analiz ve Mühendislik Ekonomisi",
                    content: "Bir enerji projesine değer mi sorusunun cevabını verirken Paranın Zaman Değeri dikkate alınmalıdır..."
                }
            ]
        },
        en: {
            aboutTitle: "About the Course Summary",
            aboutText: "Below, you can find comprehensive summaries of the four main modules we covered in the \"Smart Homes and Energy Management\" course. These contents cover the process from the fundamentals of energy management to economic analysis methods.",
            midtermPrepTitle: "Midterm Exam Preparation",
            midtermPrepText: "You can access mixed practice exams covering all chapters (1-4) from here.",
            midtermBtn1: "Take Mixed Exam 1",
            midtermBtn2: "Take Mixed Exam 2",
            midtermBtn3: "Take Mixed Exam 3",
            module: "Chapter",
            takeTest: "Take Test →",
            modules: [
                {
                    title: "Introduction to Energy Management and Basic Concepts",
                    content: "Energy management is the judicious and effective use of energy to maximize profits and improve competitive position..."
                },
                {
                    title: "Load Characteristics and Analysis",
                    content: "Consumer demand constantly changes throughout the day. The purpose of energy management is to establish this balance..."
                },
                {
                    title: "Energy Sources and Rate Structures (Tariffs)",
                    content: "Energy cost is not just about how much you consume, but when and how you consume it..."
                },
                {
                    title: "Economic Analysis and Engineering Economics",
                    content: "When answering the question of whether an energy project is worthwhile, the Time Value of Money must be considered..."
                }
            ]
        }
    },

    // Quiz/Exam common translations
    quiz: {
        tr: {
            mixedExam: "Karma Sınav",
            chapters: "Bölüm 1-4",
            evaluationExam: "Değerlendirme Sınavı",
            examIntro: "Bu sınav, dersin ilk dört bölümündeki (PDF 1-4) temel kavramsal bilgilerinizi ölçmek için hazırlanmıştır. 15 adet çoktan seçmeli sözel soru bulunmaktadır. Başarılar!",
            chapterExamIntro: "konusundaki bilginizi ölçmek için hazırlanmıştır. 15 adet çoktan seçmeli sözel soru bulunmaktadır. Başarılar!",
            question: "Soru",
            finishExam: "Sınavı Bitir",
            examResult: "Sınav Sonucu",
            score: "Puan",
            correct: "Doğru",
            wrong: "Yanlış",
            wrongQuestionsTitle: "Yanlış Sorular ve Doğruları",
            yourAnswer: "Sizin Cevabınız",
            correctAnswer: "Doğru Cevap",
            leftBlank: "Boş bırakıldı",
            congratulations: "🎉 Tebrikler! Tüm soruları doğru cevapladınız! 🎉",
            chapter1Title: "Enerji Yönetimine Giriş ve Temel Kavramlar",
            chapter2Title: "Yük Karakteristikleri",
            chapter3Title: "Enerji Kaynakları ve Hizmet Bedelleri (Tarifeler)",
            chapter4Title: "Ekonomik Analiz ve Mühendislik Ekonomisi"
        },
        en: {
            mixedExam: "Mixed Exam",
            chapters: "Chapters 1-4",
            evaluationExam: "Evaluation Exam",
            examIntro: "This exam is designed to assess your understanding of the basic concepts in the first four chapters (PDF 1-4) of the course. It contains 15 multiple-choice questions. Good luck!",
            chapterExamIntro: "is designed to assess your knowledge. It contains 15 multiple-choice questions. Good luck!",
            question: "Question",
            finishExam: "Finish Exam",
            examResult: "Exam Result",
            score: "Score",
            correct: "Correct",
            wrong: "Wrong",
            wrongQuestionsTitle: "Wrong Questions and Correct Answers",
            yourAnswer: "Your Answer",
            correctAnswer: "Correct Answer",
            leftBlank: "Left blank",
            congratulations: "🎉 Congratulations! You answered all questions correctly! 🎉",
            chapter1Title: "Introduction to Energy Management and Basic Concepts",
            chapter2Title: "Load Characteristics",
            chapter3Title: "Energy Sources and Service Charges (Tariffs)",
            chapter4Title: "Economic Analysis and Engineering Economics"
        }
    }
};

// ============================================
// QUIZ DATA TRANSLATIONS
// Storage for quiz questions and answers in both languages
// ============================================

const quizTranslations = {
    // Midterm1 Quiz Questions
    midterm1: {
        tr: [], // Will be populated from existing HTML
        en: [] // English translations
    },
    // ... other quizzes will follow same pattern
};

// ============================================
// TRANSLATION ENGINE FUNCTIONS
// ============================================

/**
 * Get current language from localStorage (default: 'tr')
 */
function getLanguage() {
    return localStorage.getItem('siteLanguage') || 'tr';
}

/**
 * Set language preference
 */
function setLanguage(lang) {
    localStorage.setItem('siteLanguage', lang);
}

/**
 * Get translation for a specific key path
 * Example: translate('common.siteTitle') or translate('index.aboutTitle')
 */
function translate(keyPath, section = 'common') {
    const lang = getLanguage();
    const keys = keyPath.split('.');
    let value = translations[section][lang];
    
    for (const key of keys) {
        if (value && value[key] !== undefined) {
            value = value[key];
        } else {
            console.warn(`Translation not found: ${section}.${lang}.${keyPath}`);
            return keyPath; // Return key if translation not found
        }
    }
    
    return value;
}

/**
 * Get quiz data in current language
 * @param {string} quizName - Name of the quiz (e.g., 'midterm1', 'test1')
 * @returns {Array} Quiz questions in current language
 */
function getQuizData(quizName) {
    const lang = getLanguage();
    if (quizTranslations[quizName] && quizTranslations[quizName][lang]) {
        return quizTranslations[quizName][lang];
    }
    // Fallback to Turkish if translation not available
    return quizTranslations[quizName]?.tr || [];
}

/**
 * Update all elements with data-translate attribute
 */
function updatePageTranslations() {
    const lang = getLanguage();
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const section = element.getAttribute('data-section') || 'common';
        element.textContent = translate(key, section);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update language switch button
    updateLanguageButton();
}

/**
 * Update the language switch button to show current language
 */
function updateLanguageButton() {
    const lang = getLanguage();
    const langBtn = document.getElementById('lang-switch-btn');
    
    if (langBtn) {
        if (lang === 'tr') {
            langBtn.innerHTML = '<span class="text-sm font-semibold">🇬🇧 EN</span>';
            langBtn.setAttribute('aria-label', 'Switch to English');
        } else {
            langBtn.innerHTML = '<span class="text-sm font-semibold">🇹🇷 TR</span>';
            langBtn.setAttribute('aria-label', 'Türkçe\'ye geç');
        }
    }
}

/**
 * Toggle between languages
 */
function toggleLanguage() {
    const currentLang = getLanguage();
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    setLanguage(newLang);
    updatePageTranslations();
    
    // Trigger custom event for pages that need special handling
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: newLang } }));
}

/**
 * Initialize language system on page load
 */
function initLanguageSystem() {
    // Set up language toggle button
    const langBtn = document.getElementById('lang-switch-btn');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
    
    // Apply translations on initial load
    updatePageTranslations();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSystem);
} else {
    initLanguageSystem();
}
