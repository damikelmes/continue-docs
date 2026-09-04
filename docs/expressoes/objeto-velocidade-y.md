---
title: "Velocidade Y do objeto"
description: "Retorna a velocidade vertical medida, em pixels por segundo."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="expression-object-y" icon="speedometer-outline" color="#A78BFA" :size="26" /></span>
  <span>Velocidade Y do objeto</span>
</h1>

<p class="node-purpose">Retorna a velocidade vertical medida, em pixels por segundo.</p>

## O que retorna

Retorna a velocidade vertical medida, em pixels por segundo.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>jogador.velocity_y</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Ler velocidade y do objeto</strong>
    <pre><code>jogador.velocity_y</code></pre>
    <p>Lê velocidade y do objeto da primeira instância de Jogador que existe na cena.</p>
  </section>
  <section class="expression-example">
    <strong>2. Copiar o impulso vertical</strong>
    <pre><code>jogador.velocity_y</code></pre>
    <p>Use para dar a outro objeto a mesma velocidade vertical de Jogador.</p>
  </section>
  <section class="expression-example">
    <strong>3. Detectar queda rápida</strong>
    <pre><code>jogador.velocity_y</code></pre>
    <p>No nó Comparar valores, compare esta expressão com 500 usando a opção Maior que.</p>
  </section>
</div>

## Regras

- Troque `jogador` pelo identificador do objeto escolhido no seletor de expressões.
- Use `jogador.instance_2.velocity_y` para ler a segunda instância. A numeração começa em 1.
- Se o objeto ou a instância não existir naquele momento, o valor retornado será `0`.
- No sistema de coordenadas da cena, valor positivo normalmente indica movimento para baixo.

## Expressões relacionadas

- [Quadro atual da animação](./quadro-atual-da-animacao) — `jogador.animation_frame`
- [Progresso da animação de propriedades](./progresso-da-animacao-de-propriedades) — `porta.property_animation_progress`
- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
