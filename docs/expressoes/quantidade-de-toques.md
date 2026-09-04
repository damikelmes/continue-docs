---
title: "Quantidade de toques"
description: "Quantidade de dedos tocando a tela agora."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="hand-left-outline" color="#FB923C" /></span>
  <span>Quantidade de toques</span>
</h1>

<p class="node-purpose">Quantidade de dedos tocando a tela agora.</p>

## O que retorna

Quantidade de dedos tocando a tela agora.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>touch.count</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Dois dedos</strong>
    <pre><code>touch.count</code></pre>
    <p>Compare com 2 para verificar dois toques simultâneos.</p>
  </section>
  <section class="expression-example">
    <strong>2. Quantidade inteira</strong>
    <pre><code>math.min(touch.count, 2)</code></pre>
    <p>Limita a resposta usada a no máximo dois dedos.</p>
  </section>
  <section class="expression-example">
    <strong>3. Nenhum toque</strong>
    <pre><code>touch.count</code></pre>
    <p>Compare com 0 para verificar que todos os dedos foram levantados.</p>
  </section>
</div>

## Regras

- Combine com uma condição de toque para decidir quando usar a leitura.

## Expressões relacionadas

- [Início do toque X](./inicio-do-toque-x) — `touch.start_x`
- [Início do toque Y](./inicio-do-toque-y) — `touch.start_y`
- [Deslocamento do toque X](./deslocamento-do-toque-x) — `touch.delta_x`
- [Deslocamento do toque Y](./deslocamento-do-toque-y) — `touch.delta_y`
- [Distância do deslize](./distancia-do-deslize) — `touch.distance`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
