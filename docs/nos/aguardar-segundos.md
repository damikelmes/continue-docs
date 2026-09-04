---
title: "Aguardar segundos"
description: "Espera um tempo antes de continuar o fluxo."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Lógica e tempo</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="condition-wait-seconds" icon="timer-outline" color="#A78BFA" /></span>
  <span>Aguardar segundos</span>
</h1>

<p class="node-purpose">Espera um tempo antes de continuar o fluxo.</p>

## Para que serve

Cria atrasos entre ações sem travar a atualização do restante do jogo.

## Campos

<div class="doc-field-list" style="--doc-field-color: #A78BFA">
  <div class="doc-field-item">
    <strong>Tempo de espera</strong>
    <p>Duração em segundos; aceita valor decimal ou expressão.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #A78BFA">
  <ol>
    <li>Depois de mostrar “Preparar”, aguarde 1,5 s.</li>
    <li>Conecte abaixo a ação que mostra “Já!”.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A segunda ação só executa após 1,5 segundo.</p>
</div>

## Regras

- Somente o ramo conectado abaixo espera; o restante do jogo continua atualizando.
- O tempo precisa ser maior que zero.
- Este nó não possui a opção Resultado esperado.

## Nós relacionados

- [Comparar números](./comparar-numeros) — Compara dois números ou expressões.
- [Variável foi alterada](./variavel-foi-alterada) — Dispara uma vez quando a variável escolhida muda de valor.
- [A cada X segundos](./a-cada-x-segundos) — Executa novamente sempre que o intervalo escolhido é completado.
- [Chance aleatória](./chance-aleatoria) — Executa de acordo com a porcentagem de chance escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
