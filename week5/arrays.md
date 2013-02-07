#Arrays
- Javascript has a special type of object called an array.
- Arrays are objects that store lists of data values.
- Array are *indexed* by integers. The integer that represents a particular item is called an *index*. Basically it just means the position in the list.
- After creation, values may be retrieved or added using `[]`

.

    !javascript
    var names = ["Jim", "Jimmy", "Jill"];
    log( names[1] );

    names[2] = "Jan";
    log( names );

---
#Iterating Over Arrays
Arrays have a built-in property called `length`. The `length` property will always equal the number of objects in the array.

    !javascript
    var names = ["Jim", "Jimmy", "Jill"];

    log( names );
    log( names.length );

<script>
// Store on the global window object for the example below.
window.names = ["Jim", "Jimmy", "Jill"];
</script>

The `length` property is useful when you want to iterate over each item in the array.

    !javascript
    var numOfNames = names.length;
    for (var i=0; i < numOfNames; i++) {
        log( names[i] );
    }

---

