---
title: "Tela foi tocada"
description: "Dispara uma vez quando um novo toque começa na tela."
---

<div class="node-page-kicker" style="--node-page-color: #F472B6">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Interação e toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #F472B6">
  <span class="node-title-icon"><NodeIcon type="condition-screen-touched" icon="finger-print" color="#F472B6" :size="26" /></span>
  <span>Tela foi tocada</span>
</h1>

<p class="node-purpose">Dispara uma vez quando um novo toque começa na tela.</p>

## Para que serve

Dispara uma vez quando um novo toque começa na tela.

## Campos

<div class="doc-field-list" style="--doc-field-color: #F472B6">
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #F472B6">
  <ol>
    <li>Adicione a condição no início de um fluxo.</li>
    <li>Conecte uma ação para reagir à interação na tela.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A ação responde ao início de um novo toque.</p>
</div>

## Regras

- Condição de momento: não se mantém ativa só por segurar.
- Não exige selecionar um objeto; use condições de objeto para limitar a área da interação.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Objeto clicado](./objeto-clicado) — Detecta uma vez cada novo toque no objeto.
- [Objeto pressionado](./objeto-pressionado) — Permanece verdadeira enquanto o objeto estiver pressionado.
- [Dedo sobre o objeto](./dedo-sobre-o-objeto) — Verifica se a posição atual do dedo está sobre o objeto.
- [Objeto pressionado por um tempo](./objeto-pressionado-por-um-tempo) — Executa depois que o objeto permanece pressionado pelo tempo escolhido.

<a class="node-back-link" href="./">← Ver todos os nós</a>
