---
title: "Número inteiro aleatório"
description: "Sorteia um número inteiro incluindo os dois limites."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Valores aleatórios</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="dice-outline" color="#A78BFA" :size="26" /></span>
  <span>Número inteiro aleatório</span>
</h1>

<p class="node-purpose">Sorteia um número inteiro incluindo os dois limites.</p>

## O que retorna

Um número inteiro sorteado entre o mínimo e o máximo, com os dois incluídos.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>random.int(mínimo, máximo)</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Simular um dado</strong>
    <pre><code>random.int(1, 6)</code></pre>
    <p>Sorteia um dos números inteiros de 1 a 6.</p>
  </section>
  <section class="expression-example">
    <strong>2. Escolher um lado</strong>
    <pre><code>random.int(0, 1)</code></pre>
    <p>Sorteia 0 ou 1 para tomar uma decisão simples.</p>
  </section>
  <section class="expression-example">
    <strong>3. Escolher uma instância</strong>
    <pre><code>random.int(1, inimigo.instances)</code></pre>
    <p>Sorteia um índice entre a primeira e a última instância de Inimigo.</p>
  </section>
</div>

## Regras

- Os limites podem ser informados em qualquer ordem.
- A função sorteia novamente toda vez que é calculada.
- Use Uma única vez quando quiser manter um único resultado.

## Expressões relacionadas

- [Número decimal aleatório](./aleatorio-decimal) — `random.float(mínimo, máximo)`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
