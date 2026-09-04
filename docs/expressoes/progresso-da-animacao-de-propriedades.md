---
title: "Progresso da animação de propriedades"
description: "Consulta o progresso da animação de propriedades entre 0 e 100."
---

<div class="node-page-kicker" style="--node-page-color: #2DD4BF">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #2DD4BF">
  <span class="node-title-icon"><NodeIcon type="plain" icon="play-forward-outline" color="#2DD4BF" /></span>
  <span>Progresso da animação de propriedades</span>
</h1>

<p class="node-purpose">Consulta o progresso da animação de propriedades entre 0 e 100.</p>

## O que retorna

Uma porcentagem do trecho atual da animação. Quando não há animação ativa, retorna 0.

## Como escrever

<div class="expression-token" style="--expression-color: #2DD4BF"><code>porta.property_animation_progress</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #2DD4BF">
  <section class="expression-example">
    <strong>1. Consultar progresso</strong>
    <pre><code>porta.property_animation_progress</code></pre>
    <p>Compare com 50 para verificar a metade da animação.</p>
  </section>
  <section class="expression-example">
    <strong>2. Converter para 0 a 1</strong>
    <pre><code>porta.property_animation_progress / 100</code></pre>
    <p>Usa o progresso como um fator de interpolação.</p>
  </section>
  <section class="expression-example">
    <strong>3. Arredondar progresso</strong>
    <pre><code>math.round(porta.property_animation_progress)</code></pre>
    <p>Retorna uma porcentagem inteira.</p>
  </section>
</div>

## Regras

- Pausar mantém o ponto da animação.
- Repetição e ida e volta afetam o progresso; não é um contador permanente de ciclos concluídos.

## Expressões relacionadas

- [Quadro atual da animação](./quadro-atual-da-animacao) — `jogador.animation_frame`
- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`
- [Centro Y do objeto](./objeto-centro-y) — `jogador.center_y`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
