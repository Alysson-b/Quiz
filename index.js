const questions = [
    'Quem gritou "Independência ou Morte"?',
    "Qual é a capital da França?",
    "Qual é o maior planeta do nosso sistema solar?",
    "Qual é a atual capital do Brasil?"
];

const options = [
    ["Dom Pedro II", "Tiririca", "Dom Pedro I", "Zacarias"],
    ["Londres", "Paris", "Berlim", "Madrid"],
    ["Vênus", "Marte", "Júpiter", "Saturno"],
    ["Salvador", "Rio de Janeiro", "São Paulo", "Brasília"]
];

const correctAnswers = [2, 1, 2, 3];

document.addEventListener("DOMContentLoaded", () => {
    const reloadButton = document.getElementById('reload');
    reloadButton.style.display = "none";

    let nowQuestion = Math.floor(Math.random() * questions.length);

    generateQuestions(nowQuestion);
    selectButton(nowQuestion);

    reloadButton.addEventListener('click', () => {
        location.reload();
    });
});

function generateQuestions(questionIndex) {
    document.getElementById("question").textContent = questions[questionIndex];
    const optionsContainer = document.querySelectorAll('button.alternative');
    optionsContainer.forEach((element, index) => {
        element.textContent = options[questionIndex][index];
    });
}

function selectButton(questionIndex) {
    const alternatives = document.querySelectorAll('.alternative');

    alternatives.forEach(button => {
        button.onclick = () => checkAnswer(button.value, questionIndex);
    });
}

function checkAnswer(answer, questionIndex) {
    answer = parseInt(answer);
    const statusAnswer = document.getElementById("statusAnswer");
    if (answer === correctAnswers[questionIndex]) {
        statusAnswer.textContent = "Acertou!!!";
    } else {
        statusAnswer.textContent = `Errou, a resposta correta é: ${options[questionIndex][correctAnswers[questionIndex]]}`;
    }
    document.getElementById('reload').style.display = "block";
}
