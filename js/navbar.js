if (TURMAS_PORTAL != null) {
  CONTEUDO.querySelector("#portal-docente > #menu-dropdown").style.display =
    "none";
  const menu = CONTEUDO.querySelector(
    "#portal-docente > #menu-dropdown > .wrapper > form"
  );
  menu.querySelector("div > table > tbody > tr").style.display = "grid";
  menu.querySelector("div").style.color = "black";
  let menus = menu.querySelectorAll("td span img");
  for (let i = 0; i < menus.length; i++) {
    menus[i].remove();
  }

  let conteudoNavbar = `
    <div class="navbar-wrapper">
        <input type="checkbox" id="btn" hidden>
        <label for="btn" class="menu-btn"><i class="fas fa-bars"></i><i class="fas fa-times"></i></label>
        <nav id="sidebar-navs">
            <ul class="list-items">
                <li>${menu.innerHTML}</li>
                <li class="menu-li" >${MENU_USUARIO.innerHTML}</li>
                <li class="modal-li" id="myBtn">Acessar Area do Aluno</li>
            </ul>
        </nav>
    </div>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        ${PERFIL_DOCENTE.innerHTML}
      </div>
    </div>  
`;
  $("body").append(conteudoNavbar);
  $("body").append(CONTAINER);
  PERFIL_DOCENTE.style.display = "none";
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  MENU_USUARIO.style.display = "none";
}
