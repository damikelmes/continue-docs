---
title: "Objeto está pulando"
description: "Verifica se o objeto está na parte ascendente do pulo."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-icon"><NodeIcon type="condition-object-jumping" icon="arrow-up-circle-outline" color="#A78BFA" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Estado do objeto</span>
  </span>
</div>

# Objeto está pulando

<p class="node-purpose">Verifica se o objeto está na parte ascendente do pulo.</p>

## Para que serve

Diferencia a subida do pulo para animações e regras de movimento.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto** | Objeto que será verificado. |
| **Instâncias** | Todas as instâncias ou uma instância específica. |
| **Resultado esperado** | Ativado verifica a condição normal; desativado verifica o contrário. |

## Exemplo

<div class="node-example" style="--node-page-color: #A78BFA">
  <ol>
    <li>Escolha “Jogador”.</li>
    <li>Enquanto estiver pulando, reproduza a animação “Subindo”.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A animação Subindo aparece apenas enquanto o jogador ganha altura.</p>
</div>

## Regras

- Se nenhuma instância correspondente existir, a verificação do objeto será falsa, exceto na forma negativa.
- O objeto precisa usar o comportamento Gravidade.
- Ao começar a cair, esta condição fica falsa.
- A forma negativa verifica se o objeto não está pulando.
- Somente os nós conectados abaixo continuam quando o resultado escolhido é verdadeiro.
- Desative “Resultado esperado” para usar a forma negativa da condição.

## Nós relacionados

- [Objeto está na cena](./objeto-esta-na-cena) — Verifica se existe uma instância do objeto na cena.
- [Objeto está no chão](./objeto-esta-no-chao) — Verifica se o objeto está apoiado em uma colisão.
- [Objeto está caindo](./objeto-esta-caindo) — Verifica se o objeto está descendo pela gravidade.
- [Objeto está se movendo](./objeto-esta-se-movendo) — Verifica movimento em qualquer direção, eixo ou ângulo.

<a class="node-back-link" href="./">← Ver todos os nós</a>
