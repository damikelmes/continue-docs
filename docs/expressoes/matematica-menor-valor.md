---
title: "Menor valor"
description: "Retorna o menor entre dois valores."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Matemática</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="chevron-down-outline" color="#FB923C" /></span>
  <span>Menor valor</span>
</h1>

<p class="node-purpose">Retorna o menor entre dois valores.</p>

## O que retorna

Retorna o menor entre dois valores.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>math.min(a, b)</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Comparar números</strong>
    <pre><code>math.min(7, 3)</code></pre>
    <p>Retorna 3.</p>
  </section>
  <section class="expression-example">
    <strong>2. Limitar pelo máximo atual</strong>
    <pre><code>math.min(jogador.variable.vida, 100)</code></pre>
    <p>Nunca deixa o resultado usado passar de 100.</p>
  </section>
  <section class="expression-example">
    <strong>3. Escolher a borda mais próxima</strong>
    <pre><code>math.min(jogador.left, inimigo.left)</code></pre>
    <p>Retorna a coordenada que estiver mais à esquerda.</p>
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
