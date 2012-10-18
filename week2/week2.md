#Homework Review

---
#Let's review


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

