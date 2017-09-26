(ns queensattack.core-test
  (:require [clojure.test :refer :all]
            [queensattack.core :refer :all]))

(deftest queens
  (testing "cannot attack on different rank and file"
    (is (= false (can-queens-attack [2 4] [6 6]))))
  (testing "can attack on same rank"
    (is (= true (can-queens-attack [2 4] [2 6]))))
  (testing "can attack on same file"
    (is (= true (can-queens-attack [4 5] [2 5]))))
  (testing "can attack on first diagonal"
    (is (= true (can-queens-attack [2 2] [0 4]))))
  (testing "can attack on second diagonal"
    (is (= true (can-queens-attack [2 2 ] [3 1]))))
  (testing "can attack on third diagonal"
    (is (= true (can-queens-attack [2 2] [1 1]))))
  (testing "can attack on fourth diagonal"
    (is (= true (can-queens-attack [2 2] [5 5]))))
  )



