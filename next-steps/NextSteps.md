Now What?
=========
You can expect to keep learning about programming as long as you continue to program. I've been at it for a long time, and I still learn new stuff constantly! This page lists some of the topics that I think will be useful to you. Don't worry about it if something is too confusing for you now; just come back to it later.

*I'll keep this page updated as I find additional resources.*

Review
------
Now that you've finished (and well on your way to being JavaScript rock stars!) I highly recommend going back to the beginning and learning everything again from scratch. Some of the topics that we originally talked about will make more sense now that you've been coding longer.

### ["JavaScript 101" by the jQuery Team](http://learn.jquery.com/javascript-101/) ###
For now, skip these sections:

- The 'this' keyword
- Closures

### [Eloquent JavaScript](http://eloquentjavascript.net/contents.html) ###
We didn't cover these chapters in this class, so you may want to skip them for now:

- Error Handling
- Regular Expressions
- HTTP Requests (this is Web Dev 4)

We didn't cover these in class, but read them anyway. They might be useful:

- More (obscure) control structures
- Web Programming (you'll talk about this more in later Web Dev classes)

Read these chapters after you've been programming a few years:

- Functional Programming
- Searching
- Binary Heaps

And I'd recommend ignoring this chapter entirely:

- Modularity

### [JavaScript Guide](https://developer.mozilla.org/en-US/docs/JavaScript/Guide) ###
This one is written more for people who are familiar with programming, but new to JavaScript, so it's not quite as beginner-friendly. Also, some of the material it includes only works on newer browsers.

That said, I'd recommend looking over these chapters:

- Values, Variables, and literals
- Expressions and Operators
- Statements
- Functions. You can ignore the "Closures" and "Using the arguments object" sections. Also never EVER use the eval() function.
- Working with objects. Ignore the "Using the Object.create method" and "Defining getters and setters" sections.
- Predefined Core Objects

More Programming Topics
-----------------------
After you've mastered that material, here's what I would recommend learning:

### Error Handling ###
- [Eloquent Javascript Chapter 5](http://eloquentjavascript.net/chapter5.html)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/try...catch)

### More on OOP ###
- [General OOP Overview on Wikipedia](http://en.wikipedia.org/wiki/Object-oriented_programming)
- [Very Detailed Introduction to OOP Topics](http://www.codeproject.com/Articles/22769/Introduction-to-Object-Oriented-Programming-Concep)
- [JavaScript OOP](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Details_of_the_Object_Model)
- [Inheritance in JavaScript](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [More on Inheritance in JavaScript](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Inheritance_Revisited)

### More on the "this" Variable ###
By default, the value of "this" is:

- the object that the method was a part of when it was called, for a function in an object
- the DOM element that the event happened on, for an event listener function

However, it's possible to manually set the value of the "this" variable for a function when calling it. Check out these resources to see how:

- [JavaScript 101](http://learn.jquery.com/javascript-101/this-keyword/)
- [Function.call Reference](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/call)
- [Function.apply Reference](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/apply)

### Version Control Systems ###
Version Control Systems let you "save" your project, give it some comments, and then later review your history and optionally revert back to a previous version of your code. Most companies with more than two developers also use them to help developers collaborate on projects.

There are many VCSs, but one of the most popular right now is called Git. Here are some resources to help you get started with Git:

- [Learn Git](http://learn.github.com/p/intro.html)
- [Git Immersion](http://gitimmersion.com/)
- [Pro Git](http://git-scm.com/book)

Note that most of these tutorials assume you're familiar working with the _command line_ on your computer (either Terminal.app on Mac or cmd.exe on  Windows). You may want to look us some tutorials on that first.

### More on Scope / Closures ###
- [SO Post about Scope](http://stackoverflow.com/questions/500431/javascript-variable-scope)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Closures)
- [JavaScript 101](http://learn.jquery.com/javascript-101/closures/)

### Recursion ###
- [MSDN Example](http://msdn.microsoft.com/en-us/library/ie/wwbyhkx4\(v=vs.94\).aspx)
- [Codecademy Lesson](http://www.codecademy.com/courses/javascript-lesson-205)
- [Wikipedia Article](http://en.wikipedia.org/wiki/Recursion_\(computer_science\))
- [Recursion Puzzle as an Example](http://www.cs.cmu.edu/~cburch/survey/recurse/hanoi.html)

### Timers / Animation ###
In JavaScript there are two built-in functions made specifically for running your code after a delay.

- [setTimeout Reference](https://developer.mozilla.org/en-US/docs/DOM/window.setTimeout)
- [setInterval Reference](https://developer.mozilla.org/en-US/docs/DOM/window.setInterval)
- [Tutorial](http://javascript.info/tutorial/settimeout-setinterval)

Also in modern browsers, there's a special way of doing loops for animating, which is more efficient than just using setInterval().

- [requestAnimationFrame Reference](https://developer.mozilla.org/en-US/docs/DOM/window.requestAnimationFrame)
- [Explanation of setTimeout vs requestAnimationFrame](http://creativejs.com/resources/requestanimationframe/)
- [More Information](http://paulirish.com/2011/requestanimationframe-for-smart-animating/)

### Regular Expressions ###
Regular Expressions are a special "language" used for matching patterns, and are available in most (maybe all) programming languages. They're particularly useful if you want to find some text in a string and replace it with something else.

- [Eloquent Javascript Chapter 10](http://eloquentjavascript.net/chapter10.html)
- [JavaScript Guide Page](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions)
- [RegExp Type Reference](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp)

### Model/View/Controller Architecture ###
Called MVC for short, this just means that you separate your code into three parts:

1. The Model, which holds your business logic. For frontend coding, this tends to be just your data.
2. The View, which displays your model to the user.
3. The Controller, which sets up and manages the interaction between your Model and View.

There are TONS of different viewpoints on what MVC actually is, but that's how I like to think about it. Here is some light reading on the topic:

- [Wikipedia](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [Overview from the Google Chrome Team](http://developer.chrome.com/dev/apps/app_frameworks.html)

### Design Patterns!!! ###
If you actually understand and can utilize these, it will put you way ahead of most other JS programmers:

- [Essential JS Design Patterns Book](http://addyosmani.com/resources/essentialjsdesignpatterns/book/)

Notable JavaScript Projects and Tools
-------------------------------------
I'll leave it to you to look up tutorials and examples for these.

### [jQuery](http://jquery.com/) ###
DOM manipulation and AJAX library

### [jQuery UI](http://jqueryui.com/) ###
A JS/CSS package of user interface widgets designed to compliment jQuery

### [Underscore.js](http://underscorejs.org/) ###
A collection of functions to help you do stuff. Particularly useful for functional programming, when you get to doing that.

### [Backbone.js](http://backbonejs.org/) ###
A JavaScript framework designed to help organize you JS code into an MVC architecture. Uses jQuery and Underscore.js. [This video seems to be a good introduction.](http://www.youtube.com/watch?v=HsEw2i4wQMM)
