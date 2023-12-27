
let myDate = new Date(2023, 0, 27, 12, 30, 0, 0);
console.log(myDate)


// new Date() // current date and time
// new Date(milliseconds) //milliseconds since 1970/01/01
// new Date(dateString)
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
var today = new Date()
var d1 = new Date("October 13, 1975 11:13:00")
var d2 = new Date(79,5,24)
var d3 = new Date(79,5,24,11,33,0)
console.log("today",today)
console.log("d1",d1)
console.log("d2",d2)
console.log("d3",d3)


//Initiating a date object to be 14 january 
let date = new Date( );
date.setFullYear(2010,0,14);
console.log(date)

//initiating date object to be 5 days into the future
var futureDate=new Date();
futureDate.setDate(myDate.getDate()+5);
console.log(futureDate)


//Properties of the  Date Object
console.log(Date.length) //return 7 

//Method of the Date Object
console.log("Date now",Date.now()) //return the number of milesecond from january 1 1970 until now 


const constDate = new Date()

//getDate Method :  Returns the day of the month (1-31) for the specified date according to local time.
console.log(constDate.getDate())

//getDay : return day of the week 0-6
console.log(constDate.getDay())

//getFullYear : return 4 digit years of the specific date according to our local time 
console.log(constDate.getFullYear())

//getHour : reutnr the 0-23 hour of the day according to our localTime
console.log(constDate.getHours())

//getMilliseconds : return the milliseconds 0-999
//getMinutes : return the minutes 0-59
//getSeconds : return the seconds 0-59
//getMonth : return the month 0-11

//getTime 
console.log("getTime",constDate.getTime()) //return value same as the Date.now() method


//setDate :
constDate.setDate(21)

//setHours
constDate.setHours(17);

//setFullYear
constDate.setFullYear(2022);

//setMillieseconds
constDate.setMilliseconds(0);

//setMinutes
constDate.setMinutes(30);

//setMonth
constDate.setMonth(5);

//setSecond
constDate.setSeconds(25);

//result of the setting above
console.log("result of the above setting",constDate)

//setTime
constDate.setTime(new Date().getTime() + 86400000);

console.log(constDate)