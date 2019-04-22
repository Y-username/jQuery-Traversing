#jQuery

## jQuery - Traversing Mt. Dom  
### Other Traversing Methods
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