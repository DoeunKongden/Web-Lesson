
//In javascript almost everything can be treated as an object 
//Even the prmitive data type such as number string booleans can also be treated as object

//The reason we can primitive data type as object in javascript becuase because of a concept known as “AutoBoxing”  or “Object Wrapper”. 
//When we attempt to access properties or method of a primitive data type, 
//JavaScript automatically converts that primitive value to an object of the corresponding type, allowing you to use object-like behavior with primitives.
// let myString = "hello"
// console.log(myString.toUpperCase()); //Here is the part where javascript automatically convert our primitive data type to object so we can use to method toUpperCase()
// console.log(typeof (myString))



//Object 
// var person = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     gender: 'male',
//     interests: ['music', 'skiing'],
//     bio: function () {
//         console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//     },
//     greeting: function () {
//         console.log('Hi! I\'m ' + this.name[0] + '.');
//     }
// }

// console.log(person.name)
// console.log(person.name[0])
// console.log(person.age)
// person.bio()
// person.greeting()


//Direct Instance 
// let person = new Object();	//Direct Instance
// person.firstname = 'Chris';
// person.lastname = 'Brown';
// person.bio = function () { console.log(`Username ${person.firstname}`) };


//Object Literal
// let person = {
//     firstname: 'Chris',	//Object literal
//     lastname: 'Brown',
//     bio: function () { console.log(`Username ${this.firstname} `) }
// }


// //Object Constructor
// function Person(firstname, lastname) {
//     this.firstName = firstname;
//     this.lastName = lastname;
//     this.bio = function () { console.log(`My Fullname is ${this.firstName} ${this.lastName}`) }
//     this.greeting = function() {console.log(`Hello I'm ${this.firstName}${this.lastName}`)}
// }
// // Create a Person object
// const temp = new Person("dara", "long"); 
// temp.bio();
// temp.greeting();

// //Another Example of how we can Create Object from using an Object Constructor 
// //Creating a function that have parameter
// function stud(name,age,studies){
//     this.name = name;
//     this.age = age;
//     this.studies = studies;
// }

// //Creating a variable and assigned it to the functino
// var student = new stud('Dane',21,'Computer Science')
// console.log(`My name is ${student.name}, I'm ${student.age} and I study ${student.studies}`)



//We can access the value of the object by using the Dot notation or the Bracket notation
var object = {
        firstname: 'Chris',	//Object literal
        lastname: 'Brown',
        age: 30,
        name: 'den',
        greeting: function () { console.log("hello") },
        bio: function () { console.log(`Username ${this.firstname} `) }
}

//using the dot notation
console.log(object.firstname)


//using the bracket notation
object["bio"]()


//Setting Object Memeber
object.age = 45;
object['name'] = 'Jonh Cena'

//Adding new properties to existing object
object.nationality = 'Cambodia',

        console.log("New Object :", object)


//Adding method in javascript object
// function Person(firstname, lastname) {
//         this.firstName = firstname;
//         this.lastName = lastname;

//         this.changeName = (newName) => {
//                 this.firstName = newName;
//                 console.log("New firstname is : ", newName);
//         };

//         this.bio = function () {
//                 console.log(`My fullname is ${this.firstName} ${this.lastName}`);
//         };

// }
// const temp = new Person("dara", "San");
// temp.changeName("Fuji");
// temp.bio();

//Using direct instance
let person = new Object();
person.bio = function () { console.log("function added with direct instance") }
person.bio() //function added with direct instance


//Using object litteral
let anotherPerson = {
        name: 'den'
}
anotherPerson.greeting = function () { console.log('added function with object litteral') }
anotherPerson.greeting() // added function with object litteral


//Using constructor function
function oneMorePerson() {
        isBoy: true
}
//instanciating new object from oneMorePerson constructor 
let mnekTt = new oneMorePerson()
mnekTt.hello = function () { console.log('added function by constructor function') } //added function by constructor function
mnekTt.hello() ////added function by constructor function





