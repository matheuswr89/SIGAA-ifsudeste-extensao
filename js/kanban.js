if (TURMAS_PORTAL != null) {
  const LINK = document.querySelector("#avaliacao-portal > a");
  let arrayAtividades = [];
  let tabelaAtividades = TABELA_ATIVIDADES.children[1];
  for (let i = 0; i < tabelaAtividades.children.length; i++) {
    let atividades = tabelaAtividades.children[i];
    let tipo;
    if (atividades.children[0].querySelector("img") != null) {
      tipo = atividades.children[0]
        .querySelector("img")
        .getAttribute("src")
        .includes("prova_semana")
        ? "vermelho"
        : "verde";
    } else tipo = null;
    let data = atividades.children[1].textContent.trim().replaceAll("\n", "");
    data = data.substring(0, data.indexOf(" "));
    let hora = atividades.children[1].textContent.trim().replaceAll("\n", "");
    hora = hora.substring(data.length + 1).replaceAll("\t", "");
    atividade = atividades.children[2];
    arrayAtividades.push([tipo, data, hora, atividade]);
  }
  let conteudoAtividades = `
  <style>
  .kaban-container {
      width: 70%;
      min-width: 50%;
      margin: auto;
      display: flex;
      flex-direction: column;
  }
  .kanban-board {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-family: sans-serif;
  }
  .kanban-block {
      padding: 0.6rem;
      width: 30.5%;
      min-width: 14rem;
      min-height: 4.5rem;
      border-radius: 0.3rem;
  }
  #todo, #inprogress, #done{
    height: 300px;
    overflow: auto;
    text-size: 14px !important;
    color: black !important;
  }
  #todo::-webkit-scrollbar, #inprogress::-webkit-scrollbar, #done::-webkit-scrollbar {
    width: 5px;
  }
  #todo::-webkit-scrollbar-track, #inprogress::-webkit-scrollbar-track, #done::-webkit-scrollbar-track {
    background: #FFF;
    border-radius: 20px;
  }
  #todo::-webkit-scrollbar-thumb, #inprogress::-webkit-scrollbar-thumb, #done::-webkit-scrollbar-thumb {
    background-color: #A9A9A9;
    border-radius: 20px;
  }
  #todo .task{
      background-color: #87cefa;
  }
  #inprogress .task{
      background-color: #eccc68;
  }
  #done .task{
      background-color: #1dd1a1;
  }
  .task {
      cursor: pointer;
      background-color: white;
      margin: 0.2rem 0rem 0.3rem 0rem;
      border: 0.1rem solid black;
      border-radius: 0.2rem;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      padding: 0.5rem 0.2rem 0.5rem 0.2rem;
  }
  .task .datas-task{
    font-size: 11px;
    font-weight: bold;
  }
  .task small{
    font-size: 11px;
    color: black;
  }
  .task:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  #task-button {
      margin: 0.2rem 0rem 0.1rem 0rem;
      background-color: white;
      border-radius: 0.2rem;
      width: 100%;
      border: 0.25rem solid black;
      padding: 0.5rem 2.7rem;
      border-radius: 0.3rem;
      font-size: 1rem;
  }
  </style>
  <div class="kaban-container">
        <div class="kanban-board">
  `;

  conteudoAtividades += `
  <div class="kanban-block" id="todo">
    <strong>Demais Atividades</strong>
  `;
  //arrayAtividades.push([tipo, data, hora, atividade, link]);
  for (let i = 0; i < arrayAtividades.length; i++) {
    if (arrayAtividades[i][0] == null) {
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
