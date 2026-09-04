---
title: "Comparar números"
description: "Compara dois números ou expressões."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Lógica e tempo</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="condition-compare-numbers" icon="git-compare-outline" color="#60A5FA" /></span>
  <span>Comparar números</span>
</h1>

<p class="node-purpose">Compara dois números ou expressões.</p>

## Para que serve

Cria decisões usando igualdade, diferença, maior, menor e suas variações.

## Campos

<div class="doc-field-list" style="--doc-field-color: #60A5FA">
  <div class="doc-field-item">
    <strong>Primeiro valor</strong>
    <p>Número ou expressão do lado esquerdo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Comparação</strong>
    <p>Igual, Maior, Menor, Igual ou maior, Igual ou menor ou Diferente.</p>
  </div>
  <div class="doc-field-item">
    <strong>Segundo valor</strong>
    <p>Número ou expressão do lado direito.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Ativado verifica a condição normal; desativado verifica o contrário.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #60A5FA">
  <ol>
    <li>Use placar.variable.pontos como primeiro valor.</li>
    <li>Escolha Igual ou maior e use 100 como segundo valor.</li>
    <li>Conecte a ação que abre a próxima fase.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A próxima fase é aberta quando a pontuação chega a 100 ou mais.</p>
</div>

## Regras

- Os dois campos aceitam expressões numéricas.
- A comparação é refeita sempre que o fluxo chega ao nó.
- A forma negativa inverte o resultado completo da comparação.
- Somente os nós conectados abaixo continuam quando o resultado escolhido é verdadeiro.
- Desative “Resultado esperado” para usar a forma negativa da condição.

## Nós relacionados

- [Aguardar segundos](./aguardar-segundos) — Espera um tempo antes de continuar o fluxo.
- [Variável foi alterada](./variavel-foi-alterada) — Dispara uma vez quando a variável escolhida muda de valor.
- [A cada X segundos](./a-cada-x-segundos) — Executa novamente sempre que o intervalo escolhido é completado.
- [Chance aleatória](./chance-aleatoria) — Executa de acordo com a porcentagem de chance escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
