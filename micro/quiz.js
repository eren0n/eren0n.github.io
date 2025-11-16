// Quiz functionality
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let currentLang = 'tr';

// Initialize quiz
document.addEventListener('DOMContentLoaded', function() {
    // Check if language is stored
    const storedLang = localStorage.getItem('preferredLanguage') || 'tr';
    currentLang = storedLang;
    
    loadQuestion();
    updateNavigationButtons();
});

function loadQuestion() {
    const questions = quizData[currentLang];
    const question = questions[currentQuestionIndex];
    const container = document.getElementById('quizContainer');
    
    container.innerHTML = `
        <div class="mb-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">${question.question}</h3>
            <div class="space-y-3">
                ${question.options.map((option, index) => `
                    <button 
                        class="option-btn w-full text-left px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-purple-400 ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}"
                        onclick="selectAnswer(${index})"
                        ${userAnswers[currentQuestionIndex] !== undefined ? 'disabled' : ''}
                    >
                        ${String.fromCharCode(65 + index)}. ${option}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    // Update question counter
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = questions.length;
    document.getElementById('score').textContent = score;
}

function selectAnswer(answerIndex) {
    const questions = quizData[currentLang];
    const question = questions[currentQuestionIndex];
    
    // Store user answer
    userAnswers[currentQuestionIndex] = answerIndex;
    
    // Check if correct
    const isCorrect = answerIndex === question.correct;
    if (isCorrect) {
        score++;
        document.getElementById('score').textContent = score;
    }
    
    // Visual feedback
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === answerIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const questions = quizData[currentLang];
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Previous button
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Next/Submit buttons
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

document.getElementById('prevBtn').addEventListener('click', function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        updateNavigationButtons();
    }
});

document.getElementById('nextBtn').addEventListener('click', function() {
    const questions = quizData[currentLang];
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        updateNavigationButtons();
    }
});

document.getElementById('submitBtn').addEventListener('click', function() {
    showResults();
});

function showResults() {
    const questions = quizData[currentLang];
    const modal = document.getElementById('resultModal');
    const finalScoreElement = document.getElementById('finalScore');
    const resultMessageElement = document.getElementById('resultMessage');
    
    finalScoreElement.textContent = score;
    
    // Generate message based on score
    let message = '';
    const percentage = (score / questions.length) * 100;
    
    if (currentLang === 'tr') {
        if (percentage >= 90) {
            message = '🎉 Mükemmel! Bu konuda çok başarılısınız!';
        } else if (percentage >= 70) {
            message = '👍 Tebrikler! İyi bir performans gösterdiniz.';
        } else if (percentage >= 50) {
            message = '📚 Fena değil, ancak biraz daha çalışmanız gerekiyor.';
        } else {
            message = '💪 Konu üzerinde daha fazla çalışmalısınız. Başarılar!';
        }
    } else {
        if (percentage >= 90) {
            message = '🎉 Perfect! You are very successful in this topic!';
        } else if (percentage >= 70) {
            message = '👍 Congratulations! You showed good performance.';
        } else if (percentage >= 50) {
            message = '📚 Not bad, but you need to study a bit more.';
        } else {
            message = '💪 You need to study more on this topic. Good luck!';
        }
    }
    
    resultMessageElement.textContent = message;
    modal.classList.remove('hidden');
}

// Update quiz content when language changes
function updateQuizLanguage() {
    // Reload current question with new language
    loadQuestion();
    updateNavigationButtons();
}