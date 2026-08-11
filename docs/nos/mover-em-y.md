---
title: "Mover em Y"
description: "Move o objeto verticalmente usando velocidade e aceleração."
---

<div class="node-page-kicker" style="--node-page-color: #38BDF8">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #38BDF8">
  <span class="node-title-icon"><NodeIcon type="action-move-object-y" icon="trending-up-outline" color="#38BDF8" :size="26" /></span>
  <span>Mover em Y</span>
</h1>

<p class="node-purpose">Move o objeto verticalmente usando velocidade e aceleração.</p>

## Para que serve

Cria movimento contínuo no eixo Y com partida e parada graduais.

## Campos

<div class="doc-field-list" style="--doc-field-color: #38BDF8">
  <div class="doc-field-item">
    <strong>Objeto de destino</strong>
    <p>Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer.</p>
  </div>
  <div class="doc-field-item">
    <strong>Velocidade</strong>
    <p>Velocidade vertical em pixels por segundo; o sinal define cima ou baixo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Aceleração</strong>
    <p>Quanto a velocidade aumenta por segundo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Desaceleração</strong>
    <p>Quanto a velocidade diminui quando o movimento deixa de ser aplicado.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Sempre, Uma única vez, Quantidade ou Por tempo.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #38BDF8">
  <ol>
    <li>Escolha “Elevador”.</li>
    <li>Use velocidade -120 px/s, aceleração 600 px/s² e desaceleração 600 px/s².</li>
    <li>Deixe ativo até chegar ao andar desejado.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O elevador sobe de forma gradual.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- No sistema da cena, valores negativos normalmente movem para cima e positivos para baixo.
- Use Sempre para um movimento contínuo.
- A gravidade pode somar movimento vertical ao mesmo objeto.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Transicionar propriedade](./transicionar-propriedade) — Anima uma propriedade do valor atual até o valor final.
- [Chacoalhar objeto](./chacoalhar-objeto) — Sacode o visual do objeto sem mudar sua posição real.
- [Orbitar objeto](./orbitar-objeto) — Faz um objeto girar continuamente ao redor de outro.
- [Seguir objeto](./seguir-objeto) — Move um objeto até outro mantendo uma distância escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
