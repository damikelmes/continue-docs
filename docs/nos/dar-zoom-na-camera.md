---
title: "Dar zoom na câmera"
description: "Altera o nível de aproximação da câmera."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-icon"><NodeIcon type="action-set-camera-zoom" icon="search-outline" color="#A78BFA" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Câmera</span>
  </span>
</div>

# Dar zoom na câmera

<p class="node-purpose">Altera o nível de aproximação da câmera.</p>

## Para que serve

Mostra uma área maior ou menor da cena mantendo o centro lógico da câmera.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Zoom da câmera** | Multiplicador do zoom; 1 é o tamanho normal. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #A78BFA">
  <ol>
    <li>Defina o zoom como 1,5 ao entrar em uma sala pequena.</li>
    <li>Execute Uma única vez ao cruzar a entrada.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A cena aparece 50% mais próxima ao redor do mesmo centro.</p>
</div>

## Regras

- Zoom maior aproxima; zoom menor afasta.
- O zoom não muda a posição X ou Y do centro.
- Use valores maiores que zero.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Câmera suave](./camera-suave) — Faz a câmera acompanhar um objeto com suavidade.
- [Centralizar câmera](./centralizar-camera) — Coloca o centro da câmera exatamente no centro do objeto.
- [Mudar posição X da câmera](./mudar-posicao-x-da-camera) — Altera apenas o centro horizontal da câmera.
- [Mudar posição Y da câmera](./mudar-posicao-y-da-camera) — Altera apenas o centro vertical da câmera.

<a class="node-back-link" href="./">← Ver todos os nós</a>
