/*
Problem #1
----------
Let's write a function that calculates the subtotal of a particular item in
your shopping cart.

Write a function called calculateLineItemTotal.

It should accept two parameters:
- pricePerItem (which is the cost for each individual product)
- quantity (which is the number of products being ordered)

It should multiply pricePerItem and quantity and return the result.

I wrote the code that hooks this up to the web page, so once you've 
implemented it correctly you should be able to change the quantity dropdowns
on the page and the total will update automatically.
*/

// I went ahead and got you started on this one.
var calculateLineItemTotal = function(pricePerItem, quantity) {
  // TODO: multiply pricePerItem and quantity and return the result
};

// Let's test our function!
var result = calculateLineItemTotal(12.00, 5);
console.log(result); // Should display 60 in the console




/*
Problem #2
----------
We also need a function to calculate the tax.

Write a function called calculateTax.

It should accept one parameter:
- subtotal (will be filled in with the current cart's subtotal)

It should multiply subtotal by 0.08 (the current sales tax rate in Atlanta) and
return the result.

Again, once you get this working, the web page should start calculating the
sales tax and displaying it.
*/




/*
Problem #3
----------
Write a function to calculate the shipping.

It should be called calculateShipping.

It should accept one parameter:
- subtotal (will be filled in with the current cart's subtotal)

It should return:
- 5 if the subtotal is less than 50
- 15 if the subtotal is between 50 and 100
- 25 if the subtotal is over 100
*/



/*
Problem #5
----------
Write a function to calculate the grand total.

It should be called calculateGrandTotal.

It should accept one parameter:
- subtotal (will be filled in with the current cart's subtotal)

It should return:
- subtotal + result of calling calculateTax with the subtotal + result of
  calling calculateShipping with the subtotal
*/



/*
Problem #6
----------
When my wife worked in retail, their checkout system would let them attach
notes to people that would pop up on the screen when those people were
checking out.

Write a function called showCustomerNote

It should accept one parameter:
- name (the customer's name)

It should:
- use alert() to pop up 'No checks!' if the name is 'Chex Forger'

Make up some more customer messages for different customer names.

It does not need to return anything, because it has side effects (showing
the message) instead.
*/




