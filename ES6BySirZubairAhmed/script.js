// Es6 task by sir zubair
// var=>redclare,global scope ,update
// let=> no redclare,block scope{}=>function,if else,update
// const => no redclare ,block scope,update no

// departement =>iT

// var a = 10
// var a ="test"

// let b = 10
// let b = "test"

// const a =23=> function=>if.else
// const a =45

// const b =23

// const a =23 fixed ,no update
// a=34

// arrow
// tenary op
// swictch,case{},if else{}=>block
// function{

// arrow => function => input =>length
// smit
// sdhjfhjsdfsjdhfsdjfsdjhsd

// arrow function
// es5
// function add(a,b){
//     return a+b
// }
// es6
// let addFunction=(a,b)=>{
//     return a+b
// }

// let input = document.getElementById("input");
// let length= document.getElementById("length")
// let checklength = () => {

//     if(input.value.length>10){
//         input.value = input.value.slice(0,10)
//     }
//       length.innerText = `Input length : ${input.value.length}`

// };

// input.addEventListener("input", checklength);

// function abc(){}
// let abc=()=>{}

// number => 0,

// let array = ["asad", "ali", "omer", "smit"];
// var input = "asad";
// switch (input.toLowerCase()) {
//   case "asad":
//     console.log("asad is coming");
//     break;
//   case "ali":
//     console.log("ali is coming");
//     break;
//   case "smit":
//     console.log("ali is coming");
//     break;
//   default:
//     console.log("user is coming");
// }

// promise=>instantce=>memory location =>constructor =>new keyword
// resolve=>.then,reject=>.catch
// call =>.then,.catch

// let p1 = new Promise((resolve, reject) => {
//   let a = 90;
//   if (a >= 100) {
//     resolve({message :"one cup is 50"});
//   }
//   else if (a ==90) {
//     resolve({message :"one cup is 50"});
//   } else {
//     reject({message :"nhi bhai chai nhi ha"});

//   }
// });

// p1.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// let btn = document.getElementById("btn");
// let count =0;

// let callFunc = () => {
//   count++;
//   if(count==5){
//     clearInterval(timer)

//   }
//  console.log("test")
// };

// let timer = setInterval(() => callFunc(), 2000);

// btn.addEventListener("click", () => {
//   clearInterval(timer)
// });

// input => 2 second =>
// jashd gasgd asgdgf ahsfdgasfgdfasgfdg asfgdfasgfdgasfgdf jsdasd

// let input = document.getElementById("input");
// let test = document.getElementById("test");
// let letterCount = document.getElementById("letterCount");
// let WordCount = document.getElementById("WordCount");
// let timerShow = document.getElementById("timerShow");

// let time = 1;

// let timerType;
// let timerSecond;
// let checkTyping = false;

// input.addEventListener("input", () => {
//   test.innerText = "Typing Test start";

//   console.log(input.value);
//   clearTimeout(timerType);
//   if(checkTyping==false){
//     startType()
//     checkTyping=true

//   }
//   timerType = setTimeout(() => {
//     console.log("time end");
//     input.setAttribute("readonly", true);
//     test.innerText = "Typing Test End";
//     letterCount.innerText = "Total letters : " + input.value.length;
//     WordCount.innerText =
//       "Total Words  : " + input.value.trim().split(" ").length;

//     clearInterval(timerSecond);
//   }, 2000);
// });

// let startType = () => {
//   timerSecond = setInterval(() => {
//     timerShow.innerText = `time : ${time} second`;
//     time = time+1;
//   }, 1000);
// };



//https://api.aladhan.com/v1/timingsByCity/22-02-2026?city=karachi&country=Pakistan&method=1


// var input = document.getElementById("input");

// input.addEventListener("input", ()=>{
//     console.log(input.value);
//     clearTimeout(timeOut);
// })
// var timeOut

// Array Map Method ES6

// let array = [3, 4, 2, 1, 5, 8, 3, 10]
// let newArray = array.map((value) => {
//     if (value >= 5) {
//         return value
//     } else {
//         return 0
//     }
// })
// console.log(newArray)

// let listItems = document.getElementById("listItems");
// let ul = [
//     { item: "Home", display: true },
//     { item: "About", display: true },
//     { item: "Contact", display: true },
//     { item: "Blog", display: false },
//     { item: "Services", display: true },
//     {item: "Careers", display: false }
// ]

// ul.map((value) => {
//     if(value.display){
//         let li = document.createElement("li");
//         li.innerText = value.item
//         listItems.appendChild(li)
//     }   
// })

// let array = [3, 2, 5, 6-3, 7-4, 1]
// let newArray = array.filter((value) => {
//     return value >= 5;
// });
// console.log(newArray);      