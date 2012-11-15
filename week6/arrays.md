#Arrays
- Javascript has a special type of object called an array.
- Arrays are objects that store lists of data values.
- Array are *indexed* by integers. The integer that represents a particular item is called an *index*. Basically it just means the position in the list.
- After creation, values may be retrieved or added using `[]`

.

    !javascript
    var names = ["Jim", "Jimmy", "Jill"];
    show( names[1] );

    names[2] = "Jan";
    show( names );

---
#Iterating Over Arrays
Arrays have a built-in property called `length`. The `length` property will always equal the number of objects in the array.

    !javascript
    var names = ["Jim", "Jimmy", "Jill"];

    show( names );
    show( names.length );

<script>
// Store on the global window object for the example below.
window.names = ["Jim", "Jimmy", "Jill"];
</script>

The `length` property is useful when you want to iterate over each item in the array.

    !javascript
    for(var i = 0; i < names.length; i++){
        show( names[i] );
    }

---
#Built-In Array Methods

    !javascript
    var companies = ['sony','hp','apple',
                     'nintendo','microsoft'];

<br />
<script>
// Store on the global window object for the example below.
window.companies = ['sony','hp','apple','nintendo','microsoft'];
</script>

    !javascript

    // pop removes the last item and returns it
    show( companies );
    var lastItem = companies.pop();
    show( lastItem );
    show( companies );

<br />

    !javascript
    // push adds an item to the end

    show( companies );
    companies.push('intel');
    show( companies );

---
#More Array Methods

    !javascript
    // shift removes the first item in the array and
    // returns it
    show( companies );
    show( companies.shift() );
    show( companies );

<br />

    !javascript
    // unshift adds an item to the beginning
    show( companies );
    companies.unshift('dell');
    show( companies );
    
---
#More Array Methods

    !javascript

    // join concatenates every item as a string,
    // connecting them with the specified parameter,
    // and returns the result
    show( companies );
    show( companies.join(':') );
    show( companies );

<br />

    !javascript
    // reverse reverses the array
    show( companies );
    companies.reverse();
    show(companies);

---
