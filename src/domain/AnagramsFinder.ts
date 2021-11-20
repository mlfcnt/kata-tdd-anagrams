import { wordsToCheck as defaultWordsToCheck } from "./words-to-check";

export class AnagramsFinder {
  constructor(
    public inputWord = "documenting",
    public wordsToCheck = defaultWordsToCheck,
    public wordsPerAnagram = 2
  ) {}

  public findAnagrams() {
    let wordsToReturn: string[] = [];
    const inputLetters = this.inputWord.split("");
    for (const wordToCheck of this.wordsToCheck) {
      if (inputLetters.every((letter) => wordToCheck.includes(letter))) {
        wordsToReturn.push(wordToCheck);
      }
    }
    return wordsToReturn;
  }
}
