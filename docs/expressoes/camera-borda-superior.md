---
title: "Borda superior da câmera"
description: "Retorna a coordenada da extremidade superior visível."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Câmera</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="arrow-up-outline" color="#60A5FA" /></span>
  <span>Borda superior da câmera</span>
</h1>

<p class="node-purpose">Retorna a coordenada da extremidade superior visível.</p>

## O que retorna

Retorna a coordenada da extremidade superior visível.

## Como escrever

<div class="expression-token" style="--expression-color: #60A5FA"><code>camera.top</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #60A5FA">
  <section class="expression-example">
    <strong>1. Ler borda superior da câmera</strong>
    <pre><code>camera.top</code></pre>
    <p>Usa o valor atual de borda superior da câmera no momento em que o nó é executado.</p>
  </section>
  <section class="expression-example">
    <strong>2. Fixar uma margem superior</strong>
    <pre><code>camera.top + 20</code></pre>
    <p>Posiciona algo 20 pixels abaixo da borda superior.</p>
  </section>
  <section class="expression-example">
    <strong>3. Criar acima da tela</strong>
    <pre><code>camera.top - 32</code></pre>
    <p>Cria algo 32 pixels acima da área que está visível.</p>
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
- [Borda esquerda da câmera](./camera-borda-esquerda) — `camera.left`
- [Borda direita da câmera](./camera-borda-direita) — `camera.right`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
