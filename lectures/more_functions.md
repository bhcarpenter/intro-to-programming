#More on Functions

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
    };

    var isOldEnough = oldEnoughToDrive( 16 );
    log( isOldEnough );

We've already been using lots of functions that return values: `Math.random()`,
`Math.min()`, and `prompt()` for example. This is how you can write your own.

---
#Another Example

Let's create a `diceRoll` function that returns a random number between 1 and 6. This is almost identical to the one that I wrote for you to use in your dice game assignment.

    !javascript
    var diceRoll = function() {
        var randomNumber = Math.random();       // randomNumber is between 0 and 1
        randomNumber = randomNumber * 6;        // randomNumber is between 0 and 6
        randomNumber = Math.ceil(randomNumber); // round up
        
        // Now randomNumber is between 1 and 6
        
        // Hand the result back to the code that calls the function.
        return randomNumber;
    };

<script>
var diceRoll = function() {
    var randomNumber = Math.random();
    randomNumber = randomNumber * 6;
    randomNumber = Math.ceil(randomNumber);
    return randomNumber;
};
</script>

---
#Another Example
Now let's use that function to simulate a simple game.

    !javascript
    var roll1 = diceRoll();
    log( "Bob rolled a: " + roll1 );

    var roll2 = diceRoll();
    log( "Timmy rolled a: " + roll2 );

    if (roll1 > roll2) {
      log("Bob won!");
    } else if (roll2 > roll1) {
      log("Timmy won!");
    } else {
      log("It's a tie.");
    }

---
