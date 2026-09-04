---
title: "Combinação de teclas"
description: "Executa enquanto todas as teclas escolhidas estiverem pressionadas."
---

<div class="node-page-kicker" style="--node-page-color: #2DD4BF">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Teclado</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #2DD4BF">
  <span class="node-title-icon"><NodeIcon type="condition-key-combination" icon="git-merge-outline" color="#2DD4BF" :size="26" /></span>
  <span>Combinação de teclas</span>
</h1>

<p class="node-purpose">Executa enquanto todas as teclas escolhidas estiverem pressionadas.</p>

## Para que serve

Executa enquanto todas as teclas escolhidas estiverem pressionadas.

## Campos

<div class="doc-field-list" style="--doc-field-color: #2DD4BF">
  <div class="doc-field-item">
    <strong>Teclas</strong>
    <p>Selecione as teclas que devem estar pressionadas juntas.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #2DD4BF">
  <ol>
    <li>Selecione Shift e Seta para direita.</li>
    <li>Conecte um movimento mais rápido.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A regra funciona enquanto as teclas escolhidas estão abaixadas juntas.</p>
</div>

## Regras

- Precisa de entrada de teclado; não cria um botão de toque na tela.
- Combinação é simultânea, não uma sequência de apertos.
- Evite manter outro fluxo de movimento conflitante ativo ao mesmo tempo.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Tecla está pressionada](./tecla-esta-pressionada) — Executa o próximo nó enquanto a tecla escolhida estiver pressionada.
- [Tecla foi pressionada](./tecla-foi-pressionada) — Executa uma vez quando a tecla passa de solta para pressionada.
- [Tecla foi solta](./tecla-foi-solta) — Executa uma vez quando a tecla escolhida é liberada.
- [Qualquer tecla foi pressionada](./qualquer-tecla-foi-pressionada) — Executa uma vez quando qualquer tecla compatível é pressionada.

<a class="node-back-link" href="./">← Ver todos os nós</a>
