---
#Common Programming Scenarios

---
#Showing Information

## prompt()
The easiest (and ugliest) way to show something to the person viewing your web page is by using `alert()`.

    !javascript
    alert("Hi there. I'm annoying.");

Later on in the class, we'll add HTML to the web page and change parts of the web page directly.

## console.log()
There's also a way of leaving notes that aren't visible on the actual web page, but show up in the special "console" area of your web browser.

    !javascript
    console.log("This is a great place to check values if you're stuck.");

---
#User Input

The easiest (and ugliest) way to get a value from the person viewing your web page is by using `prompt()`.

    !javascript
    var answer = prompt('What is your name?');
    log(answer);

Later on in the class, we'll use forms to get values from the user. They can actually be (somewhat) styled.

Note that whatever the user types in is always given back to you as a STRING...

---
#Converting Strings to Numbers

- It is a very common task to convert a string into a Number in JavaScript, because all input that can be given by a user is presented as a string in JavaScript
- You can use `parseInt()` if you need an integer
- You can use `parseFloat()` if you need to retain the decimal  

---
#parseInt

- When converting strings to integers you can use a global function called `parseInt()`
- parseInt takes two arguments: the string to parse and a radix.
- the radix is optional but should be used to avoid a hexadecimal or octal interpretation
- If the string passed to parseInt does not begin with a digit or *-* then `NaN` is returned
- parsing of the integer stops if a non digit is encountered but the number so far is returned. This means parseInt cannot be used to determine if a string is an integer. It also means that decimals are truncated. 

.

    !javascript
    log( "100" + 10 );
    log( parseInt("100", 10) + 10 );
    log( parseInt("3.75" ,10) );
    log( parseInt("-27", 10) );

    log( parseInt("999hello", 10) );
    log( parseInt("kitty", 10) );

    // Danger!
    log( parseInt("0377") );
    log( parseInt("0377", 10) );

---
#parseFloat

- parseFloat is another global function that converts strings to numbers
- as you might gather from its name it parses floats.
- parseFloat takes one argument: the string to be parsed
- a float is a way to represtent decimals in computers

.

    !javascript
    log("3.14159" + 2);
    log(parseFloat("3.14159") + 2);

---
#Math

Javascript provides us with a global Math object that has several useful methods.

Here are a few of them

    !javascript
    var num = 2.5;
    var x = -3;
    var y = 2;
    var z = 4;

    log(Math.abs(x));     // absolute value
    log(Math.ceil(num));  // ceiling.. rounds up
    log(Math.floor(num)); // rounds down
    log(Math.round(num)); // "normal" round
    log(Math.pow(x,y));   // power... x^y
    log(Math.random());   // random number between 0 and 1.
    log(Math.sqrt(z));    // square root
    log(Math.max(x,y));   // largest number
    log(Math.min(x,y));   // smallest number
    log(Math.PI);         // PI

There's a [full list here](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math#Methods).  We'll use some of these methods in this week's homework, and more next week.

---
#Doing something every X seconds.

We'll talk about this more after we know how to write our own functions.

If you're really curious, check out these functions:

- [setTimeout](https://developer.mozilla.org/en-US/docs/DOM/window.setTimeout)
- [setInterval](https://developer.mozilla.org/en-US/docs/DOM/window.setInterval)

