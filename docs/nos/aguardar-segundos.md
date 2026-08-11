---
title: "Aguardar segundos"
description: "Espera um tempo antes de continuar o fluxo."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-icon"><NodeIcon type="condition-wait-seconds" icon="timer-outline" color="#A78BFA" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Lógica e tempo</span>
  </span>
</div>

# Aguardar segundos

<p class="node-purpose">Espera um tempo antes de continuar o fluxo.</p>

## Para que serve

Cria atrasos entre ações sem travar a atualização do restante do jogo.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Tempo de espera** | Duração em segundos; aceita valor decimal ou expressão. |

## Exemplo

<div class="node-example" style="--node-page-color: #A78BFA">
  <ol>
    <li>Depois de mostrar “Preparar”, aguarde 1,5 s.</li>
    <li>Conecte abaixo a ação que mostra “Já!”.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A segunda ação só executa após 1,5 segundo.</p>
</div>

## Regras

- Somente o ramo conectado abaixo espera; o restante do jogo continua atualizando.
- O tempo precisa ser maior que zero.
- Este nó não possui a opção Resultado esperado.

## Nós relacionados

- [Comparar números](./comparar-numeros) — Compara dois números ou expressões.

<a class="node-back-link" href="./">← Ver todos os nós</a>
