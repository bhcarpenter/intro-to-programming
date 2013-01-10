/*
Problem #1
----------
Write code that prints the following.

Easy does it.
Easy does it. Easy does it.
Easy does it. Easy does it. Easy does it.
Easy does it. Easy does it. Easy does it. Easy does it.

Rather than repeat "Easy does it." many times in the code, assign a variable --
var x = "Easy does it."; -- then use that variable within the calls to console.log
*/
console.log("------ PROBLEM 1 ------\n");

// TODO: Your code goes here!


/*
Problem #2
----------
Write code that prints the following with your name.

Hello, my name is Alice
Alice is in this class
Without a doubt Alice is working on this homework

Rather than mentioning your name directly, assign a variable to hold your name
(i.e. name = ... ; ), then use that name variable within the console.log statements to
insert your name. It should be possible to assign a different string to the variable,
"Bob" or "Abby" or whatever, and then that name will appear in the printout when run.
*/
console.log("\n------ PROBLEM 2 ------\n");

// TODO: Your code goes here!


/*
Problem #3
----------
Given variables x and y below write code to print their sum, difference, and product on
exactly 3 seperate lines with a label indicating what is what.
*/
console.log("\n------ PROBLEM 3 ------\n");
var x = 38;
var y = 67;

// TODO: Your code goes here!


/*
Problem #4
----------
Use the hours, minutes, and seconds variables to print the total number of seconds
*/
console.log("\n------ PROBLEM 4 ------\n");
var hours = 2;
var minutes = 13;
var seconds = 2;

// TODO: Your code goes here!


/*
Problem #5
----------
According to Betty Crocker (http://www.bettycrocker.com/recipes/pancakes/), 12 servings
of pancakes require 2 cups of Bisquick, 1 cup of milk, and 2 eggs.

Print the number of servings of pancakes that you can make if you start with the amounts
given by the variables below. I want to see you calculate this number in code.

Then print the amount of each ingredient you have left after making as many pancakes
as possible.

The Math.min() function may come in handy:
https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/min#Examples
*/
console.log("\n------ PROBLEM 5 ------\n");
var cupsOfBisquick = 32;  // 2 boxes of bisquick
var cupsOfMilk = 16;      // 1 gallon of milk
var eggs = 24;            // two dozen eggs

// TODO: Your code goes here!

/*
Problem #6
----------
The prompt() function can be used to get a value from a user and store it in a variable.

for example:
var num = prompt("please enter a number");

Use the prompt function to take in a temperature in Fahrenheit and convert it to Celsius.
Print out the result using the console.log() function.

You will need to use the parseFloat() or Number() function to convert the value returned
from the prompt() since it returns a string.
*/
console.log("\n------ PROBLEM 6 ------\n");

// TODO: Your code goes here!

/*
Problem #7
----------
the typeof keyword can be used to produce a string representing the type of a given value.

Use the typeof operator to print the types of the following expressions.

true
"hello world"
123456
NaN
null
((1/2) === .5)
[1,2,3]
{ first: 'Joe', last: 'Shmoe' }
function(){}
undefined
false
/abc/

*/
console.log("\n------ PROBLEM 7 ------\n");

// TODO: Your code goes here!

/*
Problem #8
----------
What would happen if a user typed in "hello" at your Fahrenheit prompt from problem #6?

It turns out that parseFloat() and Number() would return a special type called NaN or
"not a number". From problem #7 you saw that the typeof operator is not a good way to
test for NaN, but luckily JavaScript has a built in function called isNaN() which accepts
one argument and returns true if the value is NaN.

Prompt the user to enter a number, convert the user input to a number using parseFloat()
and then print whether or not the number is NaN.
*/
console.log("\n------ PROBLEM 8 ------\n");

// TODO: Your code goes here!

