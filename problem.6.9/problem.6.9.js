var isPalindrome = function (x) {
  const stringX = x.toString();
  let arrayX = [];

  for (let i = 0; i < stringX.length; i++) {
    const stringXElement = stringX[i];

    arrayX.push(stringXElement);
  }

  const reverseArrayX = arrayX.reverse();
  let reverseStringX = "";

  for (let i = 0; i < reverseArrayX.length; i++) {
    const reverseArrayXElement = reverseArrayX[i];

    reverseStringX += reverseArrayXElement;
  }

  if (reverseStringX === stringX) {
    return true;
  } else {
    return false;
  }
};
