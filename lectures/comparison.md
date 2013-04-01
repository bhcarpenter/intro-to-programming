---
#One Last Thing
- When comparing objcts, the `===` operator will only return true if values being compared reference the _same exact object_.
- If you need to see if two objects store identical properties then you must perform a *deep comparison*. Basically this just means that you have to check each property individually to see if they are equal.

.

    !javascript
    var coord1 = { x:1, y:5 };
    var coord2 = { x:1, y:5 };
    log(coord1 === coord2);

Contrast the example above with:

    !javascript
    var coord1 = { x:1, y:5 };
    var coord2 = coord1;
    log(coord1 === coord2);

---

