if (TURMAS_PORTAL != null) {
  let arrayComunidades = [],
    arrayForuns = [];
  let comunidades = TABELA_COMUNIDADES.querySelector("form > table > tbody");
  for (let i = 0; i < comunidades.children.length; i++) {
    arrayComunidades.push(comunidades.children[i].querySelector("a"));
  }
  let foruns = TABELA_FORUM.querySelector("form > table > tbody");
  if (foruns != null) {
    for (let i = 0; i < foruns.children.length; i++) {
      let titulo = foruns.children[i].querySelectorAll("td")[0].querySelector("a");
      let autor = foruns.children[i].querySelectorAll("td")[1].querySelector("acronym").getAttribute("title");
      let respostas = foruns.children[i].querySelectorAll("td")[2].textContent.trim();
      let data = foruns.children[i].querySelectorAll("td")[3].textContent.trim();
      arrayForuns.push([titulo, autor, respostas, data]);
    }
  }
  let conteudoComunidade = `
  <div class="conteudoComunidade">
  <h4>${TABELA_COMUNIDADES.querySelector("h4").innerHTML}</h4>
  <div class="carousel" data-flickity='{ "groupCells": true, "adaptiveHeight": true }'>`;
  for (let i = 0; i < arrayComunidades.length; i++) {
    let comunidade = arrayComunidades[i];
    if (comunidade != null) {
      conteudoComunidade += `
      <div class="card carousel-cell" onclick="${comunidade.getAttribute(
        "onclick"
      )}">
      <div class="card-container">
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
  <div class="carousel" data-flickity='{ "groupCells": true, "adaptiveHeight": true }'>`;
  for (let i = 0; i < arrayForuns.length; i++) {
    let forums = arrayForuns[i];
    if (forums != null) {
      conteudoForum += `
      <div class="card carousel-cell" onclick="${forums[0].getAttribute(
        "onclick"
      )}">
        <div class="card-container">
          <p class="link"><strong>${forums[0].innerHTML}</strong></p>
          <p><b>Autor:</b> ${forums[1]}</p>
          <p><b>Data:</b> ${forums[3]}</p>
          <p><b>Respostas:</b> ${forums[2]}</p> 
        </div>
      </div>
  `;
    }
  }
  conteudoForum += `</div></div>`;
  let criaDiv = `
    <div class="div-comunidades-foruns">
      ${conteudoComunidade}
      ${conteudoForum}
    </div>
  `;

  $(CONTEUDO).append(criaDiv);
  if (arrayComunidades.length <= 1) {
    let carousel = CONTEUDO.querySelectorAll(".carousel");
    carousel[1].removeAttribute("data-flickity");
    carousel[1].setAttribute("data-flickity", '{ "groupCells": true, "prevNextButtons": false }');
  }
  if (arrayForuns.length <= 1) {
    let carousel = CONTEUDO.querySelectorAll(".carousel");
    carousel[2].removeAttribute("data-flickity");
    carousel[2].setAttribute("data-flickity", '{ "groupCells": true, "prevNextButtons": false }');
  }
  TABELA_COMUNIDADES.style.display = "none";
  TABELA_FORUM.style.display = "none";
}
