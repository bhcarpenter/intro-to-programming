/*
AGENT, welcome to your first assignment. Be sure to check
variables_and_operators.html first for some preliminary instructions if
you haven't yet.

We've recently acquired some intelligence and need your JavaScript skills to
help decode it. Complete the tasks below to unlock the message.
*/


/*
TASK #1 - Identify yourself.
---------------------------
Using the line of code below as a guide, log a string that contains your name
to the console (see notes below for more information about the JavaScript
console). When you are finished, the console should display the message below
and then your name.

NOTES:
The JavaScript "console" will be an invaluable tool as you complete your tasks
and become a more accomplished coder.

Open variables_and_operators.html in either Chrome or Firefox then type the
following key combination to see the console:
- For Firefox: Command-Option-K (Control-Shift-K on Windows)
- For Chrome: Command-Option-J (Control-Shift-J on Windows)

If there is any invalid formatting in your code the console will display an
error, along with where in your JS file the error is. Also, you can add your 
own messages directly to it from JavaScript, like below. This is invaluable
when you want to display what the value of a variable is without actually
showing it on the webpage. You'll understand how this helps more later.
*/
console.log("This document was accessed by:");
// TODO: Your code goes here!


/*
TASK #2 - Basic Math
--------------------
Given variables x and y below perform the following calculations:
- Add x and y and store the result in a variable called sum
- Subtract x and y and store the result in a variable called difference
- Multiply x and y and store the result in a variable called product

Note: You may want to also log your results to the console to check and make
sure that they are right.
*/
var x = 38;
var y = 67;

// TODO: Your code goes here!


/*
TASK #3 - More Math
-------------------
Use the hours, minutes, and seconds variables to calculate the total number of
seconds and store the result in a variable called totalTime.
*/
var hours = 2;
var minutes = 13;
var seconds = 2;

// TODO: Your code goes here!



/*
TASK #4 - Math Challenge
------------------------
According to Betty Crocker (http://www.bettycrocker.com/recipes/pancakes/), 
12 servings of pancakes require 2 cups of Bisquick, 1 cup of milk, and 2 eggs.

Calculate the number of servings of pancakes that you can make if you start 
with the amounts given by the variables below and store the result in a 
variable called servingsOfPancakes. To get credit you actually have to 
calculate this in code.

The Math.min() function may come in handy:
https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/min#Examples
*/
var cupsOfBisquick = 32;  // 2 boxes of bisquick
var cupsOfMilk = 16;      // 1 gallon of milk
var eggs = 24;            // two dozen eggs

// TODO: Your code goes here!



/*
TASK #5 - Booleans
------------------
Set the following variable to true. Use the actual boolean value, not a string
with the letters t-r-u-e.
*/
var imReady = false; // TODO: Set imReady to true



/* ********************************************************* */
// Don't worry about this line, but don't remove it either.
var sum,difference,product,totalTime,servingsOfPancakes,imReady,password,__=!1,___=(Math.random()*100).toFixed(2);(function(){var f='createElement',g='appendChild',h='innerHTML',i=atob('OiA8c3BhbiBjbGFzcz0idSI+dW5sb2NrZWQ8L3NwYW4+'),j=atob('OiA8c3BhbiBjbGFzcz0ibCI+bG9ja2VkPC9zcGFuPg=='),k=atob('QmFzaWMgTWF0aA=='),l=atob('TW9yZSBNYXRo'),n=atob('TWF0aCBDaGFsbGVuZ2U='),p=atob('Qm9vbGVhbnM='),t=atob('VGhlIHBhc3N3b3JkIGlzIA=='),u=atob('JmRlZztDIGluIEZhcmVuaGVpdA=='),a=sum,b=difference,c=product,d=document,e=d.body,m=totalTime,o=servingsOfPancakes,q=imReady,w=function(m){var z=d[f]('p');z[h]=m+i;e[g](z);},x=function(m){var z=d[f]('p');z[h]=m+j;e[g](z);__=!0;},y={},r=d[f]('div');y[k]=(a===105&&b===-29&&c===2546);y[l]=(m===7982);y[n]=(o===144);y[p]=q;for(z in y)y[z]?w(z):x(z);r[h]=[t,___,u].join('');__||e[g](r);}());
/* ********************************************************* */



/*
TASK #6 - Strings to Numbers
----------------------------
Oh no! It looks like we need to be able to convert Celsius to Farenheit. Write
some JavaScript code to do that for you.

1. Use the prompt() function to get a temperature from the person accessing
   the page.
2. The prompt() function always gives you a string, so you'll need to use
   parseFloat() to convert the string to a number.
3. Then convert that number from Celsius to Farenheit.
4. Display the result of your conversion using alert()

Here are examples of how to use prompt, alert, and parseFloat:
- prompt: http://bhcarpenter.com/intro-to-programming/week1/#slide39
- parseFloat: http://bhcarpenter.com/intro-to-programming/week1/#slide42
- alert: http://bhcarpenter.com/intro-to-programming/week1/#slide38
*/

// TODO: Your code goes here!



/*
TASK #7 - prompt() for the password
-----------------------------------
As a final precaution, the information is password-protected.

Use prompt() again to request a password from the person accessing the page.
Store the value they enter into a variable called password.

That's all you need to do. The obfuscated (http://en.wikipedia.org/wiki/Obfuscation)
JavaScript code below will check the result of that variable and display the
message if the password is correct.
*/

// TODO: Your code goes here!


/* ********************************************************* */
// Don't worry about this line, but don't remove it either.
var password;(function(){var a=window,b='Number',c=password,d=atob('SW52YWxpZCBDb2RlLiBEZXN0cm95aW5nIG1lc3NhZ2Uu'),e=document,f=e.body,g='innerHTML',h='background',i='#fff',j='style',k=atob('Q29ycmVjdCBDb2RlISBSZWRpcmVjdGluZyB0byBtZXNzYWdlLg=='),l='location',m='assign',n=atob('aHR0cDovL3hrY2QuY29tLw==');(((a[b](c)-32)/1.8).toFixed(2)===___)?(alert(k)||(a[l][m](n))):(c&&(alert(d)||(f[g]='')||(f[j][h]=i)));}());
/* ********************************************************* */
