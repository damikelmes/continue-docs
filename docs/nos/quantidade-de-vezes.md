---
title: "Quantidade de vezes"
description: "Repete os nós conectados pela quantidade escolhida."
---

<div class="node-page-kicker" style="--node-page-color: #22D3EE">
  <span class="node-page-icon"><NodeIcon type="repeat-count" icon="repeat-outline" color="#22D3EE" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">REPETIÇÃO</span>
    <span class="node-category-name">Repetições</span>
  </span>
</div>

# Quantidade de vezes

<p class="node-purpose">Repete os nós conectados pela quantidade escolhida.</p>

## Para que serve

Executa um trecho do fluxo várias vezes usando um número fixo ou um valor obtido do jogo.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Origem do valor** | Número fixo, largura do objeto, altura do objeto, largura da câmera ou quantidade de instâncias. |
| **Quantidade ou expressão** | Número de repetições ou expressão numérica. |
| **Objeto** | Aparece quando a origem depende de um objeto. |

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
