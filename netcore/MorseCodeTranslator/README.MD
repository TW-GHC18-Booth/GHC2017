
### Assumes that you have installed the .NET Core SDK

### To build
* clone the repository
* from Terminal, run

`dotnet restore`

`dotnet build`


### To test
* After a rebuild, set the MorseCodeTranslator.Tests directory as the current directory and run

`dotnet test --no-build -v n`

### Pairing exercise, and answers (no peeking!)
* Modify the code in the MorseCodeTranslatorService.cs file (in the MorseCodeTranslatorService directory) so that all the tests pass.
* Tests can be found in the 'TranslateToMorseCode.Tests.cs' file
* In that same directory, you will see a file named _MorseCodeTranslatorService.answers.cs_ with sample solutions for each of the tests.
* For extra fun, create a 'TranslateToEnglish.Tests.cs' file and write tests for the reverse translation.