---
title: "Mudar posição Y"
description: "Altera apenas a posição vertical do objeto."
---

<div class="node-page-kicker" style="--node-page-color: #38BDF8">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #38BDF8">
  <span class="node-title-icon"><NodeIcon type="action-set-object-y" icon="swap-vertical-outline" color="#38BDF8" /></span>
  <span>Mudar posição Y</span>
</h1>

<p class="node-purpose">Altera apenas a posição vertical do objeto.</p>

## Para que serve

Posiciona ou desloca um objeto no eixo Y sem alterar a posição X.

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
    <strong>Operação</strong>
    <p>Definir como, Somar, Subtrair, Multiplicar ou Dividir.</p>
  </div>
  <div class="doc-field-item">
    <strong>Posição Y</strong>
    <p>Valor numérico ou expressão aplicada no eixo Y.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Sempre, Uma única vez, Quantidade ou Por tempo.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #38BDF8">
  <ol>
    <li>Escolha “Marcador”.</li>
    <li>Use Definir como e a expressão camera.y.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O centro do marcador fica na posição Y do centro da câmera.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- Ao usar camera.y com Definir como, o centro vertical do objeto é alinhado ao centro da câmera.
- Com outros valores, a ação altera a propriedade Y armazenada pelo objeto.
- Somar e Subtrair usam a posição atual como base.
- Divisão por zero não deve ser usada.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Transicionar propriedade](./transicionar-propriedade) — Anima uma propriedade do valor atual até o valor final.
- [Chacoalhar objeto](./chacoalhar-objeto) — Sacode o visual do objeto sem mudar sua posição real.
- [Orbitar objeto](./orbitar-objeto) — Faz um objeto girar continuamente ao redor de outro.
- [Seguir objeto](./seguir-objeto) — Move um objeto até outro mantendo uma distância escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
