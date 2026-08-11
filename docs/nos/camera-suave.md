---
title: "Câmera suave"
description: "Faz a câmera acompanhar um objeto com suavidade."
---

<div class="node-page-kicker" style="--node-page-color: #22D3EE">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Câmera</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #22D3EE">
  <span class="node-title-icon"><NodeIcon type="action-follow-camera-on-object" icon="navigate-circle-outline" color="#22D3EE" :size="26" /></span>
  <span>Câmera suave</span>
</h1>

<p class="node-purpose">Faz a câmera acompanhar um objeto com suavidade.</p>

## Para que serve

Move o centro da câmera em direção ao centro real do objeto usando velocidades separadas nos eixos X e Y.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto** | Objeto que a câmera deve seguir. |
| **Velocidade X** | Rapidez do acompanhamento horizontal. |
| **Velocidade Y** | Rapidez do acompanhamento vertical. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #22D3EE">
  <ol>
    <li>Escolha “Jogador”.</li>
    <li>Use velocidade X 8 e velocidade Y 8.</li>
    <li>Deixe o modo em Sempre.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A câmera acompanha o jogador suavemente e mantém o centro como alvo.</p>
</div>

## Regras

- Use Sempre para recalcular o alvo a cada quadro.
- Velocidades diferentes criam suavidades diferentes em X e Y.
- A referência é o centro real do objeto, sem usar a borda do sprite.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Centralizar câmera](./centralizar-camera) — Coloca o centro da câmera exatamente no centro do objeto.
- [Mudar posição X da câmera](./mudar-posicao-x-da-camera) — Altera apenas o centro horizontal da câmera.
- [Mudar posição Y da câmera](./mudar-posicao-y-da-camera) — Altera apenas o centro vertical da câmera.
- [Chacoalhar câmera](./chacoalhar-camera) — Sacode a visão da cena sem mudar o centro lógico da câmera.

<a class="node-back-link" href="./">← Ver todos os nós</a>
