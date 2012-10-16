---
#Hello World
##Everyones favorite first program

    !javascript
    var message = "hello, world";

    // Displays hello, world on the screen
    show(message);

---
#Statements

Javascript programs consist of a sequence of "statements", each of which describes some sort of operation that the computer should perform.

Statments (usually) end with a semi-colon.

Although it isn't required, statements should each be on their own line for readability's sake.

    !javascript
    var message = "hello, world";
    show(message); // Displays hello, world on the screen

---
#Comments
Comments don't actually do anything, they're just a way of leaving notes for yourself (or whoever else may be reading your program) in the code.

Javascript has two different types of comments: single line, and multi-line.

##Single-line comments

    !javascript
    // This is "single line" comment. It ignores everything until the end of the line.

## Multi-line comments

    !javascript
    /* 
    This is a "multiple line" comment. It ignores everything until 
    the next asterisk-slash combination.

    These are also called C-style comments.
    */

---
#Data Types

##Primitive Data Types
The three basic data types in Javascript are:

 - numbers
 - strings
 - booleans

These three data types are called "primitive" data types.

##Functions and Objects
In addition to the primitive data types, Javascript has two other data types: functions and objects. Sometimes these are called "composite" or "complex" data types.

---
#Data Types: Numbers

- In JavaScript, there is one "number" datatype for all numeric values.
  *This is different from most programming languages where there is one type for "whole numbers" (called Integer), and one type for numbers with a decimal point (called Float, or floating point)*
- Javascript supports positive and negative numbers, with or without decimal points, and even the numbers infinity and negative infinity.

##Examples

    !javascript
    0
    123
    3.14
    .3333333
    5e10
    1.5e-10
    -27.1
    Infinity
    -Infinity
    0xF3
    0377
    NaN

The last one up there, NaN, is a special number that means "Not a Number". More on that later.

---
#Data Types: Strings

- A String is a series of characters
- Strings are defined by surrounding zero or more characters with single or double quotes. The type of quote doesn't matter, but the ending quote must match the starting one.
- The "escape character", backslash, can be used to add characters to a string that are not normally allowed.
- Characters that need escaping are ", ', \
- You can include single quotes in a double quoted string and double quotes in a single quoted string without escaping them
- to create a new line use: \\n
- to create a tab use: \\t
- to create a unicode character use: \\uFFFF (where FFFF is the unicode sequence)

.

    !javascript
    show("Strings are \"important\".");

---
#Data Types: String Examples

    !javascript
    show("hello");
    show("Tim said, 'hello'");
    show("I am a line\nI am a line too");

    show("\t\ttwo tabs for me");
    show(""); //empty string
    show("\u00BFQue pasa?");

---
#Data Types: Booleans

- A boolean is a value that is either _true_ or _false_.

---
#Data Types: Functions

Functions store a series of operations together so that they can be run over and over again. We'll cover functions more in a few weeks. 

    !javascript
    function squared( num ) {
      return num * num;
    }

    show( squared(3) )
    show( squared(5) )

Right now, the important thing is that you can "call" a function by adding parenthesis after it's name, optionally including any values that the function needs inside of the parenthesis.

---
#Data Types: Objects

Finally, Javascript has one more data type: objects. Objects are simply compilations of primitives and functions. We'll talk more about objects in a few weeks as well. 

    !javascript

    show( Math.sqrt(9) )
    show( Math.sqrt(25) )

Right now the important thing is that you can access the primitive values and functions by adding a period and the related data value or method's name after the name of the object.

---
#Operations

But data types aren't really any use until we do something with them. JavaScript has a whole slew of "operations" that can be performed on data.

---
#Operations: Math
One of the main ways of telling the computer to do something is through operators. Some of the most basic operators do simple arithmatic.

    !javascript
    show(5 + 5); //add
    show(10 / 2); //divide
    show(52 % 10); //modulos
    show(5 * 5); //multiply

The precedence of the operators is just like you learned in math class. 

- parentheses first
- mutliplication, division, modulos
- add, subtract
- then go left to right

---
#Operations: Math
What does this print?

    !javascript
    show( 11 % 3 + 3 * 2 - 8 + (12 * 1) );

---
#Operations: Concatenation

The + operator has another meaning when it is used in between strings. It joins the two strings together into a single string. This is called concatenation.

    !javascript
    show('hello' + ', ' + 'world');
    show('5' + 55);

Note above that even when only one of the two values is a string, concatenation is performed instead of addition (the other value is converted to a string, and then the two values are joined together).

---
#Operations: Comparison

Comparing two values is something that you will do a lot of when writing programs, especially when we get to branching and looping.  Here are the comparison operators.

- `>=, <=, >, <` inequality
- `===, ==` equality
- `!=, !==` not equal

.

    !javascript
    show(5 > 6);
    show(5 < 6);
    show(5 === 6);
    show(5 !== 6);
    show(6 >= 6);

---
#Operations > Logical

Sometimes comparing two values is not enough. These are logical operators that are used to combine booleans.

- `!` not
- `&&` logical and
- `||` logical or

.

    !javascript
    show( 5 < 6 && 6 < 7 );
    show( !(2 == 3) );
    show( 2 > 3 || "red" == "red" );

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
    show( tomsAge < toddsAge );

    tomsAge = 35;
    show( tomsAge < toddsAge );

    // Our arithmatic example from earlier.
    var part1 = 11 % 3 + 3 * 2 - 8;
    var part2 = 12 * 1;
    show( part1 + part2 );

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
return, short, static, super, withch, syncrhonized, 
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

    show("x: " + x);
    show("y: " + y);

---
#Variables: Types

In JavaScript, (unlike many other progamming languages), any data value type can be assigned to any variables. This is called "loosly typed". The current data type of a variable can be determined using the "typeof" keyword.

    !javascript
    var x = 4;

    show( typeof x );

    x = 'Test';

    show( typeof x );

    x = '5';

    show( typeof x );

    var y;
    show( typeof y );

---
#Variables: undefined and null

As illustrated on the previous slide, if a variable hasn't had a value assigned to it yet, the typeof statement returns a special data type called "undefined".

However, if you want to explicitly set a variable to "nothing", instead of setting it to undefined, programmers (by convention) set the variable to a special object called "null".

    !javascript
    var x;
    x = 4;

    show( typeof x );

    x = null;

    show( typeof x );
    show( x );

---
#Common Programming Scenarios

---
#Math

Javascript provides us with a global Math object that has several useful methods.

Here are a few of them

    !javascript
    var num = 2.5;
    var x = -3;
    var y = 2;
    var z = 4;

    show(Math.abs(x));     // absolute value
    show(Math.ceil(num));  // ceiling.. rounds up
    show(Math.floor(num)); // rounds down
    show(Math.round(num)); // "normal" round
    show(Math.pow(x,y));   // power... x^y
    show(Math.random());   // a float between 0 and 1.
    show(Math.sqrt(z));    // square root
    show(Math.max(x,y));   // largest number
    show(Math.min(x,y));   // smallest number
    show(Math.PI);         // PI

All of the typical trig functions are on Math also

---
#Random Numbers

Random numbers are useful to add variability to your programs, especially if you are developing games (assignment 2 w00t!).

The Math.random() method returns a random float from 0 up to (but not including) 1.

##Generate a random number from 0 up to 10.

    !javascript
    var rnd = Math.random();
    show(rnd);

    rnd = rnd * 10;
    show(rnd);

    rnd = Math.floor(rnd);
    show( rnd );

---
#Doing something every X seconds.

We'll talk about this more after we know how to write our own functions.

If you're really curious, check out these functions:

- [setTimeout](https://developer.mozilla.org/en-US/docs/DOM/window.setTimeout)
- [setInterval](https://developer.mozilla.org/en-US/docs/DOM/window.setInterval)

---
#Working With Numbers

- Numbers have a few helpful methods that help with displaying them
- Number.toPrecision(*precision*) produces a string with the number of significant figures specified.
- Number.toFixed(*digits*) allows you to specify the number of digit to appear after the decimal place.

.

    !javascript
    var x = 513.05456;
    show(x.toPrecision(1));
    show(x.toPrecision(4));  // notice rounding
    show(x.toPrecision(10)); // extra zeroes

    show(x.toFixed(1));
    show(x.toFixed(2));
    show(x.toFixed(8));

    show(3.14159.toFixed(2));
    show(typeof 5.0.toFixed());

---
#Working With Strings

- Like numbers, Strings have several helpful functions to aid in working with them

.

    !javascript
    var s = "Creative Circus";

    show(s.charAt(3));
    show(s.indexOf('r'));
    show(s.lastIndexOf('r'));
    show(s.replace("Creative", "Barnum & Bailey"));
    show(s.search("tive"));
    show(s.slice(2,4));

    // Working with ASCII codes.
    var code = s.charCodeAt(0);
    show(code);

    var character = String.fromCharCode(code);
    show(character);

---
#Converting Strings to Numbers

- It is a very common task to convert a string into a Number in JavaScript, because all input that can be given by a user is presented as a string in JavaScript
- You can use the `Number()` built-in function.
- You can use `parseInt()` if you need an integer
- You can use `parseFloat()` if you need to retain the decimal  

.

    !javascript
    var x = "2";
    var y = "2";
    show(x+y);
    show(Number(x) + Number(y));

---
#Converting Strings to Numbers

- When converting strings to integers you can use a global function called `parseInt()`
- parseInt takes two arguments: the string to parse and a radix.
- the radix is optional but should be used to avoid a hexadecimal or octal interpretation
- If the string passed to parseInt does not begin with a digit or *-* then `NaN` is returned
- parsing of the integer stops if a non digit is encountered but the number so far is returned. This means parseInt cannot be used to determine if a string is an integer. It also means that decimals are truncated. 

.

    !javascript
    show("100" + 10);
    show(parseInt("100",10) + 10);
    show(parseInt("0377"));
    show(parseInt("0377",10));
    show(parseInt("kitty"));
    show(parseInt("999hello",10));
    show(parseInt("3.75",10));
    show(parseInt("-27",10));

---
#Converting Strings to Numbers

- parseFloat is another global function that converts strings to numbers
- as you might gather from its name it parses floats.
- parseFloat takes one argument: the string to be parsed
- a float is a way to represtent decimals in computers

.

    !javascript
    show("3.14159" + 2);
    show(parseFloat("3.14159") + 2);

---
#Final Notes

---
#Whitespace

- In JavaScript whitespace (spaces, tabs, and newlines) are not significant.
- Whitespace is used to make code more readable to humans. 
- Tabs are usually applied to the beginning of expressions inside of blocks ({ })
- Newlines are usually used after expressions
- Spaces are also used in various places to give visual seperation

Check your code with [JS Beautifier](http://jsbeautifier.org/).
