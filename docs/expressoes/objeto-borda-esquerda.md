---
title: "Borda esquerda do objeto"
description: "Retorna a coordenada da extremidade esquerda atual da instância."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="arrow-back-outline" color="#A78BFA" :size="26" /></span>
  <span>Borda esquerda do objeto</span>
</h1>

<p class="node-purpose">Retorna a coordenada da extremidade esquerda atual da instância.</p>

## O que retorna

Retorna a coordenada da extremidade esquerda atual da instância.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>jogador.left</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Ler borda esquerda do objeto</strong>
    <pre><code>jogador.left</code></pre>
    <p>Lê borda esquerda do objeto da primeira instância de Jogador que existe na cena.</p>
  </section>
  <section class="expression-example">
    <strong>2. Criar antes da borda</strong>
    <pre><code>plataforma.left - 16</code></pre>
    <p>Coloca algo 16 pixels antes da borda esquerda de Plataforma.</p>
  </section>
  <section class="expression-example">
    <strong>3. Comparar com a câmera</strong>
    <pre><code>inimigo.left</code></pre>
    <p>No nó Comparar valores, compare esta expressão com camera.left usando a opção Menor que.</p>
  </section>
</div>

## Regras

- Troque `jogador` pelo identificador do objeto escolhido no seletor de expressões.
- Use `jogador.instance_2.left` para ler a segunda instância. A numeração começa em 1.
- Se o objeto ou a instância não existir naquele momento, o valor retornado será `0`.
- A rotação não altera esse valor; a borda acompanha a posição e a largura do objeto.

## Expressões relacionadas

- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`
- [Centro Y do objeto](./objeto-centro-y) — `jogador.center_y`
- [Borda direita do objeto](./objeto-borda-direita) — `jogador.right`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
