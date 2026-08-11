---
title: "Centralizar câmera"
description: "Coloca o centro da câmera exatamente no centro do objeto."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Câmera</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="action-center-camera-on-object" icon="videocam" color="#60A5FA" :size="26" /></span>
  <span>Centralizar câmera</span>
</h1>

<p class="node-purpose">Coloca o centro da câmera exatamente no centro do objeto.</p>

## Para que serve

Faz a câmera usar a posição X e Y central do objeto como alvo, como o acompanhamento direto de objeto em outras engines.

## Campos

<div class="doc-field-list" style="--doc-field-color: #60A5FA">
  <div class="doc-field-item">
    <strong>Objeto</strong>
    <p>Objeto usado como centro da câmera.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Sempre, Uma única vez, Quantidade ou Por tempo.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #60A5FA">
  <ol>
    <li>Escolha “Jogador”.</li>
    <li>Deixe o modo em Sempre para acompanhar o movimento.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O centro X e Y da câmera coincide com o centro X e Y do jogador.</p>
</div>

## Regras

- Use Sempre para seguir um objeto em movimento; Uma única vez apenas reposiciona a câmera naquele instante.
- A origem usada é o centro real do objeto.
- Zoom e tremor visual não mudam a coordenada lógica do centro da câmera.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Câmera suave](./camera-suave) — Faz a câmera acompanhar um objeto com suavidade.
- [Mudar posição X da câmera](./mudar-posicao-x-da-camera) — Altera apenas o centro horizontal da câmera.
- [Mudar posição Y da câmera](./mudar-posicao-y-da-camera) — Altera apenas o centro vertical da câmera.
- [Chacoalhar câmera](./chacoalhar-camera) — Sacode a visão da cena sem mudar o centro lógico da câmera.

<a class="node-back-link" href="./">← Ver todos os nós</a>
