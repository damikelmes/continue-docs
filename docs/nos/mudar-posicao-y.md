---
title: "Mudar posição Y"
description: "Altera apenas a posição vertical do objeto."
---

<div class="node-page-kicker" style="--node-page-color: #38BDF8">
  <span class="node-page-icon"><NodeIcon type="action-set-object-y" icon="swap-vertical-outline" color="#38BDF8" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

# Mudar posição Y

<p class="node-purpose">Altera apenas a posição vertical do objeto.</p>

## Para que serve

Posiciona ou desloca um objeto no eixo Y sem alterar a posição X.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | O objeto que receberá a ação. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Operação** | Definir como, Somar, Subtrair, Multiplicar ou Dividir. |
| **Posição Y** | Valor numérico ou expressão aplicada no eixo Y. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #38BDF8">
  <ol>
    <li>Escolha “Marcador”.</li>
    <li>Use Definir como e a expressão CameraCenterY().</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O centro do marcador fica na posição Y do centro da câmera.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- A posição Y representa o centro real do objeto.
- Somar e Subtrair usam a posição atual como base.
- Divisão por zero não deve ser usada.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Transicionar propriedade](./transicionar-propriedade) — Anima uma propriedade do valor atual até o valor final.
- [Chacoalhar objeto](./chacoalhar-objeto) — Sacode o visual do objeto sem mudar sua posição real.
- [Orbitar objeto](./orbitar-objeto) — Faz um objeto girar continuamente ao redor de outro.
- [Seguir objeto](./seguir-objeto) — Move um objeto até outro mantendo uma distância escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
