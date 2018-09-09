class MorseCodeTranslatorAnswers

  ENGLISH_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ']
  MORSE_CODE_CHARACTERS = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", ' ']

  def translateEnglishToMorseCode(english)
    result = ""
    # #Test 1: translate the single uppercase A - simplest code to get the test to work
    # if english == "A" 
    #   result = ".-"
    # end

    # #Test 2: refactor to translate upper and lowercase A - simplest code to get the test to work
    # input = english.upcase
    # if input == "A"
    #   result = ".-"
    # end

    #Test 3: refactor to translate upper and lowercase A and B - lots of discussion here about 'simplest refactoring...'
    # input = english.upcase
    # if input == "A"
    #   result = ".-"
    # elseif input == "B"
    #   result = "-..."
    # end

    # #Test 4: refactor to translate 'hello' - do we just refactor altogether at this point for any word, or just make 'hello' work?
    # input = english.upcase.split(//)
    # for i in 0..(input.length - 1) do
    #   result = result + MORSE_CODE_CHARACTERS[ENGLISH_LETTERS.find_index(input[i])] + " " # put spaces between the morse code letters
    # end 
    # return result.rstrip!

    # #Test 5: refactor to translate a sentence - add a space ' ' to each of the array constants above, no code changes below
    # input = english.upcase.split(//)
    # for i in 0..(input.length - 1) do
    #   result = result + MORSE_CODE_CHARACTERS[ENGLISH_LETTERS.find_index(input[i])] + " " # put spaces between the morse code letters
    # end 
    # return result.rstrip!

    #Test 6: refactor to validate each character of input and handle invalid characters
    input = english.upcase.split(//)
    for i in 0..(input.length - 1) do

      if ENGLISH_LETTERS.find_index(input[i]).nil? then 
        return "Untranslatable characters"
        
      else
        result = result + MORSE_CODE_CHARACTERS[ENGLISH_LETTERS.find_index(input[i])] + " " # put spaces between the morse code letters

      end
    end 
    return result.rstrip!

  end

  def translateMorseCodeToEnglish(morse_code)
  end

end
