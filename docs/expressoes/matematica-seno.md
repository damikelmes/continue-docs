---
title: "Seno"
description: "Calcula o seno de um ângulo informado em graus."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Matemática</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="analytics-outline" color="#FB923C" /></span>
  <span>Seno</span>
</h1>

<p class="node-purpose">Calcula o seno de um ângulo informado em graus.</p>

## O que retorna

Calcula o seno de um ângulo informado em graus.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>math.sin(graus)</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Ângulo de 90°</strong>
    <pre><code>math.sin(90)</code></pre>
    <p>Retorna 1.</p>
  </section>
  <section class="expression-example">
    <strong>2. Oscilação com o tempo</strong>
    <pre><code>math.sin(time.elapsed * 180) * 20</code></pre>
    <p>Oscila suavemente entre -20 e 20.</p>
  </section>
  <section class="expression-example">
    <strong>3. Componente vertical</strong>
    <pre><code>math.sin(jogador.rotation) * 200</code></pre>
    <p>Calcula a parte vertical de uma velocidade de 200 na rotação do jogador.</p>
  </section>
</div>

## Regras

- Dentro de funções, separe os argumentos com vírgulas e use ponto nas casas decimais.
- Os argumentos podem ser números, propriedades ou outras funções.
- Os ângulos usam graus, não radianos.

## Expressões relacionadas

- [Truncar](./matematica-truncar) — `math.trunc(valor)`
- [Arredondar](./matematica-arredondar) — `math.round(valor)`
- [Arredondar para baixo](./matematica-arredondar-para-baixo) — `math.floor(valor)`
- [Arredondar para cima](./matematica-arredondar-para-cima) — `math.ceil(valor)`
- [Valor absoluto](./matematica-valor-absoluto) — `math.abs(valor)`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
