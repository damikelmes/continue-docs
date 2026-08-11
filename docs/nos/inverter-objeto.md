---
title: "Inverter objeto"
description: "Espelha o objeto instantaneamente."
---

<div class="node-page-kicker" style="--node-page-color: #34D399">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Aparência</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #34D399">
  <span class="node-title-icon"><NodeIcon type="action-flip-object" icon="swap-horizontal-outline" color="#34D399" :size="26" /></span>
  <span>Inverter objeto</span>
</h1>

<p class="node-purpose">Espelha o objeto instantaneamente.</p>

## Para que serve

Vira o visual na horizontal ou vertical sem animação, ideal para trocar rapidamente a direção de um personagem.

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
    <strong>Direção</strong>
    <p>Horizontal ou vertical.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado</strong>
    <p>Alternar lados ou escolher um lado fixo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Sempre, Uma única vez, Quantidade ou Por tempo.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #34D399">
  <ol>
    <li>Escolha “Jogador”.</li>
    <li>Use Horizontal e lado esquerdo quando ele se mover para a esquerda.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O sprite passa a olhar para a esquerda imediatamente.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- A mudança é instantânea.
- Alternar lados inverte o estado atual a cada execução.
- A posição central do objeto não muda.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Trocar sprite](./trocar-sprite) — Troca a imagem exibida pelo objeto.
- [Trocar animação](./trocar-animacao) — Reproduz uma animação de sprites pelo nome.
- [Reproduzir animação de propriedades](./reproduzir-animacao-de-propriedades) — Inicia ou continua uma animação de propriedades.
- [Recomeçar animação de propriedades](./recomecar-animacao-de-propriedades) — Reinicia uma animação de propriedades no primeiro quadro.

<a class="node-back-link" href="./">← Ver todos os nós</a>
