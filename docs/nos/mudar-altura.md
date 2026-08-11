---
title: "Mudar altura"
description: "Muda a altura do objeto durante o jogo."
---

<div class="node-page-kicker" style="--node-page-color: #C084FC">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #C084FC">
  <span class="node-title-icon"><NodeIcon type="action-set-object-height" icon="resize-outline" color="#C084FC" :size="26" /></span>
  <span>Mudar altura</span>
</h1>

<p class="node-purpose">Muda a altura do objeto durante o jogo.</p>

## Para que serve

Estica ou encolhe o objeto verticalmente, atualizando também seu tamanho visual e de colisão.

## Campos

<div class="doc-field-list" style="--doc-field-color: #C084FC">
  <div class="doc-field-item">
    <strong>Objeto de destino</strong>
    <p>Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer.</p>
  </div>
  <div class="doc-field-item">
    <strong>Altura</strong>
    <p>Nova altura em pixels ou uma expressão numérica.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Sempre, Uma única vez, Quantidade ou Por tempo.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #C084FC">
  <ol>
    <li>Escolha “Parede”.</li>
    <li>Defina a altura como 180 px.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A parede passa a ocupar 180 px na vertical.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- A altura deve ser maior que zero.
- O centro do objeto é preservado durante o redimensionamento.
- Sombras e colisões passam a usar a nova altura.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Transicionar propriedade](./transicionar-propriedade) — Anima uma propriedade do valor atual até o valor final.
- [Chacoalhar objeto](./chacoalhar-objeto) — Sacode o visual do objeto sem mudar sua posição real.
- [Orbitar objeto](./orbitar-objeto) — Faz um objeto girar continuamente ao redor de outro.
- [Seguir objeto](./seguir-objeto) — Move um objeto até outro mantendo uma distância escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
