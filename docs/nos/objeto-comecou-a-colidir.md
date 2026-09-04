---
title: "Objeto começou a colidir"
description: "Executa uma vez no instante em que os dois objetos encostam."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Colisões</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="condition-collision-started" icon="contract-outline" color="#FB923C" :size="26" /></span>
  <span>Objeto começou a colidir</span>
</h1>

<p class="node-purpose">Executa uma vez no instante em que os dois objetos encostam.</p>

## Para que serve

Executa uma vez no instante em que os dois objetos encostam.

## Campos

<div class="doc-field-list" style="--doc-field-color: #FB923C">
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

<div class="node-example" style="--node-page-color: #FB923C">
  <ol>
    <li>Configure a colisão nos dois objetos e selecione os participantes.</li>
    <li>Conecte uma reação de dano.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A reação acontece no começo do contato.</p>
</div>

## Regras

- Não permanece verdadeira durante todo o contato.
- Revise os formatos de colisão e as exceções de Ignorar colisão.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Objetos estão colidindo](./objetos-estao-colidindo) — Continua verdadeiro enquanto os dois objetos permanecem encostados.
- [Objeto terminou a colisão](./objeto-terminou-a-colisao) — Executa uma vez quando os dois objetos deixam de encostar.
- [Colidiu pelo lado](./colidiu-pelo-lado) — Executa uma vez quando o objeto colide pelo lado escolhido.

<a class="node-back-link" href="./">← Ver todos os nós</a>
