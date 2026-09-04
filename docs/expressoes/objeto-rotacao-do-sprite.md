---
title: "Rotação do sprite"
description: "Retorna a rotação visual adicional aplicada somente ao sprite, em graus."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="sync-outline" color="#A78BFA" /></span>
  <span>Rotação do sprite</span>
</h1>

<p class="node-purpose">Retorna a rotação visual adicional aplicada somente ao sprite, em graus.</p>

## O que retorna

Retorna a rotação visual adicional aplicada somente ao sprite, em graus.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>jogador.sprite_rotation</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Ler rotação do sprite</strong>
    <pre><code>jogador.sprite_rotation</code></pre>
    <p>Lê rotação do sprite da primeira instância de Jogador que existe na cena.</p>
  </section>
  <section class="expression-example">
    <strong>2. Copiar a rotação visual</strong>
    <pre><code>jogador.sprite_rotation</code></pre>
    <p>Use para deixar outro sprite com a mesma rotação visual de Jogador.</p>
  </section>
  <section class="expression-example">
    <strong>3. Combinar rotações</strong>
    <pre><code>jogador.rotation + jogador.sprite_rotation</code></pre>
    <p>Soma a rotação física do objeto e a rotação adicional do sprite.</p>
  </section>
</div>

## Regras

- Troque `jogador` pelo identificador do objeto escolhido no seletor de expressões.
- Use `jogador.instance_2.sprite_rotation` para ler a segunda instância. A numeração começa em 1.
- Se o objeto ou a instância não existir naquele momento, o valor retornado será `0`.

## Expressões relacionadas

- [Quadro atual da animação](./quadro-atual-da-animacao) — `jogador.animation_frame`
- [Progresso da animação de propriedades](./progresso-da-animacao-de-propriedades) — `porta.property_animation_progress`
- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
