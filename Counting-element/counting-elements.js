var countingElements = function (array) {
  let arraySorted = array.sort();
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < arraySorted.length; j++) {
      if ((arraySorted[j] = arraySorted[i] + 1)) {
        count++;
      }
    }
  }
  console.log(count);
};
