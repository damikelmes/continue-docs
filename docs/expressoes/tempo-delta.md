---
title: "Delta time"
description: "Retorna o tempo, em segundos, usado pela atualização atual."
---

<div class="node-page-kicker" style="--node-page-color: #2DD4BF">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Tempo e desempenho</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #2DD4BF">
  <span class="node-title-icon"><NodeIcon type="plain" icon="time-outline" color="#2DD4BF" /></span>
  <span>Delta time</span>
</h1>

<p class="node-purpose">Retorna o tempo, em segundos, usado pela atualização atual.</p>

## O que retorna

Uma pequena fração de segundo que acompanha o tempo real entre atualizações.

## Como escrever

<div class="expression-token" style="--expression-color: #2DD4BF"><code>time.delta</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #2DD4BF">
  <section class="expression-example">
    <strong>1. Mover por segundo</strong>
    <pre><code>120 * time.delta</code></pre>
    <p>Transforma 120 pixels por segundo na distância correta para esta atualização.</p>
  </section>
  <section class="expression-example">
    <strong>2. Girar por segundo</strong>
    <pre><code>90 * time.delta</code></pre>
    <p>Transforma 90 graus por segundo no giro correto para esta atualização.</p>
  </section>
  <section class="expression-example">
    <strong>3. Contador independente do FPS</strong>
    <pre><code>relogio.variable.tempo + time.delta</code></pre>
    <p>Soma o tempo real da atualização à variável numérica Tempo do objeto Relógio.</p>
  </section>
</div>

## Regras

- Use em mudanças executadas continuamente para que a velocidade não dependa do FPS.
- Não multiplique novamente por delta quando a ação ou comportamento já informa que trabalha em pixels por segundo.

## Expressões relacionadas

- [Tempo decorrido da cena](./tempo-decorrido) — `time.elapsed`
- [Quadros por segundo](./quadros-por-segundo) — `game.fps`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
