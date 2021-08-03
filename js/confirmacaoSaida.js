$(document).ready(function(){
    
    const FINAL_ID_BOTAO_SAIR = ["idCancelar", "btnCancelar"];

    let divBotaoSair = $(".other-actions, tfoot tr td");

    if(divBotaoSair.html() != undefined){
        let modalSairConfirmacao = `
            <input type=submit id="abrirModalCancelar" value="Cancelar"></input>
            <div id="modal-sair-confirmacao">
                <div>
                    <div id="msg-sair-confirmacao">Deseja cancelar a operação? Todos os dados digitados serão perdidos!</div>
                    <div id="sair-buttons">
                        <button id="confirmar-sair-button">
                            Sim
                        </input>
                        <button id="cancelar-sair-button">
                            Não
                        </input>
                    </div>
                </div>
            </div>
        `;

        divBotaoSair.append(modalSairConfirmacao);

        let botoes = divBotaoSair.children("input[type=submit]");
    
        botoes.each(function() {
            let id = $(this).attr('id');
            if(id != undefined){
                let finalId = id.split(":")[1];
                if(finalId == FINAL_ID_BOTAO_SAIR[0] || finalId == FINAL_ID_BOTAO_SAIR[1]){

                    $( this ).hide();
    
                    //$("#abrirModalCancelar").attr("name", $(this).attr("name"));
                    $("#abrirModalCancelar").click(function () { 
                        $("#modal-sair-confirmacao").show();
                        return false;
                    });
    
                    $("#cancelar-sair-button").click(function(){
                        $("#modal-sair-confirmacao").hide();
                        return false;
                    })
    
                    $("#confirmar-sair-button").attr("name", $(this).attr("name"));
                }
            }
        });
    } 

});


            
            