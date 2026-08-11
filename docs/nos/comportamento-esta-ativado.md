---
title: "Comportamento está ativado"
description: "Verifica o estado de um comportamento."
---

<div class="node-page-kicker" style="--node-page-color: #4ADE80">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Estado do objeto</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #4ADE80">
  <span class="node-title-icon"><NodeIcon type="condition-behavior-enabled" icon="checkmark-circle-outline" color="#4ADE80" :size="26" /></span>
  <span>Comportamento está ativado</span>
</h1>

<p class="node-purpose">Verifica o estado de um comportamento.</p>

## Para que serve

Controla o fluxo conforme um comportamento do objeto esteja ligado ou desligado.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto** | Objeto que será verificado. |
| **Instâncias** | Todas as instâncias ou uma instância específica. |
| **Comportamento** | Comportamento que será verificado. |
| **Resultado esperado** | Ativado verifica a condição normal; desativado verifica o contrário. |

## Exemplo

<div class="node-example" style="--node-page-color: #4ADE80">
  <ol>
    <li>Escolha “Jogador” e o comportamento Gravidade.</li>
    <li>Quando estiver ativado, permita o pulo.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O fluxo de pulo só funciona quando a gravidade está ligada.</p>
</div>

## Regras

- Se nenhuma instância correspondente existir, a verificação do objeto será falsa, exceto na forma negativa.
- O comportamento precisa estar adicionado ao objeto.
- A forma negativa verifica “Comportamento está desativado”.
- A condição lê o estado atual de cada instância selecionada.
- Somente os nós conectados abaixo continuam quando o resultado escolhido é verdadeiro.
- Desative “Resultado esperado” para usar a forma negativa da condição.

## Nós relacionados

- [Objeto está na cena](./objeto-esta-na-cena) — Verifica se existe uma instância do objeto na cena.
- [Objeto está no chão](./objeto-esta-no-chao) — Verifica se o objeto está apoiado em uma colisão.
- [Objeto está pulando](./objeto-esta-pulando) — Verifica se o objeto está na parte ascendente do pulo.
- [Objeto está caindo](./objeto-esta-caindo) — Verifica se o objeto está descendo pela gravidade.

<a class="node-back-link" href="./">← Ver todos os nós</a>
