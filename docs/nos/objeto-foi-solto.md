---
title: "Objeto foi solto"
description: "Executa uma vez quando o dedo que pressionou o objeto é levantado."
---

<div class="node-page-kicker" style="--node-page-color: #F472B6">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Interação e toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #F472B6">
  <span class="node-title-icon"><NodeIcon type="condition-object-released" icon="hand-left-outline" color="#F472B6" :size="26" /></span>
  <span>Objeto foi solto</span>
</h1>

<p class="node-purpose">Executa uma vez quando o dedo que pressionou o objeto é levantado.</p>

## Para que serve

Executa uma vez quando o dedo que pressionou o objeto é levantado.

## Campos

<div class="doc-field-list" style="--doc-field-color: #F472B6">
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

<div class="node-example" style="--node-page-color: #F472B6">
  <ol>
    <li>Escolha o botão de uma interação.</li>
    <li>Conecte a ação que deve acontecer ao levantar o dedo.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A ação é disparada na soltura.</p>
</div>

## Regras

- O toque precisa estar associado ao objeto; não é apenas a ausência de um dedo sobre ele.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Objeto clicado](./objeto-clicado) — Detecta uma vez cada novo toque no objeto.
- [Objeto pressionado](./objeto-pressionado) — Permanece verdadeira enquanto o objeto estiver pressionado.
- [Dedo sobre o objeto](./dedo-sobre-o-objeto) — Verifica se a posição atual do dedo está sobre o objeto.
- [Objeto pressionado por um tempo](./objeto-pressionado-por-um-tempo) — Executa depois que o objeto permanece pressionado pelo tempo escolhido.

<a class="node-back-link" href="./">← Ver todos os nós</a>
