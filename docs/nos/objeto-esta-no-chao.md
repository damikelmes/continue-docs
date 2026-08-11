---
title: "Objeto está no chão"
description: "Verifica se o objeto está apoiado em uma colisão."
---

<div class="node-page-kicker" style="--node-page-color: #4ADE80">
  <span class="node-page-icon"><NodeIcon type="condition-object-grounded" icon="remove-circle-outline" color="#4ADE80" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Estado do objeto</span>
  </span>
</div>

# Objeto está no chão

<p class="node-purpose">Verifica se o objeto está apoiado em uma colisão.</p>

## Para que serve

Permite pular, trocar animação e executar ações somente quando o corpo estiver no chão.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto** | Objeto que será verificado. |
| **Instâncias** | Todas as instâncias ou uma instância específica. |
| **Resultado esperado** | Ativado verifica a condição normal; desativado verifica o contrário. |

## Exemplo

<div class="node-example" style="--node-page-color: #4ADE80">
  <ol>
    <li>Escolha “Jogador”.</li>
    <li>Quando estiver no chão e o botão for clicado, execute Pular objeto.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O jogador só consegue iniciar o pulo quando está apoiado.</p>
</div>

## Regras

- Se nenhuma instância correspondente existir, a verificação do objeto será falsa, exceto na forma negativa.
- O objeto precisa usar Gravidade e Colisão.
- A detecção depende da superfície de colisão abaixo do objeto.
- A forma negativa verifica se ele não está no chão.
- Somente os nós conectados abaixo continuam quando o resultado escolhido é verdadeiro.
- Desative “Resultado esperado” para usar a forma negativa da condição.

## Nós relacionados

- [Objeto está na cena](./objeto-esta-na-cena) — Verifica se existe uma instância do objeto na cena.
- [Objeto está pulando](./objeto-esta-pulando) — Verifica se o objeto está na parte ascendente do pulo.
- [Objeto está caindo](./objeto-esta-caindo) — Verifica se o objeto está descendo pela gravidade.
- [Objeto está se movendo](./objeto-esta-se-movendo) — Verifica movimento em qualquer direção, eixo ou ângulo.

<a class="node-back-link" href="./">← Ver todos os nós</a>
