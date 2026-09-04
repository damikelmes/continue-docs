---
title: "Chance aleatória"
description: "Executa de acordo com a porcentagem de chance escolhida."
---

<div class="node-page-kicker" style="--node-page-color: #FACC15">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Lógica e tempo</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FACC15">
  <span class="node-title-icon"><NodeIcon type="condition-random-chance" icon="dice-outline" color="#FACC15" :size="26" /></span>
  <span>Chance aleatória</span>
</h1>

<p class="node-purpose">Executa de acordo com a porcentagem de chance escolhida.</p>

## Para que serve

Executa de acordo com a porcentagem de chance escolhida.

## Campos

<div class="doc-field-list" style="--doc-field-color: #FACC15">
  <div class="doc-field-item">
    <strong>Chance</strong>
    <p>Porcentagem de sucesso entre 0 e 100.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #FACC15">
  <ol>
    <li>Depois de um evento de coleta, configure chance de 25%.</li>
    <li>Conecte a criação de um bônus.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Cada verificação tem uma chance de conceder o bônus.</p>
</div>

## Regras

- 25% não garante exatamente um acerto a cada quatro tentativas.
- Não deixe o sorteio sendo repetido a cada atualização se queria só uma tentativa por evento.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Comparar números](./comparar-numeros) — Compara dois números ou expressões.
- [Aguardar segundos](./aguardar-segundos) — Espera um tempo antes de continuar o fluxo.
- [Variável foi alterada](./variavel-foi-alterada) — Dispara uma vez quando a variável escolhida muda de valor.
- [A cada X segundos](./a-cada-x-segundos) — Executa novamente sempre que o intervalo escolhido é completado.

<a class="node-back-link" href="./">← Ver todos os nós</a>
