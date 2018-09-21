const englishLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
const morseCodeCharacters = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----" ];

const translateEnglishToMorseCode = (english) => {

  // Test 1: translate the single uppercase A - simplest code to get the test to work
  if (english === 'A'){
    return ".-"
  }

  // Test 2: refactor to convert all english letters to uppercase - simplest code to get the test to work
  if (english.toUpperCase() === 'A'){
    return ".-"
  }

  // Test 3: refactor to look up english index in englishLetters, and return the corresponding index from morseCodeCharacters
  // How can this be refactored?
  const englishToUpperCase = english.toUpperCase();
  const indexOfEnglishLetter = englishLetters.indexOf(englishToUpperCase)

  return morseCodeCharacters[indexOfEnglishLetter]

  // Test 4: refactor to separate morse code characters with spaces when converting english words
  const englishToLetters = english.toUpperCase().split("");
  let morseCodeTranslation = "";

  englishToLetters.forEach(letter => {
    let indexOfLetter = englishLetters.indexOf(letter);
    morseCodeTranslation += morseCodeCharacters[indexOfLetter] + " ";
  });
  return morseCodeTranslation.trim();

  // Test 5: refactor to put 3 spaces between morse code characters to designate spaces between words
  const englishToLetters = english.toUpperCase().split("");
  let morseCodeTranslation = "";

  englishToLetters.forEach(letter => {
    if(letter === " "){
      morseCodeTranslation += "  ";
    } else {
      let indexOfLetter = englishLetters.indexOf(letter);
      morseCodeTranslation += morseCodeCharacters[indexOfLetter] + " ";
    }
  });
  return morseCodeTranslation.trim();

  // Test 6: refactor to throw error if unknown character is passed in.
  // This solution will solve all test problems.  This is one of many ways to write the final solution
  const englishToLetters = english.toUpperCase().split("");
  let morseCodeTranslation = "";

  englishToLetters.forEach(letter => {
    if(letter === " "){
      morseCodeTranslation += "  ";
    }
    else if(!englishLetters.includes(letter)){
      throw "Untranslatable characters";
    }
    else {
      let indexOfLetter = englishLetters.indexOf(letter);
      morseCodeTranslation += morseCodeCharacters[indexOfLetter] + " ";
    }
  });
  return morseCodeTranslation.trim();

};

const translateMorseCodeToEnglish = (morseCode) => {

};

module.exports = {
  translateEnglishToMorseCode,
  translateMorseCodeToEnglish
};
