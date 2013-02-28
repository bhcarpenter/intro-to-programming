/*
Problem #0
----------
Print the first item in the array below.
*/
console.log("------ PROBLEM 0 ------\n");

var colors = new Array('red', 'blue', 'brown', 'green');

// TODO: Your code goes here!

/*
Problem #1
----------
Use a for..in loop to print each key and value in the dog object below. Your
output should look (exactly) like this:
breed: Basset Hound
name: Homer
age: 7
*/
console.log("------ PROBLEM 1 ------\n");

var dog = new Object();
dog.breed = 'Basset Hound';
dog.name = 'Homer';
dog.age = 7;

// TODO: Your code goes here!



/* **************************************
 * We're going to spend the rest of this warmup
 * working with Date objects.
 *
 * You'll probably find the date reference at
 * MDN helpful: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date
 * ************************************ */

/*
Problem #2
----------
Using the "currentDateAndTime" variable below, print the current date
using toDateString() on one line, and then print the current time
using toTimeString() on another line.
*/
console.log("------ PROBLEM 2 ------\n");

var currentDateAndTime = new Date();

// TODO: Your code goes here!


/*
Problem #3
----------
Create a new variable called "myBirthDate" that holds your birthdate in a
Date object. Make up a fake birthdate if you wish.
*/
console.log("------ PROBLEM 3 ------\n");

// TODO: Your code goes here!

/*
Problem #4
----------
Display the year of your "myBirthDate" variable. The getFullYear() method that
all Date objects have might be helpful.
*/
console.log("------ PROBLEM 4 ------\n");

// TODO: Your code goes here!

/*
Problem #5
----------
Display the month of your "myBirthDate" variable. The getMonth() method that
all Date objects have might be helpful. For some stupid reason, getMonth()
returns 0-11 instead of 1-12. That's ok, don't worry about it.
*/
console.log("------ PROBLEM 5 ------\n");

// TODO: Your code goes here!

/*
Problem #6
----------
Display the day of your "myBirthDate" variable. The getDate() method that
all Date objects have might be helpful.
*/
console.log("------ PROBLEM 6 ------\n");

// TODO: Your code goes here!


/*
Problem #7
----------
Complete the following "birthdateToAge" function by following the steps
outlined in the comments.
*/
console.log("------ PROBLEM 7 ------\n");

function birthdateToAge(birthdate) {
    var age;
    var now = new Date();

    // TODO: Set age equal to the current year minus the birthdate year.

    // TODO: If the current month is less than your birth month, your birthdate
    // hasn't passed yet for this year. Write an if statement that checks for
    // that and subtracts 1 from age if necessary.

    // TODO: If the current month is equal to your birth month, and the current
    // day of the month is less than your birthdate day of the month, your
    // birthdate hasn't passed yet for this year. Write an if statement that
    // checks for that and subtracts 1 from age if necessary.

    return age;
}


/*
Problem #8
----------
Call the birthdateToAge() function, passing it your myBirthDate variable,
and display the result.
*/
console.log("------ PROBLEM 8 ------\n");

// TODO: Your code goes here!

