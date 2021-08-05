let menu;
if (ALL[0].querySelector("#baseLayout") == null) {
  if (MENU_USUARIO != null) {
    if (CONTEUDO.querySelector("#menu-dropdown") != null) {
      CONTEUDO.querySelector("#menu-dropdown").style.display = "none";
      menu = CONTEUDO.querySelector("#menu-dropdown > .wrapper > form");
      menu.querySelector("div > table > tbody > tr").style.display = "grid";
      menu.querySelector("div").style.color = "black";
      let menus = menu.querySelectorAll("td span img");
      for (let i = 0; i < menus.length; i++) {
        menus[i].remove();
      }
    }
    if (MENU_USUARIO.querySelector("li.modulos") != null)
      MENU_USUARIO.querySelector("li.modulos").style.display = "none";
    let conteudoNavbar = `
    <div class="navbar-wrapper">
        <input type="checkbox" id="btn" hidden>
        <label for="btn" class="menu-btn"><i class="fas fa-bars"></i><i class="fas fa-times"></i></label>
        <nav id="sidebar-navs">
            <ul class="list-items">
                <li>${menu != null ? menu.innerHTML : ""}</li>
                <li class="menu-li" >${
                  MENU_USUARIO != null ? MENU_USUARIO.innerHTML : ""
                }</li>
                ${
                  menu != null
                    ? `<li class="modal-li" id="myBtnModal">Acessar Area do Aluno</li>`
                    : ""
                }
            </ul>
        </nav>
    </div>
    <div id="myModalAluno" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        ${TURMAS_PORTAL != null ? PERFIL_DOCENTE.innerHTML : ""}
      </div>
    </div>  
    `;
    $(ALL[0]).append(conteudoNavbar);
    $(ALL[0]).append(CONTAINER);
    if (TURMAS_PORTAL != null) {
      PERFIL_DOCENTE.style.display = "none";
      let modal = document.getElementById("myModalAluno");
      let myBtn = document.getElementById("myBtnModal");
      let span = document.getElementsByClassName("close")[0];

      myBtn.onclick = function () {
        modal.style.display = "block";
      };
      span.onclick = function () {
        modal.style.display = "none";
      };
      $(CONTAINER).append(`
        <div id="aviso-navbar">
            <p>Clique fora do menu para fecha-lo!<p>
            <button id="fechar-aviso-navbar"><strong>X</strong></button>
        </div>`);
      
      let botaoNavbar = document.getElementById("btn");
      let sidebar = document.getElementsByClassName("navbar-wrapper")[0];
      botaoNavbar.addEventListener("change", (event) => {
        if (event.currentTarget.checked) {
          $("#aviso-navbar").css("visibility", "visible");
        }
        setTimeout(function () {
          $("#aviso-navbar").css("visibility", "hidden");
        }, 5000);
      });
      $("#fechar-aviso-navbar").click(function () {
        $("#aviso-navbar").css("visibility", "hidden");
      });
      window.onclick = function (e) {
        if (e.target == modal) {
          modal.style.display = "none";
        }
        if (e.target != sidebar && e.target != botaoNavbar) {
          if (botaoNavbar.checked == true) {
            botaoNavbar.checked = false;
          }
        }
      };
    }
    MENU_USUARIO.style.display = "none";
  }
}
