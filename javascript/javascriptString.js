

//String object : is used for storing and manipulating text
var carname = "GTR 350s"

//Accessing each character with it position(indexes);
console.log(carname[2])

//Using the build in property of the string object (length)
var txt = "hello world!";
console.log(txt.length)
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(txt.length)

//using indexOf searching a string within a string
//indexOf start searching from the beginning of the string
var str="Hello world, welcome to the universe.";
var n=str.indexOf("welcome");
console.log(n) //the indexOf will return -1 if the specific string is not found

//lastIndexOf method start searching from the end of the string rather than the beginning 
console.log(str.lastIndexOf("the"))



//match : use for searching for a matching content in a string
var string = "hi hi ho ho"
console.log(string.match('ho'))



//replace : replace a specified value with another value in a string
var replaced = string.replace("hi","bro")
console.log(replaced)



//charAt : access a single character in a string
var charat = string.charAt(4)
console.log(charat)



//split : is use when want to define our string into a substring or into array 
var text = "h,o,l,p"
//if no seperator is pass then it will just return all the string as an array
const arr0 = text.split(',',2) //the split method will take a seperator and the second parameter is the limit of how many string we want to return when split
console.log(arr0) 



//substring and slice : extract a section of a string and return it as a new string 
// string.slice(indexStart) string.subString(indexStart)
var text1 = "The morning is upon us";

console.log(text1.slice(12)) //is upon us
console.log(text1.substring(12)) //is upon us

//If we pass in negative number it will count from -1 from the end of the string to the position of the negative number that we have passed
console.log(text1.slice(-11))//is upon us 
//But for substring if the startIndex is a negative number it will behave like a 0 so it will start from 0
console.log(text1.substring(-11)) //The morning is upon us

console.log(text1.slice(23)) //return '' empty string 
console.log(text1.substring(23)) // return '' empty string

//Second parameter for substring and slice is indexEnd
console.log(text1.slice(13,16)) //the end index character won't be included so we are left with : 's u'
console.log(text1.substring(13,16)) // the endIndex character won't be included aswell 's u'

//using the startIndex greater than the endIndex
console.log(text1.slice(16,13)) //return '' empty string
console.log(text1.substring(16,13)) //return 's u' 

//using negative number as the start and end index
//If we use negative number the slice will go start counting the string backward from the end position to the start 
console.log(text1.slice(-8,-4)) //return 'upon ' the -4 position won't be included
console.log(text1.substring(-8,-4)) // substring doest not take negative number so it will treat the negative number as 0 and it will return '' empty string

//using negative number as the startIndex and positive number as the endIndex
console.log(text1.slice(-8,4)) //it will start counting reversin from the end positon and it will return '' empty string
console.log(text1.slice(-8,4)) //so substring will treat the negative number as 0 and count up to 4 and it will return //'The ' 


//using positive number for the startIndex and negative number for the endIndex
console.log(text1.slice(8,-4)) //count from 8 till the reverse position of -4 so it will return 'ing is upon'
console.log(text1.substring(8,-4)) //will treat the -4 as 0 so it will start from 8 and end at 0 //since 8 is greater than 0 it gonna swap the 2 indexes and it will 
//start counting of 0 to 8 instead //so it will return 'The morn'


//The search method : search is use to find a match between a regular expression and a string object
let textAgain = "The rain in SPAIN stays mainly in the plain";
let position = textAgain.search('ain'); //the search method will turn the ain into a regular express by using the regex object 
console.log(position)
let upperCase = textAgain.search(/AIN/) // this will only look for the upper case
let uppCaseSearch = textAgain.search(/AIN/i) //this will look for both uppercase and lowercase AIN

//when serach can't find the match between the regular expression and the string object it will return -1
let notFound = textAgain.search(/w/)


//FromCharCode : we use this method to get the string from the charcode

//FromCharCode and FromCodePoint
// String.fromCharCode(num)
// String.fromCodePoint(num)
const str = 'Ok 👍'; //the normal character is represented as the 16bit unit but the emoji represent by two 16bit unit
// console.log(str.fromCharCode(79)) //from charcode is deprecated no one uses it any more





