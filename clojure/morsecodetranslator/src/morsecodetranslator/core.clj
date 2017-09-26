(ns morsecodetranslator.core
  (:require [clojure.string :as s])
  (:gen-class))

(def eng-morse-map {"A" ".-"
                    "B" "-..."
                    "C" "-.-."
                    "D" "-.."
                    "E" "."
                    "F" "..-."
                    "G" "--."
                    "H" "...."
                    "I" ".."
                    "J" ".---"
                    "K" "-.-"
                    "L" ".-.."
                    "M" "--"
                    "N" "-."
                    "O" "---"
                    "P" ".--."
                    "Q" "--.-"
                    "R" ".-."
                    "S" "..."
                    "T" "-"
                    "U" "..-"
                    "V" "...-"
                    "W" ".--"
                    "X" "-..-"
                    "Y" "-.--"
                    "Z" "--.."
                    "1" ".----"
                    "2" "..---"
                    "3" "...--"
                    "4" "....-"
                    "5" "....."
                    "6" "-...."
                    "7" "--..."
                    "8" "---.."
                    "9" "----."
                    "0" "-----"
                    " " "   "})

(defn translate-english-morse [english]
  )


(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
