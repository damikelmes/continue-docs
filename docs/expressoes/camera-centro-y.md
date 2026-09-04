---
title: "Centro Y da câmera"
description: "Retorna a posição Y do centro lógico da câmera."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Câmera</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="swap-vertical-outline" color="#60A5FA" /></span>
  <span>Centro Y da câmera</span>
</h1>

<p class="node-purpose">Retorna a posição Y do centro lógico da câmera.</p>

## O que retorna

Retorna a posição Y do centro lógico da câmera.

## Como escrever

<div class="expression-token" style="--expression-color: #60A5FA"><code>camera.y</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #60A5FA">
  <section class="expression-example">
    <strong>1. Ler centro y da câmera</strong>
    <pre><code>camera.y</code></pre>
    <p>Usa o valor atual de centro y da câmera no momento em que o nó é executado.</p>
  </section>
  <section class="expression-example">
    <strong>2. Centralizar um objeto</strong>
    <pre><code>camera.y</code></pre>
    <p>Use como posição Y para colocar o centro do objeto no centro vertical da câmera.</p>
  </section>
  <section class="expression-example">
    <strong>3. Criar acima do centro</strong>
    <pre><code>camera.y - 80</code></pre>
    <p>Cria ou move algo 80 pixels acima do centro da câmera.</p>
  </section>
</div>

## Regras

- A expressão usa a câmera atual da cena.
- O valor considera o zoom quando isso altera a área visível.
- O tremor visual não altera esse centro lógico.

## Expressões relacionadas

- [Rotação atual da câmera](./rotacao-da-camera) — `camera.rotation`
- [Centro X da câmera](./camera-centro-x) — `camera.x`
- [Borda esquerda da câmera](./camera-borda-esquerda) — `camera.left`
- [Borda direita da câmera](./camera-borda-direita) — `camera.right`
- [Borda superior da câmera](./camera-borda-superior) — `camera.top`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
