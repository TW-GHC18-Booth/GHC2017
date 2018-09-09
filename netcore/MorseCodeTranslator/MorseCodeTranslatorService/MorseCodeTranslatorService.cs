using System;

namespace MorseCodeTranslator
{
    public class MorseCodeTranslatorService
    {
        private char[] ENGLISH_LETTERS = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' };
        private string[] MORSE_CODE_CHARACTERS = { ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----" };
        
        public string TranslateToMorseCode(string english)
        {
            string result = "";

            return result;
        }

        public string TranslateToEnglish(string morseCode)
        {
            throw new NotImplementedException("Please create a test first");
        }
    }
}
