```
var romanToInt = function (s) {
  const I = 1;
  const V = 5;
  const X = 10;
  const L = 50;
  const C = 100;
  const D = 500;
  const M = 1000;
  let keeper = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const prevChar = s[i - 1];
    const nextChar = s[i + 1];

    if (char === "I") {
      if (nextChar === "V") {
        const result = V - I;
        keeper += result;
      } else if (nextChar === "X") {
        const result = X - I;
        keeper += result;
      } else {
        keeper += 1;
      }
    } else if (char === "V") {
      if (prevChar === "I") {
        continue;
      } else {
        keeper += 5;
      }
    } else if (char === "X") {
      if (prevChar === "I") {
        continue;
      } else if (nextChar === "L") {
        const result = L - X;
        keeper += result;
      } else if (nextChar === "C") {
        const result = C - X;
        keeper += result;
      } else {
        keeper += 10;
      }
    } else if (char === "L") {
      if (prevChar === "X") {
        continue;
      } else {
        keeper += 50;
      }
    } else if (char === "C") {
      if (prevChar === "X") {
        continue;
      } else if (nextChar === "D") {
        const result = D - C;
        keeper += result;
      } else if (nextChar === "M") {
        const result = M - C;
        keeper += result;
      } else {
        keeper += 100;
      }
    } else if (char === "D") {
      if (prevChar === "C") {
        continue;
      } else {
        keeper += 500;
      }
    } else if (char === "M") {
      if (prevChar === "C") {
        continue;
      } else {
        keeper += 1000;
      }
    }
  }

  return keeper;
};
```
