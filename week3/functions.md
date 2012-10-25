#Functions

---
#Functions
- Functions are a way of creating a reusable block of code that either has side effects and/or returns a value
- You have already been using lots of functions like `parseInt`, `prompt`, `show`, `alert`, etc..
- `parseInt` and `prompt` are examples of functions that have a return value
- `show` and `alert` are examples of functions that have a side effect
- A side effect is anything that affects the state of the program including showing something to a user

This add function simply returns the result off adding its two parameters.

    !javascript
    function add(a, b) {
        return a + b;
    }
    show(add(20,5));

---
#Creating a function
- A function is made up of 4 parts
    - the `function` keyword
    - the optional name
    - the optional function arguments seperated by commas
    - the code block to execute when the function is invoked

.

    !javascript
    function add(a, b) {
        return a + b;
    }

    show(add(20,5));


---
#Function name
- Choosing a function name is just like choosing a variable name

.

    !javascript

    // Valid
    function addArguments(a, b) {
        return a + b;
    }

    // Invalid function name.
    function subract-arguments(a, b) {
      return a - b;
    }

---
#Function arguments
- The arguments that a function accepts are special variables that are filled with the values passed to the function when it is invoked
- In this example when the code `add(20,5)` is executed the the values `20` and `5` are stored in the variables `a` and `b` then the expression `return a+b` is executed. 
- If we didn't pass any arguments to the `add` function (for example `add()`) then the values of `a` and `b` would be undefined. As you can see in the example the last line produces the result of `undefined + undefined` or `NaN` 

.

    !javascript
    function add(a, b) {
        return a + b;
    }

    show( add(20,5) );
    show( add(30,8) );
    show( add() );

---
#Function invocation
- Functions can be *invoked* by adding `()` after the functions name and optionally passing values to the function.
- When a function is invoked the values passed to the function are stored in the argument variables and control of the program is turned over to the function.
- Control is returned to the invoking statement after a `return` statement is encountered or the last line of function is executed

.

    !javascript
    function add(a, b) {
        return a + b;
    }

    show( add(20,5) );
    show( add(30,8) );
    show( add() );

---
#Return statement
- The `return` statement is used to return a value to the invoking expression
- In the *add* function the result of `a+b` is returned to the caller.
- If a function does not have a return statement then `undefined` is returned
- A function can have multiple return statements. This is useful in conjuction with branching statements like `if, else, or switch`

.

    !javascript
    function blackOrWhite(color) {
        if (color === "FFFFFF") {
            return "white";
        } else if (color === "000000") {
            return "black";
        } else {
            return "other";
        }
    }
    show( blackOrWhite("000000") );

---

---
#Anonymous functions

It's entirely possible to create functions that don't have names. By themselves, they don't do much:

.

    !javascript
    function(a, b) { 
        return a + b; 
    }

But we can assign them to a variable!

    !javascript
    var add = function(a, b) { 
        return a + b; 
    };

    show( add(2,5) );

Note that when you are assigning a function to a variable like this, you have to have a semicolon at the end (just like when you assign primitive values to variables).

---
#Anonymous functions

Anonymous functions are also used as "callbacks", a concept we'll discuss next week when we talk about jQuery.

---
#Functions: What's the point?

Two main reasons:
- Organize your code
- Avoid coding the same sequence of statements over and over again.

