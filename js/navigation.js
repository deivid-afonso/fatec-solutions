/* ============================================================
   navigation.js — TechTrace 360
   Controla qual "tela" (div de nível superior) está visível:
   landing page, login, Operador, Qualidade ou Administrador.
   Também guarda `returnTarget`, que registra se o usuário
   chegou ao Operador/Qualidade a partir do login direto ou
   a partir de um atalho dentro do Administrador — isso decide
   para onde o botão "Sair" volta.
   Depende de state.js (não usa diretamente, mas as funções de
   login chamam funções definidas em operador.js/qualidade.js/
   admin.js, então deve ser carregado depois de state.js e
   antes dos módulos de tela).
   ============================================================ */

/* ============================================================
   NAVEGAÇÃO
   ============================================================ */
const ALL_SCREENS = ['screen-landing','screen-login','screen-operador','screen-qualidade','screen-admin'];
function showScreen(id){
  ALL_SCREENS.forEach(s=> document.getElementById(s).classList.toggle('hidden', s!==id));
  window.scrollTo({top:0, behavior:'instant'});
}
let returnTarget = 'login';
function login(role){
  if(role==='operador') openOperador('login');
  if(role==='qualidade') openQualidade('login');
  if(role==='admin'){ showScreen('screen-admin'); setAdminTab('dashboard'); renderAdminAll(); }
}
function updateExitLabels(){
  const label = returnTarget==='admin' ? '← Voltar ao Painel Admin' : '← Sair';
  const opBtn = document.getElementById('op-exit-btn');
  const qualBtn = document.getElementById('qual-exit-btn');
  if(opBtn) opBtn.textContent = label;
  if(qualBtn) qualBtn.textContent = label;
}
function openOperador(from){ returnTarget=from; updateExitLabels(); showScreen('screen-operador'); resetWizard(); }
function openQualidade(from){ returnTarget=from; updateExitLabels(); showScreen('screen-qualidade'); renderQualidadePicker(); }
function exitScreen(){
  if(returnTarget==='admin'){ showScreen('screen-admin'); renderAdminAll(); }
  else { showScreen('screen-login'); }
}
