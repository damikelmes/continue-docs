---
title: "Objeto pressionado por um tempo"
description: "Executa depois que o objeto permanece pressionado pelo tempo escolhido."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Interação e toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="condition-object-held" icon="timer-outline" color="#FB923C" /></span>
  <span>Objeto pressionado por um tempo</span>
</h1>

<p class="node-purpose">Executa depois que o objeto permanece pressionado pelo tempo escolhido.</p>

## Para que serve

Executa depois que o objeto permanece pressionado pelo tempo escolhido.

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
    <strong>Tempo pressionando</strong>
    <p>Tempo mínimo em segundos.</p>
  </div>
  <div class="doc-field-item">
    <strong>Opções do toque</strong>
    <p>Configure se aceita outros toques e se exige o dedo sobre o objeto.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #FB923C">
  <ol>
    <li>Escolha o botão Carregar e tempo de 1 segundo.</li>
    <li>Conecte a ação desejada depois da condição.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O fluxo passa quando a pressão atinge o tempo configurado.</p>
</div>

## Regras

- Soltar antes de completar o tempo não atende à condição.
- Confira as opções de manter o dedo sobre o objeto ao testar um deslize.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Objeto clicado](./objeto-clicado) — Detecta uma vez cada novo toque no objeto.
- [Objeto pressionado](./objeto-pressionado) — Permanece verdadeira enquanto o objeto estiver pressionado.
- [Dedo sobre o objeto](./dedo-sobre-o-objeto) — Verifica se a posição atual do dedo está sobre o objeto.
- [Objeto clicado X vezes](./objeto-clicado-x-vezes) — Executa quando o objeto recebe a quantidade de cliques escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
