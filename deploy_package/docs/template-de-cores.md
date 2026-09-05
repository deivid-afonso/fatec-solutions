# Template de Cores — TechTrace 360 / Fatec Solutions

Mapeamento oficial das 8 cores HEX do design system (`GUIA_APRESENTACAO_CANVA_FIGMA.md` e `FLUXOGRAMAS_DO_PROCESSO.md`) para cada elemento de interface do protótipo. Use esta tabela como fonte única de verdade ao criar novas telas ou revisar as existentes — qualquer cor fora desta lista deve ser tratada como desvio do design system.

## Paleta base

| Cor | HEX | Nome no guia |
|---|---|---|
| 🟦 | `#0B2545` | Azul Petróleo |
| 🔵 | `#134074` | Azul Royal |
| 🩵 | `#00B4D8` | Ciano |
| 🟢 | `#2EC4B6` | Verde Esmeralda |
| 🔴 | `#E63946` | Vermelho |
| 🟡 | `#FFB703` | Amarelo |
| ⬜ | `#F8F9FA` | Cinza Claro |
| ⬛ | `#FFFFFF` | Branco |

> No CSS implementado (`css/base.css`), os tons de sucesso/alerta/erro usam variações levemente mais escuras (`#0E9F6E`, `#B45309`, `#DC2626`) otimizadas para contraste de texto sobre fundo claro, mantendo a mesma família de cor do guia original. Ambas as versões são apresentadas abaixo.

## Mapeamento por elemento

| Elemento de interface | Cor | Variável CSS |
|---|---|---|
| Cabeçalho / topbar da área logada | Azul Petróleo `#0B2545` | `--text` (cor de texto de alto contraste sobre `--bg`) |
| Botão primário / ação principal | Azul Royal `#134074` | `--primary` |
| Texto sobre botão primário | Branco `#FFFFFF` | `--primary-ink` |
| Links ativos, ícones de destaque, badges neutras | Ciano `#00B4D8` | `--accent` |
| Status "Liberado / Conforme / Homologado" | Verde `#0E9F6E` (base: Verde Esmeralda `#2EC4B6`) | `--success` / `--success-bg` / `--success-ink` |
| Status "Bloqueado / Não conforme / RNC aberta" | Vermelho `#DC2626` (base: Vermelho `#E63946`) | `--danger` / `--danger-bg` / `--danger-ink` |
| Status "Em inspeção / Em breve / atenção" | Amarelo `#B45309` (base: Amarelo `#FFB703`) | `--warning` / `--warning-bg` / `--warning-ink` |
| Fundo geral da página | Cinza Claro `#F8F9FA` | `--bg` |
| Fundo de cards, superfícies elevadas | Branco `#FFFFFF` | `--surface` |
| Fundo de campos, cartões secundários | Cinza Claro (variação) `#EEF2F6` | `--surface-2` |
| Bordas, divisores | Cinza-azulado `#D7DEE8` | `--border` |
| Texto secundário / legendas | Azul acinzentado `#4B5C78` | `--muted` |

## Tipografia

| Uso | Fonte | Peso |
|---|---|---|
| Títulos (h1, h2, h3, marca) | Montserrat | 700–800 |
| Corpo de texto, botões, rótulos | Inter | 400–700 |

## Temas alternativos (acessibilidade)

O sistema tem três variações de tema, todas usando a mesma estrutura de variáveis CSS acima — apenas os valores mudam:

- **Tema claro** (padrão) — valores desta tabela.
- **Tema escuro** — inverte fundo/texto mantendo a mesma função semântica de cada cor (ex.: `--primary` vira um azul mais claro `#4D8FD6` para manter contraste sobre fundo escuro).
- **Alto contraste** — reduz a paleta a preto, branco e amarelo (`#FFEB00`), elimina tons intermediários de cinza e aumenta a espessura das bordas para 3px.

Ver a implementação completa em `css/base.css` (seletores `.theme-light`, `.theme-dark`, `.contrast-high`).

## Regras de uso

1. Nunca usar uma cor fora desta tabela diretamente em CSS — sempre referenciar a variável (`var(--primary)`, `var(--success)` etc.), nunca o valor HEX solto, para que os temas escuro e de alto contraste continuem funcionando automaticamente.
2. Cores de status (verde/amarelo/vermelho) são reservadas exclusivamente para indicar estado de um lote ou item de checklist — não usar para decoração.
3. Qualquer nova tela deve reutilizar `css/base.css` e `css/components.css` antes de criar novos estilos, para herdar esta paleta automaticamente.

---
Fatec Solutions · TechTrace 360 · Documento de referência de design — atualizar sempre que o design system mudar.
