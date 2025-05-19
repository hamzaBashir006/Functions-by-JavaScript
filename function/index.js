


// function myfunction(){
//     document.write("hello Mr Hamza");
// }

// myfunction();

// function  names(name, city, age){
//     document.write(`My name is ${name}&  leave in ${city}& i am ${age} years old`);
// }
// names('Hamza','Lahore','22');

// function checkmyage(age){
//     if(age >= 18){
//         document.write("you an older 18");
//     }
//     else if(age <= 10){
//         document.write("you an children");
//     }
//     else{
//         document.write("you an adult");
//     }
// }

// checkmyage(20);
// checkmyage(16);
// checkmyage(11);



//   const  addNumber = () =>{
//     let num1 = 5;
//     let num2 = 10;
//     let sum = num1 + num2;
//     document.write(`the sum of ${num1} and ${num2} is ${sum}`);
//   }
//   addNumber();


// function addNumbers(num1, num2) {
//     let sum = num1 + num2;
//     console.log(`The sum of ${num1} and ${num2} is ${sum}`);
// }

// // Call the function with arguments
// addNumbers(5, 10);



// function checkNumber(num) {
//     if (num > 0) {
//         console.log(`${num} is a positive number.`);
//     } else if (num < 0) {
//         console.log(`${num} is a negative number.`);
//     } else {
//         console.log(`The number is zero.`);
//     }
// }

// // Call the function with different values
// checkNumber(10);   // Output: 10 is a positive number.
// checkNumber(-5);   // Output: -5 is a negative number.
// checkNumber(0);    // Output: The number is zero.

function checkAge() {
    let age = prompt("Enter your age:");
    age = parseInt(age);

    if (age >= 18) {
        alert("You are an adult.");
    } else {
        alert("You are a minor.");
    }
}

// Call the function
checkAge();

