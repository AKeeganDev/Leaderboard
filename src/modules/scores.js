export default class Scores {
  static scoreSource = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2XZBFeB4G4BRrQVtaC1y/scores';

  static scores = [];

  static getScores = () => this.scores;

  static getAPI = async () => {
    const response = await fetch(this.scoreSource);
    const values = await response.json();
    return values.result;
  }

  static postScore = async (userName, score) => {
    const response = await fetch(this.scoreSource, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        user: `${userName}`,
        score: `${score}`,
      }),
    });

    const data = await response.json();
    console.log(data);
    return data;
  }
}