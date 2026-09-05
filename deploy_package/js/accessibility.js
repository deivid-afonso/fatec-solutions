/* ============================================================
   accessibility.js — TechTrace 360
   Controles de acessibilidade (W3C): alternância de tema
   claro/escuro, alto contraste e escala de fonte (A+ / A-).
   Aplica-se globalmente a todas as telas via a barra fixa
   no topo da página (ver #a11y-bar no HTML).
   Este arquivo deve ser carregado antes dos demais, pois
   declara `root`, `isDark`, `highContrast` e `scale`, usados
   apenas internamente aqui (não são reaproveitados por outros
   módulos, mas o `document.documentElement` é referenciado
   de forma consistente em toda a aplicação).
   ============================================================ */

/* ============================================================
   ACESSIBILIDADE
   ============================================================ */
const root = document.documentElement;
let isDark = false, highContrast = false, scale = 1;
function applyTheme(){
  root.classList.remove('theme-light','theme-dark');
  root.classList.add(isDark ? 'theme-dark' : 'theme-light');
  document.getElementById('btn-theme').setAttribute('aria-pressed', isDark);
  document.getElementById('theme-label').textContent = isDark ? 'Tema Claro' : 'Tema Escuro';
  document.getElementById('btn-theme').firstChild.textContent = isDark ? '☀️ ' : '🌙 ';
}
document.getElementById('btn-theme').addEventListener('click', ()=>{ isDark=!isDark; applyTheme(); });
document.getElementById('btn-contrast').addEventListener('click', ()=>{
  highContrast=!highContrast;
  root.classList.toggle('contrast-high', highContrast);
  document.getElementById('btn-contrast').setAttribute('aria-pressed', highContrast);
});
document.getElementById('btn-font-up').addEventListener('click', ()=>{ scale=Math.min(1.6,scale+0.1); root.style.setProperty('--scale',scale); });
document.getElementById('btn-font-down').addEventListener('click', ()=>{ scale=Math.max(0.9,scale-0.1); root.style.setProperty('--scale',scale); });
applyTheme();
