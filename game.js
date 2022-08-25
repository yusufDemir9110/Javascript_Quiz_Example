const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What is 2+2",
    choice1: "2",
    choice2: "4",
    choice3: "8",
    choice4: "9",
    answer: 2,
  },
  {
    question: "What is 4+2",
    choice1: "2",
    choice2: "4",
    choice3: "8",
    choice4: "6",
    answer: 4,
  },
  {
    question: "What is 1+1",
    choice1: "2",
    choice2: "4",
    choice3: "8",
    choice4: "9",
    answer: 1,
  },
  {
    question: "What is 4+4",
    choice1: "2",
    choice2: "4",
    choice3: "8",
    choice4: "9",
    answer: 3,
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("./end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
};
