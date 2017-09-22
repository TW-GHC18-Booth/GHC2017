require('../app/translator');

describe('translator', () => {

  describe('translate_english_to_morse_code', () => {

    test('translates single letter A', () => {
      const translation = translate_english_to_morse_code("A");
      expect(translation).toEqual(".-");
    });

    test.skip('translates single letter lowercase a', () => {
      const translation = translate_english_to_morse_code("a");
      expect(translation).toEqual(".-");
    });

    test.skip('translates single letter B', () => {
      const translation = translate_english_to_morse_code("B");
      expect(translation).toEqual("-...");
    });

    test.skip('translates word', () => {
      const translation = translate_english_to_morse_code("hello");
      expect(translation).toEqual(".... . .-.. .-.. ---");
    });

    test.skip('translate sentence', () => {
      const translation = translate_english_to_morse_code("Hello Grace Hopper");
      expect(translation).toEqual(".... . .-.. .-.. ---   --. .-. .- -.-. .   .... --- .--. .--. . .-.");
    });

    test.skip('handles unknown characters', () => {
      expect(() => translate_english_to_morse_code("~`")).
        toThrow("Untranslatable characters");
    });

  });

  // optional
  describe('translate_morse_code_to_english', () => {
    test.skip('translates single letter A', () => {
      const translation = translate_morse_code_to_english(".-");
      expect(translation).toEqual("A");
    });

    test.skip('translates single letter B', () => {
      const translation = translate_morse_code_to_english("-...");
      expect(translation).toEqual("B");
    });

    test.skip('translates word', () => {
      const translation = translate_morse_code_to_english(".... . .-.. .-.. ---");
      expect(translation).toEqual("HELLO");
    });

    test.skip('translate sentence', () => {
      const translation = translate_morse_code_to_english(".... . .-.. .-.. ---   --. .-. .- -.-. .   .... --- .--. .--. . .-.");
      expect(translation).toEqual("HELLO GRACE HOPPER");
    });

    test.skip('handles unknown characters', () => {
      expect(() => translate_english_to_morse_code("~`")).
        toThrow("Untranslatable characters");
    });

  });

});
