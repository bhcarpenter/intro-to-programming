#Objects

---
#Objects

- Objects are just a way of grouping values together.
- They work by associating property names (sometimes called "keys") with values.

The simplist way to make an object is using the object literal syntax:

    !javascript
    var cat = {
      name: 'sprinkles',
      age: 2,
      gender: 'female'
    };

In the example above, "name" is a property name, and "sprinkles" is the associated value.

---
#Retrieving Values
You can retrieve values from objects using the "dereferencing operator". That's just a fancy way of saying use a dot.

    !javascript
    var cat = {
      name: 'sprinkles',
      age: 2,
      gender: 'female'
    };

    log( cat.name );
    log( cat.color );

---
#Setting a value
- Setting or changing a value is similar to retrieving a value.
- If you reference a property that does not exist on the object when setting its value it will be created.

.

    !javascript
    var truck = { type: 'fire' };
    truck.type = "tow";
    truck.name = "towmator";

    log( truck.name );
    log( truck.type + " truck" );

---
#In operator
JavaScript's `in` operator allows you to test whether a property exist on an object. The expression returns a boolean

    !javascript
    var product = { 
        category: 'shoes', 
        brand: 'nike' 
    };

    log( "brand" in product );
    log( "price" in product );

---
#Deleting properties
JavaScript's `delete` operator allows you to remove a property from an object

    !javascript
    var tv = { 
        highDef: true,
        wideScreen: true, 
        remote: "missing" 
    };
    log( tv.remote );
    log( "remote" in tv );

    delete tv.remote;

    log( tv.remote );
    log( "remote" in tv );

---
#Objects in Objects

Any value that can be put in a variable (which is to say any data value at all) can also be assigned to a property of an object. *This includes other objects*

    !javascript
    var aManager = {
      name: 'Fred',
      position: 'TPM'
    };

    var aWorker = {
      name: 'Johnny',
      position: 'Software Engineer',
      boss: aManager
    };

    log( aWorker.boss.name );

---
#Objects in Objects

The previous example could also be written like this:

    !javascript

    var worker = {
      name: 'Johnny',
      position: 'Software Engineer',
      boss: {
        name: 'Fred',
        position: 'TPM'
      }
    };

    log( worker.boss.name );

---
#Functions in Objects

You can also assign a function as an object's property.

    !javascript
    var greet = function() {
      log('Hello!');
    };

    var worker = {
      name: 'Johnny',
      sayGreeting: greet
    };

    worker.sayGreeting();

Often, programmers call functions that are stored in objects "methods".

---
#Functions in Objects

The previous example could also be written like this:

    !javascript

    var worker = {
      name: 'Johnny',
      sayGreeting: function() {
        log('Hello!');
      }
    };

    worker.sayGreeting();

---
#Objects: What's the point?

**To organize your code.**

- Group similar data together.
- Group data and the functions that work with them together.
- "Namespace" your code. That just means stick all of your data and functions in an object so that someone else doesn't accidentally overwrite it.

We may talk more about organizing your code at the end of the class.

---
#Objects: Built-In Objects

JavaScript comes with a bunch of objects built-in.

*(demonstration)*

