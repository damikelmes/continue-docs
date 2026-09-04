---
title: "Dedo sobre o objeto"
description: "Verifica se a posição atual do dedo está sobre o objeto."
---

<div class="node-page-kicker" style="--node-page-color: #FACC15">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Interação e toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FACC15">
  <span class="node-title-icon"><NodeIcon type="condition-finger-over-object" icon="locate-outline" color="#FACC15" /></span>
  <span>Dedo sobre o objeto</span>
</h1>

<p class="node-purpose">Verifica se a posição atual do dedo está sobre o objeto.</p>

## Para que serve

Detecta a sobreposição do toque com o objeto para arrastar, destacar ou mostrar informações.

## Campos

<div class="doc-field-list" style="--doc-field-color: #FACC15">
  <div class="doc-field-item">
    <strong>Objeto</strong>
    <p>Objeto que será verificado.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Qualquer instância, Todas as instâncias ou uma instância específica.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Ativado verifica a condição normal; desativado verifica o contrário.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #FACC15">
  <ol>
    <li>Escolha “Item”.</li>
    <li>Enquanto o dedo estiver sobre ele, altere a tonalidade para amarelo.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O item fica destacado enquanto o dedo estiver sobre sua área.</p>
</div>

## Regras

- Se nenhuma instância correspondente existir, a verificação do objeto será falsa, exceto na forma negativa.
- A verificação usa a posição atual do toque.
- Não exige que o toque tenha começado no objeto.
- Sem um toque ativo, a condição é falsa.
- Somente os nós conectados abaixo continuam quando o resultado escolhido é verdadeiro.
- Desative “Resultado esperado” para usar a forma negativa da condição.

## Nós relacionados

- [Objeto clicado](./objeto-clicado) — Detecta uma vez cada novo toque no objeto.
- [Objeto pressionado](./objeto-pressionado) — Permanece verdadeira enquanto o objeto estiver pressionado.
- [Objeto pressionado por um tempo](./objeto-pressionado-por-um-tempo) — Executa depois que o objeto permanece pressionado pelo tempo escolhido.
- [Objeto clicado X vezes](./objeto-clicado-x-vezes) — Executa quando o objeto recebe a quantidade de cliques escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
