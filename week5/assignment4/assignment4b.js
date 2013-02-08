/* Part 2: Game
 *
 * For this assignment, you're going to build a (rather stupid) game. The point
 * of the game is to drag the red square inside of the blue square.
 *
 * There's three parts to making an HTML element draggable:
 * 1. Turn dragging on when the mouse is pressed down.
 * 2. Turn dragging off when the mouse is pressed up.
 * 3. Update the "top" and "left" CSS values of the element to match the
 *    mouse's position while dragging is turned on.
 */

// You may use these variables throughout your assignment. They are "global"
// (meaning they weren't defined inside of a function), so you can access
// them from anywhere, including inside of your event handlers.
var handle = document.getElementById('handle');
var target = document.getElementById('target');
var isDragging = false;


/* Step 1: Turn dragging on
 *
 * Add an event listener to the #handle element that sets the isDragging
 * variable to true when the mouse is pressed down (note, this is NOT the
 * "click" event). Check the list of events from last week's lecture and/or
 * the MDN website to find the event that you need to use.
 */



/* Step 2: Turn dragging off
 *
 * Add another event listener to the #handle element that sets the isDragging
 * variable back to false when the mouse button is released.
 */
 



/* Step 3: Move the #handle element while the isDragging variable is true.
 *
 * To do this you're going to listen to the "mousemove" event of the <body>
 * element. Inside of it, you're going to set the "left" and "top" attributes
 * of it's "style" object to equal your mouse coordinates.
 *
 * A few notes:
 *
 * - Remember that "Event" object that we call preventDefault() on to prevent
 * links and forms from taking you to a new page? Well the one that you get
 * for mouse events (like this one!) has "clientX" and "clientY"
 * properties that tell you the current x and y coordinates of the mouse on
 * the page. See https://developer.mozilla.org/en-US/docs/DOM/MouseEvent for
 * all the details.
 *
 * - clientX and clientY are numbers, but the left and top properties of
 *   #target's style property expect valid CSS values, like "4px" instead
 *   of just 4.
 *
 * - This event handler is going to get called *every* time you move
 * the mouse on the page, so you need to put all of your code in it inside
 * of an if statement that checks to see if isDragging is true.
 *
 * At this point you should have a draggable #handle element!
 */



/* Step 4: Write a function that checks to see if #handle is inside of
 * #target
 *
 * Write a function called "winner" that returns true if #handle is inside 
 * of #target and false if it isn't. #handle is inside of #target if:
 *
 * the "left" value of #handle is GREATER than the "left" value of #target
 * AND
 * the left value of #handle plus it's width is LESS than the left value
 * of #target plus #target's width
 * AND
 * the top value of #handle is GREATER than the top value of #target
 * AND
 * the top value of #handle plus it's height is LESS than the top value of
 * #target plus #target's height.
 */


/* Step 5: Check to see if you've one when the mouse is released.
 *
 * Go back up to your "Step #2" handler and add a call to your "winner"
 * function inside of it. If the result of "winner" is true, display
 * a popup that says "You've won!" using alert().
 */


/* Extra Credit Challenge:
 * Add a button that moves the position of #target to a random
 * new position on the page.
 */

