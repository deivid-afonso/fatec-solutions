/* ============================================================
   admin.js — TechTrace 360
   Painel do Administrador: 3 sub-abas (Dashboard, Rastreio,
   Gestão), todas lendo diretamente de appState.lotes — não
   há cópia de dados, então qualquer mudança feita no Operador
   ou na Qualidade aparece aqui assim que a aba é reaberta ou
   recarregada via renderAdminAll().
   ============================================================ */

/* ============================================================
   ADMINISTRADOR
   ============================================================ */
function setAdminTab(tab){
  ['dashboard','rastreio','gestao'].forEach(t=>{
    document.getElementById('admin-tab-'+t).classList.toggle('hidden', t!==tab);
  });
  document.querySelectorAll('.admin-tab[data-tab]').forEach(b=>{
    b.classList.toggle('active', b.dataset.tab===tab);
  });
  renderAdminAll();
}
function statusInfo(status){
  if(status==='liberado') return {cls:'ok', label:'✓ Liberado'};
  if(status==='bloqueado') return {cls:'bad', label:'✕ Bloqueado (RNC)'};
  return {cls:'warn', label:'⏳ Em inspeção'};
}
function renderAdminAll(){
  renderDashboard();
  renderRastreioPicker();
  renderRastreio();
  renderGestao();
}
function renderDashboard(){
  const lotes = appState.lotes;
  document.getElementById('kpi-total').textContent = lotes.length;
  document.getElementById('kpi-liberados').textContent = lotes.filter(l=>l.status==='liberado').length;
  document.getElementById('kpi-inspecao').textContent = lotes.filter(l=>l.status==='inspecao').length;
  document.getElementById('kpi-bloqueados').textContent = lotes.filter(l=>l.status==='bloqueado').length;

  const tbody = document.getElementById('admin-lotes-tbody');
  const emptyMsg = document.getElementById('admin-lotes-empty');
  tbody.innerHTML='';
  if(lotes.length===0){ emptyMsg.classList.remove('hidden'); return; }
  emptyMsg.classList.add('hidden');
  lotes.forEach(l=>{
    const s = statusInfo(l.status);
    const tr = document.createElement('tr');
    tr.innerHTML = '<td><strong>'+l.id+'</strong></td><td>'+l.peca+'</td><td>'+l.maquina+'</td><td>'+l.qtd+' un</td>'+
      '<td><span class="status-pill '+s.cls+'">'+s.label+'</span></td>';
    tbody.appendChild(tr);
  });
}
function renderRastreioPicker(){
  const picker = document.getElementById('rastreio-picker');
  const current = picker.value;
  picker.innerHTML='';
  appState.lotes.forEach(l=>{
    const opt=document.createElement('option');
    opt.value=l.id; opt.textContent=l.id+' · '+l.peca;
    picker.appendChild(opt);
  });
  if(appState.lotes.some(l=>l.id===current)) picker.value=current;
}
function renderRastreio(){
  const picker = document.getElementById('rastreio-picker');
  const empty = document.getElementById('rastreio-empty');
  const tl = document.getElementById('rastreio-timeline');
  if(appState.lotes.length===0){ empty.classList.remove('hidden'); tl.classList.add('hidden'); return; }
  empty.classList.add('hidden'); tl.classList.remove('hidden');
  const lote = findLote(picker.value) || appState.lotes[0];
  tl.innerHTML = lote.history.map(ev => '<div class="ev"><b>'+ev.label+'</b><span>'+ev.time+'</span></div>').join('');
}
function renderGestao(){
  const lotes = appState.lotes;
  const liberados = lotes.filter(l=>l.status==='liberado');
  const pecasLiberadas = liberados.reduce((sum,l)=>sum+l.qtd,0);
  const inspecionados = lotes.filter(l=>l.status!=='inspecao').length;
  const taxa = inspecionados>0 ? Math.round((liberados.length/inspecionados)*100)+'%' : '—';
  document.getElementById('gestao-pecas-liberadas').textContent = pecasLiberadas;
  document.getElementById('gestao-taxa').textContent = taxa;
  document.getElementById('gestao-rnc').textContent = lotes.filter(l=>l.status==='bloqueado').length;
}
