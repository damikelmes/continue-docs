---
title: "Início do toque Y"
description: "Posição vertical do mundo onde o toque começou."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="hand-left-outline" color="#FB923C" :size="26" /></span>
  <span>Início do toque Y</span>
</h1>

<p class="node-purpose">Posição vertical do mundo onde o toque começou.</p>

## O que retorna

Posição vertical do mundo onde o toque começou.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>touch.start_y</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Origem do gesto</strong>
    <pre><code>touch.start_y</code></pre>
    <p>Use para posicionar um marcador no Y inicial.</p>
  </section>
  <section class="expression-example">
    <strong>2. Margem acima</strong>
    <pre><code>touch.start_y - 20</code></pre>
    <p>Calcula um ponto 20 pixels acima da origem.</p>
  </section>
  <section class="expression-example">
    <strong>3. Meio do gesto</strong>
    <pre><code>(touch.start_y + touch.y) / 2</code></pre>
    <p>Calcula o meio vertical entre a origem e a posição atual.</p>
  </section>
</div>

## Regras

- Combine com uma condição de toque para decidir quando usar a leitura.

## Expressões relacionadas

- [Início do toque X](./inicio-do-toque-x) — `touch.start_x`
- [Deslocamento do toque X](./deslocamento-do-toque-x) — `touch.delta_x`
- [Deslocamento do toque Y](./deslocamento-do-toque-y) — `touch.delta_y`
- [Distância do deslize](./distancia-do-deslize) — `touch.distance`
- [Ângulo do deslize](./angulo-do-deslize) — `touch.angle`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
