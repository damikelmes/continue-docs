---
title: "Seguir objeto"
description: "Move um objeto até outro mantendo uma distância escolhida."
---

<div class="node-page-kicker" style="--node-page-color: #34D399">
  <span class="node-page-icon"><NodeIcon type="action-follow-object" icon="navigate-circle-outline" color="#34D399" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

# Seguir objeto

<p class="node-purpose">Move um objeto até outro mantendo uma distância escolhida.</p>

## Para que serve

Cria perseguidores, companheiros e objetos que acompanham um alvo com velocidade e aceleração controladas.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Objeto seguido** | Objeto que será perseguido. |
| **Instância seguida** | Número da instância usada como alvo. |
| **Direção** | Qualquer direção, Somente X ou Somente Y. |
| **Manter distância** | Espaço mínimo que deve permanecer entre os objetos. |
| **Velocidade** | Velocidade máxima da aproximação. |
| **Aceleração** | Rapidez com que ganha velocidade. |
| **Desaceleração** | Rapidez com que freia perto do alvo. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #34D399">
  <ol>
    <li>Escolha “Inimigo” como destino e “Jogador” como objeto seguido.</li>
    <li>Use Qualquer direção, distância 48 px e velocidade 240 px/s.</li>
    <li>Deixe o modo em Sempre.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O inimigo se aproxima e para mantendo 48 px de distância do jogador.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- O alvo precisa existir na cena.
- Use Sempre para recalcular a posição do alvo a cada quadro.
- Somente X preserva o Y atual; Somente Y preserva o X atual.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Transicionar propriedade](./transicionar-propriedade) — Anima uma propriedade do valor atual até o valor final.
- [Chacoalhar objeto](./chacoalhar-objeto) — Sacode o visual do objeto sem mudar sua posição real.
- [Orbitar objeto](./orbitar-objeto) — Faz um objeto girar continuamente ao redor de outro.
- [Mudar posição X](./mudar-posicao-x) — Altera apenas a posição horizontal do objeto.

<a class="node-back-link" href="./">← Ver todos os nós</a>
