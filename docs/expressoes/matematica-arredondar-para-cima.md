---
title: "Arredondar para cima"
description: "Arredonda sempre para o maior número inteiro."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Matemática</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="arrow-up-outline" color="#FB923C" :size="26" /></span>
  <span>Arredondar para cima</span>
</h1>

<p class="node-purpose">Arredonda sempre para o maior número inteiro.</p>

## O que retorna

Arredonda sempre para o maior número inteiro.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>math.ceil(valor)</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Positivo</strong>
    <pre><code>math.ceil(4.1)</code></pre>
    <p>Retorna 5.</p>
  </section>
  <section class="expression-example">
    <strong>2. Negativo</strong>
    <pre><code>math.ceil(-4.9)</code></pre>
    <p>Retorna -4.</p>
  </section>
  <section class="expression-example">
    <strong>3. Páginas necessárias</strong>
    <pre><code>math.ceil(inimigo.instances / 10)</code></pre>
    <p>Calcula quantos grupos de até dez inimigos são necessários.</p>
  </section>
</div>

## Regras

- Dentro de funções, separe os argumentos com vírgulas e use ponto nas casas decimais.
- Os argumentos podem ser números, propriedades ou outras funções.

## Expressões relacionadas

- [Truncar](./matematica-truncar) — `math.trunc(valor)`
- [Arredondar](./matematica-arredondar) — `math.round(valor)`
- [Arredondar para baixo](./matematica-arredondar-para-baixo) — `math.floor(valor)`
- [Valor absoluto](./matematica-valor-absoluto) — `math.abs(valor)`
- [Menor valor](./matematica-menor-valor) — `math.min(a, b)`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
