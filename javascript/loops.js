//There are  different kind of loops in javascript :

// For loop : often use when you know how many time you want to interate
// iterate : to iterate mean to perform repeatedly 

// //syntax :
// for (initialization; condition, iteration){
//     //code to be executed
// }

// let x = "";
// for (let i = 1; i < 4; i++) {
//     x += "This number is " + i + "<br>";
//     document.getElementById("testing").innerHTML = x;
// }

//The initialization value can be optional (you don't have to use it) but you need to initialize it else where
// let p = "", o = 1;
// for(; o < 4; o ++){
//     p += "This number is " + o + "<br>"
//     document.getElementById("testing").innerHTML = p;
//     console.log("This is " + o) 
// }

//The condition can also be optional 
// for(let i = 0; ; i++){
//     console.log(`Iteration ${i}`);
// }



//The increment expression can also be optinal which mean you don't have to use it inside the bracket of the for loop statement 
//But you still need to our variable to be incremented somewhere inside of our for loop block 
// let x = "", i = 1;
// for (; i < 4;) {
//     x += "This number is " + i + "<br>";
//     document.getElementById("testing").innerHTML = x
//     console.log("This is " + i);
//     i++;
// }



//While loop statement : 
// let female = true;
// while(female){
//     console.log("Female"); // this code will crash your browser 
// }

// let i = 1;
// while (i < 4) {
//     console.log(`this number is ${i}`)
//     i++;  // don't forget to add increment here otherwise the code will run forver and will crash your browser
// }



//Do while loop
// let i = 1, x = "";
//   do {
//     x += "This number is " + i + "<br>";
//     console.log(`This number is ${i}`);
//     i++;
//   } while (i < 4);


//for in loop : is a kind of loop that is use to interate over the properties of an object

//basic structure:
// const object = {fNameL:'John',lName:"Cena",age:30};
// for (var y in object){
//     //Code to be executed 
// }


//Example : let say we have an object with some properties
// const person = {
//     name: 'Jonh',
//     age: 90,
//     occupation: 'Love alone',
// }

// for(let property in person){ //the in keyword is the keyword that indicate that you are going to loop through the properties of an object
//     console.log(`${property}: ${person[property]}`);
// }
//in simple term for...in help us go through each 'thing'(property) in a collection(object) and do something with it.









