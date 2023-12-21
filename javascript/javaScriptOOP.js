//Creating an Object

//key note that every time we use an object literla javascript will treat that as 
// let x = {}
//javascript will treat that as let x = new Object();

//Object Literal : this is a simple way to define our object
//But we can also define our object using factory and constructor aswell 
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function () {
//         console.log('draw');
//     }
// }

// //accessing the member by using dot notation
// circle.draw()



// //using a factory function allow for to duplicate our object 
// //and does not need for us to edit the code again and again many time 
// function createCircle(radius) {
//     return {
//         radius: radius, //we can remove code noise when value has the same name as the key
//         draw: function () {
//             console.log('draw')
//         }
//     }
// }
// const ccircle = createCircle()



// //using constructor function to create an object
// function Circle(radius) {
//     this.radius = radius  //this keyword is basically a reference to the object that is executing this peasce of code
//     this.draw = function () {
//         console.log("draw")
//     }
// }
// const anotherCircle = new Circle(1) //the new operator key word will create an empty object



// //Every object in javascript has a property call constructor and that references the function 
// //that was use to construct or create that object
// anotherCircle.constructor()


//In javascript we have a few other build in constructor 

//for example :
// new String() //but quite often we use string literal '', ``, ""
// new Boolean() // but we dont use the constructor we often use true or false
// new Number() // but we dont use the constructor we use number literal like 1 , 2.3
// //With constructor it make our code more complicated so most of the time we use litral



//Function in javascript are object
// const Circle1 = new Function('radius', `
// this.radius = radius 
// this.draw = function(){
//     console.log("draw")
// }
// `)

// const cirlce1 = new Circle1(1) 

// Circle.call({},1) 



//Abstraction in Javascript
//Abstraction  : hide detail and complexity of our properties and method and show only the essential property and method 
//private property and public property in javascript
function Circle(radius) {
    let color = 'red'; //this is a local variable of our function (this mean that we are hiding certain member from the outside)
    this.radius = radius;
    let defaultLocation = {
        x: 0,
        y: 0
    };

    //Getter
    this.getDefaultLocation = function () {
        return defaultLocation;
    }


    let computeOptimumLocation = function (factor) {
        this.computeOptimumLocation

        console.log('draw')
    }

    this.draw = function () {
        computeOptimumLocation(0.1);

        // defaultLocation
        // this.radius

        console.log('draw')
    }
}
//The reason we are using let inside our object is becuase of the scope that let have it will only be visible to the function itself
//while everything else we are using this keyword to assign those method and property to the 
//object which make it available to use in other scope
const circle = new Circle(10)

//Now we are try to access the member of the object and we will see that only draw and radius is available for us to use
// circle.draw



//Using getter and setter



