// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    } else {
      profit = Math.max(prices[i] - buy, profit);
    }
  }
  return profit;
};

const one = maxProfit([7, 1, 5, 3, 6, 4]);
const two = maxProfit([7, 6, 4, 3, 1]);
const three = maxProfit([2, 4, 1]);
