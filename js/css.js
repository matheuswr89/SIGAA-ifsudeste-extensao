const css = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
<style>
*{
  box-sizing: border-box;
}
#main-docente{
  width: 100%;
  justify-content: center;
  align-items: center
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
  overflow-y: auto;
  height: 40px;
}
.ultimas-atualizacoes-card::-webkit-scrollbar {
  width: 5px;
}
.ultimas-atualizacoes-card::-webkit-scrollbar-track {
  background: #FFF;
  border-radius: 20px;
}
.ultimas-atualizacoes-card::-webkit-scrollbar-thumb {
  background-color: #A9A9A9;
  border-radius: 20px;
}
.span-turmas-anteriores{
  float: right;
}
.card-comunidade {
  background: rgb(196,210,235);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 8px;
  margin: 10px;
  width: 60%;
  cursor: pointer;
}
.card-comunidade p{
  width: 100%;
}
.container-card-comunidade .link{
  font-size: 13px;
  color: #003395;
}
.conteudoComunidade h4, .conteudoForum h4{
  text-transform:uppercase;
}
.container-card-comunidade span{
  font-weight: bold;
}
.card-comunidade:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.container-card-comunidade {
  padding: 2px 16px;
}
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
.kaban-container {
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.kanban-board {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;  
  justify-content: space-between;
  font-family: sans-serif;
}
.kanban-block {
  padding: 0.6rem;
  width: 30.5%;
  min-width: 14rem;
  min-height: 4.5rem;
  border-radius: 0.3rem;
}
#todo, #inprogress, #done{
height: 300px;
overflow: auto;
text-size: 14px !important;
color: black !important;
}
#todo::-webkit-scrollbar, #inprogress::-webkit-scrollbar, #done::-webkit-scrollbar {
width: 5px;
}
#todo::-webkit-scrollbar-track, #inprogress::-webkit-scrollbar-track, #done::-webkit-scrollbar-track {
background: #FFF;
border-radius: 20px;
}
#todo::-webkit-scrollbar-thumb, #inprogress::-webkit-scrollbar-thumb, #done::-webkit-scrollbar-thumb {
background-color: #A9A9A9;
border-radius: 20px;
}
#todo .task{
  background-color: #87cefa;
}
#inprogress .task{
  background-color: #eccc68;
}
#done .task{
  background-color: #1dd1a1;
}
.task {
  cursor: pointer;
  background-color: white;
  margin: 0.2rem 0rem 0.3rem 0rem;
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
</style>
`;
$(ALL).append(css);