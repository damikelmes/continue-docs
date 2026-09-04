---
title: "Quadro atual da animação"
description: "Retorna o quadro atual da animação com sprites."
---

<div class="node-page-kicker" style="--node-page-color: #4ADE80">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #4ADE80">
  <span class="node-title-icon"><NodeIcon type="plain" icon="film" color="#4ADE80" :size="26" /></span>
  <span>Quadro atual da animação</span>
</h1>

<p class="node-purpose">Retorna o quadro atual da animação com sprites.</p>

## O que retorna

O primeiro quadro é 1. Sem quadros de animação, retorna 0.

## Como escrever

<div class="expression-token" style="--expression-color: #4ADE80"><code>jogador.animation_frame</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #4ADE80">
  <section class="expression-example">
    <strong>1. Consultar o quadro</strong>
    <pre><code>jogador.animation_frame</code></pre>
    <p>Em Comparar valores, compare com 3 para reconhecer o terceiro quadro.</p>
  </section>
  <section class="expression-example">
    <strong>2. Outra instância</strong>
    <pre><code>inimigo.instance_2.animation_frame</code></pre>
    <p>Consulta a segunda instância de Inimigo.</p>
  </section>
  <section class="expression-example">
    <strong>3. Índice começando em zero</strong>
    <pre><code>math.max(0, jogador.animation_frame - 1)</code></pre>
    <p>Calcula um índice a partir de zero sem ficar negativo.</p>
  </section>
</div>

## Regras

- Não é a contagem de quadros do jogo; é o quadro da animação do objeto.
- Um quadro pode permanecer ativo por várias atualizações. Controle a repetição da ação se precisar reagir uma única vez.

## Expressões relacionadas

- [Progresso da animação de propriedades](./progresso-da-animacao-de-propriedades) — `porta.property_animation_progress`
- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`
- [Centro Y do objeto](./objeto-centro-y) — `jogador.center_y`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
