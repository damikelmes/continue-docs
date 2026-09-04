---
title: "Valor absoluto"
description: "Remove o sinal negativo e retorna a distância até zero."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Matemática</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="remove-outline" color="#FB923C" /></span>
  <span>Valor absoluto</span>
</h1>

<p class="node-purpose">Remove o sinal negativo e retorna a distância até zero.</p>

## O que retorna

Remove o sinal negativo e retorna a distância até zero.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>math.abs(valor)</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Número negativo</strong>
    <pre><code>math.abs(-8)</code></pre>
    <p>Retorna 8.</p>
  </section>
  <section class="expression-example">
    <strong>2. Número positivo</strong>
    <pre><code>math.abs(8)</code></pre>
    <p>Continua retornando 8.</p>
  </section>
  <section class="expression-example">
    <strong>3. Distância horizontal</strong>
    <pre><code>math.abs(jogador.center_x - inimigo.center_x)</code></pre>
    <p>Retorna a distância horizontal entre os centros, sem direção.</p>
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
- [Menor valor](./matematica-menor-valor) — `math.min(a, b)`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
