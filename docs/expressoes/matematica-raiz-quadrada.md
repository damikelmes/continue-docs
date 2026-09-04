---
title: "Raiz quadrada"
description: "Calcula a raiz quadrada de um valor."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Matemática</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="calculator-outline" color="#FB923C" /></span>
  <span>Raiz quadrada</span>
</h1>

<p class="node-purpose">Calcula a raiz quadrada de um valor.</p>

## O que retorna

Calcula a raiz quadrada de um valor.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>math.sqrt(valor)</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Raiz exata</strong>
    <pre><code>math.sqrt(81)</code></pre>
    <p>Retorna 9.</p>
  </section>
  <section class="expression-example">
    <strong>2. Raiz decimal</strong>
    <pre><code>math.sqrt(2)</code></pre>
    <p>Retorna aproximadamente 1,414.</p>
  </section>
  <section class="expression-example">
    <strong>3. Distância em dois eixos</strong>
    <pre><code>math.sqrt(math.pow(jogador.x - inimigo.x, 2) + math.pow(jogador.y - inimigo.y, 2))</code></pre>
    <p>Calcula a distância direta entre dois pontos.</p>
  </section>
</div>

## Regras

- Dentro de funções, separe os argumentos com vírgulas e use ponto nas casas decimais.
- Os argumentos podem ser números, propriedades ou outras funções.
- O valor não pode ser negativo.

## Expressões relacionadas

- [Truncar](./matematica-truncar) — `math.trunc(valor)`
- [Arredondar](./matematica-arredondar) — `math.round(valor)`
- [Arredondar para baixo](./matematica-arredondar-para-baixo) — `math.floor(valor)`
- [Arredondar para cima](./matematica-arredondar-para-cima) — `math.ceil(valor)`
- [Valor absoluto](./matematica-valor-absoluto) — `math.abs(valor)`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
