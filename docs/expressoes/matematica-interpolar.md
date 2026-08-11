---
title: "Interpolar valores"
description: "Mistura dois valores usando um progresso."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Matemática</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="swap-horizontal-outline" color="#FB923C" :size="26" /></span>
  <span>Interpolar valores</span>
</h1>

<p class="node-purpose">Mistura dois valores usando um progresso.</p>

## O que retorna

Mistura dois valores usando um progresso.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>math.lerp(início, fim, progresso)</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Um quarto do caminho</strong>
    <pre><code>math.lerp(0, 100, 0.25)</code></pre>
    <p>Retorna 25.</p>
  </section>
  <section class="expression-example">
    <strong>2. Metade entre objeto e câmera</strong>
    <pre><code>math.lerp(jogador.x, camera.x, 0.5)</code></pre>
    <p>Retorna o ponto no meio entre as duas posições X.</p>
  </section>
  <section class="expression-example">
    <strong>3. Aproximação suave</strong>
    <pre><code>math.lerp(objeto.x, alvo.x, 0.1)</code></pre>
    <p>Retorna uma posição 10% mais próxima da posição X de Alvo.</p>
  </section>
</div>

## Regras

- Dentro de funções, separe os argumentos com vírgulas e use ponto nas casas decimais.
- Os argumentos podem ser números, propriedades ou outras funções.
- Progresso `0` retorna o início e progresso `1` retorna o fim.
- Valores entre 0 e 1 percorrem o intervalo; valores fora dele ultrapassam as pontas.

## Expressões relacionadas

- [Truncar](./matematica-truncar) — `math.trunc(valor)`
- [Arredondar](./matematica-arredondar) — `math.round(valor)`
- [Arredondar para baixo](./matematica-arredondar-para-baixo) — `math.floor(valor)`
- [Arredondar para cima](./matematica-arredondar-para-cima) — `math.ceil(valor)`
- [Valor absoluto](./matematica-valor-absoluto) — `math.abs(valor)`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
