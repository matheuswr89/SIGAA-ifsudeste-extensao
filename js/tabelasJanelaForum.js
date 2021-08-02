if (TURMAS_PORTAL == null && TABELAS_JANELA_FORUM != null) {
  let tabelas = TABELAS_JANELA_FORUM.querySelectorAll(
    "fieldset > table.listing"
  );
  if (tabelas.length >= 2) {
    let tabela1 = tabelas[0],
      tabela2 = tabelas[1];
    if (tabela1 != null) {
      let arrayConteudoTabela1 = [],
        arrayTitulosTabela1 = [];
      let thead = tabela1.querySelector("thead > tr");
      for (let i = 0; i < thead.children.length; i++) {
        arrayTitulosTabela1.push(thead.children[i].textContent.trim());
      }
      let tbody = tabela1.querySelectorAll("tbody > tr");
      for (let i = 0; i < tbody.length; i++) {
        let array = [];
        for (let j = 0; j < arrayTitulosTabela1.length; j++) {
          if (tbody[i].children[j].querySelector("a") != null) {
            array.push(tbody[i].children[j].querySelector("a"));
          } else array.push(tbody[i].children[j].textContent);
        }
        arrayConteudoTabela1.push(array);
      }
      let conteudoTabela1 = `<div class="card-section">`;
      for (let i = 0; i < arrayConteudoTabela1.length; i++) {
        conteudoTabela1 += `
      <div class="card">
      `;
        for (let j = 0; j < arrayTitulosTabela1.length; j++) {
          let a;
          if (arrayConteudoTabela1[i][2].innerText != undefined) {
            a =
              arrayConteudoTabela1[i][2].getAttribute("onclick") != null
                ? arrayConteudoTabela1[i][2]
                : null;
          }
          conteudoTabela1 += `
            <div class="card-container" onclick="${
              a != null ? a.getAttribute("onclick") : null
            }">
              <p><b>${
                arrayTitulosTabela1[j] != "" ? arrayTitulosTabela1[j] + ":" : ""
              }</b>
              ${
                arrayConteudoTabela1[i][j].innerText != undefined
                  ? arrayConteudoTabela1[i][j].innerText.trim() == ""
                    ? "Nada aqui!"
                    : arrayConteudoTabela1[i][j].innerHTML
                  : arrayConteudoTabela1[i][j]
              }
              </p>  
            </div>
          `;
        }
        conteudoTabela1 += `
      </div>
      `;
      }
      conteudoTabela1 += `</div>`;
      tabela1.style.display = "none";
      $(TABELAS_JANELA_FORUM[1]).append(conteudoTabela1);
    }

    if (tabela2 != null) {
      let arrayConteudoTabela2 = [],
        arrayTitulosTabela2 = [];
      let thead = tabela2.querySelector("thead > tr");
      for (let i = 0; i < thead.children.length; i++) {
        arrayTitulosTabela2.push(thead.children[i].textContent.trim());
      }
      let tbody = tabela2.querySelectorAll("tbody > tr");
      for (let i = 0; i < tbody.length; i++) {
        let array = [];
        for (let j = 0; j < arrayTitulosTabela2.length; j++) {
          if (tbody[i].children[j].querySelector("a") != null) {
            array.push(tbody[i].children[j].querySelector("a"));
          } else array.push(tbody[i].children[j].textContent);
        }
        arrayConteudoTabela2.push(array);
      }
      let conteudoTabela2 = `<div class="card-section">`;
      for (let i = 0; i < arrayConteudoTabela2.length; i++) {
        conteudoTabela2 += `
      <div class="card">
      `;
        for (let j = 0; j < arrayTitulosTabela2.length; j++) {
          let a;
          if (arrayConteudoTabela2[i][2].innerText != undefined) {
            a =
              arrayConteudoTabela2[i][2].getAttribute("onclick") != null
                ? arrayConteudoTabela2[i][2]
                : null;
          }
          conteudoTabela2 += `
            <div class="card-container" onclick="${
              a != null ? a.getAttribute("onclick") : null
            }">
              <p><b>${
                arrayTitulosTabela2[j] != "" ? arrayTitulosTabela2[j] + ":" : ""
              }</b>
              ${
                arrayConteudoTabela2[i][j].innerText != undefined
                  ? arrayConteudoTabela2[i][j].innerText.trim() == ""
                    ? "Nada aqui!"
                    : arrayConteudoTabela2[i][j].innerHTML
                  : arrayConteudoTabela2[i][j]
              }
              </p>  
            </div>
          `;
        }
        conteudoTabela2 += `
      </div>
      `;
      }
      conteudoTabela2 += `</div>`;
      tabela2.style.display = "none";
      $(TABELAS_JANELA_FORUM[2]).append(conteudoTabela2);
    }
  }
}
