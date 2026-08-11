---
title: "Objeto está se movendo"
description: "Verifica movimento em qualquer direção, eixo ou ângulo."
---

<div class="node-page-kicker" style="--node-page-color: #2DD4BF">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Estado do objeto</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #2DD4BF">
  <span class="node-title-icon"><NodeIcon type="condition-object-moving" icon="trending-up-outline" color="#2DD4BF" :size="26" /></span>
  <span>Objeto está se movendo</span>
</h1>

<p class="node-purpose">Verifica movimento em qualquer direção, eixo ou ângulo.</p>

## Para que serve

Detecta se a instância está se deslocando e permite filtrar direção e sinal do movimento.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto** | Objeto que será verificado. |
| **Instâncias** | Todas as instâncias ou uma instância específica. |
| **Modo** | Qualquer direção, eixo X, eixo Y ou ângulo. |
| **Sinal** | Qualquer, positivo ou negativo. |
| **Ângulo** | Direção usada quando o modo por ângulo estiver selecionado. |
| **Resultado esperado** | Ativado verifica a condição normal; desativado verifica o contrário. |

## Exemplo

<div class="node-example" style="--node-page-color: #2DD4BF">
  <ol>
    <li>Escolha “Jogador”.</li>
    <li>Use eixo X e qualquer sinal.</li>
    <li>Conecte a animação “Correndo”.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A animação aparece quando o jogador se move para a esquerda ou direita.</p>
</div>

## Regras

- Se nenhuma instância correspondente existir, a verificação do objeto será falsa, exceto na forma negativa.
- O filtro de sinal diferencia os dois sentidos do eixo.
- No modo por ângulo, configure o ângulo desejado.
- A forma negativa verifica ausência do movimento escolhido.
- Somente os nós conectados abaixo continuam quando o resultado escolhido é verdadeiro.
- Desative “Resultado esperado” para usar a forma negativa da condição.

## Nós relacionados

- [Objeto está na cena](./objeto-esta-na-cena) — Verifica se existe uma instância do objeto na cena.
- [Objeto está no chão](./objeto-esta-no-chao) — Verifica se o objeto está apoiado em uma colisão.
- [Objeto está pulando](./objeto-esta-pulando) — Verifica se o objeto está na parte ascendente do pulo.
- [Objeto está caindo](./objeto-esta-caindo) — Verifica se o objeto está descendo pela gravidade.

<a class="node-back-link" href="./">← Ver todos os nós</a>
