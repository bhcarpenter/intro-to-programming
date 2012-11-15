#Dictionaries
- Dictionaries (like arrays) also store data values.
- Instead of indexing by integers, dictionaries index by strings. We call those strings `keys`.
- The key can be any string (including the empty string).
- The value can be anything that can be stored in a variable: number, string, boolean, null, object, array, function, regular expression.
- Each key corresponds to one value.

Sometimes dictionaries are also called key-value stores or hash maps.

---
#Dictionaries
The simplist way to make a dictionary is using the object literal syntax.

    !javascript
    var cat = {
        name: 'sprinkles',
        age: 2,
        gender: 'female'
    };

##Surprise!

In Javascript, dictionaries are just objects.

---
#Key Names
- You can actually have keys that aren't valid variable identifiers!
- To do this when initializing an object, use quotes around your key name.

.

    !javascript
    var person = {
        age: 24,
        "first-name": "Joe",
        "last-name": "Shmoe"
    };

---
#[] Notation

- The `.` operator that we used for accessing object properties earlier only works if the property name (aka key) is a valid variable identifier.
- To access or set properties whose names are not valid variable identifiers, we use the square bracket syntax:

.

    !javascript
    var person = {};
    person["age"] = 24;
    person["first-name"] = "Joe";
    person["last-name"] = "Shmoe";

    show( person["first-name"] );

This is similar to the `[]` syntax we use with arrays.

*Note: The `.` notation is preferred when you can use it (i.e. the key is a valid identifier)*

---
#[] Notation

One other nifty use of [] when dealing with dictionaries:

    !javascript
    var person = {
        age: 24,
        "first-name": "Joe",
        "last-name": "Shmoe"
    };

    var nameKey = "first-name";

    show( person[nameKey] );


This is particularly useful on the next slide...

---
#For In Loop
- There is a special looping construct for objects that allows you to iterate over their properties.
- It is called a `for in` loop

The `for in` loop looks like this:

    !javascript
    var shape = { width: 25, height: 50 };
    for (var key in shape) {
        show("Key: " + key);
        show("Value: " + shape[key]);
        show("----------------------");
    }

- Notice that the `key` variable simply holds a string containing the property name.
- `key` is not a special name. Call the variable whatever you want (`propertyName` for example).

---
#One Last Thing
- When comparing objcts, the `===` operator will only return true if values being compared reference the _same exact object_.
- If you need to see if two objects store identical properties then you must perform a *deep comparison*. Basically this just means that you have to check each property individually to see if they are equal.

.

    !javascript
    var coord1 = { x:1, y:5 };
    var coord2 = { x:1, y:5 };
    show(coord1 === coord2);

Contrast the example above with:

    !javascript
    var coord1 = { x:1, y:5 };
    var coord2 = coord1;
    show(coord1 === coord2);

---
