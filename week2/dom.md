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

