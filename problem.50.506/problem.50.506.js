/**
 * @param {number[]} score
 * @return {string[]}
 */

var findRelativeRanks = function (score) {
  const scoreArr = JSON.parse(JSON.stringify(score)).sort((a, b) => b - a);

  const answer = [];

  for (let i = 0; i < score.length; i++) {
    if (scoreArr.indexOf(score[i]) === 0) {
      answer.push("Gold Medal");
    } else if (scoreArr.indexOf(score[i]) === 1) {
      answer.push("Silver Medal");
    } else if (scoreArr.indexOf(score[i]) === 2) {
      answer.push("Bronze Medal");
    } else {
      answer.push(String(scoreArr.indexOf(score[i]) + 1));
    }
  }

  return answer;
};
