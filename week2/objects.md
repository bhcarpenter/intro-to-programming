#Objects

---
#Objects
- Objects are simply a collection of properties names and values
- The property name is used to set or retrieve the associated value
- Property names can be any string including the empty string
- Values can be anything that can be stored in a variable: numbers, strings, booleans, null, other objects, arrays, functions, regular expressions.

---
#Object Literals
This simplist way to make an object is using the object literal syntax

    !javascript
    var cat = {
        name: 'sprinkles',
        age: 2,
        gender: 'female'
    };

You can create an empty object by simple not including any property value pairs

    !javascript
    var obj = {};

---
#Retrieving Values
You can retrieve values from the objects using the "dereferencing operator" (.). That's just a fancy way of saying use a dot.

    !javascript
    var cat = {
      name: 'sprinkles'
    };

    show(cat.name);

---
#Setting a value
- Setting or changing a value is similar to retrieving a value.
- If you reference a property that does not exist on the object when setting its value it will be created.

.

    !javascript
    var truck = { type: 'fire' };
    truck.type = "tow";
    truck.name = "towmator";

    show(truck.name);
    show(truck.type + " truck");

---
#In operator
JavaScript's `in` operator allows you to test whether a property exist on an object. The expression returns a boolean

    !javascript
    var product = { 
        category: 'shoes', 
        brand: 'nike' 
    };
    show("brand" in product);
    show("price" in product);

---
#Deleting properties
JavaScript's `delete` operator allows you to remove a property from an object

    !javascript
    var tv = { 
        highDef: true,
        wideScreen: true, 
        remote: "missing" 
    };
    show(tv.remote);
    show("remote" in tv);

    delete tv.remote;

    show(tv.remote);
    show("remote" in tv);

---
#Functions in Objects

Just like you can assign functions to variables, you can assign them as a property of an object.

Then you can invoke them by using `.` syntax, followed by parenthesis and your arguments.

    !javascript

    var basicMath = {
        add: function(num1, num2) {
            return num1 + num2;
        }
    };

    basicMath.subtract = function(num1, num2) {
        return num1 - num2;
    }

    show( basicMath.add(5, 10) );
    show( basicMath.subtract(5, 10) );

---
#Objects: What's the point?

A few reasons:
- To organize your code.
- To avoid repeating yourself.
- To keep your code from conflicting with someone else's code on the same page.

---
#Objects

We'll talk more about objects after the midterm, but expect to be using them
from here on out.
