$(document).ready(function () {
  $("#blue").mouseover(function () {
    $(this).css("background-color", "blue");
  });
  $("#blue").mouseleave(function () {
    $(this).css("background-color", "red");
  });
});
