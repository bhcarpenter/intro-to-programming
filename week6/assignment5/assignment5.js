// You should know enough to understand what this does now!
function show(text) {
    var node = document.createTextNode(text + "\n");
    var outputEl = document.getElementById('output');
    outputEl.appendChild(node);
}

/*
Problem #0
----------
Print the first item in the array below.
*/
show("------ PROBLEM 0 ------\n");

var colors = ['red', 'blue', 'brown', 'green'];

// TODO: Your code goes here!


/*
Problem #1
----------
Loop through the grades array below and print each value on a separate line.

Also calculate and print the average of the grades.
*/
show("------ PROBLEM 1 ------\n");

var grades = [60, 92, 84, 23, 5];

// TODO: Your code goes here!


/*
Problem #2
----------
Display each item in the grades array on one line, separated by colons (:).

Hint: Arrays have a method that should help with this. If you use it, you
won't need to use a loop.
*/
show("------ PROBLEM 2 ------\n");

var grades = [60, 92, 84, 23, 5];

// TODO: Your code goes here!


/*
Problem #3
----------
Use a for..in loop to print each key and value in the dog object below. Your
output should look (exactly) like this:
breed: Basset Hound
name: Homer
age: 7
*/
show("------ PROBLEM 3 ------\n");

var dog = {
    breed: 'Basset Hound',
    name: 'Homer',
    age: 7
};

// TODO: Your code goes here!


/*
Problem #4
----------
Write a function called displayObject that accepts one parameter, the object
to display, and displays that object in the same format that you used for
Problem #3.

Your function WILL NOT return anything.
*/
show("------ PROBLEM 4 ------\n");

// TODO: Your code goes here!


/*
Problem #5
----------
Create 3 objects (I don't care what's in them) and call the displayObject
function with each of them.
*/
show("------ PROBLEM 5 ------\n");

// TODO: Your code goes here!



/*********************************************************************
 * Remember that arrays can contain any type data value, even objects!
 * Use the array of three objects below to complete the final four
 * problems.
 ******************************************************************* */
var people = [
    {
        firstName: 'Sarah',
        lastName: 'Hunter'
    },
    {
        firstName: 'Jon',
        lastName: 'Woods'
    },
    {
        firstName: 'Julia',
        lastName: 'Smith'
    }
];


/*
Problem #6
----------
Display the firstName property of the second object in the array. Do not
use a loop.
*/
show("------ PROBLEM 6 ------\n");

// TODO: Your code goes here!


/*
Problem #7
----------
Jon and Julia got married! Update the lastName property of the third object
to equal the lastName property of the second object.
*/
show("------ PROBLEM 7 ------\n");

// TODO: Your code goes here!


/*
Problem #8
----------
Jon and Julia had a baby! Create a new object with a firstName property and a
lastName property. Then add that object to the people array using the built-in
push() method.
*/
show("------ PROBLEM 8 ------\n");

// TODO: Your code goes here!


/*
Problem #9
----------
Loop through the people array and print each object's lastName property on
separate lines.
*/
show("------ PROBLEM 9 ------\n");

// TODO: Your code goes here!


