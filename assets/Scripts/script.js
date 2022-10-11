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
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")

        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsEl.appendChild(button)

    })
}


// this function will reset the state of the program
function resetState(){
    nextButton.classList.add("hide")
    checkAnswerEl.classList.add("hide")
    while(answerButtonsEl.firstChild){
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }

}

 // Select answer 
 function selectAnswer(e){
    var selectedButton = e.target;

    var correct = selectedButton.dataset.correct;
    checkAnswerEl.classList.remove("hide")

    // check if the answer is correct or wrong then show the corresponding text
    if(correct){
        checkAnswerEl.innerHTML = "You got it correct! :)"
    } else{
        checkAnswerEl.innerHTML = "Sorry that wrong!!!! :("
        if(timeLeft <= 10){ // needs to be fixed
            timeLeft = 0
        } else{
            // if the answer is wrong then we will deduct 10 seconds from the time
            // timeLeft -= 10;
            timeLeft = timeLeft - 10
        }
    }


    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide")
        checkAnswerEl.classList.remove("hide")
    } else{
        startButton.classList.remove("hide")
        saveScore();
    }

 }

 // add colors to the buttons

 function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct");

    } else {
        element.classList.add("wrong")
    }
 }


 function clearStatusClass(element){
    element.classList.remove("correct");
    element.classList.remove("wrong")
 };

 // save scores
 function saveScore(){
    clearInterval(timerID);
    timerEl.textContent = "Time: " + timeLeft;
    setTimeout(function(){
        questionContainerEl.classList.add("hide");
        document.getElementById("score-container").classList.remove("hide");
        document.getElementById("your-score").textContent = "Your final score is " + timeLeft
    }, 2000) 

 };


 var loadScores = function(){
     // get score from the local storage

     if(savedScores){
        return false;
     }

     // Convert scores from string into array format

 }
 


