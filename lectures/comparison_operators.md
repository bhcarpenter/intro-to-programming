---
#Remember Booleans?

    !javascript
    console.log(true);
    console.log(false);

---
#Comparison Operations

Javascript gives us a few operators for comparing values.

- `>=, <=, >, <` inequality
- `===` equality
- `!==` not equal

.

    !javascript
    log(5 > 6);
    log(5 < 6);
    log(5 === 6);
    log(5 !== 6);
    log(6 >= 6);

What do comparison operators result in?

---
#Operations > Logical

Sometimes comparing two values is not enough. These are logical operators that are used to combine booleans.

- `!` not
- `&&` logical and
- `||` logical or

.

    !javascript
    log( 5 < 6 && 6 < 7 );
    log('-------------------------');
    log( !(2 === 3) );
    log('-------------------------');
    log( 2 > 3 || "red" === "red" );

