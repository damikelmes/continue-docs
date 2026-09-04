---
title: "Rotacionar câmera"
description: "Gira a visão do jogo ao redor do centro da câmera."
---

<div class="node-page-kicker" style="--node-page-color: #38BDF8">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Câmera</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #38BDF8">
  <span class="node-title-icon"><NodeIcon type="action-rotate-camera" icon="camera-reverse-outline" color="#38BDF8" :size="26" /></span>
  <span>Rotacionar câmera</span>
</h1>

<p class="node-purpose">Gira a visão do jogo ao redor do centro da câmera.</p>

## Para que serve

Gira a visão do jogo ao redor do centro da câmera.

## Campos

<div class="doc-field-list" style="--doc-field-color: #38BDF8">
  <div class="doc-field-item">
    <strong>Rotação</strong>
    <p>Ângulo em graus.</p>
  </div>
  <div class="doc-field-item">
    <strong>Operação</strong>
    <p>Definir, somar, subtrair, multiplicar ou dividir, conforme o efeito desejado.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #38BDF8">
  <ol>
    <li>Escolha Definir como e rotação 15.</li>
    <li>Execute uma vez para inclinar a visão.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A câmera gira 15° ao redor do seu centro.</p>
</div>

## Regras

- Não muda a rotação dos objetos nem de suas colisões.
- Os limites visíveis mudam com a rotação; confira as expressões das bordas da câmera.

## Nós relacionados

- [Câmera suave](./camera-suave) — Faz a câmera acompanhar um objeto com suavidade.
- [Centralizar câmera](./centralizar-camera) — Coloca o centro da câmera exatamente no centro do objeto.
- [Mudar posição X da câmera](./mudar-posicao-x-da-camera) — Altera apenas o centro horizontal da câmera.
- [Mudar posição Y da câmera](./mudar-posicao-y-da-camera) — Altera apenas o centro vertical da câmera.

<a class="node-back-link" href="./">← Ver todos os nós</a>
