---
title: "Executar script"
description: "Executa um script visual salvo na biblioteca."
---

<div class="node-page-kicker" style="--node-page-color: #4ADE80">
  <span class="node-page-meta">
    <span class="node-kind">SCRIPT</span>
    <span class="node-category-name">Scripts da biblioteca</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #4ADE80">
  <span class="node-title-icon"><NodeIcon type="run-library-script" icon="code-slash" color="#4ADE80" :size="26" /></span>
  <span>Executar script</span>
</h1>

<p class="node-purpose">Executa um script visual salvo na biblioteca.</p>

## Para que serve

Reaproveita o mesmo fluxo em diferentes pontos do Script da cena sem duplicar todos os nós.

## Campos

<div class="doc-field-list" style="--doc-field-color: #4ADE80">
  <div class="doc-field-item">
    <strong>Script</strong>
    <p>Nome do script salvo na biblioteca que será executado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #4ADE80">
  <ol>
    <li>Crie o script “Receber dano” na biblioteca.</li>
    <li>No Script da cena, escolha Executar script e selecione “Receber dano”.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Todos os nós do script Receber dano são executados naquele ponto do fluxo.</p>
</div>

## Regras

- Este nó aparece no Script da cena e no Script global, não dentro de outro script da biblioteca.
- O script escolhido precisa existir.
- As condições e conexões da rotina chamada também controlam sua execução.

## Nós relacionados

- Nenhum nó relacionado nesta categoria.

<a class="node-back-link" href="./">← Ver todos os nós</a>
