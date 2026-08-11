---
title: "Centro X da câmera"
description: "Retorna a posição X do centro lógico da câmera."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Câmera</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="swap-horizontal-outline" color="#60A5FA" :size="26" /></span>
  <span>Centro X da câmera</span>
</h1>

<p class="node-purpose">Retorna a posição X do centro lógico da câmera.</p>

## O que retorna

Retorna a posição X do centro lógico da câmera.

## Como escrever

<div class="expression-token" style="--expression-color: #60A5FA"><code>camera.x</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #60A5FA">
  <section class="expression-example">
    <strong>1. Ler centro x da câmera</strong>
    <pre><code>camera.x</code></pre>
    <p>Usa o valor atual de centro x da câmera no momento em que o nó é executado.</p>
  </section>
  <section class="expression-example">
    <strong>2. Centralizar um objeto</strong>
    <pre><code>camera.x</code></pre>
    <p>Use como posição X para colocar o centro do objeto no centro horizontal da câmera.</p>
  </section>
  <section class="expression-example">
    <strong>3. Criar à direita do centro</strong>
    <pre><code>camera.x + 120</code></pre>
    <p>Cria ou move algo 120 pixels à direita do centro da câmera.</p>
  </section>
</div>

## Regras

- A expressão usa a câmera atual da cena.
- O valor considera o zoom quando isso altera a área visível.
- O tremor visual não altera esse centro lógico.

## Expressões relacionadas

- [Centro Y da câmera](./camera-centro-y) — `camera.y`
- [Borda esquerda da câmera](./camera-borda-esquerda) — `camera.left`
- [Borda direita da câmera](./camera-borda-direita) — `camera.right`
- [Borda superior da câmera](./camera-borda-superior) — `camera.top`
- [Borda inferior da câmera](./camera-borda-inferior) — `camera.bottom`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
