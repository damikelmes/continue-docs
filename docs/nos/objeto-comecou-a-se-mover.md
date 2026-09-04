---
title: "Objeto começou a se mover"
description: "Dispara uma vez quando o objeto sai do repouso."
---

<div class="node-page-kicker" style="--node-page-color: #34D399">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Estado do objeto</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #34D399">
  <span class="node-title-icon"><NodeIcon type="condition-object-started-moving" icon="play-circle" color="#34D399" :size="26" /></span>
  <span>Objeto começou a se mover</span>
</h1>

<p class="node-purpose">Dispara uma vez quando o objeto sai do repouso.</p>

## Para que serve

Dispara uma vez quando o objeto sai do repouso.

## Campos

<div class="doc-field-list" style="--doc-field-color: #34D399">
  <div class="doc-field-item">
    <strong>Objeto</strong>
    <p>Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #34D399">
  <ol>
    <li>Selecione Jogador e as instâncias desejadas.</li>
    <li>Conecte a animação Andando.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A ação dispara quando a instância sai do repouso.</p>
</div>

## Regras

- Detecta a mudança de estado, não cada atualização do movimento.
- O movimento é medido a partir das posições da instância.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Objeto está na cena](./objeto-esta-na-cena) — Verifica se existe uma instância do objeto na cena.
- [Objeto está no chão](./objeto-esta-no-chao) — Verifica se o objeto está apoiado em uma colisão.
- [Objeto está pulando](./objeto-esta-pulando) — Verifica se o objeto está na parte ascendente do pulo.
- [Objeto está caindo](./objeto-esta-caindo) — Verifica se o objeto está descendo pela gravidade.

<a class="node-back-link" href="./">← Ver todos os nós</a>
