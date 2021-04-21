// #### 1. Print Exponential Values
// * Write a function that accepts two numbers and validate that they are numbers. 
function exponential(number1,number2) {
    for (let i = 1; i < number2+1; i++) {
        let result =Math.pow(number1,i);
        console.log(result); 
    }    
}


// After that, the function should print _y_ exponential values starting from _x_.

// * For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.""
console.log("Prints 5 exponential values of 3")
exponential(3,5);
// * function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.
console.log("Prints 8 exponential values of 2.")
exponential(2,8);
// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. 
// Reassign the variable within the function and print "My favorite fruit is: _x_". 
let  fruit = "grapefruit"
function printFavoriteFruit() {
    console.log(`My favorite fruie is: ${fruit}`)  
}
printFavoriteFruit();

// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself.
//  Save the output in a variable named `result`. 
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.

function exponent(numberX,numberY) {
    for (let i = 0; i < numberY; i++) {
        let result1 = Math.pow(numberX,i);
        console.log(result1); 
    } ; 
};
console.log("Task 3")
// console.log(result1); ReferenceError: result1 is not defined, because the scope of the variable is defined local for function, inside the function.
exponent(3,4);