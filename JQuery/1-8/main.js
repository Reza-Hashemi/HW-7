$(document).ready(function () {
  $("#one").click(function (e) {
    e.preventDefault();
    $("#down-one,#right-one,#one-down").toggle();
  });
  $("#two").click(function (e) {
    e.preventDefault();
    $("#down-two,#right-two,#two-down").toggle();
  });
  $("#three").click(function (e) {
    e.preventDefault();
    $("#down-three,#right-three,#three-down").toggle();
  });
  $("#one").hover(
    function () {
      // over
      $(this)
        .css("border-style", "1px solid")
        .css("border-color", "yellow yellow green yellow")
        .css("background-color", "rgb(235, 235, 176)");
    },
    function () {
      // out
      $(this)
        .css("border-style", "1px solid")
        .css("border-color", "#ffffff #ffffff #008000 #ffffff")
        .css("background-color", "white");
    }
  );
  $("#two").hover(
    function () {
      // over
      $(this)
        .css("border-style", "1px solid")
        .css("border-color", "yellow yellow green yellow")
        .css("background-color", "rgb(235, 235, 176)");
    },
    function () {
      // out
      $(this)
        .css("border-style", "1px solid")
        .css("border-color", "#ffffff #ffffff #008000 #ffffff")
        .css("background-color", "white");
    }
  );
  $("#three").hover(
    function () {
      // over
      $(this)
        .css("border-style", "1px solid")
        .css("border-color", "yellow yellow green yellow")
        .css("background-color", "rgb(235, 235, 176)");
    },
    function () {
      // out
      $(this)
        .css("border-style", "1px solid")
        .css("border-color", "#ffffff #ffffff #008000 #ffffff")
        .css("background-color", "white");
    }
  );
});
