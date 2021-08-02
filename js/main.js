let image = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"/></g></svg>`;
//Faz a tela de login e a tela principal ocupar a tela toda
ALL[0].style.fontSize = "100%";
ALL[0].style.background = "#FFF";
if (CONTAINER != null) {
  CONTAINER.style.width = "100%";
  if (TURMAS_PORTAL == null) {
    CONTAINER.style.height = "100vh";
    CONTEUDO.style.marginTop = "30px";
    RODAPE.style.position = "absolute";
    RODAPE.style.width = "100%";
  } else {
    CONTAINER.style.height = "100%";
    INFO_USUARIO.style.float = "none !important";
    NOTICIAS.remove();
  }
  CONTAINER.style.fontSize = "70%";
}
//Diminui a fonte na pagina de uma disciplina
if (ALL[0].querySelector("#baseLayout") != null) {
  ALL[0].style.fontSize = "0.7em";
  let icon = `<i class="fas fa-download" style="float:left;font-size: 1rem;padding: 0 5px 0 0;"></i>`;
  let images = ALL[0].querySelectorAll("img");
  for (let i = 0; i < images.length; i++) {
    if (
      images[i].getAttribute("src").includes("/sigaa/img/view.gif") ||
      images[i].getAttribute("src").includes("/sigaa/ava/img/zoom.png")
    ) {
      let parent = images[i].parentNode;
      parent.removeChild(images[i]);
      $(parent).append(icon);
    }
  }
}
