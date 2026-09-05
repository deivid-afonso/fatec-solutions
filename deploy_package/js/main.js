/* ============================================================
   main.js — TechTrace 360
   Autoteste de fumaça: roda automaticamente quando a página
   carrega e registra no console do navegador se as telas, a
   barra de acessibilidade e as funções de navegação essenciais
   existem. Não substitui teste manual, mas pega rapidamente
   qualquer arquivo que não tenha sido carregado corretamente.
   Deve ser o ÚLTIMO script carregado (depois de todos os
   outros, para que appState e as funções já existam).
   ============================================================ */

/* ============================================================
   AUTOTESTE DE FUMAÇA (roda no console ao carregar)
   ============================================================ */
(function smokeTest(){
  const results = [];
  const check = (name, cond) => results.push({name, ok: !!cond});
  check('Todas as telas existem no DOM', ALL_SCREENS.every(id=>document.getElementById(id)));
  check('Barra de acessibilidade presente', !!document.querySelector('.a11y-bar'));
  check('Landing page é a tela inicial', !document.getElementById('screen-landing').classList.contains('hidden'));
  check('Funções de navegação definidas', typeof showScreen==='function' && typeof login==='function');
  check('Estado de lotes inicia vazio', appState.lotes.length===0);
  const failed = results.filter(r=>!r.ok);
  console.log('%c[TechTrace 360 · Autoteste]', 'font-weight:bold;color:#134074', results);
  if(failed.length) console.warn('Falhas no autoteste:', failed);
})();
