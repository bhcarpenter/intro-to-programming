#The Document-Object Model

---
#The Document-Object Model

The Document-Object Model is the 'glue' that connects Javascript to the data on web pages.

It consists of several different components for interacting with web pages, but the most important of these is the "element heirarchy", a tree which consists of "elements" (think HTML tags) and "text nodes".

<div style="text-align: center">
<br />
<img src="img/html.png" />
<br />
<small style="font-size: 0.7em; font-style: italic">graphic from <a href="http://eloquentjavascript.net/">Eloquent Javascript</a> by Marijn Haverbeke</small>
</div>

---
#The document Object

There is a global object in Javascript called `document` that contains all of the data and methods that we need to work with the DOM.

Here are some of the most important features of the `document` object:

- `document.getElementById('some-element-id')` // Gets a dom element by it's id
- `document.documentElement` // The &lt;html&gt; element
- `document.body` // The &lt;body&gt; element.
- `document.createElement('div')` // Creates a new DOM element
- `document.createTextNode('Some random text.')` // Creates a new text node.

---
# Traversing the DOM

Once we have a DOM element (either `document.body` or one that we have found using `document.getElementById()`), we can *traverse* the dom tree using some properties that all element objects have.

- `el.parentNode`
- `el.firstChild`
- `el.lastChild`
- `el.nextSibling`
- `el.previousSibling`
- `el.childNodes` (An array of nodes that are immediate children of el. We'll talk more about arrays after the midterm.)

---
#Manipulating DOM Elements

Once we have a DOM element, we can use them to manipulate the web page! Most element attributes can be accessed directly by name on the object. <a href="http://bhcarpenter.com" id="aLink">Test Link</a>

    !javascript
    var linkEl = document.getElementById('aLink');
    log( linkEl.href );

    linkEl.href = 'http://creativecircus.edu';
    log( linkEl.href );


There are a few special attributes as well.

- `el.className = 'highlighted';` // "class" is a reserved word
- `el.style` // Another object. Use it to set CSS styles!

.

    !javascript
    var linkEl = document.getElementById('aLink');
    linkEl.style.color = '#ff0000';

---
#Adding Elements

We can also add new children to an element.

<div id="myDiv" style="border: solid 1px #333; padding: 10px;">
  The content will go here:
</div>
<br />

    !javascript
    var myDiv = document.getElementById('myDiv');

    // First we have to make the new element
    var newChild = document.createElement('p');

    // Then we need to make a new text node
    var text = document.createTextNode('Lorem ipsum dolor sit amet.');

    // Then we add the new text node to the new element.
    newChild.appendChild( text );

    // Then we add the new node to the page.
    myDiv.appendChild( newChild );

---
#Adding Elements (cont.)

Obviously this can be a pain really quick if you're adding a lot of elements to a page. There is a (usually) slower, but easier to read:

<div id="myDiv2" style="border: solid 1px #333; padding: 10px;">
  The content will go here:
</div>
<br />

    !javascript
    var myDiv = document.getElementById('myDiv2');

    myDiv.innerHTML = '<p>Lorem ipsum dolor sit amet.</p>';


