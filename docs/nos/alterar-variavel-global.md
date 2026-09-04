---
title: "Alterar variável global"
description: "Muda um valor compartilhado entre todas as cenas do jogo."
---

<div class="node-page-kicker" style="--node-page-color: #F4C54B">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Variáveis</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #F4C54B">
  <span class="node-title-icon"><NodeIcon type="action-change-global-variable" icon="globe-outline" color="#F4C54B" :size="26" /></span>
  <span>Alterar variável global</span>
</h1>

<p class="node-purpose">Muda um valor compartilhado entre todas as cenas do jogo.</p>

## Para que serve

Muda um valor compartilhado entre todas as cenas do jogo.

## Campos

<div class="doc-field-list" style="--doc-field-color: #F4C54B">
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

<div class="node-example" style="--node-page-color: #F4C54B">
  <ol>
    <li>Crie Pontos do tipo Número nas Variáveis globais.</li>
    <li>Escolha Pontos, Somar e 50 ao coletar uma moeda.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A pontuação compartilhada recebe mais 50.</p>
</div>

## Regras

- A variável deve existir no projeto.
- Global compartilha dados entre cenas durante o jogo; não é um salvamento permanente no aparelho.

## Nós relacionados

- [Alterar variável do objeto](./alterar-variavel-do-objeto) — Muda uma variável separadamente em cada instância escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
