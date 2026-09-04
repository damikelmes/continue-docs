---
title: "Tecla foi pressionada"
description: "Executa uma vez quando a tecla passa de solta para pressionada."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Teclado</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="condition-key-pressed" icon="arrow-down-circle-outline" color="#A78BFA" /></span>
  <span>Tecla foi pressionada</span>
</h1>

<p class="node-purpose">Executa uma vez quando a tecla passa de solta para pressionada.</p>

## Para que serve

Executa uma vez quando a tecla passa de solta para pressionada.

## Campos

<div class="doc-field-list" style="--doc-field-color: #A78BFA">
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

<div class="node-example" style="--node-page-color: #A78BFA">
  <ol>
    <li>Escolha Espaço.</li>
    <li>Conecte Pular objeto em um personagem com gravidade e colisão.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Cada novo aperto pode iniciar um pulo quando as regras do pulo permitirem.</p>
</div>

## Regras

- Precisa de entrada de teclado; não cria um botão de toque na tela.
- Manter a tecla abaixada não equivale a novos apertos.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Tecla está pressionada](./tecla-esta-pressionada) — Executa o próximo nó enquanto a tecla escolhida estiver pressionada.
- [Tecla foi solta](./tecla-foi-solta) — Executa uma vez quando a tecla escolhida é liberada.
- [Qualquer tecla foi pressionada](./qualquer-tecla-foi-pressionada) — Executa uma vez quando qualquer tecla compatível é pressionada.
- [Combinação de teclas](./combinacao-de-teclas) — Executa enquanto todas as teclas escolhidas estiverem pressionadas.

<a class="node-back-link" href="./">← Ver todos os nós</a>
