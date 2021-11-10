$(document).ready(function () {
  $(" #page,#page-btn").mouseover(function () {
    $("#drop-page").slideDown();
  });
  $("#drop-page").mouseleave(function () {
    $("#drop-page").slideUp();
  });

  $("#link,#link-btn").mouseover(function () {
    $("#drop-link").slideDown();
  });
  $("#drop-link").mouseleave(function () {
    $("#drop-link").slideUp();
  });
});
