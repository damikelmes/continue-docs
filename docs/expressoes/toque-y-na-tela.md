---
title: "Toque Y na tela"
description: "Retorna a posição Y direta do toque na tela do aparelho."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="expression-touch-y" icon="phone-portrait-outline" color="#FB923C" :size="26" /></span>
  <span>Toque Y na tela</span>
</h1>

<p class="node-purpose">Retorna a posição Y direta do toque na tela do aparelho.</p>

## O que retorna

A coordenada Y da tela, sem aplicar a posição nem o zoom da câmera.

## Como escrever

<div class="expression-token" style="--expression-color: #FB923C"><code>touch.screen_y</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #FB923C">
  <section class="expression-example">
    <strong>1. Posicionar uma interface</strong>
    <pre><code>touch.screen_y</code></pre>
    <p>Use para alinhar um elemento de interface ao dedo na vertical.</p>
  </section>
  <section class="expression-example">
    <strong>2. Detectar a metade da tela</strong>
    <pre><code>touch.screen_y &lt; camera.height / 2</code></pre>
    <p>Ajuda a distinguir um toque na metade superior da tela.</p>
  </section>
  <section class="expression-example">
    <strong>3. Mostrar uma dica acima do dedo</strong>
    <pre><code>touch.screen_y - 20</code></pre>
    <p>Desloca uma dica de interface 20 pixels para cima.</p>
  </section>
</div>

## Regras

- Use `touch.y` para objetos do mundo e `touch.screen_y` para interface ligada diretamente à tela.

## Expressões relacionadas

- [Toque X no mundo](./toque-x-no-mundo) — `touch.x`
- [Toque Y no mundo](./toque-y-no-mundo) — `touch.y`
- [Toque X na tela](./toque-x-na-tela) — `touch.screen_x`
- [Toque está pressionado](./toque-esta-pressionado) — `touch.is_down`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
