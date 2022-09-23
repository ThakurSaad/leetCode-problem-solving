var generate = function(numRows) {
    let pascalsTriangle = new Array(numRows);

    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1)
        row[0] = 1
        row[row.length - 1] = 1;

        for (let j = 1; j < row.length - 1; j++) {
            const rowAbove = pascalsTriangle[i - 1]
            row[j] = rowAbove[j] + rowAbove[j - 1];
            // console.log(rowAbove);
            console.log(row);
        }
        pascalsTriangle[i] = row;
    }
    console.log(pascalsTriangle);
};

generate(5)
    // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]