$(document).ready(function(){
   $(".answer").hide();

    $("#q1").click(function(){
        $("#a1").slideToggle();
    });

    $("#q2").click(function(){
        $("#a2").slideToggle();
    });

    $("#q3").click(function(){
        $("#a3").slideToggle();
    });

    $("#q4").click(function(){
        $("#a4").slideToggle();
    });

    $("#q5").click(function(){
        $("#a5").slideToggle();
    });
});

$(document).ready(function(){
    $("#countUrl").click(function(){
        var url = $(this).attr("ahref");
        alert("The number of links is: " + url);
    });
});