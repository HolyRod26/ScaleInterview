import words from "./dictionary";
import { getChars, sortArray } from "./utils";

function get_number_of_characthers(arr) {
  let freqChar = new Map();
  arr.forEach((word) => {
    let splittedWord = getChars(word);
    splittedWord.forEach((letter) => {
      if (freqChar.get(letter)) {
        freqChar.set(letter, freqChar.get(letter) + 1);
      } else {
        freqChar.set(letter, 1);
      }
    });
  });
  return freqChar;
}

function weight_words(arr) {
  const freqChar = get_number_of_characthers(words);
  let allWeights = []
  console.log(freqChar)
  arr.forEach((word) => {
    let finalWordWeight = 0;
    let result = {}
    let splittedWord = getChars(word);
    let weightWord = {}
    splittedWord.forEach(letter => {
      let charNotRepeated = new Map()
      if(!charNotRepeated.has(letter)) {
        charNotRepeated.set(letter, 1)
        weightWord[letter] = freqChar.get(letter)
      }
      charNotRepeated.set(letter, charNotRepeated.get(letter) + 1)
    })
    for (let prop in weightWord) {
      finalWordWeight += weightWord[prop];
      // sortArray(allWeights)
    }
    result['word'] = word
    result['weight'] = finalWordWeight
    allWeights.push(result)

    allWeights.sort((a, b) => {
      if(a.weight > b.weight) {
        return -1
      }
      if(a.weight < b.weight) {
        return 1
      }
      return 0
    })
  });
  return allWeights
}

console.log(weight_words(words));
