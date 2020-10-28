$(document).ready(function () {
  $("#formInput").submit(function (event) {
    event.preventDefault();
    const inputYear = parseInt($("input#year").val());

    if ((inputYear % 4 === 0) && (inputYear % 100 !== 0) || (inputYear % 400 === 0)) {
      $(".results").children().hide();
      $("#yes").show();
    } else {
      $(".results").children().hide();
      $("#no").show();
    }
  });
});
