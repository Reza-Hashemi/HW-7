$( document ).ready(function() {
    var x = " added some text!"

    $("#box").click(function(){
        $("#sentenc").append(x);
    })

});