---
title: "Tempo do toque"
description: "Segundos decorridos desde o início do toque atual ou mais recente."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="hand-left-outline" color="#FB923C" /></span>
  <span>Tempo do toque</span>
</h1>

<p class="node-purpose">Segundos decorridos desde o início do toque atual ou mais recente.</p>

## O que retorna

Segundos decorridos desde o início do toque atual ou mais recente.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>touch.duration</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Pressão longa</strong>
    <pre><code>touch.duration</code></pre>
    <p>Compare com 1 para verificar um segundo. Combine com touch.is_down se precisar que o dedo ainda esteja na tela.</p>
  </section>
  <section class="expression-example">
    <strong>2. Progresso de carga</strong>
    <pre><code>math.clamp(touch.duration / 2, 0, 1)</code></pre>
    <p>Calcula uma carga de zero a um em dois segundos.</p>
  </section>
  <section class="expression-example">
    <strong>3. Milissegundos</strong>
    <pre><code>touch.duration * 1000</code></pre>
    <p>Converte segundos para milissegundos.</p>
  </section>
</div>

## Regras

- Combine com uma condição de toque para decidir quando usar a leitura.

## Expressões relacionadas

- [Início do toque X](./inicio-do-toque-x) — `touch.start_x`
- [Início do toque Y](./inicio-do-toque-y) — `touch.start_y`
- [Deslocamento do toque X](./deslocamento-do-toque-x) — `touch.delta_x`
- [Deslocamento do toque Y](./deslocamento-do-toque-y) — `touch.delta_y`
- [Distância do deslize](./distancia-do-deslize) — `touch.distance`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
