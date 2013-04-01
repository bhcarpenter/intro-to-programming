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
        log("x is greater than 3");
    } else {
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
    } else if (isHuman) {
        log("hello!");
    } else if (isDog) {
        log("woof woof");
    } else {
        log("...");
    }

---
#Truthiness and Falsiness

- When something other than a boolean is used in a boolean context it is coerced into a boolean
- Falsey: `0, null, undefined, "", false, NaN`
- Truthy: everything else including `true` and the string `'false'`

. 

    !javascript

    // Falsey. Won't show.
    if (0) { 
      log('0 is truthy!');
    }

    if (null) {
      log('null is truthy!');
    }

    if (undefined) {
      log('undefined is truthy!');
    }

---
#Truthiness and Falsiness

    !javascript
    if ("") {
      log('"" is truthy!');
    }

    if (false) {
      log('false is truthy!');
    }

    if (NaN) {
      log('NaN is truthy!');
    }

    // Truthy. Will show.
    if ("false") {
      log('"false" is truthy!');
    }

    if (1234) {
      log('1234 is truthy!');
    }

    if ("hello") {
      log('"hello" is truthy!');
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
    log(color);

---
