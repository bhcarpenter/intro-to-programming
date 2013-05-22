---
#Scope

Scope is whether or not a particular line of code can access a particular variable.

---
#Global Scope
- When a variable is declared outside of a function in the **top level** (more on this later) it is said to be a global variable
- Variables that are **not** declared before they are assigned a value are automatically global variables.

.

    !javascript
    iAmGlobal = 5;

.

    !javascript
    log(iAmGlobal);

---
#Block Scope
- Some programming languages also have "block scope", meaning that any time you have a "block" of code (surrounded by {}), the variables you declare inside of that block can only be accessed inside of that block.
- Javascript doesn't have this.

---
#File Scope
- In addition, some programming languages have a scope of variables for each file (if your program is split among multiple files).
- Javascript doesn't have this either.

---
#Function scope
- Javascript has this!
- Variables declared inside of a function can only be accessed inside of that function.

For example:
 
    !javascript
    var hello = function() {
        var greeting = "hello";
        log(greeting);
    };

    hello();
    log(typeof greeting);

---
#Variable Shadowing
When a variable is declared in a child scope that is already available in a parent scope it is said to "shadow" or "mask" the other variable.

    !javascript
    var greeting = 'goodbye';

    var hello = function() {
      var greeting = 'hello';
      log(greeting);
    };

    hello();
    log(greeting);

---
#Lexical Scoping
- JavaScript's approach to variable scope is called lexical scoping
- Essentially this means that variables defined in a parent scope are available in the child scope too
- THIS IS WHY THE VAR KEYWORD IS IMPORTANT

.

    !javascript
    var greeting = 'goodbye';

    var hello = function() {
      greeting = 'hello';
      log(greeting);
    };

    hello();

    // The above function call modified the 
    // global greeting variable!
    log(greeting);

---
#Advanced Topics: Creating Scope

One trick that advanced Javascript programmers often use is to create a new variable scope using an anonymous function that is executed immediately.

    !javascript
    (function() {

      // Protect "myvalue" so no one else can edit it!
      var myvalue = 100;
      log(myvalue);

    }());

The above is equivalent to:

    !javascript
    var newscope = function() {

      // Protect "myvalue" so no one else can edit it!
      var myvalue = 100;
      log(myvalue);

    };

    newscope();

---
#Scope: More Resources

For more scope examples in Javascript check out: [this post on Stack Overflow](http://stackoverflow.com/questions/500431/javascript-variable-scope).

