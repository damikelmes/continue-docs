---
title: "Quadros por segundo"
description: "Retorna a quantidade atual de quadros por segundo do jogo."
---

<div class="node-page-kicker" style="--node-page-color: #2DD4BF">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Tempo e desempenho</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #2DD4BF">
  <span class="node-title-icon"><NodeIcon type="plain" icon="speedometer-outline" color="#2DD4BF" /></span>
  <span>Quadros por segundo</span>
</h1>

<p class="node-purpose">Retorna a quantidade atual de quadros por segundo do jogo.</p>

## O que retorna

Uma estimativa numérica do FPS medido durante a execução.

## Como escrever

<div class="expression-token" style="--expression-color: #2DD4BF"><code>game.fps</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #2DD4BF">
  <section class="expression-example">
    <strong>1. Mostrar o FPS inteiro</strong>
    <pre><code>math.round(game.fps)</code></pre>
    <p>Arredonda a medição para exibir um número fácil de ler.</p>
  </section>
  <section class="expression-example">
    <strong>2. Ativar um modo leve</strong>
    <pre><code>game.fps</code></pre>
    <p>No nó Comparar valores, compare esta expressão com 30 usando a opção Menor que.</p>
  </section>
  <section class="expression-example">
    <strong>3. Limitar o valor exibido</strong>
    <pre><code>math.clamp(game.fps, 0, 120)</code></pre>
    <p>Mantém a informação usada pela interface entre 0 e 120.</p>
  </section>
</div>

## Regras

- O valor pode variar de uma atualização para outra.
- FPS mede desempenho; não use esse valor para controlar velocidade. Para isso, use `time.delta`.

## Expressões relacionadas

- [Delta time](./tempo-delta) — `time.delta`
- [Tempo decorrido da cena](./tempo-decorrido) — `time.elapsed`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
