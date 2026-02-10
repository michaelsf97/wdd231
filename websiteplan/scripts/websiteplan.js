//* Save questions *//

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('questionForm');
    const questionsList = document.getElementById('questionsUl');

//* Load questions from LocalStorage *//
function LoadQuestions() {
    questionsUl.innerHTML = '';
    const questions = JSON.parse(localStorage.getItem('questions')) || [];
    questions.forEach(q => {
        const li = document.createElement('li');
        li.textContent = q;
        questionsUl.appendChild(li);

    });

}

//* Handle Form Submission *//
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const question = document.getElementById('questions').value.trim();
    if (question) {
        let questions = JSON.parse(localStorage.getItem('questions') || '[]');
        questions.push(question);
        localStorage.setItem('questions', JSON.stringify(questions));
        form.reset();
        LoadQuestions();
    }
});

LoadQuestions();
});