---
title: "Borda esquerda da câmera"
description: "Retorna a coordenada da extremidade esquerda visível."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Câmera</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="arrow-back-outline" color="#60A5FA" /></span>
  <span>Borda esquerda da câmera</span>
</h1>

<p class="node-purpose">Retorna a coordenada da extremidade esquerda visível.</p>

## O que retorna

Retorna a coordenada da extremidade esquerda visível.

## Como escrever

<div class="expression-token" style="--expression-color: #60A5FA"><code>camera.left</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #60A5FA">
  <section class="expression-example">
    <strong>1. Ler borda esquerda da câmera</strong>
    <pre><code>camera.left</code></pre>
    <p>Usa o valor atual de borda esquerda da câmera no momento em que o nó é executado.</p>
  </section>
  <section class="expression-example">
    <strong>2. Manter uma margem</strong>
    <pre><code>camera.left + 24</code></pre>
    <p>Posiciona algo 24 pixels para dentro da borda esquerda.</p>
  </section>
  <section class="expression-example">
    <strong>3. Detectar saída da tela</strong>
    <pre><code>camera.left</code></pre>
    <p>No nó Comparar valores, compare inimigo.right com esta expressão usando a opção Menor que.</p>
  </section>
</div>

## Regras

- A expressão usa a câmera atual da cena.
- O valor considera o zoom quando isso altera a área visível.
- Com a câmera girada, estes valores são os extremos da área visível nos eixos do mundo. Um ponto perto de um extremo não está necessariamente dentro do retângulo girado; use as condições de câmera para testar a visibilidade do objeto.

## Expressões relacionadas

- [Rotação atual da câmera](./rotacao-da-camera) — `camera.rotation`
- [Centro X da câmera](./camera-centro-x) — `camera.x`
- [Centro Y da câmera](./camera-centro-y) — `camera.y`
- [Borda direita da câmera](./camera-borda-direita) — `camera.right`
- [Borda superior da câmera](./camera-borda-superior) — `camera.top`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
