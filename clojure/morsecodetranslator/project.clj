(defproject morsecodetranslator "0.1.0-SNAPSHOT"
  :description "Morsecode translator code kata"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]]
  :main ^:skip-aot morsecodetranslator.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
