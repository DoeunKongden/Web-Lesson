"use strict"

//Reference Error : variable is not define (common error in javascript)
// variable = "Den";
// console.log(variable)


//Syntax Error 
// Object..create();


//Type Error : can not re-assigned variable
// const name = "den";
// name = "joe";



const makeError = () => {
    try {
        const name = "Dave";
        name = "joe"
    } catch (err) { //the value inside the catch parameter is called a catchID but we can refer to as any name we want
        console.error(err) //this is the full property of the array
        console.error(err.name) //but we can also get the name of the err
        console.error(err.message) // and also the message 
        console.error(err.stack) // and also the stack of the error
    }
}

makeError()