#Doing the Same Thing<br />Over and Over

---
#While Loops
- A `while` loop is the most basic looping construct
- It repeats a given block of code "while" a given expression is truthy.

.

    !javascript
    var counter = 0;
    while (counter < 10) {
        log(counter);
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

