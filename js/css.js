const css = `
<link rel="stylesheet" href="../css/flickity.min.css">
<style>
#main-docente{
  width: 100%;
  justify-content: center;
  align-items: center;
}
#main-docente .simple-panel{
  margin: 1em 0 0 0 !important;
}
#portal-docente h4{
  margin: 0 !important;
}
.mais, .div-comunidades-foruns .conteudoComunidade .links-forum,.div-comunidades-foruns .conteudoForum .links-forum{
  font-size: 12px !important;
}
.conteudoComunidade h4{
  text-transform: uppercase;
}
.flickity-page-dots{
  display: none;
}
.carousel-cell{
  width: 300px !important;
}
.div-comunidades-foruns{ 
  margin-top: 10px;
  padding: 15px;
  height: 330px;
  background: rgb(239,243,250);
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.conteudoForum, .conteudoComunidade{
  overflow: auto;
  height: 300px;
}
.links-forum{
  display: grid;
  text-align: center;
}
.conteudoComunidade, .conteudoForum{
  width: 50% !important;
}
.card-section{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 8px;
  margin: 10px;
  width: 40%;
  cursor: pointer;
  background: rgb(196,210,235);
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.card-container {
  padding: 2px 16px;
}
.card .card-container h4{
  margin: 0 !important;
}
.card .card-container p i{
  float: none !important;
}
.card .card-container p{
  width: 100% !important;
}
.ultimas-atualizacoes-card{
  overflow: auto;
  height: 40px;
}
conteudoForum::-webkit-scrollbar, .conteudoComunidade::-webkit-scrollbar, .ultimas-atualizacoes-card::-webkit-scrollbar {
  width: 5px;
}
.conteudoForum::-webkit-scrollbar-track, .conteudoComunidade::-webkit-scrollbar-track,.ultimas-atualizacoes-card::-webkit-scrollbar-track {
  background: #FFF;
  border-radius: 20px;
}
.conteudoForum::-webkit-scrollbar-thumb, .conteudoComunidade::-webkit-scrollbar-thumb,.ultimas-atualizacoes-card::-webkit-scrollbar-thumb {
  background-color: #A9A9A9;
  border-radius: 20px;
}
.card-container .link{
  color: #003395;
  font-size: 12px;
}
/* 
===============================================================
                Navbar
*/
#sidebar-navs div table tbody tr, #sidebar-navs div table tbody tr td{
  background:rgb(196,210,235) !important;
}
#sidebar-navs > ul > li > div > table > tbody > tr > td{
  border-bottom: 2px solid #A9A9A9; 
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
  margin: 0 0 0 -33px;
  width: 200px;
}
#sidebar-navs .list-items .menu-li ul li{
  padding: 2px 0 2px 0 !important;
  border-bottom: 2px solid #A9A9A9;
}
.list-items a{
  color: black;
}
#sidebar-navs .list-items .modal-li{
  margin: 0 0 0 8px;
  padding: 2px 0 2px 0 !important;
  cursor: pointer;
}
/* 
===============================================================
          Modal Usuario e iframe
*/
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
.modal-iframe{
  z-index: 2000 !important;
 }
.modal-content {
  font-size: 12px;
  overflow: auto;
  background-color: rgb(196,210,235);
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 350px;
  height: 550px;
  text-align: left;
}
li.modal-li-iframe{
  list-style: none;
  font-size: 14px;
  cursor: pointer;
  color: #003395;
}
li.modal-li-iframe:hover{
  color: #333;
}
.modal-content-iframe{
  overflow: auto;
  background-color: #fff;
  margin: auto;
  padding: 5px;
  border: 1px solid #888;
  width: 520px;
  height: 320px;
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
/* 
===============================================================
                Kanban Atividades
*/
.kaban-container {
  display: flex;
  flex-direction: column;
}
.kanban-board {
  display: flex;
  justify-content: space-between;
  font-family: sans-serif;
}
.kanban-block {
  padding: 0.6rem;
  width: 20.5%;
  border-radius: 0.3rem;
}
.kanban-block strong, .kanban-block p{
  font-size: 12px;
}
#todo, #inprogress, #done, #prox{
  height: 300px;
  overflow: auto;
  text-size: 14px !important;
  color: black !important;
}
#todo::-webkit-scrollbar, #inprogress::-webkit-scrollbar, #done::-webkit-scrollbar,#prox::-webkit-scrollbar {
  width: 5px;
}
#todo::-webkit-scrollbar-track, #inprogress::-webkit-scrollbar-track, #done::-webkit-scrollbar-track,#prox::-webkit-scrollbar-track {
  background: #FFF;
  border-radius: 20px;
}
#todo::-webkit-scrollbar-thumb, #inprogress::-webkit-scrollbar-thumb, #done::-webkit-scrollbar-thumb ,#prox::-webkit-scrollbar-thumb {
  background-color: #A9A9A9;
  border-radius: 20px;
}
#todo .task{
  background-color: #C0C0C0;
}
#inprogress .task{
  background-color: #eccc68;
}
#done .task{
  background-color: #1dd1a1;
}
#prox .task{
  background-color: #87cefa;
}
.task {
  cursor: pointer;
  background-color: white;
  margin: 0.5rem;
  border: 0.1rem solid black;
  border-radius: 0.2rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 0.5rem 0.2rem 0.5rem 0.2rem;
}
.task .datas-task{
font-size: 11px;
font-weight: bold;
}
.task small{
font-size: 11px;
color: black;
}
.task:hover {
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
#task-button {
  margin: 0.2rem 0rem 0.1rem 0rem;
  background-color: white;
  border-radius: 0.2rem;
  width: 100%;
  border: 0.25rem solid black;
  padding: 0.5rem 2.7rem;
  border-radius: 0.3rem;
  font-size: 1rem;
}
/* 
===============================================================
            Aviso tempo de sessão
*/
#aviso-tempo-sessao{
  width: 20vw;
  height: 10vh;
  background-color: rgba(255, 110, 110, 0.8);
  border-radius: 4px;
  border: 2px solid rgba(255, 60, 60, 0.3);
  box-shadow: 0 0 1px red;
  position: fixed;
  z-index: 100;
  top: 4vh;
  right: 1vw;
  text-align: center;
  font-size: 120%;
  display: flex;
  align-items: center;
  visibility: hidden;
}
#aviso-navbar{
  width: 20vw;
  height: 10vh;
  background-color: rgb(0,250,154);
  border-radius: 4px;
  border: 2px solid #008000;
  box-shadow: 0 0 1px red;
  position: fixed;
  z-index: 100;
  top: 4vh;
  right: 1vw;
  text-align: center;
  font-size: 120%;
  display: flex;
  align-items: center;
  visibility: hidden;
}
#fechar-aviso-tempo-sessao{
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  border: 2px solid rgba(255, 60, 60, 0.3);
  color: rgba(255, 60, 60, 1);
  cursor: pointer;
  margin: 1vw;
  padding: 0.5vh 1vh;
}
#fechar-aviso-navbar{
  background-color: rgb(0,250,154);
  border-radius: 4px;
  border: 2px solid #008000;
  cursor: pointer;
  margin: 1vw;
  padding: 0.5vh 1vh;
}
#fechar-aviso-tempo-sessao:hover, #fechar-aviso-navbar:hover{
  opacity: 0.7;
}
/* 
===============================================================
Modal Confirmação
*/
#modal-sair-confirmacao, #modal-envio-confirmacao {
  width: 100vw;
  height: 100vw;
  background-color: rgba(200, 200, 200, 0.6);
  display: none;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
}
#modal-sair-confirmacao > div , #modal-envio-confirmacao > div {
  opacity: 1;
  background-color: rgb(196, 210, 235);
  color: black;
  width: 40vw;
  height: 20vh;
  margin-left: 30vw;
  margin-top: 40vh;
  border-radius: 4px;
  border: 1px solid rgb(64, 78, 130);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
#msg-sair-confirmacao, #msg-envio-confirmacao{
  font-size: 120%;
  display: flex;
  align-items: center;
  height: 12vh;
  justify-content: center;
  border-bottom: 1px solid rgb(64, 78, 130);
}
#sair-buttons, #enviar-buttons{
  display: flex;
  justify-content: center;
  opacity: 0.7;
}
#sair-buttons button, #enviar-buttons button{
  width: 25%;
  height: 5vh;
  margin: 0 0.5vw;
  cursor: pointer;
  border-radius: 5px;
  opacity: 1;
}
#sair-buttons > button:hover, #enviar-buttons > button:hover{
  opacity: 0.7;
}
#sair-buttons #confirmar-sair-button {
  background-color: rgba(255, 110, 110, 0.7);
  border: 1px solid rgba(255, 60, 60, 1);
  box-shadow: 0 0 1px red;
}
#enviar-buttons #confirmar-envio-button {
  background-color: rgba(85, 230, 160, 0.4);
  border: 1px solid rgb(64, 130, 78);
  box-shadow: 0 0 1px blue;
}
#sair-buttons #cancelar-sair-button, #enviar-buttons #cancelar-envio-button{
  background-color: rgba(85, 160, 230, 0.4);
  border: 1px solid rgb(64, 78, 130);
  box-shadow: 0 0 1px blue;
}       
</style>
`;
$(ALL).append(css);
