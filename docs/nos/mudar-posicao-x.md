---
title: "Mudar posição X"
description: "Altera apenas a posição horizontal do objeto."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-icon"><NodeIcon type="action-set-object-x" icon="swap-horizontal-outline" color="#60A5FA" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

# Mudar posição X

<p class="node-purpose">Altera apenas a posição horizontal do objeto.</p>

## Para que serve

Posiciona ou desloca um objeto no eixo X sem alterar a posição Y.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | O objeto que receberá a ação. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Operação** | Definir como, Somar, Subtrair, Multiplicar ou Dividir. |
| **Posição X** | Valor numérico ou expressão aplicada no eixo X. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #60A5FA">
  <ol>
    <li>Escolha “Jogador”.</li>
    <li>Use Definir como e a expressão CameraCenterX().</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O centro do jogador fica na posição X do centro da câmera.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- A posição X representa o centro real do objeto.
- Somar e Subtrair usam a posição atual como base.
- Divisão por zero não deve ser usada.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Transicionar propriedade](./transicionar-propriedade) — Anima uma propriedade do valor atual até o valor final.
- [Chacoalhar objeto](./chacoalhar-objeto) — Sacode o visual do objeto sem mudar sua posição real.
- [Orbitar objeto](./orbitar-objeto) — Faz um objeto girar continuamente ao redor de outro.
- [Seguir objeto](./seguir-objeto) — Move um objeto até outro mantendo uma distância escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
