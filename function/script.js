// GET Student Data and Display in Table

// function studentdata(index) {
//     if (index == 1) {
//         document.writeln(` <table class="table table-dark">
//         <thead>
//             <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Roll Number</th>
//                 <th scope="col">Age</th>
//             </tr>
//         </thead>
//         <tbody>`)
//     }
//     var studentName = prompt(`Name of Student ${index}\n Enetr Your Name`);
//     var StudentRollNumber = +prompt(`Roll Number of Student ${index}\nEnter Your Roll Number`);
//     var studentAge = +prompt(`Age of Student ${index}\nEnter Your Age`);

//     if (studentName.length == 0) {
//         alert("Enter Your Name");
//     }
//     else if (isNaN(StudentRollNumber) || StudentRollNumber.length == 0) {
//         alert("Enter Your correct Student Roll Number");
//     }
//     else if (isNaN(studentAge) || studentAge.length == 0) {
//         alert("Enter Your Correct Age");
//     }
//     else {
//         document.writeln(`<tr>
//                 <th scope="row">${index}</th>
//                 <td>${studentName}</td>
//                 <td>${StudentRollNumber}</td>
//                 <td>${studentAge}</td>
//             </tr> `)
//     }

// }
// document.writeln(` </tbody>
//     </table>`)
// var inputData = +prompt("Enter how much student is there")
// for (var i = 1; i <= inputData; i++) {
//     studentdata(i);
// }

// // studentdata();


// // Traffic Light Functionality by functions

// function red() {
//     document.writeln(`<div class="card" style="width: 18rem;">
//   <img src="https://c8.alamy.com/zooms/9/79e000fa98a64febb16df2e5fbde1874/a0b5rn.jpg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Stop</h5>
//   </div>
// </div>`)
// }

// function yellow() {
//     document.writeln(`<div class="card" style="width: 18rem;">
//   <img src="https://img.freepik.com/premium-photo/yellow-traffic-lights_917664-5815.jpg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Ready</h5>
//   </div>
// </div>`)
// }

// function green() {
//     document.writeln(`<div class="card" style="width: 18rem;">
//   <img src="https://thumbs.dreamstime.com/b/green-traffic-light-10424868.jpg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Go!</h5>
//   </div>
// </div>`)
// }

// var userInput = prompt("Enter the Traffic Light Color (Red, Yellow, Green)").toLowerCase();
// if (
//     userInput != "Green " &&
//     userInput != "g" &&
//     userInput != "yellow" &&
//     userInput != "y" &&
//     userInput != "red" &&
//     userInput != "r"
// ) {
//     alert("Please enter a valid traffic light color: Red, Yellow, or Green.");
// } else if (userInput == "green" || userInput == "g") {
//     green();
// } else if (userInput == "yellow" || userInput == "y") {
//     yellow();
// } else if (userInput == "red" || userInput == "r") {
//     red();
// } 


// getTime Functionality  by javascript fuctions

// function getTime() {
//     var userInput=+prompt("Enter the time in 24-hour format (0-23):");
//     if (isNaN(userInput) || userInput < 0 || userInput > 23) {
//         alert("Please enter a valid time between 0 and 23.");
//         return;
//     }
//     var time = new Date().getHours();
//     if (userInput >= 0 && userInput < 12) {
//         alert("Good Morning!");
//     }  else if (userInput >= 12 && userInput < 18) { 
//         alert("Good Afternoon!");
//     } else {
//         alert("Good Evening!");
//     }
// }

// getTime();


// New 
function getInput() {
    var num1 = +prompt("Enter first number:");
    var num2 = +prompt("Enter second number:");
    var num3 = +prompt("Enter third number:");
    document.writeln("You entered: " + num1 + ", " + num2 + ", " + num3 + "<br>");
    return (num1 + num2 - num3);

}

var result = getInput()
document.writeln("The result is: " + result);
