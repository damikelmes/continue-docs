---
title: "Comparar números"
description: "Compara dois números ou expressões."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-icon"><NodeIcon type="condition-compare-numbers" icon="git-compare-outline" color="#60A5FA" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Lógica e tempo</span>
  </span>
</div>

# Comparar números

<p class="node-purpose">Compara dois números ou expressões.</p>

## Para que serve

Cria decisões usando igualdade, diferença, maior, menor e suas variações.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Primeiro valor** | Número ou expressão do lado esquerdo. |
| **Comparação** | Igual, Maior, Menor, Igual ou maior, Igual ou menor ou Diferente. |
| **Segundo valor** | Número ou expressão do lado direito. |
| **Resultado esperado** | Ativado verifica a condição normal; desativado verifica o contrário. |

## Exemplo

<div class="node-example" style="--node-page-color: #60A5FA">
  <ol>
    <li>Use Score() como primeiro valor.</li>
    <li>Escolha Igual ou maior e use 100 como segundo valor.</li>
    <li>Conecte a ação que abre a próxima fase.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A próxima fase é aberta quando a pontuação chega a 100 ou mais.</p>
</div>

## Regras

- Os dois campos aceitam expressões numéricas.
- A comparação é refeita sempre que o fluxo chega ao nó.
- A forma negativa inverte o resultado completo da comparação.
- Somente os nós conectados abaixo continuam quando o resultado escolhido é verdadeiro.
- Desative “Resultado esperado” para usar a forma negativa da condição.

## Nós relacionados

- [Aguardar segundos](./aguardar-segundos) — Espera um tempo antes de continuar o fluxo.

<a class="node-back-link" href="./">← Ver todos os nós</a>
