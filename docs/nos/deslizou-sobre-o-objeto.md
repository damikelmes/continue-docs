---
title: "Deslizou sobre o objeto"
description: "Executa uma vez quando um deslize na direção escolhida começa sobre o objeto."
---

<div class="node-page-kicker" style="--node-page-color: #22D3EE">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Interação e toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #22D3EE">
  <span class="node-title-icon"><NodeIcon type="condition-object-swiped" icon="swap-horizontal-outline" color="#22D3EE" /></span>
  <span>Deslizou sobre o objeto</span>
</h1>

<p class="node-purpose">Executa uma vez quando um deslize na direção escolhida começa sobre o objeto.</p>

## Para que serve

Executa uma vez quando um deslize na direção escolhida começa sobre o objeto.

## Campos

<div class="doc-field-list" style="--doc-field-color: #22D3EE">
  <div class="doc-field-item">
    <strong>Objeto</strong>
    <p>Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica.</p>
  </div>
  <div class="doc-field-item">
    <strong>Direção</strong>
    <p>Direção do deslize que deve ser reconhecido.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #22D3EE">
  <ol>
    <li>Escolha uma carta e a direção direita.</li>
    <li>Conecte uma ação para mover ou virar a carta.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O gesto que começa sobre a carta aciona o fluxo.</p>
</div>

## Regras

- O deslize precisa começar sobre o objeto.
- Use as expressões de toque para consultar deslocamento e direção.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Objeto clicado](./objeto-clicado) — Detecta uma vez cada novo toque no objeto.
- [Objeto pressionado](./objeto-pressionado) — Permanece verdadeira enquanto o objeto estiver pressionado.
- [Dedo sobre o objeto](./dedo-sobre-o-objeto) — Verifica se a posição atual do dedo está sobre o objeto.
- [Objeto pressionado por um tempo](./objeto-pressionado-por-um-tempo) — Executa depois que o objeto permanece pressionado pelo tempo escolhido.

<a class="node-back-link" href="./">← Ver todos os nós</a>
