const englishLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
const morseCodeCharacters = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----" ];

const translateEnglishToMorseCode = (english) => {

  // Test 1: translate the single uppercase A - simplest code to get the test to work
  if (english = 'A'){
    return ".-"
  }

  // Test 2: refactor to convert all english letters to uppercase - simplest code to get the test to work
  if (english.toUpperCase() = 'A'){
    return ".-"
  }

  // Test 3: refactor to look up english index in englishLetters, and return the corresponding index from morseCodeCharacters
  // How can this be refactored?

  const englishToUpperCase = english.toUpperCase();
  const indexOfEnglishLetter = englishLetters.indexOf(englishToUpperCase)

  return morseCodeCharacters[indexOfEnglishLetter]

  // Test 4: refactor to separate morse code characters with spaces when converting english words
  var englishToLetters = english.toUpperCase().split("");
  var morseCodeTranslation = "";

  englishToLetters.forEach(letter => {
    var indexOfLetter = englishLetters.indexOf(letter);
    morseCodeTranslation += morseCodeCharacters[indexOfLetter] + " ";
  });
  return morseCodeTranslation.trim();

  // Test 5: refactor to put 3 spaces between morse code characters to designate spaces between words
  var englishToLetters = english.toUpperCase().split("");
  var morseCodeTranslation = "";

  englishToLetters.forEach(letter => {
    if(letter === " "){
      morseCodeTranslation += "  ";
    } else {
      var indexOfLetter = englishLetters.indexOf(letter);
      morseCodeTranslation += morseCodeCharacters[indexOfLetter] + " ";
    }
  });
  return morseCodeTranslation.trim();
}

const translateMorseCodeToEnglish = (morseCode) => {

}

module.exports = {
  translateEnglishToMorseCode,
  translateMorseCodeToEnglish
}
