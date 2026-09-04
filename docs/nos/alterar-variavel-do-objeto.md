---
title: "Alterar variável do objeto"
description: "Muda uma variável separadamente em cada instância escolhida."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Variáveis</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="action-change-object-variable" icon="calculator-outline" color="#60A5FA" /></span>
  <span>Alterar variável do objeto</span>
</h1>

<p class="node-purpose">Muda uma variável separadamente em cada instância escolhida.</p>

## Para que serve

Muda uma variável separadamente em cada instância escolhida.

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
    <strong>Variável</strong>
    <p>Escolha uma variável já cadastrada.</p>
  </div>
  <div class="doc-field-item">
    <strong>Operação</strong>
    <p>Depende do tipo: operações numéricas, edição de texto ou verdadeiro/falso. Restaurar volta ao valor inicial.</p>
  </div>
  <div class="doc-field-item">
    <strong>Valor</strong>
    <p>Número, expressão ou texto, quando a operação precisar de um valor.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #60A5FA">
  <ol>
    <li>Crie Vida do tipo Número com valor 100 em Variáveis do objeto.</li>
    <li>Escolha a instância de Jogador, Vida, Subtrair e 10.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Só as instâncias selecionadas perdem 10 de vida.</p>
</div>

## Regras

- Adicione antes o comportamento Variáveis do objeto.
- Na seleção de vários objetos, a variável precisa ter nome e tipo compatíveis em todos.
- Não divida por zero.

## Nós relacionados

- [Alterar variável global](./alterar-variavel-global) — Muda um valor compartilhado entre todas as cenas do jogo.

<a class="node-back-link" href="./">← Ver todos os nós</a>
