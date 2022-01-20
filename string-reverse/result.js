function backward(string) {
    let result = "";
    let word = string.split(" ");
    for(let i = 0; i < word.length; i++) {
        let str1 = word[i]
        let str2 = str1.split("").reverse().join("");
        result += str2.concat(" ");
    }
    console.log(result);
}
backward('hello world');