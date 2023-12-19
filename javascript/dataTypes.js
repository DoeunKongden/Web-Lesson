
//Data type in javascript are devided in two main categories 
//Which are primitive and non-primitive

// Primitive Data type : is consider to be single and simple value 
// Non-Primitive Data type  : is consider to store more complex and multiple value.


//---------------------------------- Primitive Data Type ---------------------------------------------------//

// Number Data type
let num = 7;
let newNum = 7.2;
console.log("Type of Num Variable : ", typeof (num))
console.log("Type of newNum Variable : ", typeof (newNum))

// String Data Type
let favFood = "burger";
let favDrink = 'Coca';
console.log("Type of favFood Variable : ", typeof (favFood))

//Boolean Data type
var isStudent = false;

console.log(1 < 100)
console.log("Is student : ", isStudent)
// -> Boolean Data Type is mostly use for testing condition
// Here is an example of testing condiiton
var name = "kongden"
console.log("name :", name)
console.log(name == "kongden")


//BigInt Data Type
// Javascript Number data-type can not stored value that is greater than this number = 9007199254740991
// BigInt is 9007199254740992n
let bigNumber = BigInt("9007199254740991")
let bigIntNum = 9007199254740992n
console.log("type of bigNumber : ", typeof (bigNumber))
console.log("type of bigIntNum : ", typeof(bigIntNum))


//Undefined Data Type : is basically a variable that has not been assigned a value
var name1;
console.log("type of name variable : ", typeof (name1))

//Null Data Type : is for when we the programmer define the value as empty. Where as undefined is reserved for
//Default data type when an variable is not initialize.
var name = null
console.log("This is name when null ", name)


//------------------------- Non-Primitive Data Type ----------------------------------//

//Array Data Type : in javascript an array is basically a list of different values that can be access by index
let myList = ['kongden', true, 21, 400.50]
console.log("this is list : ", myList)
//Accesing array value
console.log("Each Value by index : ", myList[1])

//Function Data Type
let functionValue = function () {
    console.log("Hello 1")
}

functionValue()

//Object data type : similar to array but we use curly bracket instead of square brackets
//Object Data Type is stored by name-value pair
let myObject = {
    name: "Kongden",
    age: 21,
    old: false,
}
console.log("This is object : ", myObject)

//Accessing object value
console.log("This is each object value : ", myObject.name)





//Declaring Variable by using the new keyword
let carname = new String;
let x1 = new Number;
let y1 = new Boolean;
let cars = new Array;
let person = new Object;


console.log("type of : ", typeof(carname),typeof(x1,y1,cars,person))



//------------------------------- Task --------------------------------------------------------//
/*
1- Create a string variable call favDrink and assign a value to it
2- Create a number variable call favNum and assign a value to it
3- Create a function block call myFavs that console log your answer and don't forget to invoke my fav function
4- Create a object call person with name set to 'your_name' and age set to your age.
*/
//-------------------------------------------------------------------------------------------//