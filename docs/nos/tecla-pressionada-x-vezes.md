---
title: "Tecla pressionada X vezes"
description: "Executa quando a tecla é pressionada a quantidade de vezes escolhida."
---

<div class="node-page-kicker" style="--node-page-color: #F472B6">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Teclado</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #F472B6">
  <span class="node-title-icon"><NodeIcon type="condition-key-double-pressed" icon="repeat-outline" color="#F472B6" /></span>
  <span>Tecla pressionada X vezes</span>
</h1>

<p class="node-purpose">Executa quando a tecla é pressionada a quantidade de vezes escolhida.</p>

## Para que serve

Executa quando a tecla é pressionada a quantidade de vezes escolhida.

## Campos

<div class="doc-field-list" style="--doc-field-color: #F472B6">
  <div class="doc-field-item">
    <strong>Tecla</strong>
    <p>Abra o seletor e escolha uma tecla compatível.</p>
  </div>
  <div class="doc-field-item">
    <strong>Quantidade de vezes</strong>
    <p>Número de pressões/cliques necessários.</p>
  </div>
  <div class="doc-field-item">
    <strong>Intervalo máximo</strong>
    <p>Tempo máximo entre as pressões da sequência, em segundos.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #F472B6">
  <ol>
    <li>Escolha Seta para direita, quantidade 2 e intervalo de 0,3 segundo.</li>
    <li>Conecte a ação de um avanço rápido.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Dois apertos próximos ativam o avanço.</p>
</div>

## Regras

- Precisa de entrada de teclado; não cria um botão de toque na tela.
- A quantidade é configurável; não está limitada a dois apertos.
- É preciso soltar e pressionar novamente; segurar não completa a sequência.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Tecla está pressionada](./tecla-esta-pressionada) — Executa o próximo nó enquanto a tecla escolhida estiver pressionada.
- [Tecla foi pressionada](./tecla-foi-pressionada) — Executa uma vez quando a tecla passa de solta para pressionada.
- [Tecla foi solta](./tecla-foi-solta) — Executa uma vez quando a tecla escolhida é liberada.
- [Qualquer tecla foi pressionada](./qualquer-tecla-foi-pressionada) — Executa uma vez quando qualquer tecla compatível é pressionada.

<a class="node-back-link" href="./">← Ver todos os nós</a>
