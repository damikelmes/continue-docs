---
title: "Variável numérica do objeto"
description: "Retorna o valor atual de uma variável numérica da instância."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="calculator-outline" color="#A78BFA" :size="26" /></span>
  <span>Variável numérica do objeto</span>
</h1>

<p class="node-purpose">Retorna o valor atual de uma variável numérica da instância.</p>

## O que retorna

O número guardado na variável escolhida da instância.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>jogador.variable.vida</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Ler a vida</strong>
    <pre><code>jogador.variable.vida</code></pre>
    <p>Lê a variável numérica Vida da primeira instância de Jogador.</p>
  </section>
  <section class="expression-example">
    <strong>2. Impedir vida negativa</strong>
    <pre><code>math.clamp(jogador.variable.vida - 10, 0, 100)</code></pre>
    <p>Calcula a vida depois de 10 de dano e limita o resultado entre 0 e 100.</p>
  </section>
  <section class="expression-example">
    <strong>3. Ler uma cópia específica</strong>
    <pre><code>jogador.instance_2.variable.vida</code></pre>
    <p>Lê a variável Vida da segunda instância de Jogador.</p>
  </section>
</div>

## Regras

- Somente variáveis do tipo número aparecem no seletor de expressões.
- Troque `jogador` e `vida` pelos identificadores escolhidos no editor.
- Se o objeto, a instância ou a variável não existir, o valor retornado será `0`.

## Expressões relacionadas

- [Quadro atual da animação](./quadro-atual-da-animacao) — `jogador.animation_frame`
- [Progresso da animação de propriedades](./progresso-da-animacao-de-propriedades) — `porta.property_animation_progress`
- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
