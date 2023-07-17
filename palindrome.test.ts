import { isPalindrome } from "./palindrome";

describe("Test Palindrome", () => {
  it("Retourne true si c'est un palindrome", () => {
    expect(isPalindrome("abba")).toBeTruthy();
  });
  it("Retourne false si ce n'est pas un palindrome", () => {
    expect(isPalindrome("abc")).toBeFalsy();
    expect(isPalindrome("ab")).toBeFalsy();
  });
  it("Retourne true si c'est un palindrome avec des espaces", () => {
    expect(isPalindrome("ab ba")).toBeTruthy();
  });
});
