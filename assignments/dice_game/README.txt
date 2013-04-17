DICE GAME!!!
===========

Part 1 - Practice
-----------------
I wrote a function for you to use called diceRoll(). It will give you a random
number between 1 and 6.

Practice calling the diceRoll() function and assigning the result to a variable.
Log the results to the console. Do it a couple of times so you can see that the
number is random each time.


Part 2 - Single Player Game
---------------------------
Make a Dice Game! Here are the rules:

1. Make up a better name for the game.
2. "Roll the dice" (i.e. call diceRoll to get a random number between 1 and 6)
   until the sum of the rolls is over 21.
3. Log the result of each roll to the console.
4. The user's score is the number of times that you had to "roll the dice" 
   before the total was over 21.
5. Log the user's score to the console.

Hints:
- You're going to need one variable to keep track of the running total of the
dice rolls.
- You'll need another variable to keep track of how many times you had to roll
the dice.
- You don't know how many times you'll need to roll the dice, so use a while
loop instead of a for loop.


Part 3 - Multi-player game
--------------------------
Modify your dice game to work with multiple people!

1. Before your game starts, use prompt() to ask the user for the number of
   players who will participate.
2. Put all of your code from Part 2 into a for loop that will run it once for
   each player. Yes, this means that you're going to have a while loop inside
   of your for loop!
3. At the beginning of each player's "turn", display on the console who's turn
   it is (i.e. log "Player 1" to the console, etc.)
4. The winner is the person who has the least number of rolls to get over 21.
5. Log who won the game to the console.

Hints:
- You'll need a variable to keep track of who has the lowest score. You can
  call it `winner` if you want.
- You'll need a variable to keep track of the winner's score. You can call
  it `winningScore` if you want.
- At the end of each player's turn, they become the new winner if their score
  is less than the current winner's score.

More Hints:
- The starting `winner` can just be the first player.
- The starting `winnerScore` can be the worst score possible. For this game,
  that would be Infinity (which is actually a valid number in JavaScript).


Extra Credit
------------
Log the average number of rolls among all of the users.

No hints for extra credit!


Example Output
--------------

    Dice Game!
    ------------------------------------
    Player 1: 
    Roll 1: 4
    Roll 2: 5
    Roll 3: 6
    Roll 4: 2
    Roll 5: 3
    Roll 6: 4
    Score: 6

    Player 2:
    Roll 1: 6
    Roll 2: 6
    Roll 3: 4
    Roll 4: 6
    Score: 4

    Player 3:
    Roll 1: 2
    Roll 2: 1
    Roll 3: 3
    Roll 4: 1
    Roll 5: 5
    Roll 6: 4
    Roll 7: 3
    Roll 8: 2
    Roll 9: 6

    The winner is Player 2!
    The average number of rolls is 6.33.

