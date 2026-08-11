---
title: "Forma"
description: "Desenha um retângulo configurável sem precisar de sprite."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #FB923C">
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Visual e animação</span>
  </span>
</div>

<h1 class="behavior-page-title" style="--behavior-page-color: #FB923C">
  <span class="behavior-title-icon"><BehaviorIcon type="shape" color="#FB923C" :size="26" /></span>
  <span>Forma</span>
</h1>

<p class="behavior-purpose">Desenha um retângulo configurável sem precisar de sprite.</p>

## Para que serve

Cria objetos visuais simples e leves para cenários, fundos, plataformas, interfaces e protótipos.

## Campos

<div class="doc-field-list" style="--doc-field-color: #FB923C">
  <div class="doc-field-item">
    <strong>Largura e altura</strong>
    <p>Tamanho base da forma em pixels.</p>
  </div>
  <div class="doc-field-item">
    <strong>Arredondamento</strong>
    <p>Raio dos cantos do retângulo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Cor e opacidade do preenchimento</strong>
    <p>Aparência da parte interna da forma.</p>
  </div>
  <div class="doc-field-item">
    <strong>Borda</strong>
    <p>Ativa ou desativa o contorno.</p>
  </div>
  <div class="doc-field-item">
    <strong>Cor, largura e opacidade da borda</strong>
    <p>Aparência do contorno quando ele estiver ativado.</p>
  </div>
</div>

## Exemplo

<div class="behavior-example" style="--behavior-page-color: #FB923C">
  <ol>
    <li>Crie um objeto “Plataforma” e adicione o comportamento Forma.</li>
    <li>Use 180 px de largura, 24 px de altura e cantos de 4 px.</li>
    <li>Escolha preenchimento cinza e uma borda mais clara de 1 px.</li>
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> A cena mostra uma plataforma retangular sem precisar importar uma imagem.</p>
</div>

## Regras

- A largura e a altura da instância também podem ser ajustadas no editor ou por ações.
- Opacidade zero deixa aquela parte invisível.
- Para colisões, adicione também o comportamento Colisão.

## Comportamentos relacionados

- [Sprite](./sprite) — Adiciona imagens nomeadas para representar o objeto.
- [Animação com sprites](./animacao-com-sprites) — Reproduz uma sequência de sprites como uma animação.
- [Animação de propriedades](./animacao-de-propriedades) — Anima valores do objeto com keyframes organizados por nome.
- [Crescer ao pressionar](./crescer-ao-pressionar) — Muda a escala do objeto quando ele recebe um toque.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
