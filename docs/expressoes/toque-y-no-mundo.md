---
title: "Toque Y no mundo"
description: "Retorna a posição Y do último toque dentro do mundo do jogo."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="expression-touch-y" icon="hand-left-outline" color="#FB923C" :size="26" /></span>
  <span>Toque Y no mundo</span>
</h1>

<p class="node-purpose">Retorna a posição Y do último toque dentro do mundo do jogo.</p>

## O que retorna

A coordenada Y convertida pela posição e pelo zoom da câmera.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>touch.y</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Usar o toque como destino</strong>
    <pre><code>touch.y</code></pre>
    <p>Use como destino Y de uma ação para levar a posição vertical do objeto ao ponto tocado no mundo.</p>
  </section>
  <section class="expression-example">
    <strong>2. Criar na posição tocada</strong>
    <pre><code>touch.y</code></pre>
    <p>Use como Y da ação Criar objeto para definir a posição vertical da nova instância pelo toque.</p>
  </section>
  <section class="expression-example">
    <strong>3. Criar acima do dedo</strong>
    <pre><code>touch.y - 24</code></pre>
    <p>Posiciona algo 24 pixels acima do ponto tocado.</p>
  </section>
</div>

## Regras

- Depois que o dedo é solto, a expressão mantém a última posição.
- Consulte `touch.is_down` quando precisar confirmar que o toque continua ativo.

## Expressões relacionadas

- [Toque X no mundo](./toque-x-no-mundo) — `touch.x`
- [Toque X na tela](./toque-x-na-tela) — `touch.screen_x`
- [Toque Y na tela](./toque-y-na-tela) — `touch.screen_y`
- [Toque está pressionado](./toque-esta-pressionado) — `touch.is_down`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
