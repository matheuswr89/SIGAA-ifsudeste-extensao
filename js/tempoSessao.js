$(document).ready(function () {
  let spamTempoDeSessao = $("#tempoSessao");

  if (spamTempoDeSessao.html() != undefined) {
    let msgAviso = `
            <div id="aviso-tempo-sessao">
                <p>Atenção! O tempo da sua sessão está quase acabando!<p>
                <button id="fechar-aviso-tempo-sessao"><strong>X</strong></button>
            </div>`;

    spamTempoDeSessao.append(msgAviso);

    let spanRelogio = $("#spanRelogio");
    spamTempoDeSessao.bind("DOMSubtreeModified", function () {
      if (spanRelogio.text() != "") {
        let hh = parseInt(spanRelogio.text().split(":")[0]);
        let mm = parseInt(spanRelogio.text().split(":")[1]);

        let minutosRestantes = hh * 60 + mm;

        if (minutosRestantes == 5 || minutosRestantes == 1) {
          $("#aviso-tempo-sessao").css("visibility", "visible");
        }
      }
    });

    $("#fechar-aviso-tempo-sessao").click(function () {
      $("#aviso-tempo-sessao").css("visibility", "hidden");
    });
  }
});
