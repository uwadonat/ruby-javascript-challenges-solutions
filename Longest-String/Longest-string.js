const Longest = (s) => {
  let checker = [];
  let length_array = [];
  let length_counter = 0;
  let string = s.split("");
  for (let i = 0; i < string.length; i++) {
    let include = checker.include?(string[i])
    if (include) {
      checker = [];
      length_counter = 0
    }
  }

  console.log(s);
};
