if (TURMAS_PORTAL != null) {
  const LINK = document.querySelector("#avaliacao-portal > a");
  let arrayAtividades = [];
  if (TABELA_ATIVIDADES != null) {
    let tabelaAtividades = TABELA_ATIVIDADES.children[1];
    let enviados = 0,
      nEnviados = 0,
      proximas = 0,
      antigos = 0;
    for (let i = 0; i < tabelaAtividades.children.length; i++) {
      let atividades = tabelaAtividades.children[i];
      let tipo;
      if (atividades.children[0].querySelector("img") != null) {
        if (
          atividades.children[0]
            .querySelector("img")
            .getAttribute("src")
            .includes("prova_semana")
        ) {
          tipo = "vermelho";
          nEnviados++;
        } else if (
          atividades.children[0]
            .querySelector("img")
            .getAttribute("src")
            .includes("prova_mes")
        ) {
          tipo = "";
          proximas++;
        } else {
          tipo = "verde";
          enviados++;
        }
      } else {
        tipo = null;
        antigos++;
      }
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
            <strong>Atividades Antigas</strong>
          `;
    if (antigos > 0) {
      for (let i = 0; i < arrayAtividades.length; i++) {
        if (arrayAtividades[i][0] == null) {
          conteudoAtividades += `
                <div class="task" onclick="">
                  <p class="datas-task">${arrayAtividades[i][1]} ${
            (arrayAtividades[i][1] != "" && arrayAtividades[i][2] == "") ||
            (arrayAtividades[i][1] == "" && arrayAtividades[i][2] != "")
              ? ""
              : "-"
          } ${arrayAtividades[i][2]}</p>
                  ${arrayAtividades[i][3].innerHTML}
                </div>
            `;
        }
      }
      conteudoAtividades += `</div>`;
    } else {
      conteudoAtividades += `<p>Não tem nenhuma atividade antiga!</p></div>`;
    }
    conteudoAtividades += `
          <div class="kanban-block" id="inprogress">
            <strong>Atividades na Semana</strong>
        `;
    if (nEnviados > 0) {
      for (let i = 0; i < arrayAtividades.length; i++) {
        if (
          arrayAtividades[i][0] != null &&
          arrayAtividades[i][0].includes("vermelho")
        ) {
          conteudoAtividades += `
                <div class="task" onclick="${
                  arrayAtividades[i][3].querySelector("a") != null
                    ? arrayAtividades[i][3]
                        .querySelector("a")
                        .getAttribute("onclick")
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
      conteudoAtividades += `</div>`;
    } else {
      conteudoAtividades += `<p>Nenhuma atividade na semana!</p></div>`;
    }
    conteudoAtividades += `
            <div class="kanban-block" id="prox">
              <strong>Próximas Atividades</strong>
          `;
    if (proximas > 0) {
      for (let i = 0; i < arrayAtividades.length; i++) {
        if (arrayAtividades[i][0] != null && arrayAtividades[i][0] == "") {
          conteudoAtividades += `
                <div class="task" onclick="${
                  arrayAtividades[i][3].querySelector("a") != null
                    ? arrayAtividades[i][3]
                        .querySelector("a")
                        .getAttribute("onclick")
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
      conteudoAtividades += `</div>`;
    } else {
      conteudoAtividades += `<p>Nenhuma ativiade agendada!</p></div>`;
    }
    conteudoAtividades += `
          <div class="kanban-block" id="done">
            <strong>Atividades Enviadas</strong>
        `;
    if (enviados > 0) {
      for (let i = 0; i < arrayAtividades.length; i++) {
        if (
          arrayAtividades[i][0] != null &&
          arrayAtividades[i][0].includes("verde")
        ) {
          conteudoAtividades += `
                <div class="task" onclick="${
                  arrayAtividades[i][3].querySelector("a") != null
                    ? arrayAtividades[i][3]
                        .querySelector("a")
                        .getAttribute("onclick")
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
      conteudoAtividades += `</div>`;
    } else {
      conteudoAtividades += `<p>Nenhuma ativiade enviada!</p></div>`;
    }

    conteudoAtividades += `</div></div>`;
    $("#avaliacao-portal").append(conteudoAtividades);
    $("#avaliacao-portal").append(LINK);
    TABELA_ATIVIDADES.style.display = "none";
  }
}
