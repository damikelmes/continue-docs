---
title: "Barrar luz"
description: "Faz o objeto bloquear luz e projetar sua área de colisão."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #94A3B8">
  <span class="behavior-page-icon"><BehaviorIcon type="light-blocker" color="#94A3B8" :size="38" /></span>
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Iluminação</span>
  </span>
</div>

# Barrar luz

<p class="behavior-purpose">Faz o objeto bloquear luz e projetar sua área de colisão.</p>

## Para que serve

Transforma o objeto em um obstáculo para luzes que projetam sombra. Também permite controlar quanto de luz atravessa, quanto entra no objeto e se ele recebe iluminação normalmente.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Bloqueio de luz** | Porcentagem bloqueada; 100% impede toda a luz de atravessar. |
| **Entrada de luz** | Quantidade de luz que pode alcançar o interior do objeto. |
| **Receber luz** | Define se a aparência do próprio objeto é afetada pelas luzes da cena. |
| **Comprimento da sombra** | Distância da projeção; 0 usa o cálculo automático. |

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
