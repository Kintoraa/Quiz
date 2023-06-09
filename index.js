const btn = document.querySelectorAll(".btn");
const quizQuestion = document.getElementById("question");
const score = document.getElementById("score");
let scoreQuiz = 0;
let progressQuiz = 1;
let indexQuiz = 0;

class Question {
  constructor(text, choices, response) {
    this.text = text;
    this.choice = choices;
    this.response = response;
  }
}

const questions = [
  new Question(
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()", "includes()", "findIndex()", "isOdd()"],
    "includes()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en un objet Javascript ?",
    ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
    "JSON.parse()"
  ),
  new Question(
    "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.round()"
  ),
  new Question(
    "Quel est le langage de programmation le plus utilisé ?",
    ["Java", "Python", "Swift", "JavaScript"],
    "JavaScript"
  ),

  new Question(
    "Lequel d'entre eux n'ait pas un langage de programmation",
    ["Php", "Ruby", "HTML", "C++"],
    "HTML"
  ),
];

// Affichage des questions

const displayQuestion = (e) => {
  quizQuestion.textContent = questions[indexQuiz].text;

  for (let i = 0; i < questions[indexQuiz].choice.length; i++) {
    const choice = document.getElementById(`choice${i}`);
    choice.textContent = questions[indexQuiz].choice[i];
  }
  progress.textContent = `Question : ${progressQuiz}/${questions.length}`;
};

// Affichage du Résultat
const displayResult = () => {
  score.textContent = scoreQuiz + " Points";
};

// Affichage de la page de Résultat
const pageFinal = () => {
  document.querySelector("body").innerHTML = `
<div class="container">
      <h1> Quiz terminée !</h1>
       <p id="progress">Votre score est de ${scoreQuiz}/${questions.length}</p>
       <button id="reloadBtn">Recommencer</button>
</div>
  `;
  indexQuiz = 0;
  progressQuiz = 1;
  scoreQuiz = 0;

  // Bouton recommencer
  reloadBtn.addEventListener("click", () => location.reload());
};


const ringFalse =() => {
  const audio = new Audio()
  audio.src = "./assets/sound/4125.mp3"
  audio.play();
}

const ringTrue =() => {
  const audio = new Audio()
  audio.src = "./assets/sound/2041.mp3"
  audio.play();
}
// Systeme de changement de Quizz
btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (questions[indexQuiz].response === e.target.innerText) {
      scoreQuiz++;
      ringTrue();
      displayResult();
    } else {
      ringFalse();
    }

    if (indexQuiz === questions.length - 1) {
      pageFinal();
      return;
    }

    if (indexQuiz === 0) {
      indexQuiz++;
      progressQuiz++;
      displayQuestion();
    } else if (indexQuiz > 0) {
      indexQuiz++;
      progressQuiz++;
      displayQuestion();
    }
  });
});

displayResult();
displayQuestion();
