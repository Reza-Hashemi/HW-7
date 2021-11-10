$(document).ready(function () {
  $("#up").click(function (e) {
    e.preventDefault();
    $("#box").slideUp();
    $("#text").slideDown();
  });
  $("#down").click(function (e) {
    e.preventDefault();
    $("#box").slideDown();
    $("#text").slideUp();
  });
  $("#toggle").click(function (e) {
    e.preventDefault();
    $("#text ,#box").slideToggle();
  });
});
