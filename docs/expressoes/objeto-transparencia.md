---
title: "Transparência do objeto"
description: "Retorna a transparência atual da instância, de 0 a 100."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="contrast-outline" color="#A78BFA" :size="26" /></span>
  <span>Transparência do objeto</span>
</h1>

<p class="node-purpose">Retorna a transparência atual da instância, de 0 a 100.</p>

## O que retorna

Retorna a transparência atual da instância, de 0 a 100.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>jogador.transparency</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Ler transparência do objeto</strong>
    <pre><code>jogador.transparency</code></pre>
    <p>Lê transparência do objeto da primeira instância de Jogador que existe na cena.</p>
  </section>
  <section class="expression-example">
    <strong>2. Copiar a transparência</strong>
    <pre><code>fantasma.transparency</code></pre>
    <p>Use para deixar outro objeto com a mesma transparência de Fantasma.</p>
  </section>
  <section class="expression-example">
    <strong>3. Aumentar sem passar do limite</strong>
    <pre><code>math.clamp(fantasma.transparency + 10, 0, 100)</code></pre>
    <p>Soma 10 e mantém o resultado dentro do intervalo permitido.</p>
  </section>
</div>

## Regras

- Troque `jogador` pelo identificador do objeto escolhido no seletor de expressões.
- Use `jogador.instance_2.transparency` para ler a segunda instância. A numeração começa em 1.
- Se o objeto ou a instância não existir naquele momento, o valor retornado será `0`.
- `0` significa totalmente visível e `100` significa totalmente transparente.

## Expressões relacionadas

- [Quadro atual da animação](./quadro-atual-da-animacao) — `jogador.animation_frame`
- [Progresso da animação de propriedades](./progresso-da-animacao-de-propriedades) — `porta.property_animation_progress`
- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
