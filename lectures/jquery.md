---
#jQuery

---
#jQuery

<p id="testParagraph">jQuery is a library of functions and objects that provide an *abstraction* for working with the DOM.</p>

    !javascript
    var el = jQuery('#testParagraph');

    // el is now a jQuery object that *represents* 
    // the DOM element of the paragraph above.

    el.css('color', '#0000ff')

---
<h1 class="slide15">jQuery "objects"</h1>

jQuery objects are objects returned by the jQuery() function. They represent (i.e. they "are an abstraction for") DOM elements. This means that you can manipulate these objects and the resulting DOM objects will reflect the change.

*Note: To save typing, the jQuery() function is also _aliased_ to $() by default. Going forward, we're just going to type $() instead of jQuery().*

##Selecting elements

Instead of just finding elements by their ID, jQuery actually lets you find DOM elements using CSS selectors.

    !javascript
    var allH1Elements = $('h1');
    allH1Elements.css('text-decoration', 'underline');
    
You can even target elements like this:

    !javascript
    var el = $('h1.slide15');
    el.css('color', '#3465A4')

---
#DOM Manipulation using jQuery

jQuery provides a replacement for most DOM manipulations.

* `el.attr('attrName'); // Retrieve an attribute`
* `el.attr('attrName', 'new content'); // Set an attribute to a new value.`
* `el.css('background', '#ff0000'); // Changes a CSS property`
* `el.css('background'); // Retrieves the current value of a CSS property.`
* `el.append('&lt;p&gt;Some HTML &lt;strong&gt;content&lt;/strong&gt;&lt;/p&gt;')`
* `el.val(); // Returns the value of an input, textarea, or select`
* `el.val("A value"); // Sets the value of an input, textarea, or select`

---
#Events

Finally, jQuery also provides a way to register event listeners. <a href="http://creativecircus.edu/" id="testLink4">Test Link</a>

    !javascript
    var el = $('#testLink4');

    var handler = function(event) {

      // Don't actually follow the link:
      event.preventDefault();

      // Instead print out what the link URL is.
      var url = el.attr('href');
      log(url);
    }

    el.on('click', handler);

You can also fake events! Check this out.

    !javascript
    var el = $('#testLink4');
    el.trigger('click');

---
#$(document).on('ready')

jQuery also creates a special event on the document object called "ready". It is triggered after all of the elements of the DOM have been created.

If you put your JavaScript tags in the &lt;head&gt; tag, there's a good chance that the DOM events you want to work with haven't been loaded yet, because your web browser creates the DOM elements as it reads the HTML top-to-bottom. If you put all of your DOM code inside of an event listener attached to the "ready" event of the document object, all of the DOM elements are guaranteed to exist.

We haven't been worrying about this because we include all of our JavaScript at the very bottom of the page, but you'll see this a lot as you work with other people's JavaScript code. See the [jQuery documentation](http://api.jquery.com/ready/) for more information about the "ready" event.

---
#Do your research!

We've only touched the surface of what jQuery can do.

There are numerous tutorials that you can follow to hone your jQuery skills. Also, the [online documentation](http://docs.jquery.com/) is excellent.

For any future DOM-type stuff on your homework, feel free to use jQuery instead of `document.getElementById()`, `addEventListener()`, etc.

