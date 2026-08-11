---
title: "Reproduzir animação de propriedades"
description: "Inicia ou continua uma animação de propriedades."
---

<div class="node-page-kicker" style="--node-page-color: #2DD4BF">
  <span class="node-page-icon"><NodeIcon type="action-play-property-animation" icon="play-circle-outline" color="#2DD4BF" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Aparência</span>
  </span>
</div>

# Reproduzir animação de propriedades

<p class="node-purpose">Inicia ou continua uma animação de propriedades.</p>

## Para que serve

Ativa uma animação por keyframes que altera posição, tamanho, rotação, escala, transparência ou cor.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | O objeto que receberá a ação. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Animação** | Nome da animação de propriedades que será reproduzida. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #2DD4BF">
  <ol>
    <li>Crie a animação “Flutuar” com keyframes de posição Y.</li>
    <li>Use este nó ao iniciar a cena.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O objeto começa a animação Flutuar ou continua do ponto em que foi pausado.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- A animação precisa existir no comportamento Animação de propriedades.
- Se estiver pausada, Reproduzir continua do ponto atual.
- O tipo de repetição vem da animação: uma vez, repetir ou ida e volta.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Trocar sprite](./trocar-sprite) — Troca a imagem exibida pelo objeto.
- [Trocar animação](./trocar-animacao) — Reproduz uma animação de sprites pelo nome.
- [Recomeçar animação de propriedades](./recomecar-animacao-de-propriedades) — Reinicia uma animação de propriedades no primeiro quadro.
- [Pausar animação de propriedades](./pausar-animacao-de-propriedades) — Pausa a animação sem perder o progresso.

<a class="node-back-link" href="./">← Ver todos os nós</a>
