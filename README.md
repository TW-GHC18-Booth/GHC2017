# Grace Hopper Conference 2018 Console App Coding Exercises

# Exercises

## General Notes
* Problems are given in Java, Ruby, .NET Core, and/or JavaScript
* Test cases are given to guide you along the way
* Classes are empty

## How to Work with the Exercises
* Run the first test (remove the ignore annotation or x)
  * Watch it fail
* Write just enough code to make it pass
* Run the test again
  * Watch it go green
* Refactor if needed
* Run the test again
  * It should still be green
* Repeat until all the tests are passing
* Add more tests as needed

## Morse Code Translator
* Implement a method to translate from English to Morse Code
* Optional: Implement a method to translate from Morse Code to English
* Morse Code Information: https://en.wikipedia.org/wiki/Morse_code
* Translation of characters are at the top of the file
* Separate letters with spaces; separate words with three spaces
* Handle unrecognized characters
* Provided in Java, Ruby, .NET Core, and Clojure

## Queen Attack
* Implement a program that takes two queen positions on a chess board and determines if they can attach each other
* Source: http://exercism.io/exercises/java/queen-attack
* Queens can attack if they are in the same row (rank), column (file), or diagonal path
* Validate input positions
* Provided in Java, Ruby, .NET Core, and Clojure

# Languages

## Java
Requirements:
* Java 8
* JUnit 4

## Ruby
Requirements:
* Ruby 2.4
* Rspec 3.5

Commands:
* rspec

## JavaScript
Requirements:
* Node 6
* Npm 5

Commands:
*  npm install
*  gulp jest

## Clojure
Requirements:
* Java 8
* leiningen

Commands:
lein test

## .NET Core
Requirements:
* .NET Core 2.1+

Commands:
* dotnet restore
* dotnet build
* dotnet test
