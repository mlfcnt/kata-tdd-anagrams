import { AnagramsFinder } from "./AnagramsFinder";
import { wordsToCheck } from "./words-to-check";

describe("AnagramsFinder", () => {
  describe("Inputs", () => {
    describe("inputWord", () => {
      it("Default should be 'documenting'", () => {
        expect(new AnagramsFinder().inputWord).toBe("documenting");
      });
      it("Can be set", () => {
        expect(new AnagramsFinder("toto").inputWord).toBe("toto");
      });
    });

    describe("wordsToCheck", () => {
      it("Should have a default", () => {
        expect(new AnagramsFinder().wordsToCheck).toStrictEqual(wordsToCheck);
      });
      it("Can be set", () => {
        expect(new AnagramsFinder(null, ["haha"]).wordsToCheck).toStrictEqual([
          "haha",
        ]);
      });
    });

    describe("wordsPerAnagram", () => {
      it("Should have a default", () => {
        expect(new AnagramsFinder().wordsPerAnagram).toBe(2);
      });
      it("Can be set", () => {
        expect(new AnagramsFinder(null, null, 5).wordsPerAnagram).toBe(5);
      });
    });
  });
  describe("findAnagrams", () => {
    it("Should return 1 word anagrams", () => {
      expect(
        new AnagramsFinder("tom", ["mot", "mto", "yeh"], 1).findAnagrams()
      ).toStrictEqual(["mot", "mto"]);
    });
    it("Should return 2 words anagrams", () => {
      expect(
        new AnagramsFinder(
          "tommy",
          ["my", "mommy", "yeh", "boi"],
          1
        ).findAnagrams()
      ).toStrictEqual(["my mommy", "mommy my"]);
    });
  });
});
