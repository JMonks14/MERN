function longestWord(message) {
    let words = message.split(" ")
    let maxlength=0;
    longwords = []
    for (w in words) {
        l = words[w].length
        if (l > maxlength) {
            maxlength = l
            longwords = []
            longwords.push(words[w])
        } else if (l === maxlength && !(longwords.includes(words[w]))) {
            longwords.push(words[w])
        }
    }
    // console.log(words);
    for (lw in longwords) {
        console.log(longwords[lw]);
    }
}

longestWord("My hamster is golden and very friendly He is very friendly and lovelier than a rat.")