---
title: "Objeto clicado"
description: "Detecta uma vez cada novo toque no objeto."
---

<div class="node-page-kicker" style="--node-page-color: #F472B6">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Interação e toque</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #F472B6">
  <span class="node-title-icon"><NodeIcon type="condition-object-clicked" icon="finger-print-outline" color="#F472B6" /></span>
  <span>Objeto clicado</span>
</h1>

<p class="node-purpose">Detecta uma vez cada novo toque no objeto.</p>

## Para que serve

Executa um fluxo quando o dedo começa um toque sobre a área do objeto.

## Campos

<div class="doc-field-list" style="--doc-field-color: #F472B6">
  <div class="doc-field-item">
    <strong>Objeto</strong>
    <p>Objeto que será verificado.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Qualquer instância, Todas as instâncias ou uma instância específica.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Ativado verifica a condição normal; desativado verifica o contrário.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #F472B6">
  <ol>
    <li>Escolha o objeto “Botão iniciar”.</li>
    <li>Conecte abaixo a ação que troca de cena.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A ação executa uma vez quando o botão é tocado.</p>
</div>

## Regras

- Se nenhuma instância correspondente existir, a verificação do objeto será falsa, exceto na forma negativa.
- Cada novo toque gera uma ativação.
- Manter o dedo parado não repete o clique.
- Use Objeto pressionado para executar continuamente enquanto o dedo estiver segurando.
- Somente os nós conectados abaixo continuam quando o resultado escolhido é verdadeiro.
- Desative “Resultado esperado” para usar a forma negativa da condição.

## Nós relacionados

- [Objeto pressionado](./objeto-pressionado) — Permanece verdadeira enquanto o objeto estiver pressionado.
- [Dedo sobre o objeto](./dedo-sobre-o-objeto) — Verifica se a posição atual do dedo está sobre o objeto.
- [Objeto pressionado por um tempo](./objeto-pressionado-por-um-tempo) — Executa depois que o objeto permanece pressionado pelo tempo escolhido.
- [Objeto clicado X vezes](./objeto-clicado-x-vezes) — Executa quando o objeto recebe a quantidade de cliques escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
