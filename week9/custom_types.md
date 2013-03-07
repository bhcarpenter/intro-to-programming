---
# Custom Object Types

Just like the `Array`, `Date`, and `RegExp` object types, Javascript allows you to define your own object types for re-use with the new keyword.

We do this by defining a "constructor" function:

    !javascript
    var Person = function(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = firstName + ' ' + lastName;
    }

By convention, constructor functions start with an uppercase letter.

Then we can create new objects of our custom type using the `new` keyword, just like with `Date`s or any of the other built-in types.

<script>
var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = firstName + ' ' + lastName;
}
</script>

    !javascript
    var dad = new Person('Brandon', 'Carpenter');
    var baby = new Person('Genevieve', 'Carpenter');
    log( dad.fullName );

---
# this

Constructor functions have a "special" variable named `this` that JavaScript automatically creates for you.

The value of the `this` variable is the object that your constructor creates.

Here's another example:

    !javascript
    var Person = function(name) {
      this.name = name;

      this.greet = function() {
        var greeting = this.name + ' says Hello!';
        alert(greeting);
      };
    }

    var brandon = new Person('Brandon');
    var kaiti = new Person('Kaitlin');
    log( brandon.name );
    log( kaiti.name );

    brandon.greet();
    kaiti.greet();

---
# Custom Object Types

Writing custom type constructors gives you a few perks:

- They give "structure" to your objects. Every object created using the constructor has the same property names.
- They can add the same method to a whole bunch of objects.
- Each object's methods have access to the `this` var, so in them you can use any properties that the constructor stored in `this`.

As you can probably tell, custom types are most useful if you are going to be dealing with a bunch of objects that have the same properties or methods.

---
# Custom Object Types

    !javascript
    var Todo = function(text, dueOn) {
      this.text = text;
      this.dueOn = new Date(dueOn);

      this.render = function() {
        var dateString = this.dueOn.toDateString();

        var html = '<article>\n' +
          '  <h1>' + this.text + '</h1>\n' +
          '  <p>' + dateString + '</p>\n' +
          '</article>';

        return html;
      }
    }

    var todo1 = new Todo('Take out the trash', '3/8/2013');
    var todo2 = new Todo('Wash the dishes', '3/7/2013');

    alert( todo1.render() );
    alert( todo2.render() );
---
# prototype

There's one more special feature of custom object types constructors. They have a built-in property called `prototype`. Any properties or methods set on the `prototype` property is automatically shared by all objects created by the constructor.

    !javascript
    function Person(name) {
      this.name = name;
    }

    Person.prototype = {
      greet: function() {
        var greeting = this.name + ' says Hello!';
        alert(greeting);
      }
    };

    var brandon = new Person('Brandon Carpenter');
    var kaiti = new Person('Kaitlin Carpenter');
    log( brandon.name );
    log( kaiti.name );
    brandon.greet();

Note that we're setting the prototype property on the *constructor function*, not the `this` variable.

---
# Object property resolution.

Here's how it works:

When you use the "." operator to get a property from an object, Javascript first checks to see if the object has that property.

*If it doesn't,* Javascript check's to see if the object's prototype has that property. If it does, Javascript will use that.

*If it still doesn't,* Javascript will check the prototype's prototype, etc.

---
# Constructor vs. Prototype

Defining methods of object types using prototype instead of just assigning them to "this" within the constructor function has a few advantages:

  1. *It's faster.*  This way, the method function is only defined once, and all of the objects that are created using the constructor use that function. If you define it inside of the constructor, the code that generates the function is going to be run each time you create an object using that constructor.
  2. *It uses up less memory.* For the same reason.

Honestly, it doesn't really matter if you understand the distinction. Just know that whatever you assign to `this` inside of the constructor is unique to that object, but anything you add to the constructor prototype is shared by all objects created using that constructor.

---
# Event Listeners

One word of warning. Inside of event listeners, JavaScript *changes the value of `this`* to be the DOM element that triggered the event. So be careful if you try to do something like this:

<a href="#" id="testLink">Test Link</a>

    !javascript

    // element is a jQuery object
    var MyWidget = function(name, element) {
      this.name = name;
      element.click(this._handleClick);
    }

    MyWidget.prototype = {
      _handleClick: function(e) {
        e.preventDefault();

        // The value of `this` is the element that
        // was clicked instead of the object you
        // created with the MyWidget constructor.
        // So this doesn't really work.
        alert( this.name );
      }
    }

    var widget = new MyWidget('name', $('#testLink'));

---
# Event Listeners

There are a couple of (ugly) workarounds to this, as well as a standard (that isn't supported in IE versions < 9). Here are some links if you're interested:

- [The bind method of function objects](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind)
- [Underscore.js's bind utility](http://underscorejs.org/#bind)

My recommendation is to just avoid listening to events inside of your custom data types, and keep that code separated somewhere else.

