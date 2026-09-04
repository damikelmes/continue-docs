---
title: "Ordem Z do objeto"
description: "Retorna a ordem de desenho atual da instância."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="reorder-three-outline" color="#A78BFA" :size="26" /></span>
  <span>Ordem Z do objeto</span>
</h1>

<p class="node-purpose">Retorna a ordem de desenho atual da instância.</p>

## O que retorna

Retorna a ordem de desenho atual da instância.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>jogador.z</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Ler ordem z do objeto</strong>
    <pre><code>jogador.z</code></pre>
    <p>Lê ordem z do objeto da primeira instância de Jogador que existe na cena.</p>
  </section>
  <section class="expression-example">
    <strong>2. Desenhar um efeito logo acima</strong>
    <pre><code>jogador.z + 1</code></pre>
    <p>Use como ordem Z para deixar o efeito imediatamente à frente de Jogador.</p>
  </section>
  <section class="expression-example">
    <strong>3. Copiar a ordem de outro objeto</strong>
    <pre><code>cenario.z</code></pre>
    <p>Use para colocar outra instância na mesma ordem Z de Cenário.</p>
  </section>
</div>

## Regras

- Troque `jogador` pelo identificador do objeto escolhido no seletor de expressões.
- Use `jogador.instance_2.z` para ler a segunda instância. A numeração começa em 1.
- Se o objeto ou a instância não existir naquele momento, o valor retornado será `0`.

## Expressões relacionadas

- [Quadro atual da animação](./quadro-atual-da-animacao) — `jogador.animation_frame`
- [Progresso da animação de propriedades](./progresso-da-animacao-de-propriedades) — `porta.property_animation_progress`
- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
