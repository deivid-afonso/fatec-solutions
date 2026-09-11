<h1 align="center"> 
	🏭 Fatec Solutions · TechTrace 360
</h1>

<p align="center">
  <strong>Solução tecnológica para centralização e digitalização do controle de qualidade na indústria automotiva.</strong>
</p>

---

<p align="center">
 <a href="#-descrição-do-entregável">Descrição do Entregável</a> •
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autor">Autor</a> •
 <a href="#-licença">Licença</a>
</p>

---

## 📄 Descrição do entregável

O **Fatec Solutions** é uma solução tecnológica desenvolvida durante o **Desafio de Ideias**, uma iniciativa realizada em parceria entre o **SENAI Diadema** e a **FATEC Diadema**.

O projeto tem como objetivo desenvolver uma solução para a **indústria automotiva**, buscando tornar os processos de controle de qualidade mais organizados, rastreáveis, digitais e eficientes. O entregável central é o **TechTrace 360**, um protótipo funcional de Sistema de Rastreabilidade Industrial (MES) para o caso de uso **TechParts Industrial**.

Entre os principais pontos trabalhados estão:

* Centralização das informações de controle de qualidade;
* Redução e eliminação do uso de documentos em papel;
* Cadastro e rastreabilidade de lotes via QR Code;
* Apontamento de produção em interface touch-first, pensada para tablet no chão de fábrica;
* Homologação de lotes com checklist de tolerâncias;
* Painel administrativo com dashboard, rastreio e visão de gestão;
* Acessibilidade (W3C): tema claro/escuro, alto contraste e escala de fonte.

---

## 💻 Sobre o projeto

O **Fatec Solutions** surgiu a partir do desafio de identificar problemas presentes no ambiente industrial e propor uma solução tecnológica capaz de gerar melhorias reais para os processos de uma empresa do setor automotivo.

Durante o desenvolvimento do projeto, foram identificadas necessidades relacionadas ao **controle de qualidade, organização de informações, rastreabilidade e utilização excessiva de documentos físicos**.

A solução busca proporcionar:

* 📊 Maior organização das informações;
* 🔎 Rastreabilidade dos processos e lotes;
* 📋 Centralização dos registros de qualidade;
* ♻️ Redução do uso de papel;
* ⏱️ Agilidade no acesso às informações;
* 🔐 Acesso por perfil (Administrador, Operador CNC, Qualidade, Logística, Gestão);
* 🚗 Aplicação voltada para o contexto da indústria automotiva.

---

## 🖥️ Sistema TechTrace 360

O `index.html` reúne, em um único protótipo navegável, a landing page institucional, o login por perfil e a área logada. É um **protótipo visual de demonstração**: os dados de lote são simulados em memória do navegador, sem backend real.

**Perfis com acesso ativo nesta demonstração:**

| Perfil | O que faz |
|---|---|
| 🛠️ Administrador | Acesso completo — Dashboard, Rastreio, Gestão e atalhos para Operador/Qualidade |
| ⚙️ Operador CNC | Apontamento de produção em 4 passos, sem digitação, com geração de etiqueta QR Code |
| 🔍 Qualidade | Checklist de homologação por toque — Homologar ou Abrir RNC |

*Logística e Gestor/Diretoria já estão mapeados no sistema, mas ainda sem tela própria nesta fase — ver [`docs/template-de-cores.md`](docs/template-de-cores.md) e o [Manual do Usuário](manual/Manual-do-Usuario-TechTrace360.pdf) para o roadmap completo.*

<p align="center">
  <img src="docs/screenshots/login.png" width="420" alt="Tela de login" />
  <img src="docs/screenshots/operador-cnc.png" width="420" alt="Operador CNC" />
</p>
<p align="center">
  <img src="docs/screenshots/qualidade.png" width="420" alt="Qualidade" />
  <img src="docs/screenshots/administrador.png" width="420" alt="Administrador" />
</p>

Um lote criado pelo Operador aparece automaticamente no Dashboard e no Rastreio do Administrador; a homologação (ou RNC) feita pela Qualidade atualiza esse mesmo status em tempo real — tudo em um único estado compartilhado (`js/state.js`), simulando a integração entre os módulos do sistema real.

📘 **Documentação completa:** [Manual do Usuário (PDF)](manual/Manual-do-Usuario-TechTrace360.pdf) · [Mapa do Site](sitemap.html) · [Template de Cores](docs/template-de-cores.md)

---

## 🗂️ Estrutura do projeto

```
fatec-solutions/
├── index.html                  # Landing page + login + área logada (Operador/Qualidade/Admin)
├── sitemap.html                 # Mapa do site — visão por página e por perfil
├── favicon.svg
├── .nojekyll                    # Serve o site como HTML puro no GitHub Pages (sem build Jekyll)
├── css/
│   ├── base.css                  # Tokens de cor/tipografia, reset, layout genérico
│   ├── components.css            # Barra de acessibilidade, wizard, checklist, painéis admin
│   ├── pages.css                 # Estilos específicos da landing e do login
│   └── sitemap.css               # Estilos exclusivos do mapa do site
├── js/
│   ├── state.js                  # Estado compartilhado (fonte única dos lotes)
│   ├── accessibility.js          # Tema claro/escuro, alto contraste, A+/A-
│   ├── navigation.js             # Troca de tela entre landing/login/operador/qualidade/admin
│   ├── operador.js               # Wizard de apontamento CNC
│   ├── qualidade.js              # Checklist de homologação
│   ├── admin.js                  # Dashboard, Rastreio, Gestão
│   ├── sitemap.js                # Alternância de visualização do mapa do site
│   └── main.js                   # Autoteste de fumaça (roda no console ao carregar)
├── manual/
│   └── Manual-do-Usuario-TechTrace360.pdf
├── docs/
│   ├── template-de-cores.md      # Mapeamento oficial de cores HEX por elemento de interface
│   └── screenshots/              # Capturas usadas neste README e no manual
├── identidade-visual-fatec-solutions.pdf
└── miniatura fatecsolutions *.png
```

Cada arquivo CSS/JS tem um cabeçalho de comentário explicando sua função e dependências — ver os próprios arquivos para detalhes.

---

## 🚀 Como executar o projeto

O projeto é **100% estático** (HTML, CSS e JavaScript puro) — não possui dependências ou processos de compilação.

### 1. Clone o repositório

```bash
git clone https://github.com/deivid-afonso/fatec-solutions.git
```

### 2. Acesse a pasta

```bash
cd fatec-solutions
```

### 3. Execute o projeto

Basta abrir o arquivo `index.html` em um navegador moderno — ou usar a extensão **Live Server** no VS Code para recarregar automaticamente durante o desenvolvimento.

> ⚠️ O `index.html` referencia `css/*.css` e `js/*.js` por caminho relativo — mantenha a estrutura de pastas intacta ao abrir localmente.

### Pré-requisitos

* [Git](https://git-scm.com)
* Um navegador moderno (Chrome, Firefox, Edge, Safari)
* Não é necessário instalar Node.js, rodar `npm install` ou configurar servidor algum.

---

## ♿ Acessibilidade

Todas as telas têm uma barra de acessibilidade fixa no topo, seguindo diretrizes W3C:

* 🌙 / ☀️ Alternância entre tema claro (padrão) e tema escuro
* ◐ Modo de alto contraste (preto, branco e amarelo, bordas reforçadas)
* A− / A+ Ajuste do tamanho de toda a tipografia do sistema

O corpo de texto já nasce em um tamanho maior que o padrão da web, pensando em quem tem baixa visão.

---

## 🌐 Publicação (deploy)

O site é estático, então o **GitHub Pages** publica o repositório sem nenhum passo de build. Duas formas de configurar (em *Settings → Pages* do repositório):

1. **Deploy from a branch** *(mais simples)* — selecione a branch `main` e a pasta `/ (root)`. O arquivo `.nojekyll` incluído neste repositório evita que o GitHub tente processar os arquivos com Jekyll.
2. **GitHub Actions** — use a action oficial `actions/deploy-pages`, que publica exatamente os arquivos do repositório sem transformação.

Depois de publicado, o site fica disponível em:

```
https://deivid-afonso.github.io/fatec-solutions/
```

O workflow `.github/workflows/jekyll-docker.yml` já existente no repositório é apenas um **build de verificação (CI)** — ele não publica o site. Ele pode continuar rodando sem conflito com a publicação via Pages.

---

## 🛠 Tecnologias

### Front-End

* **HTML5**
* **CSS3** (variáveis nativas para temas claro/escuro/alto contraste)
* **JavaScript** (vanilla, sem frameworks ou bundlers)

### Versionamento e publicação

* **Git**
* **GitHub / GitHub Pages**

### Design e Prototipação

* **Figma**
* **VS Code**

### Documentação

* **reportlab** (Python) — geração do Manual do Usuário em PDF

---

## 🦸 Autores

💼 Clique no nome dos integrantes para ser direcionado ao nosso LinkedIn.

<a href="https://www.linkedin.com/in/anny-d-719892274/" target="_blank">

<strong>Anny Michelle Gomes Diniz Alves</strong>

</a>

<a href="https://www.linkedin.com/in/deivid-da-silva-afonso-dev/" target="_blank">

<strong>Deivid Afonso</strong>

</a>

<a href="https://www.linkedin.com/in/gustavo-rss/" target="_blank">

<strong>Gustavo Robson</strong>

</a>

<a href="https://br.linkedin.com/in/thaisferreirademoura2004" target="_blank">

<strong>Thais Ferreira de Moura</strong>

</a>

---


<p align="center">
  Desenvolvido pela equipe <strong>Fatec Solutions</strong> durante o
  <strong>Desafio de Ideias SENAI + FATEC Diadema</strong> 🚀
</p>

<br />


---

## 📝 Licença

Este projeto está sob a licença **MIT**.

Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

---

<p align="center">
  Desenvolvido durante o <strong>Desafio de Ideias SENAI + FATEC Diadema</strong> 🚀
</p>

