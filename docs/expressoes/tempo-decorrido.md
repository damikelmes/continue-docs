---
title: "Tempo decorrido da cena"
description: "Retorna os segundos decorridos desde o início da cena."
---

<div class="node-page-kicker" style="--node-page-color: #2DD4BF">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Tempo e desempenho</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #2DD4BF">
  <span class="node-title-icon"><NodeIcon type="plain" icon="stopwatch-outline" color="#2DD4BF" :size="26" /></span>
  <span>Tempo decorrido da cena</span>
</h1>

<p class="node-purpose">Retorna os segundos decorridos desde o início da cena.</p>

## O que retorna

Um número crescente, em segundos, contado desde que a cena começou.

## Como escrever

<div class="expression-token" style="--expression-color: #2DD4BF"><code>time.elapsed</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #2DD4BF">
  <section class="expression-example">
    <strong>1. Aumentar dificuldade com o tempo</strong>
    <pre><code>1 + time.elapsed / 60</code></pre>
    <p>Cria um multiplicador que aumenta 1 ponto a cada 60 segundos.</p>
  </section>
  <section class="expression-example">
    <strong>2. Fazer uma oscilação</strong>
    <pre><code>math.sin(time.elapsed * 180) * 20</code></pre>
    <p>Produz um valor que oscila suavemente entre -20 e 20.</p>
  </section>
  <section class="expression-example">
    <strong>3. Mostrar segundos inteiros</strong>
    <pre><code>math.floor(time.elapsed)</code></pre>
    <p>Remove as casas decimais para exibir apenas os segundos completos.</p>
  </section>
</div>

## Regras

- O valor volta ao início quando a cena é reiniciada.
- Use `time.delta` para somar uma mudança por atualização; use `time.elapsed` quando precisar do relógio total da cena.

## Expressões relacionadas

- [Delta time](./tempo-delta) — `time.delta`
- [Quadros por segundo](./quadros-por-segundo) — `game.fps`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
