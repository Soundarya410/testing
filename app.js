const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["New York", "London", "Paris", "Tokyo"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "what is colour of apple",
        options: [ "blue", "green", "yellow", "red"],
        answer:"red"
    }
    
];

const renderQuiz = () => {
    const container = document.getElementById('quizContainer');
    quizQuestions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.textContent = question.question;

        question.options.forEach(option => {
            const label = document.createElement('label');
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = 'question' + index;
            radioInput.value = option;
            label.appendChild(radioInput);
            label.append(option);
            questionElement.appendChild(label);
        });

        container.appendChild(questionElement);
    });
};

const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((question, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && selected.value === question.answer) {
            score++;
        }
    });
    document.getElementById('result').textContent = `Your score: ${score}/${quizQuestions.length}`;
};

document.addEventListener('DOMContentLoaded', () => {
    renderQuiz();
    document.getElementById('submitQuiz').addEventListener('click', calculateScore);
});