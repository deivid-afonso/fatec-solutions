/* ============================================================
   sitemap.js — TechTrace 360
   Alterna entre as duas visualizações do mapa do site:
   "por página" (hierarquia de telas) e "por perfil" (o que
   cada perfil de acesso consegue ver). Não depende de state.js
   nem dos demais módulos do app — é uma página independente.
   ============================================================ */
function setSitemapView(view){
  document.getElementById('sm-view-paginas').classList.toggle('hidden', view !== 'paginas');
  document.getElementById('sm-view-perfis').classList.toggle('hidden', view !== 'perfis');
  document.querySelectorAll('.sm-toggle button').forEach(b=>{
    b.classList.toggle('active', b.dataset.view === view);
  });
}
