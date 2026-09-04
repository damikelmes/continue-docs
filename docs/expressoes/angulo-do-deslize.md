---
title: "Ângulo do deslize"
description: "Direção do início até o ponto atual, em graus de 0 até antes de 360."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="hand-left-outline" color="#FB923C" :size="26" /></span>
  <span>Ângulo do deslize</span>
</h1>

<p class="node-purpose">Direção do início até o ponto atual, em graus de 0 até antes de 360.</p>

## O que retorna

Direção do início até o ponto atual, em graus de 0 até antes de 360.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>touch.angle</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Direção de lançamento</strong>
    <pre><code>touch.angle</code></pre>
    <p>Use no campo Ângulo de Mover em graus.</p>
  </section>
  <section class="expression-example">
    <strong>2. Sentido oposto</strong>
    <pre><code>touch.angle + 180</code></pre>
    <p>Calcula a direção contrária ao gesto.</p>
  </section>
  <section class="expression-example">
    <strong>3. Direções em passos</strong>
    <pre><code>math.round(touch.angle / 45) * 45</code></pre>
    <p>Aproxima o ângulo de um múltiplo de 45 graus.</p>
  </section>
</div>

## Regras

- Combine com uma condição de toque para decidir quando usar a leitura.
- Sem deslocamento, retorna 0. No mundo do jogo, 0° aponta para a direita e 90° para baixo.

## Expressões relacionadas

- [Início do toque X](./inicio-do-toque-x) — `touch.start_x`
- [Início do toque Y](./inicio-do-toque-y) — `touch.start_y`
- [Deslocamento do toque X](./deslocamento-do-toque-x) — `touch.delta_x`
- [Deslocamento do toque Y](./deslocamento-do-toque-y) — `touch.delta_y`
- [Distância do deslize](./distancia-do-deslize) — `touch.distance`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
