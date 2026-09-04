---
title: "Orbitar objeto"
description: "Faz um objeto girar continuamente ao redor de outro."
---

<div class="node-page-kicker" style="--node-page-color: #38BDF8">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #38BDF8">
  <span class="node-title-icon"><NodeIcon type="action-orbit-object" icon="planet-outline" color="#38BDF8" /></span>
  <span>Orbitar objeto</span>
</h1>

<p class="node-purpose">Faz um objeto girar continuamente ao redor de outro.</p>

## Para que serve

Mantém um objeto em uma órbita circular ao redor de um objeto central, útil para satélites, escudos e inimigos orbitais.

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
    <strong>Objeto central</strong>
    <p>Objeto usado como centro da órbita.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instância central</strong>
    <p>Número da instância central que será seguida.</p>
  </div>
  <div class="doc-field-item">
    <strong>Raio da órbita</strong>
    <p>Distância entre o centro e o objeto que orbita.</p>
  </div>
  <div class="doc-field-item">
    <strong>Velocidade angular</strong>
    <p>Velocidade da volta em graus por segundo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Direção</strong>
    <p>Horário ou anti-horário.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Sempre, Uma única vez, Quantidade ou Por tempo.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #38BDF8">
  <ol>
    <li>Escolha “Escudo” como destino e “Jogador” como centro.</li>
    <li>Use raio 64 px, 120 °/s e direção horária.</li>
    <li>Deixe o modo em Sempre.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O escudo dá voltas contínuas a 64 px do jogador.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- O objeto central precisa existir; sem ele, a órbita não pode ser calculada.
- Use Sempre para manter a órbita durante o jogo.
- Raio 0 coloca o centro do objeto orbital sobre o centro do objeto seguido.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Transicionar propriedade](./transicionar-propriedade) — Anima uma propriedade do valor atual até o valor final.
- [Chacoalhar objeto](./chacoalhar-objeto) — Sacode o visual do objeto sem mudar sua posição real.
- [Seguir objeto](./seguir-objeto) — Move um objeto até outro mantendo uma distância escolhida.
- [Mudar posição X](./mudar-posicao-x) — Altera apenas a posição horizontal do objeto.

<a class="node-back-link" href="./">← Ver todos os nós</a>
