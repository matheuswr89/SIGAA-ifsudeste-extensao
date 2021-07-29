if (TURMAS_PORTAL != null) {
  let conteudo = `
<style>
#agenda-docente{
  margin-top:30px;
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
  overflow-y: scroll;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  height: 500px;
}
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
#myBtn{
  float: right;
  margin-top: -30px !important;
}
</style>
  <button id="myBtn">Acessar Area do Aluno</button>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      ${PERFIL_DOCENTE.innerHTML}
    </div>
  </div>
`;
  $("#turmas-portal").append(conteudo);
  PERFIL_DOCENTE.style.display = "none";
  PERFIL_DOCENTE.remove();
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
}
