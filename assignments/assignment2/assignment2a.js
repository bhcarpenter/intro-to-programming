/* ****************************************
 * REVIEW
 * ************************************** */

/*
Problem #1
----------
Convert the value in variable 'x' into a number, add 10 to it, and then
display it in the console.
*/
console.log("------ PROBLEM 1 ------\n");
var x = '100';

// TODO: Your code goes here!



/*
Problem #2
----------
Write some JavaScript code to take the variables defined below, and create
a variable (call it personHTML) that holds a string of HTML that would
display all of the values. Then log the string of HTML to the console.

In Part B, you will do something like this, but you'll actually insert the HTML
into the page instead of displaying it in the console.
*/
console.log("------ PROBLEM 2 ------\n");
var name = 'Johnny Coder';
var title = 'Software Engineer';
var company = 'ABC Corp';
var emailAddress = 'johnny@abccorp.com';
var phoneNumber = '555-555-5555';

// TODO: Your code goes here!




/* ****************************************
 * OBJECTS (or, the ballad of Johnny Coder)
 * ************************************** */

/*
Problem #3
----------
The console can display objects, just like it can display primitive values. Use
console.log to display the "aWorker" object below.
*/
console.log("------ PROBLEM 3 ------\n");

var aWorker = {
    name: 'Johnny',
    position: 'Software Engineer',
    salary: 68000,
    boss: {
        name: 'Fred',
        position: 'VP of Sales'
    }
};

// TODO: Your code goes here!



/*
Problem #4
----------
Johnny's boss, Fred, just got fired for stealing erasers. Set the boss property
of aWorker to be the newVP object defined below. Then use console.log to
display aWorker again.
*/
console.log("------ PROBLEM 4 ------\n");

var newVP = {
    name: 'Sally',
    position: 'VP of Sales'
};

// TODO: Your code goes here!



/*
Problem #5
----------
Johnny's new boss, Sally, has noticed that Johnny's JavaScript skills are a
huge asset for ABC Corp. Give Johnny a 10% raise!

I want to see you calculate this in code using the current value of aWorker's
salary property. Then assign the result back to aWorker's salary property.
*/
console.log("------ PROBLEM 5 ------\n");

// TODO: Your code goes here!

console.log( aWorker.salary ); // This should display 74,800 in the console.



/*
Problem #6
----------
Create a "me" object that represents your contact information, and then log the
name property of the me object to the console.

"me" should have the following properties:
- name
- title
- company
- emailAddress
- phoneNumber

Feel free to use fake information.

*/
console.log("------ PROBLEM 6 ------\n");

// TODO: Your code goes here!



/*
Problem #7
----------
Write code that generates a HTML string that displays the contents of the me
object that you wrote for Problem #6. This will be just like Problem #2, except
you're going to pull the values out of the me object instead of having a
different variable for each one. Display it in the console.
*/
console.log("------ PROBLEM 7 ------\n");

// TODO: Your code goes here!



