//Faz a tela de login e a tela principal ocupar a tela toda
ALL[0].style.fontSize = "100%";
ALL[0].style.background = "#FFF";
if (CONTAINER != null) {
  if (LOGIN != null) {
    CONTAINER.style.width = "100vw";
    CONTAINER.style.height = "100vh";
    CONTEUDO.style.marginTop = "30px";
    RODAPE.style.position = "absolute";
    RODAPE.style.width = "100%";
  } else {
    CONTAINER.style.width = "98.4vw";
    CONTAINER.style.height = "100%";
    INFO_USUARIO.style.float = "none";
  }
  CONTAINER.style.fontSize = "70%";
  NOTICIAS.remove();
}

//Diminui a fonte na pagina de uma disciplina
if (ALL[0].querySelector("#barraEsquerda") != null) {
  ALL[0].style.fontSize = "0.7em";
}
