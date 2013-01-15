---
#Variables
Think of variables as containers to hold your data. You can store data into variables using the assignment operator (=).

    !javascript
    var name;   // This is call "declaring" the variable.
    name = "Jon";
    name = "Tim";

    // You can also assign a value to a variable at the same time you declare it.
    var name2 = "Sarah";  

- You only need to declare a variable once.
- If you don't declare your variables __BAD THINGS WILL HAPPEN__.

---
#Variables: Usage

You can substitute variables anywhere that you would normally use the actual data value.

    !javascript
    var tomsAge = 25;
    var toddsAge = 30;
    log( tomsAge + toddsAge );

    tomsAge = 35;
    log( tomsAge + toddsAge );

    // Our arithmatic example from earlier.
    var part1 = 11 % 3 + 3 * 2 - 8;
    var part2 = 12 * 1;
    log( part1 + part2 );

---
#Variables: Identifiers

An "identifier" is a fancy word for the variable's name.

- Identifiers are case sensitive
- Must begin with a letter, underscore, or dollar sign
- After the first character there can be digits, letters, underscores and dollar signs
- You cannot use reserved words as identifiers. These include:

abstract, 
boolean, break, byte, 
case, catch, char, class, const, continue, 
debugger, default, delete, do, double, 
else, enum, export, extends, 
false, final, finally, float, for, function, 
goto, 
if, implements, import, in, instanceof, int, interface, 
long, 
native, new, null, 
package, private, protected, public, 
return, short, static, super, which, synchronized, 
this, throw, throws, transient, true, try, typeof, 
var, volatile, void, 
while, with

You will also want to avoid [functions and attributes of the window object](https://developer.mozilla.org/en-US/docs/DOM/window) (more on the window object later). These are global variables and you can override them by declaring your own.

---
#Variables: Valid Identifier Examples

    !javascript
    var name;
    var Name;
    var firstName;
    var first_name;
    var _first_name;
    var D20;
    var $element;
    var _;
    var $;
    var MAX_VALUE;

Note that just because an identifier is valid doesn't mean that it's a good one to use.

---
#Variables: Invalid Identifier Examples

    !javascript
    var 1234;
    var #abc;
    var &two;
    var hello-world;
    var two&two;
    var class;
    var default;
    var final;
    var package;
    var no-dashes-allowed;

---
#Variables: Operators For Variables

    !javascript
    var x = 5;
    var y = 3;
    x += 4;    // x = x + 4;
    x -= 2;    // x = x - 2;
    y *= x     // y = y * x;
    x *= 3;    // x = x * 3;
    x /= 7;    // x = x / 7;
    x %= 3;    // x = x % 3;
    x++;       // x += 1;
    y--;       // y -= 1;

    /* And also these, which you will not see again in this class. */
    ++x;       // x += 1;
    --y;       // y -= 1;

    log("x: " + x);
    log("y: " + y);

---
#Variables: typeof

In JavaScript, (unlike many other progamming languages), any data value type can be assigned to any variables. This is called "loosly typed". The current data type of a variable can be determined using the `typeof` keyword.

    !javascript
    var x = 4;

    log( typeof x );

    x = 'Test';

    log( typeof x );

    x = '5';

    log( typeof x );

    var y;
    log( typeof y );

---
#Variables: undefined and null

As illustrated on the previous slide, if a variable hasn't had a value assigned to it yet, the `typeof` keyword returns a special data type called "undefined".

However, if you want to explicitly set a variable to "nothing", instead of setting it to undefined, programmers (by convention) set the variable to a special object called "null".

    !javascript
    var x;
    x = 4;

    log( typeof x );

    x = null;

    log( typeof x );
    log( x );

