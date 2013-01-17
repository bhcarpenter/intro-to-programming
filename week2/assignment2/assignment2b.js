/*
We're going to get some practice in working with the DOM by using the webpage
in assignment2b.html as a starting point. We will change some styles and add to
the page using JavaScript.

You should see all of the changes that you make immediately when the page
loads. Obviously, just modifying the HTML and CSS directly would be a better
choice if you were making these changes on a real site! However, next week
we're going to learn how to make changes in response to "events" such as
moving the mouse or clicking a button, and for that you need JavaScript.
*/


/*
Problem #1
----------
Change the background color of the entire page using JavaScript!

Recall the "style" property from the slides? This let's you adjust CSS styles
directly from JavaScript. So change the 'background' property of the 'style'
property of the body tag to whatever background color you want. I got you
started by storing the DOM element that represents the body tag into a 
variable called 'body'.

I'm pretty confident that you guys can figure this out from the slides, and
you'll understand this stuff better after you do!
*/
var body = document.body;

// TODO: Your code goes here!



/*
Problem #2
----------
Change the heading of the page using JavaScript!

First, get a reference to the text node that is inside the H1 tag. Here's how:
1. Start with a reference to the body tag.
2. Get the first child of the body element. This will be a text node that
contains the spaces between the start of the page and the H1 tag.
3. Then get the next sibling of that text node. This will be the H1 tag.
4. Then get the first child of the H1 tag. This will be the actual text node
that you want to change.

Then, change the value of that text node:
1. Text nodes have a "nodeValue" property. Set this to be "ABC Corporation" and
refresh the page to see your changes!
*/

// TODO: Your code goes here!



/*
Problem #3
----------
Changing styles directly through JavaScript is ugly. More often, we add (and
remove) CSS classes by manipulating the "class" attribute of objects.

1. Get a reference to the DOM node that represents the paragraph on the page by
using document.getElementById()

2. Set the "class" property of that DOM node to be "highlighted".

3. Add some styles for the .highlighted class to assignments.css so that you can
tell that it's working.
*/

// TODO: Your code goes here!



/*
Problem #4
----------
Add your contact information to the page.

1. Copy your "me" object declaration from Part A Problem #6 below.
2. Copy your HTML generating code from Part A Problem #7 below.

We're going to take that HTML string and insert it into the page!

1. Get the DOM object that represents the "employees" div using
document.getElementById.
2. Set the innerHTML property of that DOM element to be HTML string
that you generated in Problem #7 from Part A.

*/

// TODO: Your code goes here!



/*
EXTRA CREDIT
------------
Change up to 2 additional things about the page for extra credit
*/



