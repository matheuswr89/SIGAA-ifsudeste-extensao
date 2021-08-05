let iframeContent,
  indice = 0;
if (ALL[0].querySelector("#baseLayout") != null) {
  let content = ALL[0].querySelector("#scroll-wrapper > form > span");
  if (content != null) {
    for (let i = 0; i < content.children.length; i++) {
      let span = content.children[i].querySelectorAll("img");
      for (let i = 0; i < span.length; i++) {
        if (span[i].getAttribute("src").includes("/sigaa/img/portal_turma/video.png")) {
          let iframe = span[i].parentNode.querySelector("iframe");
          if (iframe != null) {
            $(iframe.parentNode.parentNode.parentNode).append(
              `<li class="modal-li-iframe" id="${
                "myBtn" + indice
              }" data-modal="${"myModal" + indice}"><b>Abrir video</b></li>`
            );
            iframeContent = `
            <div id="${"myModal" + indice}" class="modal modal-iframe">
              <div class="modal-content-iframe">
                <span class="close">&times;</span>
                ${iframe.parentNode.parentNode.innerHTML}
              </div>
            </div>
          `;
            iframe.style.display = "none";
            $(ALL[0]).append(iframeContent);
            indice++;
          }
        }
      }
    }

    let botoes = document.querySelectorAll("li.modal-li-iframe");
    for (let x = 0; x < botoes.length; x++) {
      botoes[x].onclick = function () {
        document.getElementById(this.dataset.modal).style.display = "block";
      };
    }
    let fechar = document.querySelectorAll("span.close");
    for (let x = 0; x < fechar.length; x++) {
      fechar[x].onclick = function () {
        this.parentNode.parentNode.style.display = "none";
        modalIframe = this.parentNode.parentNode;
      };
    }
    let modals = document.querySelectorAll(".modal");
    for (let x = 0; x < fechar.length; x++) {
      modals[x].addEventListener("click", function (e) {
        if (e.target == this) modals[x].style.display = "none";
      });
    }
  }
}
