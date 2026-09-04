---
title: "Número decimal aleatório"
description: "Sorteia um número com casas decimais entre os limites."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Valores aleatórios</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="dice-outline" color="#A78BFA" /></span>
  <span>Número decimal aleatório</span>
</h1>

<p class="node-purpose">Sorteia um número com casas decimais entre os limites.</p>

## O que retorna

Um número decimal sorteado entre o mínimo e o máximo.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>random.float(mínimo, máximo)</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Variar uma posição</strong>
    <pre><code>random.float(-20, 20)</code></pre>
    <p>Sorteia um deslocamento decimal entre -20 e 20 pixels.</p>
  </section>
  <section class="expression-example">
    <strong>2. Variar uma escala</strong>
    <pre><code>random.float(0.8, 1.2)</code></pre>
    <p>Sorteia uma escala entre 80% e 120% do tamanho normal.</p>
  </section>
  <section class="expression-example">
    <strong>3. Variar um tempo</strong>
    <pre><code>random.float(0.5, 1.5)</code></pre>
    <p>Sorteia uma duração entre meio segundo e um segundo e meio.</p>
  </section>
</div>

## Regras

- Os limites podem ser informados em qualquer ordem.
- A função sorteia novamente toda vez que é calculada.
- Use Uma única vez quando quiser manter um único resultado.

## Expressões relacionadas

- [Número inteiro aleatório](./aleatorio-inteiro) — `random.int(mínimo, máximo)`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
