/* ============================================================
   state.js — TechTrace 360
   Estado compartilhado em memória (nenhum backend real — é um
   protótipo visual). `appState.lotes` é a fonte única de
   verdade consultada por operador.js, qualidade.js e admin.js,
   o que permite simular a integração entre os módulos: um lote
   criado no Operador aparece automaticamente no Dashboard,
   Rastreio e Gestão do Administrador, e uma homologação feita
   na Qualidade atualiza esse mesmo status em tempo real.
   Carregar antes de navigation.js, operador.js, qualidade.js
   e admin.js.
   ============================================================ */

/* ============================================================
   ESTADO COMPARTILHADO (simula integração entre módulos)
   ============================================================ */
const appState = { lotes: [], nextNum: 91 };
function nowStr(){ const d=new Date(); return d.toLocaleDateString('pt-BR')+' · '+d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}); }

function registrarLote(maquina, peca, qtd){
  const id = 'LOTE-2026-X'+(appState.nextNum++);
  const lote = { id, maquina, peca, qtd, status:'inspecao',
    history:[{label:'Apontamento gerado na CNC ('+maquina+')', time:nowStr()}] };
  appState.lotes.unshift(lote);
  return lote;
}
function findLote(id){ return appState.lotes.find(l=>l.id===id); }
