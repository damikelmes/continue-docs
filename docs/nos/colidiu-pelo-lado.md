---
title: "Colidiu pelo lado"
description: "Executa uma vez quando o objeto colide pelo lado escolhido."
---

<div class="node-page-kicker" style="--node-page-color: #FACC15">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Colisões</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FACC15">
  <span class="node-title-icon"><NodeIcon type="condition-collision-side" icon="move-outline" color="#FACC15" :size="26" /></span>
  <span>Colidiu pelo lado</span>
</h1>

<p class="node-purpose">Executa uma vez quando o objeto colide pelo lado escolhido.</p>

## Para que serve

Executa uma vez quando o objeto colide pelo lado escolhido.

## Campos

<div class="doc-field-list" style="--doc-field-color: #FACC15">
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
    <strong>Lado</strong>
    <p>Qualquer lado, Cima, Baixo, Esquerda ou Direita.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #FACC15">
  <ol>
    <li>Configure a colisão nos dois objetos e selecione os participantes.</li>
    <li>Escolha Cima para detectar contato na parte superior do primeiro objeto.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O fluxo reage ao início do contato pelo lado escolhido.</p>
</div>

## Regras

- O lado é relativo ao primeiro objeto, não ao segundo.
- Revise os formatos de colisão e as exceções de Ignorar colisão.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Objeto começou a colidir](./objeto-comecou-a-colidir) — Executa uma vez no instante em que os dois objetos encostam.
- [Objetos estão colidindo](./objetos-estao-colidindo) — Continua verdadeiro enquanto os dois objetos permanecem encostados.
- [Objeto terminou a colisão](./objeto-terminou-a-colisao) — Executa uma vez quando os dois objetos deixam de encostar.

<a class="node-back-link" href="./">← Ver todos os nós</a>
