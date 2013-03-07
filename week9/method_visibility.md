#Public and Private

Object properties and methods can be grouped into two categories: public and private.

##Public

Public properties and methods are available for other objects to interact with. 

##Private

Private properties and methods are only for use by the object itself. 

This is an important concept for *encapsulation*. Outside objects don't need to know how an object is achieving a task, they only need to know that they should call an object's methods with certain parameters and to expect a certain result.

---
#Public and Private in Javascript

*Javascript actually can define private methods and variables.*

This is achieved by creating a new variable scope using closures (that we briefly touched on during week 3).

*However*, I personally like being able to browse all of my object's methods and properties via the console (even "private" ones), and sometimes using closures can be confusing.

What I like to do is make all of my "private" methods and variables start with an underscore (\_). This is a decently common convention that let's other programmers know that they shouldn't call that method, or access that property directly.

---
#Protected

Some programming languages also have a concept of "protected" properties and methods. These are properties and methods that only other objects *of the same type* can access. Don't worry about this for Javascript.

Javascript doesn't have this.

---
#More Information

If you're interested in how some other people are doing private/protected/public method and properties in Javascript, check out [this article by Douglas Crockford](http://javascript.crockford.com/private.html);

