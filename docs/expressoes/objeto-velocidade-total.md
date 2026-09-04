---
title: "Velocidade total do objeto"
description: "Retorna a velocidade total medida, sem separar os eixos, em pixels por segundo."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="speedometer-outline" color="#A78BFA" :size="26" /></span>
  <span>Velocidade total do objeto</span>
</h1>

<p class="node-purpose">Retorna a velocidade total medida, sem separar os eixos, em pixels por segundo.</p>

## O que retorna

Retorna a velocidade total medida, sem separar os eixos, em pixels por segundo.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>jogador.speed</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Ler velocidade total do objeto</strong>
    <pre><code>jogador.speed</code></pre>
    <p>Lê velocidade total do objeto da primeira instância de Jogador que existe na cena.</p>
  </section>
  <section class="expression-example">
    <strong>2. Controlar uma animação</strong>
    <pre><code>jogador.speed</code></pre>
    <p>Use para escolher uma animação ou intensidade de efeito conforme a velocidade real.</p>
  </section>
  <section class="expression-example">
    <strong>3. Limitar um valor visual</strong>
    <pre><code>math.clamp(jogador.speed / 300, 0, 1)</code></pre>
    <p>Converte velocidades de 0 a 300 em um progresso entre 0 e 1.</p>
  </section>
</div>

## Regras

- Troque `jogador` pelo identificador do objeto escolhido no seletor de expressões.
- Use `jogador.instance_2.speed` para ler a segunda instância. A numeração começa em 1.
- Se o objeto ou a instância não existir naquele momento, o valor retornado será `0`.
- A velocidade total nunca é negativa.

## Expressões relacionadas

- [Quadro atual da animação](./quadro-atual-da-animacao) — `jogador.animation_frame`
- [Progresso da animação de propriedades](./progresso-da-animacao-de-propriedades) — `porta.property_animation_progress`
- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
