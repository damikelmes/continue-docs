---
title: "Variável numérica global"
description: "Lê uma variável numérica compartilhada entre as cenas do jogo."
---

<div class="node-page-kicker" style="--node-page-color: #F4C54B">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Variáveis globais</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #F4C54B">
  <span class="node-title-icon"><NodeIcon type="plain" icon="globe-outline" color="#F4C54B" /></span>
  <span>Variável numérica global</span>
</h1>

<p class="node-purpose">Lê uma variável numérica compartilhada entre as cenas do jogo.</p>

## O que retorna

O número atual da variável global escolhida. Crie a variável no projeto antes de usá-la.

## Como escrever

<div class="expression-token" style="--expression-color: #F4C54B"><code>global.variable.pontos</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #F4C54B">
  <section class="expression-example">
    <strong>1. Consultar pontos</strong>
    <pre><code>global.variable.pontos</code></pre>
    <p>Lê a variável Pontos. Use em Comparar valores para verificar uma meta.</p>
  </section>
  <section class="expression-example">
    <strong>2. Calcular recompensa</strong>
    <pre><code>global.variable.pontos + 50</code></pre>
    <p>Calcula a pontuação com mais 50. Para guardar, use Alterar variável global.</p>
  </section>
  <section class="expression-example">
    <strong>3. Calcular uma porcentagem</strong>
    <pre><code>global.variable.moedas / 100 * 100</code></pre>
    <p>Calcula a porcentagem de uma meta de 100 moedas.</p>
  </section>
</div>

## Regras

- Use o seletor para inserir o nome correto.
- Só variáveis do tipo Número entram em expressões numéricas.
- Ler não altera a variável nem salva a partida no aparelho.

## Expressões relacionadas

- Nenhuma expressão relacionada nesta categoria.

<a class="node-back-link" href="./">← Ver todas as expressões</a>
