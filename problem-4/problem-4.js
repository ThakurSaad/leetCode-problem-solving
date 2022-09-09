var numberOfSteps = function (num) {
  let steps = 0;
  let resultEachTime = num;

  for (let i = resultEachTime; i > 0; i--) {
    const dividedBy2 = resultEachTime % 2;

    if (resultEachTime == 0) {
      return steps;
    }

    if (dividedBy2 == 0) {
      resultEachTime = resultEachTime / 2;
      steps++;
    } else if (dividedBy2 !== 0) {
      resultEachTime = resultEachTime - 1;
      steps++;
    }
  }

  return steps;
};
