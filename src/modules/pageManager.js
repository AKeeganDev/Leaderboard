import Scores from './scores.js';
import Score from './score.js';

export default class PageManager {
  scoreContainer = document.querySelector('.score-list')

  paintScoresToPage = () => {
    const allScores = Scores.getScores();
    allScores.forEach((score) => {
      const scoreLI = document.createElement('li');
      scoreLI.textContent = this.generateScoreHTML(score);
      this.scoreContainer.appendChild(scoreLI);
    });
  }

  pullScoresFromAPI = () => {
    const allScores = Scores.getAPI();
    allScores.then((scores) => {
      Scores.scores = [];
      this.scoreContainer.innerHTML = '';
      scores.forEach((score) => {
        const scoreToObject = new Score(score.user, score.score);
        Scores.scores.push(scoreToObject);
      });
      Scores.scores = Scores.scores.sort((score1, score2) => score2.score - score1.score);
      this.paintScoresToPage();
    });
  }

  setButtonListeners = () => {
    // Selectors for the submit button
    const nameInput = document.getElementById('name');
    const scoreInput = document.getElementById('score');
    const submitButton = document.querySelector('.api');

    // selector the refresh button
    const refreshButton = document.querySelector('.refresh');

    submitButton.addEventListener('click', () => {
      if (!nameInput.value || !scoreInput.value) return;
      Scores.postScore(nameInput.value, scoreInput.value);
      nameInput.value = '';
      scoreInput.value = '';
    });

    refreshButton.addEventListener('click', () => {
      this.pullScoresFromAPI();
    });
  }

  pageSetup = () => {
    this.pullScoresFromAPI();
    this.setButtonListeners();
  }

  generateScoreHTML = (score) => `${score.name}: ${score.score}`
}
