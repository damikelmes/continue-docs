---
title: "Deslocamento do toque X"
description: "Diferença horizontal entre o ponto atual e o início do toque."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="hand-left-outline" color="#FB923C" /></span>
  <span>Deslocamento do toque X</span>
</h1>

<p class="node-purpose">Diferença horizontal entre o ponto atual e o início do toque.</p>

## O que retorna

Diferença horizontal entre o ponto atual e o início do toque.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>touch.delta_x</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Sentido do gesto</strong>
    <pre><code>touch.delta_x</code></pre>
    <p>Positivo indica direita; negativo indica esquerda.</p>
  </section>
  <section class="expression-example">
    <strong>2. Distância sem sinal</strong>
    <pre><code>math.abs(touch.delta_x)</code></pre>
    <p>Mede apenas o deslocamento horizontal, sem direção.</p>
  </section>
  <section class="expression-example">
    <strong>3. Limitar a resposta</strong>
    <pre><code>math.clamp(touch.delta_x, -100, 100)</code></pre>
    <p>Limita um controle horizontal entre -100 e 100.</p>
  </section>
</div>

## Regras

- Combine com uma condição de toque para decidir quando usar a leitura.
- É o deslocamento desde o início, não apenas desde a atualização anterior.

## Expressões relacionadas

- [Início do toque X](./inicio-do-toque-x) — `touch.start_x`
- [Início do toque Y](./inicio-do-toque-y) — `touch.start_y`
- [Deslocamento do toque Y](./deslocamento-do-toque-y) — `touch.delta_y`
- [Distância do deslize](./distancia-do-deslize) — `touch.distance`
- [Ângulo do deslize](./angulo-do-deslize) — `touch.angle`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
