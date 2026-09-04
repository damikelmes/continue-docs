---
title: "Rotação atual da câmera"
description: "Lê o ângulo atual da câmera em graus."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Câmera</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="camera-reverse-outline" color="#60A5FA" :size="26" /></span>
  <span>Rotação atual da câmera</span>
</h1>

<p class="node-purpose">Lê o ângulo atual da câmera em graus.</p>

## O que retorna

Um ângulo normalizado de 0 até antes de 360 graus.

## Como escrever

<div class="expression-token" style="--expression-color: #60A5FA"><code>camera.rotation</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #60A5FA">
  <section class="expression-example">
    <strong>1. Copiar o ângulo</strong>
    <pre><code>camera.rotation</code></pre>
    <p>Use na rotação de um objeto para aplicar o mesmo ângulo.</p>
  </section>
  <section class="expression-example">
    <strong>2. Somar um quarto de volta</strong>
    <pre><code>camera.rotation + 90</code></pre>
    <p>Calcula um ângulo 90 graus à frente.</p>
  </section>
  <section class="expression-example">
    <strong>3. Arredondar o ângulo</strong>
    <pre><code>math.round(camera.rotation)</code></pre>
    <p>Arredonda a rotação atual para graus inteiros.</p>
  </section>
</div>

## Regras

- A rotação da câmera não altera a rotação física dos objetos.
- As expressões das bordas da câmera consideram a rotação.

## Expressões relacionadas

- [Centro X da câmera](./camera-centro-x) — `camera.x`
- [Centro Y da câmera](./camera-centro-y) — `camera.y`
- [Borda esquerda da câmera](./camera-borda-esquerda) — `camera.left`
- [Borda direita da câmera](./camera-borda-direita) — `camera.right`
- [Borda superior da câmera](./camera-borda-superior) — `camera.top`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
