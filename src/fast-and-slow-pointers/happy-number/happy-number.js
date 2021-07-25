/**
 * Splits a number into array of digits
 * @constructor
 * @param {number} number - number
 */
const splitNumber = (number) =>
  number
    .toString()
    .split("")
    .map((digit) => parseInt(digit, 10))

/**
 * Returns sum of numbers in an array
 * @constructor
 * @param {Array.<number>} number - number
 */
const sum = (numbers) => numbers.reduce((acc, number) => acc + number, 0)

/**
 * Returns sum of all digits squared of the input number
 * @constructor
 * @param {number} number - number
 */
const happySum = (number) =>
  sum(splitNumber(number).map((number) => number * number))

/**
 * Returns true if the input number is happy
 * (
 *   Any number will be called a happy number if,
 *   after repeatedly replacing it with a number equal to the sum of the square of all of its digits,
 *   leads us to number ‘1’
 * )
 * @constructor
 * @param {number} number - number
 */
const happyNumber = (number) => {
  let slow = number
  let fast = number

  while (true) {
    slow = happySum(slow)
    fast = happySum(happySum(fast))

    if (slow === fast) {
      break
    }
  }

  return slow === 1
}

module.exports = happyNumber
