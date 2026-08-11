---
title: "Largura visível da câmera"
description: "Retorna a largura lógica visível da câmera em pixels."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Câmera</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="videocam-outline" color="#60A5FA" :size="26" /></span>
  <span>Largura visível da câmera</span>
</h1>

<p class="node-purpose">Retorna a largura lógica visível da câmera em pixels.</p>

## O que retorna

Retorna a largura lógica visível da câmera em pixels.

## Como escrever

<div class="expression-token" style="--expression-color: #60A5FA"><code>camera.width</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #60A5FA">
  <section class="expression-example">
    <strong>1. Ler largura visível da câmera</strong>
    <pre><code>camera.width</code></pre>
    <p>Usa o valor atual de largura visível da câmera no momento em que o nó é executado.</p>
  </section>
  <section class="expression-example">
    <strong>2. Encontrar metade da tela</strong>
    <pre><code>camera.width / 2</code></pre>
    <p>Calcula metade da largura visível atual.</p>
  </section>
  <section class="expression-example">
    <strong>3. Espalhar dez itens</strong>
    <pre><code>camera.width / 10</code></pre>
    <p>Calcula um espaçamento horizontal que divide a largura visível em dez partes.</p>
  </section>
</div>

## Regras

- A expressão usa a câmera atual da cena.
- O valor considera o zoom quando isso altera a área visível.

## Expressões relacionadas

- [Centro X da câmera](./camera-centro-x) — `camera.x`
- [Centro Y da câmera](./camera-centro-y) — `camera.y`
- [Borda esquerda da câmera](./camera-borda-esquerda) — `camera.left`
- [Borda direita da câmera](./camera-borda-direita) — `camera.right`
- [Borda superior da câmera](./camera-borda-superior) — `camera.top`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
