if (TURMAS_PORTAL != null) {
  let conteudo = `<div class="card-section">`;

  let arrayAtualizacoes = [];
  let tabelaAtualizacoes =
    TURMAS_PORTAL.children[1].getElementsByTagName("tbody")[0];
  let rotator = tabelaAtualizacoes.querySelector(".rotator");
  for (let i = 0; i < rotator.children.length; i++) {
    let child = rotator.children[i];
    let nomeDisciplina = child
      .querySelector("tbody")
      .children[0].querySelector("a")
      .textContent.trim();
    let atualizacao = child
      .querySelector("tbody")
      .children[1].textContent.trim();
    child.querySelector("tbody").children[0].querySelector("a").remove();
    let data = child
      .querySelector("tbody")
      .children[0].textContent.trim()
      .replace(" -", "");
    arrayAtualizacoes.push([nomeDisciplina, atualizacao, data]);
  }
  let tabela = TURMAS_PORTAL.children[2].getElementsByTagName("tbody")[0];
  for (let i = 0; i < tabela.children.length; i++) {
    let children = tabela.children[i];
    if (children.querySelector("form > a") != null) {
      let nomes = children.querySelector("form");
      let nomeDisciplina = children.querySelector("form > a").textContent;
      let local = children.querySelectorAll("td.info")[0].innerText;
      let horario = children.querySelectorAll("td.info")[1].innerText;
      conteudo += `
        <div class="card" onclick="${nomes
          .querySelector("a")
          .getAttribute("onclick")}">
        <div class="card-container">
        <h4>${nomes.innerHTML}</h4>
        <p><b>Local:</b> ${local}</p>
        <p><b>Horário:</b> ${horario}</p>  
        <hr noshade=”noshade” size="20px" align="right" />
        <div class="ultimas-atualizacoes-card">
        <p><b>Ultimas atualizações: </b></p>
        `;
      let passou = true;
      for (let j = 0; j < arrayAtualizacoes.length; j++) {
        if (nomeDisciplina === arrayAtualizacoes[j][0]) {
          conteudo += `
          <p>${arrayAtualizacoes[j][2]} - ${arrayAtualizacoes[j][1]}</p>
          `;
        } else {
          passou = false;
        }
      }
      if (passou === false) {
        conteudo += `<p>Nada por aqui!</p>`;
      }
      conteudo += `</div></div></div>`;
    }
  }
  conteudo += `</div><p class="span-turmas-anteriores">${TURMAS_PORTAL.children[4].innerHTML}</p>`;
  $("#turmas-portal").append(conteudo);
  TURMAS_PORTAL.children[1].style.display = "none";
  TURMAS_PORTAL.children[2].style.display = "none";
  TURMAS_PORTAL.children[3].style.display = "none";
  TURMAS_PORTAL.children[4].style.display = "none";
}
