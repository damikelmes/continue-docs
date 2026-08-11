---
title: "Chacoalhar objeto"
description: "Sacode o visual do objeto sem mudar sua posição real."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="action-shake-object" icon="cube-outline" color="#FB923C" :size="26" /></span>
  <span>Chacoalhar objeto</span>
</h1>

<p class="node-purpose">Sacode o visual do objeto sem mudar sua posição real.</p>

## Para que serve

Adiciona impacto visual a dano, colisões, alertas ou interações. O deslocamento do tremor é apenas visual.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Intensidade** | Distância máxima do tremor em pixels. |
| **Tempo do tremor** | Duração do tremor quando o modo é Uma única vez. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #FB923C">
  <ol>
    <li>Escolha o objeto “Inimigo”.</li>
    <li>Use intensidade 5 px e duração 0,25 s após receber dano.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O inimigo vibra rapidamente, mas continua com a mesma posição X e Y lógica.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- Colisões e expressões de posição usam a posição real, não o deslocamento visual do tremor.
- No modo Sempre, o campo de duração não é usado e o tremor continua enquanto o fluxo estiver ativo.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Transicionar propriedade](./transicionar-propriedade) — Anima uma propriedade do valor atual até o valor final.
- [Orbitar objeto](./orbitar-objeto) — Faz um objeto girar continuamente ao redor de outro.
- [Seguir objeto](./seguir-objeto) — Move um objeto até outro mantendo uma distância escolhida.
- [Mudar posição X](./mudar-posicao-x) — Altera apenas a posição horizontal do objeto.

<a class="node-back-link" href="./">← Ver todos os nós</a>
