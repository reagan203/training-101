                      //variables and data types//**
//question 1: declare a variable and console .log the variable
let name = "Reagan";
console.log(name);

//question 2 : create two variables assign them values and print their sum
let a =50;
let b =25;
console.log(a + b);

//question 3 : a program that chex if a variable is a string
let x =190;

if(typeof x==="string"){
    console.log("The variable is a string");
}else{
    console.log("The variable is not a string");
}

//question 4: convert "12345" to a number(converting string to numbers using parseInt and parseFloat for numbers with decimals or the unary operator)
//using parseInt
let theString ="12345bye";
let theNumber = parseInt(theString);// parseInt is used to convert string in to numbers
console.log(theNumber);
//using parseFloat
let theString2 ="12345.6789";
let theNumber2 = parseFloat(theString2); // parseFloat is used to convert string in to numbers with decimal points
console.log(theNumber2);
//using the unary operator =>> the unary operator returns NaN if you add a character that is not a number
let theString3 ="12345";
let theNumber3 = +theString3; // unary operator is used to convert string in to numbers
console.log(theNumber3);

//question 5 : a program that swaps the values of two variables "z" and "y"
let z = 10;
let y = 20;
console.log("Before swapping: z = " + z + ", y = " + y);
let temp = z;
z=y;
y=temp;
console.log("After swapping: z = " + z + ", y = " + y);
 
                //arrays**
// question 6: create an array of your favorite fruits and print the fruits
let fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits);
// question 7 : add new fruits at the end of the array
fruits.push("kiwi");// .push is used to add at the end of the array 
console.log(fruits);
// question 8: remove the first fruit from the array and print the array
fruits.shift();// .shift is used to remove the first element from the array
console.log(fruits);
//question 9 : create an array with numbers and find the highest number in the array
let numbers = [15, 7, 10, 2, 18];
let maxNumber = Math.max(...numbers);
console.log("The highest number in the array is: " + maxNumber);
// question 10: write a program that prints each fruit in the array in a new line using a for loop
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
// now using a while loop
let i = 0;
while(i<fruits.length){
    console.log(fruits[i]);
    i++;
}
           //objects
// question 11: create an object representing a car with properties make model and year and print the model property
let car ={
    make:"toyota",
    model:"Camry",
    year:"2021"
}
console.log(car.model)
// question 12: add a new property to the car object called "color" and set its value to "red" and print the car object
car.color = "red";
console.table(car);
// question 13 : write a program to delete the year property from the car object and print the updated one
delete car.year;
console.table(car);
// question 14: create object representing a person  first name lastname and age and print the persons full name
let person ={
    firstName:"Reagan",
    lastName:"Abraham",
    age:45
}
console.log("My firstname is "+person.firstName+" while my second is "+person.lastName+" and my age is "+person.age)
// question 15: write a function that takes an object as an argument and prints all of its properties and values
function printObject(obj){
    for(let key in obj){
        console.log(key+": "+obj[key]);
    }
}
printObject(person);
                       //functions
// question 16: write a function greet that takes a name as an argument and prints " hello,[name]"
function greet(name){
    console.log("Hello, "+name);
}
greet("Reagan");
// question 17: write a function sum that takes two numbers as arguments and returns their sum
function sum (a,b){
    return a+b;
}
console.log(sum(10,20))
//question 18: create a function isEven that checks isf a number is even and returns either true or fals
function isEven(num){
    return num % 2 === 0;
}
console.log(isEven(4))
// now use the if statment
function isEvenIf(num){
    if(num % 2 === 0){
        return true +" it is even";
    }else{
        return false;
    }
}
console.log(isEvenIf(2))
// question 19: write a function factorial that calculates the factorial of a given number
function factorial(num){
    let result = 1;
    for(let i=1; i<=num; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5))
// question 20: create a function reversestring that takes a string as input and reverses it
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("hello there am going to fix you a meal"))
console.log(reverseString("23"))
                              //control flow
// question 21 write a function that checks if a number is positive negative or zero and prints the answer
function checkNumber(num){
    if (num>0){
        return "number is positive "+num;
    }else
    if (num<0){
        return "number is negative "+num;
    } else {
        return "number is zero " +num;
    }
}
console.log(checkNumber(0));
// question 22: create a program that prints even if a number is even and odd if a number is odd
function checkDigits(number){
    if(number % 2 === 0){
        return number + " is even";
    } else {
        return number + " is odd";
    }
}
console.log(checkDigits(4));
// question 23 : write a program that uses for loop to print numbers from 0 to 10
for(let i=0; i<=10; i++){
    console.log(i);
}
// question 24:use while loop now
let r=0
while(r<=10){
    console.log(r);
    r++;
}
// question 25: write a function that takes a number as input and prints fizz if it is divisible by 3 and buzz if it is divisible by 5 and fiz buzz if it is divisible by both
function program(num){
    if (num /3 ==0){
        return "Fizz"
    }else if
    (num /5 ==0){
        return "Buzz"
    } else if
    (num % 3 == 0 && num % 5 == 0){
        return "FizzBuzz"
    } else {
        return num
    }

}
console.log(program(15))
//