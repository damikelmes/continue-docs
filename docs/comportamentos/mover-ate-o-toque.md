---
title: "Mover até o toque"
description: "Move o objeto suavemente até a posição tocada."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #34D399">
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Interação</span>
  </span>
</div>

<h1 class="behavior-page-title" style="--behavior-page-color: #34D399">
  <span class="behavior-title-icon"><BehaviorIcon type="move-to-touch" color="#34D399" :size="26" /></span>
  <span>Mover até o toque</span>
</h1>

<p class="behavior-purpose">Move o objeto suavemente até a posição tocada.</p>

## Para que serve

Cria controles de apontar e mover. O objeto acelera, freia e troca de destino sem tremores quando a pessoa toca rapidamente em pontos diferentes.

## Campos

<div class="doc-field-list" style="--doc-field-color: #34D399">
  <div class="doc-field-item">
    <strong>Velocidade</strong>
    <p>Velocidade máxima em pixels por segundo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Aceleração</strong>
    <p>Rapidez com que o objeto ganha velocidade. Use 0 para resposta instantânea.</p>
  </div>
  <div class="doc-field-item">
    <strong>Desaceleração</strong>
    <p>Rapidez com que freia ao chegar ao destino. Use 0 para parada instantânea.</p>
  </div>
  <div class="doc-field-item">
    <strong>Continuar seguindo o dedo</strong>
    <p>Quando ativado, atualiza o destino enquanto o dedo desliza; começa desativado.</p>
  </div>
</div>

## Exemplo

<div class="behavior-example" style="--behavior-page-color: #34D399">
  <ol>
    <li>Adicione Mover até o toque ao objeto “Personagem”.</li>
    <li>Use velocidade 260 px/s, aceleração 900 px/s² e desaceleração 1200 px/s².</li>
    <li>Ative Continuar seguindo o dedo se quiser controlar o caminho arrastando o toque.</li>
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> O personagem muda de direção com suavidade e para exatamente no destino atual.</p>
</div>

## Regras

- Com Continuar seguindo o dedo desativado, cada novo toque define um novo destino fixo.
- Com a opção ativada, o destino acompanha o dedo enquanto o toque estiver em movimento.
- A desaceleração ajuda a impedir que o objeto ultrapasse e volte tremendo ao redor do destino.
- Valores muito baixos de aceleração deixam a resposta propositalmente mais lenta.

## Comportamentos relacionados

- [Arrastar e soltar](./arrastar-e-soltar) — Permite mover o objeto diretamente com o dedo.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
