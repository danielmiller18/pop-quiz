// // start the quiz with a timer set to 75.
var timeLeft = 75;
var timerID;
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var questionContainerEl = document.getElementById("question-container");
var startContainerEl = document.getElementById("start-container")
var questionEl = document.getElementById("question")
var answerButtonsEl = document.getElementById("answer-buttons")
var checkAnswerEl = document.getElementById("check-answer");

var viewHighScores = document.getElementById("highscores-link")
var submitButton = document.getElementById("submit-btn")

var clearScoreButton = document.getElementById("clear-btn")
var initialsField = document.getElementById("player-name");

var restartButton = document.getElementById("restart-btn")
var scoreField = document.getElementById("player-score");
var scores = JSON.parse(localStorage.getItem("scores")) || [];

console.log(scores, "scores")

console.log(scoreField, 'scoreField' )


var shuffledQuestions, currentQuestionIndex;

// Start button trigger to get the frist question and next button to display the next one

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion()

})

// counter timer function

function timeTick(){
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if(timeLeft <= 0){
        saveScore();
    }
}

// // start Quiz
function startGame(){
    timerID = setInterval(timeTick, 1000);
    startContainerEl.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    debugger;
    questionContainerEl.classList.remove("hide");

    // // timer will start as soon as the btn is clicked
    timeTick();

    setNextQuestion();
}


// // move for the next question

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// // Display the questions to the user
function showQuestion(question){
    questionEl.innerText = question.question
    question.answers.forEach(answer => {

    })
}