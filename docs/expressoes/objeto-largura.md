---
title: "Largura do objeto"
description: "Retorna a largura atual da instância em pixels."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="resize-outline" color="#A78BFA" /></span>
  <span>Largura do objeto</span>
</h1>

<p class="node-purpose">Retorna a largura atual da instância em pixels.</p>

## O que retorna

Retorna a largura atual da instância em pixels.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>jogador.width</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Ler largura do objeto</strong>
    <pre><code>jogador.width</code></pre>
    <p>Lê largura do objeto da primeira instância de Jogador que existe na cena.</p>
  </section>
  <section class="expression-example">
    <strong>2. Encontrar metade da largura</strong>
    <pre><code>plataforma.width / 2</code></pre>
    <p>Calcula a metade da largura atual de Plataforma.</p>
  </section>
  <section class="expression-example">
    <strong>3. Criar com uma margem</strong>
    <pre><code>parede.width + 32</code></pre>
    <p>Gera um valor 32 pixels maior que a largura de Parede.</p>
  </section>
</div>

## Regras

- Troque `jogador` pelo identificador do objeto escolhido no seletor de expressões.
- Use `jogador.instance_2.width` para ler a segunda instância. A numeração começa em 1.
- Se o objeto ou a instância não existir naquele momento, o valor retornado será `0`.

## Expressões relacionadas

- [Quadro atual da animação](./quadro-atual-da-animacao) — `jogador.animation_frame`
- [Progresso da animação de propriedades](./progresso-da-animacao-de-propriedades) — `porta.property_animation_progress`
- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
