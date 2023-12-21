"use strict"

//Reference Error : variable is not define (common error in javascript)
// variable = "Den";
// console.log(variable)


//Syntax Error 
// Object..create();


//Type Error : can not re-assigned variable
// const name = "den";
// name = "joe";



// const makeError = () => {
//     try {
//         const name = "Dave";
//         name = "joe"
//     } catch (err) { //the value inside the catch parameter is called a catchID but we can refer to as any name we want
//         console.error(err) //this is the full property of the array
//         console.error(err.name) //but we can also get the name of the err
//         console.error(err.message) // and also the message 
//         console.error(err.stack) // and also the stack of the error
//     }
// }
// makeError()


//Type of error
// // Syntax Error
// console.log("Hello, World"  // Missing closing parenthesis

// // Reference Error
// console.log(undefinedVariable);  // undefinedVariable is not defined

// // Type Error
// let number = 42;
// number.toUpperCase();  // toUpperCase is not a function for numbers

// // Runtime Error
// let object = null;
// console.log(object.property);  // Cannot read property 'property' of null


//Finally Statement : code in finally statement will always execute after the try code block is done executing
// try {
//     let a = 1, b = 3;
//     console.log("Total is : ", a + b);
// } catch (error) {
//     console.error("This causes an error.");
// }
// finally {
//     console.log("This is a finally block.")
// }





// let z = '20' - 2 + '90' // this will get a result of 1890 because of the `+` operator 
// the + operator can be use with a string and a number 
// if the + operator encounter the string first the operation will turn into concatenation 
// if it doesn't encounter the string first than it will be a normall substraction and addition 

// console.log(z)

//Throw statement  : 
function getRectArea(width, height) {
    try {
        if (isNaN(width) || isNaN(height)) {
            throw new Error("Parameter is not a number.")
        }
        document.getElementById("liter").innerHTML = width * height;
    }
    catch (e) {
        console.error(e);
    }
}

getRectArea('hello','19')





