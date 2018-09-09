using System;
using Xunit;
using MorseCodeTranslator;

namespace MorseCodeTranslator.Tests
{
    public class TranslateToMorseCodeTests
    {
        // for pairing, uncomment the line below
        private MorseCodeTranslatorService _translator = new MorseCodeTranslatorService();

        // to run the tests with the solved problem, use the line below
        //private MorseCodeTranslatorServiceAnswers _translator = new MorseCodeTranslatorServiceAnswers();

        [Fact]
        public void ItShouldTranslateMorseCodeFor_A()
        {
            string result = _translator.TranslateToMorseCode("A");

            Assert.Equal(".-", result);
        }

        [Fact]
        public void ItShouldTranslateMorseCodeFor_a()
        {
            string result = _translator.TranslateToMorseCode("a");

            Assert.Equal(".-", result);
        }

        [Fact]
        public void ItShouldTranslateMorseCodeFor_B()
        {
            string result = _translator.TranslateToMorseCode("B");

            Assert.Equal("-...", result);
        }

        [Fact]
        public void ItShouldTranslateMorseCodeFor_word()
        {
            string result = _translator.TranslateToMorseCode("Hello");

            Assert.Equal(".... . .-.. .-.. ---", result);
        }
        
        [Fact]
        public void ItShouldTranslateMorseCodeFor_sentence()
        {
            string result = _translator.TranslateToMorseCode("Hello Grace Hopper");

            Assert.Equal(".... . .-.. .-.. ---   --. .-. .- -.-. .   .... --- .--. .--. . .-.", result);
        }

        [Fact]
        public void ItShouldHandleUnknownCharacters()
        {
            string result = _translator.TranslateToMorseCode("`~");

            Assert.Equal("Untranslatable characters", result);
        }

    }
}
