import Scores from './scores.js';

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

  generateScoreHTML = (score) => `${score.name}: ${score.score}`
}