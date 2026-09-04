---
title: "Animação de propriedades"
description: "Anima valores do objeto com keyframes organizados por nome."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #2DD4BF">
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Visual e animação</span>
  </span>
</div>

<h1 class="behavior-page-title" style="--behavior-page-color: #2DD4BF">
  <span class="behavior-title-icon"><BehaviorIcon type="property-animation" color="#2DD4BF" /></span>
  <span>Animação de propriedades</span>
</h1>

<p class="behavior-purpose">Anima valores do objeto com keyframes organizados por nome.</p>

## Para que serve

Permite criar várias animações com keyframes para posição, tamanho, escala, rotação, cor, transparência e outras propriedades numéricas, em um formato parecido com uma linha do tempo.

## Campos

<div class="doc-field-list" style="--doc-field-color: #2DD4BF">
  <div class="doc-field-item">
    <strong>Nome da animação</strong>
    <p>Identificador usado para ativar a animação pelos nós do script.</p>
  </div>
  <div class="doc-field-item">
    <strong>Duração</strong>
    <p>Tempo total da linha do tempo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Repetição</strong>
    <p>Executar uma vez, repetir ou repetir voltando.</p>
  </div>
  <div class="doc-field-item">
    <strong>Faixas</strong>
    <p>Propriedades que serão animadas, como X, Y, escala, rotação ou transparência.</p>
  </div>
  <div class="doc-field-item">
    <strong>Keyframes</strong>
    <p>Momento, valor e tipo de transição de cada ponto da animação.</p>
  </div>
</div>

## Exemplo

<div class="behavior-example" style="--behavior-page-color: #2DD4BF">
  <ol>
    <li>Crie uma animação chamada “Flutuar” com duração de 2 segundos.</li>
    <li>Na faixa Posição Y, mantenha o valor atual no início e use um valor 20 px acima no meio.</li>
    <li>Volte ao valor inicial no fim e escolha repetir voltando.</li>
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> Quando “Flutuar” for ativada, o objeto sobe e desce suavemente em uma repetição contínua.</p>
</div>

## Regras

- Criar a animação não a ativa automaticamente; ela pode ficar pronta para uso futuro.
- Use os nós próprios para ativar, reiniciar e pausar uma animação de propriedades.
- Cada animação pode ter várias faixas e cada faixa pode ter vários keyframes.
- Evite dois controles diferentes alterando a mesma propriedade ao mesmo tempo.

## Comportamentos relacionados

- [Emitir partículas](./emitir-particulas) — Cria efeitos como fumaça, fogo, chuva e faíscas.
- [Sprite](./sprite) — Adiciona imagens nomeadas para representar o objeto.
- [Animação com sprites](./animacao-com-sprites) — Reproduz uma sequência de sprites como uma animação.
- [Crescer ao pressionar](./crescer-ao-pressionar) — Muda a escala do objeto quando ele recebe um toque.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
