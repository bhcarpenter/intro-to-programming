---
#Arrays
- Arrays are a special type of Javascript object that store data values.
- The data that you add to an array are kept in order, and you can get them back out of the array later by referring to it's position.
- We call that position the "index".

.

    !javascript
    var names = [
        "Jim",
        "Jimmy",
        "Jill"
    ];
    show( names[1] );

**Anything that you can put into a variable, you can put into an array!**

---
#Dictionaries

- Dictionaries are objects that are used to store data values as well.
- Instead of getting the values back out by position number, dictionaries use a *key*. Keys are usually strings.
- In Javascript, we just use regular objects as dictionaries. The "keys" are our object's property names, and the values are whatever we store into each property.

.

    !javascript
    var person = {
        firstName: "Brandon",
        lastName: "Carpenter",
        occupation: "Software Developer"
    };

    show( person.firstName );
    show( person['occupation'] );

**Anything that you can put into a variable, you can put into an object property!**

---
#Arrays of Arrays

It's entirely possible to have an array that stores a sequence of arrays.

    !javascript
    var ticTacToe = [
        ['O', 'X', 'O'],
        ['O', 'O', 'X'],
        ['X', 'X', 'X']
    ];

    var secondRow = ticTacToe[1];
    show( secondRow[1] );

    // or write it like this:
    show( ticTacToe[1][1] );

---
#Dictionaries of Dictionaries

Likewise, it's possible to have an object that has another object as a property.

    !javascript
    var me = {
        firstName: "Brandon",
        lastName: "Carpenter",
        occupation: "Software Developer",
        wife: {
            firstName: "Kaiti",
            lastName: "Carpenter",
            occupation: "Mom"
        }
    };

    var wifeOfMe = me.wife;
    show( wifeOfMe.lastName );

    // or write it like this:
    show( me.wife.lastName );

---
#Arrays of Objects

We can have an array that stores objects.

    !javascript
    var people = [
        {
            firstName: 'Brandon',
            lastName: 'Carpenter'
        },
        {
            firstName: 'Kaiti',
            lastName: 'Carpenter'
        },
        {
            firstName: 'Genevieve',
            lastName: 'Carpenter'
        }
    ];

    var secondPerson = people[1];
    show( secondPerson.firstName );

    // or write it like this
    show( people[1].firstName );

---
#Objects with Arrays

We can have an object that stores arrays.

    !javascript
    var allGrades = {
        introToProgramming: [97, 67, 84, 92],
        webDev2: [89, 95, 98, 79],
        design1: [94, 82, 59, 100]
    };

    var myWebDev2 = allGrades.webDev2;
    show( myWebDev2[3] );

    // or write it like this
    show( allGrades.webDev2[3] );

---
#A More Complicated Example

    !javascript
    var tweet = {
        "created_at": "Wed Dec 05 18:17:16 +0000 2012",
        "id": 276389793724784640,
        "text": "I'm pretty sure Genevieve needs this. @kaiticarp https:\/\/t.co\/tLVoSbVY via @scoutmob",
        "user": {
            "id": 23104052,
            "name": "Brandon Carpenter",
            "screen_name": "bhcarpenter",
            "location": "Atlanta, GA",
            "statuses_count": 549
        },
        "coordinates": null,
        "retweet_count": 0,
        "geo": {
            "type": "Point",
            "coordinates": [ 33.80940075, -84.43679675 ]
        }
    };

[My Recent Posts Feed](https://api.twitter.com/1/statuses/user_timeline.json?screen_name=bhcarpenter)

---
# JSON

Creating arrays and objects using [] and {} is so easy (and easy to read) that people have started organizing data this way all over the place. They even gave it a name: JavaScript Object Notation.

Here are some places that you may run across JSON:

* Embedded into HTML on a web page by a backend programmer. (Web Dev 3 for Developers)
* As a response from a web service API, such as Twitter, Facebook, etc. (Web Dev 4)
* If you ever do any backend programming, sometimes people write configuration options in JSON format.
* And really a lot more.


