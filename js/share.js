$(document).ready(function() {
/*Twitter Share URL*/
$(".twitter").click(function(e) {
e.preventDefault();
var myWindow = window.open("https://twitter.com/intent/tweet?url=http://www.youtube.com/watch?v=9gTw2EDkaDQ", "", "width=400, height=400");
});
/*G Plus Share URL*/
$(".gplus").click(function(e) {
e.preventDefault();
var myWindow = window.open("https://plus.google.com/share?url=http://www.youtube.com/watch?v=9gTw2EDkaDQ", "", "width=400, height=400");
});
/*Facebook Share URL*/
$(".fb").click(function(e) {
e.preventDefault();
var myWindow = window.open("http://www.facebook.com/sharer.php?u=http://www.youtube.com/watch?v=9gTw2EDkaDQ", "", "width=400, height=400");
});

/*LinkedIn Share URL*/
$(".linkedin").click(function(e) {
e.preventDefault();
console.log("done");
var myWindow = window.open("http://www.linkedin.com/shareArticle?mini=true&url=http://www.youtube.com/watch?v=9gTw2EDkaDQ", "", "width=400, height=400");
});

});