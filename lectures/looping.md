#Doing the Same Thing<br />Over and Over

---
#While Loops
- A `while` loop is the most basic looping construct
- It repeats a given block of code "while" a given expression is truthy.

.

    !javascript
    var counter = 0;
    while (counter < 10) {
        log(num);
        counter++;
    }

    log("Final value of counter: " + counter);

---
#While Loops

Here's another example:

    !javascript
    var num = Math.random();
    while (num < 0.7) {
        log(num);
        num = Math.random();
    }

    log("Greater than 0.7: " + num);

---
#Break Statement
- The `break` statement can be used to exit out of a loop early.

.

    !javascript
    var x = 0;
    while (x < 5) {
        log(x);

        if (x === 2) {
            break;
        }

        x++;
    }

    log("Final value of x: " + x);

---
#Continue Statement
- The `continue` statement is similar to the break statement, except that instead of leaving the loop altogether it goes immediately to the next iteration.

.

    !javascript
    var x = 0;
    while (x < 5) {
        x++;

        // Skip to the next one when x is 2!
        if (x === 2) {
            continue;
        }

        log(x);
    }

    log("Final value of x: " + x);

---
