$(document).ready(function () {
  $("#fadein").click(function (e) {
    e.preventDefault();
    $("#after").fadeOut();
    $("#box").fadeIn();
  });

  $("#fadeout").click(function (e) {
    e.preventDefault();
    $("#box").fadeOut();
    $("#after").fadeIn();
  });
});
