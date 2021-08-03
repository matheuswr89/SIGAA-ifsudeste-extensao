//Diminui a fonte na pagina de uma disciplina
if (ALL[0].querySelector("#baseLayout") != null) {
  ALL[0].style.fontSize = "0.7em";
  let images = ALL[0].querySelectorAll("img");
  for (let i = 0; i < images.length; i++) {
    if (
      images[i].getAttribute("src").includes("/sigaa/img/view.gif") ||
      images[i]
        .getAttribute("src")
        .includes("/sigaa/ava/img/page_white_put.png")
    ) {
      let parent = images[i].parentNode;
      if (parent.getAttribute("class") != null) {
        if (parent.getAttribute("class").includes("infoAltRem")) {
          images[i].removeAttribute("src");
          images[i].setAttribute("class", "fas fa-download");
          images[i].setAttribute(
            "style",
            "font-size: 1rem;padding: 0 5px 0 0;"
          );
        }
      } else {
        parent.removeChild(images[i]);
        $(parent).append(
          `<i class="fas fa-download" style="font-size: 1rem;padding: 0 5px 0 0;"></i>`
        );
      }
    }
    if (images[i].getAttribute("src") != null) {
      if (
        images[i].getAttribute("src").includes("/sigaa/ava/img/zoom.png") ||
        images[i].getAttribute("src").includes("/sigaa/img/note.png")
      ) {
        let parent = images[i].parentNode;
        if (parent.getAttribute("class") != null) {
          if (parent.getAttribute("class").includes("infoAltRem")) {
            images[i].removeAttribute("src");
            images[i].setAttribute("class", "fas fa-eye");
            images[i].setAttribute(
              "style",
              "font-size: 1rem;padding: 0 5px 0 0;"
            );
          }
        } else {
          parent.removeChild(images[i]);
          $(parent).append(
            `<i class="fas fa-eye" style="font-size: 1rem;padding: 0 5px 0 0;"></i>`
          );
        }
      }
    }
    if (images[i].getAttribute("src") != null) {
      if (
        images[i]
          .getAttribute("src")
          .includes("/sigaa/img/portal_turma/enviar_tarefa.png")
      ) {
        let parent = images[i].parentNode;
        if (parent.getAttribute("class") != null) {
          if (parent.getAttribute("class").includes("infoAltRem")) {
            images[i].removeAttribute("src");
            images[i].setAttribute("class", "fas fa-upload");
            images[i].setAttribute(
              "style",
              "font-size: 1rem;padding: 0 5px 0 0;"
            );
          }
        } else {
          parent.removeChild(images[i]);
          $(parent).append(
            `<i class="fas fa-upload" style="font-size: 1rem;padding: 0 5px 0 0;"></i>`
          );
        }
      }
    }
  }
  let menuBarraEsquerda = ALL[0].querySelector(
    `#formMenu > #barraEsquerda > div[id*="formMenu:"]`
  );
  if (menuBarraEsquerda) {
    let turma = menuBarraEsquerda.children[4].querySelectorAll(
      ".itemMenuHeaderRelatorios"
    );
    for (let i = 0; i < turma.length; i++) {
      turma[i].style.backgroundImage =
      "url(https://img.icons8.com/color-glass/48/000000/statistics.png)";
      turma[i].style.backgroundSize = "15px 15px";
    }
  }
}
