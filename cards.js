if (TURMAS_PORTAL != null) {
  let conteudo = `
    <style>
    *{
      box-sizing: border-box;
    }
    #main-docente{
      width: 100%;
      justify-content: center;
      align-items: center
    }
    .card-section{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-items: center
    }
    .card {
      margin: 10px;
      padding: 25px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      width: 40%;
      height: 120px;
      border-radius: 5px;
    }
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .card-container {
      padding: 2px 16px;
    }
    .ultimas-atualizacoes-card{
      overflow-y: auto;
      height: 40px;
    }
    .ultimas-atualizacoes-card::-webkit-scrollbar {
      width: 12px;
    }
    .ultimas-atualizacoes-card::-webkit-scrollbar-track {
      background: #A9A9A9;
      border-radius: 20px;
    }
    .ultimas-atualizacoes-card::-webkit-scrollbar-thumb {
      background-color: #000000;
      border-radius: 20px;
    }
    .span-turmas-anteriores{
      float: right;
    }
    </style>  
    <div class="card-section">
`;

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
        <div class="card">
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
