---
title: "Distância do deslize"
description: "Distância em linha reta entre o início e o ponto atual do toque."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="hand-left-outline" color="#FB923C" /></span>
  <span>Distância do deslize</span>
</h1>

<p class="node-purpose">Distância em linha reta entre o início e o ponto atual do toque.</p>

## O que retorna

Distância em linha reta entre o início e o ponto atual do toque.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>touch.distance</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Gesto mínimo</strong>
    <pre><code>touch.distance</code></pre>
    <p>Compare com 40 para reconhecer um afastamento de pelo menos 40 pixels.</p>
  </section>
  <section class="expression-example">
    <strong>2. Limitar intensidade</strong>
    <pre><code>math.min(touch.distance, 100)</code></pre>
    <p>Limita a intensidade calculada em 100.</p>
  </section>
  <section class="expression-example">
    <strong>3. Converter em escala</strong>
    <pre><code>1 + touch.distance / 200</code></pre>
    <p>Calcula uma escala que cresce conforme o dedo se afasta da origem.</p>
  </section>
</div>

## Regras

- Combine com uma condição de toque para decidir quando usar a leitura.
- Mede a distância entre os extremos, não a soma de todo o caminho percorrido pelo dedo.

## Expressões relacionadas

- [Início do toque X](./inicio-do-toque-x) — `touch.start_x`
- [Início do toque Y](./inicio-do-toque-y) — `touch.start_y`
- [Deslocamento do toque X](./deslocamento-do-toque-x) — `touch.delta_x`
- [Deslocamento do toque Y](./deslocamento-do-toque-y) — `touch.delta_y`
- [Ângulo do deslize](./angulo-do-deslize) — `touch.angle`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
