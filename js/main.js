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
}
