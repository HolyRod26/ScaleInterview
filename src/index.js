"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dictionary_1 = __importDefault(require("./dictionary"));
var utils_1 = require("./utils");
function get_number_of_characthers(arr) {
    var freqChar = new Map();
    arr.forEach(function (word) {
        var splittedWord = (0, utils_1.getChars)(word);
        splittedWord.forEach(function (letter) {
            if (freqChar.get(letter)) {
                freqChar.set(letter, freqChar.get(letter) + 1);
            }
            else {
                freqChar.set(letter, 1);
            }
        });
    });
    return freqChar;
}
function weight_words(arr) {
    var freqChar = get_number_of_characthers(dictionary_1["default"]);
    var allWeights = [];
    console.log(freqChar);
    arr.forEach(function (word) {
        var finalWordWeight = 0;
        var result = {};
        var splittedWord = (0, utils_1.getChars)(word);
        var weightWord = {};
        splittedWord.forEach(function (letter) {
            var charNotRepeated = new Map();
            if (!charNotRepeated.has(letter)) {
                charNotRepeated.set(letter, 1);
                weightWord[letter] = freqChar.get(letter);
            }
            charNotRepeated.set(letter, charNotRepeated.get(letter) + 1);
        });
        for (var prop in weightWord) {
            finalWordWeight += weightWord[prop];
            // sortArray(allWeights)
        }
        result['word'] = word;
        result['weight'] = finalWordWeight;
        allWeights.push(result);
        allWeights.sort(function (a, b) {
            if (a.weight > b.weight) {
                return -1;
            }
            if (a.weight < b.weight) {
                return 1;
            }
            return 0;
        });
    });
    return allWeights;
}
console.log(weight_words(dictionary_1["default"]));
//# sourceMappingURL=index.js.map