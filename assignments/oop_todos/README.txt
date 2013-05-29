OOP Todo List
=============

For this assignment, we're going to take your Todo list web page from last week
and organize it using custom object types. Don't worry, I'll walk you through 
it.

By the way, taking existing code and reworking it to either be more organized
(or just better in some way) has a special name in programming. We call it 
"refactoring".

I'll explain more about why we would do this either during class, or when
we go over the solution next week.


Step 1
------
Copy all of your code from the Todo List assignment into this folder. Fix any
bugs that you had.

If your code is FUBAR'd, you can use the solution that I posted, but I'd much
rather you use your own code instead.


Step 2
------
Follow the steps below to make a Todo object type.


Step 2.1
--------
Start by making a constructor function called Todo that accepts the todo
text string and date due string as parameters.

Your constructor should store the todo text as a property of the special
`this` object. Pick whatever property name you want as long as it makes
sense.

Your constructor should also take the due date string, convert it into
a Date object, and store that Date as a property of the special `this`
object. Pick whatever property name you want as long as it makes sense.


Step 2.2
--------
Give the Todo `prototype` a method called "dateFormatter". You can just
copy over your code from last week's "dateFormatter" function, with the
following adjustments:
- The function doesn't need any parameters
- Instead of using a parameter, you can use the Date object that you
  saved as a property of `this` during the constructor.
- Since we already have a Date object (instead of a date string), you
  can just use that directly instead of having to convert it to a Date
  inside of the dateFormatter function.


Step 2.3
--------
Give the Todo object type's `prototype` a method called "render". It
should return a string of HTML that displays the Todo. It doesn't
need any parameters, because it has access to that same `this` object
that the constructor has.

You can just copy the code from last week's "renderTodo" function,
but instead of using parameters, use the properties that you saved
to the `this` variable.

Also instead of using the dateFormatter function from last week, use
the new method that you just added to the Todo prototype: this.dateFormatter


Step 3
------
Update your old rendering code to use the new Todo object type. For example:

Old Code: (may have looked something like this)

// do something to get the values
var todo = { title: titleFieldValue, dueOn: dueOnFieldValue };
var html = renderTodo(todo);
// do something to display it on the screen


New Code:

// do something to get the values
var todo = new Todo(titleFieldValue, dueOnFieldValue);
var html = todo.render();
// do something to display it on the screen


Step 3.1
--------
Now that you're using our (much more organized) code, feel free to delete
the old renderTodo and dateFormatter functions from last week (if you
haven't already).


Step 4
------
MAKE IT PRETTY. If you already did this last week and you copied your stuff over,
you're done!


