#The new keyword

So far, we've been building objects from scratch using the "object literal" (shortcut) syntax.

Javascript provides another way of building objects using the `new` keyword. It looks something like this:

    !javascript
    var brandon = new Object();

    // The new object works just as if we had
    // defined it using "var brandon = {};"

    brandon.first_name = 'Brandon';
    brandon.last_name = 'Carpenter';

    show(brandon.first_name + ' ' + brandon.last_name);

---
# Built-in Object Types

This may not seem very handy at first, but Javascript also provides us with a way of creating "pre-built" objects using the `new` keyword. Here are the basic ones:

  * **Object** - `new Object()` is just like `{}`.
  * **Array** - `new Array()` is just like `[]`.
  * **String** - Stores a string value and provides some methods for working with it.
  * **Number** - Stores a number value and provides some methods for working with it.
  * **Boolean** - Stores a boolean value and doesn't really do much else.
  * **Function** - Surprise! In Javascript functions are actually objects as well.

There's also some useful built-in object types that we haven't seen yet:

  * **Date** - Stores a date/time value and provides some methods for working with it.
  * **RegExp** - A regular expression. We probably won't get to these in this class, but they're used to find/replace text in strings.

---
# Array

Exactly the same as creating an array using the "array literal" syntax.

    !javascript
    var chores = new Array(
      'take out the trash.', 
      'wash the dishes'
    );

    /*
    Equivalent to:
    var chores = [
      'take out the trash.', 
      'wash the dishes'
    ];
    */

    for (var i=0; i < chores.length; i++) {
      show('Brandon needs to ' + chores[i]);
    }

[Methods available to Array objects](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/prototype#Methods)

---
# String

*String objects are not the same as string primitives!*

The nice thing about string objects is that they have methods to interact with the string.

    !javascript
    var myName = new String('Brandon');
    show( myName.toUpperCase() );

*But don't string primitives have these as well?*

    !javascript
    var myName = 'Brandon';
    show( myName.toUpperCase() );

[Methods available to String objects](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/prototype#Methods)

---
# Number

*Number objects are not the same as number primitives!*

The same thing applies for numbers.

    !javascript
    var cost = new Number(16.534439432);
    show( cost.toFixed(2) );

[Methods available to Number objects](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/prototype#Methods)

---
# Boolean

*Boolean objects are not the same as boolean primitives!*

The Boolean object is an object that contains a boolean value as one of it's properties.

It is important to note that (since objects are always truthy) any boolean *object* that you create will evaluate as true in an if statement.

    !javascript
    var isThisTrue = new Boolean(false);

    show( typeof isThisTrue );
    if ( isThisTrue ) {
      show('true');
    } else {
      show('false');
    }

    show('------------');

    // You can retrieve the value stored in the
    // object by calling the `valueOf()` method
    show( isThisTrue.valueOf() );

Boolean objects are pretty much useless.

---
# Function

Functions in Javascript are actually objects as well, so you can create one using the new keyword.

However, I don't want you to ever do this, so I'm not even going to show how here.

