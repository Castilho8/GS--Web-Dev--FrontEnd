const questions = [
  {
    question: "Qual dessas habilidades é mais valorizada no futuro do trabalho?",
    answers: [
      { text: "Trabalho em equipe", correct: true },
      { text: "Memorização", correct: false },
      { text: "Execução repetitiva", correct: false },
      { text: "Isolamento social", correct: false }
    ]
  },
  {
    question: "Qual tecnologia mais impacta o mercado atual?",
    answers: [
      { text: "Fax", correct: false },
      { text: "Disquete", correct: false },
      { text: "Inteligência Artificial", correct: true },
      { text: "Máquina de escrever", correct: false }
    ]
  },
  {
    question: "O que é mais importante para se destacar no futuro?",
    answers: [
      { text: "Fazer sempre o mesmo", correct: false },
      { text: "Adaptabilidade e aprendizado contínuo", correct: true },
      { text: "Evitar mudanças", correct: false },
      { text: "Ignorar tecnologia", correct: false }
    ]
  },
  {
    question: "Qual modelo de trabalho tende a crescer no futuro?",
    answers: [
      { text: "Híbrido e flexível", correct: true },
      { text: "Apenas presencial com horário rígido", correct: false },
      { text: "Somente remoto sem colaboração", correct: false },
      { text: "Turnos fixos sem autonomia", correct: false }
    ]
  },
  {
    question: "Para se manter relevante com IA e automação, o que priorizar?",
    answers: [
      { text: "Evitar novas tecnologias", correct: false },
      { text: "Aprendizado contínuo, upskilling e reskilling", correct: true },
      { text: "Focar apenas em tarefas repetitivas", correct: false },
      { text: "Trabalhar isolado sem feedback", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
  nextButton.innerHTML = "Reiniciar Quiz";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
