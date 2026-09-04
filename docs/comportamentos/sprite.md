---
title: "Sprite"
description: "Adiciona imagens nomeadas para representar o objeto."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #A78BFA">
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Visual e animação</span>
  </span>
</div>

<h1 class="behavior-page-title" style="--behavior-page-color: #A78BFA">
  <span class="behavior-title-icon"><BehaviorIcon type="sprite" color="#A78BFA" /></span>
  <span>Sprite</span>
</h1>

<p class="behavior-purpose">Adiciona imagens nomeadas para representar o objeto.</p>

## Para que serve

Guarda as imagens que podem ser exibidas pelo objeto. Os sprites também servem como quadros para o comportamento Animação com sprites.

## Campos

<div class="doc-field-list" style="--doc-field-color: #A78BFA">
  <div class="doc-field-item">
    <strong>Sprites</strong>
    <p>Lista das imagens disponíveis para o objeto.</p>
  </div>
  <div class="doc-field-item">
    <strong>Nome</strong>
    <p>Nome usado para identificar a imagem no editor, nas animações e nos scripts.</p>
  </div>
  <div class="doc-field-item">
    <strong>Imagem</strong>
    <p>Arquivo visual escolhido para aquele sprite.</p>
  </div>
</div>

## Exemplo

<div class="behavior-example" style="--behavior-page-color: #A78BFA">
  <ol>
    <li>Adicione o comportamento Sprite ao objeto “Jogador”.</li>
    <li>Crie os sprites “Parado 1”, “Andando 1” e “Andando 2”.</li>
    <li>Use esses nomes ao montar uma animação de caminhada.</li>
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> O jogador passa a ter imagens organizadas que podem ser exibidas ou usadas em animações.</p>
</div>

## Regras

- Use nomes claros e diferentes para encontrar cada sprite com facilidade.
- Se um sprite usado por uma animação for removido, revise os quadros daquela animação.
- O tamanho da instância controla a largura e a altura exibidas na cena.

## Comportamentos relacionados

- [Emitir partículas](./emitir-particulas) — Cria efeitos como fumaça, fogo, chuva e faíscas.
- [Animação com sprites](./animacao-com-sprites) — Reproduz uma sequência de sprites como uma animação.
- [Animação de propriedades](./animacao-de-propriedades) — Anima valores do objeto com keyframes organizados por nome.
- [Crescer ao pressionar](./crescer-ao-pressionar) — Muda a escala do objeto quando ele recebe um toque.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
