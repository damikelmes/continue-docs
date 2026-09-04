---
title: "Posição X do objeto"
description: "Retorna a posição X armazenada pela instância."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="expression-object-x" icon="remove-outline" color="#A78BFA" :size="26" /></span>
  <span>Posição X do objeto</span>
</h1>

<p class="node-purpose">Retorna a posição X armazenada pela instância.</p>

## O que retorna

Retorna a posição X armazenada pela instância.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>jogador.x</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Ler posição x do objeto</strong>
    <pre><code>jogador.x</code></pre>
    <p>Lê posição x do objeto da primeira instância de Jogador que existe na cena.</p>
  </section>
  <section class="expression-example">
    <strong>2. Criar algo ao lado do objeto</strong>
    <pre><code>bola.x + 48</code></pre>
    <p>Use como X de criação para colocar a nova instância 48 pixels à direita de Bola.</p>
  </section>
  <section class="expression-example">
    <strong>3. Ler uma instância específica</strong>
    <pre><code>inimigo.instance_2.x</code></pre>
    <p>Lê a posição X armazenada pela segunda instância de Inimigo.</p>
  </section>
</div>

## Regras

- Troque `jogador` pelo identificador do objeto escolhido no seletor de expressões.
- Use `jogador.instance_2.x` para ler a segunda instância. A numeração começa em 1.
- Se o objeto ou a instância não existir naquele momento, o valor retornado será `0`.
- Para alinhar pelo centro visual do objeto, prefira `.center_x`.

## Expressões relacionadas

- [Quadro atual da animação](./quadro-atual-da-animacao) — `jogador.animation_frame`
- [Progresso da animação de propriedades](./progresso-da-animacao-de-propriedades) — `porta.property_animation_progress`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`
- [Centro Y do objeto](./objeto-centro-y) — `jogador.center_y`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
