---
title: "Tecla mantida por um tempo"
description: "Executa depois que a tecla permanece pressionada pelo tempo escolhido."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Teclado</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="condition-key-held" icon="timer-outline" color="#FB923C" :size="26" /></span>
  <span>Tecla mantida por um tempo</span>
</h1>

<p class="node-purpose">Executa depois que a tecla permanece pressionada pelo tempo escolhido.</p>

## Para que serve

Executa depois que a tecla permanece pressionada pelo tempo escolhido.

## Campos

<div class="doc-field-list" style="--doc-field-color: #FB923C">
  <div class="doc-field-item">
    <strong>Tecla</strong>
    <p>Abra o seletor e escolha uma tecla compatível.</p>
  </div>
  <div class="doc-field-item">
    <strong>Tempo segurando</strong>
    <p>Duração mínima em segundos.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #FB923C">
  <ol>
    <li>Escolha Espaço e tempo de 1 segundo.</li>
    <li>Conecte a ação de um ataque carregado.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O fluxo reconhece a tecla mantida pelo tempo configurado.</p>
</div>

## Regras

- Precisa de entrada de teclado; não cria um botão de toque na tela.
- Soltar antes de completar o tempo não conclui a pressão longa.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Tecla está pressionada](./tecla-esta-pressionada) — Executa o próximo nó enquanto a tecla escolhida estiver pressionada.
- [Tecla foi pressionada](./tecla-foi-pressionada) — Executa uma vez quando a tecla passa de solta para pressionada.
- [Tecla foi solta](./tecla-foi-solta) — Executa uma vez quando a tecla escolhida é liberada.
- [Qualquer tecla foi pressionada](./qualquer-tecla-foi-pressionada) — Executa uma vez quando qualquer tecla compatível é pressionada.

<a class="node-back-link" href="./">← Ver todos os nós</a>
