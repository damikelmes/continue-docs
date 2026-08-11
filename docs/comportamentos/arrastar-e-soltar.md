---
title: "Arrastar e soltar"
description: "Permite mover o objeto diretamente com o dedo."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #38BDF8">
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Interação</span>
  </span>
</div>

<h1 class="behavior-page-title" style="--behavior-page-color: #38BDF8">
  <span class="behavior-title-icon"><BehaviorIcon type="drag-drop" color="#38BDF8" :size="26" /></span>
  <span>Arrastar e soltar</span>
</h1>

<p class="behavior-purpose">Permite mover o objeto diretamente com o dedo.</p>

## Para que serve

Adiciona arraste pronto para itens, peças, cartões e objetos de interface. O ponto que foi tocado permanece sob o dedo durante o movimento.

## Campos

<div class="doc-field-list" style="--doc-field-color: #38BDF8">
  <div class="doc-field-item">
    <strong>Configuração</strong>
    <p>Não possui campos: basta ativar o comportamento e tocar no objeto.</p>
  </div>
</div>

## Exemplo

<div class="behavior-example" style="--behavior-page-color: #38BDF8">
  <ol>
    <li>Adicione Arrastar e soltar ao objeto “Peça”.</li>
    <li>Inicie o jogo e pressione qualquer ponto da peça.</li>
    <li>Deslize o dedo e solte na nova posição.</li>
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> A peça acompanha o dedo sem saltar para que o centro fique no ponto tocado.</p>
</div>

## Regras

- O arraste começa quando o toque alcança a área do objeto.
- A distância entre o ponto tocado e o centro é preservada durante o movimento.
- Ao soltar o dedo, a instância permanece na última posição.

## Comportamentos relacionados

- [Mover até o toque](./mover-ate-o-toque) — Move o objeto suavemente até a posição tocada.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
