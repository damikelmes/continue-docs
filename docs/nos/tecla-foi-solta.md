---
title: "Tecla foi solta"
description: "Executa uma vez quando a tecla escolhida é liberada."
---

<div class="node-page-kicker" style="--node-page-color: #38BDF8">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Teclado</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #38BDF8">
  <span class="node-title-icon"><NodeIcon type="condition-key-released" icon="arrow-up-circle-outline" color="#38BDF8" /></span>
  <span>Tecla foi solta</span>
</h1>

<p class="node-purpose">Executa uma vez quando a tecla escolhida é liberada.</p>

## Para que serve

Executa uma vez quando a tecla escolhida é liberada.

## Campos

<div class="doc-field-list" style="--doc-field-color: #38BDF8">
  <div class="doc-field-item">
    <strong>Tecla</strong>
    <p>Abra o seletor e escolha uma tecla compatível.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #38BDF8">
  <ol>
    <li>Escolha Espaço.</li>
    <li>Conecte uma ação que deve acontecer na soltura.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O fluxo dispara ao soltar a tecla.</p>
</div>

## Regras

- Precisa de entrada de teclado; não cria um botão de toque na tela.
- Não é uma condição que permanece verdadeira enquanto a tecla está solta.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Tecla está pressionada](./tecla-esta-pressionada) — Executa o próximo nó enquanto a tecla escolhida estiver pressionada.
- [Tecla foi pressionada](./tecla-foi-pressionada) — Executa uma vez quando a tecla passa de solta para pressionada.
- [Qualquer tecla foi pressionada](./qualquer-tecla-foi-pressionada) — Executa uma vez quando qualquer tecla compatível é pressionada.
- [Combinação de teclas](./combinacao-de-teclas) — Executa enquanto todas as teclas escolhidas estiverem pressionadas.

<a class="node-back-link" href="./">← Ver todos os nós</a>
