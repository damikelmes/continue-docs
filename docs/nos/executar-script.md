---
title: "Executar script"
description: "Executa um script visual salvo na biblioteca."
---

<div class="node-page-kicker" style="--node-page-color: #4ADE80">
  <span class="node-page-icon"><NodeIcon type="run-library-script" icon="code-slash" color="#4ADE80" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">SCRIPT</span>
    <span class="node-category-name">Scripts da biblioteca</span>
  </span>
</div>

# Executar script

<p class="node-purpose">Executa um script visual salvo na biblioteca.</p>

## Para que serve

Reaproveita o mesmo fluxo em diferentes pontos do Script da cena sem duplicar todos os nós.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Script** | Nome do script salvo na biblioteca que será executado. |

## Exemplo

<div class="node-example" style="--node-page-color: #4ADE80">
  <ol>
    <li>Crie o script “Receber dano” na biblioteca.</li>
    <li>No Script da cena, escolha Executar script e selecione “Receber dano”.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Todos os nós do script Receber dano são executados naquele ponto do fluxo.</p>
</div>

## Regras

- Este nó aparece no Script da cena e não dentro de outro script da biblioteca.
- O script escolhido precisa existir.
- O fluxo retorna ao ponto seguinte depois que o script chamado termina.

## Nós relacionados

- Nenhum nó relacionado nesta categoria.

<a class="node-back-link" href="./">← Ver todos os nós</a>
