// Store Multiple Values with Arrays
// Example
// var ourArray = ["John", 21];

// only change code below this line.
// var myArray = ["anjali", 25, true];

// Nested Arrays
// Example
// let ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.
// let myArray = [["Bulls", 23], ["White Sox", 45]];

// Access Array Data with Indexes
// Example
// let ourArray = [50,60,70];
// let ourData = ourArray[0]; //equals 50

// Setup
// let myArray = [50,60,70];

// Only change code below this line.
// let myData = myArray[0];
// console.log(myData);

// Modify Array Data with Indexes
// Example
// let ourArray = [18,64,99];
// ourArray[1] = 45; //ourArray now equals [18,45,99].

// Setup
// let myArray = [18,64,99];

// Only change code below this line.
// myArray[0] = 45;
// console.log(myArray);

// Access Multi-Dimensional Arrays with Indexes
// Setup
// let myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
// let myData = myArray[2][1]
// console.log(myData);

// Manipulate Arrays with push()
// Example
// let ourArray = ["Stimpson", "J", "cat"];
// ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
// let myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
// console.log(myArray.push(["dog", 3]))

// Manipulate Arrays with pop()

// Example
// let ourArray = [1,2,3];
// let removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
// let myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
// let removedFromMyArray = myArray.pop();
// console.log(myArray);

// Manipulate Arrays with shift();
// Example
// let ourArray = ["Stimpson", "J", ["cat"]];
// let removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]

// Setup
// let myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
// let removeFromMyArray = myArray.shift();
// console.log(myArray);

// Manipulate Arrays with unshift();
// Example
// let ourArray = ["Stimpson", "J", ["cat"]];
// ourArray.shift(); //ourArray now equals ["J", "cat"]
// ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
// let myArray = [
//   ["John", 23],
//   ["dog", 3],
// ];
// myArray.shift();

// Only change code below this line.
// myArray.unshift([, 35]);

// Shoping List

// let myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

// Write Reusable code with Functions
// Example
// function ourReusableFunction(){
//     console.log("Heyya, world");

// }

// ourReusableFunction();
// ourReusableFunction();
// ourReusableFunction();

// Only change code below this line
// function reusableFunction(){
//     console.log("Hi World");

// }

// reusableFunction();

// Passing Values to Functions with Arguments
// function ourFunctionWithArgs(a, b){
//     console.log(a - b);
// }

// ourFunctionWithArgs(10,5) //output 5

// Only change code below this line.
// function functionWithArgs(a, b){
//     console.log(a + b);
    
// }

// functionWithArgs(10,5)



// Global Scope and Functions

// Declare your variable here
// var myGlobal = 10;

// function fun1() {
    // Assign 5 to oopsGlobal Here
//     oopsGlobal = 5;
// }

// Only change code above this line
// function fun2(){
//     var output = "";
//     if(typeof myGlobal != "undefined"){
//         output += "myGlobal: " + myGlobal;
//     }
//     if(typeof oopsGlobal != "undefined"){
//         output += " oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
    
// }

// fun1();
// fun2();

// Local Scope and Fucntions
// function myLocalScope() {
//     var myVar = 5;
//     console.log(myVar);
    
// }

// myLocalScope();

// console.log(myVar); //ReferenceError myVar is not defined

// Global vs. Local Scope in Functions

