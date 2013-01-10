---
#Hello World
##Everyones favorite first program

    !javascript
    var message = "hello, world";

    // Displays hello, world on the screen
    log(message);

---
#Statements

Javascript programs consist of a sequence of "statements", each of which describes some sort of operation that the computer should perform.

Statments (usually) end with a semi-colon.

Although it isn't required, statements should each be on their own line for readability's sake.

    !javascript
    var message = "hello, world";
    log(message);

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
    log("Strings are \"important\".");

---
#Data Types: String Examples

    !javascript
    log("hello");
    log("Tim said, 'hello'");
    log("I am a line\nI am a line too");

    log("\t\ttwo tabs for me");
    log(""); //empty string
    log("\u00BFQue pasa?");

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

    log( squared(3) )
    log( squared(5) )

Right now, the important thing is that you can "call" a function by adding parenthesis after it's name, optionally including any values that the function needs inside of the parenthesis.

---
#Data Types: Objects

Finally, Javascript has one more data type: objects. Objects are simply compilations of primitives and functions. We'll talk more about objects in a few weeks as well. 

    !javascript

    log( Math.sqrt(9) )
    log( Math.sqrt(25) )

Right now the important thing is that you can access the primitive values and functions by adding a period and the related data value or method's name after the name of the object.

---
#Operations

But data types aren't really any use until we do something with them. JavaScript has a whole slew of "operations" that can be performed on data.

---
#Operations: Math
One of the main ways of telling the computer to do something is through operators. Some of the most basic operators do simple arithmatic.

    !javascript
    log(5 + 5); //add
    log(10 / 2); //divide
    log(52 % 10); //modulos
    log(5 * 5); //multiply

The precedence of the operators is just like you learned in math class. 

- parentheses first
- mutliplication, division, modulos
- add, subtract
- then go left to right

---
#Operations: Math
What does this print?

    !javascript
    log( 11 % 3 + 3 * 2 - 8 + (12 * 1) );

---
#Operations: Concatenation

The + operator has another meaning when it is used in between strings. It joins the two strings together into a single string. This is called concatenation.

    !javascript
    log('hello' + ', ' + 'world');
    log('5' + 55);

Note above that because the first value is a string, concatenation is performed instead of addition (the other value is converted to a string, and then the two values are joined together).

