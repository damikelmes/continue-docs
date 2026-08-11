---
title: "Transicionar propriedade"
description: "Anima uma propriedade do valor atual até o valor final."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="action-transition-object-property" icon="pulse-outline" color="#A78BFA" :size="26" /></span>
  <span>Transicionar propriedade</span>
</h1>

<p class="node-purpose">Anima uma propriedade do valor atual até o valor final.</p>

## Para que serve

Cria uma mudança gradual sem precisar atualizar a propriedade em vários nós. Pode animar posição, tamanho, rotação, escala, transparência, ordem Z ou cor.

## Campos

<div class="doc-field-list" style="--doc-field-color: #A78BFA">
  <div class="doc-field-item">
    <strong>Objeto de destino</strong>
    <p>Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer.</p>
  </div>
  <div class="doc-field-item">
    <strong>Propriedade</strong>
    <p>Posição X, Posição Y, rotação, rotação do sprite, escala, largura, altura, transparência, ordem Z ou cor.</p>
  </div>
  <div class="doc-field-item">
    <strong>Valor final</strong>
    <p>Valor que a propriedade deve alcançar. A cor usa um seletor próprio.</p>
  </div>
  <div class="doc-field-item">
    <strong>Animação</strong>
    <p>Linear, Acelerar, Desacelerar, Suave, Antecipar, Ultrapassar, Quicar ou Elástico.</p>
  </div>
  <div class="doc-field-item">
    <strong>Velocidade</strong>
    <p>Rapidez usada para chegar ao valor final.</p>
  </div>
  <div class="doc-field-item">
    <strong>Aceleração</strong>
    <p>Quanto a velocidade pode aumentar durante a transição.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Sempre, Uma única vez, Quantidade ou Por tempo.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #A78BFA">
  <ol>
    <li>Escolha o objeto “Porta” e a propriedade Posição Y.</li>
    <li>Defina o valor final como 120 e a animação como Suave.</li>
    <li>Use Uma única vez quando o jogador pressionar o botão.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A porta parte da posição Y atual e desliza suavemente até Y = 120.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- O valor inicial é sempre o valor atual da propriedade no momento em que o nó começa.
- Uma nova transição na mesma propriedade substitui a transição anterior daquela instância.
- Para cor, o valor final é escolhido no seletor de cor e o campo numérico não aparece.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Chacoalhar objeto](./chacoalhar-objeto) — Sacode o visual do objeto sem mudar sua posição real.
- [Orbitar objeto](./orbitar-objeto) — Faz um objeto girar continuamente ao redor de outro.
- [Seguir objeto](./seguir-objeto) — Move um objeto até outro mantendo uma distância escolhida.
- [Mudar posição X](./mudar-posicao-x) — Altera apenas a posição horizontal do objeto.

<a class="node-back-link" href="./">← Ver todos os nós</a>
