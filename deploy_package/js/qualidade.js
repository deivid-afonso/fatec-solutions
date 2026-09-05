/* ============================================================
   qualidade.js — TechTrace 360
   Lógica da tela "Qualidade": lista os lotes pendentes de
   inspeção (status 'inspecao' em appState.lotes), checklist
   de conformidade por toque (sem digitação) e ações de
   Homologar (libera o lote) ou Abrir RNC (bloqueia o lote).
   Ambas as ações alteram appState diretamente, refletindo
   depois no Administrador.
   ============================================================ */

/* ============================================================
   QUALIDADE
   ============================================================ */
let qualCurrentLoteId = null;
function renderQualidadePicker(){
  const picker = document.getElementById('qual-lote-picker');
  const pendentes = appState.lotes.filter(l=>l.status==='inspecao');
  picker.innerHTML = '';
  const emptyHint = document.getElementById('qual-empty-hint');
  const footerBtns = document.querySelectorAll('#screen-qualidade .qual-footer button');
  if(pendentes.length===0){
    picker.innerHTML = '<option>Nenhum lote pendente</option>';
    qualCurrentLoteId = null;
    emptyHint.classList.remove('hidden');
    footerBtns.forEach(b=>b.disabled=true);
    return;
  }
  emptyHint.classList.add('hidden');
  footerBtns.forEach(b=>b.disabled=false);
  pendentes.forEach(l=>{
    const opt = document.createElement('option');
    opt.value=l.id; opt.textContent = l.id+' · '+l.peca+' ('+l.qtd+' un)';
    picker.appendChild(opt);
  });
  qualCurrentLoteId = pendentes[0].id;
  picker.value = qualCurrentLoteId;
  resetChecks();
}
function onLotePickerChange(){
  qualCurrentLoteId = document.getElementById('qual-lote-picker').value;
  resetChecks();
}
function resetChecks(){
  document.querySelectorAll('#screen-qualidade .check-toggle').forEach(row=>{
    row.querySelectorAll('.tgl').forEach((b,i)=> b.classList.toggle('active', i===0));
  });
}
function setCheck(el, key){
  el.parentElement.querySelectorAll('.tgl').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
}
function allConforme(){
  let ok=true;
  document.querySelectorAll('#screen-qualidade .check-toggle').forEach(row=>{
    const active = row.querySelector('.tgl.active');
    if(!active || !active.classList.contains('ok')) ok=false;
  });
  return ok;
}
function homologarLote(){
  if(!qualCurrentLoteId){ alert('Nenhum lote selecionado.'); return; }
  const lote = findLote(qualCurrentLoteId);
  if(!allConforme()){ alert('Existem itens "Não conforme" — homologação bloqueada. Abra uma RNC.'); return; }
  lote.status='liberado';
  lote.history.push({label:'Homologado pela Qualidade (Mariana Albuquerque)', time:nowStr()});
  alert('✓ Lote '+lote.id+' homologado e liberado para expedição.');
  renderQualidadePicker();
}
function reprovarLote(){
  if(!qualCurrentLoteId){ alert('Nenhum lote selecionado.'); return; }
  const lote = findLote(qualCurrentLoteId);
  lote.status='bloqueado';
  lote.history.push({label:'RNC aberta pela Qualidade — lote em quarentena', time:nowStr()});
  alert('⚠ RNC aberta para '+lote.id+'. Lote bloqueado.');
  renderQualidadePicker();
}
