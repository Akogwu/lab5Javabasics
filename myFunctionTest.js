const myFunctionTest = (expectedValue, foundValue) => {

    if (expectedValue === foundValue) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILD. EXPECTED " + expectedValue + " found " + foundValue;
    }
};



console.log("TESTING");
//Test max of two

console.log("Expected output of max(3,5) is 5 " + myFunctionTest(5, max(3, 5)));
console.log("Expected output of maxOfThree(9,3,5) is 9 " + myFunctionTest(9, maxOfThree(9, 3, 5)));
console.log("Expected output of maxOfThree(9,3,5) is 9 " + myFunctionTest(4, maxOfThree(9, 3, 5)));

console.log("Expected output of isVowel('u') is true " + myFunctionTest(true, isVowel('u')));
console.log("Expected output of isVowel('J') is true " + myFunctionTest(true, isVowel('J')));

console.log("Expected output of sum([1,2,3,4]) is 10 " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("Expected output of multiply([1,2,3,4]) is 24 " + myFunctionTest(24, multiply([1, 2, 3, 4])));
console.log("Expected output of multiply([1,2,3,4]) is 24 " + myFunctionTest(12, multiply([1, 2, 3, 4])));


console.log("Expected output of reverse('jag testar') is ratset gaj " + myFunctionTest('ratset gaj', reverse('jag testar')));

console.log("Expected output of findLongestWord(['hello','World', 'Emmanuel']) is 8: " + myFunctionTest(8, findLongestWord(['hello', 'World', 'Emmanuel'])));

console.log("Expected output of filterLongWords(['hello', 'World', 'Hi', 'Emmanuel', 'Akogwu Comfort'], 4) is hello,World,Emmanuel,Akogwu Comfort " + myFunctionTest('hello,World,Emmanuel,Akogwu Comfort', filterLongWords(['hello', 'World', 'Hi', 'Emmanuel', 'Akogwu Comfort'], 4)));