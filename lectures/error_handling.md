#Error Handling

In Javascript, you often won't have control over the inputs to your methods, especially if your arguments come from user input, or if you're writing a library for other people on the internet to use.

So what do you do, if your method is given an invalid value?

---
#Warning the User

We've actually been doing this all along. Check out this example from Homework #1:

    !javascript
    var num = prompt("please enter a number");
    num = parseFloat(num);

    if ( isNaN(num) ) {
      print( 'Error: not a number' );
    } else {
      var celsius = (num-32) * 5/9;
      print( celsius + ' degrees Celsius' );
    }

However, this is really inflexible. You're locked into one way of displaying the error, and the program is going to continue running, resulting in unexpected behavior.

---
#Warning the User Better

Often if you're writing a method or function for re-use by other webpages, you won't know exactly how to warn the user that something bad happened, or you want to let the code that is using your method decide how to display any errors. You have a couple of options.

1. Return a special value from your function.
2. Throw an exception.

---
#Returning a Special Value

This is often the simplest way of letting the user know that something *bad* happened. For example, check out the behavior of the date constructor when an invalid date string is passed to it:

    !javascript

    var myDate = new Date('asdf');
    print( myDate );

The constructor returns a special date object that denotes it is an invalid date. Then the code that called the Date constructor is responsible for checking to see if the result was valid and what to do if it isn't.

---
#Throwing an Exception

The only problem with "returning a special value" is that you have to trust that the code you are returning the value to will actually check and see if an error happened.

A more "intrusive" way of displaying that an error occurred is to "raise an Exception".

    !javascript

    throw  "Something bad happened!";
    print("The program stops executing.");

Exceptions are raised, or "thrown", using the "throw" keyword. When this happens, Javascript creates an exception object with the message specified and (unless the exception is handled by the code that is calling your method) will immediately halt execution and display the message on the console.

---
#Handling an Exception

You can handle an exception ("catch" it), by surrounding any code that you run which may result in an exception with at try..catch block.

    !javascript

    function doSomething() {
      throw "Something bad happened!";
    }

    try {
      doSomething();
    } catch (error) {
      print("An error occurred.");
      // Do something to recover from the error.
    }

    print("The program still executes.");


There's some more features of try..catch, but this is all that you *really* need to know. A lot more information can be found in [Chapter 5 of Eloquent Javascript](http://eloquentjavascript.net/chapter5.html);

---
