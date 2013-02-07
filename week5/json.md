---
#Objects and Arrays

##What can be stored as a property value in an object?

**Anything that you can put into a variable!**

##What can be stored in an array?

**Anything that you can put into a variable!**

---
#Objects in Objects

Remember how we can have objects as properties of an object?

    !javascript

    var worker = {
      name: 'Johnny',
      position: 'Software Engineer',
      boss: {
        name: 'Fred',
        position: 'TPM'
      }
    };

    var bossOfWorker = worker.boss;
    log(bossOfWorker.name);

    // Or write it like this:
    log( worker.boss.name );

---
#Arrays in Arrays

Just like we can have objects in objects, we can have arrays of arrays

    !javascript

    var ticTacToe = [
        ['X', 'O', 'O'],
        ['O', 'O', 'X'],
        ['X', 'X', 'O']
    ];

    var secondRow = ticTacToe[1];
    log( secondRow[1] );

    // or write it like this:
    log( ticTacToe[1][1] );

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
    log( secondPerson.firstName );

    // or write it like this
    log( people[1].firstName );

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
    log( myWebDev2[3] );

    // or write it like this
    log( allGrades.webDev2[3] );

---
#Arrays of Objects with Arrays

    !javascript
    var students = [
        {
            name: 'Julie',
            grades: [ 100, 69, 92, 88 ]
        },
        {
            name: 'Timothy',
            grades: [ 77, 79, 86, 92 ]
        }
    ];

    log( students[0]['grades'][1] );

    // or
    log( students[0].grades[1] );

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

