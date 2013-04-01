#Returning a Value from a Function

---
#Review: Functions

Functions are a way of "saving" a set of steps to be run later, possibly more than once.

    !javascript
    var sayHi = function() {
      log('Hey there.');
    }


    sayHi();
    sayHi();
    sayHi();
    sayHi();

---
#Review: Getting Values into Functions

Functions optionally let you "pass in" values to work with. We call them "parameters":

    !javascript
    var greetPerson = function(name) {
      log('Hey there, ' + name);
    }


    greetPerson( 'Johnny' );
    greetPerson( 'Sarah' );

    var person3Name = 'Homer';
    greetPerson( person3Name );

**Very Important!** Parameters, and any variables that you declare inside of a
function, _only exist inside of that function_.

---
#Getting Values out of Functions

It seems like it would be very useful if we could get values back **out** of
functions. That way if we had to do some sort of complicated calculations over
and over again, we could just write a function to do it, give the function
what it needs to calculate the value, and let the function give us back the
result.

_Surely there must be a way!_

---
#Return statement

The `return` keyword does two things:

1. It immediately exits the function.
2. It gives a value back to the code that called the function.

.

    !javascript
    var oldEnoughToDrive = function(age) {
        if (age >= 16) {
          return true;
        } else {
          return false;
        }
    }

    var isOldEnough = oldEnoughToDrive( 16 );
    log( isOldEnough );

We've already been using lots of functions that return values: `Math.random()`,
`Math.min()`, and `prompt()` for example. This is how you can write your own.

---
#An Example

    !javascript
    var renderPerson = function(personObj) {
        var html = '<article>';
        html += '<h1>' + personObj.name + '</h1>';
        html += '<dl>';
        html += '<dt>Age:</dt>';
        html += '<dd>' + personObj.age + '</dd>';
        html += '<dt>Hobbies:</dt>';
        html += '<dd>' + personObj.hobbies + '</dd>';
        html += '</dl>';
        html += '</article>';
        return html;
    }


    var me = {
        name: 'John',
        age: '26',
        hobbies: 'Fly fishing, Camping, Hiking',
    }

    var personHTML = renderPerson(me);
    var div = document.getElementById('people');
    div.innerHTML = personHTML;

<br />
<div id="people" style="border: solid 1px; padding: 10px">This is the "people" div.</div>

---
#Another Example

    !javascript
    /**
     * Returns a random number between 1 and 6.
     */
    var diceRoll = function() {
        var randomNumber = Math.random();
        randomNumber = randomNumber * 6;
        return Math.ceil(randomNumber);
    }

    // Simulate a simple dice game.
    var roll1 = diceRoll();
    log( 'Bob rolled a: ' + roll1 );

    var roll2 = diceRoll();
    log( 'Timmy rolled a: ' + roll2 );

    if (roll1 > roll2) {
      log("Bob won!");
    } else if (roll2 > roll1) {
      log("Timmy won!");
    } else {
      log("It's a tie.");
    }

