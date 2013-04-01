---
#Operations: Comparison

Comparing two values is something that you will do a lot of when writing programs, especially when we get to branching and looping.  Here are the comparison operators.

- `>=, <=, >, <` inequality
- `===, ==` equality
- `!==, !=` not equal

.

    !javascript
    log(5 > 6);
    log(5 < 6);
    log(5 === 6);
    log(5 !== 6);
    log(6 >= 6);

---
#Operations > Logical

Sometimes comparing two values is not enough. These are logical operators that are used to combine booleans.

- `!` not
- `&&` logical and
- `||` logical or

.

    !javascript
    log( 5 < 6 && 6 < 7 );
    log( !(2 === 3) );
    log( 2 > 3 || "red" === "red" );

