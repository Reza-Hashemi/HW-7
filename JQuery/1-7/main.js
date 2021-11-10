$(document).ready(function () {
    $("#btn").click(function (e) { 
        e.preventDefault();
        $("#bar").width("+=10%");
    });
});