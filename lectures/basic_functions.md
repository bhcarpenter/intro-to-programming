#Functions

---
#Functions

Loops are great if you want to repeat somthing *right now*. What if you want to save a sequence of steps and execute them later *whenever you want*?

    !javascript
    var sayHi = function() {
      log("Hello, everybody!");
    };

    // Run the function!
    // We call this "invoking" the function.
    sayHi();

<script>
var sayHi = function() {
  log("Hello, everybody!");
};
</script>
<br />

    !javascript
    // Do some other stuff
    var x = "other stuff";

    // Invoke it again!
    sayHi();
    sayHi();
    sayHi();
    sayHi();

---
#Creating a Basic Function

    !javascript
    var sayHi = function() {
      log("Hello, everybody!");
    };

- At first glance, creating a function looks a lot like creating a loop. Here's the general format:
    1. The `function` keyword 
    2. Parenthesis (we'll talk about what goes inside of the parenthesis in a bit)
    3. A block of code
- Note that unlike loops we actually assign the whole function to a variable. This gives us a name to use when we want to run the function later.
- When you're ready to run the code inside of the function, "invoke" it by typing the name of the function followed by parenthesis, like this: `sayHi();`

You have already been using lots of built-in functions like `parseInt`, `prompt`, `console.log`, `alert`, etc..

---
#Aside: Another Way of Writing Functions

There's another way of writing functions that you might see in your textbook. You can actually write the previous example like this:

    !javascript
    function sayHi() {
      log("Hello, everybody!");
    }

I don't care which way you do it, but to keep things simple I'm always going to write functions the other way.

---
#Function Parameters

To make functions more useful, you can set them up to accept values to work with. We call these "parameters", but really they're just variables that automatically get filled with values you specify when you invoke the function.

    !javascript
    var sayHiTo = function(name) {
      log("Hello, " + name + "!");
    };

    sayHiTo( "Brandon" );
    sayHiTo( "Kaiti" );

You can also make functions that accept multiple parameters:

    !javascript
    var sayHiToBoth = function(name1, name2) {
      var greeting = "Hello, " + name1;
      greeting = greeting + " and " + name2 + "!";
      log(greeting);
    };

    sayHiToBoth("Brandon", "Kaiti");
    sayHiToBoth("Kaiti", "Brandon");

---
#Function Arguments

When you invoke a function that has parameters, you should pass values for the function to work with when you invoke it. The technical term for these values are "arguments".

When you invoke a function, JavaScript takes whatever arguments you specify, sticks them in the function's parameters, and runs the function.

    !javascript
    var sayHiToBoth = function(name1, name2) {
      var greeting = "Hello, " + name1;
      greeting = greeting + " and " + name2 + "!";
      log(greeting);
    };

    sayHiToBoth("Brandon", "Kaiti");

    // What do you think will happen if 
    // we leave out the second value?
    sayHiToBoth("Brandon");

---
#Scope

One more thing you need to know about functions.

**Variables you define in functions only exist inside of the function.**

This has a lot of implications, which we will hopefully have time to talk about later in this course.

