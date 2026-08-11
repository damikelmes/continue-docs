---
title: "Toque X na tela"
description: "Retorna a posição X direta do toque na tela do aparelho."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="expression-touch-x" icon="phone-portrait-outline" color="#FB923C" :size="26" /></span>
  <span>Toque X na tela</span>
</h1>

<p class="node-purpose">Retorna a posição X direta do toque na tela do aparelho.</p>

## O que retorna

A coordenada X da tela, sem aplicar a posição nem o zoom da câmera.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>touch.screen_x</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Posicionar uma interface</strong>
    <pre><code>touch.screen_x</code></pre>
    <p>Use para alinhar um elemento de interface ao dedo na horizontal.</p>
  </section>
  <section class="expression-example">
    <strong>2. Detectar a metade da tela</strong>
    <pre><code>touch.screen_x &lt; camera.width / 2</code></pre>
    <p>Ajuda a distinguir um toque no lado esquerdo da tela.</p>
  </section>
  <section class="expression-example">
    <strong>3. Criar uma margem visual</strong>
    <pre><code>touch.screen_x + 12</code></pre>
    <p>Desloca uma dica de interface 12 pixels para a direita do dedo.</p>
  </section>
</div>

## Regras

- Use `touch.x` para objetos do mundo e `touch.screen_x` para interface ligada diretamente à tela.

## Expressões relacionadas

- [Toque X no mundo](./toque-x-no-mundo) — `touch.x`
- [Toque Y no mundo](./toque-y-no-mundo) — `touch.y`
- [Toque Y na tela](./toque-y-na-tela) — `touch.screen_y`
- [Toque está pressionado](./toque-esta-pressionado) — `touch.is_down`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
