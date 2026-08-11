---
title: "Variáveis do objeto"
description: "Guarda valores separados em cada instância do objeto."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #60A5FA">
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Dados do objeto</span>
  </span>
</div>

<h1 class="behavior-page-title" style="--behavior-page-color: #60A5FA">
  <span class="behavior-title-icon"><BehaviorIcon type="object-variables" color="#60A5FA" :size="26" /></span>
  <span>Variáveis do objeto</span>
</h1>

<p class="behavior-purpose">Guarda valores separados em cada instância do objeto.</p>

## Para que serve

Permite que cada cópia de um objeto mantenha seus próprios dados, como vida, dano, estado, munição ou identificação.

## Campos

<div class="doc-field-list" style="--doc-field-color: #60A5FA">
  <div class="doc-field-item">
    <strong>Nome</strong>
    <p>Identificador usado para encontrar a variável em expressões e scripts.</p>
  </div>
  <div class="doc-field-item">
    <strong>Tipo</strong>
    <p>Forma do valor, como número, texto ou verdadeiro/falso.</p>
  </div>
  <div class="doc-field-item">
    <strong>Valor inicial</strong>
    <p>Valor que cada nova instância recebe quando é criada.</p>
  </div>
</div>

## Exemplo

<div class="behavior-example" style="--behavior-page-color: #60A5FA">
  <ol>
    <li>No objeto “Inimigo”, crie a variável numérica “Vida”.</li>
    <li>Defina o valor inicial como 100.</li>
    <li>Ao receber dano, altere apenas a variável da instância atingida.</li>
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> Cada inimigo mantém sua própria quantidade de vida, mesmo que todos usem o mesmo objeto.</p>
</div>

## Regras

- Cada instância recebe uma cópia própria do valor inicial.
- Use nomes curtos e claros, sem criar duas variáveis com a mesma função.
- Ao escolher uma instância específica no script, somente os dados daquela cópia devem ser lidos ou alterados.

## Comportamentos relacionados

- Nenhum outro comportamento nesta categoria.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
