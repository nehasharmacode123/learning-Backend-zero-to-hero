/*
echo "# learning-Backend-zero-to-hero" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/nehasharmacode123/learning-Backend-zero-to-hero.git
git push -u origin main

*/

// var number = 5; // in-line comment

/* this is a
hhjk
bnjdf
jhklkf
njkl
multi-line comment 
*/

// number = 9;

// data types and variables

/* Data Types:
undefined, null, object, string, symbol, number, and object
*/

// var myName = "Beau";

// myName = 8;

// let ourName = "freeCodeCamp"

// const pi = 3.14;

/*
Storing Values with Assignment Operator
*/

// var a;
// var b = 2;
// console.log(a);

// a = 7;

// b = a;

// console.log(a);

/* 
Initializing Variables w/ Assignment Operator
*/

// var a = 9;

/* 
Uninitialized Variables
*/

// Initialize these three variables
// var a = 5;
// var b = 10;
// var c = "I am a";

// Do not change code below this line

// a = a + 1;
// b = b + 5;
// c = c + " String!";

// Case Sensitivity in variables

// Declarations
// var studlyCapVar;
// var properCamelCase;
// var titleCaseOver;

// Assignments
// studlyCapVar = 10;
// properCamelCase = "A String";
// titleCaseOver = 9000;

// Adding numbers

// var sum = 10 + 10;
// console.log(sum);

// Substracting

// var difference = 45 - 33;

// Multiplying

// var product = 8 * 10;

// Divided

// var quotient = 66 / 33
// console.log(quotient);

// incrementing numbers
// var myVar = 87;

// Only change code below this line
// myVar = myVar + 1;
// myVar++;

// Decrementing numbers
// var myVar = 11;

// only change code below this line
// myVar = myVar - 1;
// myVar--;

// Decimal numbers

// var ourDecimal = 5.7;

// Only change code below this line

// var myDecimal = 0.009

// multiply Decimals

// var product = 2.0 * 2.5;
// console.log(product);

// Divide Decimal

// var quotient = 4.4 / 2.0;

// console.log(quotient);

// Finding a Remainder

// var remainder;
// remainder = 11 % 3;

// console.log(remainder);

// Compound Assignment with Augmented Addition

// var a = 3;
// var b = 17;
// var c = 12;

// Only modify code below this line

// a += 12;
// b += 9;
// c += 7;

// Compound Assignment with Augmented Subtraction

// var a = 11;
// var b = 9;
// var c = 3;

// Only modify code below this line

// a -= 6;
// b -= 15;
// c -= 1;

// Compound Assignment with Augmented Multiplication

var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

// a *= 5;
// b *= 3;
// c *= 10;

// Compound Assignment with Augmented Division

// var a = 48;
// var b = 108;
// var c = 33;

// Only modify code below this line

// a /= 12;
// b /= 4;
// c /= 11;

// Declar String Variables

// Example
// var firstName = "Alan";
// var lastName = "Turing";

// Only change code below this line

// var myFirstName = "Beau";
// var myLastName = "Carnes";

// Escaping Literal Quotes in Strings

// var myStr = "I am a \"double quoted\" string inside \"double quotes\" ";

// console.log(myStr);

// Quoting Strings with Single Quotes

// var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
// console.log(myStr);

// Escape Sequences in Strings

/************
CODE OUTPUT
\'  single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
************ */

// Concatenation Strings with Plus Operator

// Example
// var  ourStr = "I come first. " + "I come second.";

// Only change code below this line

// var myStr = "This is the start. " + "This is the end.";
// console.log(myStr);

// Concatenating Strings with Plus Equals Operator
// Example
// var ourStr = "I come first. ";
// ourStr += "I come second.";

// Only change code below this line

// var myStr = "This is the first sentence. ";
// myStr += "This is the second sentence."

// console.log(myStr);

// Constructing Strings with Variables

// Example

// var ourName = "freeCodeCamp";
// var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
// var myName = "Beau";
// var myStr = "My name is " + myName + " and I am well!";

// console.log(myStr);

// Appending Variables to Strings
// Example
// var anAdjective = "awesome!";
// var ourStr = "freeCodeCamp is ";
// ourStr += anAdjective;

// Only change code below this line

// var someAdjective = "worthwhile";
// var myStr = "Learning to code is ";

// myStr += someAdjective;

// Find length of String
// Example
// var firstNameLength = 0;
// var firstName = "Ada";

// firstNameLength = firstName.length;

// setup
// var lastNameLength = 0;
// var lastName = "Lovelace";

// Only change code below this line.

// lastNameLength = lastName.length;
// console.log(lastNameLength);

// Bracket Notation to Find First Character in String
// Example
// var firstLetterOfFirstName = "";
// var firstName = "Ada";

// firstLetterOfFirstName = firstName[0];

// setup
// var firstLetterOfFirstName = "";
// var lastName = "Lovelace";

// Only change code below this line
// firstLetterOfFirstName = lastName[0];
// console.log(firstLetterOfFirstName);

// String Immutability
// Setup
// var myStr = "Jello World";

// Only change code below this line

// myStr[0] = "H"; //Fix Me
// myStr = "Hello World";

// console.log(myStr);

// Bracket Notation to Find Nth Character in String
// Example
// var firstName = "Ada";
// var secondLetterOfFirstName = firstName[1];

// Setup
// var lastName = "Lovelace";

// Only change code below this line.
// var thirdLetterOfLastName = lastName[2];

// Bracket Notation to Find Last Character in String

// Example
// var firstName = "Ada";
// var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
// var lastName = "Lovelace";

// Only change code below this line.
// var lastLetterOfFirstName = lastName.length - 1;

// console.log(lastLetterOfFirstName);

// Bracket Notation to Find Nth-to-last Character in String
// Example
// var firstName = "Ada";
// var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
// var lastName = "Lovelace";

// Only change code below this line
// var secondToLastLetterOfLastName = lastName[lastName.length - 2];

// Word Blanks

// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    // your code below this line
    // var result = "";
    // result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
    // Your code above this line
//     return result;
// }

// Change the words here to test your function
// console.log(wordBlanks("dog", "big", "ran", "quickly"));
// console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// Store Multiple Values with Arrays
// Example
// var ourArray = ["John", 23];

// Only change code below this line.
// var myArray = ["Quincy", 1];

// Nested Arrays





