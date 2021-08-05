$(document).ready(function () {
  let botoes = $(".botoes");

  if (botoes.html() != undefined) {
    botoes.css("display", "flex");
    botoes.css("justify-content", "space-between");

    $(".botoes .form-actions").css("order", "3");
    $(".botoes .required-items").css("order", "2");
    $(".botoes .other-actions").css("order", "1");
  }
});
