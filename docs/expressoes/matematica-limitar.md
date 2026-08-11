---
title: "Limitar valor"
description: "Mantém um valor dentro de um intervalo."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Matemática</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="contract-outline" color="#FB923C" :size="26" /></span>
  <span>Limitar valor</span>
</h1>

<p class="node-purpose">Mantém um valor dentro de um intervalo.</p>

## O que retorna

Mantém um valor dentro de um intervalo.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>math.clamp(valor, mínimo, máximo)</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Limitar entre 0 e 10</strong>
    <pre><code>math.clamp(14, 0, 10)</code></pre>
    <p>Retorna 10.</p>
  </section>
  <section class="expression-example">
    <strong>2. Limitar vida</strong>
    <pre><code>math.clamp(jogador.variable.vida, 0, 100)</code></pre>
    <p>Mantém a vida entre 0 e 100.</p>
  </section>
  <section class="expression-example">
    <strong>3. Limitar posição à câmera</strong>
    <pre><code>math.clamp(jogador.x, camera.left, camera.right)</code></pre>
    <p>Mantém a posição usada entre as bordas horizontais visíveis.</p>
  </section>
</div>

## Regras

- Dentro de funções, separe os argumentos com vírgulas e use ponto nas casas decimais.
- Os argumentos podem ser números, propriedades ou outras funções.
- Se mínimo e máximo forem informados na ordem errada, organize os limites antes de usar.

## Expressões relacionadas

- [Truncar](./matematica-truncar) — `math.trunc(valor)`
- [Arredondar](./matematica-arredondar) — `math.round(valor)`
- [Arredondar para baixo](./matematica-arredondar-para-baixo) — `math.floor(valor)`
- [Arredondar para cima](./matematica-arredondar-para-cima) — `math.ceil(valor)`
- [Valor absoluto](./matematica-valor-absoluto) — `math.abs(valor)`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
