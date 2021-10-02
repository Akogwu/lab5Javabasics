/**
 * Get max value of two numbers
 * @param {number} number1 
 * @param {number} number2 
 * @returns 
 */
const max = (number1, number2) => {
    if (isNaN(number1) || isNaN(number2)) return "Only numbers are allowed";

    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
    //return (number1 > number2) ? number1 : number2;
}

console.log(max(10, 5));


/**
 * Get max of three numbers
 * @param {number} number1 
 * @param {number} number2 
 * @param {number} number3 
 * @returns 
 */
const maxOfThree = (number1, number2, number3) => {
    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) return "Only numbers are allowed";

    if ((number1 > number2) && (number1 > number3)) {
        return number1;
    } else if ((number2 > number1) && (number2 > number3)) {
        return number2;
    } else {
        return number3;
    }
}

console.log(maxOfThree(1, 11, 15));


/**
 * Boolean: true if char is vowel else false
 * @param {character} char 
 * @returns 
 */
const isVowel = (char) => {
    if (char.length > 1) return "please enter a single character";
    let vowel = "AEIOUY";
    if (vowel.includes("" + char.toUpperCase())) {
        return true
    }
    return false;
}

console.log(isVowel("I"));



/**
 * Sum array of numbers
 * @param {array:numberr} arr 
 * @returns 
 */
const sum = (arr) => {
    if (!Array.isArray(arr)) return "Enter an array of numbers";
    if (arr.length == 1) {
        return arr[0];
    } else {
        return arr.reduce((val1, val2) => val1 + val2);
    }
}

console.log("Sum array of numbers: " + sum([1, 2, 3, 4]));

/**
 * Multiply array elements of numbers
 * @param {array:number} arr 
 * @returns value
 */
const multiply = (arr) => {
    if (!Array.isArray(arr)) return "Enter an array of numbers";
    if (arr.length == 1) return arr[0];
    return arr.reduce((val1, val2) => val1 * val2);
}

console.log("Multiply array elements: " + multiply([1, 2, 3, 4]));


/**
 * Reverse a string
 * @param {String} str 
 * @returns 
 */
const reverse = (str) => {
    if (!(typeof str == 'string') || !str instanceof String) return "Please enter a string";
    const toArray = Array.from(str);
    let reversed = []
    toArray.map(c => reversed.unshift(c));
    return "" + reversed.join("");
}

console.log("Reversed string: " + reverse("jag testar"));


/**
 * Return length of the longest word in the array
 * @param {array:words} words 
 * @returns 
 */
const findLongestWord = (words) => {
    if (!Array.isArray(words)) return "Enter array of words";
    return words.reduce((word1, word2) => word1.length > word2.length ? word1.length : word2.length);

}

console.log("Length of the longest word: " + findLongestWord(["hello", "World", "Hi", "Emmanuel", "Akogwu Comfort"]));


/**
 * Return filtered array of words greater than I
 * @param {array:words} words 
 * @param {number:i} i 
 * @returns 
 */
const filterLongWords = (words, i) => {
    if (!Array.isArray(words)) return "Enter array of words";
    if (i.isNaN) return "i must be a number";
    return words.filter(word => word.length > i);
}

const result = findLongestWord(["hello", "World", "Hi", "Emmanuel", "Akogwu Comfort"], 4);
console.log(result);

console.log("Array of words longer than i: " + filterLongWords(["hello", "World", "Hi", "Emmanuel", "Akogwu Comfort"], 4))