---
title: "Toque está pressionado"
description: "Retorna 1 enquanto o dedo está na tela e 0 depois que ele é solto."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="finger-print-outline" color="#FB923C" /></span>
  <span>Toque está pressionado</span>
</h1>

<p class="node-purpose">Retorna 1 enquanto o dedo está na tela e 0 depois que ele é solto.</p>

## O que retorna

O número `1` para toque ativo ou `0` para toque solto.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>touch.is_down</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Verificar o toque</strong>
    <pre><code>touch.is_down</code></pre>
    <p>No nó Comparar valores, compare esta expressão com 1 para executar enquanto o dedo estiver pressionando.</p>
  </section>
  <section class="expression-example">
    <strong>2. Bloquear quando soltar</strong>
    <pre><code>touch.is_down</code></pre>
    <p>No nó Comparar valores, compare esta expressão com 0 para reconhecer quando não há toque ativo.</p>
  </section>
  <section class="expression-example">
    <strong>3. Controlar uma intensidade</strong>
    <pre><code>touch.is_down * 100</code></pre>
    <p>Retorna 100 enquanto o toque está ativo e 0 quando está solto.</p>
  </section>
</div>

## Regras

- A expressão é numérica: use `1` para ativo e `0` para inativo.
- As coordenadas do último toque continuam guardadas mesmo quando esta expressão retorna `0`.

## Expressões relacionadas

- [Início do toque X](./inicio-do-toque-x) — `touch.start_x`
- [Início do toque Y](./inicio-do-toque-y) — `touch.start_y`
- [Deslocamento do toque X](./deslocamento-do-toque-x) — `touch.delta_x`
- [Deslocamento do toque Y](./deslocamento-do-toque-y) — `touch.delta_y`
- [Distância do deslize](./distancia-do-deslize) — `touch.distance`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
