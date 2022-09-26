/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function (rowIndex) {
  if (rowIndex == 0) return [1];
  if (rowIndex == 1) return [1, 1];

  let pascalsTriangle = new Array(rowIndex);

  for (let i = 0; i <= rowIndex; i++) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;

    for (let j = 1; j < row.length - 1; j++) {
      const rowAbove = pascalsTriangle[i - 1];
      row[j] = rowAbove[j] + rowAbove[j - 1];
    }
    pascalsTriangle[i] = row;
  }
  return pascalsTriangle[pascalsTriangle.length - 1];
};
