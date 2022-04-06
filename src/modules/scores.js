import Score from './score.js';

export default class Scores {
  static scores = [new Score('Aaron', 2000), new Score('Juan', 1850), new Score('Juda', 2175)];

  static getScores = () => Scores.scores;
}