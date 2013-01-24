#Functions

---
#Functions

Loops are great if you want to repeat somthing *right now*. What if you want to save a sequence of steps and execute them later *whenever you want*?

    !javascript
    var sayHi = function() {
      log('Hello, everybody!');
    }

    // Run the function!
    // We call this "invoking" the function.
    sayHi();

    // Do some other stuff
    var x = 'test';

    // Invoke it again!
    sayHi();

---
#Creating a Basic Function

    !javascript
    var sayHi = function() {
      log('Hello, everybody!');
    }

- At first glance, creating a function looks a lot like creating an object. However, instead of putting key: value pairs inside of the braces, we put lines of code to execute!
- Note the `function` keyword, which lets JavaScript know that you're about to define a function.
- Also, note the parenthesis after the `function` keyword. We'll talk more about them later.
- When you're ready to run the code inside of the function, "invoke" it by putting the parenthesis after the variable name that holds the function, like this: `sayHi();`

You have already been using lots of functions like `parseInt`, `prompt`, `console.log`, `alert`, etc..

---
#Function Parameters

To make functions more useful, you can set them up to accept values to work with. We call these "parameters", but really they're just variables that automatically get filled with values you specify when you invoke the function.

    !javascript
    var sayHiTo = function(name) {
      log('Hello, ' + name + '!');
    }

    sayHiTo( 'Brandon' );
    sayHiTo( 'Kaiti' );

You can also make functions that accept multiple parameters:

    !javascript
    var sayHiToBoth = function(name1, name2) {
      var greeting = 'Hello, ' + name1;
      greeting = greeting + ' and ' + name2 + '!';
      log(greeting);
    }

    sayHiToBoth('Brandon', 'Kaiti');
    sayHiToBoth('Kaiti', 'Brandon');

---
#Function Arguments

When you invoke a function that has parameters, you should pass values for the function to work with when you invoke it. The technical term for these values are "arguments".

When you invoke a function, JavaScript takes whatever arguments you specify, sticks them in the function's parameters, and runs the function.

    !javascript
    var sayHiToBoth = function(name1, name2) {
      var greeting = 'Hello, ' + name1;
      greeting = greeting + ' and ' + name2 + '!';
      log(greeting);
    }

    sayHiToBoth('Brandon', 'Kaiti');

    // What do you think will happen if 
    // we leave out the second value?
    sayHiToBoth('Brandon');

---
#Scope

One more thing you need to know about functions.

**Variables you define in functions only exist inside of the function.**

This has a lot of implications, which we will hopefully have time to talk about later in this course.

---
#Final Thoughts

All of the functions we have made in this lesson have *side effects*. In other words, they change something about the program or display a value.

Next week we are going to talk about functions that *return values*. They can send data back to the code that invokes a function. `Math.min()`, `Math.random()`, and `prompt()` are some examples of built-in functions that return values.

