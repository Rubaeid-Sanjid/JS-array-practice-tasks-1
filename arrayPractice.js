//1. Declare an array

const fruits = ["mango", "apple", "banana", "khejur", "cherry"];

console.log(fruits[3]);

fruits[2] = "jambura";

console.log(fruits);

console.log("======================================================================");

//2. Add or remove elements

const touristSpot = ["Saint Martin", "Kaptai", "Bandorban"];
console.log(touristSpot);

touristSpot.push("Bichanakandi");
console.log(touristSpot);

touristSpot.push("shada pathor", "shunamganj");
console.log(touristSpot);

touristSpot.pop();
console.log(touristSpot);

console.log("======================================================================");

//3. Checking Array Membership with ‘includes’

const books = ["Learn Networking", "Programming with C++", "Learn JavaScript", "DSA"];
console.log(books);

const book = books.includes("Learn Networking");

if(book){
    console.log("The book is present in array.");
}
else{
    console.log("The book is not present in array.")
}
console.log("======================================================================");

//4. Checking if it's an Array

const number = 9;
const msg = "let's go.";
const check = true;
const values = [2, 5, 8, 45, 4];

console.log(Array.isArray(number));
console.log(Array.isArray(msg));
console.log(Array.isArray(values));
console.log(Array.isArray(check));

console.log("======================================================================");

//5. Combining Arrays

const numbers = [23, 34, 2, 9, 44];
const names = ["Uttara", "Mirpur", "300ft", "Purbachal", "Airport"];

console.log(numbers);
console.log(names);

const combined = numbers.concat(names);
console.log(combined);