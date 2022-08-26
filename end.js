const userName = document.querySelector("#userName");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 3;

finalScore.innerText = mostRecentScore;

userName.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !userName.value;
});

saveHighScore = (e) => {
  e.preventDefault();
  const score = {
    score: mostRecentScore,
    name: userName.value,
  };

  highScores.push(score);

  highScores.sort((a, b) => {
    return b.score - a.score;
  });

  highScores.splice(MAX_HIGH_SCORES);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};
