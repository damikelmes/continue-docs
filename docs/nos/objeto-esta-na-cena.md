---
title: "Objeto está na cena"
description: "Verifica se existe uma instância do objeto na cena."
---

<div class="node-page-kicker" style="--node-page-color: #FACC15">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Estado do objeto</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FACC15">
  <span class="node-title-icon"><NodeIcon type="condition-object-exists" icon="git-branch" color="#FACC15" :size="26" /></span>
  <span>Objeto está na cena</span>
</h1>

<p class="node-purpose">Verifica se existe uma instância do objeto na cena.</p>

## Para que serve

Controla o fluxo de acordo com a existência de um objeto ou instância específica.

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
    <li>Escolha “Chefe”.</li>
    <li>Conecte a música de batalha enquanto ele estiver na cena.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A música continua enquanto existir uma instância do chefe.</p>
</div>

## Regras

- Se nenhuma instância correspondente existir, a verificação do objeto será falsa, exceto na forma negativa.
- Na opção Todas as instâncias, basta uma instância existir.
- A forma negativa verifica “Objeto não está na cena”.
- Instâncias excluídas deixam de contar imediatamente.
- Somente os nós conectados abaixo continuam quando o resultado escolhido é verdadeiro.
- Desative “Resultado esperado” para usar a forma negativa da condição.

## Nós relacionados

- [Objeto está no chão](./objeto-esta-no-chao) — Verifica se o objeto está apoiado em uma colisão.
- [Objeto está pulando](./objeto-esta-pulando) — Verifica se o objeto está na parte ascendente do pulo.
- [Objeto está caindo](./objeto-esta-caindo) — Verifica se o objeto está descendo pela gravidade.
- [Objeto está se movendo](./objeto-esta-se-movendo) — Verifica movimento em qualquer direção, eixo ou ângulo.

<a class="node-back-link" href="./">← Ver todos os nós</a>
