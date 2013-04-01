#Making Decisions

---
#if statements
- `if` statements are used for "branching" in code.
- If the expression given to `if` is *truthy* then the block following it will be executed
- The `if` statement has an optional `else` statement that is executed if the expression given to `if` is falsey

.

    !javascript
    var x = 5;
    if (x > 3) {
        show("x is greater than 3");
    } else {
        show("x is not greater than 3");
    }

---
#Truthiness and Falsiness

- When something other than a boolean is used in a boolean context it is coerced into a boolean
- Falsey: `0, null, undefined, "", false, NaN`
- Truthy: everything else including `true` and the string 'false'

. 

    !javascript
    // Falsey. Won't show.
    if (0) show(0);
    if (null) show(null);
    if (undefined) show(undefined);
    if ("") show("");
    if (false) show(false);
    if (NaN) show(NaN);

    // Truthy. Will show.
    if ("false") show("false");
    if (1234) show(1234);
    if ("hello") show("hello");

---
#Combining if/else Statements
You can combine if else statements to test several different conditions that are mutually exclusive

    !javascript
    if (isRobot) {
        say("10101010101");
    } else if (isHuman) {
        say("hello!");
    } else if (isDog) {
        say("woof woof");
    } else {
        say("...");
    }

---
#Doing the Same Thing<br />Over and Over

---
#While Loops
- A `while` loop is the most basic looping construct
- It repeats a given block of code "while" a given expression is truthy.

.

    !javascript
    var num = Math.random();
    while (num < 0.7) {
        show(num.toFixed(2));
        num = Math.random();
    }

    show("Greater than 0.7: " + num.toFixed(2));

---
#For loop
- For loops are used when the number of loops that need to be done can be determined
- The `for` loop is made of three parts:

        for (intialization; condition; increment) {
            //code to execute
        }

- First the intialization expression is executed, usually to set a loop counter
- Next the condition is checked. If it is truthy then the code block is executed
- Finally the increment expression is executed and then it begins again with the condtion
- Notice intiailization only happens once

---
#For loop examples
A simple for loop

    !javascript
    for (var i = 0; i < 5; i++) {
        show(i);
    }

These are called nested loops

    !javascript
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 2; j++) {
            show(i + ", " + j);
        }
    }

---
#Loop Example

    !javascript
    for (var i = 0; i < 3; i++) {
      show(i);
    }

Is just a shorter way of writing:

    !javascript
    var i = 0;

    while (i < 3) {
      show(i);
      i++;
    }

---
#Break Statement
- The `break` statement can be used to exit out of a loop

.

    !javascript
    var x = 0;
    while (x < 5) {
        x++;
        show(x);

        if (x == 2) {
            break;
        }
    }

---
#Continue Statement
- The `continue` statement is similar to the break statement, except that instead of leaving the loop altogether it goes immediately to the next iteration.

.

    !javascript
    var x = 0;
    while (x < 5) {
        x++;

        // Skip to the next one when x is 2!
        if (x == 2) {
            continue;
        }
        
        show(x);
    }

---
#Some examples

---
# Countdown

    !javascript

    for (var i = 10; i >= 1; i--) {
      show(i);
    }
    show('BLAST OFF!!!');

---
#Tic-tac-toe
This code simulates a random tic-tac-toe board that doesn't take turns into account

    !javascript
    for (var i = 0; i < 3; i++) {
        row = "";

        for (var j = 0; j < 3; j++) {

            if (Math.random() > 0.5) {
              row = row + "X";
            } else {
              row = row + "O";
            }

        }

        show(row);
    }

---
#Tic-tac-toe
Here's a (slightly) better version.

    !javascript
    var remainingXs = 5;
    var remainingOs = 5;
    for(var i = 0; i < 3; i++){
        row = "";

        for(var j = 0; j < 3; j++){

            if (remainingOs == 0) {
              row = row + "X";
            } else if (remainingXs == 0) {
              row = row + "O";
            } else if (Math.random() > 0.5) {
              row = row + "X";
              remainingXs--;
            } else {
              row = row + "O";
              remainingOs--;
            }

        }

        show(row);
    }

---
#Advanced Topics: Ternary Operator
- JavaScript has a ternary operator to do quick one line if/else statements
- The word *ternary* just means *composed of three items*
- In this case, three expressions, **condition** `?` **if true** `:` **if false**

.

    !javascript
    var isBoy = true;
    var color = isBoy ? "blue" : "pink";
    show(color);

---
#Advanced Topics: Do/While Loops 
- a `do while` loop is essentially the same as a `while` loop except that the block of the loop will always execute at least once.

.

    !javascript
    do {
        var age = prompt("Enter your age");
        age = parseInt(age, 10);
    } while(isNaN(age));

---
#Advanced Topics: Do/While Loops

The previous example could have been written as a while loop like this:

    !javascript
    var age = prompt("Enter your age");
    age = parseInt(age, 10);
    while (isNaN(age)) {
        age = prompt("Enter your age");
        age = parseInt(age, 10);
    }

