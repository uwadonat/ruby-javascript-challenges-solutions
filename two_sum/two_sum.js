var two_sum = function (nums, target) {
  document.getElementById("array").innerHTML = "[" + nums + "]";
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum = nums[i] + nums[j];
      if (sum == target) {
        document.getElementById("answer").innerHTML = "[" + [i, j] + "]";
      }
    }
  }
};
