$(document).ready(function(){
    $("#engine").hide();
    $("#games").hide();
    $("#labs").hide();
    $("#contacts").hide();
    $("#aboutus").hide();
    $("body").hide();
    $("body").show(1000)

    $("#games-show").click(function(){
        $("#games").show(1000);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#games").offset().top
        }, 2000);
    });
    $("#games-s").click(function(){

        $("#games").show(1000);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#games").offset().top
        }, 2000);
    });
    $("#games-sh").click(function(){

        $("#games").show(1000);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#games").offset().top
        }, 2000);

    });
    $("#engine-show").click(function(){
        $("#engine").show(1000);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#engine").offset().top
        }, 2000);
    });
    $("#engine-s").click(function(){
        $("#engine").show(1000);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#engine").offset().top
        }, 2000);
    });
    $("#lab-show").click(function(){
        $("#labs").show(1000);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#labs").offset().top
        }, 2000);
    });
    $("#lab-s").click(function(){
        $("#labs").show(1000);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#labs").offset().top
        }, 2000);
    });
    $("#con-show").click(function(){
        $("#contacts").show(1000);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contacts").offset().top
        }, 2000);
    });
    $("#con-s").click(function(){
        $("#contacts").show(1000);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contacts").offset().top
        }, 2000);
    });
    $("#aboutus-show").click(function(){
        $("#aboutus").show(1000);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#aboutus").offset().top
        }, 2000);
    });
    $("#about-s").click(function(){
        $("#aboutus").show(1000);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#aboutus").offset().top
        }, 2000);
    });

    // jQuery methods go here...

});
