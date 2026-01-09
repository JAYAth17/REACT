console.log("Basic JavaScript Demo");

// Variables
let name = "Jayanth";
let age = 21;
let isStudent = true;

// Arithmetic
let a = 10;
let b = 5;
let sum = a + b;

// Condition
let result = age >= 18 ? "Adult" : "Minor";

// Loop
let numbers = "";
for (let i = 1; i <= 5; i++) {
    numbers += i + " ";
}

// Array
let fruits = ["Apple", "Banana", "Orange"];

// Object
let student = {
    name: name,
    age: age,
    status: isStudent
};


// Output
console.log("Button Clicked");
console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Sum:", sum);
console.log("Age Status:", result);
console.log("Loop Output:", numbers);
console.log("First Fruit:", fruits[0]);
console.log("Student Name:", student.name);