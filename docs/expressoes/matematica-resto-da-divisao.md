---
title: "Resto da divisão"
description: "Retorna o resto da divisão entre dois valores."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Matemática</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="repeat-outline" color="#FB923C" /></span>
  <span>Resto da divisão</span>
</h1>

<p class="node-purpose">Retorna o resto da divisão entre dois valores.</p>

## O que retorna

Retorna o resto da divisão entre dois valores.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>math.mod(a, b)</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Resto simples</strong>
    <pre><code>math.mod(10, 3)</code></pre>
    <p>Retorna 1.</p>
  </section>
  <section class="expression-example">
    <strong>2. Alternar par e ímpar</strong>
    <pre><code>math.mod(contador.variable.indice, 2)</code></pre>
    <p>Retorna 0 para índices pares e 1 para índices ímpares.</p>
  </section>
  <section class="expression-example">
    <strong>3. Repetir um ângulo</strong>
    <pre><code>math.mod(time.elapsed * 90, 360)</code></pre>
    <p>Mantém um ângulo crescente no intervalo de uma volta.</p>
  </section>
</div>

## Regras

- Dentro de funções, separe os argumentos com vírgulas e use ponto nas casas decimais.
- Os argumentos podem ser números, propriedades ou outras funções.
- O divisor não pode ser zero.

## Expressões relacionadas

- [Truncar](./matematica-truncar) — `math.trunc(valor)`
- [Arredondar](./matematica-arredondar) — `math.round(valor)`
- [Arredondar para baixo](./matematica-arredondar-para-baixo) — `math.floor(valor)`
- [Arredondar para cima](./matematica-arredondar-para-cima) — `math.ceil(valor)`
- [Valor absoluto](./matematica-valor-absoluto) — `math.abs(valor)`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
