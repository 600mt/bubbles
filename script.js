$(document).ready(function() {

// bande in movimento mouse x
var w = Math.round($(document).width() / 255);
var h = Math.round($(document).height() / 255);
var row1 = $(".aw");

$(document).mousemove(function(e){
    var pageX = Math.round(e.pageX / w);
    var pageY = Math.round(e.pageY / h);
   // body.css("background-color", "rgb("+pageX+","+pageY+","+pageX+")");
    row1.css("border-radius", pageX/9 + pageY/9);

    
});
   

});
