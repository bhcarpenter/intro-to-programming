/*
Ignore these function definitions. They give you the "show" and "diceRoll"
functions that you'll use through the rest of the assignment.
*/
function show(text) {
    var node = document.createTextNode(text + "\n");
    document.getElementById('output').appendChild(node);
}
function diceRoll() {
    return Math.ceil(Math.random() * 6);
}

/*
Make a Dice Game! Here are the rules:
1. Make up a better name for the game.
2. Ask the user how many people are going to play.
3. For each user, "roll a dice" (generate a random number between 1 and 6,
inclusive) until the total of all of the user's rolls is over 21. I've written
a "diceRoll" function for you to use. You can use it like so:
var result = diceRoll(); // result will be a number between 1 and 8.
4. The winner is the person who has the least number of rolls to get over 21.

Here's what your program should output:
- The name of the game.
- The result of each user's dice rolls.
- The winner of the game.
- The average number of rolls among all of the users. The average should be
rounded to two decimal places.

The output should look something like this:

Dice Game!
------------------------------------
1.) 456234
2.) 6646
3.) 213154326
The winner is Player 2!
The average number of rolls is 6.33.
*/

show('Dice Game!'); // TODO: Name this something more creative.
show('------------------------------------');

// TODO: Your code goes here!
