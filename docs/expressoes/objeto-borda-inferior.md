---
title: "Borda inferior do objeto"
description: "Retorna a coordenada da extremidade inferior atual da instância."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="arrow-down-outline" color="#A78BFA" :size="26" /></span>
  <span>Borda inferior do objeto</span>
</h1>

<p class="node-purpose">Retorna a coordenada da extremidade inferior atual da instância.</p>

## O que retorna

Retorna a coordenada da extremidade inferior atual da instância.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>jogador.bottom</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Ler borda inferior do objeto</strong>
    <pre><code>jogador.bottom</code></pre>
    <p>Lê borda inferior do objeto da primeira instância de Jogador que existe na cena.</p>
  </section>
  <section class="expression-example">
    <strong>2. Colocar um efeito abaixo</strong>
    <pre><code>jogador.bottom + 8</code></pre>
    <p>Use como Y para posicionar um efeito 8 pixels abaixo de Jogador.</p>
  </section>
  <section class="expression-example">
    <strong>3. Comparar com a câmera</strong>
    <pre><code>inimigo.bottom</code></pre>
    <p>No nó Comparar valores, compare esta expressão com camera.bottom usando a opção Maior que.</p>
  </section>
</div>

## Regras

- Troque `jogador` pelo identificador do objeto escolhido no seletor de expressões.
- Use `jogador.instance_2.bottom` para ler a segunda instância. A numeração começa em 1.
- Se o objeto ou a instância não existir naquele momento, o valor retornado será `0`.
- A rotação não altera esse valor; a borda acompanha a posição e a altura do objeto.

## Expressões relacionadas

- [Quadro atual da animação](./quadro-atual-da-animacao) — `jogador.animation_frame`
- [Progresso da animação de propriedades](./progresso-da-animacao-de-propriedades) — `porta.property_animation_progress`
- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
