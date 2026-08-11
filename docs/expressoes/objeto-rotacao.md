---
title: "Rotação do objeto"
description: "Retorna a rotação atual do objeto e da colisão, em graus."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="refresh-outline" color="#A78BFA" :size="26" /></span>
  <span>Rotação do objeto</span>
</h1>

<p class="node-purpose">Retorna a rotação atual do objeto e da colisão, em graus.</p>

## O que retorna

Retorna a rotação atual do objeto e da colisão, em graus.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>jogador.rotation</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Ler rotação do objeto</strong>
    <pre><code>jogador.rotation</code></pre>
    <p>Lê rotação do objeto da primeira instância de Jogador que existe na cena.</p>
  </section>
  <section class="expression-example">
    <strong>2. Copiar a direção visual</strong>
    <pre><code>nave.rotation</code></pre>
    <p>Use como rotação de um projétil para lançá-lo com o mesmo ângulo de Nave.</p>
  </section>
  <section class="expression-example">
    <strong>3. Somar um ajuste</strong>
    <pre><code>ponte.rotation + 90</code></pre>
    <p>Gera um ângulo perpendicular à rotação atual de Ponte.</p>
  </section>
</div>

## Regras

- Troque `jogador` pelo identificador do objeto escolhido no seletor de expressões.
- Use `jogador.instance_2.rotation` para ler a segunda instância. A numeração começa em 1.
- Se o objeto ou a instância não existir naquele momento, o valor retornado será `0`.

## Expressões relacionadas

- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`
- [Centro Y do objeto](./objeto-centro-y) — `jogador.center_y`
- [Borda esquerda do objeto](./objeto-borda-esquerda) — `jogador.left`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
