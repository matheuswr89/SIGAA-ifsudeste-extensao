if (TURMAS_PORTAL != null) {
  const LINK = document.querySelector("#avaliacao-portal > a");
  let arrayAtividades = [];
  let tabelaAtividades = TABELA_ATIVIDADES.children[1];
  for (let i = 0; i < tabelaAtividades.children.length; i++) {
    let atividades = tabelaAtividades.children[i];
    let tipo;
    if (atividades.children[0].querySelector("img") != null) {
      if (
        atividades.children[0]
          .querySelector("img")
          .getAttribute("src")
          .includes("prova_semana")
      )
        tipo = "vermelho";
      else if (
        atividades.children[0]
          .querySelector("img")
          .getAttribute("src")
          .includes("prova_mes")
      )
        tipo = "";
      else tipo = "verde";
    } else tipo = null;
    let data = atividades.children[1].textContent.trim().replaceAll("\n", "");
    data = data.substring(0, data.indexOf(" "));
    let hora = atividades.children[1].textContent.trim().replaceAll("\n", "");
    hora = hora.substring(data.length + 1).replaceAll("\t", "");
    atividade = atividades.children[2];
    arrayAtividades.push([tipo, data, hora, atividade]);
  }
  let conteudoAtividades = `
    <div class="kaban-container">
        <div class="kanban-board">
  `;

  conteudoAtividades += `
  <div class="kanban-block" id="todo">
    <strong>Demais Atividades</strong>
  `;
  //arrayAtividades.push([tipo, data, hora, atividade, link]);
  for (let i = 0; i < arrayAtividades.length; i++) {
    if (arrayAtividades[i][0] == null || arrayAtividades[i][0] == "") {
      conteudoAtividades += `
          <div class="task" onclick="${
            arrayAtividades[i][3].querySelector("a") != null
              ? arrayAtividades[i][3].querySelector("a").getAttribute("onclick")
              : null
          }">
            <p class="datas-task">${arrayAtividades[i][1]} - ${
        arrayAtividades[i][2]
      }</p>
            ${arrayAtividades[i][3].innerHTML}
          </div>
      `;
    }
  }
  conteudoAtividades += `
  </div>
  <div class="kanban-block" id="inprogress">
    <strong>Não enviados</strong>
  `;
  for (let i = 0; i < arrayAtividades.length; i++) {
    if (
      arrayAtividades[i][0] != null &&
      arrayAtividades[i][0].includes("vermelho")
    ) {
      conteudoAtividades += `
          <div class="task" onclick="${
            arrayAtividades[i][3].querySelector("a") != null
              ? arrayAtividades[i][3].querySelector("a").getAttribute("onclick")
              : null
          }">
            <p class="datas-task">${arrayAtividades[i][1]} - ${
        arrayAtividades[i][2]
      }</p>
            ${arrayAtividades[i][3].innerHTML}
          </div>
      `;
    }
  }
  conteudoAtividades += `
  </div>
  <div class="kanban-block" id="done">
    <strong>Enviados</strong>
  `;
  for (let i = 0; i < arrayAtividades.length; i++) {
    if (
      arrayAtividades[i][0] != null &&
      arrayAtividades[i][0].includes("verde")
    ) {
      conteudoAtividades += `
          <div class="task" onclick="${
            arrayAtividades[i][3].querySelector("a") != null
              ? arrayAtividades[i][3].querySelector("a").getAttribute("onclick")
              : null
          }">
            <p class="datas-task">${arrayAtividades[i][1]} - ${
        arrayAtividades[i][2]
      }</p>
            ${arrayAtividades[i][3].innerHTML}
          </div>
      `;
    }
  }
  conteudoAtividades += `</div></div>`;
  $("#avaliacao-portal").append(conteudoAtividades);
  $("#avaliacao-portal").append(LINK);
  TABELA_ATIVIDADES.style.display = "none";
}
