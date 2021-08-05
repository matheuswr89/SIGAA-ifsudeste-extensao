if (TURMAS_PORTAL == null && TABELAS_VARIADAS != null) {
  let arrayConteudo = [],
    arrayTitulos = [],
    arrayLinks = [];
  let tabelas = TABELAS_VARIADAS.querySelector("fieldset > table.listing");
  if (tabelas != null) {
    let thead = tabelas.querySelector("thead > tr");
    for (let i = 0; i < thead.children.length; i++) {
      arrayTitulos.push(thead.children[i].textContent.trim());
    }
    let tbody = tabelas.querySelectorAll("tbody > tr");
    for (let i = 0; i < tbody.length; i++) {
      let array = [];
      for (let j = 0; j < arrayTitulos.length; j++) {
        array.push(tbody[i].children[j]);
      }
      arrayConteudo.push(array);
    }
    let passou = 0;
    if (TABELAS_VARIADAS.querySelector("fieldset > legend").textContent.includes("Tarefas")) {
      for (let i = 0; i < arrayConteudo.length; i++) {
        if (arrayConteudo[i][0].getAttribute("class") != null) {
          if (arrayConteudo[i][0].getAttribute("class").includes("first")) {
            passou++;
            $(arrayConteudo[i - 1][1]).append(arrayConteudo[i][0]);
            arrayConteudo.splice(i, 1);
          }
        }
      }
    }
    for (let i = 0; i < arrayConteudo.length; i++) {
      for (let j = 0; j < arrayTitulos.length; j++) {
        if (arrayConteudo[i][j] != undefined) {
          if (typeof arrayConteudo[i][j] != "string") {
            if (arrayTitulos[0].includes("Mensagem")) {
              arrayLinks[i] = 0;
            } else if (arrayConteudo[i][j].querySelector("a") !== null) {
              if (arrayConteudo[i][j].querySelector("a").getAttribute("onclick") != null)
                arrayLinks[i] = j;
            }
          }
        }
      }
    }
    let conteudoTabelaForum = `<div class="carousel" data-flickity='{ "groupCells": true }'>`;
    for (let i = 0; i < arrayConteudo.length; i++) {
      if (arrayConteudo[i][0].querySelector("img") != null) {
        if (arrayConteudo[i][0].querySelector("img").getAttribute("src").includes("/sigaa/ava/img/accept.png"))
          conteudoTabelaForum += `
            <div class="card carousel-cell" style="background:#1dd1a1;">
            `;
      } else conteudoTabelaForum += `<div class="card">`;

      if (passou > 0) {
        conteudoTabelaForum += `<div class="card-container">`;
      } else {
        conteudoTabelaForum += `<div class="card-container" onclick="${arrayConteudo[i][arrayLinks[i]]
          .querySelector("a")
          .getAttribute("onclick")}">`;
      }
      for (let j = 0; j < arrayTitulos.length; j++) {
        conteudoTabelaForum += `
            <p><b>${arrayTitulos[j] != "" ? arrayTitulos[j] + ":" : ""}</b>
            ${arrayConteudo[i][j].innerHTML}
            </p>  
        `;
      }
      conteudoTabelaForum += `</div></div>`;
    }
    conteudoTabelaForum += `</div>`;
    tabelas.style.display = "none";
    $(tabelas.parentNode).append(conteudoTabelaForum);
    if (arrayConteudo.length <= 1) {
      let carousel = tabelas.parentNode.querySelector(".carousel");
      carousel.removeAttribute("data-flickity");
      carousel.setAttribute("data-flickity",'{ "groupCells": true, "prevNextButtons": false }');
    }
  }
}
