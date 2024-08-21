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
                         //string manipulation
// question 26: write a function that takes a string and rerturns number of vowels in the string
function vowelNumber(str){
    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let i=0; i<str.length; i++){
        if(vowels.indexOf(str[i])!== -1){
            count++;
        }
    }
    return count;
}
console.log(vowelNumber("Reagan Abraham"));
//question 27: write a function that takes two strings and checks if they are anagrams
function areAnagrams(str1, str2) {
    // Remove any spaces and convert strings to lowercase
    let normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    let normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();

    // Sort the characters in both strings
    let sortedStr1 = normalizedStr1.split('').sort().join('');
    let sortedStr2 = normalizedStr2.split('').sort().join('');

    // Compare the sorted strings
    if (sortedStr1 === sortedStr2) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
console.log(areAnagrams("listen", "silent"));  // true
console.log(areAnagrams("hello", "world"));    // false
// question 28 : write a function that capitalizes the first letter of each word in a strin
function toCapital(string){
    let words = string.split(" ");
    let capitalizedWords = [];
    for(let i=0; i<words.length; i++){
        capitalizedWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }
    return capitalizedWords.join(" ");
} 
console.log(toCapital("i am going to go to the party tonight"))
// question 29: create a function that counts number of words in a sentence
function wordCount(sentence){
    let words = sentence.split(" ");
    return words.length;
}
console.log(wordCount("I am going to go to the party tonight"))
// question 30: write a function that finds and returns the longest word in a sentence
function longWord(superSent){
    let words = superSent.split(" ");
    let longestWord = words[0];
    for(let i=1; i<words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log(longWord("I am going to go to the party tonight"))
//                              //DOM manipulation
// // question 31: write a program that changes the background of a webpage when a button is clicked
// const colors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'pink', 'cyan'];

// document.getElementById('colorButton').addEventListener('click', function() {
//     // Select a random color from the array
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     // Change the background color of the body
//     document.body.style.backgroundColor = randomColor;
// });
// // question 32 : create a button that when clicked adds a new list item to an unorderd list
// document.getElementById('addButton').addEventListener('click', function() {
//     // Get the input value from the text field
//     const newItemText = document.getElementById('newItemInput').value;

//     // Create a new list item element
//     const newItem = document.createElement('li');
//     newItem.textContent = newItemText;

//     // Append the new item to the unordered list
//     const list = document.getElementById('list');
//     list.appendChild(newItem);
// });
// // question 33: write a program that displays an alert with the text of an input field when a button is clicked
// document.getElementById('alertButton').addEventListener('click', function() {
//     // Get the input value from the text field
//     const inputText = document.getElementById('inputField').value;

//     // Display an alert with the input text
//     alert(inputText);
// });
// // question 34 : create a program that toggles the visibility of a paragraph when a button is clicked
// document.getElementById('toggleButton').addEventListener('click', function() {
//     // Get the paragraph element
//     const paragraph = document.getElementById('paragraph');

//     // Toggle the visibility of the paragraph
//     paragraph.style.display = paragraph.style.display === 'none'? 'block' : 'none';
// })
// // question 35: write a function that changes the text content in a div component when a mouse hovers over it
// function changeTextOnHover() {
//     // Get the div element
//     const div = document.getElementById('div');

//     // Change the text content on mouse hover
//     div.addEventListener('mouseenter', function() {
//         div.textContent = 'Hovered!';
//     });

//     // Reset the text content on mouse leave
//     div.addEventListener('mouseleave', function() {
//         div.textContent = 'Hover over me!';
//     });
// }
                        // Arrays and Higher-order functions
// question 36: write a function that takes an array of numbers and returns the arry with each number squared
function squareNumbers(arr) {
    // Use the map() method to create a new array with each number squared
    return arr.map(function(num) {
        return num * num;
    });
}
// Example usage:
const numberss = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(numberss);
console.log(squaredNumbers);  // Output: [1, 4, 9, 16, 25]
// question 37:create a function that filters out all odd numbers from an array
function filterOddNumbers(arr) {
    let result = []; // Create an empty array to store the filtered numbers
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {  // Check if the number is odd
            result.push(arr[i]);  // Add the odd number to the result array
        }
    }

    return result +" odd numbers"; // Return the array containing only odd numbers
}

// Example usage:
const numberrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = filterOddNumbers(numberrs);
console.log(oddNumbers);  // Output: [1, 3, 5, 7, 9]
// question 38: write a program that sorts an array of string alphabetically
function sortStringsAlphabetically(arr) {
    return arr.sort();  // The sort() method sorts the array of strings alphabetically by default
}

// Example usage:
const strings = ["banana", "apple", "orange", "grape", "mango"];
const sortedStrings = sortStringsAlphabetically(strings);
console.log(sortedStrings);  // Output: ["apple", "banana", "grape", "mango", "orange"]
// question 39: Create a function that finds the sum of all the elements in an array using reduce()
// function sumArray(arr) {
//     return arr.reduce(function(accumulator, currentValue) {
//         return accumulator + currentValue;
//     }, 0);  // Start the accumulation with 0
// }

// // Example usage:
// const numbeers = [1, 2, 3, 4, 5];
// const sum = sumArray(numbeers);
// console.log(sum);  // Output: 15
// // question 40 : write a program that flattens an array
function flattenArray(arr) {
    let result = []; // Create an empty array to store the flattened elements
    
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is an array
        if (Array.isArray(arr[i])) {
            // Recursively flatten the nested array
            result = result.concat(flattenArray(arr[i]));
        } else {
            // Add the element to the result array
            result.push(arr[i]);
        }
    }

    return result;  // Return the flattened array
}
                  //miscellenious
// quiestion 41: write a function that returns a random number between 1 and 100
function getRandomNumber() {
    return Math.floor(Math.random() * 100) ;  // Use Math.random() to generate a random number between 0 and 1, then multiply by 100 to get a number between 0 and 100, and finally use Math.floor() to round down to the nearest integer
}
// Example usage:
console.log(getRandomNumber());  // Output: a random number between 1 and 100
// question 42: create a function that generates colours in hexadecimal format
function getRandomHexColor() {
    // Generate a random number between 0 and 16777215 (hexadecimal FFFFFF)
    const randomColor = Math.floor(Math.random() * 0xFFFFFF);
    
    // Convert the random number to a hexadecimal string and pad with leading zeros if needed
    const hexColor = `#${randomColor.toString(16).padStart(6, '0')}`;

    return hexColor;
}

// Example usage:
console.log(getRandomHexColor());  // Output: a random hexadecimal color code, e.g., "#a3c2f0"
// question 43: write a program that shuffles an array of numbers randomly
const randomlyShuffle = [1, 12, 33, 44, 5, 566];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        
        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Example usage:
console.log(shuffleArray(randomlyShuffle));  // Output: the shuffled array
// question 44; a function that changes a word to a palarelogram
function isPalindrome(str) {
    // Normalize the string by removing non-alphanumeric characters and converting to lowercase
    const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the normalized string is equal to its reverse
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama"));  // Output: true
console.log(isPalindrome("hello"));  // Output: false
// question 45: Write a program that generates a random password with a specified length.
function generateRandomPassword(length) {
    // Define the character sets to use for the password
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    // Combine all character sets into one string
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

    let password = '';
    
    // Ensure the length is at least 1
    if (length < 5) {
        console.log("too short try a longer password please")
    }

    // Generate the password by selecting random characters from allCharacters
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    return password;
}

// Example usage:
console.log(generateRandomPassword(43));  // Output: a randomly generated password of length 12
