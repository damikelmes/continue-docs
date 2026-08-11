---
title: "Mover em graus"
description: "Move o objeto na direção de um ângulo."
---

<div class="node-page-kicker" style="--node-page-color: #2DD4BF">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #2DD4BF">
  <span class="node-title-icon"><NodeIcon type="action-move-object-angle" icon="compass-outline" color="#2DD4BF" :size="26" /></span>
  <span>Mover em graus</span>
</h1>

<p class="node-purpose">Move o objeto na direção de um ângulo.</p>

## Para que serve

Cria movimento livre em qualquer direção usando ângulo, velocidade, aceleração e desaceleração.

## Campos

<div class="doc-field-list" style="--doc-field-color: #2DD4BF">
  <div class="doc-field-item">
    <strong>Objeto de destino</strong>
    <p>Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer.</p>
  </div>
  <div class="doc-field-item">
    <strong>Ângulo</strong>
    <p>Direção do movimento em graus.</p>
  </div>
  <div class="doc-field-item">
    <strong>Velocidade</strong>
    <p>Velocidade em pixels por segundo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Aceleração</strong>
    <p>Quanto a velocidade aumenta.</p>
  </div>
  <div class="doc-field-item">
    <strong>Desaceleração</strong>
    <p>Quanto a velocidade diminui.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Sempre, Uma única vez, Quantidade ou Por tempo.</p>
  </div>
</div>

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
