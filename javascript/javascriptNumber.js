//Number object in javascript
//isNaN : represebt Not-A-Number if the value we pass into the parameter is a number it will return false 
// and if it is not  a number it will return true
var x = 1000 / "Apple";
console.log(isNaN(x),x) // returns true
var y = 100 / "1000";
console.log(isNaN(y),y); // returns false


var x = 1000 / 0;	 
console.log(isNaN(x)); // returns false


//Primitive Values: In JavaScript, primitive values are basic data types that are immutable and directly hold a single, simple value.
//When i create a number using literal you are working with a primitive value.
var o = 1000;
var y = new Number(123);
console.log(typeof(o),typeof(y));

console.log("max :",Number.MAX_VALUE) //represent the maximum positive numeric value that can be represented in javascript
console.log("min :",Number.MIN_VALUE) //Represents the smallest positive numeric value greater than 0.


// Number.POSITIVE_INFINITY: Represents positive infinity.
// Number.NEGATIVE_INFINITY: Represents negative infinity.
console.log(Number.POSITIVE_INFINITY); // Outputs: Infinity
console.log(Number.NEGATIVE_INFINITY); // Outputs: -Infinity


//Represents "Not-a-Number," a special value indicating that an operation could not produce a valid result.
//For checking if the value is not a number or not 
console.log(Number.NaN); // Outputs: NaN



// Number.MAX_SAFE_INTEGER: Represents the maximum safe integer in JavaScript.
// Number.MIN_SAFE_INTEGER: Represents the minimum safe integer in JavaScript.
console.log(Number.MAX_SAFE_INTEGER); // Outputs: 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // Outputs: -9007199254740991

console.log(Number.constructor())
Number.prototype.number = 20;

const nNum = new Number()
console.log(nNum.number)


//Number Object Method
let myNumber = new Number(42.678)


//toExponential : format the numbers using exponential notation
let exponentialNumber = myNumber.toExponential(2);
console.log("toExponential: ",exponentialNumber)
console.log(typeof(exponentialNumber))


//toFixed : formats the number with a specified of decimal place
let fixedNumber = myNumber.toFixed(2);
console.log("toFixedNumber :",fixedNumber)

//toPrecision : format the number with
let precisionNumber = myNumber.toPrecision(3);
console.log("toPrecision : ",precisionNumber)

//toString : convert number to string
let stringNumber = myNumber.toString()
console.log("toString :",typeof(stringNumber),stringNumber)

//valueOf : return the primitive value of the number object
let valueOfNumber = myNumber.valueOf()
console.log("valueOf : ",valueOfNumber)

//isNaN : check if the value is not a number 
console.log("isNaN : ",isNaN(myNumber));

//isFinite : checks if the value is a finite number
//a finite number : is a real number that ijs not infinite. In other words it's a number that has a definite and non-infinite value.
//for example : integers like 1,2,0,-5 and decimal like 3.14
console.log("isFinite : ",isFinite(myNumber));

//toLocalString : return a string with a language-sensitive representation of the number 
let localString = myNumber.toLocaleString("ar-EG")
console.log("localString : ",localString)

let localeStringEN = myNumber.toLocaleString("en-US");
let localeStringDE = myNumber.toLocaleString("de-DE");
let localeStringFR = myNumber.toLocaleString("fr-FR");

console.log("English (en-US):", localeStringEN);
console.log("German (de-DE):", localeStringDE);
console.log("French (fr-FR):", localeStringFR);
