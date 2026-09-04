---
title: "Objeto terminou a colisão"
description: "Executa uma vez quando os dois objetos deixam de encostar."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Colisões</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="condition-collision-ended" icon="expand-outline" color="#60A5FA" /></span>
  <span>Objeto terminou a colisão</span>
</h1>

<p class="node-purpose">Executa uma vez quando os dois objetos deixam de encostar.</p>

## Para que serve

Executa uma vez quando os dois objetos deixam de encostar.

## Campos

<div class="doc-field-list" style="--doc-field-color: #60A5FA">
  <div class="doc-field-item">
    <strong>Objeto</strong>
    <p>Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica.</p>
  </div>
  <div class="doc-field-item">
    <strong>Segundo objeto</strong>
    <p>Outro participante do contato.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #60A5FA">
  <ol>
    <li>Configure a colisão nos dois objetos e selecione os participantes.</li>
    <li>Conecte uma reação para quando o jogador sai da região.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O fluxo detecta a separação.</p>
</div>

## Regras

- Dispara quando um contato existente termina.
- Revise os formatos de colisão e as exceções de Ignorar colisão.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Objeto começou a colidir](./objeto-comecou-a-colidir) — Executa uma vez no instante em que os dois objetos encostam.
- [Objetos estão colidindo](./objetos-estao-colidindo) — Continua verdadeiro enquanto os dois objetos permanecem encostados.
- [Colidiu pelo lado](./colidiu-pelo-lado) — Executa uma vez quando o objeto colide pelo lado escolhido.

<a class="node-back-link" href="./">← Ver todos os nós</a>
