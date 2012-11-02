#The Document-Object Model
---
#The Document-Object Model

The Document-Object Model is the 'glue' that connects Javascript to the data on web pages.

It consists of several different components for interacting with web pages, but the most important of these is the "element heirarchy", a tree which consists of "elements" (think HTML tags) and "text nodes".

<div style="text-align: center">
<img src="img/html.png" />
</div>

---
#The document Object

There is a global object in Javascript called "document" that contains all of the data and methods that we need to work with the DOM.

Here are some of the most important features of the document object:

* document.getElementById('some-element-id') // Gets a dom element by it's id
* document.documentElement // The &lt;html&gt; element
* document.body // The &lt;body&gt; element.
* document.createElement('div') // Creates a new DOM element
* document.createTextNode('Some random text.') // Creates a new text node.

---
# Traversing the DOM

Once we have a DOM element (either document.body or one that we have found using document.getElementById()), we can *traverse* the dom tree using some properties that all element objects have.

* el.parentNode
* el.firstChild
* el.lastChild
* el.nextSibling
* el.previousSibling
* el.childNodes (An array of nodes that are immediate children of el)

We can also add and remove DOM elements from the tree.

* el.appendChild(anElement)
* el.removeChild(anElement)

anElement can be created using document.createElement() or document.createTextNode()

---
#Manipulating DOM Elements

Once we have a DOM element, we can use them to manipulate the web page! Most element attributes can be accessed directly by name on the object. <a href="http://bhcarpenter.com" id="test_link">Test Link</a>

    !javascript
    var linkEl = document.getElementById('test_link');
    show(linkEl.href);

    linkEl.href = 'http://creativecircus.edu'
    show(linkEl.href);


There are a few special attributes as well.

* el.className = 'my\_class\_name' // "class" is a reserved word
* el.style // Another object. Use it to set CSS styles!

.

    !javascript
    var linkEl = document.getElementById('test_link');
    linkEl.style.color = '#ff0000';

---
#DOM Events

Another important aspect of the DOM is *event handling*.

Events let Javascript programs respond to user interactions such as clicks, mouse movements, etc. <a href="#" id="test_link_2">Test Link 2</a>

    !javascript
    var linkEl = document.getElementById('test_link_2');

    var clickCallback = function(event) {
      show('The link was clicked.');
    };

    linkEl.addEventListener('click', clickCallback);

Or, more commonly, an *anonymous function* is used instead of storing the function in a variable first.

    !javascript
    var linkEl = document.getElementById('test_link_2');

    linkEl.addEventListener('click', function(event) {
      show('From an anonymous function!');
    });

---
#Available Events
<div style="width: 48%; float: left;">
##Mouse events
-	click
-	dblclick
-	mousedown
-	mouseup
-	mousemove
-	mouseover
-	mouseout

##Keyboard Events
-	keydown
-	keypress
-	keyup
</div>
<div style="width: 48%; float: right;">
##Form Element Events
-	submit
-	reset

##input/select/button Events
-	select
-	change
-	submit
-	focus
-	blur

##document Object Events
-	load
- unload
</div>
	

---
#The Event obect

Event callback functions receive an *event object* as an argument. These objects provide information about the event that happened, and let you control whether or not other event callbacks continue to run. <a href="http://facebook.com" id="test_link_3">Go to Facebook</a>

* event.target - The DOM element that the event happened to
* event.preventDefault() - Stops the default action from happening. This can be used to stop the browser from following a link that was clicked on.

.

    !javascript
    var linkEl = document.getElementById('test_link_3');

    linkEl.addEventListener('click', function(event) {
      show('Get off of Facebook')
      show('and pay attention!');

      // Stop the browser from opening the window.
      event.preventDefault();
    });

---
#Events
##Mouse Events

Mouse events have some more information available to them.

- event.screenX
- event.screenY
- event.button (Left button=0, middle button=1, right button=2)
- [more mouse events](https://developer.mozilla.org/en/DOM/MouseEvent)

##Keyboard Events

Keyboard events also have some more information.

- event.charCode
- event.keyCode
- event.ctrlKey, event.altKey, event.metaKey, event.shiftKey
- [more keyboard events](https://developer.mozilla.org/en/DOM/KeyboardEvent)

