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

| Campo | O que configurar |
| --- | --- |
| **Largura e altura** | Tamanho base da forma em pixels. |
| **Arredondamento** | Raio dos cantos do retângulo. |
| **Cor e opacidade do preenchimento** | Aparência da parte interna da forma. |
| **Borda** | Ativa ou desativa o contorno. |
| **Cor, largura e opacidade da borda** | Aparência do contorno quando ele estiver ativado. |

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
