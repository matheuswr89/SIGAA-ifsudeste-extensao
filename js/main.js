//Faz a tela de login e a tela principal ocupar a tela toda
ALL[0].style.fontSize = "100%";
ALL[0].style.background = "#FFF";

if(RELATORIO){
  RELATORIO.style.fontSize = "70%"; 
}

if(RELATORIO2){
  RELATORIO2.style.fontSize = "70%"; 
}

if (CONTAINER != null) {
  CONTAINER.style.width = "100%";
  if (CONTAINER.scrollHeight <= 1100) {
    CONTEUDO.style.marginTop = "30px";
    CONTAINER.style.minHeight = "100vh";
    RODAPE.style.position = "absolute";
    RODAPE.style.width = "100%";
  }
  if (TURMAS_PORTAL != null) {
    CONTAINER.style.height = "100%";
    NOTICIAS.remove();
  }
  CONTAINER.style.fontSize = "70%";
}
