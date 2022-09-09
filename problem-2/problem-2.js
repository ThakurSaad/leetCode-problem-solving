var maximumWealth = function (accounts) {
  let customersTotalWealth = [];
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    let accountElement = 0;

    for (let j = 0; j < account.length; j++) {
      accountElement += account[j];
    }

    customersTotalWealth.push(accountElement);
  }

  let customersTotalWealthElement = 0;
  for (let i = 0; i < customersTotalWealth.length; i++) {
    customersTotalWealthElement = customersTotalWealth[i];

    if (maxWealth < customersTotalWealthElement) {
      maxWealth = customersTotalWealthElement;
    }
  }

  return maxWealth;
};
