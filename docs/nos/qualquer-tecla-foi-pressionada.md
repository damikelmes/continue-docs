---
title: "Qualquer tecla foi pressionada"
description: "Executa uma vez quando qualquer tecla compatível é pressionada."
---

<div class="node-page-kicker" style="--node-page-color: #F59E0B">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Teclado</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #F59E0B">
  <span class="node-title-icon"><NodeIcon type="condition-any-key-pressed" icon="apps-outline" color="#F59E0B" :size="26" /></span>
  <span>Qualquer tecla foi pressionada</span>
</h1>

<p class="node-purpose">Executa uma vez quando qualquer tecla compatível é pressionada.</p>

## Para que serve

Executa uma vez quando qualquer tecla compatível é pressionada.

## Campos

<div class="doc-field-list" style="--doc-field-color: #F59E0B">
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #F59E0B">
  <ol>
    <li>Adicione a condição na tela inicial do jogo.</li>
    <li>Conecte a ação de iniciar a partida.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Um novo aperto de qualquer tecla compatível ativa o fluxo.</p>
</div>

## Regras

- Precisa de entrada de teclado; não cria um botão de toque na tela.
- Não possui campo para escolher uma tecla específica.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Tecla está pressionada](./tecla-esta-pressionada) — Executa o próximo nó enquanto a tecla escolhida estiver pressionada.
- [Tecla foi pressionada](./tecla-foi-pressionada) — Executa uma vez quando a tecla passa de solta para pressionada.
- [Tecla foi solta](./tecla-foi-solta) — Executa uma vez quando a tecla escolhida é liberada.
- [Combinação de teclas](./combinacao-de-teclas) — Executa enquanto todas as teclas escolhidas estiverem pressionadas.

<a class="node-back-link" href="./">← Ver todos os nós</a>
