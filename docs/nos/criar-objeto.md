---
title: "Criar objeto"
description: "Cria novas instâncias durante o jogo."
---

<div class="node-page-kicker" style="--node-page-color: #4ADE80">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #4ADE80">
  <span class="node-title-icon"><NodeIcon type="action-create-object" icon="cube-outline" color="#4ADE80" :size="26" /></span>
  <span>Criar objeto</span>
</h1>

<p class="node-purpose">Cria novas instâncias durante o jogo.</p>

## Para que serve

Adiciona cópias de um objeto à cena em uma posição, camada e ordem Z escolhidas.

## Campos

<div class="doc-field-list" style="--doc-field-color: #4ADE80">
  <div class="doc-field-item">
    <strong>Objeto</strong>
    <p>Tipo de objeto que será criado.</p>
  </div>
  <div class="doc-field-item">
    <strong>Camada</strong>
    <p>Camada onde a nova instância será colocada.</p>
  </div>
  <div class="doc-field-item">
    <strong>Posição X e Y</strong>
    <p>Centro da nova instância.</p>
  </div>
  <div class="doc-field-item">
    <strong>Ordem Z</strong>
    <p>Ordem de desenho inicial.</p>
  </div>
  <div class="doc-field-item">
    <strong>Quantidade</strong>
    <p>Número de instâncias criadas.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Sempre, Uma única vez, Quantidade ou Por tempo.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #4ADE80">
  <ol>
    <li>Escolha “Projétil”.</li>
    <li>Use X = PlayerX(), Y = PlayerY(), ordem Z = 5 e quantidade = 1.</li>
    <li>Execute Uma única vez por disparo.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Um projétil nasce no centro do jogador.</p>
</div>

## Regras

- O objeto e a camada precisam existir no projeto.
- Use Uma única vez ou Quantidade controlada para não criar instâncias a cada quadro.
- X e Y representam o centro da nova instância.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Excluir objeto](./excluir-objeto) — Remove instâncias da cena durante o jogo.

<a class="node-back-link" href="./">← Ver todos os nós</a>
