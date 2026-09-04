---
title: "Objeto está visível"
description: "Continua verdadeira enquanto o objeto estiver visível."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Estado do objeto</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="condition-object-visible" icon="eye" color="#A78BFA" /></span>
  <span>Objeto está visível</span>
</h1>

<p class="node-purpose">Continua verdadeira enquanto o objeto estiver visível.</p>

## Para que serve

Continua verdadeira enquanto o objeto estiver visível.

## Campos

<div class="doc-field-list" style="--doc-field-color: #A78BFA">
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

<div class="node-example" style="--node-page-color: #A78BFA">
  <ol>
    <li>Selecione o objeto Indicador.</li>
    <li>Conecte uma regra que só deve continuar quando sua visibilidade está ligada.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O fluxo respeita o estado de visibilidade do objeto.</p>
</div>

## Regras

- Um objeto visível pode estar fora da câmera. Use as condições de câmera para verificar a área vista.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Objeto está na cena](./objeto-esta-na-cena) — Verifica se existe uma instância do objeto na cena.
- [Objeto está no chão](./objeto-esta-no-chao) — Verifica se o objeto está apoiado em uma colisão.
- [Objeto está pulando](./objeto-esta-pulando) — Verifica se o objeto está na parte ascendente do pulo.
- [Objeto está caindo](./objeto-esta-caindo) — Verifica se o objeto está descendo pela gravidade.

<a class="node-back-link" href="./">← Ver todos os nós</a>
