---
title: "Quantidade de instâncias"
description: "Retorna quantas instâncias de um objeto existem na cena."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="layers-outline" color="#A78BFA" :size="26" /></span>
  <span>Quantidade de instâncias</span>
</h1>

<p class="node-purpose">Retorna quantas instâncias de um objeto existem na cena.</p>

## O que retorna

Um número inteiro com a quantidade atual de instâncias do objeto escolhido.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>inimigo.instances</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Contar inimigos</strong>
    <pre><code>inimigo.instances</code></pre>
    <p>Retorna o total de instâncias de Inimigo existentes neste momento.</p>
  </section>
  <section class="expression-example">
    <strong>2. Verificar se todos foram derrotados</strong>
    <pre><code>inimigo.instances</code></pre>
    <p>No nó Comparar valores, compare esta expressão com 0 usando a opção Igual a.</p>
  </section>
  <section class="expression-example">
    <strong>3. Calcular quantos ainda podem nascer</strong>
    <pre><code>math.max(0, 10 - inimigo.instances)</code></pre>
    <p>Retorna quantas vagas faltam para alcançar um limite de 10 inimigos.</p>
  </section>
</div>

## Regras

- Troque `inimigo` pelo identificador do objeto escolhido.
- Essa expressão conta o grupo inteiro e não aceita `.instance_2`.
- A contagem muda quando instâncias são criadas ou excluídas.

## Expressões relacionadas

- [Quadro atual da animação](./quadro-atual-da-animacao) — `jogador.animation_frame`
- [Progresso da animação de propriedades](./progresso-da-animacao-de-propriedades) — `porta.property_animation_progress`
- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
