---
title: "Potência"
description: "Eleva uma base ao expoente informado."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Matemática</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="trending-up-outline" color="#FB923C" :size="26" /></span>
  <span>Potência</span>
</h1>

<p class="node-purpose">Eleva uma base ao expoente informado.</p>

## O que retorna

Eleva uma base ao expoente informado.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>math.pow(base, expoente)</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Ao cubo</strong>
    <pre><code>math.pow(2, 3)</code></pre>
    <p>Retorna 8.</p>
  </section>
  <section class="expression-example">
    <strong>2. Ao quadrado</strong>
    <pre><code>math.pow(5, 2)</code></pre>
    <p>Retorna 25.</p>
  </section>
  <section class="expression-example">
    <strong>3. Distância ao quadrado</strong>
    <pre><code>math.pow(jogador.x - inimigo.x, 2)</code></pre>
    <p>Calcula o quadrado da diferença horizontal.</p>
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
