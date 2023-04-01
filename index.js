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
  isCorrect(choice) {
    return choice === this.response;
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
  )
];

// Affichage des questions

const displayQuestion = (e) => {
  quizQuestion.textContent = questions[indexQuiz].text;
  choice0.textContent = questions[indexQuiz].choice[0];
  choice1.textContent = questions[indexQuiz].choice[1];
  choice2.textContent = questions[indexQuiz].choice[2];
  choice3.textContent = questions[indexQuiz].choice[3];
  progress.textContent = `Question : ${progressQuiz}/${questions.length}`;
};

// Affichage du Résultat
const displayResult = () => {
  score.textContent = scoreQuiz + " Points";
}


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

  reloadBtn.addEventListener("click", () => location.reload());

};

// Systeme de changement de Quizz
btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (questions[indexQuiz].response === e.target.innerText) {
      scoreQuiz++;
      displayResult()
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

// Bouton pour recommencer le Quiz



displayResult();
displayQuestion();
