'use strict';

/**
 * You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
 * @param {number} seconds
 * @returns {Date}
 *
 * @example
 *      31536000 -> 01.06.2021
 *      0 -> 01.06.2020
 *      86400 -> 02.06.2020
 */
function secondsToDate(seconds) {
 const startDate = new Date('2020-06-01T00:00:00.002020Z');
 const targetDate = new Date(startDate.getTime() + seconds * 1000);
 return targetDate;
}

//tests
console.log(secondsToDate(31536000)); // Output: Tue Jun 01 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(secondsToDate(0)); // Output: Mon Jun 01 2020 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(secondsToDate(86400)); // Output: Tue Jun 02 2020 00:00:00 GMT+0000 (Coordinated Universal Time)

/**
 * You must create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number
 * ! Numbers will always be below 1024 (not including 1024)
 * ! You are not able to use parseInt
 * @param {number} decimal
 * @return {string}
 *
 * @example
 *      5 -> "101"
 *      10 -> "1010"
 */
function toBase2Converter(decimal) {
 let binary = '';
    for (let i = 9; i >= 0; i--) {
        binary += (decimal >> i) & 1;
    }
    return binary.replace(/^0+(?=\d)/, '');
}
// Tests
console.log(toBase2Converter(5)); // Output: "101"
console.log(toBase2Converter(10)); // Output: "1010"
/**
 * You must create a function that takes two strings as arguments and returns the number of times the first string
 * is found in the text.
 * @param {string} substring
 * @param {string} text
 * @return {number}
 *
 * @example
 *      'a', 'test it' -> 0
 *      't', 'test it' -> 2
 *      'T', 'test it' -> 2
 */
function substringOccurrencesCounter(substring, text) {
const regex = new RegExp(substring, 'gi');
const matches = text.match(regex);
return matches ? matches.length : 0;
}
// Test cases
console.log(substringOccurrencesCounter('a', 'test it')); // Output: 0
console.log(substringOccurrencesCounter('t', 'test it')); // Output: 2
console.log(substringOccurrencesCounter('T', 'test it')); // Output: 2
/**
 * You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */
function repeatingLitters(string) {
let result = '';
    for (let i = 0; i < string.length; i++) {
        result += string[i] + string[i];
    }
    return result;
}

// Tests
console.log(repeatingLitters("Hello")); // Output: "HHeelloo"
console.log(repeatingLitters("Hello world")); // Output: "HHeelloo  wworrldd"

/**
 * You must write a function redundant that takes in a string str and returns a function that returns str.
 * ! Your function should return a function, not a string.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      const f1 = redundant("apple")
 *      f1() ➞ "apple"
 *
 *      const f2 = redundant("pear")
 *      f2() ➞ "pear"
 *
 *      const f3 = redundant("")
 *      f3() ➞ ""
 */
function redundant(str) {
 return function() {
        return str;
    };
}

// Tests
const f1 = redundant("apple");
console.log(f1()); // Output: "apple"

const f2 = redundant("pear");
console.log(f2()); // Output: "pear"

const f3 = redundant("");
console.log(f3()); // Output: ""

/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
function towerHanoi(disks) {
if (disks === 0) {
        return 0;
    } else {
        return Math.pow(2, disks) - 1;
    }
}

// Tests
console.log(towerHanoi(3)); // Output: 7
console.log(towerHanoi(4)); // Output: 15

/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {
const n = matrix1.length;
    const result = [];
    for (let i = 0; i < n; i++) {
        result[i] = [];
        for (let j = 0; j < n; j++) {
            let sum = 0;
            for (let k = 0; k < n; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

// Tests
const matrix1 = [[1, 2], [3, 4]];
const matrix2 = [[5, 6], [7, 8]];
console.log(matrixMultiplication(matrix1, matrix2)); // Output: [[19, 22], [43, 50]]

/**
 * Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello"
 */
function gather(str) {
    const collectedArgs = [str];

    const gatherFunction = (nextStr) => {
        collectedArgs.push(nextStr);
        return gatherFunction;
    };

    gatherFunction.order = (...order) => {
        const orderedArgs = [];
        order.forEach(index => {
            orderedArgs.push(collectedArgs[index]);
        });

        const orderFunction = (...args) => {
            args.forEach(arg => {
                orderedArgs.push(arg);
            });
            return orderFunction;
        };

        orderFunction.get = () => {
            return orderedArgs.join('');
        };

        return orderFunction;
    };

    return gatherFunction;
}

// Tests
console.log(gather("a")("b")("c").order(0)(1)(2).get()); // Output: "abc"
console.log(gather("a")("b")("c").order(2)(1)(0).get()); // Output: "cba"
console.log(gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()); // Output: "hello"
