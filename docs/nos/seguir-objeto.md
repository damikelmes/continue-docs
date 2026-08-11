---
title: "Seguir objeto"
description: "Move um objeto até outro mantendo uma distância escolhida."
---

<div class="node-page-kicker" style="--node-page-color: #34D399">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #34D399">
  <span class="node-title-icon"><NodeIcon type="action-follow-object" icon="navigate-circle-outline" color="#34D399" :size="26" /></span>
  <span>Seguir objeto</span>
</h1>

<p class="node-purpose">Move um objeto até outro mantendo uma distância escolhida.</p>

## Para que serve

Cria perseguidores, companheiros e objetos que acompanham um alvo com velocidade e aceleração controladas.

## Campos

<div class="doc-field-list" style="--doc-field-color: #34D399">
  <div class="doc-field-item">
    <strong>Objeto de destino</strong>
    <p>Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer.</p>
  </div>
  <div class="doc-field-item">
    <strong>Objeto seguido</strong>
    <p>Objeto que será perseguido.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instância seguida</strong>
    <p>Número da instância usada como alvo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Direção</strong>
    <p>Qualquer direção, Somente X ou Somente Y.</p>
  </div>
  <div class="doc-field-item">
    <strong>Manter distância</strong>
    <p>Espaço mínimo que deve permanecer entre os objetos.</p>
  </div>
  <div class="doc-field-item">
    <strong>Velocidade</strong>
    <p>Velocidade máxima da aproximação.</p>
  </div>
  <div class="doc-field-item">
    <strong>Aceleração</strong>
    <p>Rapidez com que ganha velocidade.</p>
  </div>
  <div class="doc-field-item">
    <strong>Desaceleração</strong>
    <p>Rapidez com que freia perto do alvo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Sempre, Uma única vez, Quantidade ou Por tempo.</p>
  </div>
</div>

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
