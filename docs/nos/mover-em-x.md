---
title: "Mover em X"
description: "Move o objeto horizontalmente usando velocidade e aceleração."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-icon"><NodeIcon type="action-move-object-x" icon="speedometer-outline" color="#60A5FA" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

# Mover em X

<p class="node-purpose">Move o objeto horizontalmente usando velocidade e aceleração.</p>

## Para que serve

Cria movimento contínuo no eixo X com partida e parada graduais.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Velocidade** | Velocidade horizontal em pixels por segundo; o sinal define esquerda ou direita. |
| **Aceleração** | Quanto a velocidade aumenta por segundo. |
| **Desaceleração** | Quanto a velocidade diminui quando o movimento deixa de ser aplicado. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #60A5FA">
  <ol>
    <li>Escolha “Jogador”.</li>
    <li>Use velocidade 240 px/s, aceleração 1200 px/s² e desaceleração 1600 px/s².</li>
    <li>Mantenha o nó ativo enquanto o botão direito estiver pressionado.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O jogador acelera para a direita e freia suavemente ao soltar o botão.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- Valor positivo move para a direita; negativo move para a esquerda.
- Use Sempre enquanto a condição de movimento estiver ativa.
- A desaceleração evita uma parada instantânea.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Transicionar propriedade](./transicionar-propriedade) — Anima uma propriedade do valor atual até o valor final.
- [Chacoalhar objeto](./chacoalhar-objeto) — Sacode o visual do objeto sem mudar sua posição real.
- [Orbitar objeto](./orbitar-objeto) — Faz um objeto girar continuamente ao redor de outro.
- [Seguir objeto](./seguir-objeto) — Move um objeto até outro mantendo uma distância escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
