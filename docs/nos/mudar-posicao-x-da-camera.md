---
title: "Mudar posição X da câmera"
description: "Altera apenas o centro horizontal da câmera."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-icon"><NodeIcon type="action-set-camera-x" icon="arrow-forward-circle-outline" color="#60A5FA" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Câmera</span>
  </span>
</div>

# Mudar posição X da câmera

<p class="node-purpose">Altera apenas o centro horizontal da câmera.</p>

## Para que serve

Define ou ajusta a coordenada X lógica da câmera sem mudar seu Y.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Operação** | Definir como, Somar, Subtrair, Multiplicar ou Dividir. |
| **Posição X** | Coordenada ou expressão aplicada ao centro X da câmera. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #60A5FA">
  <ol>
    <li>Use Somar com 100 ao entrar em uma área.</li>
    <li>Execute Uma única vez.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O centro da câmera avança 100 px para a direita.</p>
</div>

## Regras

- O valor representa o centro da câmera, não a borda esquerda.
- Somar e Subtrair partem da posição atual.
- Uma ação de câmera seguindo objeto pode sobrescrever o valor no quadro seguinte.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Câmera suave](./camera-suave) — Faz a câmera acompanhar um objeto com suavidade.
- [Centralizar câmera](./centralizar-camera) — Coloca o centro da câmera exatamente no centro do objeto.
- [Mudar posição Y da câmera](./mudar-posicao-y-da-camera) — Altera apenas o centro vertical da câmera.
- [Chacoalhar câmera](./chacoalhar-camera) — Sacode a visão da cena sem mudar o centro lógico da câmera.

<a class="node-back-link" href="./">← Ver todos os nós</a>
