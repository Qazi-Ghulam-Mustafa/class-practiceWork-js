
// var num= prompt("How much time i print table of 9");
// for(index=1; index<21; index++ ){
//     console.log(index*9)
// }


// this is Array and the index of this array is 6 and length of this array is 7 

// var continents = ["Asia", "Africa", "Europe", "Antartica", "North america", "South America", "Australia"];
// for(index=0 ; index < continents.length; index++ ){
//     console.log(continents[index])
// }



// Print deep and end from this nestedArray into console.
// const nestedArray = [
//     "Level1",
//     42,
//     true,
//     [
//         "Level2",
//         false,
//         99,
//         [
//             "Level3",
//             123,
//             true,
//             [
//                 "level4",
//                 "deep",
//                 false,
//                 777,
//                 [
//                     "Level5",
//                     1001,
//                     true,
//                     "end",
//                 ]
//             ]
//         ]

//     ]

// ]
// console.log(nestedArray[3][3][3][4][0], nestedArray[3][3][3][4][3]);

// var nestedArray2=[
//        "Mustafa","Moeez", "Ali",420,
//        [
//         tr
//        ]
// ]

// var OneDimensionalArray=[1,2,"js"]
// for()
// var twoArrayDimesionalArray=[
//     [],[],[]
// ]
// var ThreeDimesionalArray=[
//      [ [],[],[] ] 
// ]
// var FourDimensionalArray=[
//      [ [ [],[],[] ] ] 
// ]

// var arr=[
//      ["Mustafa"],["Abdullah"],["Sarim"]
// ]

// for(var i=0; i < arr.length; i++ ){
//      for(var j=0; j < arr [i].length; j++ );
//           console.log(arr[i],[j],[j]);
// }
// var name="mustafa"
// console.log(name)



// this is Two Dimensional array 
// let arr = [
//      [
//           ["Qazi"], ["Ghulam"], ["Mustafa"]
//      ]
// ]


// for (let i=0; i<arr.length; arr++){
//      for(let j=0; j < arr[i].length; j++){
//      for(let k=0; k< arr[i],[j],length; k++){
//      console.log(arr[0][0], arr[0][1], arr[0][2])
// }
// }
// }


// // This is three dimensional arrya
// let arr2 = [
//      [
//           [
//                ["Qazi"], ["Ghulam"], ["Mustafa"]
//           ]
//      ]
// ]
// console.log(arr2[0][0][0], arr2[0][0][1], arr2[0][0][2])


// Create a array of random numbers
//  find out the largest number from the given array   


// let arr = [25, 78, 34, 89, 26]
// let largestNum = []

// for (let i = 0; i < arr.length; i++) {
//      if (arr[i] > largestNum) {
//           largestNum = arr[i]
//      }
// }
// console.log(largestNum)


// create an array of a random numbers
// find out the largest number from the given array

// let arr1=[10,20,40,88,5]
// let smalletNum=0;
// for( let i = 0; i < arr1.length; i++ ){
//      if(arr1[i]< smalletNum){
//           smalletNum = arr1[i]
//      }
// }
// console.log(smalletNum)


// create an array of random num
// reverse the array num

// var num = [1, 2, 3, 4, 5]
// var reverse = []
// for (var i = num.length - 1; i >= 0; i--) {
//      console.log(num[i])
// }

// create an array of random numbers and find out the repeated number from an array


// var userInput = +prompt("Enter a number");
// var number = [1, 2, 1, 3, 1, 4, 3, 2, 5, 4, 6]
// var count = []
// for (var i = 0; i=number.length; i++ ){
//      if( userInput == number[i] ){
//              count = count + 1
//     }
// }
// console.log(count)


// revese your name

// var name = ["Mustafa"]
// for(var i = name.length ; i>=0; i--){
//   console.log(name[i])
// }

// Create an array of random numbers and calculate average of number

// var number=[5,10,15,20]
// var sum= 0
// for( var i=0; i< number.length; i++ ){
//      sum = sum+number[i]
// }
// console.log(sum/number.length)

// create an array of random numbers and make it double of each

// var num=[5,10,15,20]
// var double=0
// for( var i=0; i<num.length; i++){

// console.log(num[i]*2)
// }

// 27-sep-2025 class work
// Use array.splice() to remove the element at index 2 and return the update array
// var num=[10,20,30,40,50,60]
// num.splice(2,1);
// console.log(num)

// insert a number 4 at index 3 by array.splice method
// var num=[1,2,3,5]
// num.splice(3,0,4)
// console.log(num)

// Give an array ['a','b','c','d'] and replace the element 'b' with 'x' using array .splice(), and return the updated array
// var arr=['a','b','c','d']
// arr.splice(1,1,'x')
// console.log(arr)

// give an array [100, 200, 300, 400, 500] and copy first 4 element from an array1 and return in updated array 
// var num=[100, 200, 300, 400, 500]
// var num2=num.slice(0,4)
// console.log(num2)

// give an array [10,20,30,40,50] and  
// var num=[10,20,30,40,50]
// var num2=num.slice(2,5)
// console.log(num2)

// give an array [10,20,30,40,50] in a variable and use (array.splice) method and return 10,50 in updated array
// var num=[10,20,30,40,50]
// num.splice(1,3)
// console.log (num)

// Give two array num1=[1,2,3] and num2=[4,5,6] and use array.slice() method amd returm both array into one array
// var num1=[1,2,3]
// var num2=[4,5,6]
// var num3=num1.slice(0,3)+","+num2.slice(0,3)
// console.log(num3)

//  There is two method to solve this problem

// Give two array num1=[1,2,3] and num2=[4,5,6] and use array.slice() method amd returm both array into one array
// var num1=[1,2,3]
// var num2=[4,5,6]
// var num3=(num1.slice(0,3)).concat(num2.slice(0,3))
// console.log(num3)

// Given an arrray num=[1,2,3,4], use array.slice() to create a deep copy of the array and modify the copy without affecting the original array. add the number 5 at the end of the new array 
// var num=[1,2,3,4]
// num.slice(0,4)
// var num2=num.splice(4,0,5)
// console.log(num)

// Given an array num=[10,20,30,40,50] by using num.splice method remove first 2 numbers
// var num=[10,20,30,40,50]
// num.splice(0,2)
// console.log(num)

// Given an array num=[10,20,30,40,50], shuffle the array randomly using array .splice(). return the shuffled array
// var num=[10,20,30,40,50]
// num.splice(0,5,20,40,50,10,30)
// console.log(num)

// for Loops and nested for loops paractise

// **
// **
// var row = 2;
// var column = 2;
// for (var i = 0; i < row; i++) {
//     var star = "";
//     for (var j = 0; j < column; j++) {
//         star += "*"
//     }
//     console.log(star)
// }

// 123
// 123
// 123
// var row=3;
// var column=3;
// for(var i=0; i<row; i++){
//    var num=""
// for(var j=1; j<=column; j++){
// num+=j
// }
// console.log(num)
// }


// 123
// 456
// 789
// var row=3;
// var column=3;
// var num=1;
// for(var i=0; i<row; i++){
//    var star=""
// for(var j=1; j<=column; j++){
// star+=num
// num++     
// }
// console.log(star)
// }

// Console 3 6 9
// 12 15 18
// 21 24 27  
// var row=3;
// var column=3;
// var num=1;
// for(var i=0; i<row; i++){
//    var star=""
// for(var j=1; j<=column; j++){
// star+=num*3 + " "
// num++     
// }
// console.log(star)
// }

// Console 3 6 9
// 12 15 18
// 21 24 27
// 30 33 36
// var row=4;
// var column=3;
// var num=1;
// for(var i=0; i<row; i++){
//    var star=""
// for(var j=1; j<=column; j++){
//    star+=num*3 + " "
//    num++
// }
// console.log(star)
// }

// Console   *
//**   
//***
//****
// var row=4;
// var column=3;
// var num=1;
// for(var i=0; i<row; i++){
//    var star="*"
// for(var j=3; j<=column; j++){
//    star+=star
//    num++
// }
// console.log(star)
// }




// Mark sheet 



// for (var i = 0; i < 5; i++) {
//         for (var j = 0; j <= i; j++) {
//                 document.writeln("*");
//         }
//         document.writeln("<br/>")
// }


// var countNumber=0;
// const countAdd=()=>{
//         countNumber+1
//         console.log(countNumber)
// }
// var countNumber=0;
// const countMinus=()=>{
//         countNumber-1
//         console.log(countNumber)
// }


// New Work



function getInput() {
  var numb1 = prompt("Enter Number 1");
  var op = prompt("Enter Operator ");
  var numb2 = prompt("Enter Number 2 ");
  var checkNumb = checkInput(numb1, numb2); //check numbers input data sei 
  if (checkNumb == true) {
   var result = OperatorCheck(Number(numb1),Number(numb2),op) //operation
   if(result!=null){
    document.writeln("Number 1 : ",numb1)
    document.writeln("Number 2 : ",numb2)
    document.writeln(`Number 1Result : ${numb1}  ${op} ${numb2} : ${result}`)


   }
   else{
    alert("enter correct operator")
   }


  } else {
    alert("Please enter only number");
  }
}

function checkInput(a, b) {
  if (isNaN(a) || isNaN(b) || a == "" || b == "") {
    return false;
  } else {
    return true;
  }
}

function OperatorCheck(a, b, op) {
  if (op == "+") {
    return Add(a, b);
  } else if (op == "-") {
    return Sub(a, b);
  } else if (op == "*") {
    return Multiply(a, b);
  } else if (op == "/") {
    return Div(a, b);
  } else {
    return null;
  }
}

function Add(a, b) {
  return a + b;
}
function Sub(a, b) {
  return a - b;
}
function Multiply(a, b) {
  return a * b;
}
function Div(a, b) {
  return a / b;
}

getInput();


//Make a Mcqs test by object and array 

// var mcqsQuestions = [
//     {
//         Question: "Is Java Script Easy Or Difficult ?",
//         options: ["Yes", "no", "Maybe", "Very Difficult"],
//         answer: "b",
//     },
//     {
//         Question: "Is Html Easy or Difficult ?",
//         options: ["Yes", "no", "Maybe", "Very Difficult"],
//         answer: "a",
//     },
//     {
//         Question: ["Is Css easy Or Difficult"],
//         options: ["Yes", "no", "Maybe", "Very Difficult"],
//         answer: "b",
//     }
// ];
// var score = 0;

// function showQuiz() {
//     var countScore = 100 / mcqsQuestions.length;    // Count Dynamicaaly none Question Score
//     for (var i = 0; i < mcqsQuestions.length; i++) {
//         var userInput = prompt(`
//             Question ${i + 1}:${mcqsQuestions[i].Question}
//             a) ${mcqsQuestions[i].options[0]}
//             b) ${mcqsQuestions[i].options[1]}
//             c) ${mcqsQuestions[i].options[2]}
//             d) ${mcqsQuestions[i].options[3]}
//             `)
//         if (userInput.toLowerCase() == mcqsQuestions[i].answer) {
//             score = score + countScore
//         }
//     }
//     alert("Your Total Score Is " + score.toFixed(0))
// }
// showQuiz();


// function showOutput() {
//     for (var i = 0; i < mcqsQuestions.length; i++) {

//         document.writeln(`
          
// <div class="card" style="width:50%;margin:auto;margin-top:20px">

//   <div class="card-body">
//     <h5 class="card-title">Question No : ${i + 1}) ${mcqsQuestions[i].Question
//             }</h5>
//     <p class="card-text">
//      <ul>
//       <li>${mcqsQuestions[i].options[0]}</li>
//       <li>${mcqsQuestions[i].options[1]}</li>
//       <li>${mcqsQuestions[i].options[2]}</li>
//       <li>${mcqsQuestions[i].options[3]}</li>
//     </ul>
//      <h3>Correct Option : ${mcqsQuestions[i].answer}</h3>
//     <h3>your Option : ${answerOptions[i]}</h3>
//     </p>

//   </div>
// </div>
//      `);
//     }
// }

// showQuiz();



// class RailwayForm{
//     submit(){
//         alert(name +"This Form is Submitted")
//     }
//     cancel(){
//         alert(name +"This Form is Not Submitted")
//     }
//     fill(givenName){
//         this.name = givenName
//     }
// }
// let harry = new RailwayForm()
// harryForm.fill("Harry")
// let Mustafa = new RailwayForm()
// MustafaForm.fill("Harry")

// harry.submit();
// Mustafa.submit();
// Mustafa.cancel();