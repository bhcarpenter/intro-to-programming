---
# Date

Dates are super-useful object types in Javascript. You can *construct* a Date works in one of four ways.

##Specifying numbers for year, month, and date (and optionally include hour, minute, and second as well).

    !javascript
    var date1 = new Date( 2012, 23, 05, 15, 35, 29 ); 
    show( "Date 1: " + date1 );

##Specifying a date string

    !javascript
    var date2 = new Date( "05/23/2012 15:35:29" ); 
    show( "Date 2: " + date2 );

---
#Date

##Specifying the number of milliseconds since Jan 1, 1970

    !javascript
    var date3 = new Date( 1337801729000 ); 
    show( "Date 3: " + date3 );

##The current date

    !javascript
    // No arguments
    var now = new Date();
    show( "Now: " + now );



---
# Date Methods

    !javascript
    var now = new Date();

    show( now.toDateString() );
    show( now.toTimeString() )
    show( now.toUTCString() );

    show('---------------');

    now.setYear( 2011 );
    show( now.toDateString() );
    show( now.getDate() );


[Properties and methods available to Date objects](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date#Date_instances)

