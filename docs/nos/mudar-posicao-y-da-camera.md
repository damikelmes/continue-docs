---
title: "Mudar posição Y da câmera"
description: "Altera apenas o centro vertical da câmera."
---

<div class="node-page-kicker" style="--node-page-color: #38BDF8">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Câmera</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #38BDF8">
  <span class="node-title-icon"><NodeIcon type="action-set-camera-y" icon="arrow-down-circle-outline" color="#38BDF8" :size="26" /></span>
  <span>Mudar posição Y da câmera</span>
</h1>

<p class="node-purpose">Altera apenas o centro vertical da câmera.</p>

## Para que serve

Define ou ajusta a coordenada Y lógica da câmera sem mudar seu X.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Operação** | Definir como, Somar, Subtrair, Multiplicar ou Dividir. |
| **Posição Y** | Coordenada ou expressão aplicada ao centro Y da câmera. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #38BDF8">
  <ol>
    <li>Use Definir como com 500 ao iniciar a fase.</li>
    <li>Execute Uma única vez no fluxo de início.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O centro vertical da câmera passa a ser Y = 500.</p>
</div>

## Regras

- O valor representa o centro da câmera, não a borda superior.
- Somar e Subtrair partem da posição atual.
- Uma ação de câmera seguindo objeto pode sobrescrever o valor no quadro seguinte.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Câmera suave](./camera-suave) — Faz a câmera acompanhar um objeto com suavidade.
- [Centralizar câmera](./centralizar-camera) — Coloca o centro da câmera exatamente no centro do objeto.
- [Mudar posição X da câmera](./mudar-posicao-x-da-camera) — Altera apenas o centro horizontal da câmera.
- [Chacoalhar câmera](./chacoalhar-camera) — Sacode a visão da cena sem mudar o centro lógico da câmera.

<a class="node-back-link" href="./">← Ver todos os nós</a>
