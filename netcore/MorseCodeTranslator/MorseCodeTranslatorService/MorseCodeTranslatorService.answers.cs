using System;

namespace MorseCodeTranslator
{
    public class MorseCodeTranslatorServiceAnswers
    {
        private char[] ENGLISH_LETTERS = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ' };
        private string[] MORSE_CODE_CHARACTERS = { ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", " " };
        
        public string TranslateToMorseCode(string english)
        {
            // //Test #1 - translate "A"
            // string result = "";
            // if (english == "A") {
            //     result = ".-";
            // }
            // return result;

            // //Test #2 - refactor and translate "a"
            // string result = "";
            // string input = english.ToUpper();
            // if (input == "a") {
            //     result = ".-";
            // }
            // return result;

            // //Test #3 - refactor and translate "B"
            // string result = "";
            // char input = Convert.ToChar(english.ToUpper()); ;

            // int ind = Array.IndexOf(ENGLISH_LETTERS, input); // look up by array position
            // result = result + MORSE_CODE_CHARACTERS[ind];
            // return result;

            // //Test #4 - refactor and translate a word
            // string result = "";
            // string input = english.ToUpper();
            // char[] inputArr = input.ToCharArray();

            // for (int i = 0; i < inputArr.Length; i++)
            // {
            //     int ind = Array.IndexOf(ENGLISH_LETTERS, inputArr[i]); // look up by array position
            //     result = result + MORSE_CODE_CHARACTERS[ind] + " "; // put spaces between the morse code letters
            // }
            // return result.TrimEnd();

            // //Test #5 - refactor and translate a sentence
            //   no code changes, just add " " elements to the end of both lookup arrays

            //Test #6 - refactor and validate input
            string result = "";
            string input = english.ToUpper();
            char[] inputArr = input.ToCharArray();

            for (int i = 0; i < inputArr.Length; i++)
            {
                int ind = Array.IndexOf(ENGLISH_LETTERS, inputArr[i]); // look up by array position
                if (ind != -1) {
                    result = result + MORSE_CODE_CHARACTERS[ind] + " "; // put spaces between the morse code letters
                }
                else {
                    result = "Untranslatable characters";
                    break;
                }
            }
            return result.TrimEnd();
        }

        public string TranslateToEnglish(string morseCode)
        {
            throw new NotImplementedException("Please create a test first");
        }
    }
}
