$(document).ready(function(){
    function updateNumbers() {
//update variable
var lists = document.querySelectorAll("number");
//update number
for(var i = 0; i < lists.length; i++) {
$(lists[i]).html(i+1 + ") ");
}
}
updateNumbers();
// To dos By Clicking
$("ul").on("click", "li", function () {
$(this).toggleClass("completed");
});

//Click  to delete To do
$("ul").on('click', "span", function (e) {
e.stopPropagation();
$(this).closest("li").fadeOut(500,function() {
$(this).remove();
updateNumbers();
});
});

//Clear All
$(".removeall").on('click', function (e) {
$("li").fadeOut(500, function() {
$(this).remove();
});
});

//Add new to dos
$("input[type='text']").keypress(function(e) {
if(e.which === 13) {
//add new text
var totext = $(this).val();
//append to do text to ul
if( $(this).val() !== "") {
$("ul").append("<li><span><i class='fas fa-trash-alt'> </i></span>" + "<number></number>" + totext + "</li>");
}
updateNumbers();
//clear text
$(this).val("");
}
});

$(".add").click(function() {
$("input[type='text']").fadeToggle(200);
});
});