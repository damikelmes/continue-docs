---
title: "Emissão de partículas terminou"
description: "Detecta quando os emissores da instância terminam e não restam partículas."
---

<div class="node-page-kicker" style="--node-page-color: #38BDF8">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Estado do objeto</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #38BDF8">
  <span class="node-title-icon"><NodeIcon type="condition-particle-emission-finished" icon="checkmark-circle" color="#38BDF8" :size="26" /></span>
  <span>Emissão de partículas terminou</span>
</h1>

<p class="node-purpose">Detecta quando os emissores da instância terminam e não restam partículas.</p>

## Para que serve

Reconhece o fim completo dos efeitos da instância: sem emissão ativa, sem disparos pendentes e sem partículas vivas. É útil para remover um objeto de efeito depois que ele desaparece.

## Campos

<div class="doc-field-list" style="--doc-field-color: #38BDF8">
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

<div class="node-example" style="--node-page-color: #38BDF8">
  <ol>
    <li>Configure um efeito finito no objeto Explosão.</li>
    <li>Escolha Explosão nesta condição e conecte Excluir objeto.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A instância pode ser removida depois que seus efeitos terminam por completo.</p>
</div>

## Regras

- Todos os emissores da instância precisam ter terminado.
- Parar novas partículas não conclui imediatamente a condição se ainda houver partículas vivas.
- Um emissor contínuo mantido ativo impede esse término.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Objeto está na cena](./objeto-esta-na-cena) — Verifica se existe uma instância do objeto na cena.
- [Objeto está no chão](./objeto-esta-no-chao) — Verifica se o objeto está apoiado em uma colisão.
- [Objeto está pulando](./objeto-esta-pulando) — Verifica se o objeto está na parte ascendente do pulo.
- [Objeto está caindo](./objeto-esta-caindo) — Verifica se o objeto está descendo pela gravidade.

<a class="node-back-link" href="./">← Ver todos os nós</a>
