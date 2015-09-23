$(document).ready(function(){
    $("#hide").click(function(){
        $("#words").hide();
    });

    $("#show").click(function(){
        $("#words").show();
    });

    $("#getText").click(function(){
        $("#changeText").load("notes");
    });

    $("#getRequest").click(function(){
        $.get("demo", function(data, status){
            alert("Data: " + data + "\n Status:" + status);
        });
    });

    $("#postRequest").click(function(){
        $.post("postDemo.asp",
            {
                name: "Kevin",
                city: "Honolulu",
                island: "Oahu"
            },
            function(data, status){
                alert("Data: "+ data + "\nStatus: " + status);
        });
    });
});