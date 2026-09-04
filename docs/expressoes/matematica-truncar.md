---
title: "Truncar"
description: "Remove as casas decimais sem arredondar."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Matemática</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="cut-outline" color="#FB923C" /></span>
  <span>Truncar</span>
</h1>

<p class="node-purpose">Remove as casas decimais sem arredondar.</p>

## O que retorna

Remove as casas decimais sem arredondar.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>math.trunc(valor)</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Truncar positivo</strong>
    <pre><code>math.trunc(4.9)</code></pre>
    <p>Retorna 4.</p>
  </section>
  <section class="expression-example">
    <strong>2. Truncar negativo</strong>
    <pre><code>math.trunc(-4.9)</code></pre>
    <p>Retorna -4, aproximando o valor de zero.</p>
  </section>
  <section class="expression-example">
    <strong>3. Truncar uma posição</strong>
    <pre><code>math.trunc(jogador.x)</code></pre>
    <p>Remove as casas decimais da posição X atual.</p>
  </section>
</div>

## Regras

- Dentro de funções, separe os argumentos com vírgulas e use ponto nas casas decimais.
- Os argumentos podem ser números, propriedades ou outras funções.

## Expressões relacionadas

- [Arredondar](./matematica-arredondar) — `math.round(valor)`
- [Arredondar para baixo](./matematica-arredondar-para-baixo) — `math.floor(valor)`
- [Arredondar para cima](./matematica-arredondar-para-cima) — `math.ceil(valor)`
- [Valor absoluto](./matematica-valor-absoluto) — `math.abs(valor)`
- [Menor valor](./matematica-menor-valor) — `math.min(a, b)`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
