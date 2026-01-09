/***********************
 * DEFAULT PARAMETERS
 ***********************/
function employee(name, age, position = "na") {
    console.log("Employee Details:");
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Position:", position);
    console.log("--------------------");
}

employee("John", 30);
employee("Jane", 25, "Developer");


/***********************
 * REST OPERATOR
 ***********************/
function add(...numbers) {
    console.log("Numbers received:", numbers);
    console.log("Total count:", numbers.length);
    console.log("--------------------");
}

add(1, 2, 3, 4, 5);
add(10, 20);


/***********************
 * SPREAD OPERATOR
 ***********************/
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

let combinedNumbers = [...numbers1, ...numbers2];
console.log("Combined Array:", combinedNumbers);
console.log("--------------------");


/***********************
 * CLASS & OBJECT
 ***********************/
class Signup {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    greet() {
        console.log(`Hello world ${this.username}`);
    }
}

const user1 = new Signup("jayanth", 12345);
user1.greet();
console.log("--------------------");


/***********************
 * OBJECT & DESTRUCTURING
 ***********************/
const person = {
    name: "Alice",
    age: 28,
    city: "New York"
};

const { name, age } = person;

console.log("Destructured values:");
console.log("Name:", name);
console.log("Age:", age);
console.log("Type of person object:", typeof person);
console.log("--------------------");


/***********************
 * CLASS WITH METHODS
 ***********************/
class j {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
    }
}

const p1 = new j("jj", 35);
p1.greet();
console.log("--------------------");