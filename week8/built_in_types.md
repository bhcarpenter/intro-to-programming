#The new keyword

So far, we've been building objects from scratch using the "object literal" (shortcut) syntax.

Javascript provides another way of building objects using the `new` keyword. It looks something like this:

    !javascript
    var brandon = new Object();

    // The new object works just as if we had
    // defined it using "var brandon = {};"

    brandon.firstName = 'Brandon';
    brandon.lastName = 'Carpenter';

    log(brandon.firstName + ' ' + brandon.lastName);

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
      log('Brandon needs to ' + chores[i]);
    }

[Methods available to Array objects](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/prototype#Methods)

---
# String

*String objects are not the same as string primitives!*

The nice thing about string objects is that they have methods to interact with the string.

    !javascript
    var myName = new String('Brandon');
    log( myName.toUpperCase() );

[Methods available to String objects](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/prototype#Methods)

---
# Number

*Number objects are not the same as number primitives!*

The same thing applies for numbers.

    !javascript
    var cost = new Number(16.534439432);
    log( cost.toFixed(2) );

[Methods available to Number objects](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/prototype#Methods)

---
# Boolean

*Boolean objects are not the same as boolean primitives!*

The Boolean object is an object that contains a boolean value as one of it's properties.

It is important to note that (since objects are always truthy) any boolean *object* that you create will evaluate as true in an if statement.

    !javascript
    var isThisTrue = new Boolean(false);

    log( typeof isThisTrue );
    if ( isThisTrue ) {
      log('true');
    } else {
      log('false');
    }

    log('------------');

    // You can retrieve the value stored in the
    // object by calling the `valueOf()` method
    log( isThisTrue.valueOf() );

Boolean objects are pretty much useless.

---
# More Shortcuts

JavaScript provides a shortcut for calling methods of these primitive container objects.

If you try to call a method on a primitive, it will automatically convert that primitive to an object behind the scenes so it can call that method.

    !javascript
    var myName = new String('Brandon');
    log( myName.toUpperCase() );
    log( "Brandon".toUpperCase() );

.

    !javascript
    var pi = 3.14159;
    log( pi.toFixed(2) );

---
# Function

Functions in Javascript are actually objects as well, so you can create one using the new keyword.

However, I don't want you to ever do this, so I'm not even going to show how here.

---
# Date

Dates are super-useful object types in Javascript. You can *construct* a Date works in one of four ways.

##Specifying numbers for year, month, and date (and optionally include hour, minute, and second as well).

    !javascript
    var date1 = new Date( 2012, 23, 05, 15, 35, 29 ); 
    log( "Date 1: " + date1 );

##Specifying a date string

    !javascript
    var date2 = new Date( "05/23/2012 15:35:29" ); 
    log( "Date 2: " + date2 );

---
#Date

##Specifying the number of milliseconds since Jan 1, 1970

    !javascript
    var date3 = new Date( 1337801729000 ); 
    log( "Date 3: " + date3 );

##The current date

    !javascript
    // No arguments
    var now = new Date();
    log( "Now: " + now );

---
# Date Methods

    !javascript
    var now = new Date();

    log( now.toDateString() );
    log( now.toTimeString() )
    log( now.toUTCString() );

    log('---------------');

    now.setYear( 2011 );
    log( now.toDateString() );
    log( now.getDate() );


[Properties and methods available to Date objects](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date#Date_instances)

---
# RegExp

Regular expressions are a way of matching patterns in strings. They're useful in combination with the `replace()` and `search()` methods of String objects.

    !javascript

    var pattern = new RegExp('[Hh]ello');
    var s = 'Hello, world!';
    var edited = s.replace(pattern, 'Goodbye');

    log(edited);

We don't have time to really go into this, but after you've been programming a while I highly recommend learning how to use them.

[Regular Expression Reference](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp)

