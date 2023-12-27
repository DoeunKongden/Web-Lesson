//setTimeOut : will run a fucntion after a delay of specific time we have set

//The sub function will be execute in 3 second
// setTimeout(function sub(name) { //take in 2 argument : first the function we want to execute and second is the amount of time
//     console.log(`I'm ${name}`)
// }, 3000, 'John Cena');


//Referencing a function
// function greeting(name) {
//     console.log(`Hi my name is ${name}`)
// }
// setTimeout(() => {
//     greeting('Kongden')
// }, 2000);



//Using clear timeout method
// let timer = setTimeout(greeting, 3000, 'Kiminato')

//when we use this nothing will be log into the console
//this is becasue we are storing the timer of 3000ms into the variable timer 
//and we are clearing the timer before the 3000 second could start
// clearTimeout(timer); //

//creating a clear timer function
// const clear = () => {
//     clearTimeout(timer)
//     console.log('Clear Time out stop the timer')
// }

// const btn = document.getElementById('btn').addEventListener('click', clear)



//setInterval & clearInterval
//setInterval : will repeat the function over and over again for specify amount of time 

// function subscribe(channel) {
//     console.log(`Sa rab pa cribe : ${channel}`);
// }

// let timer2 = setInterval(subscribe, 3000, 'KonKhmer')

// const clear2 = () => {
//     clearInterval(timer2);
//     console.log(`clearInterval stopped the timer`);
// }

// const btn2 = document.getElementById('btn2').addEventListener('click', clear2)
const timee = document.getElementById('demo');
const btnStop = document.getElementById('stopfunction');
let myTime = setInterval(myTimer, 1000); 

function myTimer() {
    let d = new Date();
    let t = d.toLocaleTimeString();
    timee.innerHTML = t;
}

btnStop.addEventListener('click', function() {
    clearInterval(myTime); // Wrap clearInterval in a function
});





/*

Practice

1. Use the relevant timing event to display "My name is ${name}" after a delay of 4 second in the console

2. Change your code to log the same phrase every second in the console and this time use the function as a reference

3. Log the numbers 1-10 in the console, with space of 1 second in between each number. 
Create a function called count with parameters start and end, think about how you would increment the number by one 
and how you would check to see if the number is more than 10, so you know when to stop;

*/
























//1. and 2.
// function myName(name){
//     console.log(`My name is ${name}`)
// }
// setTimeout(myName,4000,'Kongden')
// setInterval(myName,1000,'John Cena')

//3.
// function count(start, end) {
//     let timer = setInterval(() => {
//         console.log(start)

//         if (start == end) {
//             clearInterval(timer)
//         } else {
//             start++
//         }
//     }, 1000)
// }

// count(0, 10)