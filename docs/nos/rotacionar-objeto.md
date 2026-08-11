---
title: "Rotacionar objeto"
description: "Altera a rotação completa do objeto."
---

<div class="node-page-kicker" style="--node-page-color: #F59E0B">
  <span class="node-page-icon"><NodeIcon type="action-rotate-object" icon="refresh-outline" color="#F59E0B" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

# Rotacionar objeto

<p class="node-purpose">Altera a rotação completa do objeto.</p>

## Para que serve

Gira o objeto, incluindo seu visual e as transformações que usam sua rotação.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Rotação** | Ângulo em graus ou expressão numérica. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #F59E0B">
  <ol>
    <li>Escolha “Ponte”.</li>
    <li>Defina a rotação como 90°.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A ponte gira até ficar na vertical.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- A rotação acontece ao redor do centro do objeto.
- Use Rotacionar sprite quando quiser girar somente o visual.
- Objetos físicos podem ter a rotação controlada pelo comportamento de gravidade.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Transicionar propriedade](./transicionar-propriedade) — Anima uma propriedade do valor atual até o valor final.
- [Chacoalhar objeto](./chacoalhar-objeto) — Sacode o visual do objeto sem mudar sua posição real.
- [Orbitar objeto](./orbitar-objeto) — Faz um objeto girar continuamente ao redor de outro.
- [Seguir objeto](./seguir-objeto) — Move um objeto até outro mantendo uma distância escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
