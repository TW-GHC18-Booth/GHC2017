require_relative '../app/morse_code_translator'

describe MorseCodeTranslator do
  let (:translator) { MorseCodeTranslator.new }

  describe '#translateEnglishToMorseCode' do
    it 'translates single letter A' do
      translation = translator.translateEnglishToMorseCode("A")
      expect(translation).to eq(".-")
    end

    xit 'translates single letter lowercase a' do
      translation = translator.translateEnglishToMorseCode("a")
      expect(translation).to eq(".-")
    end

    xit 'translates single letter B' do
      translation = translator.translateEnglishToMorseCode("B")
      expect(translation).to eq("-...")
    end

    xit 'translates word' do
      translation = translator.translateEnglishToMorseCode("hello")
      expect(translation).to eq(".... . .-.. .-.. ---")
    end

    xit 'translate sentence' do
      translation = translator.translateEnglishToMorseCode("Hello Grace Hopper")
      expect(translation).to eq(".... . .-.. .-.. ---   --. .-. .- -.-. .   .... --- .--. .--. . .-.")
    end

    xit 'handles unknown characters' do
      translation = translator.translateEnglishToMorseCode("~`")
      expect(translation).to eq("Untranslatable characters")
    end
  end


  # optional
  xdescribe '#translateMorseCodeToEnglish' do
    it 'translates single letter A' do
      translation = translator.translateMorseCodeToEnglish(".-")
      expect(translation).to eq("A")
    end

    it 'translates single letter B' do
      translation = translator.translateMorseCodeToEnglish("-...")
      expect(translation).to eq("B")
    end

    it 'translates word' do
      translation = translator.translateMorseCodeToEnglish(".... . .-.. .-.. ---")
      expect(translation).to eq("HELLO")
    end

    it 'translate sentence' do
      translation = translator.translateMorseCodeToEnglish(".... . .-.. .-.. ---   --. .-. .- -.-. .   .... --- .--. .--. . .-.")
      expect(translation).to eq("HELLO GRACE HOPPER")
    end

    it 'handles unknown characters' do
      translation = translator.translateMorseCodeToEnglish("~`")
      expect(translation).to eq("Untranslatable characters")
    end
  end
end
