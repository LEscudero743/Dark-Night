$(".yes-button").click(function() {
    $(".title").hide();
    $(".Part-Two-Yes").fadeIn();
    $(".no-button").hide();
});
$(".y3s-button").click(function() {
    $(".Inter").hide();
    $(".Finale").fadeIn();
    $(".n0-button").hide();
});

$(".no-button").click(function() {
    $(".title").hide();
    $(".Part-Two-No").fadeIn();
    $(".yes-button").hide();
});
$(".n0-button").click(function() {
    $(".Inter").hide();
    $(".y3s-button").hide();
    $(".restart").show();
    $(".Two-No").fadeIn();
});

$(".Part-Two-Yes").dblclick(function() {
    $(".Inter").fadeIn();
    $(".Part-Two-Yes").hide();
    $(".yes-button").hide();
    $(".y3s-button").show();
    $(".n0-button").show();
    $(".-img").show();
});
$(".Finale").dblclick(function() {
    $(".-img").show();
    $(".Inter").hide();
    $(".y3s-button").hide();
    $(".n0-button").hide();
});
$(".restart").click(function() {
    $(".Part-Two-No").hide();
    $(".yes-button").show();
    $(".title").fadeIn();
});
$(".Restart").click(function() {
    $(".Two-No").hide();
    $(".yes-button").show();
    $(".no-button").show();
    $(".n0-button").hide();
    $(".title").fadeIn();
});
$(".r3start").click(function() {
    $(".Finale").hide();
    $(".yes-button").show();
    $(".no-button").show();
    $(".y3s-button").hide();
    $(".title").fadeIn();
});