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

    //defining a property 
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error('invalid location')
            }
            defaultLocation = value
        }

    }) //there are 3 argument to this method 


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

console.log('before setter :', circle.defaultLocation)
// circle.defaultLocation = {1,2};




//Create a StopWatch class and let it have one properties which is the duration and three method which are reset start stop
function StopWatch() {
    let duration = 0, startTime, endTime, running;

    this.start = function () {
        if (running) {
            throw new Error('Stopwatch is already running')
        } else {
            running = true;
            startTime = new Date();
        }

    }

    this.stop = function () {
        if (!running) {
            throw new Error('Stopwatch is not started.');
        } else {
            running = false;

            endTime = new Date();

            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

            duration += seconds


            console.log("Duration : ", duration)
        }
    }

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    })
}

//Encepsulation in javascript
//Encapsulation : is defined as the wrapping up of data under a single unit in our case is a class
//The javascript encapsulation is a process of binding the data with function acting on that data
class Student {
    constructor() {
        let name, marks;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getMarks() {
        return this.marks;
    }

    setMarks(marks) {
        this.marks = marks
    }
}


let stu = new Student()

stu.setName('kongden');
stu.setMarks(90);

console.log(`student : ${stu.getName()} got ${stu.getMarks()} in math`)


//Javascript inheritance 
class A {
    a = 100;
    display() {
        console.log(this.a)
    }
}

class B extends A { // now B become the child class of A class 
    b = 200;
    show() {
        console.log(this.b)
    }
}

bObject = new B();
bObject.display()
bObject.show()



//Method overriding concept 
class Bank {


    roi() {
        return 0;
    }
}

class AXIS extends Bank {

    roi() {
        return 10.5; //overriding the method roi in the parent class A
    }
}

class SBI extends Bank {

    roi() {
        return 12.5; //overriding the method roi in the parent class A
    }
}

sbi = new SBI();

console.log(sbi.roi())



//Using super keyword in inheritance 
class Animal {


    constructor(color) {
        this.color = color
    }


    showColor() {
        console.log(this.color)
    }
}


//In javascript class we can only defined methods and properties but we can't directly define variable using 
//the keyword like 'const' , 'let' , 'var' inside the class body.

//The reason for this is becauase the class bodie in javaScript are limited to method definitions only 
//Classes syntax intended to be a concise way to define constructor function and prototype methods only
//The only way to create class-level variable is by declaring them within the constructor.
class Dog extends Animal {

    constructor(color, food) {
        super(color);
        this.food = food
    }

    eating() {
        console.log("Eating", this.food)
    }

    // const functionExpresion = () => { //cannot use const or let or var in the class 

    // }

    display() {
        this.showColor();
        this.eating();
    }
}

d = new Dog("Black", "Pizza");
d.display()


//Prototyping in javascript
//Prototype is an object that is associated with every function and object by default
function student(){
    this.name = "john"
    this.gender = "male";
}

//this is useful when we want to later add new properties or method to our class
student.prototype.age = 35; //this will allow any object to have access to the age variable 

const stu1 = new student()
console.log("student name :", stu1.name)
console.log("student gender : ",stu1.gender)
stu1.age = 35

console.log("student age :",stu1.age)

const stu2 = new student()
console.log(stu2.gender,stu2.name,stu2.age)

//Creating one variable that will belong to all of the object is what a Prototype is


//Another example of prototyping 
class Employee {
    constructor(eid, ename) {
        this.id = eid;
        this.ename = ename;
    }
}

//adding variable to class by using prototype
Employee.prototype.salary = 5000;

//adding function to class by using prototype
Employee.prototype.display = function(){
    console.log(this.ename,this.id,this.salary)  //this function will be available for all the object instantiated from the class
}

const emp = new Employee(10, 'david');
emp.salary = 3000

// emp.ename,emp.id,emp.salary //as we can see we can asscess the salary property aswell 
console.log(emp.ename, emp.id, emp.salary)

const emp1 = new Employee(11,'jonh')
console.log(emp1.ename,emp1.id,emp1.salary)



//Javascript polymorphism 
//Polymorphism is the ability to createa a variable, a function or an object that has more than one form.
class Shape{
    draw(){
        return "I am a shape :)";
    }
}

class Square extends Shape{
    draw(){
        return "I am a square now :)";
    }
}


class Circle2 extends Shape{
    draw(){
        return "I am a circle :((";
    }
}

//creating 3 different object 
//This is also known as method overriding 
const s = new Shape()
console.log(s.draw())

const ss = new Square()
console.log(ss.draw())

const cir = new Circle2()
console.log(cir.draw())

