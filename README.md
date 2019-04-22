# jQuery - Traversing Mt. Dom 
## Traversing Up And Down The DOM Tree
#### parent()
$("selector").parent();\
<small>obtain the direct parent element of a selected element by calling a parent() method.</small>
#### children()
$("selector").children("p");\
<small>The children() function returns all direct child elements of a given element.</small>

## Traversing Sideways
#### next()
$("selector").next();\
<small>The next() function traverses along the DOM and returns the next sibling element in the DOM after the selected element.</small>
#### prev()
$("selector").prev();\
<small>traverses backwards along the DOM and returns the previous sibling element in the DOM</small>
#### toggleClass()
$("selector").toggleClass("highlight");\
<small>add "highlight" class as we click on the div and remove it when we click again.</small>

## Other Traversing Methods
#### first()
$("selector").first().css("property", "value") \
<small>The first() function returns the first element in the selected set of elements.</small> \
#### last()
$("selector").last().css("property", "value") \
<small>The last() function returns the last element in the selected list of elements.</small> \
#### siblings()
$("selector").siblings().click(function()) \
<small>The siblings() function returns all siblings of a given element that share the same parent. This function traverses forwards and backwards along the sibling elements of DOM elements.</small> \
#### first()
$("selector").filter().addClass("className") \
<small>The filter method lets you specify some additional criteria.
Elements that do not match the criteria are removed from the selection and those that do match will be returned.
</small> \
#### Variable
var panelColor = $("this").css("background-color"); \
console.log(panelColor); \
$("selector").css("property", panelColor) \
<small>Variables let one elements property pass to another one. It's important to note that variables do not need quotes.</small> \