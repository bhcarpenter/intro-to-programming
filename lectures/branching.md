#Making Decisions

---
#if statements
- `if` statements are used for "branching" in code.
- The code following the `if` will only be executed if the value in the parenthesis is *truthy*

.

    !javascript
    var x = 5;
    if (x > 3) log("x is greater than 3");

---
#blocks

If you want to run more than one statement conditionally, use a `block`. That just means group them together using braces.

    !javascript
    var x = 5;
    if (x > 3) {
      log("x is greater than 3");
      log("display this too.");
    }

I actually prefer always using braces, even if you're only putting one statement in your `if`.

---
#else statements

The `if` statement has an optional `else` statement that is executed if the expression given to `if` is falsey.

    !javascript
    var x = 5;
    if (x > 3) {
        log("x is greater than 3");
    }
    else {
        log("x is not greater than 3");
    }

---
#Combining if/else Statements
You can combine if else statements to test several different conditions that are mutually exclusive

    !javascript
    var isRobot = false;
    var isHuman = true;
    var isDog = false;

    if (isRobot) {
        log("10101010101");
    } 
    else if (isHuman) {
        log("hello!");
    }
    else if (isDog) {
        log("woof woof");
    }
    else {
        log("...");
    }

