(ns clofun.core)

(defn get-paths [k] 
  "Get the list of current paths"  
 (clojure.string/split (.get (System/getenv) k) #";"))

(defn invalid-paths [p] 
  "Return list of invalide paths"
  (remove #(-> % java.io.File. .exists) p))

(defn get-env-vars []
 "Get environment variables"
 (keys (System/getenv)))

(defn validate-var [k]
  (let [ps (get-paths k)]
    [k (invalid-paths ps)]))
 
(defn generate-rand-hex [n]
  (apply str (repeatedly n (fn [] (-> (rand-int 15) Integer/toHexString .toUpperCase)))))

(defn slurp-bytes
  "Slurp the bytes from a slurpable thing"
  [x]
  (with-open [out (java.io.ByteArrayOutputStream.)]
    (clojure.java.io/copy (clojure.java.io/input-stream x) out)
    (.toByteArray out)))


(defn download-files 
  ([root-url file-names] (download-files root-url file-names ""))
  ([root-url file-names dest]
    (doseq [x file-names]
      (with-open [out (clojure.java.io/output-stream (clojure.java.io/file (str dest x)))]
        (.write out (slurp-bytes (str root-url x)))))))
     
  #_(download-files "http://ud-wcc.org/books/wsnbf/files/mobile/" (map #(str % ".jpg") (map #(format "%02d" %) (range 1 18))))

#_(pprint (file-seq (java.io.File. root-folder)))
(comment "KB:20191225
          So i have bunch of folders of m4b files but 4 of them do not and i didn't want to go through all 80 manually.
          file-seq can be slow! i run it on m entire c drive")
(def  root-folder "c:\\stwa\\.Trashes\\")
(def  folder? (memfn isDirectory))
(def  file? (memfn isFile))

(defn folders 
  "Get list of folders in a given folder. Defaults to a recursive session."
  [path]
    (filter folder? (file-seq (java.io.File. path))))

(defn files 
  "Get list of files in a given folder. Defaults to a recursive session."
  [path]
    (filter file? (file-seq (java.io.File. path))))

(defn file-ext
 "Get the file extension"
 [f] 
 (second (re-find #".*\.([^.]*)" (.getName f))))

(defn file-name 
 "Get the file name"
 [f] 
 (.getName f))

 (defn folder-path 
 "Get the folder path"
 [f] 
 (.getCanonicalPath f))

(defn folder-has? [f ext]  (not (nil? (and (folder? f) (some #(= ext (file-ext %)) (file-seq f))))))

(defn folderhas? [f ext] (when (folder? f) (pos? (count (filter #(= "m4b" (file-ext %)) (file-seq f))))))


(comment "KB20200110
          https://stackoverflow.com/questions/59672450/clojure-slice-a-2d-vector-vectically/59674158?noredirect=1#comment105519760_59674158
          answered a question on stackoverflow 
          learned 2 dumb things i can use nearly any character as a variable and I can use a vector as a function!")

(def data   [["2011-01-01" "2011" "01" "01"]
               ["1869-01-01" "1869" "01" "01"]
               ["1922-01-01" "1922" "01" "01"]
               ["1905-01-01" "1905" "01" "01"]])
(def ans ("2011" "1869" "1922" "1905"))

; using pipe underscore and dash as variables!
(defn f1 [d] (reduce  (fn [| [_ -]] (conj | -)) [] d))

; using pipe underscore and dash as variables!
(defn f2 [d] (map (fn [[_ -]] -) d))

; what i'd use in real life
(defn f3 [d r] (map #(nth % r) d))

; interesting one
(defn f4 [d] (map #(% 1) d))

;