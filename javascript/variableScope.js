//declare variable in multiple line
var gui = 'hi', i=90;

var x = 10,
    o = 'demo',
    p = true;

// console.log("value :   ", x)
// console.log("value 1 : ", o)
// console.log("value 2 : ", p)



// Deep dive into var, let and const 

//-------------------------- Var ---------------------------//

//Var is a function scope type of variable
//consider this whole page a function which mean that the var 
//is visible everywhere through the function
var x = 10;
if (true) {
    var varInsideBlockIf = "I'm visible everywhere !";
}
// console.log(varInsideBlockIf)

//==> Var allow re-declaration of the same varible within the same scope
var x = 20
// console.log(x)





//--------------------------- Let ------------------------------//
//Let is a block scope type of variable 
//A viriable declare with let is only visible within the block it is defined in including loops and conditional
// let y = 5;
// if (true) {
//     let letInsideBlockIf = "I'm only visible in this if block"
// }
// y = 6

// console.log(y)
//uncomment the code below will create an error
// console.log(letInsideBlockIf)

// ==> Let does not allow re-declaration of the same variable withtin the same scope
// let z = 10;
//uncomment the code below will cause an error 
// let z = 20;


//-------------------------- Const ----------------------------//
// Const is also a block scope variable like let 
// A variable declared with const must be assigned a value when declare 
// and variable declare with const can not be changed or reassigned later on into the execution

// const pi = 3.14
// pi = 22/7;

// if (true) {
//     console.log("pie : ", pi)
//     const pi2 = 4.13
// }
// console.log("pie 2 :", pi2) // this throw and error