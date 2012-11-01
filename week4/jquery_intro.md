#Oh noes!

Not all browsers have the same DOM!

<div style="text-align: center">
<br /><br /><br /><br />
<img src="img/Oh_noes_by_MichelleBurnette.jpg" />
<br /><br /><br /><br />
</div>

The situation is actually better than it used to be, but some browsers still have different ways of adding event listeners, changing the styles of elements, etc.

---
#jQuery

---
#jQuery

jQuery is a Javascript library that was written by John Resig. It provides an _abstraction layer_ around the DOM to make your live easier:

1. It smooths out the differences between browsers.
2. It simplifies finding DOM element objects to manipulate.
3. It simplifies working with AJAX (Web Dev 4).
4. It provides some basic animation funcionality.

...and much, much more!

---
#jQuery

<p id="test_paragraph">We'll talk more about jQuery next week, but here's a sample.</p>

    !javascript
    var el = jQuery('#test_paragraph');

    // el is now a jQuery object that *represents* 
    // the dom element of the paragraph above.

    el.css('color', '#ffffff');
    el.css('background', '#777777');
    el.css('padding', '40px');
    el.css('width', '500px');

---
#jQuery

<div style="height: 300px; position: relative;">
  <p style="position: absolute; text-align: center; width: 500px; height: 30px; line-height: 30px; padding: 5px; color: #333; background: #e0e0e0; border: solid 2px #ccc" id="move_me">A simple animation example.</p>
</div>

    !javascript
    var el = jQuery('#move_me');

    var newStyles = {
        width: '300px',
        top: '50px',
        left: '300px'
    };

    el.animate( newStyles );

