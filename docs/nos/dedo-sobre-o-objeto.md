---
title: "Dedo sobre o objeto"
description: "Verifica se a posição atual do dedo está sobre o objeto."
---

<div class="node-page-kicker" style="--node-page-color: #FACC15">
  <span class="node-page-icon"><NodeIcon type="condition-finger-over-object" icon="locate-outline" color="#FACC15" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Interação e toque</span>
  </span>
</div>

# Dedo sobre o objeto

<p class="node-purpose">Verifica se a posição atual do dedo está sobre o objeto.</p>

## Para que serve

Detecta a sobreposição do toque com o objeto para arrastar, destacar ou mostrar informações.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto** | Objeto que será verificado. |
| **Instâncias** | Todas as instâncias ou uma instância específica. |
| **Resultado esperado** | Ativado verifica a condição normal; desativado verifica o contrário. |

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

<a class="node-back-link" href="./">← Ver todos os nós</a>
