---
title: "Escala do objeto"
description: "Retorna o multiplicador de escala atual da instância."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="expand-outline" color="#A78BFA" :size="26" /></span>
  <span>Escala do objeto</span>
</h1>

<p class="node-purpose">Retorna o multiplicador de escala atual da instância.</p>

## O que retorna

Retorna o multiplicador de escala atual da instância.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>jogador.scale</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Ler escala do objeto</strong>
    <pre><code>jogador.scale</code></pre>
    <p>Lê escala do objeto da primeira instância de Jogador que existe na cena.</p>
  </section>
  <section class="expression-example">
    <strong>2. Copiar a escala</strong>
    <pre><code>jogador.scale</code></pre>
    <p>Use como valor final para deixar outro objeto do mesmo tamanho proporcional de Jogador.</p>
  </section>
  <section class="expression-example">
    <strong>3. Criar um efeito maior</strong>
    <pre><code>explosao.scale * 1.5</code></pre>
    <p>Calcula uma escala 50% maior que a escala atual de Explosão.</p>
  </section>
</div>

## Regras

- Troque `jogador` pelo identificador do objeto escolhido no seletor de expressões.
- Use `jogador.instance_2.scale` para ler a segunda instância. A numeração começa em 1.
- Se o objeto ou a instância não existir naquele momento, o valor retornado será `0`.

## Expressões relacionadas

- [Quadro atual da animação](./quadro-atual-da-animacao) — `jogador.animation_frame`
- [Progresso da animação de propriedades](./progresso-da-animacao-de-propriedades) — `porta.property_animation_progress`
- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
