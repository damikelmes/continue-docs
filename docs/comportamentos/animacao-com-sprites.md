---
title: "Animação com sprites"
description: "Reproduz uma sequência de sprites como uma animação."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #4ADE80">
  <span class="behavior-page-icon"><BehaviorIcon type="animation" color="#4ADE80" :size="38" /></span>
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Visual e animação</span>
  </span>
</div>

# Animação com sprites

<p class="behavior-purpose">Reproduz uma sequência de sprites como uma animação.</p>

## Para que serve

Cria animações quadro a quadro usando as imagens cadastradas no comportamento Sprite. É útil para caminhada, ataque, dano e qualquer efeito desenhado em vários quadros.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Animações** | Lista de animações nomeadas disponíveis para o objeto. |
| **Quadros** | Sprites reproduzidos na ordem em que aparecem na lista. |
| **FPS** | Quantidade de quadros mostrados por segundo. |
| **Repetir** | Quando ativado, volta ao primeiro quadro depois do último. |

## Exemplo

<div class="behavior-example" style="--behavior-page-color: #4ADE80">
  <ol>
    <li>Crie a animação “Andando”.</li>
    <li>Adicione quatro sprites de caminhada na ordem correta.</li>
    <li>Defina 10 FPS e ative a repetição.</li>
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> Ao ativar “Andando”, os quatro sprites são reproduzidos continuamente a 10 quadros por segundo.</p>
</div>

## Regras

- O objeto precisa ter o comportamento Sprite e as imagens usadas nos quadros.
- FPS maior deixa a sequência mais rápida; FPS menor deixa mais lenta.
- Use os nós de animação para trocar, pausar ou controlar a animação durante o jogo.

## Comportamentos relacionados

- [Sprite](./sprite) — Adiciona imagens nomeadas para representar o objeto.
- [Animação de propriedades](./animacao-de-propriedades) — Anima valores do objeto com keyframes organizados por nome.
- [Crescer ao pressionar](./crescer-ao-pressionar) — Muda a escala do objeto quando ele recebe um toque.
- [Forma](./forma) — Desenha um retângulo configurável sem precisar de sprite.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
