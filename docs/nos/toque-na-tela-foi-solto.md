---
title: "Toque na tela foi solto"
description: "Dispara uma vez quando um dedo é retirado da tela."
---

<div class="node-page-kicker" style="--node-page-color: #38BDF8">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Interação e toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #38BDF8">
  <span class="node-title-icon"><NodeIcon type="condition-screen-released" icon="hand-left-outline" color="#38BDF8" /></span>
  <span>Toque na tela foi solto</span>
</h1>

<p class="node-purpose">Dispara uma vez quando um dedo é retirado da tela.</p>

## Para que serve

Dispara uma vez quando um dedo é retirado da tela.

## Campos

<div class="doc-field-list" style="--doc-field-color: #38BDF8">
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #38BDF8">
  <ol>
    <li>Adicione a condição no início de um fluxo.</li>
    <li>Conecte uma ação para reagir à interação na tela.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A ação responde quando um dedo é retirado.</p>
</div>

## Regras

- Condição de momento: ausência de toques por si só não é uma nova soltura.
- Não exige selecionar um objeto; use condições de objeto para limitar a área da interação.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Objeto clicado](./objeto-clicado) — Detecta uma vez cada novo toque no objeto.
- [Objeto pressionado](./objeto-pressionado) — Permanece verdadeira enquanto o objeto estiver pressionado.
- [Dedo sobre o objeto](./dedo-sobre-o-objeto) — Verifica se a posição atual do dedo está sobre o objeto.
- [Objeto pressionado por um tempo](./objeto-pressionado-por-um-tempo) — Executa depois que o objeto permanece pressionado pelo tempo escolhido.

<a class="node-back-link" href="./">← Ver todos os nós</a>
