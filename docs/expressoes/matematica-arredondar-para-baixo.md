---
title: "Arredondar para baixo"
description: "Arredonda sempre para o menor número inteiro."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Matemática</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="arrow-down-outline" color="#FB923C" :size="26" /></span>
  <span>Arredondar para baixo</span>
</h1>

<p class="node-purpose">Arredonda sempre para o menor número inteiro.</p>

## O que retorna

Arredonda sempre para o menor número inteiro.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>math.floor(valor)</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Positivo</strong>
    <pre><code>math.floor(4.9)</code></pre>
    <p>Retorna 4.</p>
  </section>
  <section class="expression-example">
    <strong>2. Negativo</strong>
    <pre><code>math.floor(-4.1)</code></pre>
    <p>Retorna -5.</p>
  </section>
  <section class="expression-example">
    <strong>3. Segundos completos</strong>
    <pre><code>math.floor(time.elapsed)</code></pre>
    <p>Retorna apenas os segundos completos da cena.</p>
  </section>
</div>

## Regras

- Dentro de funções, separe os argumentos com vírgulas e use ponto nas casas decimais.
- Os argumentos podem ser números, propriedades ou outras funções.

## Expressões relacionadas

- [Truncar](./matematica-truncar) — `math.trunc(valor)`
- [Arredondar](./matematica-arredondar) — `math.round(valor)`
- [Arredondar para cima](./matematica-arredondar-para-cima) — `math.ceil(valor)`
- [Valor absoluto](./matematica-valor-absoluto) — `math.abs(valor)`
- [Menor valor](./matematica-menor-valor) — `math.min(a, b)`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
