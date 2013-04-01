/* Todo List!
 *
 * Follow the steps below to create a simple TODO list application.
 *
 * Feel free to use jQuery for this, but not any external plugins or other
 * JavaScript files. jQuery is already included on the page for you.
 */


/* Step 1: Create an event handler that listens for the "submit" event of
 * the #addTodoForm form.
 *
 * In your event handler, get the current value of the #title and #dueOn properties
 * and create an object to store them in properties called "title" and "dueOn".
 *
 * Then log that variable to the console.
 */


/* Step 2: Draw the Todo onto the screen.
 *
 * Create a function called "renderTodo"
 *
 * - It should accept an object that has "title" and "dueOn" properties (just 
 *   like the one you're creating in your event handler) as a parameter.
 * - It should return a string of HTML that will display the title and due date.
 *
 * Now go back to your event handler function
 * - Instead of logging your todo object to the console, call renderTodo() with
 *   the object as a variable, and store the result (a string of HTML) into a
 *   variable.
 * - Then append that html to the #todos div.
 *
 * Here's the HTML that I would recommend using:
 *
 * <article>
 *    <h1>[TODO TEXT]</h1>
 *    <p>Due On: [DUE ON]</p>
 * </article>
 *
 */


/* Step 3: Better looking dates. 
 * Our application can still be a lot better. Instead of just displaying the
 * due date, let's show "fuzzy" dates.
 *
 * Create a function called "dateFormatter"
 * - It should accept a string that represents a date (such as the "dueOn"
 *   property of our todo object) as a parameter.
 * - It will return one of these strings:
 *   * "in less than an hour" if the given date is less than an hour from now.
 *   * "tomorrow" if the given date is tomorrow
 *   * "X days from now" otherwise. Replace "X" with the number of days until
 *     the given date.
 *
 * To do this you're going to create a Date object using the given date string
 * and another Date object that holds the current time (see the slides for how
 * to do this). Then you'll use the built-in methods of the date objects to
 * compare the two dates, similar to the birthdateToAge function that you wrote
 * for the warmup.
 *
 * After you have this working, go back to your "renderTodo" function:
 * - In the place where you were adding the dueOn property to the HTML, use
 *   your newly created "dateFormatter" function to add a "pretty" date to
 *   the HTML instead.
 */


/* Step 4: Let's be OCD.
 *
 * Go back to your event handler and clear the form fields (i.e. set the
 * value of each one to an empty string) after your code that puts the Todo
 * on the page.
 */


/* Step 5: One more thing.
 *
 * Make it pretty!
 */


/* Extra Credit: A "delete" button
 * 
 * To get the extra credit, go back to your renderTodo function and add a
 * "delete" button to the HTML that you're generating. You'll probably want
 * to give it a CSS class of "delete" so that you can write an event listener
 * for them.
 *
 * Then create an event listener that listens for the "click" event of
 * every delete button on the page. The event listener should figure out
 * which particular button was clicked, and then remove the todo <article>
 * (or whatever tag you used) from the page.
 *
 * You'll probably need the "target" property of the event object, as well
 * as jQuery's "closest()" function to figure out which <article> to remove.
 *
 * See:
 * http://api.jquery.com/category/events/event-object/#post-211
 * http://api.jquery.com/closest/
 */

