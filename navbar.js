if (TURMAS_PORTAL != null) {
  CONTEUDO.querySelector("#portal-docente > #menu-dropdown").style.display =
    "none";
  const menu = CONTEUDO.querySelector(
    "#portal-docente > #menu-dropdown > .wrapper > form"
  );
  menu.querySelector("div > table > tbody > tr").style.display = "grid";
  menu.querySelector("div").style.color = "black";
  let conteudoNavbar = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
<style>
#sidebar-navs div table tbody tr, #sidebar-navs div table tbody tr td{
  background:rgb(196,210,235) !important; 
}
#info-usuario{
  margin-left: 60px;
}
.navbar-wrapper{
  height: 100%;
  width: 300px;
  position: relative;
}
.navbar-wrapper .menu-btn{
  position: absolute;
  left: 10px;
  top: 21px;
  background: #4a4a4a;
  color: #fff;
  height: 45px;
  width: 45px;
  z-index: 1002;
  border: 1px solid #333;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
#btn:checked~.menu-btn {
  left: 200px;
}
.navbar-wrapper .menu-btn i {
  position: absolute;
  font-size: 23px;
  transition: all 0.3s ease;
}
.navbar-wrapper .menu-btn i.fa-times {
  opacity: 0;
}
#btn:checked~.menu-btn i.fa-times {
  opacity: 1;
  transform: rotate(-180deg);
}
#btn:checked~.menu-btn i.fa-bars {
  opacity: 0;
  transform: rotate(180deg);
}
#sidebar-navs {
  position: fixed;
  background: rgb(196,210,235);
  height: 100%;
  text-align: left;
  width: 200px;
  left: -200px;
  z-index: 1000;
  transition: all 0.3s ease;
}
#btn:checked~#sidebar-navs {
  left: 0;
}
#sidebar-navs .list-items {
  color: black;
  font-weight: bold;
  margin: 50px 0 0 -40px;
  width: 100%;
  height: 100%;
  font-size: 13px;
}
#sidebar-navs .list-items .menu-li{
  margin: 20px 0 0 -30px;
}
.list-items a{
  color: black;
}
#sidebar-navs .list-items .modal-li{
  margin: 20px 0 0 9px;
  cursor: pointer;
}
.modal {
  display: none; 
  position: fixed;
  z-index: 1;
  padding-top: 50px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}
.modal-content {
  font-size: 12px;
  overflow-y: scroll;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 350px;
  height: 550px;
  text-align: left;
}
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.simple-panel > h4{
  font-size: 14px !important;
}

</style>
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
