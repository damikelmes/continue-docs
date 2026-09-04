---
title: "Centro X do objeto"
description: "Retorna o centro horizontal real da instância, considerando seu tamanho."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="expression-object-x" icon="contract-outline" color="#A78BFA" /></span>
  <span>Centro X do objeto</span>
</h1>

<p class="node-purpose">Retorna o centro horizontal real da instância, considerando seu tamanho.</p>

## O que retorna

Retorna o centro horizontal real da instância, considerando seu tamanho.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>jogador.center_x</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Ler centro x do objeto</strong>
    <pre><code>jogador.center_x</code></pre>
    <p>Lê centro x do objeto da primeira instância de Jogador que existe na cena.</p>
  </section>
  <section class="expression-example">
    <strong>2. Centralizar a câmera no objeto</strong>
    <pre><code>jogador.center_x</code></pre>
    <p>Use no campo X de Mudar posição X da câmera para levar o centro horizontal da câmera até Jogador.</p>
  </section>
  <section class="expression-example">
    <strong>3. Centralizar na câmera</strong>
    <pre><code>camera.x - jogador.center_x</code></pre>
    <p>Mostra a diferença horizontal entre o centro da câmera e o centro do jogador.</p>
  </section>
</div>

## Regras

- Troque `jogador` pelo identificador do objeto escolhido no seletor de expressões.
- Use `jogador.instance_2.center_x` para ler a segunda instância. A numeração começa em 1.
- Se o objeto ou a instância não existir naquele momento, o valor retornado será `0`.
- É a escolha mais segura quando você quer centralizar objetos de larguras diferentes.

## Expressões relacionadas

- [Quadro atual da animação](./quadro-atual-da-animacao) — `jogador.animation_frame`
- [Progresso da animação de propriedades](./progresso-da-animacao-de-propriedades) — `porta.property_animation_progress`
- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro Y do objeto](./objeto-centro-y) — `jogador.center_y`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
