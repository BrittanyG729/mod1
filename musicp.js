
const questions = [
    {
      question: "Fill in the Blank... A_____ is a guy that thinks he fine, and also known as a busta",
      answers: [
        { text: "Scrub", correct: true },
        { text: "Man", correct: false },
      ]
    },
    {
      question: "This International Diva made her debut in the 90's. Known for her 5-octave range. Her 18 #1 hits include Vision of Love, Honey, and Daydream",
      answers: [
        { text: "Mariah Carey", correct: true },
        { text: "Whitney Houston", correct: false },
      ]
    },
    {
      question: "It's Friday night, and I feel alright. The party is here on the West Side. Is a popular 90's song sung by who?",
      answers: [
        { text: "Montell Jordan", correct: true },
        { text: "Tony Toni Tone", correct: false },
      ]
    },
    {
      question: "Name the Artist: This musician known as The Queen Bee has become a global icon. Known for her amazing visuals and performances, with songs like Baby Boy, Crazy in Love, and Single Ladies",
      answers: [
        { text: "Beyoncé", correct: true },
        { text: "Destiny's Child", correct: false },
      ]
    },
    {
      question: "Gwen Stefani is a Grammy award winner, vocalist, and a judge on The Voice. But in her 2004 single, she is not a what? (Hint: Bananas)",
      answers: [
        { text: "Hollaback Girl", correct: true },
        { text: "Bananas", correct: false },
      ]
    },
    {
      question: "In what song did 50 Cent have us sippin' Bacardi and celebrating our birthdays?",
      answers: [
        { text: "In Da Club", correct: true },
        { text: "21 Questions", correct: false },
      ]
    },
    {
      question: "1995 hit song 'Hit the Road Jack' is performed by who?",
      answers: [
        { text: "Ray Charles", correct: true },
        { text: "Percy Mayfield", correct: false },
      ]
    },
    {
      question: "When I had you to myself, I didn't want you around, those pretty faces always make you stand out in a crowd. What song is this?",
      answers: [
        { text: "I Want You Back", correct: true },
        { text: "Baby Please Come Home", correct: false },
      ]
    },
    {
      question: "Name the Artist: This controversial rapper has won 15 Grammys, been inducted into the Rock 'n' Roll Hall of Fame, and performed at the 2022 Super Bowl with Kendrick Lamar, Snoop Dogg, and Dr. Dre. He is known for songs such as Dear Mama and Lose Yourself",
      answers: [
        { text: "Eminem", correct: true },
        { text: "Tupac", correct: false },
      ]
    },
  ];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
  
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = 'none';
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
    if (button.dataset.correct === 'true') {
      button.classList.add("correct");
    }
    button.disabled=true;
  });
  nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


    questionElement.innerHTML = "Quiz is finished. Your score: " + score + " out of " + questions.length;
  


startQuiz();
