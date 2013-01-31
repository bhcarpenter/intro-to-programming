---
#DOM Events

---
#Review: The DOM

The Document-Object Model is the 'glue' that connects Javascript to the data on web pages.

<p id="para1">So far we've been working with the "element heirarchy", a set 
of interconnected objects that represent the text and HTML tags on a web page.
When we change a property of one of these objects, the web page is updated 
to match.</p>

    !javascript
    var theParagraph = document.getElementById('para1');
    theParagraph.style.background = '#333';
    theParagraph.style.color = '#eee';
    theParagraph.style.padding = '10px';

By itself this is boring and actually bad code! We should just write this
directly into our HTML/CSS instead of using JavaScript, right?

What if we change stuff on the page _when the person viewing the web page
does something interesting_?

---
#DOM Events

Events are another part of the DOM that we haven't talked about yet. They let 
Javascript programs respond to user interactions such as clicks, mouse movements, etc. 
<a href="#" id="testLink">Test Link</a>

    !javascript
    var clickCallback = function() {
      log('The link was clicked.');
    };

    var linkEl = document.getElementById('testLink');
    linkEl.addEventListener('click', clickCallback);

All we have to do is create a function that we want to run, and then attach it 
to the DOM using the `addEventListener` method that's bulit-in to DOM element
objects.

*Note: In IE versions 8 and below, you have to use the `attachEvent` function
instead of `addEventListener`. Don't worry about that for now, because we're
going to learn jQuery soon, and it handles this detail behind the scenes.*

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
#DOM Events

One more detail: JavaScript provides your event handler with an object of
information about the event that happened. More on this later,
but for right now you need to know one thing: `event.preventDefault()`

<a href="http://facebook.com/" id="testLink2">Go To Facebook</a>

    !javascript
    var handler = function(event) {
      log('Get off of Facebook')
      log('and pay attention!');

      // Stop the browser from following the link.
      event.preventDefault();
    };

    var linkEl = document.getElementById('testLink2');
    linkEl.addEventListener('click', handler);

The "default action" is different depending on the element you're listening to:

- For &lt;a&gt; tags, the "default action" is to open the link.
- For &lt;form&gt; tags, the "default action" is to submit the form. You'll
learn more about forms later.
	
---
