import { AnagramsFinder } from "./domain/AnagramsFinder";
import { wordsToCheck } from "./domain/words-to-check";

const main = () => {
  const anagramFinder = new AnagramsFinder("documenting", wordsToCheck, 1);
  console.log({
    inputWord: anagramFinder.inputWord,
    wordsPerAnagram: anagramFinder.wordsPerAnagram,
    anagrams: anagramFinder.findAnagrams(),
  });
};

main();
