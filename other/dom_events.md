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

