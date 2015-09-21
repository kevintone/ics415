$("#clickTest").click(function(){
    alert("Have a good day!");
});

$("#enterTest").mouseenter(function(){
    $("#changeBack").css("border", "2px solid red");
});

$("#enterTest").mouseleave(function(){
   $("#changeBack").css("border", "0px solid")
});

$("#leaveTest").mouseleave(function() {
    $("#leaveTest").css("color", "black");
});
