---
title: "Ângulo do movimento"
description: "Retorna a direção do movimento atual entre 0 e 360 graus."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="plain" icon="navigate-outline" color="#A78BFA" /></span>
  <span>Ângulo do movimento</span>
</h1>

<p class="node-purpose">Retorna a direção do movimento atual entre 0 e 360 graus.</p>

## O que retorna

Retorna a direção do movimento atual entre 0 e 360 graus.

## Como escrever

<div class="expression-token" style="--expression-color: #A78BFA"><code>jogador.movement_angle</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: #A78BFA">
  <section class="expression-example">
    <strong>1. Ler ângulo do movimento</strong>
    <pre><code>jogador.movement_angle</code></pre>
    <p>Lê ângulo do movimento da primeira instância de Jogador que existe na cena.</p>
  </section>
  <section class="expression-example">
    <strong>2. Apontar um sprite para o movimento</strong>
    <pre><code>jogador.movement_angle</code></pre>
    <p>Use como rotação para orientar o sprite na mesma direção em que Jogador se move.</p>
  </section>
  <section class="expression-example">
    <strong>3. Lançar algo na direção oposta</strong>
    <pre><code>jogador.movement_angle + 180</code></pre>
    <p>Calcula o ângulo contrário ao movimento atual.</p>
  </section>
</div>

## Regras

- Troque `jogador` pelo identificador do objeto escolhido no seletor de expressões.
- Use `jogador.instance_2.movement_angle` para ler a segunda instância. A numeração começa em 1.
- Se o objeto ou a instância não existir naquele momento, o valor retornado será `0`.
- `0°` aponta para a direita, `90°` para baixo, `180°` para a esquerda e `270°` para cima.
- Um objeto parado retorna `0`.

## Expressões relacionadas

- [Quadro atual da animação](./quadro-atual-da-animacao) — `jogador.animation_frame`
- [Progresso da animação de propriedades](./progresso-da-animacao-de-propriedades) — `porta.property_animation_progress`
- [Posição X do objeto](./objeto-posicao-x) — `jogador.x`
- [Posição Y do objeto](./objeto-posicao-y) — `jogador.y`
- [Centro X do objeto](./objeto-centro-x) — `jogador.center_x`

<a class="node-back-link" href="./">← Ver todas as expressões</a>
