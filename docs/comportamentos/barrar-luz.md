---
title: "Barrar luz"
description: "Faz o objeto bloquear luz e projetar sua área de colisão."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #94A3B8">
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Iluminação</span>
  </span>
</div>

<h1 class="behavior-page-title" style="--behavior-page-color: #94A3B8">
  <span class="behavior-title-icon"><BehaviorIcon type="light-blocker" color="#94A3B8" /></span>
  <span>Barrar luz</span>
</h1>

<p class="behavior-purpose">Faz o objeto bloquear luz e projetar sua área de colisão.</p>

## Para que serve

Transforma o objeto em um obstáculo para luzes que projetam sombra. Também permite controlar quanto de luz atravessa, quanto entra no objeto e se ele recebe iluminação normalmente.

## Campos

<div class="doc-field-list" style="--doc-field-color: #94A3B8">
  <div class="doc-field-item">
    <strong>Bloqueio de luz</strong>
    <p>Porcentagem bloqueada; 100% impede toda a luz de atravessar.</p>
  </div>
  <div class="doc-field-item">
    <strong>Luz que entra no objeto</strong>
    <p>Porcentagem da iluminação normal que aparece sobre ele. Aparece quando Receber luz normalmente está ativado.</p>
  </div>
  <div class="doc-field-item">
    <strong>Receber luz normalmente</strong>
    <p>Mantém a aparência do próprio objeto afetada pelas luzes enquanto ele projeta sombra.</p>
  </div>
  <div class="doc-field-item">
    <strong>Comprimento da sombra</strong>
    <p>Distância da projeção; 0 usa o cálculo automático.</p>
  </div>
</div>

## Exemplo

<div class="behavior-example" style="--behavior-page-color: #94A3B8">
  <ol>
    <li>Adicione Barrar luz a uma parede com Colisão.</li>
    <li>Use bloqueio de 100%, ative Receber luz e deixe o comprimento em 0.</li>
    <li>Aproxime uma luz que tenha sombras ativadas.</li>
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> A parede recebe luz na face visível, impede a passagem e projeta uma sombra baseada em toda a sua colisão.</p>
</div>

## Regras

- A sombra acompanha a área de colisão atual do objeto, incluindo mudanças de largura, altura e rotação.
- A projeção fica por baixo do objeto que bloqueia a luz e começa na própria área bloqueada.
- O final da sombra perde opacidade de forma gradual para evitar um corte escuro.
- Este comportamento só produz sombra quando uma luz próxima está configurada para projetá-la.

## Comportamentos relacionados

- [Emitir luz](./emitir-luz) — Faz o objeto iluminar a cena e projetar sombras.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
