let array = [];
const btn = document.querySelectorAll(".btn");
const quizzQuestion = document.getElementById("question");
const score = document.getElementById("score");
let scoreQuizz = 0;
let progressQuizz = 1; // Essayer de faire une fonction dynamique

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
];

const firstQuestion = (e) => {
  quizzQuestion.textContent = questions[0].text;
  score.textContent = scoreQuizz + " Points";
  choice0.textContent = questions[0].choice[0];
  choice1.textContent = questions[0].choice[1];
  choice2.textContent = questions[0].choice[2];
  choice3.textContent = questions[0].choice[3];
  progress.textContent = "Question : " + progressQuizz + "/4";
};

const twoQuestion = (e) => {
  quizzQuestion.textContent = questions[1].text;
  choice0.textContent = questions[1].choice[0];
  choice1.textContent = questions[1].choice[1];
  choice2.textContent = questions[1].choice[2];
  choice3.textContent = questions[1].choice[3];
  progress.textContent = "Question : " + progressQuizz + "/4";
};

const threeQuestion = (e) => {
  quizzQuestion.textContent = questions[2].text;
  choice0.textContent = questions[2].choice[0];
  choice1.textContent = questions[2].choice[1];
  choice2.textContent = questions[2].choice[2];
  choice3.textContent = questions[2].choice[3];
  progress.textContent = "Question : " + progressQuizz + "/4";

  if (questions[2].response === e) {
    scoreQuizz++;
    score.textContent = scoreQuizz + " Points";
  }
};

const fourQuestion = (e) => {
  quizzQuestion.textContent = questions[3].text;
  choice0.textContent = questions[3].choice[0];
  choice1.textContent = questions[3].choice[1];
  choice2.textContent = questions[3].choice[2];
  choice3.textContent = questions[3].choice[3];
  progress.textContent = "Question : " + progressQuizz + "/4";

  if (questions[3].response === e) {
    scoreQuizz++;
    score.textContent = scoreQuizz + " Points";
  }
};

const pageFinal = () => {
  document.querySelector("body").innerHTML = `
<div class="container">
      <h1> Quiz terminée !</h1>
       <p id="progress">Votre score est de ${scoreQuizz}/4
</div>
  `;
  progressQuizz = 1;
  scoreQuizz = 0;
};

firstQuestion();

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (questions[0].response === e.target.innerText) {
      scoreQuizz++;
      score.textContent = scoreQuizz + " Points";
    }

    if (questions[1].response === e.target.innerText) {
      scoreQuizz++;
      score.textContent = scoreQuizz + " Points";
      console.log("test2");
    }
    if (questions[2].response === e.target.innerText) {
      scoreQuizz++;
      score.textContent = scoreQuizz + " Points";
      console.log("test2");
    }
    if (questions[3].response === e.target.innerText) {
      scoreQuizz++;
      score.textContent = scoreQuizz + " Points";
      console.log("test2");
    }

    if (progressQuizz === 1) {
      progressQuizz++;
      twoQuestion(e.target.innerText);
    } else if (progressQuizz === 2) {
      progressQuizz++;
      threeQuestion(e.target.innerText);
    } else if (progressQuizz === 3) {
      progressQuizz++;
      fourQuestion(e.target.innerText);
    } else if (progressQuizz === 4) {
      pageFinal();
    }
  });
});
