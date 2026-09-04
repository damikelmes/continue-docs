---
title: "Altura visível da câmera"
description: "Retorna a altura lógica visível da câmera em pixels."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Câmera</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="videocam-outline" color="#60A5FA" :size="26" /></span>
  <span>Altura visível da câmera</span>
</h1>

<p class="node-purpose">Retorna a altura lógica visível da câmera em pixels.</p>

## O que retorna

Retorna a altura lógica visível da câmera em pixels.

## Como escrever

<div class="expression-token" style="--expression-color: #60A5FA"><code>camera.height</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #60A5FA">
  <section class="expression-example">
    <strong>1. Ler altura visível da câmera</strong>
    <pre><code>camera.height</code></pre>
    <p>Usa o valor atual de altura visível da câmera no momento em que o nó é executado.</p>
  </section>
  <section class="expression-example">
    <strong>2. Encontrar metade da tela</strong>
    <pre><code>camera.height / 2</code></pre>
    <p>Calcula metade da altura visível atual.</p>
  </section>
  <section class="expression-example">
    <strong>3. Espalhar cinco itens</strong>
    <pre><code>camera.height / 5</code></pre>
    <p>Calcula um espaçamento vertical que divide a altura visível em cinco partes.</p>
  </section>
</div>

## Regras

- A expressão usa a câmera atual da cena.
- O valor considera o zoom quando isso altera a área visível.

## Expressões relacionadas

- [Rotação atual da câmera](./rotacao-da-camera) — `camera.rotation`
- [Centro X da câmera](./camera-centro-x) — `camera.x`
- [Centro Y da câmera](./camera-centro-y) — `camera.y`
- [Borda esquerda da câmera](./camera-borda-esquerda) — `camera.left`
- [Borda direita da câmera](./camera-borda-direita) — `camera.right`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
