---
title: "Objeto está na câmera"
description: "Continua verdadeiro enquanto o objeto estiver na visão da câmera."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Câmera e tela</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="condition-object-in-camera" icon="scan-outline" color="#60A5FA" /></span>
  <span>Objeto está na câmera</span>
</h1>

<p class="node-purpose">Continua verdadeiro enquanto o objeto estiver na visão da câmera.</p>

## Para que serve

Continua verdadeiro enquanto o objeto estiver na visão da câmera.

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
    <strong>Verificação</strong>
    <p>Qualquer parte, Objeto inteiro ou Centro do objeto.</p>
  </div>
  <div class="doc-field-item">
    <strong>Margem da câmera</strong>
    <p>Amplia a área considerada, em pixels.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #60A5FA">
  <ol>
    <li>Escolha o objeto e a forma de verificar a área visível.</li>
    <li>Conecte um fluxo que só deve funcionar perto da tela.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O fluxo continua enquanto o objeto atende à verificação da câmera.</p>
</div>

## Regras

- É uma condição contínua.
- Estar dentro da câmera é diferente de ter a visibilidade ativada.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Objeto entrou na câmera](./objeto-entrou-na-camera) — Executa uma vez quando o objeto começa a aparecer na visão da câmera.
- [Objeto saiu da câmera](./objeto-saiu-da-camera) — Executa uma vez quando o objeto deixa a visão da câmera.

<a class="node-back-link" href="./">← Ver todos os nós</a>
