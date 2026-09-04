---
title: "Tangente"
description: "Calcula a tangente de um ângulo informado em graus."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Matemática</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="plain" icon="analytics-outline" color="#FB923C" /></span>
  <span>Tangente</span>
</h1>

<p class="node-purpose">Calcula a tangente de um ângulo informado em graus.</p>

## O que retorna

Calcula a tangente de um ângulo informado em graus.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>math.tan(graus)</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Ângulo de 45°</strong>
    <pre><code>math.tan(45)</code></pre>
    <p>Retorna aproximadamente 1.</p>
  </section>
  <section class="expression-example">
    <strong>2. Inclinação de 30°</strong>
    <pre><code>math.tan(30)</code></pre>
    <p>Retorna aproximadamente 0,577.</p>
  </section>
  <section class="expression-example">
    <strong>3. Calcular subida por distância</strong>
    <pre><code>math.tan(rampa.variable.angulo) * rampa.variable.distancia_x</code></pre>
    <p>Calcula a variação vertical usando as variáveis numéricas Ângulo e Distância X de Rampa.</p>
  </section>
</div>

## Regras

- Dentro de funções, separe os argumentos com vírgulas e use ponto nas casas decimais.
- Os argumentos podem ser números, propriedades ou outras funções.
- Os ângulos usam graus, não radianos.
- Perto de 90° e 270°, o resultado cresce muito; limite o valor quando necessário.

## Expressões relacionadas

- [Truncar](./matematica-truncar) — `math.trunc(valor)`
- [Arredondar](./matematica-arredondar) — `math.round(valor)`
- [Arredondar para baixo](./matematica-arredondar-para-baixo) — `math.floor(valor)`
- [Arredondar para cima](./matematica-arredondar-para-cima) — `math.ceil(valor)`
- [Valor absoluto](./matematica-valor-absoluto) — `math.abs(valor)`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
