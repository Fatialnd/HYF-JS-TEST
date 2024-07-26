/**
 * This question is all about writing tests so the roles are reversed! We have provided a function and it is up to you to write the tests.
 * The function comment gives you an idea of what the function expects and what it should return.
 */

/**
 * This function takes an array of primitive values (strings, numbers, etc) and counts the number of times the second element is in the array.
 *
 * P.S. yes, this is pretty much the some function, but it is for testing purposes!
 *
 * DO NOT EDIT THE FUNCTION, YOU ONLY WRITE THE TESTS
 */
const countElements = (arr = [], element) => {
  if (!Array.isArray(arr)) {
    return 0;
  }

  let counter = 0;

  arr.forEach((item) => {
    if (item === element) {
      counter = counter + 1;
    }
  });

  return counter;
};

/**
 * TEST CODE: ONLY EDIT THIS
 * We've provided some syntax for you but feel free to change it to your liking! It should follow jest syntax though!
 *
 * To run the test make sure you have done an `npm install` command in your terminal and then run `npm t` or `npm run test`
 */
describe("countElements", () => {
  it("should return 0 for an empty array", () => {
    expect(countElements([], 1)).toBe(0);
  });

  it("should handle `undefined` and `null` correctly", () => {
    expect(countElements([undefined, undefined], undefined)).toBe(2);
    expect(countElements([null, null], null)).toBe(2);
  });

  it("should count occurrences of a string in an array", () => {
    expect(countElements(["a", "b", "a"], "a")).toBe(2);
  });

  it("should count occurrences of a number in an array", () => {
    expect(countElements([1, 2, 3, 2, 2], 2)).toBe(3);
  });

  it("should return 0 if the element is not in the array", () => {
    expect(countElements([1, 2, 3], 4)).toBe(0);
  });

  it("should return 0 for non-array input", () => {
    expect(countElements(null, 1)).toBe(0);
    expect(countElements({}, 1)).toBe(0);
    expect(countElements("string", 1)).toBe(0);
  });
});
