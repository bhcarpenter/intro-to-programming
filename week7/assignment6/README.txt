Assignment #6 - Tic Tac Toe
===========================
You're going to make a tic-tac-toe game using the given template and 
instructions.


Part A - Due Monday, Feb 25th at 9pm
------------------------------------
Complete steps 1-5 in the tictactoe.js and assignment6.js files. At the end of
this part you should have a fully-functional game board.


Part B - Due Thursday, Feb 28th at 6:30pm
-----------------------------------------
We're going to build on Part A by detecting if someone has won.

Step 1: Create a function named "winner" in tictactoe.js

- The winner function shouldn't accept any parameters.
- It should check the "board" global variable to see if either the "X" or
the "O" player has three in a row, horizontally, vertically, or diagonally.
- If the "X" player has three in a row, the function will return "X"
- If the "O" player has three in a row, the function will return "O"
- If neither player has three in a row, the function will return false


Step 2: Check to see if there is a winner after every button click.

In the "genericButtonClick" function (in assignment6.js) that you wrote for
STEP 4 of Part A, add a call to your new "winner" function (after everything
else) and store the result into a variable.

- If the result of winner() is an 'X', display on the page somewhere that
'X is the winner!'
- If the result of winner() is an "O", display on the page somewhere that
'O is the winner!'.
- Otherwise don't display anything.

Step 3: As always, make it look nice.



Extra Credit
------------
Build in functionality that checks to see if there was a draw (i.e. neither
player won). Display it on the page.



A quick description of tic-tac-toe for the uninitiated:
-------------------------------------------------------

- The game has two players.

- The first player gets to pick any spot on the game board and "claim" it for
themself, marking it with an "X".

- The second player gets to pick any of the remaining spots, and marks it with
an "O".

- A player wins if they manage to get three of their letter in a row, either
horizontally, vertically, or diagonally.

