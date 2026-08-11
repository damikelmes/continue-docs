---
title: "Mudar largura"
description: "Muda a largura do objeto durante o jogo."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-icon"><NodeIcon type="action-set-object-width" icon="resize-outline" color="#A78BFA" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

# Mudar largura

<p class="node-purpose">Muda a largura do objeto durante o jogo.</p>

## Para que serve

Estica ou encolhe o objeto horizontalmente, atualizando também seu tamanho visual e de colisão.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | O objeto que receberá a ação. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Largura** | Nova largura em pixels ou uma expressão numérica. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #A78BFA">
  <ol>
    <li>Escolha “Plataforma”.</li>
    <li>Defina a largura como 320 px.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A plataforma passa a ocupar 320 px na horizontal.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- A largura deve ser maior que zero.
- O centro do objeto é preservado durante o redimensionamento.
- Sombras e colisões passam a usar a nova largura.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Transicionar propriedade](./transicionar-propriedade) — Anima uma propriedade do valor atual até o valor final.
- [Chacoalhar objeto](./chacoalhar-objeto) — Sacode o visual do objeto sem mudar sua posição real.
- [Orbitar objeto](./orbitar-objeto) — Faz um objeto girar continuamente ao redor de outro.
- [Seguir objeto](./seguir-objeto) — Move um objeto até outro mantendo uma distância escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
