---
title: "Flipar objeto"
description: "Espelha o objeto com uma animação de virada."
---

<div class="node-page-kicker" style="--node-page-color: #2DD4BF">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Aparência</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #2DD4BF">
  <span class="node-title-icon"><NodeIcon type="action-flip-object-animated" icon="swap-horizontal-outline" color="#2DD4BF" :size="26" /></span>
  <span>Flipar objeto</span>
</h1>

<p class="node-purpose">Espelha o objeto com uma animação de virada.</p>

## Para que serve

Cria uma transição visual ao virar o objeto na horizontal ou vertical.

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
    <strong>Direção</strong>
    <p>Horizontal ou vertical.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado</strong>
    <p>Alternar lados ou escolher um lado fixo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Tempo da animação</strong>
    <p>Duração total da virada em segundos.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Sempre, Uma única vez, Quantidade ou Por tempo.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #2DD4BF">
  <ol>
    <li>Escolha “Carta”.</li>
    <li>Use Horizontal, Alternar lados e duração 0,35 s.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A carta afina, vira e volta à largura normal mostrando o lado oposto.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- Use Inverter objeto quando não quiser animação.
- Uma nova virada pode substituir a animação anterior.
- A posição central permanece fixa.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Trocar sprite](./trocar-sprite) — Troca a imagem exibida pelo objeto.
- [Trocar animação](./trocar-animacao) — Reproduz uma animação de sprites pelo nome.
- [Reproduzir animação de propriedades](./reproduzir-animacao-de-propriedades) — Inicia ou continua uma animação de propriedades.
- [Recomeçar animação de propriedades](./recomecar-animacao-de-propriedades) — Reinicia uma animação de propriedades no primeiro quadro.

<a class="node-back-link" href="./">← Ver todos os nós</a>
