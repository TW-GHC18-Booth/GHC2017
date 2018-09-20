const translator = require('../app/translator');

describe('translator', () => {

  describe('translateEnglishToMorseCode', () => {

    it('translates single letter A', () => {
      expect(translator.translateEnglishToMorseCode("A")).
      toEqual(".-");
    });

    it.skip('translates single letter lowercase a', () => {
      expect(translator.translateEnglishToMorseCode("a")).
      toEqual(".-");
    });

    it.skip('translates single letter B', () => {
      expect(translator.translateEnglishToMorseCode("B")).
      toEqual("-...");
    });

    it.skip('translates word', () => {
      expect(translator.translateEnglishToMorseCode("hello")).
      toEqual(".... . .-.. .-.. ---");
    });

    it.skip('translate sentence', () => {
      expect(translator.translateEnglishToMorseCode("Hello Grace Hopper")).
      toEqual(".... . .-.. .-.. ---   --. .-. .- -.-. .   .... --- .--. .--. . .-.");
    });

    it.skip('handles unknown characters', () => {
      expect(translator.translateEnglishToMorseCode("~`")).
        toThrow("Untranslatable characters");
    });

  });

  // optional
  describe('translateMorseCodeToEnglish', () => {
    
    it.skip('translates single letter A', () => {
      expect(translator.translateMorseCodeToEnglish(".-")).toEqual("A");
    });

    it.skip('translates single letter B', () => {
      expect(translator.translateMorseCodeToEnglish("-...")).toEqual("B");
    });

    it.skip('translates word', () => {
      expect(translator.translateMorseCodeToEnglish(".... . .-.. .-.. ---"))
      .toEqual("HELLO");
    });

    it.skip('translate sentence', () => {
      expect(translator.
        translateMorseCodeToEnglish(".... . .-.. .-.. ---   --. .-. .- -.-. .   .... --- .--. .--. . .-.")).
      toEqual("HELLO GRACE HOPPER");
    });

    it.skip('handles unknown characters', () => {
      expect(translator.translateMorseCodeToEnglish("~`")).
        toThrow("Untranslatable characters");
    });

  });

});
