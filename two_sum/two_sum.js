var two_sum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.lenth; j++) {
      sum = nums[i] + nums[j];
      if (sum == target) {
        document.getElementById("answer").innerHTML = [i, j];
      }
    }
  }
};
