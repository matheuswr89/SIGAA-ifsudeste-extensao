$(document).ready(function () {
  const FINAL_ID_BOTAO_SAIR = ["idEnviar", "btnSalvar"];

  let divBotaoEnviar = $(".form-actions");

  if (divBotaoEnviar.html() != undefined) {
    let modalSairConfirmacao = `
            <div id="modal-envio-confirmacao">
                <div>
                    <div id="msg-envio-confirmacao">Confirme de envio.</div>
                    <div id="enviar-buttons">
                        <button id="confirmar-envio-button">
                            Sim
                        </input>
                        <button id="cancelar-envio-button">
                            Não
                        </input>
                    </div>
                </div>
            </div>
        `;

    divBotaoEnviar.append(modalSairConfirmacao);

    let botoes = divBotaoEnviar.children("input[type=submit]");

    botoes.each(function () {
      let id = $(this).attr("id");
      if (id != undefined) {
        let finalId = id.split(":")[1];
        if (
          finalId == FINAL_ID_BOTAO_SAIR[0] ||
          finalId == FINAL_ID_BOTAO_SAIR[1]
        ) {
          $(this).attr("onclick", "return false;");

          $(this).click(function () {
            $("#modal-envio-confirmacao").show();
            return false;
          });

          $("#cancelar-envio-button").click(function () {
            $("#modal-envio-confirmacao").hide();
            return false;
          });

          $("#confirmar-envio-button").attr("name", $(this).attr("name"));
        }
      }
    });
  }
});
