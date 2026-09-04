---
title: "Zoom da câmera"
description: "Retorna o multiplicador de zoom atual da câmera."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Câmera</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="expand-outline" color="#60A5FA" /></span>
  <span>Zoom da câmera</span>
</h1>

<p class="node-purpose">Retorna o multiplicador de zoom atual da câmera.</p>

## O que retorna

Retorna o multiplicador de zoom atual da câmera.

## Como escrever

<div class="expression-token" style="--expression-color: #60A5FA"><code>camera.zoom</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #60A5FA">
  <section class="expression-example">
    <strong>1. Ler zoom da câmera</strong>
    <pre><code>camera.zoom</code></pre>
    <p>Usa o valor atual de zoom da câmera no momento em que o nó é executado.</p>
  </section>
  <section class="expression-example">
    <strong>2. Ajustar algo pelo zoom</strong>
    <pre><code>16 / camera.zoom</code></pre>
    <p>Compensa o zoom para calcular um tamanho lógico inversamente proporcional.</p>
  </section>
  <section class="expression-example">
    <strong>3. Limitar um efeito</strong>
    <pre><code>math.clamp(camera.zoom, 0.5, 2)</code></pre>
    <p>Mantém o valor usado pelo efeito entre zoom 0,5 e 2.</p>
  </section>
</div>

## Regras

- A expressão usa a câmera atual da cena.
- O valor considera o zoom quando isso altera a área visível.
- Zoom `1` é o tamanho normal; acima de 1 aproxima e abaixo de 1 afasta.
- Use valores maiores que zero ao dividir pelo zoom.

## Expressões relacionadas

- [Rotação atual da câmera](./rotacao-da-camera) — `camera.rotation`
- [Centro X da câmera](./camera-centro-x) — `camera.x`
- [Centro Y da câmera](./camera-centro-y) — `camera.y`
- [Borda esquerda da câmera](./camera-borda-esquerda) — `camera.left`
- [Borda direita da câmera](./camera-borda-direita) — `camera.right`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
