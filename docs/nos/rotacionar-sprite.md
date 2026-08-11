---
title: "Rotacionar sprite"
description: "Gira somente o sprite do objeto."
---

<div class="node-page-kicker" style="--node-page-color: #FB7185">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB7185">
  <span class="node-title-icon"><NodeIcon type="action-rotate-sprite" icon="sync-outline" color="#FB7185" :size="26" /></span>
  <span>Rotacionar sprite</span>
</h1>

<p class="node-purpose">Gira somente o sprite do objeto.</p>

## Para que serve

Muda a orientação visual sem alterar a rotação lógica do objeto.

## Campos

<div class="doc-field-list" style="--doc-field-color: #FB7185">
  <div class="doc-field-item">
    <strong>Objeto de destino</strong>
    <p>Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer.</p>
  </div>
  <div class="doc-field-item">
    <strong>Rotação</strong>
    <p>Ângulo aplicado ao sprite em graus.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Sempre, Uma única vez, Quantidade ou Por tempo.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #FB7185">
  <ol>
    <li>Escolha “Jogador”.</li>
    <li>Defina a rotação do sprite como 180°.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O desenho do jogador fica invertido, mantendo a rotação lógica original.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- A colisão e a rotação do objeto não são alteradas.
- A rotação parte do centro do sprite.
- Pode ser combinada com a rotação do objeto.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Transicionar propriedade](./transicionar-propriedade) — Anima uma propriedade do valor atual até o valor final.
- [Chacoalhar objeto](./chacoalhar-objeto) — Sacode o visual do objeto sem mudar sua posição real.
- [Orbitar objeto](./orbitar-objeto) — Faz um objeto girar continuamente ao redor de outro.
- [Seguir objeto](./seguir-objeto) — Move um objeto até outro mantendo uma distância escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
