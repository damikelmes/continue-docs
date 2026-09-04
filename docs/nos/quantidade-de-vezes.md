---
title: "Quantidade de vezes"
description: "Repete os nós conectados pela quantidade escolhida."
---

<div class="node-page-kicker" style="--node-page-color: #22D3EE">
  <span class="node-page-meta">
    <span class="node-kind">REPETIÇÃO</span>
    <span class="node-category-name">Repetições</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #22D3EE">
  <span class="node-title-icon"><NodeIcon type="repeat-count" icon="repeat-outline" color="#22D3EE" /></span>
  <span>Quantidade de vezes</span>
</h1>

<p class="node-purpose">Repete os nós conectados pela quantidade escolhida.</p>

## Para que serve

Executa um trecho do fluxo várias vezes usando um número fixo ou um valor obtido do jogo.

## Campos

<div class="doc-field-list" style="--doc-field-color: #22D3EE">
  <div class="doc-field-item">
    <strong>Origem do valor</strong>
    <p>Número fixo, largura do objeto, altura do objeto, largura da câmera ou quantidade de instâncias.</p>
  </div>
  <div class="doc-field-item">
    <strong>Quantidade ou expressão</strong>
    <p>Número de repetições ou expressão numérica.</p>
  </div>
  <div class="doc-field-item">
    <strong>Objeto</strong>
    <p>Aparece quando a origem depende de um objeto.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #22D3EE">
  <ol>
    <li>Escolha Número fixo e quantidade 3.</li>
    <li>Conecte Criar objeto abaixo do nó.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O objeto é criado três vezes.</p>
</div>

## Regras

- A repetição afeta somente os nós conectados abaixo dela.
- O valor final é convertido em uma quantidade inteira válida.
- Evite quantidades muito grandes, pois todas as execuções consomem processamento.

## Nós relacionados

- Nenhum nó relacionado nesta categoria.

<a class="node-back-link" href="./">← Ver todos os nós</a>
