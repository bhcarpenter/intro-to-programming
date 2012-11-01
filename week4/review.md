#Review

---
#Objects

    !javascript
    var me = {
        name: 'Brandon',
        age: 27,
        gender: 'male'
    };

    show( me.name );
    show( me.age );
    show( me.gender );

    me.occupation = 'Programmer';

    show( me.occupation );

---
#Objects

    !javascript

    var kaiti = {
        name: 'Kaiti',
        age: 26,
        gender: 'female'
    };

    var me = {
        name: 'Brandon',
        age: 27,
        gender: 'male',
        wife: kaiti
    };

    show( me.wife.name );

---
#Objects

    !javascript
    var me = {
        name: 'Brandon',
        age: 27,
        gender: 'male',
        wife: {
          name: 'Kaiti',
          age: 26,
          gender: 'female'
        }
    };

    show( me.wife.name );

