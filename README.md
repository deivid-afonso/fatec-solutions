# Fatec Solutions

Landing page institucional estática da Fatec Solutions. O projeto foi construído sem dependências, compilação ou serviços externos: basta abrir ou publicar os arquivos.

## O que está incluído

- Design responsivo com linguagem visual de tecnologia.
- Navegação mobile, contraste reforçado, ajuste de tamanho de texto e opção de reduzir movimento.
- Formulário que prepara uma mensagem no WhatsApp ou e-mail; o site não armazena dados.
- Favicon próprio e metadados básicos para compartilhamento.
- Publicação automática no GitHub Pages por GitHub Actions.

## Estrutura

```text
fatec-solutions/
├── .github/workflows/deploy-pages.yml  # deploy automático
├── .gitignore
├── favicon.svg
├── index.html                           # site completo
├── ORACLE-CLOUD.md
└── README.md
```

## Publicar no GitHub Pages — passo a passo

### 1. Criar o repositório

1. Entre em [github.com/new](https://github.com/new).
2. Defina o nome, por exemplo, `fatec-solutions`.
3. Escolha **Public** se quiser que o site seja acessível no plano gratuito.
4. Não marque a criação de README, `.gitignore` ou licença: eles já estão nesta pasta.
5. Clique em **Create repository**.

### 2. Enviar os arquivos

No computador, abra um terminal dentro desta pasta e execute os comandos abaixo. Troque `SEU-USUARIO` pelo seu nome de usuário do GitHub e use a URL mostrada na página do repositório caso seja diferente.

```bash
git init
git branch -M main
git add .
git commit -m "feat: publicar site Fatec Solutions"
git remote add origin https://github.com/SEU-USUARIO/fatec-solutions.git
git push -u origin main
```

> Alternativa sem terminal: no repositório vazio, use **Add file → Upload files** e arraste o conteúdo desta pasta, inclusive a pasta `.github`.

### 3. Ativar o GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment**, selecione **GitHub Actions** como fonte.
3. Abra a aba **Actions**. O fluxo **Deploy GitHub Pages** deve iniciar após o envio para `main`.
4. Ao terminar (ícone verde), volte a **Settings → Pages** para ver a URL pública.

O endereço normalmente será `https://SEU-USUARIO.github.io/fatec-solutions/`.

### 4. Publicar alterações futuras

Depois de editar arquivos, envie a atualização. Cada envio para a branch `main` gera uma nova publicação automaticamente.

```bash
git add .
git commit -m "chore: atualizar site"
git push
```

## Checklist antes de publicar

- Teste o `index.html` em navegador no computador e no celular.
- Confirme o e-mail e o número de WhatsApp em `index.html` antes de tornar o repositório público.
- Não envie arquivos `.env`, senhas, tokens ou chaves. Eles já são ignorados por padrão.
- Mantenha a publicação protegida: o workflow possui somente as permissões necessárias para publicar o Pages.

## Domínio próprio

Depois de registrar um domínio, configure-o em **Settings → Pages → Custom domain**. Siga os registros DNS indicados pela própria tela do GitHub. Quando o domínio estiver validado, habilite **Enforce HTTPS**. Não crie um arquivo `CNAME` antes de ter o domínio e os registros configurados.

## Personalizações rápidas

- **E-mail e WhatsApp:** procure por `deividsa@gmail.com` e `551193233534` em `index.html`.
- **Textos e equipe:** edite diretamente as seções do mesmo arquivo.
- **Cores:** as variáveis principais ficam no início do bloco `<style>`, em `:root`.

## Desenvolvimento local

Abra `index.html` em qualquer navegador moderno. Não há instalação, banco de dados ou servidor obrigatório.

## Outras opções de hospedagem

Para publicar na Oracle Cloud Infrastructure, veja [ORACLE-CLOUD.md](ORACLE-CLOUD.md).
