if (TURMAS_PORTAL != null) {
  let arrayComunidades = [],
    arrayForuns = [];
  let comunidades = TABELA_COMUNIDADES.querySelector("form > table > tbody");
  for (let i = 0; i < comunidades.children.length; i++) {
    arrayComunidades.push(comunidades.children[i].querySelector("a"));
  }
  let foruns = TABELA_FORUM.querySelector("form > table > tbody");
  for (let i = 0; i < foruns.children.length; i++) {
    let titulo = foruns.children[i]
      .querySelectorAll("td")[0]
      .querySelector("a");
    let autor = foruns.children[i]
      .querySelectorAll("td")[1]
      .querySelector("acronym")
      .getAttribute("title");
    let respostas = foruns.children[i]
      .querySelectorAll("td")[2]
      .textContent.trim();
    let data = foruns.children[i].querySelectorAll("td")[3].textContent.trim();
    arrayForuns.push([titulo, autor, respostas, data]);
  }
  let conteudoComunidade = `
  <style>
  .card-comunidade {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 8px;
    margin: 10px;
    width: 60%;
    cursor: pointer;
  }
  .card-comunidade p{
    width: 100%;
  }
  .container-card-comunidade .link{
    font-size: 13px;
    color: #003395;
  }
  .conteudoComunidade h4, .conteudoForum h4{
    text-transform:uppercase;
  }
  .container-card-comunidade span{
    font-weight: bold;
  }
  .card-comunidade:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  .container-card-comunidade {
    padding: 2px 16px;
  }
  </style>
  <div class="conteudoComunidade">
  <h4>${TABELA_COMUNIDADES.querySelector("h4").innerHTML}</h4>
  <div class="container-comunidade">`;
  for (let i = 0; i < arrayComunidades.length; i++) {
    let comunidade = arrayComunidades[i];
    if (comunidade != null) {
      conteudoComunidade += `
      <div class="card-comunidade" onclick="${comunidade.getAttribute(
        "onclick"
      )}">
        <div class="container-card-comunidade">
        <p class="link"><strong>${comunidade.innerHTML}</strong></p>
        </div>
      </div>
  `;
    }
  }
  conteudoComunidade += `</div>
  <div class="links-forum">${
    TABELA_COMUNIDADES.querySelector("center").innerHTML
  }</div>
  </div>`;

  let conteudoForum = `
  <div class="conteudoForum">
  <h4>${TABELA_FORUM.querySelector("h4").innerHTML}</h4>
  <div class="descricaoOperacao">${
    TABELA_FORUM.querySelector(".descricaoOperacao").innerHTML
  }</div>
  <div class="links-forum">${
    TABELA_FORUM.querySelector("center").innerHTML
  }</div>
  <div class="container-forum" >`;
  for (let i = 0; i < arrayForuns.length; i++) {
    let forums = arrayForuns[i];
    if (forums != null) {
      console.log(forums[1]);
      conteudoForum += `
      <div class="card-comunidade" onclick="${forums[0].getAttribute(
        "onclick"
      )}">
        <div class="container-card-comunidade">
          <p class="link"><strong>${forums[0].innerHTML}</strong></p>
          <p><span>Autor:</span> ${forums[1]}</p>
          <p><span>Data:</span> ${forums[3]}</p>
          <p><span>Respostas:</span> ${forums[2]}</p> 
        </div>
      </div>
  `;
    }
  }
  conteudoForum += `</div></div>`;

  let criaDiv = `
    <style>
      .div-comunidades-foruns{ 
        margin-top: 10px;
        padding: 15px;
        height: 330px;
        margin-left: 5px;
      }
      .div-comunidades-foruns, .container-forum,.container-comunidade{
        background: rgb(239,243,250);
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .conteudoForum, .conteudoComunidade{
        overflow: auto;
        height: 300px;
      }
      .conteudoForum::-webkit-scrollbar, .conteudoComunidade::-webkit-scrollbar {
        width: 5px;
      }
      .conteudoForum::-webkit-scrollbar-track, .conteudoComunidade::-webkit-scrollbar-track {
        background: #FFF;
        border-radius: 20px;
      }
      .conteudoForum::-webkit-scrollbar-thumb, .conteudoComunidade::-webkit-scrollbar-thumb {
        background-color: #A9A9A9;
        border-radius: 20px;
      }
      .links-forum{
        display: grid;
        text-align: center;
      }
      .conteudoComunidade, .conteudoForum{
        width: 50% !important;
      }
    </style>
    <div class="div-comunidades-foruns">
      ${conteudoComunidade}
      ${conteudoForum}
    </div>
  `;

  $(CONTEUDO).append(criaDiv);
  TABELA_COMUNIDADES.style.display = "none";
  TABELA_FORUM.style.display = "none";
}
