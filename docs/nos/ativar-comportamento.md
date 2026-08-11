---
title: "Ativar comportamento"
description: "Ativa ou desativa um comportamento do objeto."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-icon"><NodeIcon type="action-set-behavior-enabled" icon="power-outline" color="#60A5FA" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Comportamentos</span>
  </span>
</div>

# Ativar comportamento

<p class="node-purpose">Ativa ou desativa um comportamento do objeto.</p>

## Para que serve

Liga e desliga comportamentos durante o jogo sem removê-los da configuração do objeto.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Comportamento** | Comportamento do objeto que será alterado. |
| **Estado** | Ativado ou desativado. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #60A5FA">
  <ol>
    <li>Escolha “Jogador” e o comportamento Gravidade.</li>
    <li>Desative ao entrar em uma escada e ative ao sair.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A gravidade deixa de atuar na escada e volta ao final dela.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- O comportamento precisa estar adicionado ao objeto.
- Desativar não apaga as configurações do comportamento.
- Alguns estados internos podem continuar do ponto anterior quando o comportamento for reativado.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- Nenhum nó relacionado nesta categoria.

<a class="node-back-link" href="./">← Ver todos os nós</a>
