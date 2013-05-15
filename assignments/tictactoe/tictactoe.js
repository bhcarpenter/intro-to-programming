/* tictactoe.js
 *
 * This file is where all of your actual logic will go. The nice thing about
 * keeping your logic separate from the code that attaches it to the webpage
 * is that you could take this file and put it into a different webpage
 * (perhaps with different HTML markup) and still have all of the utilities
 * that you need to run a tic tac toe game.
 *
 * By separating the logic from the actual web page, we also make it easy to
 * write *automated tests* for the board game. More on that later.
 */

// currentTurn holds either an 'X' or an 'O', depending on which person's turn
// it is.
var currentTurn = 'X';

// board is a multidimensional array (see http://bhcarpenter.com/intro-to-programming/week5/#slide13)
// that holds the current state of the game. Each position will hold one of
// three values:
// 'X' if player X has claimed the spot.
// 'O' if player O has claimed the spot.
// '' (an empty string) if the spot is still unclaimed
var board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

/* STEP #1
 *
 * Create a function called endTurn.
 *
 * It doesn't take any parameters or return any values.
 *
 * It should check the value of the "currentTurn" global variable, and change
 * it to be an 'X' if the current value is 'O' and vice-versa.
 */


/* STEP #2
 *
 * Create a function called getCurrentState.
 *
 * It accepts two parameters: a number of the row to check and a number of
 * the column to check.
 *
 * It should return the current value of stored in the "board" global variable
 * at the given row and column.
 */


/* Step #3
 *
 * Create a function called claim.
 *
 * It accepts two parameters: the row and colum of the spot to claim.
 *
 * The claim function should check to see if the given spot in the "board"
 * global is still an empty string (i.e. it is unclaimed). If so it should 
 * do two things:
 *
 * 1) Set the value of the "board" at the specified row and column to equal the
 * current value of the "currentTurn" global variable.
 * 2) Call endTurn()
 *
 * It doesn't need to return anything.
 */


