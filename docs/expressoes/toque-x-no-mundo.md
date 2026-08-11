---
title: "Toque X no mundo"
description: "Retorna a posição X do último toque dentro do mundo do jogo."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="expression-touch-x" icon="hand-left-outline" color="#FB923C" :size="26" /></span>
  <span>Toque X no mundo</span>
</h1>

<p class="node-purpose">Retorna a posição X do último toque dentro do mundo do jogo.</p>

## O que retorna

A coordenada X convertida pela posição e pelo zoom da câmera.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>touch.x</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Mover até o toque</strong>
    <pre><code>touch.x</code></pre>
    <p>Use como destino X para levar um objeto ao ponto tocado no mundo.</p>
  </section>
  <section class="expression-example">
    <strong>2. Criar no toque</strong>
    <pre><code>touch.x</code></pre>
    <p>Use como X da ação Criar objeto para criar uma instância onde o dedo tocou.</p>
  </section>
  <section class="expression-example">
    <strong>3. Manter uma margem</strong>
    <pre><code>touch.x + 24</code></pre>
    <p>Posiciona algo 24 pixels à direita do ponto tocado.</p>
  </section>
</div>

## Regras

- Depois que o dedo é solto, a expressão mantém a última posição.
- Consulte `touch.is_down` quando precisar confirmar que o toque continua ativo.

## Expressões relacionadas

- [Toque Y no mundo](./toque-y-no-mundo) — `touch.y`
- [Toque X na tela](./toque-x-na-tela) — `touch.screen_x`
- [Toque Y na tela](./toque-y-na-tela) — `touch.screen_y`
- [Toque está pressionado](./toque-esta-pressionado) — `touch.is_down`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
