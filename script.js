/*global $*/

//$(document).ready(function() {
//    /*Traversing Up And Down The DOM Tree challenge*/
//    $("p").click(function() {
//        $(this).children("a").css("background-color", "yellow");
//    });
//    /*Traversing Sideways challenge*/
//    $("button").click(function() {
//        $(this).prev("p").slideToggle("slow");
//    });
//})

$(document).ready(function() {
    // Traversing Sideways - Challenge 2
    $("p").css("display", "none")
    $("button").click(function() {
        $(this).prev("p").slideDown("slow");
    });
    // Traversing Sideways - Challenge 3
    $(".card").click(function () {
        $(this).toggleClass("highlight");
    });
    // Traversing Sideways - Challenge 4
    $("#select").click(function() {
        $(".card:not(:highligh)").hide();
    });
    $("#all").click(function() {
        $(".card").show();
    });
})
