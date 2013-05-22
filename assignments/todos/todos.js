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
 * In your event handler:
 * 1. Get the current value of the #title and #dueOn properties
 * 2. Use them to create an object with properties called "title" and "dueOn".
 * 3. Then log object variable to the console.
 *
 * At this point you should be able to verify that your event listener is
 * getting called when you submit the form, and that your code can get the
 * current value out of the form fields.
 */


/* Step 2: Make a function that will generate HTML from the todo object.
 *
 * Create a function called "renderTodo"
 *
 * - It should accept an object that has "title" and "dueOn" properties (just 
 *   like the one you're creating in your event handler) as a parameter.
 * - It should return a string of HTML that will display the title and due date.
 *
 * Here's the HTML that I would recommend using:
 *
 * <article>
 *    <h1>[TODO TEXT]</h1>
 *    <p>Due On: [DUE ON]</p>
 * </article>
 *
 * If you want you can test this by calling it with a few different made-up 
 * objects and log the results to the console.
 */


/* Step 3: Draw the Todo onto the screen.
 * - Go back to the line of code in your event handler that logs the object you
 *   created to the console.
 * - Now, instead of logging your todo object to the console, call your 
 *   renderTodo() method, with your todo object as an argument, and store the
 *   result (a string of HTML) into variable.
 * - Then append that HTML to the #todos div.
 */


/* Step 3: Fancy dates!
 *
 * Instead of just regurgitating the text that the user types in to the #dueOn 
 * field, let's use JavaScript's built-in Date objects to customize how the
 * due dates are displayed.
 *
 * Create a function called dateFormatter, that accepts a string of text
 * as a parameter. It should:
 * - Create a new date object from the text given to the function.
 * - Return "Past Due" if the due date is in the past.
 *   Hint: The getTime method of date objects will give you a number that
 *   you can use to compare dates against each other.
 * - Otherwise, return a string in this format: "January 22, 2013 at 23:00"
 *   Make sure to replace the sample month, day, etc. with the values from
 *   the date object you created.
 *
 * Now go back to your renderTodo() function and use your newly-created 
 * dateFormatter() function to spruce up the dueOn property of the todo
 * object before adding it to the HTML.
 */


/* Step 4: Let's be OCD.
 *
 * Go back to your event handler and clear the form fields (i.e. set the
 * value of each one to an empty string) after your code that puts the Todo
 * on the page.
 * 
 * Extra Credit: If you really want to be user-friendly, figure out how to
 * use jQuery's "focus()" method to put the cursor back into the #title
 * field so they can immediately start typing a new Todo.
 */


/* Step 5: One more thing.
 *
 * Make it pretty!
 */


