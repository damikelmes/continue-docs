---
title: "Maior valor"
description: "Retorna o maior entre dois valores."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Matemática</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="chevron-up-outline" color="#FB923C" :size="26" /></span>
  <span>Maior valor</span>
</h1>

<p class="node-purpose">Retorna o maior entre dois valores.</p>

## O que retorna

Retorna o maior entre dois valores.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>math.max(a, b)</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Comparar números</strong>
    <pre><code>math.max(7, 3)</code></pre>
    <p>Retorna 7.</p>
  </section>
  <section class="expression-example">
    <strong>2. Impedir valor negativo</strong>
    <pre><code>math.max(0, jogador.variable.vida - 10)</code></pre>
    <p>Garante que a vida calculada nunca fique abaixo de zero.</p>
  </section>
  <section class="expression-example">
    <strong>3. Escolher a borda mais distante</strong>
    <pre><code>math.max(jogador.right, inimigo.right)</code></pre>
    <p>Retorna a coordenada que estiver mais à direita.</p>
  </section>
</div>

## Regras

- Dentro de funções, separe os argumentos com vírgulas e use ponto nas casas decimais.
- Os argumentos podem ser números, propriedades ou outras funções.

## Expressões relacionadas

- [Truncar](./matematica-truncar) — `math.trunc(valor)`
- [Arredondar](./matematica-arredondar) — `math.round(valor)`
- [Arredondar para baixo](./matematica-arredondar-para-baixo) — `math.floor(valor)`
- [Arredondar para cima](./matematica-arredondar-para-cima) — `math.ceil(valor)`
- [Valor absoluto](./matematica-valor-absoluto) — `math.abs(valor)`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
