
/*
Function : is simple a peice of code that we can reuse over and over again in our code.
Function is  similar to variable but it is a whole chunk of code
Variable store value while funciton store a complete statement of code
*/


//declaring funciton
function logger() { // () -> is called parentasis 
    console.log('My name is : Kongden'); // {} -> curly brace are use to create the fuction body
}
logger()
logger()



//usually when we write function we can also pass data into funtion 
// and funtino can also return data as well that we can use for something else in a program
// make sure to choose descriptive function name so we know what the function do
function fruitProcessor(apple, oranges) { //apple and orange represent the input data of the function
    const juice = `Juice with ${apple} apple and ${oranges} oranges`
    return juice;
}

const savedFunction = fruitProcessor(5, 10)
console.log(savedFunction)

const anotherSaved = fruitProcessor(3, 4)
console.log(anotherSaved)



// Function Declaration VS Function Expression
//functiuon declaration
//function declaration allow us to call the functio before it is define
calcAge(2001)
function calcAge(birthYear) {
    const currentYear = 2023

    return currentYear - birthYear
}
const age1 = calcAge(2002)
console.log(age1)



//function expression
//function expression does not allow us to call the functio before it is define
//a functino without a name is call an anonymous function
//expression produce value -> so this mean that we have assigned this below fucntion to a variable which will store a value
var calAge2 = function (birthYear) { // we write a function without a name and assigned it to a variable name 
    return 2023 - birthYear
}
const age2 = calAge2(1990)
console.log(age2)



//Arrow Function 
//Arrow function : is simply a special form of function expression that is shorter and faster to write
// var calAge3 = function (birthYear) {
//     return 2023 - birthYear
// }

//we need to store arrow function return value inside a variable
const calcAge3 = birthYear => 2023 - birthYear // this is simple for a one liner code that don't need parameter and only return a single value

const age3 = calcAge3(2002)

const yearUntilRetirement = birthYear => { // if we only have 1 parameter we dont neet parenthesis
    const age = 2023 - birthYear
    const retirement = 65 - age 
    return retirement
}

console.log(yearUntilRetirement(2002))

//arrow function with multiple parameter
const kosignRetirement = (birthYear,name) => {
    const age = 2023 - birthYear
    const retirement = 60 - age

    return `Mr.${name} will retire in ${retirement} year`
}

console.log(kosignRetirement(2003,'Kiminato'))




//Testing hoisted function expression
//function expression scope work like variable scope we have already learn
//
// myFunction()
var myFunction = function(){
    console.log('hello')
}
myFunction()

var myFunction = function(){
    console.log('bro')
}
myFunction()

let myOtherFunction = function(){
    console.log('yoyo')
}

myOtherFunction()

//Let cannot re-declare but can reassigned
myOtherFunction = function(){
    console.log('koko')
}

myOtherFunction()



//hoisting and scope of 

var myArrowFunction = () => {
    console.log('kolo')
}
myArrowFunction()

var myArrowFunction = () => {
    console.log('redeclared')
}

myArrowFunction()

myArrowFunction = () => {
    console.log('re-assigned')
}

myArrowFunction()


//Function Calling Other Function



