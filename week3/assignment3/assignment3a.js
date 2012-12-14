/*
Ignore this function definition. It gives you the "show" function that you'll
use through the rest of the assignment.
*/
function show(text) {
    var node = document.createTextNode(text + "\n");
    document.getElementById('output').appendChild(node);
}


/*
NOTE: For the functions you write, it would probably be a good idea to invoke
them a few times with different values to make sure they're working correctly.
*/

/*
Problem #1
----------
Create a function called "canVote" that takes a person's age and returns
true if the person is 18 or older, or false if they are younger than 18.
*/
show("------ PROBLEM 1 ------\n");

// TODO: Your code goes here!


/*
Problem #2
----------
Write a function that calculates a tip for a restaurant.

It should take two paramters:
- The amount of the bill
- The percentage to tip

It should return the tip amount.
*/
show("------ PROBLEM 2 ------\n");

// TODO: Your code goes here!


/*
Problem #3
----------
Write a function that calculates a tip for a restaurant AND splits the bill
among a group of friends.

It should take three paramaters:
- The amount of the bill
- The percentage to tip
- The number of people splitting the bill

It should return the amount each person should pay.

Instead of copying and pasting the logic from problem #2, I want you to
call the function you wrote in problem #2 as part of your solution.
*/
show("------ PROBLEM 3 ------\n");

// TODO: Your code goes here!


/*
Problem #4
----------
Write an email signature function that takes in:
- name
- title
- company
- email address
- phone number

and prints something that looks like an email signature. You won't need to
return any values, just make calls to show() directly in your email signature
function.

Please be creative!
*/
show("------ PROBLEM 4 ------\n");

// TODO: Your code goes here!


/*
Problem #5
----------
Create a "me" object that represents your contact information. It should have
the following properties:
- name
- title
- company
- emailAddress
- phoneNumber

Print out the "me" object's name.

Note: You don't need to write any functions to do this problem. The only
function you'll use is the show() function (to print the object's name).
*/
show("------ PROBLEM 5 ------\n");

// TODO: Your code goes here!


/*
Problem #6
----------
Update your email signature function so that instead of taking in 5 different
values, it only takes in 1 value which will be an object with the same
properties as the "me" object from Problem #5.

Call your new email function with the "me" object you made in Problem #5. The
output should look exactly the same as the output from Problem #4.
*/
show("------ PROBLEM 6 ------\n");

// TODO: Your code goes here!


