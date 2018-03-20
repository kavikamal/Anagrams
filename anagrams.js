var anagrams = function (words) {
    this.wordsList = words,
        this.anagramSets = {},
        this.getAnagramSets = function () {

            for (let i = 0; i < this.wordsList.length; i++) {
                let word1 = this.wordsList[i];
                if (alphabetize(word1) in this.anagramSets) {
                    this.anagramSets[alphabetize(word1)].push(word1);
                } else {
                    this.anagramSets[alphabetize(word1)] = [word1];
                }
            }
        },
        this.displayAnagramSets = function (length) {
            var anagramDiv = document.getElementById("anagramsDiv");
            anagramDiv.innerHTML = "";
            var anagramStr = "";
            for (key in this.anagramSets) {
                if (this.anagramSets[key].length >= length) {
                    anagramStr = key + " :   " + this.anagramSets[key];
                    var div1 = document.createElement("div");
                    div1.textContent = anagramStr;
                    anagramDiv.appendChild(div1);
                    console.log(this.anagramSets[key]);
                }
            }
        }
};

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

var anagramObj = new anagrams(words);

function findFunction() {
    var len = document.getElementById("length").value;
    anagramObj.getAnagramSets();
    anagramObj.displayAnagramSets(len);
}