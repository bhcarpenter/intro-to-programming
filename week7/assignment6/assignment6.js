/* Assignment #6
 *
 * This assignment is designed to walk you through building a small web page
 * application using the techniques you already know.
 *
 * You're going to build a (very) simple contact manager! Follow the steps
 * below.
 */


/* Step #1
 * -------
 * Learn how to use the log() method of the built-in console object!
 *
 * console.log() is a handy tool for testing your program as you go along. You
 * can think of it like the show() function that we've been using, but instead
 * of displaying messages on the screen, console.log() displays the parameter
 * that you give to it as a message in the Javascript console (where you've
 * been going to see error messages on your web pages). In case you forgot, you
 * can get to the console in Chrome on OS X by pressing Command-Option-j
 *
 * Try it out now! Call console.log() with the string "Hello World!" as a
 * parameter.
 */



/* Step #2
 * -------
 * console.log() is great because it allows you to test variables without
 * requiring you to set up a special place on your web page for testing
 * messages.
 *
 * It also has another neat feature. Invoke console.log() with the following
 * varible (person) as a parameter and check out how it is displayed.
 */

var person = {
    firstName: 'John',
    lastName: 'Trebert',
    email: 'john@trebert.net'
};



/* Step #3
 * -------
 *  Now try it with the following variable (grades) as a parameter.
 */
var grades = [
  87,
  100,
  79,
  87,
  90
];



/* Step #4
 * -------
 * Back in Assignment #3 you wrote a function that accepted an object that
 * represented a person, and displayed their contact information like it
 * was an email signature. We're going to do the same thing here, but with
 * a few changes:
 *
 * 1. We're only going to worry about firstName, lastName, and email instead
 * of all of the contact information.
 * 2. We're going to build a string and return it instead of displaying it
 * directly in the function. You'll see why later.
 *
 * Go ahead and build a contactInformation() function that accepts one
 * parameter (an object) and returns a string that contains that object's
 * firstName, lastName, and email properties.
 *
 * Feel free to use the posted solution for Assignment 3 Part A Question 6 as
 * a starting point if you wish.
 */



/* Step #5
 * -------
 * Now invoke that function with the person variable I wrote above as a
 * parameter and store the result into a variable. Then call console.log()
 * with that variable as a parameter to check your work.
 */



/* Step #6
 * -------
 * OK, so we really aren't going to use the contactInformation() function that
 * you wrote above in our web application. That was just a warm up for this
 * next part. Now, write a function called contactInformationHTML() that is
 * just like contactInformation(), but instead of returning a boring text
 * string, return a string of HTML (in other words, create a string that has
 * HTML code in it as well as your content). The HTML can use something like
 * this:
 *
 * <article>
 *    <h1>Person Name</h1>
 *    <p><strong>Email:</strong> email@address.com</p>
 * </article>
 *
 * Later, we'll use jQuery to insert this HTML onto the page, similar to how
 * we added to the list in the jQuery assignment.
 */



/* Step #7
 * -------
 * Now invoke the contactInformationHTML() function with the person object
 * as a parameter, and check your result using console.log()
 */



/* Now we're going to start working with the DOM. To make sure that the DOM
 * objects have been created before we start trying to work with them,
 * we're going to write the rest of our code inside of a function that is
 * executed when the 'ready' event of the document object is fired. I'm doing
 * this part for you, but get used to it.
 */
jQuery(document).on('ready', function() {

    /* Step #8
     * -------
     * We're going to be working with the contacts <div> a good bit, so call
     * jQuery with a selector that will target that <div> and store the
     * resulting jQuery object into a variable called contacts.
     */



    /* This variable now holds an object that represents the contacts <div>,
     * so the built-in methods that we're going to call on it (namely append
     * and empty) will change what appears in that <div> on the screen.
     */

    /* Step #9
     * -------
     * Write an event listener that listens to the submit event of the
     * addContactForm form, similar to Assignment #5, that does the following:
     * 1. Calls the preventDefault method of the event object.
     * 2. Gets the current value of the firstName, lastName, and email fields.
     * 3. Creates an object that holds those values. It should have a the same
     * property names as the person object that I wrote above.
     * 4. Call the contactInformationHTML() function that you wrote with the
     * new object that you just created. Store the result into a variable named
     * html.
     * 5. Call the append() method of the contacts variable (it holds a jQuery
     * object that has this method) and pass the html variable as the first
     * parameter.
     *
     * This should display the contact information in the contacts <div> when
     * the form is submitted.
     */



    /* Step #10
     * --------
     * Create an event handler that listens to the click event of the
     * clearContacts button. When this button is clicked, call the empty()
     * method of the contacts variable (it holds a jQuery object that has
     * this method) that you defined earlier.
     */



    /* Step #11
     * --------
     * One last thing.
     *
     * Update the CSS file of the web page to make the form and output look
     * nicer.
     */

}); // End of the document.ready event handler.
