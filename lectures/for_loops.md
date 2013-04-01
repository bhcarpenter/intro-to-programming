#For Loops
---
#Review: While loops

Our basic loop looked like this:

    !javascript
    var counter = 0;
    while (counter < 20) {
        // do something

        counter++; // Increment counter by 1
    }

---
#Looping a Specific Number of Times

*Note that this loop is an example of a loop that runs a specific number of
times (20 in this case).*

    !javascript
    var counter = 0;
    while (counter < 20) {
        // do something

        counter++; // Increment counter by 1
    }

Loops like this are so common in programming, that there's a "shortcut" way
of writing them.

---
#For loop

Instead of writing:

    !javascript
    var counter = 0;
    while (counter < 20) {
        // do something

        counter++; // Increment counter by 1
    }

You can use a `for` loop, like this:

    !javascript
    for (var counter = 0; counter < 20; counter++) {
        // do something
    }

---
#For loop
- For loops are used when the number of loops that need to be done can be determined
- The `for` loop is made of three parts:

        for (intialization; condition; increment) {
            //code to execute
        }

- First the intialization expression is executed, usually to set a loop counter
- Next the condition is checked. If it is truthy then the code block is executed
- Finally the increment expression is executed and then it begins again with the condition
- Notice intiailization only happens once

---

