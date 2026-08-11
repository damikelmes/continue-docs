---
title: "Mover em graus"
description: "Move o objeto na direção de um ângulo."
---

<div class="node-page-kicker" style="--node-page-color: #2DD4BF">
  <span class="node-page-icon"><NodeIcon type="action-move-object-angle" icon="compass-outline" color="#2DD4BF" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

# Mover em graus

<p class="node-purpose">Move o objeto na direção de um ângulo.</p>

## Para que serve

Cria movimento livre em qualquer direção usando ângulo, velocidade, aceleração e desaceleração.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | O objeto que receberá a ação. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Ângulo** | Direção do movimento em graus. |
| **Velocidade** | Velocidade em pixels por segundo. |
| **Aceleração** | Quanto a velocidade aumenta. |
| **Desaceleração** | Quanto a velocidade diminui. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #2DD4BF">
  <ol>
    <li>Escolha “Projétil”.</li>
    <li>Use ângulo 45°, velocidade 500 px/s e aceleração 0.</li>
    <li>Execute Sempre enquanto o projétil existir.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O projétil avança continuamente na diagonal de 45°.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- O ângulo controla a direção, não a rotação visual do sprite.
- Use Rotacionar objeto separadamente se o visual também precisar apontar para a direção.
- Use Sempre para manter o deslocamento.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Transicionar propriedade](./transicionar-propriedade) — Anima uma propriedade do valor atual até o valor final.
- [Chacoalhar objeto](./chacoalhar-objeto) — Sacode o visual do objeto sem mudar sua posição real.
- [Orbitar objeto](./orbitar-objeto) — Faz um objeto girar continuamente ao redor de outro.
- [Seguir objeto](./seguir-objeto) — Move um objeto até outro mantendo uma distância escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
