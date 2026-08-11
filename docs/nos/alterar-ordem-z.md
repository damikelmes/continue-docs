---
title: "Alterar ordem Z"
description: "Muda a ordem em que o objeto é desenhado."
---

<div class="node-page-kicker" style="--node-page-color: #818CF8">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Aparência</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #818CF8">
  <span class="node-title-icon"><NodeIcon type="action-set-object-z-index" icon="layers-outline" color="#818CF8" :size="26" /></span>
  <span>Alterar ordem Z</span>
</h1>

<p class="node-purpose">Muda a ordem em que o objeto é desenhado.</p>

## Para que serve

Coloca um objeto na frente ou atrás de outros objetos da mesma cena.

## Campos

<div class="doc-field-list" style="--doc-field-color: #818CF8">
  <div class="doc-field-item">
    <strong>Objeto de destino</strong>
    <p>Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer.</p>
  </div>
  <div class="doc-field-item">
    <strong>Ordem Z</strong>
    <p>Número usado para ordenar o desenho.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Sempre, Uma única vez, Quantidade ou Por tempo.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #818CF8">
  <ol>
    <li>Escolha “Jogador”.</li>
    <li>Defina a ordem Z como 20 ao entrar em uma ponte.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O jogador passa a ser desenhado sobre objetos com ordem Z menor.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- Valores maiores são desenhados na frente de valores menores.
- A ordem Z não altera a posição X ou Y.
- Objetos com o mesmo valor mantêm a ordem interna de desenho.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Trocar sprite](./trocar-sprite) — Troca a imagem exibida pelo objeto.
- [Trocar animação](./trocar-animacao) — Reproduz uma animação de sprites pelo nome.
- [Reproduzir animação de propriedades](./reproduzir-animacao-de-propriedades) — Inicia ou continua uma animação de propriedades.
- [Recomeçar animação de propriedades](./recomecar-animacao-de-propriedades) — Reinicia uma animação de propriedades no primeiro quadro.

<a class="node-back-link" href="./">← Ver todos os nós</a>
