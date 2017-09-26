(ns morsecodetranslator.core-test
  (:require [clojure.test :refer :all]
            [morsecodetranslator.core :refer :all]))

(deftest morse
  (testing "single letter 'A' translation"
    (is (= ".-" (translate-english-morse "A"))))
  (testing "single lower case letter 'a' translation"
    (is (= ".-" (translate-english-morse "a"))))
  (testing "a word"
    (is (= ".... . .-.. .-.. ---" (translate-english-morse "hello"))))
  (testing "a sentence"
    (is (= ".... . .-.. .-.. ---   --. .-. .- -.-. .   .... --- .--. .--. . .-."
           (translate-english-morse "Hello Grace Hopper"))))
  (testing "handle unknown characters"
    (is (= "Untranslatable characters" (translate-english-morse "~12"))))

  )
