---
title: "Toque X na tela"
description: "Retorna a posição X direta do toque na tela do aparelho."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="expression-touch-x" icon="phone-portrait-outline" color="#FB923C" :size="26" /></span>
  <span>Toque X na tela</span>
</h1>

<p class="node-purpose">Retorna a posição X direta do toque na tela do aparelho.</p>

## O que retorna

A coordenada X da tela, sem aplicar a posição nem o zoom da câmera.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>touch.screen_x</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Ler a posição horizontal na tela</strong>
    <pre><code>touch.screen_x</code></pre>
    <p>Retorna a distância horizontal entre o toque e a borda esquerda da tela.</p>
  </section>
  <section class="expression-example">
    <strong>2. Comparar uma região da tela</strong>
    <pre><code>touch.screen_x</code></pre>
    <p>No nó Comparar valores, compare esta expressão com uma posição X fixa da tela.</p>
  </section>
  <section class="expression-example">
    <strong>3. Calcular uma margem</strong>
    <pre><code>touch.screen_x + 12</code></pre>
    <p>Calcula uma posição de tela 12 pixels à direita do dedo.</p>
  </section>
</div>

## Regras

- Use `touch.x` para objetos do mundo e `touch.screen_x` para interface ligada diretamente à tela.

## Expressões relacionadas

- [Início do toque X](./inicio-do-toque-x) — `touch.start_x`
- [Início do toque Y](./inicio-do-toque-y) — `touch.start_y`
- [Deslocamento do toque X](./deslocamento-do-toque-x) — `touch.delta_x`
- [Deslocamento do toque Y](./deslocamento-do-toque-y) — `touch.delta_y`
- [Distância do deslize](./distancia-do-deslize) — `touch.distance`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
