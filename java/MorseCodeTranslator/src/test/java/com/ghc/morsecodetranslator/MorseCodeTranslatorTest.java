package com.ghc.morsecodetranslator;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import static org.junit.Assert.*;

public class MorseCodeTranslatorTest {

    public static class EnglishToMorseCode {
        MorseCodeTranslator morseCodeTranslator;

        @Before
        public void setUp() throws Exception {
            morseCodeTranslator = new MorseCodeTranslator();
        }

        @Test
        public void translateSingleLetterUppercaseA() throws Exception {
            String translation = morseCodeTranslator.translateEnglishToMorseCode("A");
            assertEquals(".-", translation);
        }

        @Ignore
        @Test
        public void translateSingleLetterLowercaseA() throws Exception {
            String translation = morseCodeTranslator.translateEnglishToMorseCode("a");
            assertEquals(".-", translation);
        }

        @Ignore
        @Test
        public void translateSingleLetterB() throws Exception {
            String translation = morseCodeTranslator.translateEnglishToMorseCode("B");
            assertEquals("-...", translation);
        }

        @Ignore
        @Test
        public void translateWordHello() throws Exception {
            String translation = morseCodeTranslator.translateEnglishToMorseCode("Hello");
            assertEquals(".... . .-.. .-.. ---", translation);
        }

        @Ignore
        @Test
        public void translateSentenceHelloGraceHopper() throws Exception {
            String translation = morseCodeTranslator.translateEnglishToMorseCode("Hello Grace Hopper");
            assertEquals(".... . .-.. .-.. ---   --. .-. .- -.-. .   .... --- .--. .--. . .-.", translation);
        }

        @Ignore
        @Test
        public void translateUnknownCharacters() throws Exception {
            String translation = morseCodeTranslator.translateEnglishToMorseCode("~`");
            assertEquals("Untranslatable characters", translation);
        }

        @Ignore
        @Test
        public void translateWholeAlphabet() throws Exception {
            String translation = morseCodeTranslator.translateEnglishToMorseCode("abcdefghijklmnopqrstuvwzyz1234567890");
            assertEquals(".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- --.. -.-- --.. .---- ..--- ...-- ....- ..... -.... --... ---.. ----. -----", translation);
        }
    }

    // OPTIONAL
    public static class MorseCodeToEnglish {
        MorseCodeTranslator morseCodeTranslator;

        @Before
        public void setUp() throws Exception {
            morseCodeTranslator = new MorseCodeTranslator();
        }

        @Ignore
        @Test
        public void translateSingleLetterA() throws Exception {
            String translation = morseCodeTranslator.translateMorseCodeToEnglish(".-");
            assertEquals("A", translation);
        }

        @Ignore
        @Test
        public void translateSingleLetterB() throws Exception {
            String translation = morseCodeTranslator.translateMorseCodeToEnglish("-...");
            assertEquals("B", translation);
        }

        @Ignore
        @Test
        public void translateWordHello() throws Exception {
            String translation = morseCodeTranslator.translateMorseCodeToEnglish(".... . .-.. .-.. ---");
            assertEquals("HELLO", translation);
        }

        @Ignore
        @Test
        public void translateSentenceHelloGraceHopper() throws Exception {
            String translation = morseCodeTranslator.translateMorseCodeToEnglish(".... . .-.. .-.. ---   --. .-. .- -.-. .   .... --- .--. .--. . .-.");
            assertEquals("HELLO GRACE HOPPER", translation);
        }

        @Ignore
        @Test
        public void translateUnknownCharacters() throws Exception {
            String translation = morseCodeTranslator.translateMorseCodeToEnglish("~`");
            assertEquals("Untranslatable characters", translation);
        }
    }

}