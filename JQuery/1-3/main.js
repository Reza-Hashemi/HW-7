$(document).ready(function () {
  $("#parent-buton").click(function (e) {
    e.preventDefault();
    $("#target").append(
      $("#parent").text(),
      $("#text").text(),
      $("#child").text()
    );
  });

  $("#child-buton").click(function (e) {
    e.preventDefault();
    $("#target").append($("#child").text());
  });
});
