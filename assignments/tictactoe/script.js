/* Assignment #6
 *
 * We're going to build a tic-tac-toe game using the techniques that you
 * already know, and get some practice in working with arrays along the
 * way.
 *
 * Most of the code that you write will be in "tictactoe.js". This file
 * is just going to hold the event listeners that hooks the web page
 * up to your main application.
 * 
 * STEP 1, STEP 2, and STEP 3 are in tictactoe.js
 */

/* STEP 4
 *
 * Create a function called genericButtonClick. It should accept three
 * parameters:
 *
 * - the button that was clicked
 * - the row of the button
 * - the column of the button
 *
 * It should perform the following steps:
 * 1) Run the claim function (that you created in step 3), passing it the
 * given row and column numbers as arguments.
 * 2) Run the getCurrentState function (that you created in step 2), passing
 * it the given row and column numbers as arguments. Store the result into
 * a variable.
 * 3) Set the text of the given button to be the result of your
 * givenCurrentState call. This jQuery function might help: See http://docs.jquery.com/Attributes/text#text.28.C2.A0val_.29
 */



/* STEP 5
 *
 * For each one of these buttons, attach an event listener to the "click"
 * event. Inside of each event listener you should:
 *
 * 1) Run the genericButtonClick function, passing it the button that was
 * clicked, the row position it represents, and the column position it
 * represents.
 *
 * Note: the easiest way to do this is to create a separate event listener
 * for each button.
 */
var row0col0 = $('#row0col0');
var row0col1 = $('#row0col1');
var row0col2 = $('#row0col2');
var row1col0 = $('#row1col0');
var row1col1 = $('#row1col1');
var row1col2 = $('#row1col2');
var row2col0 = $('#row2col0');
var row2col1 = $('#row2col1');
var row2col2 = $('#row2col2');


