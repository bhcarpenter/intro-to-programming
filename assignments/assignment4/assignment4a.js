/* Part 1: Tip Calculator
 *
 * For this assignment, you're going to build a "tip calculator".
 */

/* Step 1: Write a tip calculator!
 * Write a function called "calculateTip". The "calculateTip" function should
 * accept two parameters: the amount of the bill to calculate a tip for, and
 * the percentage to tip. It should **return** the amount of tip you should 
 * pay.
 */



/* Step 2: Test your tip calculator
 * Invoke your tip calculator a few times with different arguments (just make
 * them up at this point) and log the results to the console to make sure your
 * function is working correctly.
 */


/* Step 3: Hook your tip calculator function up to the web page!
 *
 * Here's what I want you to do:
 * 1. Add an event listener to the "submit" event of the tipCalculator <form>
 *    on the page.
 * 2. In your event listener:
 *    - Call the preventDefault() method of the event object. If you don't,
 *      then submitting the form will take you to the Creative Circus
 *      website.
 *    - alert "It's working!" using the alert() method.
 *
 * 3. Once you're event listener is working, delete the alert and do these
 *    steps inside of your event listener instead:
 *    - Get the value of the billAmount text field
 *    - Get the value of the percentageToTip text field
 *    - Convert both values into numbers, and run them through your tip
 *      calculator.
 *    - Add the tip to the original amount and display the result 
 *      in the totalAmountToPay <div>
 *
 * Note: The currently entered text in any text field is stored as the "value"
 * attribute on it's DOM element. This is a **string**, so you'll need to use
 * one of the techniques that you know to turn a string into a number.
 */

/* Step 4: Make the page look better by editing the CSS and HTML. */

