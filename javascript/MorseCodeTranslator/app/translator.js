var englishLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
var morseCodeCharacters = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----" ];

const translateEnglishToMorseCode = (english) => {
  return morseCodeCharacters[englishLetters.indexOf(english.toUpperCase())]
}

const translateMorseCodeToEnglish = (morseCode) => {

}

module.exports = {
  translateEnglishToMorseCode,
  translateMorseCodeToEnglish
}
