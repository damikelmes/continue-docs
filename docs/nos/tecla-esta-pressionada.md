---
title: "Tecla está pressionada"
description: "Executa o próximo nó enquanto a tecla escolhida estiver pressionada."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Teclado</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="condition-key-down" icon="keypad-outline" color="#60A5FA" /></span>
  <span>Tecla está pressionada</span>
</h1>

<p class="node-purpose">Executa o próximo nó enquanto a tecla escolhida estiver pressionada.</p>

## Para que serve

Executa o próximo nó enquanto a tecla escolhida estiver pressionada.

## Campos

<div class="doc-field-list" style="--doc-field-color: #60A5FA">
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

<div class="node-example" style="--node-page-color: #60A5FA">
  <ol>
    <li>Escolha Seta para direita.</li>
    <li>Conecte Mover em X com velocidade positiva.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O movimento continua enquanto a tecla está abaixada.</p>
</div>

## Regras

- Precisa de entrada de teclado; não cria um botão de toque na tela.
- Para uma ação de uma só vez por aperto, use Tecla foi pressionada.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Tecla foi pressionada](./tecla-foi-pressionada) — Executa uma vez quando a tecla passa de solta para pressionada.
- [Tecla foi solta](./tecla-foi-solta) — Executa uma vez quando a tecla escolhida é liberada.
- [Qualquer tecla foi pressionada](./qualquer-tecla-foi-pressionada) — Executa uma vez quando qualquer tecla compatível é pressionada.
- [Combinação de teclas](./combinacao-de-teclas) — Executa enquanto todas as teclas escolhidas estiverem pressionadas.

<a class="node-back-link" href="./">← Ver todos os nós</a>
