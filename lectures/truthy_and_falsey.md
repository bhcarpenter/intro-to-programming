---
#Truthiness and Falsiness

- When something other than a boolean is used in a boolean context it is coerced into a boolean
- Falsey: `0, null, undefined, "", false, NaN`
- Truthy: everything else including `true` and the string `'false'`

. 

    !javascript

    // Falsey. Won't show.
    if (0) { 
      log('0 is truthy!');
    }

    if (null) {
      log('null is truthy!');
    }

    if (undefined) {
      log('undefined is truthy!');
    }

---
#Truthiness and Falsiness

    !javascript
    if ("") {
      log('"" is truthy!');
    }

    if (false) {
      log('false is truthy!');
    }

    if (NaN) {
      log('NaN is truthy!');
    }

    // Truthy. Will show.
    if ("false") {
      log('"false" is truthy!');
    }

    if (1234) {
      log('1234 is truthy!');
    }

    if ("hello") {
      log('"hello" is truthy!');
    }

