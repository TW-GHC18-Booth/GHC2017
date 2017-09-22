# Grace Hopper Conference 2017 Coding Exercises

# Exercises

## General Notes
* Problems are given in Java, Ruby, and/or JavaScript
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
* Provided in Java and Ruby

## Queen Attack
* Implement a program that takes two queen positions on a chess board and determines if they can attach each other
* Source: http://exercism.io/exercises/java/queen-attack
* Queens can attack if they are in the same row (rank), column (file), or diagonal path
* Validate input positions
* Provided in Java and Ruby

## Test Invaders
* This is an app similar to Space Invaders
* Part of the app is already built, but there are some failing tests and some missing functionality
* Fix the failing tests and add more as you go
* This one is in a separate repo because it's forked from another repo
* https://github.com/sarah12345/TestInvaders
* Hints:
  * Follow the instructions in the repo
  * Look for failing js tests or TODO comments
  * Add more functionality, like giving the tank multiple lives, ending the game when it's destroyed, etc
  * Be careful with the Jasmine tests. Sometimes syntax errors will cause false success
* Provided in JavaScript only

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
