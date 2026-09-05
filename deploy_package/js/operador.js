/* ============================================================
   operador.js — TechTrace 360
   Lógica da tela "Operador CNC": wizard de apontamento em
   4 passos (máquina → peça → quantidade → confirmação),
   pensado para cliques grandes, sem digitação. Ao confirmar,
   chama registrarLote() (definida em state.js) para criar o
   lote e o disponibilizar para o Administrador e a Qualidade.
   ============================================================ */

/* ============================================================
   WIZARD OPERADOR CNC
   ============================================================ */
let opData = { maquina:null, peca:null, qtd:500 };
function selectCard(el, field){
  el.parentElement.querySelectorAll('.choice-card').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected');
  opData[field] = el.dataset.value;
}
function setProgress(step){
  document.querySelectorAll('#op-progress .dot').forEach(d=>{
    const n = Number(d.dataset.step);
    d.classList.toggle('done', n<step); d.classList.toggle('active', n===step);
  });
}
function opNext(current){
  if(current===1 && !opData.maquina){ alert('Selecione uma máquina para continuar.'); return; }
  if(current===2 && !opData.peca){ alert('Selecione uma peça para continuar.'); return; }
  document.getElementById('op-step-'+current).classList.add('hidden');
  const next=current+1;
  document.getElementById('op-step-'+next).classList.remove('hidden');
  setProgress(next);
  if(next===4){
    document.getElementById('resumo-maquina').textContent='Máquina: '+opData.maquina;
    document.getElementById('resumo-peca').textContent='Peça: '+opData.peca;
    document.getElementById('resumo-qtd').textContent='Quantidade: '+opData.qtd+' un';
  }
}
function opBack(current){
  document.getElementById('op-step-'+current).classList.add('hidden');
  const prev=current-1;
  document.getElementById('op-step-'+prev).classList.remove('hidden');
  setProgress(prev);
}
function qtyChange(delta){ opData.qtd=Math.max(0,opData.qtd+delta); document.getElementById('qty-display').textContent=opData.qtd; }
function gerarEtiqueta(){
  document.getElementById('op-step-4').classList.add('hidden');
  document.getElementById('op-resultado').classList.remove('hidden');
  const lote = registrarLote(opData.maquina, opData.peca, opData.qtd);
  document.getElementById('result-lote-id').textContent = lote.id;
  document.getElementById('result-lote-desc').textContent = lote.peca+' · '+lote.qtd+' un · '+lote.maquina;
}
function resetWizard(){
  opData={maquina:null,peca:null,qtd:500};
  document.querySelectorAll('#screen-operador .choice-card').forEach(c=>c.classList.remove('selected'));
  document.getElementById('qty-display').textContent=500;
  document.getElementById('op-resultado').classList.add('hidden');
  ['1','2','3','4'].forEach(n=>document.getElementById('op-step-'+n).classList.toggle('hidden', n!=='1'));
  setProgress(1);
}
function novoApontamento(){ resetWizard(); }
